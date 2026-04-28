import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GForceProPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "EMG 채널" : "EMG Channels", value: "8ch" },
    { label: isKo ? "IMU" : "IMU", value: "9-axis" },
    { label: isKo ? "최대 인식 제스처" : "Max Gestures", value: "16" },
    { label: isKo ? "데이터 전송" : "Data Transfer", value: isKo ? "전용 동글 (Raw)" : "Dedicated Dongle (Raw)" },
    { label: isKo ? "SDK 지원" : "SDK Support", value: "✓" },
    { label: isKo ? "아두이노 연동" : "Arduino Compatible", value: isKo ? "gForceJoint (별도)" : "gForceJoint (separate)" },
  ];

  const features = [
    {
      title: isKo ? "8채널 건식 EMG" : "8-Channel Dry EMG",
      desc: isKo
        ? "겔 없이 피부에 직접 닿는 8개의 건식 전극이 근전도 신호를 동시에 수집합니다. 실시간 Raw 데이터 접근이 가능합니다."
        : "8 dry electrodes contact skin directly without gel to simultaneously collect EMG signals. Real-time raw data access available.",
    },
    {
      title: isKo ? "9축 IMU 내장" : "Built-in 9-Axis IMU",
      desc: isKo
        ? "3축 가속도계, 자이로스코프, 자력계를 통해 팔의 자세와 움직임을 정밀하게 추적합니다."
        : "Precisely tracks arm posture and movement via 3-axis accelerometer, gyroscope, and magnetometer.",
    },
    {
      title: isKo ? "최대 16가지 제스처 인식" : "Up to 16 Gesture Recognition",
      desc: isKo
        ? "전용 앱에서 사용자가 직접 동작을 학습시켜 최대 16가지 커스텀 제스처를 인식할 수 있습니다."
        : "Users can train their own gestures in the dedicated app to recognize up to 16 custom gestures.",
    },
    {
      title: isKo ? "다양한 SDK 지원" : "Multiple SDK Support",
      desc: isKo
        ? "개발자용 SDK를 통해 로봇 제어, VR/AR 인터페이스, 게임, 의료기기 등 다양한 응용 개발이 가능합니다."
        : "Developer SDK enables diverse application development including robot control, VR/AR interfaces, gaming, and medical devices.",
    },
  ];

  const useCases = [
    {
      title: isKo ? "로봇 제어" : "Robot Control",
      desc: isKo ? "EMG 신호와 제스처로 로봇 팔 및 의수를 직관적으로 제어합니다." : "Intuitively control robotic arms and prosthetics with EMG signals and gestures.",
    },
    {
      title: isKo ? "VR/AR 인터페이스" : "VR/AR Interface",
      desc: isKo ? "손 제스처 인식을 통해 가상 및 증강 현실 환경과 자연스럽게 상호작용합니다." : "Naturally interact with virtual and augmented reality environments through hand gesture recognition.",
    },
    {
      title: isKo ? "운동 분석" : "Motion Analysis",
      desc: isKo ? "스포츠, 재활, 신경 연구 분야에서 근육 활동 및 동작 패턴을 분석합니다." : "Analyze muscle activity and movement patterns in sports, rehabilitation, and neuroscience research.",
    },
    {
      title: isKo ? "게임 & 인터랙션" : "Gaming & Interaction",
      desc: isKo ? "커스텀 제스처로 게임 컨트롤러나 인터랙티브 설치물을 조작합니다." : "Operate game controllers or interactive installations with custom gestures.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-purple-400 uppercase mb-4">
              Physical AI · EMG Armband
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              GForcePro+
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "8채널 건식 EMG와 9축 IMU를 내장한 근전도 측정 암밴드. 최대 16가지 커스텀 제스처 인식으로 로봇 제어, VR/AR, 재활 연구까지 아우르는 인체-기계 인터페이스."
                : "EMG measurement armband with 8-channel dry EMG and 9-axis IMU. Human-machine interface covering robot control, VR/AR, and rehabilitation research with up to 16 custom gesture recognition."}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["8ch EMG", "9-axis IMU", "16 Gestures", "Raw Data", "SDK"].map((tag) => (
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
              <Link href={`/${locale}/products/physical-ai`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Products"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/sensors/tashan.png" alt="GForcePro+" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {[
            { value: "8ch", label: isKo ? "EMG 채널" : "EMG Channels" },
            { value: "9-axis", label: "IMU" },
            { value: "16", label: isKo ? "최대 인식 제스처" : "Max Gestures" },
            { value: "Raw", label: isKo ? "데이터 접근" : "Data Access" },
          ].map((s) => (
            <div key={s.label} className="py-10 px-6 text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-purple-500 uppercase mb-4">Key Features</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            {isKo ? "근전도 기반 인체-기계 인터페이스" : "EMG-based Human-Machine Interface"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-purple-500 uppercase mb-4">Specifications</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "제품 사양" : "Product Specifications"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {specs.map((s, i) => (
              <div key={i} className="flex justify-between items-center bg-white rounded-xl px-6 py-4 border border-gray-100">
                <span className="text-sm text-gray-500">{s.label}</span>
                <span className="text-sm font-bold text-gray-900">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-purple-400 uppercase mb-4">Applications</p>
          <h2 className="text-4xl font-extrabold mb-16 tracking-tight">
            {isKo ? "다양한 분야에서 활용됩니다" : "Deployed Across Diverse Fields"}
          </h2>
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

      {/* Wearing Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-purple-500 uppercase mb-4">Usage Guide</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "사용 방법" : "How to Use"}
          </h2>
          <div className="space-y-4">
            {[
              isKo ? "원하는 팔 부위에 착용 (전극이 피부에 전부 닿도록)" : "Wear on the desired arm area (all electrodes must contact skin)",
              isKo ? "전용 앱(gforce-portal.oymotion.com)에서 앱 언어를 영어로 설정 후 설치" : "Set app language to English in the dedicated app (gforce-portal.oymotion.com)",
              isKo ? "사용할 EMG 채널 수 지정 (최대 8개)" : "Specify the number of EMG channels to use (up to 8)",
              isKo ? "각 동작을 30초씩, 최소 5회 반복 학습" : "Train each gesture for 30 seconds, minimum 5 repetitions",
              isKo ? "학습 완료 후 전용 동글로 Raw 데이터 수신 가능" : "After training, receive raw data via dedicated dongle",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 border-l-2 border-gray-200 pl-4">
            {isKo
              ? "※ 방수가 되지 않으므로 물에 닿지 않게 주의하세요. 사용 후 피부에 자국이 남을 수 있습니다."
              : "※ Not waterproof — avoid contact with water. Skin marks may remain after use."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            {isKo ? "GForcePro+로 새로운 인터페이스를 구축하세요" : "Build New Interfaces with GForcePro+"}
          </h2>
          <p className="text-white/50 mb-10">
            {isKo ? "제품 구매 및 연구 협력 문의를 보내주세요." : "Send your purchase and research collaboration inquiries."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/inquiry`}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
              {isKo ? "문의하기" : "Contact Us"}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/products/physical-ai`}
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
              {isKo ? "다른 제품 보기" : "Other Products"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
