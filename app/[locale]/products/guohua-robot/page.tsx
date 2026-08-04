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
    title: isKo ? "Guohua Robot 서비스 휴머노이드" : "Guohua Robot Service Humanoid",
    description: isKo
      ? "서비스 특화 휴머노이드 로봇 LB-Daie 002. 고객 응대·안내·서비스 업무에 최적화된 AI 탑재 플랫폼."
      : "Service-specialized humanoid robot LB-Daie 002. AI-powered platform optimized for customer interaction, guidance, and service operations.",
  };
}

export default async function GuohuaRobotPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = [
    {
      title: isKo ? "인간 친화적 설계" : "Human-Friendly Design",
      desc: isKo
        ? "인간의 체형과 동작을 모사한 유연한 관절 구조로 자연스러운 움직임과 안전한 인간-로봇 상호작용을 구현합니다."
        : "Flexible joint structure mimicking human body and motion for natural movement and safe human-robot interaction.",
    },
    {
      title: isKo ? "AI 기반 자율 제어" : "AI-Based Autonomous Control",
      desc: isKo
        ? "딥러닝 기반의 자율 판단 알고리즘으로 복잡한 환경에서도 스스로 경로를 설정하고 작업을 수행합니다."
        : "Deep learning-based autonomous decision algorithms enable self-path planning and task execution even in complex environments.",
    },
    {
      title: isKo ? "장시간 운용" : "Long-Duration Operation",
      desc: isKo
        ? "고용량 배터리 시스템과 효율적인 전력 관리로 장시간 연속 운용이 가능합니다."
        : "High-capacity battery system and efficient power management enable long-duration continuous operation.",
    },
  ];

  const specs = [
    { label: isKo ? "모델명" : "Model", value: "LB-Daie 002" },
    { label: isKo ? "제조사" : "Manufacturer", value: isKo ? "국방지능(Guohua)" : "Guohua Intelligence" },
    { label: isKo ? "형태" : "Type", value: isKo ? "휴머노이드 서비스 로봇" : "Humanoid Service Robot" },
    { label: isKo ? "이동 방식" : "Mobility", value: isKo ? "바퀴형 베이스" : "Wheeled Base" },
    { label: isKo ? "팔 자유도" : "Arm DOF", value: isKo ? "양팔 고자유도" : "High-DOF Dual Arms" },
    { label: isKo ? "활용 분야" : "Application", value: isKo ? "서비스·안내·물류" : "Service / Guidance / Logistics" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(102,157,253,0.12) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
              Humanoid Robot
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              Guohua Robot
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "국방지능(Guohua Intelligence)의 차세대 휴머노이드 서비스 로봇. AI 기반 자율 주행과 고자유도 양팔로 다양한 서비스 환경에 즉시 투입 가능합니다."
                : "Next-generation humanoid service robot by Guohua Intelligence. AI-based autonomous navigation and high-DOF dual arms ready for diverse service environments."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/humanoid`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "휴머노이드 전체 보기" : "All Humanoids"}
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-[480px]">
            <Image
              src="/products/humanoid/guohua robot.jpeg"
              alt="Guohua Robot LB-Daie 002"
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
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "제품 사양" : "Specifications"}
          </p>
          <div className="max-w-2xl bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
            {specs.map((spec, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i < specs.length - 1 ? "border-b border-gray-200" : ""}`}>
                <span className="text-gray-500 font-medium">{spec.label}</span>
                <span className="font-semibold text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "도입을 검토하고 계신가요?" : "Considering Deployment?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo
              ? "리파인의 전문가가 최적의 도입 방안을 함께 설계해 드립니다."
              : "Refind experts will help design the optimal deployment solution for you."}
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
