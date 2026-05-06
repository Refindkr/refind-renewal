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
    title: isKo ? "플랫폼 — Dural Arm Embodied AI" : "Platform — Dural Arm Embodied AI",
    description: isKo
      ? "차세대 AI 로보틱스 연구를 위한 풀스택 실험·교육 플랫폼. 양팔 로봇 + 딥비전 + 엔드이펙터 + 엣지 컴퓨팅이 통합된 올인원 플랫폼."
      : "Full-stack research and education platform for next-gen AI robotics. All-in-one platform integrating dual-arm robot, depth vision, end effectors, and edge computing.",
  };
}

export default async function PlatformPage({ params }: PageProps) {
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
    { icon: "🤖", title: isKo ? "AI 로봇 데이터셋 구축" : "AI Robot Dataset Collection" },
    { icon: "🧠", title: isKo ? "Embodied AI 행동 학습" : "Embodied AI Behavior Learning" },
    { icon: "🦾", title: isKo ? "양팔 협동 로봇 연구" : "Dual-Arm Collaborative Robot Research" },
    { icon: "🔬", title: isKo ? "반자동 작업 / 정밀 조작 테스트" : "Semi-automated Tasks / Precision Manipulation Test" },
    { icon: "🏫", title: isKo ? "연구실·교육기관·산업 R&D" : "Lab / Educational Institute / Industry R&D" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(102,157,253,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
              Physical AI · Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight">
              {isKo ? "플랫폼" : "Platform"}
            </h1>
            <p className="text-base text-[#669DFD] font-semibold mb-5">
              Dural Arm embodied AI development platform
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "양팔 로봇(dual-arm) + 딥비전 시스템 + 엔드이펙터 + 엣지 컴퓨팅 환경이 통합된 올인원 AI 로보틱스 연구, 교육 플랫폼입니다."
                : "An all-in-one AI robotics research and education platform integrating dual-arm robots, depth vision systems, end effectors, and edge computing environments."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의하기" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/physical-ai`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "피지컬 AI 전체 보기" : "All Physical AI"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px]">
            <Image
              src="/products/platform/1.jpeg"
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
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">Overview</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {isKo ? "차세대 AI 로보틱스 연구를 위한 풀스택 플랫폼" : "Full-Stack Platform for Next-Gen AI Robotics Research"}
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl mb-12">
            {isKo
              ? "The embodied intelligent dual arm data collection platform is a teaching and scientific research platform that integrates robotic arms, end effectors, edge computing platforms, and other instructions. 연구실·교육기관·산업 R&D에 최적화되어 있습니다."
              : "The embodied intelligent dual arm data collection platform is a teaching and scientific research platform that integrates robotic arms, end effectors, edge computing platforms, and other instructions. Optimized for labs, educational institutions, and industrial R&D."}
          </p>

          {/* Use Cases */}
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-6">
            {isKo ? "활용 분야" : "Use Cases"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                <span className="text-2xl">{u.icon}</span>
                <span className="text-sm font-medium text-gray-800">{u.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "제품 사양" : "Parameters"}
          </p>
          <div className="max-w-2xl overflow-hidden rounded-2xl border border-gray-100">
            {specs.map((s, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
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
          <Link href={`/${locale}/inquiry`}
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "문의하기" : "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
