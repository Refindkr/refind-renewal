import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import HeroRotatingBackground from "@/components/ui/HeroRotatingBackground";
import HeroContentSlides from "@/components/ui/HeroContentSlides";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "홈" : "Home",
    description: isKo
      ? "리파인주식회사 공식 홈페이지. 로봇핸드, 전자의수, 협동로봇, 휴머노이드 등 첨단 로봇 기술로 장애와 노화의 한계를 극복합니다."
      : "Official homepage of Refind Inc. Overcoming the limits of disability and aging with advanced robotics — robot hands, prosthetics, cobots, and humanoids.",
    openGraph: {
      title: isKo ? "Refind | 리파인주식회사" : "Refind Inc. — Advanced Robotics",
      description: isKo
        ? "로봇핸드, 전자의수, 협동로봇, 휴머노이드 등 첨단 로봇 기술 솔루션"
        : "Robot hands, prosthetics, collaborative robots, and humanoids",
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tp = await getTranslations("products");

  const exhibitionNotices = await prisma.notice.findMany({
    where: { isExhibitionBanner: true },
    orderBy: { createdAt: "desc" },
  });

  const heroSlides = [
    {
      eyebrow: "Refind Inc. · 리파인주식회사",
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      primaryHref: `/${locale}/products/robot-hand`,
      primaryLabel: t("hero.cta"),
      secondaryHref: `/${locale}/about`,
      secondaryLabel: t("hero.ctaSecondary"),
    },
    ...exhibitionNotices.map((notice) => ({
      eyebrow:
        notice.bannerEyebrow || (isKo ? "EXHIBITION · 전시회 안내" : "EXHIBITION"),
      title: notice.title,
      subtitle:
        notice.bannerSubtitle ||
        (isKo
          ? "리파인의 전시회 소식을 확인해보세요."
          : "Check out Refind's latest exhibition news."),
      primaryHref: `/${notice.slug}`,
      primaryLabel: isKo ? "자세히 보기" : "Learn more",
      color: notice.bannerColor || "#E1251B",
    })),
  ];

  // 홈페이지 "주요 제품" 섹션은 실제 대메뉴(Navbar productLinks) 5개와 1:1로 대응시킨다.
  const products = [
    {
      href: `/${locale}/products/physical-ai`,
      title: tn("physicalAI"),
      desc: tp("physicalAI.description"),
      number: "01",
      image: "/products/sensors/tashan.png",
    },
    {
      href: `/${locale}/products/robot-hand`,
      title: tn("robotHand"),
      desc: tp("robotHand.description"),
      number: "02",
      image: "/products/robot-hand/a002.png",
    },
    {
      href: `/${locale}/products/collaborative-robot`,
      title: tn("collaborativeRobot"),
      desc: tp("collaborativeRobot.description"),
      number: "03",
      image: "/products/collaborative-robot/1.png",
    },
    {
      href: `/${locale}/products/humanoid`,
      title: tn("humanoid"),
      desc: tp("humanoid.description"),
      number: "04",
      image: "/products/humanoid/realbot.png",
    },
    {
      href: `/${locale}/products/body-enhancement`,
      title: tn("bodyEnhancement"),
      desc: tp("bodyEnhancement.description"),
      number: "05",
      image: "/products/prosthetic/ohand_pinch_hd.png",
    },
  ];

  return (
    <div>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6 overflow-hidden">

        {/* 배경 이미지 — invert로 흰배경→검정, 제품→흰색 실루엣 */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* 이미지 영역: 오른쪽 배치, 주요 제품 5개를 순환 표시. 여백을 둬서 확대 애니메이션에도 화면 밖으로 안 번지게 함 */}
          <div className="absolute right-0 top-0 h-full w-[55%] p-12 md:p-16">
            <HeroRotatingBackground images={products.map((p) => p.image)} />
          </div>
          {/* 왼쪽으로 검정 그라디언트 페이드 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black from-40% via-black/60 to-transparent" />
          {/* 하단 페이드 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <HeroContentSlides slides={heroSlides} />

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
          {[
            { value: "2020", label: "설립연도" },
            { value: "5+", label: "제품 라인업" },
            { value: "AI", label: "물리적 지능" },
            { value: "∞", label: "가능성의 한계" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 80} className="bg-white px-10 py-12 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                <CountUp value={stat.value} />
              </div>
              <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Brand Story ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <Reveal>
              <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
                {t("about.title")}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-12">
                {t("about.description")}
              </p>

              <div className="space-y-8">
                <div className="border-l-2 border-primary-400 pl-6">
                  <div className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-2">
                    {t("about.vision")}
                  </div>
                  <p className="text-gray-800 font-medium">{t("about.visionText")}</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    {t("about.mission")}
                  </div>
                  <p className="text-gray-800 font-medium">{t("about.missionText")}</p>
                </div>
              </div>
            </Reveal>

            {/* Right – Core Values */}
            <div>
              <p className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                {t("about.values")}
              </p>
              <div className="divide-y divide-gray-100">
                {(["innovation", "professionalism", "ethics", "collaboration", "positivity"] as const).map((key, i) => (
                  <Reveal key={key} delayMs={i * 80} className="flex items-start gap-6 py-5 group">
                    <span className="text-xs text-gray-300 font-mono mt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-0.5 group-hover:text-primary-400 transition-colors">
                        {t(`coreValues.${key}`)}
                      </div>
                      <p className="text-sm text-gray-400">{t(`coreValues.${key}Text`)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Products ─── */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Products
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {t("products.title")}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <Reveal key={product.number} delayMs={i * 80}>
              <Link
                href={product.href}
                className="group relative bg-[#111] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-[#1a1a1a]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-7">
                  <span className="text-xs font-mono text-white/20 mb-3 block">
                    {product.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="mt-5 flex items-center text-primary-400 text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                    {locale === "ko" ? "자세히 보기" : "Learn more"}
                    <svg className="ml-2 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-40 bg-black text-center px-6">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-white/40 mb-12">
            {t("contact.description")}
          </p>
          <a
            href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200"
          >
            {t("contact.button")}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
