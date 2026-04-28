import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ORE3000Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const modes = [
    {
      name: isKo ? "수동 모드" : "Passive Mode",
      desc: isKo
        ? "앱에 설정된 값을 기반으로 사전 정의된 신호가 전송되어 반복적인 상지 굴곡 및 신전 운동을 수행합니다."
        : "Sends predefined signals based on app settings to perform repetitive upper limb flexion and extension exercises.",
      icon: "🔄",
    },
    {
      name: isKo ? "원격 제어 모드" : "Remote Control Mode",
      desc: isKo
        ? "전용 리모컨의 버튼으로 실시간 제어하며 치료사나 보호자가 직접 재활 훈련을 보조할 수 있습니다."
        : "Real-time control via dedicated remote control, allowing therapists or caregivers to directly assist rehabilitation training.",
      icon: "📡",
    },
    {
      name: isKo ? "보조 모드" : "Assistive Mode",
      desc: isKo
        ? "4채널 EMG 센서로 착용자의 근전도 신호를 감지하여 운동 의도를 파악하고 능동적으로 움직임을 보조합니다."
        : "Detects wearer's EMG signals via 4-channel sensors to identify movement intent and actively assist motion.",
      icon: "🧠",
    },
  ];

  const features = [
    {
      title: isKo ? "4채널 건식 EMG 전극" : "4-Channel Dry EMG Electrodes",
      desc: isKo ? "겔 없이 피부에 직접 부착되는 건식 전극으로 간편하게 착용하고 근전도 신호를 실시간 측정합니다." : "Dry electrodes attach directly to skin without gel for easy application and real-time EMG signal measurement.",
    },
    {
      title: isKo ? "무선 배터리 구동" : "Wireless Battery Operation",
      desc: isKo ? "배선 없이 자유롭게 이동하며 재활 훈련이 가능합니다. 충전식 배터리로 장시간 사용을 지원합니다." : "Enables free movement during rehabilitation training without cables. Rechargeable battery supports extended use.",
    },
    {
      title: isKo ? "전용 앱 & 리모컨 제어" : "Dedicated App & Remote Control",
      desc: isKo ? "스마트폰 앱 또는 리모컨을 통해 운동 파라미터를 설정하고 실시간으로 재활 진행 상황을 모니터링합니다." : "Set exercise parameters and monitor rehabilitation progress in real time via smartphone app or remote control.",
    },
    {
      title: isKo ? "SDK / API 제공" : "SDK / API Available",
      desc: isKo ? "개발자용 SDK와 API를 제공하여 맞춤형 재활 솔루션 개발 및 연구 활용이 가능합니다." : "Developer SDK and API available for customized rehabilitation solution development and research applications.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-green-400 uppercase mb-4">
              Body Enhancement · Upper Limb
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              ORE-3000
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "상지 재활 및 근력 증강을 위한 로봇 운동기. 4채널 EMG 센서로 착용자의 운동 의도를 감지하여 3가지 맞춤형 훈련 모드를 제공합니다."
                : "Robotic exercise device for upper limb rehabilitation and strength enhancement. Detects movement intent via 4-channel EMG sensors with 3 customizable training modes."}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["4ch EMG", isKo ? "3가지 모드" : "3 Modes", isKo ? "무선 구동" : "Wireless", "SDK/API", isKo ? "전용 앱" : "Dedicated App"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "제품 문의하기" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/body-enhancement`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/body-enhancement/HDE.jpg" alt="ORE-3000" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* 3 Modes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-green-500 uppercase mb-4">Operating Modes</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            {isKo ? "3가지 맞춤형 훈련 모드" : "3 Customizable Training Modes"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modes.map((m, i) => (
              <div key={i} className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-4xl mb-5">{m.icon}</div>
                <div className="text-xs font-mono text-gray-300 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-green-400 uppercase mb-4">Key Features</p>
          <h2 className="text-4xl font-extrabold mb-16 tracking-tight">
            {isKo ? "스마트 재활의 핵심 기술" : "Core Technology for Smart Rehabilitation"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-base font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-green-500 uppercase mb-4">Who It's For</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "이런 분들께 권장합니다" : "Recommended For"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isKo ? "뇌졸중 / 척수 손상" : "Stroke / Spinal Cord Injury",
                desc: isKo ? "중추 신경계 손상으로 인한 상지 운동 장애 환자의 재활 훈련을 지원합니다." : "Supports rehabilitation training for upper limb motor disorders caused by central nervous system damage.",
              },
              {
                title: isKo ? "말초 신경 손상" : "Peripheral Nerve Injury",
                desc: isKo ? "근력 감소, 관절 가동성 상실 등 상지 말초 신경 손상 후 재활이 필요한 분들을 위한 솔루션입니다." : "Solution for those needing rehabilitation after upper limb peripheral nerve injuries including reduced muscle strength and joint mobility loss.",
              },
              {
                title: isKo ? "뇌성마비 / 소아 마비" : "Cerebral Palsy / Pediatric",
                desc: isKo ? "어린이의 뇌성마비나 마비로 인한 신경계 손상 시 손가락 운동 장애 재활을 돕습니다." : "Assists in rehabilitation of finger motor disorders in children with cerebral palsy or paralysis-related neurological damage.",
              },
            ].map((t, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8">
                <div className="text-xs font-mono text-gray-300 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {isKo ? "재활 솔루션에 대해 문의하세요" : "Inquire About Rehabilitation Solutions"}
          </h2>
          <p className="text-gray-400 mb-10">
            {isKo ? "제품 사양 및 도입 문의를 보내주세요." : "Send your product specs and implementation inquiries."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/inquiry`}
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full text-sm hover:bg-gray-800 transition-colors">
              {isKo ? "제품 문의하기" : "Contact Us"}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/products/body-enhancement`}
              className="inline-flex items-center px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-full text-sm hover:border-gray-400 transition-colors">
              {isKo ? "다른 제품 보기" : "Other Products"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
