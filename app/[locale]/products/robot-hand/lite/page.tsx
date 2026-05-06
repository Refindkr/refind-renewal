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
    title: isKo ? "ROH-Lite 로봇핸드 (보급형)" : "ROH-Lite Robot Hand (Economy)",
    description: isKo
      ? "가성비 6DOF 로봇핸드. 457g 경량, 빠른 구동으로 연구·교육용에 최적화된 보급형 로봇핸드."
      : "Cost-effective 6-DOF robot hand. 457g lightweight design optimized for research and education.",
  };
}

export default async function LitePage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(102,157,253,0.12) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
              Robot Hand · Economy
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">ROH-Lite</h1>
            <p className="text-sm text-[#669DFD] font-semibold mb-5">{isKo ? "합리적인 가격, 완성된 6 DOF" : "Affordable Price, Complete 6 DOF"}</p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "연구·교육용으로 최적화된 보급형 6자유도 로봇핸드. 가볍고 빠르게, 핵심 기능에 집중합니다."
                : "Economy 6-DOF robot hand optimized for research and education. Light, fast, and focused on core functionality."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/robot-hand`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/robot-hand/ROhandlite.png" alt="ROH-Lite" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">{isKo ? "핵심 특징" : "Key Features"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "🪶", title: isKo ? "경량 설계" : "Lightweight Design", desc: isKo ? "457g의 가벼운 무게로 장시간 운용과 빠른 구동(0.7초)에 최적화" : "457g lightweight design optimized for long operation and fast actuation (0.7s)" },
              { icon: "💰", title: isKo ? "합리적인 가격" : "Cost-Effective", desc: isKo ? "핵심 6DOF 기능을 유지하면서 연구·교육 예산에 맞는 최적의 가성비" : "Optimal cost-performance ratio for research and education budgets while maintaining core 6-DOF functionality" },
              { icon: "🔗", title: isKo ? "즉시 연동" : "Easy Integration", desc: isKo ? "RS-485 및 Modbus 프로토콜 지원으로 기존 시스템에 빠르게 통합 가능" : "Quick integration with existing systems via RS-485 and Modbus protocol support" },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">{isKo ? "기술 사양" : "Technical Specs"}</p>
          <div className="max-w-lg bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <div className="space-y-0 text-sm">
              {[
                [isKo ? "자유도" : "DOF", "6 DOF"],
                [isKo ? "무게" : "Weight", "457g ± 5g"],
                [isKo ? "구동 속도" : "Speed", isKo ? "0.7초" : "0.7s"],
                [isKo ? "포스/촉각 센서" : "Force/Tactile", isKo ? "미탑재" : "Not included"],
                [isKo ? "샘플링" : "Sampling", "50Hz"],
                [isKo ? "통신" : "Communication", "RS-485, Modbus"],
                ["SDK", "ROS, ROS2, Python, C++"],
              ].map(([k, v], i, arr) => (
                <div key={i} className={`flex justify-between py-2.5 ${i < arr.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <span className="text-gray-500">{k}</span>
                  <span className="font-semibold text-gray-900">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">{isKo ? "기술 혁신을 직접 경험해보세요" : "Experience the Innovation Firsthand"}</h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인은 단순한 판매를 넘어 최적화된 기술 지원 및 커스텀 솔루션을 제공합니다." : "Refind goes beyond sales — we provide optimized technical support and custom solutions."}
          </p>
          <Link href={`/${locale}/inquiry`}
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
