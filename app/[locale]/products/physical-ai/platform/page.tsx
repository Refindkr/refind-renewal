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
    title: isKo ? "플랫폼" : "Platform",
    description: isKo
      ? "듀얼암 로봇 플랫폼과 원격조작 키트 — Physical AI 연구·개발을 위한 리파인의 플랫폼 라인업."
      : "Dual-arm robot platform and teleoperation kit — Refind's platform lineup for Physical AI research and development.",
  };
}

export default async function PlatformCategoryPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const products = [
    {
      href: `/${locale}/products/physical-ai/platform/dual-arm`,
      name: isKo ? "듀얼암 로봇 플랫폼" : "Dual-Arm Robot Platform",
      nameEn: "Dural Arm Embodied AI Development Platform",
      tagline: isKo
        ? "AI 기반 로봇 연구와 애플리케이션 개발을 위한 듀얼 암 로봇 플랫폼. 양팔 협업 동작, AI 학습, 데이터 수집, 원격 조작, 강화학습 등에 활용됩니다."
        : "A dual-arm robot platform for AI-based robotics research and application development. Used for two-arm collaborative motion, AI training, data collection, teleoperation, and reinforcement learning.",
      tags: isKo ? ["듀얼암", "Embodied AI", "10kg 페이로드"] : ["Dual-Arm", "Embodied AI", "10kg Payload"],
      image: "/products/platform/1.jpeg",
    },
    {
      href: `/${locale}/products/physical-ai/platform/teleoperation-kit`,
      name: isKo ? "원격조작 키트" : "Teleoperation Kit",
      nameEn: "Teleoperation Kit",
      tagline: isKo
        ? "작업자의 움직임을 로봇에 실시간으로 전달하는 마스터-슬레이브 원격조작 키트. Embodied AI 학습 데이터 수집, 기능 검증, 가정 서비스·리테일 환경에 적합합니다."
        : "A master-slave teleoperation kit that transmits an operator's movements to a robot in real time. Ideal for embodied AI data collection, functional verification, home service, and retail environments.",
      tags: isKo ? ["원격조작", "마스터-슬레이브", "RJ45"] : ["Teleoperation", "Master-Slave", "RJ45"],
      image: "/products/physical-ai/platform/teleoperation-kit/aloha.png",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #E1251B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E1251B 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            Products · Platform
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            {isKo ? "플랫폼" : "Platform"}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            {isKo
              ? "AI 로보틱스 연구와 데이터 수집을 위한 리파인의 플랫폼 라인업입니다."
              : "Refind's platform lineup for AI robotics research and data collection."}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 transition-all duration-300"
              >
                <div className="relative h-56 bg-gray-50 p-4">
                  <div className="relative h-full w-full rounded-xl bg-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{product.nameEn}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{product.tagline}</p>

                  <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary-500 group-hover:gap-2 transition-all">
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
