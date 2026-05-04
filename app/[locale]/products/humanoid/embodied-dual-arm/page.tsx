import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function EmbodiedDualArmPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = [
    {
      icon: "🦾",
      title: isKo ? "고자유도 양팔 시스템" : "High-DOF Dual Arm System",
      desc: isKo
        ? "좌우 독립 구동되는 양팔 구조로 양손 협력 작업이 가능. 복잡한 조립·분류·핸들링 공정을 자동화합니다."
        : "Independently actuated dual arms enable two-handed cooperative tasks, automating complex assembly, sorting, and handling processes.",
    },
    {
      icon: "🧠",
      title: isKo ? "AI 기반 자율 제어" : "AI-Based Autonomous Control",
      desc: isKo
        ? "딥러닝 기반 비전 시스템으로 물체를 인식하고 최적 파지 전략을 스스로 결정합니다."
        : "Deep learning-based vision system recognizes objects and autonomously determines optimal grasping strategies.",
    },
    {
      icon: "🔗",
      title: isKo ? "유연한 통합성" : "Flexible Integration",
      desc: isKo
        ? "ROS2 기반 오픈 아키텍처로 다양한 로봇핸드 및 센서와 즉시 연동 가능합니다."
        : "ROS2-based open architecture enables immediate integration with various robot hands and sensors.",
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
              Humanoid · Dual Arm
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              {isKo ? "Embodied\nDual Arm" : "Embodied\nDual Arm"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "인간의 상체를 모사한 양팔 로봇 플랫폼. 고자유도 양팔이 협력하여 사람만이 할 수 있던 섬세한 작업을 자동화합니다."
                : "Dual-arm robot platform modeled after the human upper body. High-DOF arms work together to automate delicate tasks that only humans could perform."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/humanoid`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "휴머노이드 전체 보기" : "All Humanoids"}
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-[460px]">
            <Image
              src="/products/humanoid/embodied dual arm.jpeg"
              alt="Embodied Dual Arm"
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
            {isKo ? "양팔 자동화 솔루션이 필요하신가요?" : "Need a Dual-Arm Automation Solution?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 도입 방안을 설계해 드립니다." : "Refind experts will design the optimal deployment plan."}
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
