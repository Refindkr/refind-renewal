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
    title: isKo ? "ROH-AP001 로봇핸드 (포스피드백)" : "ROH-AP001 Robot Hand (Force Sensing)",
    description: isKo
      ? "Tashan 내장 포스센서로 실시간 힘 피드백. 150Hz 샘플링, 640g 경량 설계. 정밀 조립·표면가공에 최적."
      : "Tashan integrated force sensor for real-time force feedback. 150Hz sampling, 640g lightweight design. Ideal for precision assembly and surface finishing.",
  };
}

export default async function AP001Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Robot Hand · Force Sensing
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">ROH-AP001</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">{isKo ? "힘을 읽고 제어하다" : "Sense Force. Control Precisely."}</p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "내장형 Tashan 포스 센서로 실시간 힘 피드백과 토크 제어의 최적화를 경험하세요."
                : "Experience optimized real-time force feedback and torque control with the integrated Tashan force sensor."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#E1251B] text-white font-semibold rounded-full text-sm hover:bg-[#9C1912] transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/robot-hand`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/robot-hand/ap001.png" alt="ROH-AP001" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "특징" : "Features"}
          </p>
          <div className="space-y-4">
            {[
              { text: isKo ? "전자의수 기술 노하우가 집약된 6자유도(6-DOF) 매커니즘으로 사람 손의 섬세한 움직임을 완벽 구현" : "6-DOF mechanism embodying prosthetic hand expertise — perfectly replicates delicate human hand movements" },
              { text: isKo ? "전용 데이터 글러브(Data Glove) 연동을 통한 실시간 원격 제어(Mirroring) 및 티칭 지원" : "Real-time remote control (mirroring) and teaching support via dedicated Data Glove integration" },
              { text: isKo ? "ROS / ROS2 패키지 및 Python/C++ API 제공으로 복잡한 세팅 없이 즉시 연구 개발 가능" : "ROS/ROS2 packages and Python/C++ API for immediate R&D without complex setup" },
              { text: isKo ? "RS-485, Modbus 등 표준 통신 인터페이스 지원으로 다양한 로봇 팔 및 PLC와 손쉬운 연결" : "Standard RS-485 and Modbus interfaces for easy connection with various robot arms and PLCs" },
              { text: isKo ? "전자의수로부터 파생된 제품으로 사람의 손동작 및 형태 등을 모방하여 사람의 손 기능 모방" : "Derived from prosthetic hand technology, mimicking human hand movements and form" },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl px-6 py-5 border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "제품 영상" : "Product Video"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "ROH-AP001 동작 영상" : "ROH-AP001 in Action"}
          </h2>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/t3EdUAprqBY"
                title="ROH-AP001"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "핵심 가치" : "Core Value"}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Integrated Force Sensing", desc: isKo ? "별도 외부 센서 없이 말단 부하를 정밀 측정, 섬세한 힘 조절 가능" : "Precise end-load measurement without external sensors for delicate force control" },
              { title: "Bidirectional Feedback", desc: isKo ? "관절 각도+포스 데이터 결합으로 완성도 높은 로봇 경로 생성 지원" : "Joint angle + force data fusion for high-quality robot path generation and learning" },
              { title: "Industrial Reliability", desc: isKo ? "반복 가압 환경에서도 변함없는 측정 정밀도와 내구성 보장" : "Guaranteed measurement precision and durability under repeated force application" },
              { title: "SDK Support", desc: isKo ? "Python, C++ 전용 라이브러리로 연구 및 공정 설계에 즉시 도입 가능" : "Dedicated Python and C++ libraries for instant deployment in research and process design" },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "기술 사양" : "Technical Specs"}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5">{isKo ? "하드웨어 사양" : "Hardware Specs"}</h3>
              <div className="space-y-0 text-sm">
                {[
                  [isKo ? "가동 관절" : "Active Joints", "11개 / 6 DOF"],
                  [isKo ? "무게" : "Weight", "640g ± 5g"],
                  [isKo ? "구동 속도" : "Speed", isKo ? "0.7초" : "0.7s"],
                  [isKo ? "포스 측정 범위" : "Force Range", "0.1N ~ 25N"],
                  [isKo ? "반복 정밀도" : "Repeatability", "±20% (500g 부하)"],
                ].map(([k, v], i, arr) => (
                  <div key={i} className={`flex justify-between py-2.5 ${i < arr.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <span className="text-gray-500">{k}</span>
                    <span className="font-semibold text-gray-900">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5">{isKo ? "센서 & 인터페이스" : "Sensor & Interface"}</h3>
              <div className="space-y-0 text-sm">
                {[
                  [isKo ? "센서 타입" : "Sensor Type", "Tashan Force Sensor"],
                  [isKo ? "샘플링 속도" : "Sampling Rate", "150Hz"],
                  [isKo ? "통신" : "Communication", "UART, RS485, CAN FD"],
                  [isKo ? "프로토콜" : "Protocol", "SerialCtrl, ModBus-RTU"],
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
        </div>
      </section>

      {/* Sensor Spec Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "센서 사양" : "Sensor Specifications"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "Tashan 포스센서 상세 스펙" : "Tashan Force Sensor Detail Specs"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/ap001_1.jpg"
              alt={isKo ? "ROH-AP001 센서 스펙" : "ROH-AP001 Sensor Specs"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Structure Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "제품 구조" : "Product Structure"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "ROH-AP001 구조도" : "ROH-AP001 Structure Diagram"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/ap001_2.jpeg"
              alt={isKo ? "ROH-AP001 구조도" : "ROH-AP001 Structure Diagram"}
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "제품 사이즈 & 성능" : "Size & Performance"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
            {isKo ? "ROH-AP001 상세 스펙" : "ROH-AP001 Detailed Specifications"}
          </h2>
          <p className="text-sm text-gray-500 mb-10">{isKo ? "무게: 640g ± 5g" : "Weight: 640g ± 5g"}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Measurement Table */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">{isKo ? "치수 측정" : "Measurement"}</h3>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {[
                  ["중지 끝~손목 세로 거리", "Middle finger tip to wrist (vertical)", "183 mm"],
                  ["엄지 끝~손목 세로 거리", "Thumb tip to wrist (vertical)", "95 mm"],
                  ["엄지 길이", "Thumb length", "111 mm"],
                  ["최대 손바닥 너비", "Maximum palm width", "82 mm"],
                  ["손목 직경", "Wrist diameter", "49 mm"],
                  ["엄지 측면 최대 개폐 각도", "Thumb side max open/close angle", "0 ~ 31°"],
                  ["엄지~손바닥 최대 개폐 각도", "Thumb to palm max open/close angle", "0 ~ 50°"],
                  ["엄지 측면 회전 각도", "Thumb lateral rotation angle", "0 ~ 90°"],
                  ["터치스크린 조작", "Touch screen function", isKo ? "지원" : "Supported"],
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
                  ["최대 속도 전 범위 굽힘/펴기 시간", "Full-range bending/stretching at max speed", "0.7 s"],
                  ["엄지 전 범위 회전 시간", "Thumb full-range rotation at max speed", "0.7 s"],
                  ["펴진 상태 각 손가락 끝 능동력", "Active force per fingertip (stretched)", "≥ 0.5 kgf"],
                  ["굽힌 상태 각 손가락 끝 능동력", "Active force per fingertip (bent)", "≥ 1 kgf"],
                  ["엄지 끝 최대 능동력", "Max active force of thumb tip", "≥ 1 kgf"],
                  ["4손가락 굽힌 상태 최대 수동 하중", "Max passive load for 4 fingers (bent)", "30 kg"],
                  ["각 손가락 굽힌 상태 최대 수동 하중", "Max passive load per finger (bent)", "10 kg"],
                  ["각 손가락 펴진 상태 최대 수동 하중", "Max passive load per finger (stretched)", "8 kg"],
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

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "활용 사례" : "Use Cases"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: isKo ? "정밀 조립" : "Precision Assembly", desc: isKo ? "부품 결합 시 발생하는 힘을 실시간 감지해 부품 파손 방지 및 공정 품질 즉각 검수" : "Real-time force detection during part assembly prevents damage and enables instant quality inspection" },
              { title: isKo ? "표면 가공" : "Surface Finishing", desc: isKo ? "일정 압력 유지가 필요한 샌딩·연마 공정 자동화로 작업 결과물의 균일성 확보" : "Automate sanding and polishing processes requiring constant pressure for uniform results" },
              { title: isKo ? "의료/바이오 자동화" : "Medical/Bio Automation", desc: isKo ? "섬세한 바이오 시료 취급과 힘 피드백 기반 원격 수술 로봇 연구 환경에 최적" : "Ideal for delicate bio-sample handling and force-feedback-based surgical robot research" },
            ].map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#FDEDEB] text-[#E1251B] flex items-center justify-center text-xs font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases — GIF */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
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
                title: isKo ? "정밀 조립 자동화" : "Precision Assembly",
                desc: isKo ? "포스 피드백으로 부품 결합 시 발생하는 힘을 실시간 감지해 파손 방지 및 공정 품질 즉각 검수" : "Real-time force detection during assembly prevents damage and enables instant quality inspection",
              },
              {
                num: "02",
                gif: "rohand_r2.gif",
                title: isKo ? "표면 가공 자동화" : "Surface Finishing",
                desc: isKo ? "일정 압력 유지가 필요한 샌딩·연마 공정 자동화로 작업 결과물의 균일성 확보" : "Automate sanding and polishing requiring constant pressure for consistent, uniform results",
              },
              {
                num: "03",
                gif: "rohand_robot4.gif",
                title: isKo ? "의료 / 바이오 자동화" : "Medical / Bio Automation",
                desc: isKo ? "섬세한 바이오 시료 취급과 힘 피드백 기반 원격 수술 로봇 연구 환경에 최적" : "Ideal for delicate bio-sample handling and force-feedback-based surgical robot research",
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
              src="/products/robot-hand/ap001_delivery.jpg"
              alt={isKo ? "ROH-AP001 납품 사례" : "ROH-AP001 Delivery Cases"}
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
            className="inline-flex items-center px-8 py-3.5 bg-[#E1251B] text-white font-bold rounded-full hover:bg-[#9C1912] transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
