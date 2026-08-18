"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";

interface Props {
  locale: string;
  type: "notice" | "cardNews";
}

export default function PostForm({ locale, type }: Props) {
  const router = useRouter();
  const apiPath = type === "notice" ? "/api/notice" : "/api/card-news";
  const listPath = type === "notice" ? `/${locale}/admin/notice` : `/${locale}/admin/card-news`;
  const label = type === "notice" ? "공지사항" : "카드뉴스";

  const [form, setForm] = useState({ slug: "", title: "", content: "", thumbnail: "", isExhibitionBanner: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [thumbUploading, setThumbUploading] = useState(false);

  async function handleThumbnailSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

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
      const res = await fetch(apiPath, {
        method: "POST",
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
          pattern="[a-z0-9]+(-[a-z0-9]+)*"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 font-mono text-sm"
        />
        <p className="text-xs text-gray-400 mt-1">영문 소문자, 숫자, 하이픈(-)만 사용 가능. 다른 글과 중복될 수 없습니다.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">제목</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
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
        <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="checkbox"
            checked={form.isExhibitionBanner}
            onChange={(e) => setForm({ ...form, isExhibitionBanner: e.target.checked })}
            className="mt-0.5 h-4 w-4 accent-primary-400"
          />
          <span>
            <span className="block text-sm font-medium text-gray-900">전시회 배너로 표시</span>
            <span className="block text-xs text-gray-400 mt-0.5">
              체크하면 홈페이지 히어로 영역에 이 공지사항이 전시회 배너 슬라이드로 노출됩니다. 여러 개를 체크하면 가장 최근 글이 노출됩니다.
            </span>
          </span>
        </label>
      )}

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors disabled:opacity-50"
        >
          {loading ? "등록 중..." : `${label} 등록`}
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
