import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const tp = await getTranslations("products");

  const products = [
    {
      href: `/${locale}/products/robot-hand`,
      title: tp("robotHand.title"),
      desc: tp("robotHand.description"),
      number: "01",
      image: "/products/robot-hand/a002.png",
    },
    {
      href: `/${locale}/products/prosthetic`,
      title: locale === "ko" ? "전자의수" : "Prosthetic Hand",
      desc: locale === "ko" ? "AI 근전도 제어 지능형 전자의수" : "AI myoelectric intelligent prosthetic hand",
      number: "02",
      image: "/products/prosthetic/ohand_pinch_hd.png",
    },
    {
      href: `/${locale}/products/collaborative-robot`,
      title: tp("collaborativeRobot.title"),
      desc: tp("collaborativeRobot.description"),
      number: "03",
      image: "/products/collaborative-robot/1.jpeg",
    },
    {
      href: `/${locale}/products/humanoid`,
      title: tp("humanoid.title"),
      desc: tp("humanoid.description"),
      number: "04",
      image: "/products/humanoid/realbot.jpeg",
    },
    {
      href: `/${locale}/products/body-enhancement`,
      title: tp("bodyEnhancement.title"),
      desc: tp("bodyEnhancement.description"),
      number: "05",
      image: "/products/body-enhancement/HDE.jpg",
    },
    {
      href: `/${locale}/products/physical-ai`,
      title: tp("physicalAI.title"),
      desc: tp("physicalAI.description"),
      number: "06",
      image: "/products/sensors/tashan.png",
    },
  ];

  return (
    <div>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-primary-400/10 blur-[120px]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <p className="text-primary-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8">
            Refind Inc. · 리파인주식회사
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8 whitespace-pre-line">
            {t("hero.title")}
          </h1>

          <p className="text-lg sm:text-xl text-white/50 leading-relaxed mb-12 max-w-xl mx-auto whitespace-pre-line">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/products/robot-hand`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200"
            >
              {t("hero.cta")}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
          {[
            { value: "2021", label: "설립연도" },
            { value: "5+", label: "제품 라인업" },
            { value: "AI", label: "물리적 지능" },
            { value: "∞", label: "가능성의 한계" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-10 py-12 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Brand Story ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div>
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
            </div>

            {/* Right – Core Values */}
            <div>
              <p className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                {t("about.values")}
              </p>
              <div className="divide-y divide-gray-100">
                {(["innovation", "professionalism", "ethics", "collaboration", "positivity"] as const).map((key, i) => (
                  <div key={key} className="flex items-start gap-6 py-5 group">
                    <span className="text-xs text-gray-300 font-mono mt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900 mb-0.5 group-hover:text-primary-400 transition-colors">
                        {t(`coreValues.${key}`)}
                      </div>
                      <p className="text-sm text-gray-400">{t(`coreValues.${key}Text`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Products ─── */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Products
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {t("products.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group relative bg-[#111] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-[#1a1a1a] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
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
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-40 bg-black text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-white/40 mb-12">
            {t("contact.description")}
          </p>
          <Link
            href={`/${locale}/inquiry`}
            className="inline-flex items-center px-10 py-5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200"
          >
            {t("contact.button")}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
