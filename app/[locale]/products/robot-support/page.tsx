import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RobotSupportPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = [
    {
      icon: "🦾",
      title: isKo ? "협동로봇 통합 플랫폼" : "Collaborative Robot Platform",
      desc: isKo
        ? "다수의 협동로봇 암을 하나의 플랫폼에서 통합 운용. 복잡한 조립·검사 공정을 단일 워크스테이션으로 처리합니다."
        : "Integrated operation of multiple collaborative robot arms on a single platform, handling complex assembly and inspection processes in one workstation.",
    },
    {
      icon: "⚙️",
      title: isKo ? "유연한 확장성" : "Flexible Scalability",
      desc: isKo
        ? "모듈형 구조로 로봇 암의 수와 배치를 자유롭게 조정. 생산 라인 변경 없이 공정을 재구성할 수 있습니다."
        : "Modular structure allows free adjustment of robot arm quantity and arrangement, enabling process reconfiguration without line changes.",
    },
    {
      icon: "📊",
      title: isKo ? "통합 제어 시스템" : "Integrated Control System",
      desc: isKo
        ? "단일 소프트웨어로 전체 플랫폼의 로봇 동작을 통합 제어. 실시간 모니터링과 원격 진단을 지원합니다."
        : "Single software integrates control of all robot motions across the platform, supporting real-time monitoring and remote diagnostics.",
    },
  ];

  const useCases = [
    {
      num: "01",
      title: isKo ? "정밀 조립 자동화" : "Precision Assembly",
      desc: isKo
        ? "다관절 협동로봇 암이 협력하여 소형 부품 조립, 나사 체결, 접착 공정을 자동화"
        : "Multi-joint collaborative arms cooperate for small part assembly, screw fastening, and bonding automation",
    },
    {
      num: "02",
      title: isKo ? "품질 검사 라인" : "Quality Inspection",
      desc: isKo
        ? "비전 시스템과 연동하여 다방향 동시 검사, 불량 선별, 데이터 수집 자동화"
        : "Integrated with vision systems for multi-directional simultaneous inspection, defect sorting, and data collection",
    },
    {
      num: "03",
      title: isKo ? "연구·교육 환경" : "Research & Education",
      desc: isKo
        ? "다양한 로봇 암 조합으로 AI 학습 데이터 수집, 그래스핑 알고리즘 연구, 실습 교육에 활용"
        : "Various robot arm combinations for AI training data collection, grasping algorithm research, and hands-on education",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(102,157,253,0.12) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
              Robot Support Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              {isKo ? "로봇 보조기" : "Robot Support"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "다수의 협동로봇 암을 통합하는 모듈형 로봇 워크스테이션. 복잡한 제조·연구 공정을 단일 플랫폼으로 처리합니다."
                : "Modular robotic workstation integrating multiple collaborative robot arms. Handle complex manufacturing and research processes on a single platform."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/collaborative-robot`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "협동로봇 보기" : "Collaborative Robots"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image
              src="/products/platform/1.jpeg"
              alt={isKo ? "로봇 보조기 플랫폼" : "Robot Support Platform"}
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "활용 분야" : "Use Cases"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="text-xs font-bold text-gray-300 mb-3">{u.num}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "맞춤형 플랫폼 구성이 필요하신가요?" : "Need a Custom Platform Configuration?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo
              ? "공정 환경과 목적에 맞는 최적의 로봇 보조기 구성을 제안해 드립니다."
              : "We'll propose the optimal robot support configuration for your process environment and objectives."}
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
