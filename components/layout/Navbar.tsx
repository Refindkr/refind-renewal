"use client";

import { useState } from "react";
import { Link, usePathname, getPathname } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSession, signOut } from "next-auth/react";

interface NavbarProps {
  locale: string;
}

const INQUIRY_FORM_URL = "https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA";

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);

  const otherLocale = locale === "ko" ? "en" : "ko";
  const homePath = getPathname({ href: "/", locale });
  // next-intl의 <Link locale=...>는 커스텀 접두사(as-needed + prefixes)에서 현재 로케일 접두사를
  // 다시 덧씌우는 문제가 있어, 언어 전환 링크만은 접두사를 직접 계산해 일반 <a> 태그로 렌더링
  const switchPath = otherLocale === "en" ? `/eng${pathname === "/" ? "" : pathname}` : pathname;

  const isKo = locale === "ko";

  const productLinks = [
    {
      href: `/products/physical-ai`,
      label: t("physicalAI"),
      desc: isKo ? "액추에이터·플랫폼·센서 솔루션" : "Actuators, platform & sensor solutions",
      children: [
        { href: `/products/physical-ai/tashan`, label: isKo ? "Tashan 센서" : "Tashan Sensor", isGroup: false },
        { href: `/products/physical-ai/actuator`, label: isKo ? "액추에이터" : "Actuator", isGroup: false },
        { href: `/products/physical-ai/avr-amr`, label: "AVR/AMR", isGroup: true },
        { href: `/products/physical-ai/avr-amr/myagv`, label: isKo ? "모바일 로봇 플랫폼 (myAGV 2023)" : "Mobile Robot Platform (myAGV 2023)", isGroup: false },
        { href: `/products/physical-ai/avr-amr/mobile-chassis`, label: isKo ? "모바일 섀시" : "Mobile Chassis", isGroup: false },
        { href: `/products/physical-ai/platform`, label: isKo ? "플랫폼" : "Platform", isGroup: true },
        { href: `/products/physical-ai/platform/dual-arm`, label: isKo ? "듀얼암 로봇 플랫폼" : "Dual-Arm Robot Platform", isGroup: false },
        { href: `/products/physical-ai/platform/teleoperation-kit`, label: isKo ? "원격조작 키트" : "Teleoperation Kit", isGroup: false },
      ],
    },
    {
      href: `/products/robot-hand`,
      label: t("robotHand"),
      desc: isKo ? "6자유도 와이어 구동 로봇핸드" : "6-DOF wire-driven robot hand",
      children: [
        { href: `/products/robot-hand/a002`, label: "ROH-A002", isGroup: false },
        { href: `/products/robot-hand/ap001`, label: "ROH-AP001", isGroup: false },
        { href: `/products/robot-hand/ap002`, label: "ROH-AP002", isGroup: false },
        { href: `/products/robot-hand/ap003`, label: "ROH-AP003", isGroup: false },
        { href: `/products/robot-hand/lite`, label: "ROH-Lite", isGroup: false },
        { href: `/products/robot-hand/motion-capture-glove`, label: isKo ? "모션 캡처 글러브" : "Motion Capture Glove", isGroup: false },
      ],
    },
    {
      href: `/products/collaborative-robot`,
      label: t("collaborativeRobot"),
      desc: isKo ? "안전한 인간-로봇 협업" : "Safe human-robot collaboration",
      children: [
        { href: `/products/collaborative-robot/realman/rm65-75`, label: "RM65/75", isGroup: false },
        { href: `/products/collaborative-robot/realman/rml63`, label: "RML63", isGroup: false },
        { href: `/products/collaborative-robot/realman/eco`, label: "ECO 62/63/65", isGroup: false },
      ],
    },
    {
      href: `/products/humanoid`,
      label: t("humanoid"),
      desc: isKo ? "차세대 휴머노이드 플랫폼" : "Next-gen humanoid platform",
      children: [
        { href: `/products/humanoid/realman`, label: "REALMAN", isGroup: true },
        { href: `/products/humanoid/realbot`, label: "REALBOT S2", isGroup: false },
        { href: `/products/humanoid/realbot-l2`, label: "REALBOT L2", isGroup: false },
        { href: `/products/humanoid/realbot-01`, label: "REALBOT 01", isGroup: false },
        { href: `/products/humanoid/embodied-dual-arm`, label: "Dual arm vertical Lift", isGroup: false },
        { href: `/products/humanoid/lifting-platform`, label: "Single arm vertical lift", isGroup: false },
        { href: `/products/humanoid/robot-arm`, label: isKo ? "로봇암 (RX 시리즈)" : "Robot Arm (RX Series)", isGroup: true },
        { href: `/products/humanoid/robot-arm/rx75`, label: isKo ? "RX75-표준형" : "RX75 Standard", isGroup: false },
        { href: `/products/humanoid/robot-arm/rx75s`, label: isKo ? "RX75S-표준형" : "RX75S Standard", isGroup: false },
        { href: `/products/humanoid/robot-arm/rx75-vision`, label: isKo ? "RX75-비전형" : "RX75 Vision", isGroup: false },
        { href: `/products/humanoid/robot-arm/rx71`, label: isKo ? "RX71-표준형" : "RX71 Standard", isGroup: false },
      ],
    },
    {
      href: `/products/body-enhancement`,
      label: t("bodyEnhancement"),
      desc: isKo ? "의수·BCI·재활·보조기 솔루션" : "Prosthetics, BCI, rehab & support",
      children: [
        { href: `/products/prosthetic`, label: isKo ? "전자의수" : "Prosthetic Hand", isGroup: true },
        { href: `/products/prosthetic/ohand`, label: "Ohand", isGroup: false },
        { href: `/products/prosthetic/ohand-s001`, label: "Ohand S001", isGroup: false },
        { href: `/products/prosthetic/ohandlite`, label: "OhandLite", isGroup: false },
        { href: `/products/physical-ai/bcibmi`, label: "BCI/BMI", isGroup: true },
        { href: `/products/physical-ai/eeg`, label: isKo ? "Wearable EEG" : "Wearable EEG", isGroup: false },
        { href: `/products/physical-ai/gforcepro`, label: "GForcePro+", isGroup: false },
        { href: `/products/robot-support`, label: isKo ? "로봇보조기" : "Robot Support", isGroup: true },
        { href: `/products/robot-support/hybridex`, label: "HYBRIDEX", isGroup: false },
        { href: `/products/robot-support/step-booster`, label: "STEP BOOSTER", isGroup: false },
      ],
    },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={"/"} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Refind"
              width={150}
              height={50}
              className="h-11 w-auto object-contain -translate-y-1"
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
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 text-gray-700 hover:bg-black/5"
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
                      {/* 하위 제품 — isGroup으로 3뎁스 구성 */}
                      {link.children.map((child, idx) => (
                        <div key={`${child.href}-${idx}`}>
                          {/* 그룹 헤더 앞에 구분선 (첫 번째 제외) */}
                          {child.isGroup && idx > 0 && (
                            <div className="my-1 mx-3 border-t border-gray-100" />
                          )}
                          <Link
                            href={child.href}
                            className={`block px-4 py-1.5 text-sm hover:bg-gray-50 transition-colors ${
                              child.isGroup
                                ? "font-semibold text-gray-800 hover:text-gray-900"
                                : "text-gray-500 pl-6 hover:text-gray-800"
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

            <span className="mx-1.5 w-px h-4 bg-gray-200" />

            <Link
              href={`/about`}
              className="px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap text-gray-700 hover:bg-black/5"
            >
              {t("about")}
            </Link>
            {/* 게시판 드롭다운 */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("board")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 text-gray-700 hover:bg-black/5">
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
                    <a
                      href={INQUIRY_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {t("inquiry")}
                    </a>
                    <Link
                      href={`/notice`}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {t("notice")}
                    </Link>
                    <Link
                      href={`/card-news`}
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
            <a
              href={switchPath}
              className="px-3 py-1.5 text-xs font-semibold rounded-full border transition-all border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900"
            >
              {otherLocale === "en" ? "EN" : "한국어"}
            </a>

            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  {session.user?.name}
                </span>
                {(session.user as { role?: string })?.role === "admin" && (
                  <Link
                    href={`/admin`}
                    className="text-xs font-bold px-2.5 py-1 rounded-full transition-colors bg-primary-50 text-primary-600 hover:bg-primary-100"
                  >
                    관리자
                  </Link>
                )}
                <button
                  onClick={() => signOut({ callbackUrl: homePath })}
                  className="text-sm transition-colors text-gray-500 hover:text-red-500"
                >
                  {t("logout")}
                </button>
              </div>
            ) : (
              <Link
                href={`/auth/login`}
                className="px-4 py-2 text-sm font-medium rounded-full transition-colors text-gray-700 hover:text-gray-900"
              >
                {t("login")}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-700"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpenMobileCategory(null);
            }}
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
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 px-3">
              {t("products")}
            </p>
            <div className="divide-y divide-gray-100">
              {productLinks.map((link) => {
                const isOpen = openMobileCategory === link.href;
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setOpenMobileCategory(isOpen ? null : link.href)}
                      className="w-full flex items-center justify-between gap-3 px-3 py-3 text-left"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{link.label}</div>
                        <div className="text-[11px] text-gray-400">{link.desc}</div>
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* 모바일 서브메뉴 — 아코디언 */}
                    {isOpen && (
                      <div className="pb-2">
                        <Link
                          href={link.href}
                          className="block px-3 py-2 text-xs font-bold text-primary-500"
                          onClick={() => setMobileOpen(false)}
                        >
                          {isKo ? "전체 보기 →" : "View All →"}
                        </Link>
                        {link.children.map((child, idx) => (
                          <div key={`${child.href}-${idx}`}>
                            {child.isGroup && idx > 0 && (
                              <div className="my-1 mx-3 border-t border-gray-100" />
                            )}
                            <Link
                              href={child.href}
                              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                child.isGroup
                                  ? "font-semibold text-gray-800"
                                  : "text-gray-500 pl-6"
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-1 mb-6">
            <Link
              href={`/about`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("about")}
            </Link>
            {/* 게시판 */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-4 mb-2 px-3">
              {t("board")}
            </p>
            <a
              href={INQUIRY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("inquiry")}
            </a>
            <Link
              href={`/notice`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("notice")}
            </Link>
            <Link
              href={`/card-news`}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              {t("cardNews")}
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <a
              href={switchPath}
              className="text-sm text-gray-500 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {otherLocale === "en" ? "English" : "한국어"}
            </a>
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: homePath })}
                className="text-sm text-red-500"
              >
                {t("logout")}
              </button>
            ) : (
              <Link
                href={`/auth/login`}
                className="text-sm text-gray-600"
                onClick={() => setMobileOpen(false)}
              >
                {t("login")}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
