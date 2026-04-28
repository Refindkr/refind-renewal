import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RealmanPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "페이로드" : "Payload", rm65: "5 kg", eco65: "5 kg" },
    { label: isKo ? "전체 무게" : "Total Weight", rm65: "7.2 kg", eco65: "7.8 kg" },
    { label: isKo ? "최대 도달 거리" : "Max Reach", rm65: "650 mm", eco65: "610 mm" },
    { label: isKo ? "반복 정밀도" : "Repeatability", rm65: "±0.05 mm", eco65: "±0.05 mm" },
    { label: isKo ? "자유도" : "DOF", rm65: "6", eco65: "6" },
    { label: isKo ? "연속 작동 시간" : "Continuous Operation", rm65: "30,000+ hrs", eco65: "30,000+ hrs" },
  ];

  const coreValues = [
    {
      icon: "⚙️",
      title: isKo ? "통합 관절 모듈" : "Integrated Joint Modules",
      desc: isKo
        ? "드라이버, 모터, 감속기, 엔코더를 하나의 초소형 모듈에 통합하여 높은 토크 밀도와 정밀한 제어력을 동시에 확보했습니다."
        : "Driver, motor, reducer, and encoder integrated into one ultra-compact module for high torque density and precise control.",
    },
    {
      icon: "🔧",
      title: isKo ? "초경량 바디" : "Ultra-lightweight Body",
      desc: isKo
        ? "항공우주 등급의 알루미늄 합금을 적용하여 로봇 본체 무게를 획기적으로 줄이면서도 최고의 강성을 유지합니다."
        : "Aerospace-grade aluminum alloy dramatically reduces body weight while maintaining maximum rigidity.",
    },
    {
      icon: "🌐",
      title: isKo ? "오픈 에코시스템" : "Open Ecosystem",
      desc: isKo
        ? "ROS1/ROS2, Python, C++, SDK를 지원하여 전 세계 개발자들이 즉시 개발에 착수할 수 있는 오픈 아키텍처를 지향합니다."
        : "Supports ROS1/ROS2, Python, C++, and SDK, enabling developers worldwide to start building immediately.",
    },
  ];

  const useCases = [
    {
      title: isKo ? "상업 서비스" : "Commercial",
      desc: isKo ? "리테일, F&B, 서비스 환경에서의 자동화 솔루션" : "Automation solutions for retail, F&B, and service environments",
    },
    {
      title: isKo ? "의료·헬스케어" : "Healthcare",
      desc: isKo ? "수술 보조, 약품 조제, 환자 케어 자동화" : "Surgery assistance, medication dispensing, patient care automation",
    },
    {
      title: isKo ? "연구·검사" : "R&D / Inspection",
      desc: isKo ? "정밀 검사, 실험실 자동화, AI 훈련 데이터 수집" : "Precision inspection, lab automation, AI training data collection",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(0,105,114,0.25) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#0aabba] uppercase mb-4">
              Collaborative Robot · Industrial
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              REALMAN
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "Embodied Intelligence의 시작. AI가 물리적 세계와 상호작용하는 근간을 제공하는 차세대 협동 로봇 플랫폼."
                : "The foundation of Embodied Intelligence — a next-generation collaborative robot platform bridging AI and the physical world."}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["ROS2", "Python", "C++", "SDK", "30,000+ hrs"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/collaborative-robot`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/collaborative-robot/1.jpeg" alt="REALMAN" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {[
            { value: "5 kg", label: isKo ? "최대 페이로드" : "Max Payload" },
            { value: "650 mm", label: isKo ? "도달 거리" : "Max Reach" },
            { value: "±0.05 mm", label: isKo ? "반복 정밀도" : "Repeatability" },
            { value: "30,000+", label: isKo ? "연속 작동 시간(hrs)" : "Operation Hours" },
          ].map((s) => (
            <div key={s.label} className="py-10 px-8 text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Tech */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0aabba] uppercase mb-4">Core Technology</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            {isKo ? "물리 지능의 인프라를 구축합니다" : "Building the Infrastructure for Physical Intelligence"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((c) => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-3xl mb-5">{c.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flywheel */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[3px] text-[#0aabba] uppercase mb-4">AI Data Flywheel</p>
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
              {isKo ? "데이터가 지능을 진화시킵니다" : "Data Drives Intelligence Evolution"}
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              {isKo
                ? "REALMAN은 하드웨어와 클라우드를 실시간으로 연결하여 행동 데이터를 수집합니다. 수집된 데이터는 AI 강화학습(RL)에 재투입되어 로봇의 지능을 지속적으로 진화시키는 '데이터 플라이휠' 구조를 완성합니다."
                : "REALMAN connects hardware and cloud in real time to collect behavioral data, which feeds back into AI reinforcement learning — completing a self-improving data flywheel."}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { step: "01", label: isKo ? "실시간 캡처" : "Capture" },
                { step: "02", label: isKo ? "엣지 처리" : "Process" },
                { step: "03", label: isKo ? "클라우드 학습" : "Learn" },
                { step: "04", label: isKo ? "OTA 배포" : "Deploy" },
              ].map((f) => (
                <div key={f.step} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <span className="text-[#0aabba] font-bold">{f.step}</span>
                  <span className="text-white/80">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="text-5xl font-extrabold text-[#0aabba] mb-2">30,000+</div>
            <div className="text-white/50 text-sm mb-8">{isKo ? "고장 없이 연속 작동 가능 시간 (hrs)" : "Continuous operation hours without failure"}</div>
            <div className="space-y-3">
              {[
                { k: isKo ? "Infrastructure for AI" : "Infrastructure for AI", v: "✓" },
                { k: isKo ? "Hardware + Data + Network" : "Hardware + Data + Network", v: "✓" },
                { k: "99.9% " + (isKo ? "가동 신뢰성" : "Uptime Reliability"), v: "✓" },
                { k: "ISO 10218-1", v: "✓" },
              ].map((r) => (
                <div key={r.k} className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                  <span className="text-white/60">{r.k}</span>
                  <span className="text-[#0aabba] font-bold">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spec Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0aabba] uppercase mb-4">Specifications</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "모델 비교 사양" : "Model Comparison"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    {isKo ? "사양" : "Specification"}
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-bold text-gray-900">RM65 Series</th>
                  <th className="text-center py-4 px-6 text-sm font-bold text-gray-900">ECO 65</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 text-sm text-gray-500 font-medium">{s.label}</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-semibold text-center">{s.rm65}</td>
                    <td className="py-4 px-6 text-sm text-gray-900 text-center">{s.eco65}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0aabba] uppercase mb-4">Applications</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "다양한 산업 현장에서 활약합니다" : "Deployed Across Industries"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="text-xs font-mono text-gray-300 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            {isKo ? "로봇의 미래를 함께 설계하십시오" : "Let's Design the Future of Robotics Together"}
          </h2>
          <p className="text-white/50 mb-10">
            {isKo ? "기술 사양서 요청 및 협업 문의를 보내주세요." : "Request technical specs or send a collaboration inquiry."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/inquiry`}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
              {isKo ? "협업 문의하기" : "Contact Us"}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/products/collaborative-robot`}
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
              {isKo ? "다른 제품 보기" : "Other Products"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
