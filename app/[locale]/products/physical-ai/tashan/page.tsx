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
    title: isKo ? "Tashan 포스센서" : "Tashan Force Sensor",
    description: isKo
      ? "로봇핸드 내장형 고감도 포스센서. 0.1N~25N 정밀 측정, 150Hz 샘플링으로 실시간 힘 피드백 구현."
      : "High-sensitivity force sensor for robot hand integration. 0.1N–25N precision measurement with 150Hz sampling for real-time force feedback.",
  };
}

export default async function TashanPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(102,157,253,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
              Physical AI · Force Sensor
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              Tashan
            </h1>
            <p className="text-sm text-[#669DFD] font-semibold mb-5">
              {isKo ? "힘을 느끼는 로봇의 감각" : "The Sense of Force for Robots"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "로봇핸드에 내장되는 고감도 포스센서. 0.1N에서 25N까지 정밀하게 측정하며, 150Hz 샘플링으로 실시간 힘 피드백을 구현합니다."
                : "High-sensitivity force sensor integrated into robot hands. Precisely measures 0.1N to 25N with 150Hz sampling for real-time force feedback."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의하기" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/physical-ai`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "Physical AI 전체 보기" : "All Physical AI"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[400px]">
            <Image
              src="/products/sensors/tashan.png"
              alt="Tashan Force Sensor"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "핵심 특징" : "Key Features"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "🎯",
                title: isKo ? "고정밀 측정" : "High-Precision Measurement",
                desc: isKo
                  ? "0.1N에서 25N까지 정밀하게 측정. 섬세한 물체 파지부터 강한 그립까지 전 구간에서 힘을 감지합니다."
                  : "Precise measurement from 0.1N to 25N. Detects force across the full range from delicate object gripping to strong grip.",
              },
              {
                icon: "⚡",
                title: isKo ? "150Hz 실시간 피드백" : "150Hz Real-time Feedback",
                desc: isKo
                  ? "150Hz 고속 샘플링으로 실시간 힘 데이터를 제공. 로봇핸드의 정밀 토크 제어를 가능하게 합니다."
                  : "Provides real-time force data with 150Hz high-speed sampling. Enables precise torque control of robot hands.",
              },
              {
                icon: "🔧",
                title: isKo ? "로봇핸드 내장형" : "Robot Hand Integrated",
                desc: isKo
                  ? "ROH-AP001, ROH-AP002 로봇핸드에 내장되어 물체의 재질과 형태에 따른 지능형 파지를 구현합니다."
                  : "Integrated into ROH-AP001 and ROH-AP002 robot hands for intelligent grasping based on object material and shape.",
              },
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
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "기술 사양" : "Technical Specs"}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5">{isKo ? "측정 사양" : "Measurement Specs"}</h3>
              <div className="space-y-3 text-sm">
                {[
                  { k: isKo ? "측정 범위" : "Measurement Range", v: "0.1N ~ 25N" },
                  { k: isKo ? "샘플링 레이트" : "Sampling Rate", v: "150Hz" },
                  { k: isKo ? "통신 인터페이스" : "Communication", v: "UART / RS485 / CAN FD" },
                  { k: isKo ? "탑재 모델" : "Compatible Models", v: "ROH-AP001, ROH-AP002" },
                ].map((s, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">{s.k}</span>
                    <span className="font-semibold text-gray-900">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "탑재 제품" : "Products with Tashan"}
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
            {[
              {
                href: `/${locale}/products/robot-hand/ap001`,
                name: "ROH-AP001",
                desc: isKo ? "Tashan 포스센서 내장 — 실시간 힘 피드백 로봇핸드" : "Tashan integrated — Real-time force feedback robot hand",
              },
              {
                href: `/${locale}/products/robot-hand/ap002`,
                name: "ROH-AP002",
                desc: isKo ? "3D 포스센서 + 팜 매트릭스 — 고성능 촉각 로봇핸드" : "3D force sensor + palm matrix — High-performance tactile robot hand",
              },
            ].map((p, i) => (
              <Link key={i} href={p.href}
                className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-400 hover:shadow-sm transition-all group">
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900 mb-1 group-hover:text-primary-500 transition-colors">{p.name}</div>
                  <div className="text-xs text-gray-400">{p.desc}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "촉각 지능을 로봇에 더하세요" : "Add Tactile Intelligence to Your Robot"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 센서 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal sensor solution."}
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
