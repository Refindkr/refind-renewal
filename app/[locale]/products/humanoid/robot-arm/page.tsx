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
    title: isKo ? "로봇암 RX 시리즈" : "Robot Arm RX Series",
    description: isKo
      ? "리파인 로봇암 RX 시리즈. RX71, RX75S, RX75, RX75 비전 4개 모델 라인업."
      : "Refind Robot Arm RX Series. RX71, RX75S, RX75, and RX75 Vision — a lineup of 4 models.",
  };
}

export default async function RobotArmCategoryPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const products = [
    {
      href: `/${locale}/products/humanoid/robot-arm/rx71`,
      image: "/products/humanoid/robot-arm/rx71.png",
      name: "RX71",
      nameEn: isKo ? "표준형" : "Standard",
      tagline: isKo
        ? "3kg 가반하중, 7축 자유도를 갖춘 경량형 로봇암. 연구개발, AI 알고리즘 검증, 교육에 최적화되어 있습니다."
        : "A lightweight 7-axis robot arm with 3kg payload, optimized for R&D, AI algorithm validation, and education.",
      tags: isKo ? ["7축", "3kg", "경제형"] : ["7-Axis", "3kg", "Economical"],
    },
    {
      href: `/${locale}/products/humanoid/robot-arm/rx75s`,
      image: "/products/humanoid/robot-arm/rx75s.png",
      name: "RX75S",
      nameEn: isKo ? "표준형" : "Standard",
      tagline: isKo
        ? "RX75의 성능을 유지하면서 더욱 컴팩트하게 설계된 로봇암. 좁은 공간에서도 강력한 성능을 제공합니다."
        : "A more compact robot arm that keeps RX75's performance — strong output even in tight spaces.",
      tags: isKo ? ["7축", "5kg", "컴팩트형"] : ["7-Axis", "5kg", "Compact"],
    },
    {
      href: `/${locale}/products/humanoid/robot-arm/rx75`,
      image: "/products/humanoid/robot-arm/rx75.png",
      name: "RX75",
      nameEn: isKo ? "표준형" : "Standard",
      tagline: isKo
        ? "5kg 가반하중과 내장형 6축 힘·토크 센서를 갖춘 표준형 휴머노이드 로봇암입니다."
        : "The standard humanoid robot arm with 5kg payload and a built-in 6-axis force/torque sensor.",
      tags: isKo ? ["7축", "5kg", "표준형"] : ["7-Axis", "5kg", "Standard"],
    },
    {
      href: `/${locale}/products/humanoid/robot-arm/rx75-vision`,
      image: "/products/humanoid/robot-arm/rx75-vision.png",
      name: "RX75 " + (isKo ? "비전" : "Vision"),
      nameEn: isKo ? "비전형" : "Vision",
      tagline: isKo
        ? "Intel RealSense D405 깊이 카메라를 기본 탑재한 AI 비전 통합형 로봇암. 스마트 자동화에 최적화되어 있습니다."
        : "AI vision-integrated robot arm with a built-in Intel RealSense D405 depth camera, optimized for smart automation.",
      tags: isKo ? ["7축", "5kg", "AI 비전"] : ["7-Axis", "5kg", "AI Vision"],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Humanoid Robot · Robot Arm
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              {isKo ? "로봇암 (RX 시리즈)" : "Robot Arm (RX Series)"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "산업 자동화와 Physical AI를 위한 신규 로봇암 라인업입니다. 7축 자유도와 내장형 힘·토크 센서를 기반으로, 경량형부터 AI 비전 통합형까지 4가지 모델을 제공합니다."
                : "A new robot arm lineup for industrial automation and Physical AI. Built on 7-axis DOF and a built-in force/torque sensor, offering 4 models from lightweight to AI vision-integrated."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/humanoid`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "휴머노이드 로봇 전체 보기" : "All Humanoid Robots"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/humanoid/robot-arm/rx75.png" alt="RX Series Robot Arm" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      sizes="(max-width: 768px) 100vw, 25vw"
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
