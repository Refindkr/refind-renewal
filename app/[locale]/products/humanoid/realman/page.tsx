import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "REALMAN 휴머노이드 로봇" : "REALMAN Humanoid Robot",
    description: isKo
      ? "REALBOT S2, REALBOT L2, REALBOT 01, Dual arm vertical Lift, Single arm vertical lift — REALMAN 휴머노이드 라인업."
      : "REALBOT S2, REALBOT L2, REALBOT 01, Dual arm vertical Lift, Single arm vertical lift — the REALMAN humanoid lineup.",
  };
}

export default async function HumanoidRealmanPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const products = [
    {
      href: `/products/humanoid/realbot`,
      image: "/products/humanoid/realbot-s2.png",
      name: "REALBOT S2",
      nameEn: "REALMAN REALBOT S2",
      tagline: isKo
        ? "인간과 유사한 형태와 지능을 갖춘 휴머노이드 로봇으로, 자율 학습과 정밀한 동작을 통해 다양한 환경에서 인간과 협력합니다."
        : "Full-body humanoid robot. High-DOF joints and precise control for diverse task execution.",
      tags: isKo ? ["REALMAN", "풀바디", "고자유도"] : ["REALMAN", "Full-Body", "High-DOF"],
    },
    {
      href: `/products/humanoid/realbot-l2`,
      image: "/products/humanoid/realbot-l2.png",
      name: "REALBOT L2",
      nameEn: "REALMAN REALBOT L2",
      tagline: isKo
        ? "승강 구조와 휠 기반 이동을 결합해 작업 높이를 자유롭게 조절할 수 있는 휴머노이드 로봇으로, 물류·제조·서비스 환경에 유연하게 대응합니다."
        : "A wheeled humanoid with a lifting structure. Adjustable working height, optimized for logistics, warehouse, and factory use.",
      tags: isKo ? ["REALMAN", "승강형", "17 DOF"] : ["REALMAN", "Lifting", "17 DOF"],
    },
    {
      href: `/products/humanoid/realbot-01`,
      image: "/products/humanoid/realbot-01.png",
      name: "REALBOT 01",
      nameEn: "REALMAN REALBOT 01",
      tagline: isKo
        ? "모듈형 구조와 휠 기반 이동을 갖춘 연구용 휴머노이드 로봇으로, Embodied AI 연구와 데이터 수집 및 AI 학습에 적합합니다."
        : "A modular-architecture AI humanoid platform optimized for embodied AI research and algorithm development.",
      tags: isKo ? ["REALMAN", "모듈형", "21 DOF"] : ["REALMAN", "Modular", "21 DOF"],
    },
    {
      href: `/products/humanoid/embodied-dual-arm`,
      image: "/products/humanoid/embodied dual arm.png",
      name: "Dual arm vertical Lift",
      nameEn: "REALMAN Dual Arm Vertical Lift",
      tagline: isKo
        ? "이동·승강·양팔 작업을 하나의 플랫폼에 통합한 모바일 로봇으로, 제조·물류·검사 등 다양한 작업을 자동화할 수 있습니다."
        : "An industrial mobile robot integrating mobility, lifting, and dual-arm manipulation on one platform, optimized for manufacturing, logistics, and inspection automation.",
      tags: isKo ? ["REALMAN", "양팔", "리프팅"] : ["REALMAN", "Dual-Arm", "Lifting"],
    },
    {
      href: `/products/humanoid/lifting-platform`,
      image: "/products/humanoid/lifting platform.png",
      name: "Single arm vertical lift",
      nameEn: "REALMAN Single Arm Vertical Lift",
      tagline: isKo
        ? "자율주행·승강·단일 로봇암을 결합해 다양한 높이의 작업을 수행할 수 있는 모바일 자동화 로봇입니다."
        : "A compact mobile manipulator combining an autonomous platform, lift axis, and single robot arm — optimized for manufacturing, logistics, and inspection.",
      tags: isKo ? ["REALMAN", "이동형", "리프팅"] : ["REALMAN", "Mobile", "Lifting"],
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
              Humanoid Robot · REALMAN
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              {isKo ? "REALMAN 휴머노이드 로봇" : "REALMAN Humanoid Robot"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "인간과 유사한 형태와 지능을 갖춘 REALMAN 휴머노이드 라인업입니다. 풀바디 로봇부터 승강형·모듈형·양팔 모바일 플랫폼까지 다양한 환경에 맞춰 선택할 수 있습니다."
                : "REALMAN's humanoid lineup with human-like form and intelligence — from a full-body robot to lifting, modular, and dual-arm mobile platforms for diverse environments."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/products/humanoid`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "휴머노이드 전체 보기" : "All Humanoids"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/humanoid/realbot-s2.png" alt="REALMAN Humanoid" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
