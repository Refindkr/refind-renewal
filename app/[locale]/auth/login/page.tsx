"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

function LoginForm({ locale }: { locale: string }) {
  const t = useTranslations("auth.login");
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (result?.error) {
      setError(t("error"));
      setLoading(false);
    } else {
      router.push(`/${locale}`);
      router.refresh();
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md px-4 py-12">
        <div className="text-center mb-8">
          <span className="text-3xl font-bold text-primary-400">refind</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">{t("title")}</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 space-y-4">
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">{error}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("email")}</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t("emailPlaceholder")}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("password")}</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder={t("passwordPlaceholder")}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors disabled:opacity-50"
          >
            {loading ? "처리 중..." : t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage({ params }: PageProps) {
  const [locale, setLocale] = useState("ko");
  params.then(({ locale: l }) => setLocale(l));

  return (
    <Suspense>
      <LoginForm locale={locale} />
    </Suspense>
  );
}
