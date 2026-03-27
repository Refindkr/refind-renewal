"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const otherLocale = locale === "ko" ? "en" : "ko";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const productLinks = [
    { href: `/${locale}/products/robot-hand`, label: t("robotHand") },
    { href: `/${locale}/products/collaborative-robot`, label: t("collaborativeRobot") },
    { href: `/${locale}/products/physical-ai`, label: t("physicalAI") },
    { href: `/${locale}/products/humanoid`, label: t("humanoid") },
    { href: `/${locale}/products/body-enhancement`, label: t("bodyEnhancement") },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              refind
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-black/5 ${
                  scrolled ? "text-gray-700" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("products")}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-100 py-2 w-52 z-50">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/about`}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-black/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/inquiry`}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-black/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("inquiry")}
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switch */}
            <Link
              href={switchPath}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                scrolled
                  ? "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}
            >
              {otherLocale === "en" ? "EN" : "한국어"}
            </Link>

            {session ? (
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm ${scrolled ? "text-gray-600" : "text-white/70"}`}
                >
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: `/${locale}` })}
                  className={`text-sm transition-colors ${
                    scrolled ? "text-gray-500 hover:text-red-500" : "text-white/60 hover:text-red-400"
                  }`}
                >
                  {t("logout")}
                </button>
              </div>
            ) : (
              <>
                <Link
                  href={`/${locale}/auth/login`}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {t("login")}
                </Link>
                <Link
                  href={`/${locale}/auth/register`}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    scrolled
                      ? "bg-gray-900 text-white hover:bg-gray-700"
                      : "bg-white text-black hover:bg-white/90"
                  }`}
                >
                  {t("register")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-6">
          <div className="space-y-1 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-3">
              {t("products")}
            </p>
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="space-y-1 mb-6">
            <Link
              href={`/${locale}/about`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/inquiry`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("inquiry")}
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link
              href={switchPath}
              className="text-sm text-gray-500 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {otherLocale === "en" ? "English" : "한국어"}
            </Link>
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: `/${locale}` })}
                className="text-sm text-red-500"
              >
                {t("logout")}
              </button>
            ) : (
              <div className="flex gap-3">
                <Link
                  href={`/${locale}/auth/login`}
                  className="text-sm text-gray-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("login")}
                </Link>
                <Link
                  href={`/${locale}/auth/register`}
                  className="text-sm bg-gray-900 text-white px-4 py-1.5 rounded-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("register")}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
