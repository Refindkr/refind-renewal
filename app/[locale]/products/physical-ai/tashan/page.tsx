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
    title: isKo ? "Tashan 촉각 센서" : "Tashan Tactile Sensor",
    description: isKo
      ? "힘·압력·근접·마찰·재질까지 감지하는 차세대 멀티모달 촉각 센서. NVIDIA Isaac Sim 공식 등록 파트너."
      : "Next-generation multi-modal tactile sensor detecting force, pressure, proximity, friction, and material. Official NVIDIA Isaac Sim partner.",
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
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Physical AI · Tactile Sensing
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              Tashan Sensor
            </h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "힘을 느끼는 로봇의 감각" : "The Sense of Touch for Robots"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "첨단 촉각 센싱 기술은 단순한 힘 감지를 넘어 촉감·압력·근접·마찰·재질 변화까지 읽어내는 새로운 차원의 로봇 감각을 가능하게 합니다. 사람의 손처럼 섬세하게 반응하는 로봇 핸드는 제조·서비스·의료 분야의 정밀성을 크게 확장합니다."
                : "Advanced tactile sensing technology goes beyond simple force detection — enabling a new dimension of robot senses that read touch, pressure, proximity, friction, and material changes. Robot hands that respond as delicately as human hands greatly expand precision in manufacturing, service, and medical robotics."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/physical-ai`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "Physical AI 전체 보기" : "All Physical AI"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[400px]">
            <Image
              src="/products/sensors/tashan/tashan.png"
              alt="Tashan Tactile Sensor"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "핵심 특징" : "Key Features"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: isKo ? "멀티모달 촉각 정보" : "Multi-Modal Tactile Info",
                desc: isKo
                  ? "힘·압력 분포·온도·재질·근접 거리를 동시에 감지. 다중 센서 융합으로 정확한 조작을 구현합니다."
                  : "Simultaneously detects force, pressure distribution, temperature, material, and proximity. Multi-sensor fusion enables precise manipulation.",
              },
              {
                title: isKo ? "초고감도 센싱" : "Ultra-High Sensitivity",
                desc: isKo
                  ? "수 그램 단위의 미세한 힘도 감지. 반응 지연을 최소화해 정밀 조립 및 실험용 로봇에 최적화됩니다."
                  : "Detects forces as small as a few grams. Minimizes response delay for precision assembly and experimental robots.",
              },
              {
                title: isKo ? "비접촉 근접 감지" : "Proximity Perception",
                desc: isKo
                  ? "물체에 닿기 전 1~2cm 거리에서 존재를 미리 감지. 사전 회피 제어와 소프트 터치를 구현합니다."
                  : "Detects object presence 1–2cm before contact. Enables pre-emptive avoidance control and soft touch.",
              },
              {
                title: isKo ? "동적 마찰력 센싱" : "Dynamic Tangent Force",
                desc: isKo
                  ? "미끄럼 발생을 실시간 예측해 파지력을 자동 조정. 동적 작업 환경에서의 안전성을 향상합니다."
                  : "Real-time slip prediction with automatic grip force adjustment. Improves safety in dynamic work environments.",
              },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spec Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "제품 사양" : "Specifications"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "Tashan 센서 모델 비교" : "Tashan Sensor Model Comparison"}
          </h2>
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {["TS-F-A", "TS-F-A2", "TS-F-B", "TS-F-C", "TS-E-A", "TS-E-B"].map((model) => (
                <div key={model} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="relative h-32 bg-gray-50">
                    <Image
                      src={`/products/sensors/tashan/models/${model.toLowerCase()}.png`}
                      alt={model}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  </div>
                  <p className="text-center text-xs font-bold text-[#E1251B] py-2 border-t border-gray-100">{model}</p>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">{isKo ? "모델" : "Model"}</th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-gray-500">{isKo ? "센싱 방식" : "Sensing Type"}</th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-gray-500">
                    <span className="block">Normal Force Range</span>
                  </th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-gray-500">
                    <span className="block">Normal Resolution</span>
                  </th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-gray-500">
                    <span className="block">Tangential Resolution</span>
                  </th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-gray-500">Accuracy</th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-gray-500">
                    {isKo ? "비접촉 감지" : "Proximity"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["TS-F-A",  "3D Force Sensing",                "0 – 20 N", "0.1 N",  "0.25 N", "5% FS", "≥ 1 cm"],
                  ["TS-F-A2", "Matrix Sensing",                  "0 – 50 N", "0.1 N",  "0.25 N", "5% FS", "≥ 1 cm"],
                  ["TS-F-B",  "Multi-modal Sensing",             "0 – 20 N", "0.1 N",  "0.25 N", "5% FS", "≥ 1 cm"],
                  ["TS-F-C",  "Multi-modal Sensing (Nail Type)", "0 – 20 N", "0.1 N",  "0.25 N", "5% FS", "≥ 2 cm"],
                  ["TS-E-A",  "3D Force Sensing",                "0 – 50 N", "0.1 N",  "0.25 N", "5% FS", "≥ 1.5 cm"],
                  ["TS-E-B",  "Matrix Sensing",                  "0 – 50 N", "0.05 N", "0.25 N", "5% FS", "≥ 1.5 cm"],
                ].map(([model, type, range, normal, tangential, acc, prox], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-5 py-3.5 font-bold text-[#E1251B] whitespace-nowrap">{model}</td>
                    <td className="px-5 py-3.5 text-center text-gray-600 text-xs">{type}</td>
                    <td className="px-5 py-3.5 text-center text-gray-700 font-medium">{range}</td>
                    <td className="px-5 py-3.5 text-center text-gray-700">{normal}</td>
                    <td className="px-5 py-3.5 text-center text-gray-700">{tangential}</td>
                    <td className="px-5 py-3.5 text-center text-gray-700">{acc}</td>
                    <td className="px-5 py-3.5 text-center text-gray-700">{prox}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "제품 영상" : "Product Video"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "Tashan 센서 동작 영상" : "Tashan Sensor in Action"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { id: "_-5LqwTmi9o", title: isKo ? "Tashan 센서 동작 시연" : "Tashan Sensor Demo" },
              { id: "jN6dp4Qjaz4", title: isKo ? "Tashan 센서 활용 사례" : "Tashan Sensor Application" },
            ].map((v, i) => (
              <div key={i}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-3 text-center">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases GIF */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "활용 사례" : "Use Cases"}
          </p>
          <h2 className="text-2xl font-extrabold text-white mb-12 tracking-tight">
            {isKo ? "다양한 환경에서의 실제 동작" : "Real-World Applications"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { file: "image.gif",  label: isKo ? "정밀 파지" : "Precision Grasping" },
              { file: "image2.gif", label: isKo ? "비정형 물체 파지" : "Fragile Object Handling" },
              { file: "image3.gif", label: isKo ? "인간-로봇 협업" : "Human-Robot Interaction" },
              { file: "image4.gif", label: isKo ? "AI 강화학습" : "AI Reinforcement Learning" },
            ].map((g, i) => (
              <div key={i} className="group relative aspect-video overflow-hidden rounded-xl">
                <img
                  src={`/products/sensors/tashan/${g.file}`}
                  alt={g.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-semibold text-white/90">{g.label}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { num: "01", title: isKo ? "정밀 전자부품 조립" : "Precision Assembly", desc: isKo ? "미세 힘 감지로 부품 파손 없이 정밀 조립 자동화" : "Automate precision assembly without part damage via fine force detection" },
              { num: "02", title: isKo ? "비정형 물체 파지" : "Fragile Object Handling", desc: isKo ? "파손 주의 물체도 안전하게 핸들링하는 지능형 그립 제어" : "Intelligent grip control for safe handling of fragile and irregular objects" },
              { num: "03", title: isKo ? "협동로봇 안전 HRI" : "Safe HRI", desc: isKo ? "사람 접촉 감지 및 즉각 반응으로 안전한 인간-로봇 협업 구현" : "Safe human-robot collaboration through touch detection and instant response" },
              { num: "04", title: isKo ? "AI 강화학습 & 디지털 트윈" : "AI Learning & Digital Twin", desc: isKo ? "NVIDIA Isaac Sim 연동으로 촉각 데이터 기반 AI 학습 가속화" : "Accelerate tactile data-based AI learning via NVIDIA Isaac Sim integration" },
            ].map((u, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-xs font-bold text-white/20 mb-2">{u.num}</div>
                <h3 className="text-sm font-bold text-white mb-2">{u.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision-Touch Fusion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            Vision–Touch Fusion Technology Platform
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {isKo ? "로봇이 '보고' 동시에 '느끼는' 새로운 지능의 시대" : "A New Era of Intelligence — Robots That See and Feel Simultaneously"}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-3xl mb-3">
            {isKo
              ? "Vision–Touch Fusion 플랫폼은 카메라 기반의 시각 정보(Vision)와 AI 촉각 센서(Touch)를 통합하여 로봇이 사람의 인지 과정처럼 환경을 이해하도록 만드는 차세대 지능형 인터페이스입니다."
              : "The Vision–Touch Fusion platform integrates camera-based visual information (Vision) with AI tactile sensors (Touch) — a next-generation intelligent interface that enables robots to understand their environment like human cognition."}
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-3xl mb-10">
            {isKo
              ? "이 기술은 단순한 물체 인식이나 힘 감지를 넘어, 기계가 스스로 사물을 보고 판단하고 조작하는 능력을 극적으로 향상시킵니다."
              : "Beyond simple object recognition or force detection, this technology dramatically enhances a machine's ability to see, judge, and manipulate objects on its own."}
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            {/* Image */}
            <div className="relative w-full h-80 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <Image
                src="/products/sensors/tashan/53-tashan.jpg"
                alt="Vision-Touch Fusion Platform"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-4">
                Vision + Tactile = {isKo ? "초정밀 물체 이해" : "Ultra-Precise Object Understanding"}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {isKo
                  ? "로봇은 카메라로 물체의 형상·위치·재질을 파악하고, 촉각센서로 힘·압력·미끄럼·질감·접촉 상태를 동시에 분석합니다."
                  : "Robots use cameras to understand object shape, position, and material — while tactile sensors simultaneously analyze force, pressure, slip, texture, and contact state."}
              </p>
              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {isKo
                    ? "Vision만 의존하는 로봇은 빛, 그림자, 반사광, 가려진 물체 등에 취약합니다. 하지만 Vision–Touch Fusion은 촉각이 시각의 불확실성을 보완하고 시각이 촉각의 한계를 보완하여 어떤 환경에서도 높은 안정성을 유지합니다."
                    : "Robots relying solely on vision are vulnerable to lighting, shadows, reflections, and occluded objects. But Vision–Touch Fusion keeps touch compensating for visual uncertainty and vision compensating for tactile limitations — maintaining high stability in any environment."}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Vision</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {isKo ? "형상·위치·재질 파악" : "Shape, position & material"}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Touch</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {isKo ? "힘·압력·미끄럼·질감" : "Force, pressure, slip & texture"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NVIDIA Isaac Sim */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              NVIDIA Isaac Sim
            </p>
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
              {isKo ? "NVIDIA Isaac Sim 공식 촉각 센서 파트너" : "Official Tactile Sensor Partner for NVIDIA Isaac Sim"}
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              {isKo
                ? "NVIDIA Isaac Sim에서 촉각 센서로 유일하게 등록된 파트너입니다. AI 기반 로봇 개발, 시뮬레이션, 데이터 생성, 강화학습, 디지털 트윈 운영 전 영역에 걸쳐 활용할 수 있습니다."
                : "The only tactile sensor officially registered in NVIDIA Isaac Sim. Applicable across AI-based robot development, simulation, data generation, reinforcement learning, and digital twin operations."}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                isKo ? "AI 로봇 개발" : "AI Robot Dev",
                isKo ? "시뮬레이션" : "Simulation",
                isKo ? "데이터 생성" : "Data Generation",
                isKo ? "강화학습" : "Reinforcement Learning",
                isKo ? "디지털 트윈" : "Digital Twin",
              ].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/products/sensors/tashan/image.png"
              alt="NVIDIA Isaac Sim Integration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
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
                className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all group">
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900 mb-1">{p.name}</div>
                  <div className="text-xs text-gray-400">{p.desc}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#E1251B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "납품 사례" : "Delivery Cases"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "실제 적용 사례" : "Real-World Applications"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/sensors/tashan/3.jpg"
              alt={isKo ? "Tashan 납품 사례" : "Tashan Delivery Cases"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
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
