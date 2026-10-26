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
const DRAW_ME_BOT_URL = "https://drawmebot.vercel.app/";

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
  const experienceLabel = isKo ? "로봇 익스피리언스" : "Robot Experience";
  const drawMeBotLabel = isKo ? "드로우미봇" : "Draw Me Bot";
  const desktopDisplay = "hidden xl:flex";
  const mobileDisplay = "xl:hidden";
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const productLinks = [
    {
      href: `/products/physical-ai`,
      label: t("physicalAI"),
      desc: isKo ? "액추에이터·플랫폼·센서 솔루션" : "Actuators, platform & sensor solutions",
      children: [
        { href: `/products/physical-ai/tashan`, label: isKo ? "Tashan 센서" : "Tashan Sensor", isGroup: false },
        { href: `/products/physical-ai/ts-echo`, label: isKo ? "TS-ECHO 데이터 글러브" : "TS-ECHO Data Glove", isGroup: false },
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
        { href: `/products/physical-ai/gforce-ultra`, label: "gForce Ultra", isGroup: false },
        { href: `/products/physical-ai/gforcepro`, label: "GForcePro+", isGroup: false },
        { href: `/products/robot-support`, label: isKo ? "로봇보조기" : "Robot Support", isGroup: true },
        { href: `/products/robot-support/hybridex`, label: "HYBRIDEX", isGroup: false },
        { href: `/products/robot-support/step-booster`, label: "STEP BOOSTER", isGroup: false },
      ],
    },
  ];

  const sections = [
    { id: "solutions", label: isKo ? "로봇솔루션" : "Robot Solutions", desc: isKo ? "연구와 산업을 위한 로봇·부품 솔루션" : "Robots and components for research and industry" },
    { id: "experience", label: experienceLabel, desc: isKo ? "체험·교육·퍼포먼스로 만나는 로봇" : "Experiences, education and performances" },
    { id: "assistance", label: isKo ? "로봇 어시스턴스" : "Robot Assistance", desc: isKo ? "리파인 자체 개발 제품" : "Products developed by REFIND" },
  ];
  const experienceItems = [
    { label: drawMeBotLabel, desc: isKo ? "로봇이 그려주는 캐리커처 체험" : "Robot caricature experiences", href: DRAW_ME_BOT_URL, external: true },
    { label: isKo ? "로봇 코딩교육" : "Robot Coding Education", desc: isKo ? "로봇과 함께 배우는 코딩" : "Learn coding with robots" },
    { label: isKo ? "로봇개 퍼포먼스" : "Robot Dog Performance", desc: isKo ? "행사·공연·체험 프로그램" : "Events, performances and experiences" },
  ];
  const assistanceItems = [
    { label: isKo ? "하이브리덱스" : "HYBRIDEX", desc: "HYBRIDEX", href: "/products/robot-support/hybridex" },
    { label: isKo ? "스텝부스터" : "STEP BOOSTER", desc: "STEP BOOSTER", href: "/products/robot-support/step-booster" },
  ];
  const boardItems = [
    { label: t("inquiry"), href: INQUIRY_FORM_URL, external: true },
    { label: t("notice"), href: "/notice" },
    { label: t("cardNews"), href: "/card-news" },
  ];
  const closeMenus = () => {
    setHoveredMenu(null);
    setMobileOpen(false);
    setOpenMobileSection(null);
    setOpenMobileCategory(null);
  };
  const chevron = (open: boolean) => (
    <svg className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 9l6 6 6-6" />
    </svg>
  );
  const renderItem = (item: { label: string; desc?: string; href?: string; external?: boolean }) => {
    const content = <>
      <span className="flex items-center justify-between gap-3 text-sm font-semibold">
        {item.label}
        {item.href ? <span aria-hidden="true" className="text-gray-400">{item.external ? "↗" : "→"}</span> : <span className="shrink-0 rounded-full bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-500">{isKo ? "준비 중" : "Coming soon"}</span>}
      </span>
      {item.desc && <span className="mt-1.5 block text-xs leading-relaxed text-gray-500">{item.desc}</span>}
    </>;
    const className = "block rounded-xl p-4 text-gray-800 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500";
    if (!item.href) return <div key={item.label} aria-disabled="true" className="rounded-xl p-4 text-gray-500">{content}</div>;
    if (item.external) return <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label} (${isKo ? "새 창" : "opens in a new tab"})`} onClick={closeMenus} className={className}>{content}</a>;
    return <Link key={item.label} href={item.href} onClick={closeMenus} className={className}>{content}</Link>;
  };

  return (
    <nav aria-label={isKo ? "주 메뉴" : "Main navigation"} className="relative border-b border-gray-200/60 bg-white/95 shadow-sm backdrop-blur-xl"
      onMouseLeave={() => setHoveredMenu(null)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHoveredMenu(null); }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          const trigger = event.currentTarget.querySelector<HTMLButtonElement>(mobileOpen ? "#mobile-menu-toggle" : `#nav-trigger-${hoveredMenu}`);
          closeMenus();
          trigger?.focus();
        }
      }}>
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" onClick={closeMenus} className="flex shrink-0 items-center">
            <Image src="/logo.png" alt="Refind" width={150} height={50} className="h-11 w-auto -translate-y-1 object-contain" priority />
          </Link>
          <div className={`${desktopDisplay} items-center gap-1`}>
            {sections.map((section) => (
              <button key={section.id} id={`nav-trigger-${section.id}`} type="button" aria-expanded={hoveredMenu === section.id} aria-controls={`nav-panel-${section.id}`}
                onMouseEnter={() => setHoveredMenu(section.id)} onClick={() => setHoveredMenu(section.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-primary-500 ${hoveredMenu === section.id ? "bg-gray-50 text-primary-600" : "text-gray-800 hover:bg-gray-50"}`}>
                {section.label}{chevron(hoveredMenu === section.id)}
              </button>
            ))}
            <span className="mx-3 h-4 w-px bg-gray-200" aria-hidden="true" />
            <Link href="/about" onMouseEnter={() => setHoveredMenu(null)} onClick={closeMenus} className="whitespace-nowrap rounded-lg px-3 py-3 text-sm text-gray-500 hover:bg-gray-50">{t("about")}</Link>
            <div className="relative" onMouseEnter={() => setHoveredMenu("board")}>
              <button id="nav-trigger-board" type="button" aria-expanded={hoveredMenu === "board"} aria-controls="nav-panel-board" onClick={() => setHoveredMenu("board")} className="flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-3 text-sm text-gray-500 hover:bg-gray-50">
                {t("board")}{chevron(hoveredMenu === "board")}
              </button>
              {hoveredMenu === "board" && <div id="nav-panel-board" className="absolute right-0 top-full z-50 w-52 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">{boardItems.map(renderItem)}</div>}
            </div>
          </div>
          <div className={`${desktopDisplay} shrink-0 items-center gap-3 whitespace-nowrap`} onMouseEnter={() => setHoveredMenu(null)}>
            <a href={switchPath} className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-500 hover:border-gray-400">{otherLocale === "en" ? "EN" : "한국어"}</a>
            {session ? <div className="flex items-center gap-3">
              <span className="max-w-20 truncate text-sm text-gray-600">{session.user?.name}</span>
              {(session.user as { role?: string })?.role === "admin" && <Link href="/admin" onClick={closeMenus} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-bold text-primary-600">{isKo ? "관리자" : "Admin"}</Link>}
              <button onClick={() => signOut({ callbackUrl: homePath })} className="text-sm text-gray-500 hover:text-red-500">{t("logout")}</button>
            </div> : <Link href="/auth/login" onClick={closeMenus} className="text-xs text-gray-500 hover:text-gray-900">{t("login")}</Link>}
          </div>
          <button id="mobile-menu-toggle" type="button" aria-label={isKo ? "메뉴" : "Menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" className={`${mobileDisplay} rounded-lg p-2 text-gray-700`}
            onClick={() => { setMobileOpen(!mobileOpen); setOpenMobileSection(null); setOpenMobileCategory(null); setHoveredMenu(null); }}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {sections.map((section) => hoveredMenu === section.id && (
        <div key={section.id} id={`nav-panel-${section.id}`} className="absolute inset-x-0 top-full z-50 hidden border-t border-gray-100 bg-white shadow-xl xl:block">
          <div className="mx-auto max-h-[calc(100dvh-9rem)] max-w-[1600px] overflow-y-auto px-8 py-7">
            <div className="mb-5 flex items-baseline gap-4 border-b border-gray-100 pb-4">
              <p className="text-sm font-bold text-primary-600">{section.label}</p>
              <p className="text-xs text-gray-500">{section.desc}</p>
            </div>
            {section.id === "solutions" ? <div className="grid grid-cols-5 gap-5">
              {productLinks.map((group) => <div key={group.href}>
                <Link href={group.href} onClick={closeMenus} className="mb-3 flex items-center justify-between gap-2 text-sm font-bold text-gray-900 hover:text-primary-600">{group.label}<span aria-hidden="true">→</span></Link>
                <div className="space-y-0.5">{group.children.map((child) => <Link key={child.href} href={child.href} onClick={closeMenus} className={`block rounded-lg px-2 py-1.5 text-xs leading-relaxed hover:bg-gray-50 hover:text-primary-600 ${child.isGroup ? "font-semibold text-gray-800" : "text-gray-500"}`}>{child.label}</Link>)}</div>
              </div>)}
            </div> : <div className={`grid gap-4 ${section.id === "experience" ? "max-w-5xl grid-cols-3" : "max-w-3xl grid-cols-2"}`}>
              {(section.id === "experience" ? experienceItems : assistanceItems).map(renderItem)}
            </div>}
          </div>
        </div>
      ))}

      {mobileOpen && <div id="mobile-navigation" className={`${mobileDisplay} max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain border-t border-gray-100 bg-white px-5 py-4`}>
        {sections.map((section) => <div key={section.id} className="border-b border-gray-100">
          <button type="button" aria-expanded={openMobileSection === section.id} aria-controls={`mobile-section-${section.id}`} onClick={() => { setOpenMobileSection(openMobileSection === section.id ? null : section.id); setOpenMobileCategory(null); }} className="flex w-full items-center justify-between gap-3 py-4 text-left text-base font-semibold text-gray-900">
            {section.label}{chevron(openMobileSection === section.id)}
          </button>
          {openMobileSection === section.id && <div id={`mobile-section-${section.id}`} className="pb-4">
            <p className="mb-3 text-xs text-gray-500">{section.desc}</p>
            {section.id === "solutions" ? productLinks.map((group, index) => <div key={group.href} className="rounded-lg bg-gray-50/70 px-3">
              <button type="button" aria-expanded={openMobileCategory === group.href} aria-controls={`mobile-products-${index}`} onClick={() => setOpenMobileCategory(openMobileCategory === group.href ? null : group.href)} className="flex w-full items-center justify-between gap-3 py-3 text-left text-sm font-medium text-gray-700">{group.label}{chevron(openMobileCategory === group.href)}</button>
              {openMobileCategory === group.href && <div id={`mobile-products-${index}`} className="pb-3">
                <Link href={group.href} onClick={closeMenus} className="block py-2 text-xs font-bold text-primary-600">{isKo ? "전체 보기 →" : "View all →"}</Link>
                {group.children.map((child) => <Link key={child.href} href={child.href} onClick={closeMenus} className={`block rounded-lg px-2 py-2 text-sm hover:bg-white ${child.isGroup ? "font-semibold text-gray-800" : "text-gray-500"}`}>{child.label}</Link>)}
              </div>}
            </div>) : (section.id === "experience" ? experienceItems : assistanceItems).map(renderItem)}
          </div>}
        </div>)}
        <div className="py-4">
          <Link href="/about" onClick={closeMenus} className="block py-3 text-sm font-semibold text-gray-800">{t("about")}</Link>
          <p className="py-2 text-xs font-semibold text-gray-400">{t("board")}</p>
          {boardItems.map(renderItem)}
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 py-4 text-sm text-gray-500">
          <a href={switchPath} onClick={closeMenus}>{otherLocale === "en" ? "English" : "한국어"}</a>
          {session ? <div className="flex items-center gap-4">
            {(session.user as { role?: string })?.role === "admin" && <Link href="/admin" onClick={closeMenus}>{isKo ? "관리자" : "Admin"}</Link>}
            <button onClick={() => signOut({ callbackUrl: homePath })}>{t("logout")}</button>
          </div> : <Link href="/auth/login" onClick={closeMenus}>{t("login")}</Link>}
        </div>
      </div>}
    </nav>
  );
}
