"use client";

import { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";

interface TopBannerFormData {
  message: string;
  href: string;
  isActive: boolean;
}

interface Props {
  locale: string;
  mode?: "create" | "edit";
  bannerId?: string;
  initialData?: Partial<TopBannerFormData>;
}

export default function TopBannerForm({ locale, mode = "create", bannerId, initialData }: Props) {
  const router = useRouter();
  const isEdit = mode === "edit";
  const listPath = "/admin/top-banner";

  const [form, setForm] = useState<TopBannerFormData>({
    message: initialData?.message ?? "",
    href: initialData?.href ?? "",
    isActive: initialData?.isActive ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(isEdit ? `/api/top-banner/${bannerId}` : "/api/top-banner", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "오류가 발생했습니다");
        return;
      }

      router.push(listPath, { locale });
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
        <label className="block text-sm font-medium text-gray-700 mb-2">배너 문구</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={2}
          placeholder="예: 첫 쇼핑을 지원하는 3,000원 할인 회원가입 쿠폰"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          링크 <span className="text-gray-400 font-normal">(선택)</span>
        </label>
        <input
          type="text"
          value={form.href}
          onChange={(e) => setForm({ ...form, href: e.target.value })}
          placeholder="https://... 또는 /notice1"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
        <p className="text-xs text-gray-400 mt-1">비워두면 클릭해도 이동하지 않습니다.</p>
      </div>

      <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
        <input
          type="checkbox"
          checked={form.isActive}
          onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
          className="mt-0.5 h-4 w-4 accent-primary-400"
        />
        <span>
          <span className="block text-sm font-medium text-gray-900">지금 노출</span>
          <span className="block text-xs text-gray-400 mt-0.5">
            체크하면 사이트 최상단에 노출됩니다. 여러 개를 켜두면 가장 최근 것 하나만 보여집니다.
          </span>
        </span>
      </label>

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors disabled:opacity-50"
        >
          {loading ? (isEdit ? "수정 중..." : "등록 중...") : isEdit ? "배너 수정" : "배너 등록"}
        </button>
        <Link
          href={listPath}
          className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
        >
          취소
        </Link>
      </div>
    </form>
  );
}
