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
    title: isKo ? "Elephant Robotics 협동로봇" : "Elephant Robotics Collaborative Robot",
    description: isKo
      ? "컴팩트한 테이블탑 협동로봇. 교육·연구·경량 자동화에 최적화된 Elephant Robotics 플랫폼."
      : "Compact tabletop collaborative robot. Elephant Robotics platform optimized for education, research, and lightweight automation.",
  };
}

export default async function ElephantRoboticsPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = [
    {
      icon: "🔄",
      title: isKo ? "고자유도 6축 구동" : "High-DOF 6-Axis Motion",
      desc: isKo
        ? "6축 관절 구조로 인간 팔과 유사한 자유로운 동작이 가능. 좁은 공간에서도 정밀한 작업을 수행합니다."
        : "6-axis joint structure enables human arm-like freedom of motion, performing precise tasks even in confined spaces.",
    },
    {
      icon: "🤝",
      title: isKo ? "협동 작업 최적화" : "Collaborative Work Optimization",
      desc: isKo
        ? "내장 토크 센서로 충돌 감지 및 즉각 정지. 인간 옆에서 안전하게 작업하는 진정한 협동로봇입니다."
        : "Built-in torque sensors detect collisions and stop instantly — a true collaborative robot that works safely alongside humans.",
    },
    {
      icon: "💻",
      title: isKo ? "쉬운 프로그래밍" : "Easy Programming",
      desc: isKo
        ? "Python, ROS, myBlockly 등 다양한 SDK 지원. 비전문가도 쉽게 자동화 작업을 구성할 수 있습니다."
        : "Supports Python, ROS, myBlockly and more. Anyone can configure automation tasks without deep expertise.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(102,157,253,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
              Collaborative Robot
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              Elephant Robotics
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "경량 고성능 협동로봇 암. 연구소·교육·중소 제조 현장에 최적화된 오픈 플랫폼으로 빠른 자동화 구현이 가능합니다."
                : "Lightweight high-performance collaborative robot arm. An open platform optimized for research, education, and SME manufacturing for rapid automation."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/collaborative-robot`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "협동로봇 전체 보기" : "All Collaborative Robots"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px]">
            <Image
              src="/products/collaborative-robot/3.jpeg"
              alt="Elephant Robotics"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "핵심 특징" : "Key Features"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "자동화 도입을 고민하고 계신가요?" : "Considering Automation?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution."}
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
