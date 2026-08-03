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
    title: isKo ? "Single arm vertical lift 이동형 리프팅 플랫폼" : "Single arm vertical lift",
    description: isKo
      ? "이동형 리프팅 플랫폼. 다양한 로봇 팔과 결합해 이동·리프팅 자동화를 구현합니다."
      : "Mobile lifting platform. Combine with various robot arms to implement mobility and lifting automation.",
  };
}

export default async function LiftingPlatformPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = [
    {
      icon: "⬆️",
      title: isKo ? "수직 리프팅 메커니즘" : "Vertical Lifting Mechanism",
      desc: isKo
        ? "전동 리프팅 컬럼으로 높이를 자유롭게 조절. 다양한 작업 높이에서 협동로봇 암이 최적 자세로 작업합니다."
        : "Electric lifting column allows free height adjustment. Collaborative robot arm works in optimal posture at various task heights.",
    },
    {
      icon: "🚗",
      title: isKo ? "자율 이동 통합" : "Autonomous Mobile Integration",
      desc: isKo
        ? "바퀴형 모바일 베이스와 결합하여 공장 내 자유로운 이동과 리프팅 작업을 동시에 수행합니다."
        : "Combined with wheeled mobile base for simultaneous free movement and lifting operations within the factory.",
    },
    {
      icon: "📦",
      title: isKo ? "물류·창고 최적화" : "Logistics & Warehouse Optimization",
      desc: isKo
        ? "높은 선반의 물품 적재·피킹부터 제조 라인의 부품 공급까지 다양한 물류 작업에 즉시 투입됩니다."
        : "Immediately deployable for diverse logistics tasks from high-shelf stacking and picking to parts supply on manufacturing lines.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(102,157,253,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
              Humanoid · Mobile Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              {isKo ? "Single arm\nvertical lift" : "Single arm\nvertical lift"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "리프팅 컬럼과 협동로봇 암이 결합된 모바일 작업 플랫폼. 공장·물류 창고에서 수직 작업 범위를 극대화합니다."
                : "Mobile work platform combining lifting column with collaborative robot arm. Maximizes vertical work range in factories and logistics warehouses."}
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
          <div className="relative h-80 md:h-[460px]">
            <Image
              src="/products/humanoid/lifting platform.jpeg"
              alt="Lifting Platform"
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
            {isKo ? "물류 자동화를 고민하고 계신가요?" : "Considering Logistics Automation?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 현장에 맞는 최적 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution for your environment."}
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
