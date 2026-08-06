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
    title: isKo ? "MyAGV 자율이동로봇" : "MyAGV Autonomous Mobile Robot",
    description: isKo
      ? "자율 이동 로봇 플랫폼. 협동로봇과 결합해 완전 자동화 셀 구성 가능한 모듈형 AMR."
      : "Autonomous mobile robot platform. Modular AMR combinable with cobots to build fully automated cells.",
  };
}

export default async function MyAGVPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = [
    {
      title: isKo ? "자율 이동 플랫폼" : "Autonomous Mobile Platform",
      desc: isKo
        ? "라이다 기반 SLAM 자율주행으로 맵 없이도 실내 환경을 탐색. 장애물을 스스로 감지하고 경로를 재설정합니다."
        : "LiDAR-based SLAM autonomous navigation explores indoor environments without pre-mapping. Detects obstacles and reroutes automatically.",
    },
    {
      title: isKo ? "협동로봇 암 통합" : "Collaborative Arm Integration",
      desc: isKo
        ? "모바일 베이스 위에 협동로봇 암을 탑재하여 이동하면서 물체를 집고 운반하는 복합 작업이 가능합니다."
        : "Collaborative robot arm mounted on mobile base enables composite tasks of picking and transporting objects while moving.",
    },
    {
      title: isKo ? "원격 모니터링" : "Remote Monitoring",
      desc: isKo
        ? "태블릿 디스플레이와 소프트웨어를 통한 실시간 원격 제어 및 작업 상태 모니터링을 지원합니다."
        : "Real-time remote control and task status monitoring via tablet display and software.",
    },
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
              Mobile Collaborative Robot
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              MyAGV
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "자율 이동과 협동로봇 암이 결합된 모바일 로봇 플랫폼. 물류 운반부터 서비스 작업까지 다양한 현장에서 유연하게 활용됩니다."
                : "Mobile robot platform combining autonomous navigation with a collaborative robot arm. Flexibly deployed across diverse environments from logistics to service tasks."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/collaborative-robot`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "협동로봇 전체 보기" : "All Collaborative Robots"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px]">
            <Image
              src="/products/collaborative-robot/5.jpeg"
              alt="MyAGV"
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
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
