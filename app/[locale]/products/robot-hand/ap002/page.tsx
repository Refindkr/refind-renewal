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
    title: isKo ? "ROH-AP002 로봇핸드 (고성능 촉각)" : "ROH-AP002 Robot Hand (Tactile Intelligence)",
    description: isKo
      ? "3D 포스센서 + 11×5 팜 촉각 매트릭스로 인간 수준의 촉각 데이터 수집. 575g 경량 설계."
      : "3D force sensor + 11×5 palm tactile matrix for human-level tactile data acquisition. 575g lightweight design.",
  };
}

export default async function AP002Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(10,171,186,0.12) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(102,157,253,0.08) 0%, transparent 45%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
              Robot Hand · Tactile Intelligence
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">ROH-AP002</h1>
            <p className="text-sm text-[#0AABBA] font-semibold mb-5">{isKo ? "로봇에게 '촉각'을 부여하다" : "Giving Robots the Sense of Touch"}</p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "3D 포스센서 매트릭스와 11×5 팜(Palm) 센서로 구현하는 차세대 고정밀 센싱 솔루션."
                : "Next-generation high-precision sensing solution realized through 3D force sensor matrix and 11×5 palm sensor."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#0AABBA] text-white font-semibold rounded-full text-sm hover:bg-[#088A96] transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/robot-hand`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/robot-hand/ap002.jpeg" alt="ROH-AP002" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-10">{isKo ? "핵심 가치" : "Core Value"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Multidimensional", desc: isKo ? "손가락 끝 3D 포스센서와 손바닥 고밀도 도트 매트릭스로 인간 수준의 촉각 데이터 수집" : "Human-level tactile data acquisition with fingertip 3D force sensors and high-density palm dot matrix" },
              { title: "Ultra-Responsive", desc: isKo ? "0.7초 구동 속도와 6자유도 메커니즘으로 실시간 피드백 제어 최적화" : "Real-time feedback control optimization with 0.7s actuation speed and 6-DOF mechanism" },
              { title: "Versatile Connectivity", desc: isKo ? "UART, RS485, CAN FD 인터페이스 지원으로 고대역폭 데이터 전송 보장" : "High-bandwidth data transmission guaranteed with UART, RS485, CAN FD interface support" },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-10">{isKo ? "기술 상세" : "Technical Deep Dive"}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5">{isKo ? "3D 포스 & 팜 매트릭스 센서" : "3D Force & Palm Matrix Sensor"}</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">{isKo ? "손가락 센싱" : "Finger Sensing"}</span>
                  <p className="text-gray-500 mt-1">{isKo ? "말단 부위 3D 포스센싱(방향 분해능 1°) 및 기절골 수직항력 측정" : "Distal 3D force sensing (1° angular resolution) and proximal phalanx normal force measurement"}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{isKo ? "손바닥 매트릭스" : "Palm Matrix"}</span>
                  <p className="text-gray-500 mt-1">{isKo ? "11×5 도트 매트릭스 배치로 비정형 물체의 접촉면 정밀 파악 (150Hz)" : "11×5 dot matrix layout for precise contact surface mapping of irregular objects (150Hz)"}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{isKo ? "핑거 패드" : "Finger Pad"}</span>
                  <p className="text-gray-500 mt-1">{isKo ? "터치스크린 조작이 가능한 핑거 패드 인터페이스 지원" : "Finger pad interface supporting touchscreen operation"}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5">{isKo ? "주요 사양" : "Key Specs"}</h3>
              <div className="space-y-0 text-sm">
                {[
                  [isKo ? "가동 관절" : "Active Joints", "11개 / 6 DOF"],
                  [isKo ? "무게" : "Weight", "575g ± 5g"],
                  [isKo ? "구동 속도" : "Speed", isKo ? "0.7초" : "0.7s"],
                  [isKo ? "팜 샘플링" : "Palm Sampling", "150Hz"],
                  [isKo ? "손가락 샘플링" : "Finger Sampling", "50Hz"],
                  [isKo ? "통신" : "Comm.", "UART, RS485, CAN FD"],
                ].map(([k, v], i, arr) => (
                  <div key={i} className={`flex justify-between py-2.5 ${i < arr.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <span className="text-gray-500">{k}</span>
                    <span className="font-semibold text-gray-900">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
            {isKo ? "치수 도면" : "Dimensions"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "제품 규격 및 치수" : "Product Dimensions"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/ap002_size.png"
              alt={isKo ? "ROH-AP002 치수 도면" : "ROH-AP002 Dimension Drawing"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Size & Performance Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
            {isKo ? "제품 사이즈 & 성능" : "Size & Performance"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
            {isKo ? "ROH-AP002 상세 스펙" : "ROH-AP002 Detailed Specifications"}
          </h2>
          <p className="text-sm text-gray-500 mb-10">{isKo ? "무게: 575g ± 5g" : "Weight: 575g ± 5g"}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Measurement Table */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">{isKo ? "치수 측정" : "Measurement"}</h3>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {[
                  ["중지 끝~손목 세로 거리", "Vertical distance from the tip of the middle finger to the wrist", "183 mm"],
                  ["엄지 끝~손목 세로 거리", "Vertical distance from the thumb tip to wrist", "97 mm"],
                  ["엄지 길이", "Thumb length", "113 mm"],
                  ["최대 손바닥 너비", "Maximum palm width", "82 mm"],
                  ["손목 직경", "Wrist diameter", "49 mm"],
                  ["엄지 측면 최대 개폐 각도", "Maximum opening and closing angle of the thumb side", "0 ~ 31°"],
                  ["엄지~손바닥 최대 개폐 각도", "Maximum opening and closing angle of the thumb to the palm", "0 ~ 50°"],
                  ["엄지 측면 회전 각도", "Thumb lateral rotation angle", "0 ~ 90°"],
                  ["터치스크린 조작", "Finger touch screen function", isKo ? "지원" : "Supported"],
                  ["손가락 힘 피드백", "Finger force feedback", isKo ? "지원" : "Supported"],
                ].map(([ko, en, v], i) => (
                  <div key={i} className="flex justify-between px-6 py-3">
                    <span className="text-gray-500 pr-4">
                      <span className="block">{ko}</span>
                      <span className="block text-xs text-gray-400">{en}</span>
                    </span>
                    <span className="font-semibold text-gray-900 whitespace-nowrap self-center">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Performance Table */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">{isKo ? "성능 측정" : "Performance"}</h3>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {[
                  ["최대 속도 전 범위 굽힘/펴기 시간", "Bending/stretching time for full range at maximum speed", "0.7 s"],
                  ["최대 속도 기준 엄지 전체 회전 시간", "Rotation time of thumb for full range at maximum speed", "0.7 s"],
                  ["펴진 상태 각 손가락 끝 능동력", "Active force of each finger tip on stretched state", "≥ 0.5 kgf"],
                  ["굽힌 상태 각 손가락 끝 능동력", "Active force of each finger tip on bended state", "≥ 1 kgf"],
                  ["엄지 끝 최대 능동력", "Maximum active force of thumb tip", "≥ 1 kgf"],
                  ["4손가락 굽힌 상태 최대 수동 하중", "Maximum passive load for four fingers on bended state", "30 kg"],
                  ["각 손가락 굽힌 상태 최대 수동 하중", "Maximum passive load for each finger on bended state", "10 kg"],
                  ["각 손가락 펴진 상태 최대 수동 하중", "Maximum passive load for each finger on stretched state", "8 kg"],
                ].map(([ko, en, v], i) => (
                  <div key={i} className="flex justify-between px-6 py-3">
                    <span className="text-gray-500 pr-4">
                      <span className="block">{ko}</span>
                      <span className="block text-xs text-gray-400">{en}</span>
                    </span>
                    <span className="font-semibold text-gray-900 whitespace-nowrap self-center">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
            {isKo ? "제품 구조" : "Product Structure"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "ROH-AP002 구조도" : "ROH-AP002 Structure Diagram"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/ap002_structure.png"
              alt={isKo ? "ROH-AP002 구조도" : "ROH-AP002 Structure Diagram"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Sensor Spec Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
            {isKo ? "센서 사양" : "Sensor Specifications"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "ROH-AP002 상세 스펙" : "ROH-AP002 Detail Specs"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/ap002_spec.png"
              alt={isKo ? "ROH-AP002 스펙" : "ROH-AP002 Specs"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
            {isKo ? "제품 영상" : "Product Video"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "ROH-AP002 동작 영상" : "ROH-AP002 in Action"}
          </h2>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/C2wfcAO5GxY"
                title="ROH-AP002"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — GIF */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
            {isKo ? "활용 사례" : "Use Cases"}
          </p>
          <h2 className="text-2xl font-extrabold text-white mb-12 tracking-tight">
            {isKo ? "다양한 환경에서의 실제 동작" : "Real-World Motion in Various Environments"}
          </h2>

          {/* GIF grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {[
              { file: "ROhand.gif",            label: isKo ? "기본 동작" : "Basic Motion" },
              { file: "rohandclick.gif",        label: isKo ? "클릭 동작" : "Click" },
              { file: "rohand_grap_shorts.gif", label: isKo ? "파지 동작" : "Grasping" },
              { file: "rohand_mov_shorts.gif",  label: isKo ? "이동 동작" : "Movement" },
              { file: "rohand_g.gif",           label: isKo ? "제스처" : "Gesture" },
              { file: "rohand_g2.gif",          label: isKo ? "제스처 2" : "Gesture 2" },
              { file: "rohand_hu.gif",          label: isKo ? "휴머노이드" : "Humanoid" },
              { file: "rohand_robot.gif",       label: isKo ? "로봇 암 연동" : "Robot Arm" },
            ].map((g, i) => (
              <div key={i} className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={`/products/robot-hand/gif/${g.file}`}
                  alt={g.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-semibold text-white/90">{g.label}</span>
              </div>
            ))}
          </div>

          {/* Use case cards */}
          <div className="grid md:grid-cols-3 gap-3 mt-10">
            {[
              {
                num: "01",
                gif: "rohand_bot15.gif",
                title: isKo ? "AI 촉각 학습 연구소" : "AI Tactile Learning Lab",
                desc: isKo ? "물체의 질감·강도·형태를 학습해 인간 수준의 정교한 파지 알고리즘 개발" : "Learn object texture, hardness, and shape to develop human-level grasping algorithms",
              },
              {
                num: "02",
                gif: "rohand_r2.gif",
                title: isKo ? "정밀 조립 자동화" : "Precision Assembly Automation",
                desc: isKo ? "미세한 힘 조절이 필수적인 전자 부품 조립 및 실시간 품질 검수 라인에 최적" : "Ideal for electronic component assembly and real-time quality inspection requiring fine force control",
              },
              {
                num: "03",
                gif: "rohand_robot4.gif",
                title: isKo ? "차세대 휴머노이드" : "Next-Gen Humanoid",
                desc: isKo ? "인간과 유사한 촉각 피드백으로 로봇과 환경 간의 상호작용 지능 향상" : "Human-like tactile feedback to elevate robot-environment interaction intelligence",
              },
            ].map((u, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`/products/robot-hand/gif/${u.gif}`}
                    alt={u.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold text-white/20 mb-1.5">{u.num}</div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{u.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-10">{isKo ? "활용 사례" : "Use Cases"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: isKo ? "AI 촉각 학습 연구소" : "AI Tactile Learning Lab", desc: isKo ? "물체의 질감·강도·형태를 학습해 인간 수준의 정교한 파지 알고리즘 개발" : "Learn object texture, hardness, and shape to develop human-level grasping algorithms" },
              { title: isKo ? "정밀 조립 자동화" : "Precision Assembly Automation", desc: isKo ? "미세한 힘 조절이 필수적인 전자 부품 조립 및 실시간 품질 검수 라인에 최적" : "Ideal for electronic component assembly and real-time quality inspection requiring fine force control" },
              { title: isKo ? "차세대 휴머노이드" : "Next-Gen Humanoid", desc: isKo ? "인간과 유사한 촉각 피드백으로 로봇과 환경 간의 상호작용 지능 향상" : "Human-like tactile feedback to elevate robot-environment interaction intelligence" },
            ].map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#E6F7F8] text-[#0AABBA] flex items-center justify-center text-xs font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
            {isKo ? "납품 사례" : "Delivery Cases"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "실제 적용 사례" : "Real-World Applications"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/ap002_delivery.jpg"
              alt={isKo ? "ROH-AP002 납품 사례" : "ROH-AP002 Delivery Cases"}
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
          <h2 className="text-3xl font-extrabold text-white mb-4">{isKo ? "기술 혁신을 직접 경험해보세요" : "Experience the Innovation Firsthand"}</h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인은 단순한 판매를 넘어 최적화된 기술 지원 및 커스텀 솔루션을 제공합니다." : "Refind goes beyond sales — we provide optimized technical support and custom solutions."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-[#0AABBA] text-white font-bold rounded-full hover:bg-[#088A96] transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}
