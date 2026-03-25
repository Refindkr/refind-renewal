"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function RegisterPage({ params }: PageProps) {
  const t = useTranslations("auth.register");
  const router = useRouter();

  const [locale, setLocale] = useState("ko");
  params.then(({ locale: l }) => setLocale(l));

  const [form, setForm] = useState({
    name: "", email: "", password: "", confirmPassword: "", company: "", phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (form.password.length < 8) errs.password = t("errors.passwordTooShort");
    if (form.password !== form.confirmPassword) errs.confirmPassword = t("errors.passwordMismatch");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          company: form.company || undefined,
          phone: form.phone || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 409) setServerError(t("errors.emailExists"));
        else setServerError(data.error || "오류가 발생했습니다");
        return;
      }

      router.push(`/${locale}/auth/login?registered=true`);
    } catch {
      setServerError("서버 오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  };

  const field = (key: keyof typeof form, type = "text") => (
    <input
      type={type}
      value={form[key]}
      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      placeholder={t(`${key}Placeholder` as keyof ReturnType<typeof t>)}
      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 ${errors[key] ? "border-red-300" : "border-gray-200"}`}
    />
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md px-4 py-12">
        <div className="text-center mb-8">
          <span className="text-3xl font-bold text-primary-400">refind</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">{t("title")}</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 space-y-4">
          {serverError && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">{serverError}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("name")} *</label>
            {field("name")}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("email")} *</label>
            {field("email", "email")}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("password")} *</label>
            {field("password", "password")}
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("confirmPassword")} *</label>
            {field("confirmPassword", "password")}
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("company")}</label>
            {field("company")}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("phone")}</label>
            {field("phone", "tel")}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "처리 중..." : t("submit")}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            {t("hasAccount")}{" "}
            <Link href={`/${locale}/auth/login`} className="text-primary-400 font-medium hover:underline">
              {t("loginLink")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
