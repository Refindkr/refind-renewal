import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "협동로봇 Cobot (REALMAN)" : "Collaborative Robot Cobot (REALMAN)",
    description: isKo
      ? "RM65/75, RML63, ECO 62/63/65 — REALMAN 협동로봇 라인업."
      : "RM65/75, RML63, ECO 62/63/65 — the REALMAN collaborative robot lineup.",
  };
}

export default async function RealmanCategoryPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const products = [
    {
      href: `/${locale}/products/collaborative-robot/realman/rm65-75`,
      image: "/products/collaborative-robot/RM65.jpeg",
      name: isKo ? "협동로봇 (RM65/75)" : "Cobot (RM65/75)",
      nameEn: "Ultra-Lightweight 6-Axis Collaborative Robot",
      tagline: isKo
        ? "무게 약 7kg에 5kg 페이로드를 제공하는 초경량 협동로봇. 이동형 로봇 위에도 쉽게 탑재할 수 있습니다. 주용도: 정밀 제조, 협동 로봇."
        : "An ultra-lightweight cobot with a 5kg payload at just ~7kg — easy to mount on mobile platforms. Ideal for precision manufacturing and collaborative work.",
      tags: isKo ? ["6/7축", "5kg", "±0.05mm"] : ["6/7-Axis", "5kg", "±0.05mm"],
    },
    {
      href: `/${locale}/products/collaborative-robot/realman/rml63`,
      image: "/products/collaborative-robot/RML63.jpeg",
      name: isKo ? "협동로봇 (RML63)" : "Cobot (RML63)",
      nameEn: "Human-like Arm Design Cobot",
      tagline: isKo
        ? "사람 팔처럼 긴 구조의 협동로봇. 최대 917mm의 긴 작업반경과 2.8m/s TCP 속도로 장거리 작업과 서비스 로봇에 적합합니다."
        : "A cobot with a human-like long-reach arm — up to 917mm reach and 2.8m/s TCP speed, ideal for long-range work and service robots.",
      tags: isKo ? ["6축", "917mm", "2.8m/s"] : ["6-Axis", "917mm", "2.8m/s"],
    },
    {
      href: `/${locale}/products/collaborative-robot/realman/eco`,
      image: "/products/collaborative-robot/ECO65.jpeg",
      name: isKo ? "협동로봇 (ECO 62/63/65)" : "Cobot (ECO 62/63/65)",
      nameEn: "Economical Collaborative Robot",
      tagline: isKo
        ? "RM 시리즈의 핵심 기능은 유지하면서 구조를 단순화하고 원가를 낮춘 경제형 협동로봇. 주용도: 교육, 서비스, 경량 자동화."
        : "An economical cobot that keeps the RM series' core functions while simplifying structure and cost. Ideal for education, service, and light automation.",
      tags: isKo ? ["6축", "1~5kg", "전 관절 하드 브레이크"] : ["6-Axis", "1–5kg", "All-Hard Brake"],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(225,37,27,0.2) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Collaborative Robot · Cobot
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              {isKo ? "협동로봇 Cobot (REALMAN)" : "Cobot (REALMAN)"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "가볍고 정밀하며 AI 및 휴머노이드 로봇 분야까지 고려해 설계된 REALMAN 협동로봇 라인업입니다."
                : "REALMAN's collaborative robot lineup — lightweight, precise, and designed with AI and humanoid robotics in mind."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/collaborative-robot`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/collaborative-robot/1.jpeg" alt="REALMAN" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-50 p-4">
                  <div className="relative h-full w-full rounded-xl bg-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FDEDEB] text-[#E1251B] tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{product.nameEn}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{product.tagline}</p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#E1251B] group-hover:gap-2 transition-all">
                    {isKo ? "자세히 보기" : "Learn more"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {isKo ? "제품에 대해 궁금한 점이 있으신가요?" : "Have questions about our products?"}
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            {isKo ? "전문가가 직접 상담해드립니다. 지금 문의해주세요." : "Our experts are ready to help. Contact us today."}
          </p>
          <a
            href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-sm"
          >
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}
