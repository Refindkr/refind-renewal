"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const otherLocale = locale === "ko" ? "en" : "ko";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isKo = locale === "ko";

  const productLinks = [
    {
      href: `/${locale}/products/robot-hand`,
      label: t("robotHand"),
      icon: "🤖",
      desc: isKo ? "6자유도 와이어 구동 로봇핸드" : "6-DOF wire-driven robot hand",
      children: [
        { href: `/${locale}/products/robot-hand/a001`, label: "ROH-A001" },
        { href: `/${locale}/products/robot-hand/ap001`, label: "ROH-AP001" },
        { href: `/${locale}/products/robot-hand/ap002`, label: "ROH-AP002" },
        { href: `/${locale}/products/robot-hand/lite`, label: "ROH-Lite" },
      ],
    },
    {
      href: `/${locale}/products/collaborative-robot`,
      label: t("collaborativeRobot"),
      icon: "⚙️",
      desc: isKo ? "안전한 인간-로봇 협업" : "Safe human-robot collaboration",
      children: [
        { href: `/${locale}/products/collaborative-robot/realman`, label: "Realman" },
        { href: `/${locale}/products/collaborative-robot/elephant-robotics`, label: "Elephant Robotics" },
        { href: `/${locale}/products/collaborative-robot/myagv`, label: "MyAGV" },
      ],
    },
    {
      href: `/${locale}/products/humanoid`,
      label: t("humanoid"),
      icon: "🧑‍🦯",
      desc: isKo ? "차세대 휴머노이드 플랫폼" : "Next-gen humanoid platform",
      children: [
        { href: `/${locale}/products/humanoid/realbot`, label: "Realbot" },
        { href: `/${locale}/products/guohua-robot`, label: "Guohua Robot" },
        { href: `/${locale}/products/humanoid/embodied-dual-arm`, label: "Embodied Dual Arm" },
        { href: `/${locale}/products/humanoid/lifting-platform`, label: "Lifting Platform" },
      ],
    },
    {
      href: `/${locale}/products/body-enhancement`,
      label: t("bodyEnhancement"),
      icon: "💪",
      desc: isKo ? "재활·증강·의수 통합 솔루션" : "Rehab, enhancement & prosthetic solutions",
      children: [
        { href: `/${locale}/products/prosthetic`, label: isKo ? "전자의수" : "Prosthetic Hand" },
        { href: `/${locale}/products/prosthetic/ohand`, label: "Ohand" },
        { href: `/${locale}/products/prosthetic/ohandlite`, label: "OhandLite" },
        { href: `/${locale}/products/body-enhancement/ore-3000`, label: "ORE-3000" },
        { href: `/${locale}/products/body-enhancement/oyfm-7000`, label: "OYFM-7000" },
        { href: `/${locale}/products/robot-support`, label: isKo ? "로봇 보조기" : "Robot Support" },
      ],
    },
    {
      href: `/${locale}/products/physical-ai`,
      label: t("physicalAI"),
      icon: "🧠",
      desc: isKo ? "BCI·촉각 센서 솔루션" : "BCI & tactile sensor solutions",
      children: [
        { href: `/${locale}/products/physical-ai/gforcepro`, label: "gForcePro+" },
        { href: `/${locale}/products/physical-ai/bcibmi`, label: "BCI/BMI" },
      ],
    },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Refind"
              width={120}
              height={40}
              className={`h-8 w-auto object-contain transition-all duration-300 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {productLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredMenu(link.href)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:bg-black/5"
                  }`}
                >
                  {link.label}
                  {link.children.length > 0 && (
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 opacity-50 ${
                        hoveredMenu === link.href ? "rotate-180" : ""
                      }`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* 서브메뉴 드롭다운 */}
                {hoveredMenu === link.href && link.children.length > 0 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2">
                    <div className="bg-white shadow-xl rounded-2xl border border-gray-100 py-2 min-w-[180px]">
                      {/* 카테고리 페이지 링크 */}
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-xs font-bold text-primary-500 hover:bg-gray-50 transition-colors border-b border-gray-100 mb-1"
                      >
                        {isKo ? "전체 보기" : "View All"} →
                      </Link>
                      {/* 하위 제품 */}
                      {link.children.map((child, idx) => (
                        <div key={child.href}>
                          {/* 신체증강기기: 전자의수 앞, 로봇보조기 앞에 구분선 */}
                          {link.href.includes("body-enhancement") && (idx === 3 || idx === 5) && (
                            <div className="my-1 mx-3 border-t border-gray-100" />
                          )}
                          <Link
                            href={child.href}
                            className={`block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors ${
                              link.href.includes("body-enhancement") && (idx === 0 || idx === 3 || idx === 5)
                                ? "font-semibold text-gray-800"
                                : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <span className={`mx-1.5 w-px h-4 ${isTransparent ? "bg-white/20" : "bg-gray-200"}`} />

            <Link
              href={`/${locale}/about`}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                isTransparent
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-black/5"
              }`}
            >
              {t("about")}
            </Link>
            {/* 게시판 드롭다운 */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("board")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                  isTransparent
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:bg-black/5"
                }`}
              >
                {t("board")}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 opacity-50 ${hoveredMenu === "board" ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {hoveredMenu === "board" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2">
                  <div className="bg-white shadow-xl rounded-2xl border border-gray-100 py-2 min-w-[150px]">
                    <Link
                      href={`/${locale}/inquiry`}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {t("inquiry")}
                    </Link>
                    <Link
                      href={`/${locale}/notice`}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {t("notice")}
                    </Link>
                    <Link
                      href={`/${locale}/card-news`}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {t("cardNews")}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={switchPath}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                isTransparent
                  ? "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                  : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {otherLocale === "en" ? "EN" : "한국어"}
            </Link>

            {session ? (
              <div className="flex items-center gap-3">
                <span className={`text-sm ${isTransparent ? "text-white/70" : "text-gray-600"}`}>
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: `/${locale}` })}
                  className={`text-sm transition-colors ${
                    isTransparent ? "text-white/60 hover:text-red-400" : "text-gray-500 hover:text-red-500"
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
                    isTransparent ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {t("login")}
                </Link>
                <Link
                  href={`/${locale}/auth/register`}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    isTransparent
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  {t("register")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? "text-white" : "text-gray-700"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-6">
          <div className="space-y-1 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-3">
              {t("products")}
            </p>
            {productLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-base">{link.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{link.label}</div>
                    <div className="text-[11px] text-gray-400">{link.desc}</div>
                  </div>
                </Link>
                {/* 모바일 서브메뉴 */}
                <div className="ml-10 mt-0.5 mb-1 flex flex-wrap gap-x-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="px-2.5 py-1 text-xs text-gray-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
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
            {/* 게시판 */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-4 mb-2 px-3">
              {t("board")}
            </p>
            <Link
              href={`/${locale}/inquiry`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("inquiry")}
            </Link>
            <Link
              href={`/${locale}/notice`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("notice")}
            </Link>
            <Link
              href={`/${locale}/card-news`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("cardNews")}
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
