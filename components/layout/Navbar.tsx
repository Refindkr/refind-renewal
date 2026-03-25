"use client";

import { useState } from "react";
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

  const otherLocale = locale === "ko" ? "en" : "ko";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const productLinks = [
    { href: `/${locale}/products/robot-hand`, label: t("robotHand") },
    { href: `/${locale}/products/collaborative-robot`, label: t("collaborativeRobot") },
    { href: `/${locale}/products/physical-ai`, label: t("physicalAI") },
    { href: `/${locale}/products/humanoid`, label: t("humanoid") },
    { href: `/${locale}/products/body-enhancement`, label: t("bodyEnhancement") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-400">refind</span>
            <span className="text-xs text-gray-500 hidden sm:block">리파인주식회사</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-gray-700 hover:text-primary-400 font-medium transition-colors flex items-center gap-1"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                {t("products")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-xl border border-gray-100 py-2 w-56 z-50"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary-400 hover:bg-primary-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={`/${locale}/about`} className="px-4 py-2 text-gray-700 hover:text-primary-400 font-medium transition-colors">
              {t("about")}
            </Link>
            <Link href={`/${locale}/inquiry`} className="px-4 py-2 text-gray-700 hover:text-primary-400 font-medium transition-colors">
              {t("inquiry")}
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switch */}
            <Link
              href={switchPath}
              className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg text-gray-600 hover:border-primary-400 hover:text-primary-400 transition-colors"
            >
              {otherLocale === "en" ? "EN" : "한국어"}
            </Link>

            {session ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{session.user?.name}</span>
                <button
                  onClick={() => signOut({ callbackUrl: `/${locale}` })}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-red-500 transition-colors"
                >
                  {t("logout")}
                </button>
              </div>
            ) : (
              <>
                <Link
                  href={`/${locale}/auth/login`}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-primary-400 font-medium transition-colors"
                >
                  {t("login")}
                </Link>
                <Link
                  href={`/${locale}/auth/register`}
                  className="px-4 py-2 text-sm bg-primary-400 text-white rounded-lg hover:bg-primary-500 font-medium transition-colors"
                >
                  {t("register")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          <div className="space-y-1">
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-400 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/about`} className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-400 rounded-lg" onClick={() => setMobileOpen(false)}>
            {t("about")}
          </Link>
          <Link href={`/${locale}/inquiry`} className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-400 rounded-lg" onClick={() => setMobileOpen(false)}>
            {t("inquiry")}
          </Link>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <Link href={switchPath} className="text-sm text-gray-600 underline">
              {otherLocale === "en" ? "English" : "한국어"}
            </Link>
            {session ? (
              <button onClick={() => signOut({ callbackUrl: `/${locale}` })} className="text-sm text-red-500">
                {t("logout")}
              </button>
            ) : (
              <div className="flex gap-2">
                <Link href={`/${locale}/auth/login`} className="text-sm text-gray-700" onClick={() => setMobileOpen(false)}>
                  {t("login")}
                </Link>
                <Link href={`/${locale}/auth/register`} className="text-sm bg-primary-400 text-white px-3 py-1 rounded-lg" onClick={() => setMobileOpen(false)}>
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
