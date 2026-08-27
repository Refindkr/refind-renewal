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
    title: isKo ? "듀얼암 로봇 플랫폼 — Dural Arm Embodied AI" : "Dual-Arm Robot Platform — Dural Arm Embodied AI",
    description: isKo
      ? "차세대 AI 로보틱스 연구를 위한 풀스택 실험·교육 플랫폼. 양팔 로봇 + 딥비전 + 엔드이펙터 + 엣지 컴퓨팅이 통합된 올인원 플랫폼."
      : "Full-stack research and education platform for next-gen AI robotics. All-in-one platform integrating dual-arm robot, depth vision, end effectors, and edge computing.",
  };
}

export default async function DualArmPlatformPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { k: isKo ? "제품명" : "Product Name", v: "Dural Arm embodied AI development platform" },
    { k: isKo ? "모델" : "Model", v: "DAP-D-75 / DAP-D-65" },
    { k: isKo ? "플랫폼 크기" : "Platform Size", v: "L 800mm × W 170mm × H 110mm" },
    { k: isKo ? "정격 페이로드" : "Rated Payload", v: "Dual Arm 10kg" },
    { k: isKo ? "작동 전압" : "Operating Voltage", v: "DC24V" },
    { k: isKo ? "페이로드" : "Payload", v: "≤ 0.5kg" },
    { k: isKo ? "작업 반경" : "Working Radius", v: "0 ~ 670mm" },
    { k: isKo ? "통신 방식" : "Communication", v: "CANFD, RS485" },
    { k: isKo ? "작동 환경" : "Working Environment", v: isKo ? "온도 0°C~50°C, 상대습도 ≤ 85%" : "Temp 0°C~50°C, Humidity ≤ 85%" },
    { k: isKo ? "최대 작동 속도" : "Max Operating Speed", v: "110RPM" },
  ];

  const useCases = [
    { title: isKo ? "AI 로봇 데이터셋 구축" : "AI Robot Dataset Collection" },
    { title: isKo ? "Embodied AI 행동 학습" : "Embodied AI Behavior Learning" },
    { title: isKo ? "양팔 협동 로봇 연구" : "Dual-Arm Collaborative Robot Research" },
    { title: isKo ? "반자동 작업 / 정밀 조작 테스트" : "Semi-automated Tasks / Precision Manipulation Test" },
    { title: isKo ? "연구실·교육기관·산업 R&D" : "Lab / Educational Institute / Industry R&D" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Physical AI · Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight">
              {isKo ? "듀얼암 로봇 플랫폼" : "Dual-Arm Robot Platform"}
            </h1>
            <p className="text-base text-[#E1251B] font-semibold mb-5">
              Dural Arm embodied AI development platform
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "양팔 로봇(dual-arm) + 딥비전 시스템 + 엔드이펙터 + 엣지 컴퓨팅 환경이 통합된 올인원 AI 로보틱스 연구, 교육 플랫폼입니다."
                : "An all-in-one AI robotics research and education platform integrating dual-arm robots, depth vision systems, end effectors, and edge computing environments."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/physical-ai/platform`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "플랫폼 전체 보기" : "All Platforms"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px]">
            <Image
              src="/products/platform/1.png"
              alt="Dural Arm embodied AI development platform"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Overview</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {isKo ? "차세대 AI 로보틱스 연구를 위한 풀스택 플랫폼" : "Full-Stack Platform for Next-Gen AI Robotics Research"}
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl mb-12">
            {isKo
              ? "AI 기반 로봇 연구와 애플리케이션 개발을 위한 듀얼 암 로봇 플랫폼입니다. 사람과 유사한 양팔 협업 동작을 구현할 수 있으며, AI 학습, 데이터 수집, 원격 조작, 시연 기반 학습, 강화학습 등 다양한 연구 및 개발 환경에 활용됩니다."
              : "A dual-arm robot platform for AI-based robotics research and application development. It replicates human-like two-arm collaborative motion and is used across a wide range of research and development environments — AI training, data collection, teleoperation, demonstration-based learning, and reinforcement learning."}
          </p>

          {/* Use Cases */}
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-6">
            {isKo ? "활용 분야" : "Use Cases"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u, i) => (
              <div key={i} className="flex items-center gap-4 border-l-2 border-gray-900 pl-4 py-2">
                <span className="text-sm font-medium text-gray-800">{u.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 사양" : "Parameters"}
          </p>
          <div className="max-w-4xl columns-1 md:columns-2 md:gap-x-10">
            {specs.map((s, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm break-inside-avoid ${i % 2 === 0 ? "bg-gray-50/40" : ""}`}>
                <span className="text-gray-500 font-medium">{s.k}</span>
                <span className="font-semibold text-gray-900 text-right">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "AI 로봇 연구 플랫폼이 필요하신가요?" : "Looking for an AI Robotics Research Platform?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 플랫폼 구성을 안내해 드립니다." : "Refind experts will guide you to the optimal platform configuration."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
