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
    title: isKo ? "REALBOT S2 휴머노이드 로봇" : "REALBOT S2 Humanoid Robot",
    description: isKo
      ? "풀바디 휴머노이드 로봇. 고자유도 관절과 정밀 제어로 다양한 서비스·산업 작업 수행."
      : "Full-body humanoid robot with high-DOF joints and precise control for diverse service and industrial tasks.",
  };
}

export default async function RealbotPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "몸무게" : "Weight", value: "< 95 kg" },
    { label: isKo ? "페이로드 (팔당)" : "Payload per Arm", value: "5 kg" },
    { label: isKo ? "자유도" : "DOF", value: "21" },
    { label: isKo ? "충전 시간" : "Charging Time", value: "1.65 hrs" },
    { label: isKo ? "신장" : "Height", value: "168 cm" },
    { label: isKo ? "최대 보행 속도" : "Max Speed", value: "0.1 ~ 1.6 m/s" },
    { label: isKo ? "최소 회전 반경" : "Min Turn Radius", value: "690 mm" },
    { label: isKo ? "배터리" : "Battery", value: "25.2V / 33Ah" },
    { label: isKo ? "팔 수평 리치" : "Arm Reach", value: "1,200 mm" },
    { label: isKo ? "네트워크" : "Network", value: "Wi-Fi / BT" },
  ];

  const features = [
    {
      title: isKo ? "인간 팔 모사 제어" : "Bio-mimetic Control",
      desc: isKo
        ? "인간의 근골격계 구조를 모사하여 섬세한 물체 조작과 고도의 유연성을 확보했습니다."
        : "Mimics the human musculoskeletal structure for delicate object manipulation and high flexibility.",
    },
    {
      title: isKo ? "GLN 네트워크 통합" : "GLN Network Integration",
      desc: isKo
        ? "Global Learning Network를 통해 전 세계의 로봇 학습 데이터를 동기화하고 성능을 지속적으로 향상시킵니다."
        : "Synchronizes robot learning data worldwide via Global Learning Network for continuous performance improvement.",
    },
    {
      title: isKo ? "Embodied AI 생태계" : "Embodied AI Ecosystem",
      desc: isKo
        ? "하드웨어와 AI가 완벽히 결합된 신체 지능으로 복잡한 비정형 작업 수행이 가능합니다."
        : "Hardware and AI perfectly integrated as Embodied Intelligence, enabling complex unstructured task execution.",
    },
    {
      title: isKo ? "내구성 및 안전 인증" : "Safety Certified",
      desc: isKo
        ? "산업용 등급의 내구성 테스트를 통과하였으며, 5단계 안전 충돌 방지 시스템을 갖췄습니다."
        : "Passed industrial-grade durability tests with a 5-level collision prevention safety system.",
    },
  ];

  const useCases = [
    {
      title: isKo ? "스마트 물류" : "Smart Logistics",
      desc: isKo ? "비정형 화물 분류부터 창고 내 자율 운송까지 자동화 효율을 극대화합니다." : "Maximizes automation efficiency from unstructured cargo sorting to autonomous warehouse transport.",
    },
    {
      title: isKo ? "의료 서비스" : "Healthcare",
      desc: isKo ? "병동 내 물품 운송 및 환자 보조 업무로 의료진의 업무 강도를 완화합니다." : "Relieves medical staff workload through ward supply transport and patient assistance tasks.",
    },
    {
      title: isKo ? "정밀 제조" : "Precision Manufacturing",
      desc: isKo ? "인간과 동일한 공구 사용이 가능하여 유연 생산 라인 구축에 최적화됩니다." : "Optimized for flexible production lines with the ability to use the same tools as humans.",
    },
    {
      title: isKo ? "R&D 가속" : "R&D Acceleration",
      desc: isKo ? "AI 학습 연구를 위한 플랫폼으로서 오픈 API와 시뮬레이션 환경을 지원합니다." : "Supports open API and simulation environments as a platform for AI learning research.",
    },
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
            Humanoid Robot · Full-body
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            REALBOT S2
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
            {isKo
              ? "인간과 유사한 형태와 지능을 갖춘 휴머노이드 로봇으로, 자율 학습과 정밀한 동작을 통해 다양한 환경에서 인간과 협력합니다."
              : "Next-generation mobility combining human form and intelligence. Collaborates with humans through autonomous learning algorithms and high-precision hardware."}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["21 DOF", "168 cm", "< 95 kg", "Wi-Fi / BT", "Open API"].map((tag) => (
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

      {/* Core Stats */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100">
          {[
            { value: "168 cm", label: isKo ? "신장" : "Height" },
            { value: "< 95 kg", label: isKo ? "무게" : "Weight" },
            { value: "21 DOF", label: isKo ? "자유도" : "Degrees of Freedom" },
            { value: "5 kg", label: isKo ? "팔당 페이로드" : "Per-arm Payload" },
            { value: "1.65 hrs", label: isKo ? "충전 시간" : "Charge Time" },
          ].map((s) => (
            <div key={s.label} className="py-10 px-6 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Engineered Excellence</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            {isKo ? "지능형 로보틱스의 새로운 기준" : "New Standard for Intelligent Robotics"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8 hover:border-[#E1251B]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#E1251B]/10 flex items-center justify-center text-[#E1251B] font-bold text-sm mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Specifications</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "기술 사양" : "Technical Specifications"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[420px] md:h-[560px] order-2 md:order-1">
              <Image src="/products/humanoid/realbot-s2.png" alt="REALBOT S2" fill
                className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 order-1 md:order-2">
              {specs.map((s, i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-xl px-6 py-4 border border-gray-100">
                  <span className="text-sm text-gray-500">{s.label}</span>
                  <span className="text-sm font-bold text-gray-900">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases GIF */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Applications</p>
          <h2 className="text-4xl font-extrabold mb-12 tracking-tight">
            {isKo ? "다양한 산업에서 인간과 협력합니다" : "Collaborating with Humans Across Industries"}
          </h2>

          {/* GIF 시연 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { src: "/products/humanoid/gif/realbot_1.gif", label: isKo ? "보행 동작" : "Walking Motion" },
              { src: "/products/humanoid/gif/realbot_2.gif", label: isKo ? "팔 제어" : "Arm Control" },
              { src: "/products/humanoid/gif/realbot_3.gif", label: isKo ? "물체 조작" : "Object Manipulation" },
              { src: "/products/humanoid/gif/realbot_5.gif", label: isKo ? "협력 작업" : "Collaborative Task" },
            ].map((g, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white/5 border border-white/10 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-semibold text-white/60">{g.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 응용 분야 카드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((u, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-xs font-mono text-white/30 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-white mb-3">{u.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{u.desc}</p>
              </div>
            ))}
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
