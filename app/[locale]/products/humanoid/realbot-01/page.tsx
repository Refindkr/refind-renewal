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
    title: isKo ? "REALBOT 01 휴머노이드 로봇 (연구개발형)" : "REALBOT 01 Humanoid Robot (R&D)",
    description: isKo
      ? "모듈형 아키텍처 기반 AI 휴머노이드 플랫폼. Embodied AI 연구와 휴머노이드 개발에 최적화."
      : "A modular-architecture AI humanoid platform optimized for embodied AI research and humanoid development.",
  };
}

export default async function Realbot01Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "전체 장비 치수" : "Overall Dimensions", value: "570 x 465 x 1680mm" },
    { label: isKo ? "회전 반경" : "Turning Radius", value: isKo ? "690mm (제자리 회전 반경)" : "690mm (in-place rotation)" },
    { label: isKo ? "작업 범위" : "Work Range", value: isKo ? "수직 2100mm | 수평 1818mm (엔드이펙터 제외)" : "Vertical 2100mm | Horizontal 1818mm (excl. end-effector)" },
    { label: isKo ? "완제품 중량" : "Total Weight", value: isKo ? "약 125kg" : "~125kg" },
    { label: isKo ? "단일 암 가반하중" : "Payload per Arm", value: "5kg" },
    { label: isKo ? "전신 능동 자유도" : "Total Active DOF", value: "21" },
    { label: isKo ? "이동 속도" : "Movement Speed", value: "0.1 ~ 1.5 m/s" },
    { label: isKo ? "배터리 및 사용 시간" : "Battery & Runtime", value: isKo ? "40Ah (BMS 배터리 관리 시스템)" : "40Ah (with BMS)" },
    { label: isKo ? "충전 시간" : "Charging Time", value: isKo ? "2시간" : "2 hours" },
    { label: isKo ? "비전 시스템" : "Vision System", value: isKo ? "스테레오 깊이 카메라 / RGB 카메라 선택" : "Stereo depth camera / RGB camera options" },
    { label: isKo ? "광각 카메라" : "Wide-Angle Camera", value: isKo ? "130˚ 시야각 (총 3개, 흉부·등부·섀시)" : "130˚ FOV (3 total — chest, back, chassis)" },
    { label: "LiDAR", value: isKo ? "단일 라인, 탐지거리 > 40m (반사율 90%)" : "Single-line, range > 40m (90% reflectivity)" },
    { label: isKo ? "음성 인터랙션 모듈" : "Voice Interaction Module", value: isKo ? "원형 6-Mic 스마트 스피커 (옵션)" : "Circular 6-mic smart speaker (optional)" },
  ];

  const features = isKo
    ? [
        "상체와 휠 베이스를 분리할 수 있는 모듈형 구조로 다양한 플랫폼에 유연하게 적용할 수 있습니다.",
        "이동과 작업을 하나의 플랫폼에서 수행하여 다양한 작업 공간을 효율적으로 커버합니다.",
        "5kg 양팔 작업 능력과 6축 힘·토크 센서로 정밀한 조작 지원",
        "4WS + 4WD 자율주행 플랫폼으로 다양한 산업 환경에 대응",
      ]
    : [
        "Modular structure separates the upper body from the wheel base, flexibly adapting to various platforms.",
        "Combines mobility and manipulation on a single platform to efficiently cover diverse workspaces.",
        "5kg dual-arm capacity with 6-axis force/torque sensors for precise manipulation",
        "4WS + 4WD autonomous driving platform adapts to diverse industrial environments",
      ];

  const applications = isKo
    ? [
        { title: "Embodied AI 연구", desc: "실환경 기반 AI 학습 및 로봇 지능 연구" },
        { title: "AI 데이터 수집", desc: "Teleoperation 기반 대규모 데이터 구축" },
        { title: "대학 및 연구기관", desc: "휴머노이드 제어 및 AI 알고리즘 연구" },
        { title: "로봇 소프트웨어 개발", desc: "ROS2 기반 제어 및 Vision AI 개발" },
        { title: "산업 자동화 연구", desc: "차세대 서비스·산업용 휴머노이드 검증 플랫폼" },
      ]
    : [
        { title: "Embodied AI Research", desc: "Real-world AI training and robot intelligence research" },
        { title: "AI Data Collection", desc: "Large-scale data collection based on teleoperation" },
        { title: "Universities & Labs", desc: "Humanoid control and AI algorithm research" },
        { title: "Robot Software Development", desc: "ROS2-based control and Vision AI development" },
        { title: "Industrial Automation R&D", desc: "Verification platform for next-gen service/industrial humanoids" },
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
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(225,37,27,0.15) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            Humanoid Robot · R&D
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            REALBOT 01
          </h1>
          <p className="text-sm text-[#E1251B] font-semibold mb-5">
            {isKo ? "모듈형 아키텍처 기반 AI 휴머노이드 플랫폼" : "A Modular-Architecture AI Humanoid Platform"}
          </p>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
            {isKo
              ? "모듈형 구조와 휠 기반 이동을 갖춘 연구용 휴머노이드 로봇으로, Embodied AI 연구와 데이터 수집 및 AI 학습에 적합합니다."
              : "RealBot-01 is a next-generation wheeled humanoid designed for embodied AI research and humanoid development. Its modular structure lets the upper body separate from or combine with various mobility platforms, optimized for research, data collection, AI training, and algorithm development."}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["21 DOF", "Modular", "~125kg", "0.1~1.5 m/s", "ROS2"].map((tag) => (
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
            <Link href={`/products/humanoid`}
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
              {isKo ? "휴머노이드 전체 보기" : "All Humanoids"}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 특징" : "Product Features"}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-gray-100">
                <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Specifications</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "기술 사양" : "Technical Specifications"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[420px] md:h-[560px] order-2 md:order-1">
              <Image src="/products/humanoid/realbot-01.png" alt="REALBOT 01" fill
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Applications</p>
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Comparison</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "RealMan 휴머노이드 비교" : "RealMan Humanoid Comparison"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap"> </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                    <Link href={`/products/humanoid/realbot`} className="hover:text-[#E1251B] transition-colors">Realbot S2</Link>
                  </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                    <Link href={`/products/humanoid/realbot-l2`} className="hover:text-[#E1251B] transition-colors">Realbot L2</Link>
                  </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B] whitespace-nowrap">Realbot 01</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50/40"}>
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{row.label}</td>
                    <td className="px-5 py-3.5 text-center text-gray-600">{row.s2}</td>
                    <td className="px-5 py-3.5 text-center text-gray-600">{row.l2}</td>
                    <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#E1251B]/5">{row.r01}</td>
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
            <Link href={`/products/humanoid`}
              className="inline-flex items-center px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-full text-sm hover:border-gray-400 transition-colors">
              {isKo ? "다른 제품 보기" : "Other Products"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
