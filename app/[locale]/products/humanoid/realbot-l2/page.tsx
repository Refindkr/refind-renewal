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
    title: isKo ? "REALBOT L2 휴머노이드 로봇 (승강형)" : "REALBOT L2 Humanoid Robot (Lifting)",
    description: isKo
      ? "승강 구조를 적용한 휠형 휴머노이드 로봇. 작업 높이를 자유롭게 조절해 물류·창고·공장 환경에 대응."
      : "A wheeled humanoid robot with a lifting structure. Adjustable working height for logistics, warehouse, and factory environments.",
  };
}

export default async function RealbotL2Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "로봇 형태" : "Form Factor", value: isKo ? "풀사이즈 휠 기반 양팔 승강 로봇" : "Full-size wheeled dual-arm lifting robot" },
    { label: isKo ? "전체 장비 치수" : "Overall Dimensions", value: "650 x 512 x 1700mm" },
    { label: isKo ? "수직 작업 범위" : "Vertical Work Range", value: "0 ~ 2.1m" },
    { label: isKo ? "승강 스트로크" : "Lift Stroke", value: "0.3m" },
    { label: isKo ? "완제품 중량" : "Total Weight", value: isKo ? "약 120kg" : "~120kg" },
    { label: isKo ? "음성 인터랙션" : "Voice Interaction", value: isKo ? "지원 (내장 마이크 어레이/스피커)" : "Supported (built-in mic array/speaker)" },
    { label: isKo ? "전체 자유도" : "Total DOF", value: isKo ? "17 DOF (섀시·엔드이펙터 제외)" : "17 DOF (excl. chassis/end-effector)" },
    { label: isKo ? "메인 프로세서" : "Main Processor", value: "Nvidia Jetson AGX Orin 64G / RDK S100 (Optional)" },
    { label: isKo ? "헤드 카메라" : "Head Camera", value: isKo ? "스테레오 RGB(기본) / 깊이 카메라(옵션)" : "Stereo RGB (default) / Depth camera (optional)" },
    { label: isKo ? "로봇팔 구조" : "Arm Structure", value: isKo ? "휴머노이드 로봇팔" : "Humanoid robot arm" },
    { label: isKo ? "단일 암 가반하중" : "Payload per Arm", value: "5kg" },
    { label: isKo ? "단일 암 자유도" : "DOF per Arm", value: "7 DOF" },
    { label: isKo ? "6축 힘·토크 측정 범위" : "6-Axis Force/Torque Range", value: "200N / 7N·m" },
    { label: isKo ? "6축 힘·토크 정밀도" : "6-Axis Force/Torque Accuracy", value: "0.5% FS" },
    { label: isKo ? "암 리치" : "Arm Reach", value: isKo ? "0.69m (엔드이펙터 제외)" : "0.69m (excl. end-effector)" },
    { label: isKo ? "엔드 이펙터" : "End Effector", value: isKo ? "2지 평행 그리퍼 / 5지 다관절 핸드 퀵체인지" : "2-finger parallel gripper / 5-finger hand, quick-change" },
    { label: isKo ? "섀시 구동 방식" : "Chassis Drive", value: isKo ? "2륜 차동구동" : "2-Wheel differential drive" },
    { label: isKo ? "섀시 이동 속도" : "Chassis Speed", value: "0.1 ~ 1.0 m/s" },
    { label: isKo ? "최대 등판 능력" : "Max Climbing Angle", value: "5˚" },
    { label: isKo ? "장애물 극복 능력" : "Obstacle Clearance", value: "≤ 15mm" },
    { label: isKo ? "섀시 기능" : "Chassis Features", value: isKo ? "SLAM 내비게이션 및 위치 추정 / 동적 장애물 회피" : "SLAM navigation & localization / dynamic obstacle avoidance" },
    { label: isKo ? "배터리 용량" : "Battery Capacity", value: "48V 20Ah" },
    { label: isKo ? "충전 방식" : "Charging", value: isKo ? "수동" : "Manual" },
    { label: isKo ? "사용 시간" : "Runtime", value: isKo ? "6h (일반 작동 조건)" : "6h (typical operating conditions)" },
    { label: isKo ? "통신 방식" : "Communication", value: isKo ? "유선, WiFi" : "Wired, WiFi" },
    { label: isKo ? "스크린" : "Screen", value: isKo ? "미지원 (태블릿 옵션)" : "Not included (tablet optional)" },
  ];

  const features = isKo
    ? [
        "승강 구조를 통해 작업 높이를 자유롭게 조절하여 낮은 위치부터 높은 위치까지 다양한 작업을 수행합니다.",
        "이동과 작업을 하나의 플랫폼에서 수행하여 다양한 작업 공간을 효율적으로 커버합니다.",
        "5kg 양팔 작업 능력과 6축 힘·토크 센서로 정밀한 조작 지원",
        "4WS + 4WD 자율주행 플랫폼으로 다양한 산업 환경에 대응",
      ]
    : [
        "The lifting structure freely adjusts working height, handling tasks from low to high positions.",
        "Combines mobility and manipulation on a single platform to efficiently cover diverse workspaces.",
        "5kg dual-arm capacity with 6-axis force/torque sensors for precise manipulation",
        "4WS + 4WD autonomous driving platform adapts to diverse industrial environments",
      ];

  const applications = isKo
    ? [
        { title: "스마트 제조", desc: "부품 이송 및 공급, 머신 텐딩(Machine Tending), 품질 검사 및 조립 보조" },
        { title: "물류 자동화", desc: "피킹(Picking), 운반 및 적재, 재고 관리 및 분류" },
        { title: "의료·헬스케어", desc: "의약품 및 물품 운반, 병원 안내 서비스, 반복 업무 자동화" },
        { title: "호텔·리테일", desc: "고객 응대, 룸서비스 및 배송, 안내 및 물품 전달" },
        { title: "AI 연구개발", desc: "Embodied AI 연구, Teleoperation, 로봇 제어 및 AI 학습 데이터 구축" },
      ]
    : [
        { title: "Smart Manufacturing", desc: "Part transfer & feeding, machine tending, quality inspection & assembly support" },
        { title: "Logistics Automation", desc: "Picking, transport & palletizing, inventory management & sorting" },
        { title: "Medical & Healthcare", desc: "Medication & supply transport, hospital guidance service, repetitive task automation" },
        { title: "Hotel & Retail", desc: "Customer service, room service & delivery, guidance & item delivery" },
        { title: "AI R&D", desc: "Embodied AI research, teleoperation, robot control & AI training data collection" },
      ];

  const comparison = [
    { label: isKo ? "특징" : "Character", s2: isKo ? "폴딩형 휴머노이드" : "Folding Humanoid", l2: isKo ? "승강형 휴머노이드" : "Lifting Humanoid", r01: isKo ? "연구개발형 휴머노이드" : "R&D Humanoid" },
    { label: isKo ? "핵심 기능" : "Core Function", s2: isKo ? "몸을 낮춰 작업" : "Lowers body to work", l2: isKo ? "작업 높이 확장" : "Extends work height", r01: isKo ? "AI 연구 및 플랫폼 개발" : "AI research & platform development" },
    { label: isKo ? "작업 방식" : "Work Style", s2: isKo ? "낮은 위치 작업" : "Low-position tasks", l2: isKo ? "높은 위치 작업" : "High-position tasks", r01: isKo ? "범용 연구, 개발" : "General-purpose R&D" },
    { label: isKo ? "구조" : "Structure", s2: "Folding Body", l2: "Lifting Body", r01: "Modular Body" },
    { label: isKo ? "추천 환경" : "Best For", s2: isKo ? "서비스, 제조, 물류" : "Service, manufacturing, logistics", l2: isKo ? "물류, 창고, 공장" : "Logistics, warehouse, factory", r01: isKo ? "대학, 연구소, AI 개발" : "University, lab, AI development" },
    { label: isKo ? "장점" : "Advantage", s2: isKo ? "협소 공간 대응" : "Handles tight spaces", l2: isKo ? "높은 작업 범위" : "Extended work range", r01: isKo ? "높은 확장성" : "High extensibility" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(102,157,253,0.15) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
            Humanoid Robot · Lifting
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            REALBOT L2
          </h1>
          <p className="text-sm text-[#669DFD] font-semibold mb-5">
            {isKo ? "높은 곳까지 자유롭게 작업하는 승강형 휴머노이드" : "A Lifting Humanoid That Works Freely at Any Height"}
          </p>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
            {isKo
              ? "RealBot L2는 승강(Lifting) 구조를 적용한 휠형 휴머노이드 로봇입니다. 작업 높이를 자유롭게 조절할 수 있어 높은 선반, 생산 라인, 물류 랙 등 다양한 높이의 작업 환경에 유연하게 대응하며, 서비스부터 산업 자동화까지 폭넓게 활용할 수 있습니다."
              : "RealBot L2 is a wheeled humanoid robot with a lifting structure. Its freely adjustable working height flexibly handles tasks at high shelves, production lines, and logistics racks — spanning from service to industrial automation."}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["17 DOF", "0~2.1m", "~120kg", "6h", "Jetson AGX Orin"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/10">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
              {isKo ? "협업 문의하기" : "Contact Us"}
            </a>
            <Link href={`/${locale}/products/humanoid`}
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
              {isKo ? "제품 목록" : "All Models"}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "제품 특징" : "Product Features"}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-gray-100">
                <span className="text-[#669DFD] font-bold mt-0.5">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">Specifications</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "기술 사양" : "Technical Specifications"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[420px] md:h-[560px] order-2 md:order-1">
              <Image src="/products/humanoid/realbot-l2.png" alt="REALBOT L2" fill
                className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="grid grid-cols-1 gap-3 order-1 md:order-2">
              {specs.map((s, i) => (
                <div key={i} className="flex justify-between items-start gap-4 bg-gray-50 rounded-xl px-5 py-3 border border-gray-100">
                  <span className="text-sm text-gray-500 shrink-0">{s.label}</span>
                  <span className="text-sm font-bold text-gray-900 text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">Applications</p>
          <h2 className="text-4xl font-extrabold mb-12 tracking-tight">
            {isKo ? "활용 분야" : "Application Areas"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((a, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-xs font-mono text-white/30 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-white mb-3">{a.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RealMan Humanoid Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">Comparison</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "RealMan 휴머노이드 비교" : "RealMan Humanoid Comparison"}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap"> </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                    <Link href={`/${locale}/products/humanoid/realbot`} className="hover:text-[#669DFD] transition-colors">Realbot S2</Link>
                  </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-[#669DFD] whitespace-nowrap">Realbot L2</th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                    <Link href={`/${locale}/products/humanoid/realbot-01`} className="hover:text-[#669DFD] transition-colors">Realbot 01</Link>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{row.label}</td>
                    <td className="px-5 py-3.5 text-center text-gray-600">{row.s2}</td>
                    <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#669DFD]/5">{row.l2}</td>
                    <td className="px-5 py-3.5 text-center text-gray-600">{row.r01}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {isKo ? "로보틱스의 미래를 함께 설계하십시오" : "Design the Future of Robotics Together"}
          </h2>
          <p className="text-gray-400 mb-10">
            {isKo ? "기술 사양서 요청 및 협업 문의를 보내주세요." : "Request technical specs or send a collaboration inquiry."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full text-sm hover:bg-gray-800 transition-colors">
              {isKo ? "협업 문의하기" : "Contact Us"}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link href={`/${locale}/products/humanoid`}
              className="inline-flex items-center px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-full text-sm hover:border-gray-400 transition-colors">
              {isKo ? "다른 제품 보기" : "Other Products"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
