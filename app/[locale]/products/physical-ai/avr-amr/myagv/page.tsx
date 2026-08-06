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
    title: isKo ? "myAGV 2023 — 모바일 로봇 플랫폼" : "myAGV 2023 — Mobile Robot Platform",
    description: isKo
      ? "자율 이동 로봇 플랫폼. 라이다 기반 SLAM 자율주행, 협동로봇 암과 결합해 완전 자동화 셀 구성 가능."
      : "Autonomous mobile robot platform. LiDAR-based SLAM navigation, combinable with cobot arms to build fully automated cells.",
  };
}

export default async function MyAGVPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const agvSpecs = [
    { spec: isKo ? "내비게이션 방식" : "Navigation Method", desc: isKo ? "자기 테이프, QR코드, 유도선, 고정 마커" : "Magnetic tape, QR code, guide wire, fixed markers" },
    { spec: isKo ? "자율성 수준" : "Autonomy Level", desc: isKo ? "낮음" : "Low" },
    { spec: isKo ? "경로 유연성" : "Path Flexibility", desc: isKo ? "고정 경로만 지원" : "Fixed path only" },
    { spec: isKo ? "장애물 회피" : "Obstacle Avoidance", desc: isKo ? "제한적 또는 정지만 가능" : "Limited or stop-only" },
    { spec: isKo ? "환경 적응성" : "Environment Adaptability", desc: isKo ? "낮음" : "Low" },
    { spec: isKo ? "제어 시스템" : "Control System", desc: isKo ? "사전 설정 경로 제어" : "Predefined route control" },
    { spec: isKo ? "탑재 중량" : "Payload Capability", desc: isKo ? "중~대형 (모델 의존)" : "Medium to high (model-dependent)" },
    { spec: isKo ? "속도" : "Speed", desc: isKo ? "일정, 사전 설정값" : "Constant, predefined" },
    { spec: isKo ? "로봇 암 통합" : "Integration with Robot Arm", desc: isKo ? "미지원" : "Not supported" },
    { spec: isKo ? "주요 응용 분야" : "Typical Applications", desc: isKo ? "공장 자재 운반, 반복 물류" : "Factory material transport, repetitive logistics" },
    { spec: isKo ? "운용 환경" : "Operating Environment", desc: isKo ? "구조화된 산업 환경" : "Structured industrial environments" },
  ];

  const features = [
    {
      title: isKo ? "교육·연구를 위한 자율주행 로봇" : "Autonomous Robot for Education & Research",
      bullets: isKo
        ? ["로봇 공학 및 자율주행 알고리즘 학습에 최적", "실내 환경에서 안전하게 사용 가능"]
        : ["Ideal for learning robotics and autonomous driving algorithms", "Safe for use in indoor environments"],
    },
    {
      title: isKo ? "SLAM & Navigation 실습 지원" : "SLAM & Navigation Practice Support",
      bullets: isKo
        ? ["지도 생성 (SLAM)", "경로 계획 (Path Planning)", "장애물 회피 (Obstacle Avoidance)"]
        : ["Map building (SLAM)", "Path Planning", "Obstacle Avoidance"],
    },
    {
      title: isKo ? "ROS 기반 오픈 플랫폼" : "ROS-based Open Platform",
      bullets: isKo
        ? ["ROS 환경 지원", "Python / C++ 개발 가능", "다양한 센서 데이터 활용"]
        : ["ROS environment support", "Python / C++ development", "Multi-sensor data integration"],
    },
    {
      title: isKo ? "컴팩트한 실내 주행 설계" : "Compact Indoor Navigation Design",
      bullets: isKo
        ? ["책상·연구실·강의실 환경에서 운용 가능", "저속·저하중으로 안전한 실험 환경 제공"]
        : ["Operable in desk, lab, and classroom environments", "Safe experimental environment with low speed and load"],
    },
  ];

  const gifs = [
    { src: "/products/physical-ai/amr/image.gif", label: isKo ? "자율 주행 시연" : "Autonomous Navigation" },
    { src: "/products/physical-ai/amr/image2.gif", label: isKo ? "SLAM 지도 생성" : "SLAM Mapping" },
    { src: "/products/physical-ai/amr/image3.gif", label: isKo ? "협동로봇 암 통합 운용" : "Cobot Arm Integration" },
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
              Physical AI · Autonomous Mobile Robot
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              myAGV 2023
            </h1>
            <p className="text-base text-[#E1251B] font-semibold mb-4">
              {isKo ? "모바일 로봇 플랫폼 (Education & Research)" : "Mobile Robot Platform (Education & Research)"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "자율 이동과 협동로봇 암이 결합된 모바일 로봇 플랫폼. SLAM 기반 자율주행으로 실내 환경을 자유롭게 탐색하며 교육·연구·자동화 분야에 최적화된 플랫폼입니다."
                : "Mobile robot platform combining autonomous navigation with a collaborative robot arm. SLAM-based self-navigation optimized for education, research, and automation environments."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/physical-ai/avr-amr`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "AVR/AMR 전체 보기" : "All AVR/AMR"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px]">
            <Image
              src="/products/physical-ai/amr/1.JPG"
              alt="myAGV 2023"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* myAGV 2023 핵심 특징 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">
            myAGV 2023
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            {isKo ? "핵심 특징" : "Key Features"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E1251B]/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#E1251B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{f.title}</h3>
                </div>
                <ul className="space-y-2 pl-9">
                  {f.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E1251B]/50 mt-1.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGV Specification Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">
            {isKo ? "사양 비교" : "Specifications"}
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
            {isKo ? "AGV 제품 사양" : "AGV Product Specifications"}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left font-semibold tracking-wide">
                    {isKo ? "항목" : "Specification"}
                  </th>
                  <th className="px-6 py-4 text-left font-semibold tracking-wide">
                    {isKo ? "상세 설명" : "Description"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {agvSpecs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-semibold text-gray-900 w-2/5">{row.spec}</td>
                    <td className="px-6 py-4 text-gray-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">
            {isKo ? "제품 영상" : "Product Video"}
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-10">
            {isKo ? "myAGV 2023 시연 영상" : "myAGV 2023 Demo Video"}
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Fevvjk2sfgk"
              title="myAGV 2023"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Use Cases GIF */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">
            {isKo ? "활용 사례" : "Use Cases"}
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
            {isKo ? "다양한 환경에서의 응용" : "Applications in Various Environments"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gifs.map((g, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-gray-950 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold text-white/80">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "물류·서비스 자동화를 고민하고 계신가요?" : "Considering Logistics or Service Automation?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "문의하기" : "Contact Us"}
          </a>
        </div>
      </section>

    </div>
  );
}
