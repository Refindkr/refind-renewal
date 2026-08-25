"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";

// Vercel 서버리스 함수 요청 본문 한도(~4.5MB)보다 여유 있게 설정 — /api/upload와 동일
const MAX_UPLOAD_SIZE = 4 * 1024 * 1024;

interface PostFormData {
  slug: string;
  title: string;
  content: string;
  thumbnail: string;
  isExhibitionBanner: boolean;
  bannerEyebrow: string;
  bannerSubtitle: string;
  bannerColor: string;
}

const DEFAULT_BANNER_COLOR = "#3a3a3a";

interface Props {
  locale: string;
  type: "notice" | "cardNews";
  mode?: "create" | "edit";
  postId?: string;
  initialData?: Partial<PostFormData>;
}

export default function PostForm({ locale, type, mode = "create", postId, initialData }: Props) {
  const router = useRouter();
  const apiPath = type === "notice" ? "/api/notice" : "/api/card-news";
  const listPath = type === "notice" ? `/${locale}/admin/notice` : `/${locale}/admin/card-news`;
  const label = type === "notice" ? "공지사항" : "카드뉴스";
  const isEdit = mode === "edit";

  const [form, setForm] = useState<PostFormData>({
    slug: initialData?.slug ?? "",
    title: initialData?.title ?? "",
    content: initialData?.content ?? "",
    thumbnail: initialData?.thumbnail ?? "",
    isExhibitionBanner: initialData?.isExhibitionBanner ?? false,
    bannerEyebrow: initialData?.bannerEyebrow ?? "",
    bannerSubtitle: initialData?.bannerSubtitle ?? "",
    bannerColor: initialData?.bannerColor || DEFAULT_BANNER_COLOR,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [thumbUploading, setThumbUploading] = useState(false);

  async function handleThumbnailSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    if (file.size > MAX_UPLOAD_SIZE) {
      setError("이미지 용량은 4MB 이하만 가능합니다");
      return;
    }

    setThumbUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) {
        setForm((f) => ({ ...f, thumbnail: data.url }));
      } else {
        setError(data.error || "업로드 실패");
      }
    } catch {
      setError("업로드 중 오류가 발생했습니다");
    } finally {
      setThumbUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(isEdit ? `${apiPath}/${postId}` : apiPath, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "오류가 발생했습니다");
        return;
      }

      router.push(listPath);
      router.refresh();
    } catch {
      setError("서버 오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          슬러그 (URL) <span className="text-gray-400 font-normal">— products.refind.kr/&lt;슬러그&gt;</span>
        </label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          placeholder={type === "notice" ? "notice1" : "card1"}
          required
          pattern="[A-Za-z0-9]+(-[A-Za-z0-9]+)*"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 font-mono text-sm"
        />
        <p className="text-xs text-gray-400 mt-1">영문, 숫자, 하이픈(-)만 사용 가능. 다른 글과 중복될 수 없습니다.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">제목</label>
        <textarea
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          rows={2}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
        />
        {type === "notice" && (
          <p className="text-xs text-gray-400 mt-1">
            Enter로 줄바꿈하면 전시회 배너로 표시될 때 그 위치에서 줄바꿈됩니다.
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          대표 이미지 <span className="text-gray-400 font-normal">(선택)</span>
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={form.thumbnail}
            onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
            placeholder="이미지를 업로드하거나 URL을 입력하세요"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <label className="shrink-0 px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
            {thumbUploading ? "업로드 중..." : "업로드"}
            <input type="file" accept="image/png,image/jpeg,image/gif,image/webp" onChange={handleThumbnailSelect} className="hidden" />
          </label>
        </div>
        {form.thumbnail && (
          <img src={form.thumbnail} alt="" className="mt-3 h-32 rounded-xl object-cover border border-gray-100" />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          내용 <span className="text-gray-400 font-normal">— 네이버 블로그 등에서 복사한 내용을 그대로 붙여넣을 수 있습니다</span>
        </label>
        <RichTextEditor content={form.content} onChange={(html) => setForm({ ...form, content: html })} />
      </div>

      {type === "notice" && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <label className="flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              checked={form.isExhibitionBanner}
              onChange={(e) => setForm({ ...form, isExhibitionBanner: e.target.checked })}
              className="mt-0.5 h-4 w-4 accent-primary-400"
            />
            <span>
              <span className="block text-sm font-medium text-gray-900">전시회 배너로 표시</span>
              <span className="block text-xs text-gray-400 mt-0.5">
                체크하면 홈페이지 히어로 영역에 이 공지사항이 전시회 배너 슬라이드로 노출됩니다. 여러 개를 체크하면 모두 순서대로 함께 노출됩니다.
              </span>
            </span>
          </label>
          {form.isExhibitionBanner && (
            <div className="px-4 pb-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">배너 상단 라벨</label>
                <input
                  type="text"
                  value={form.bannerEyebrow}
                  onChange={(e) => setForm({ ...form, bannerEyebrow: e.target.value })}
                  placeholder="예: EXHIBITION · 전시회 안내"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <p className="text-xs text-gray-400 mt-1">비워두면 기본 라벨(&quot;EXHIBITION · 전시회 안내&quot;)이 표시됩니다.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">배너 소개문구</label>
                <input
                  type="text"
                  value={form.bannerSubtitle}
                  onChange={(e) => setForm({ ...form, bannerSubtitle: e.target.value })}
                  placeholder="예: 리파인의 이번 전시회 소식을 확인해보세요"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <p className="text-xs text-gray-400 mt-1">비워두면 기본 안내문구가 표시됩니다.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">배경 톤</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={form.bannerColor}
                    onChange={(e) => setForm({ ...form, bannerColor: e.target.value })}
                    className="h-11 w-14 rounded-lg border border-gray-200 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={form.bannerColor}
                    onChange={(e) => setForm({ ...form, bannerColor: e.target.value })}
                    placeholder="#3a3a3a"
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 font-mono text-sm"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  메인 히어로의 검정 배경에 이 색이 은은하게 섞여서, 다른 슬라이드와 구분됩니다. 밝은 그레이 등 톤 조절 용도라 진한 색은 피하는 게 좋습니다.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors disabled:opacity-50"
        >
          {loading ? (isEdit ? "수정 중..." : "등록 중...") : isEdit ? `${label} 수정` : `${label} 등록`}
        </button>
        <a
          href={listPath}
          className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
        >
          취소
        </a>
      </div>
    </form>
  );
}
