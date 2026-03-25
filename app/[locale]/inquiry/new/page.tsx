"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function NewInquiryPage({ params }: PageProps) {
  const t = useTranslations("inquiry");
  const { data: session, status } = useSession();
  const router = useRouter();

  const [locale, setLocale] = useState<string>("");
  params.then(({ locale: l }) => setLocale(l));

  const [form, setForm] = useState({
    category: "product",
    subject: "",
    content: "",
    isPrivate: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (status === "loading") {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="pt-32 text-center">
        <p className="text-gray-600 mb-4">{t("loginRequired")}</p>
        <Link href={`/${locale}/auth/login`} className="text-primary-400 underline">
          로그인하기
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "오류가 발생했습니다");
        return;
      }

      router.push(`/${locale}/inquiry`);
    } catch {
      setError("서버 오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("form.title")}</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.category")}</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white"
            >
              <option value="product">{t("category.product")}</option>
              <option value="purchase">{t("category.purchase")}</option>
              <option value="as">{t("category.as")}</option>
              <option value="partnership">{t("category.partnership")}</option>
              <option value="other">{t("category.other")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.subject")}</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder={t("form.subjectPlaceholder")}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.content")}</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder={t("form.contentPlaceholder")}
              required
              rows={8}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="isPrivate"
              checked={form.isPrivate}
              onChange={(e) => setForm({ ...form, isPrivate: e.target.checked })}
              className="w-4 h-4 text-primary-400 rounded"
            />
            <label htmlFor="isPrivate" className="text-sm text-gray-700">{t("form.isPrivate")}</label>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors disabled:opacity-50"
            >
              {loading ? "처리 중..." : t("form.submit")}
            </button>
            <Link
              href={`/${locale}/inquiry`}
              className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
            >
              {t("form.cancel")}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
