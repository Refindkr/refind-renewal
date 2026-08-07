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
    title: isKo ? "HYBRIDEX 로봇 보조기" : "HYBRIDEX Robot Support",
    description: isKo
      ? "사용자의 의도를 파악해 손과 팔의 기능을 보조·대체하는 지능형 하이브리드 상지 보조 로봇."
      : "An intelligent hybrid upper-limb support robot that reads user intent to assist or replace hand and arm function.",
  };
}

export default async function HYBRIDEXPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = isKo
    ? [
        {
          title: "하이브리드 메커니즘",
          desc: "로봇 의수(Hand)가 물건 집기, 타이핑 등 정교한 손가락 움직임을 구현하고, 상지 보조기(Arm Support)가 기계식 지지대로 팔의 무게를 지탱하며 근력을 보조합니다.",
        },
        {
          title: "AI 기반 의도 인식",
          desc: "잔존 근육에서 발생하는 미세한 신호를 EMG(근전도) 센서로 감지하고, AI 알고리즘이 주먹 쥐기·펴기 등 사용자의 의도를 실시간으로 분석해 로봇을 제어합니다.",
        },
        {
          title: "감각 피드백",
          desc: "손끝에 내장된 힘 센서(Force Sensor)와 촉각 센서(Tactile Sensor)로 물체의 무게나 잡는 힘을 감지합니다.",
        },
        {
          title: "경량화 및 맞춤형 설계",
          desc: "알루미늄 합금 등 가벼운 소재를 사용해 일상생활에서 장시간 착용할 수 있으며, 사용자의 신체 사이즈에 맞춰 커스터마이징할 수 있습니다.",
        },
      ]
    : [
        {
          title: "Hybrid Mechanism",
          desc: "The robot hand realizes precise finger movements for grasping objects, typing, and more, while the arm support fuses a mechanical frame to bear arm weight and assist muscle strength.",
        },
        {
          title: "AI-Based Intent Recognition",
          desc: "EMG sensors detect subtle signals from residual muscles, and an AI algorithm analyzes user intent — such as making a fist or opening the hand — in real time to control the robot.",
        },
        {
          title: "Sensory Feedback",
          desc: "Force and tactile sensors built into the fingertips detect an object's weight and grip force.",
        },
        {
          title: "Lightweight, Custom-Fit Design",
          desc: "Lightweight materials such as aluminum alloy allow extended daily wear, and the device can be customized to the user's body size.",
        },
      ];

  const benefits = isKo
    ? [
        { title: "일상 복귀", desc: "식사, 양치, 물건 들기 등 기본적인 일상 활동을 수행할 수 있습니다." },
        { title: "직업 복귀", desc: "정교한 작업이 필요한 업무 수행을 보조합니다." },
        { title: "재활 훈련", desc: "능동적인 움직임을 유도하여 재활 효과를 높입니다." },
      ]
    : [
        { title: "Return to Daily Life", desc: "Perform basic daily activities like eating, brushing teeth, and lifting objects." },
        { title: "Return to Work", desc: "Assists tasks that require precise manipulation." },
        { title: "Rehabilitation Training", desc: "Encourages active movement to enhance rehabilitation outcomes." },
      ];

  const specs = [
    { label: isKo ? "자유도" : "Degrees of Freedom", value: isKo ? "5~6 자유도 (손가락 개별 제어)" : "5-6 DOF (individual finger control)" },
    { label: isKo ? "센서" : "Sensors", value: isKo ? "고정밀 근전도(EMG) 센서, IMU 내장" : "High-precision EMG sensors, built-in IMU" },
    { label: isKo ? "무게 (손 부분)" : "Weight (Hand Section)", value: isKo ? "경량 모델 기준 약 300g~500g대" : "Approx. 300-500g for lightweight models" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              {isKo ? "로봇보조기" : "Robot Support"}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">HYBRIDEX</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "일상을 다시 잇다" : "Reconnect Daily Life"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "사용자의 의도를 파악하여 손과 팔의 기능을 보조·대체하는 지능형 하이브리드 상지 보조 로봇. 로봇 의수와 기계식 상지 보조기를 융합해 일상 복귀와 재활을 돕습니다."
                : "An intelligent hybrid upper-limb support robot that reads user intent to assist or replace hand and arm function. Fuses a robotic hand with a mechanical arm support to help users return to daily life and support rehabilitation."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/robot-support`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "로봇보조기 전체 보기" : "All Robot Support"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/robot-support/hybridex/hybridex-1.png" alt="HYBRIDEX" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "핵심 기능 및 특징" : "Key Functions & Features"}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 구성" : "Product Composition"}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 overflow-hidden bg-gray-50">
              <div className="relative h-72">
                <Image src="/products/robot-support/hybridex/hybridex-2.jpg" alt={isKo ? "상지 보조기 착용 모습" : "Arm support in use"} fill
                  className="object-contain p-6" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="px-6 py-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{isKo ? "상지 보조기 (Arm Support)" : "Arm Support"}</h3>
                <p className="text-xs text-gray-500">{isKo ? "기계식 지지대로 팔의 무게를 지탱하고 근력을 보조합니다." : "A mechanical frame bears arm weight and assists muscle strength."}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 overflow-hidden bg-gray-50">
              <div className="relative h-72">
                <Image src="/products/robot-support/hybridex/hybridex-3.jpg" alt={isKo ? "로봇 의수" : "Robot hand"} fill
                  className="object-contain p-6" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="px-6 py-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{isKo ? "로봇 의수 (Hand)" : "Robot Hand"}</h3>
                <p className="text-xs text-gray-500">{isKo ? "정교한 손가락 움직임으로 물건 집기, 타이핑 등을 구현합니다." : "Precise finger movements enable grasping objects, typing, and more."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "기대 효과" : "Expected Benefits"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="text-xs font-bold text-gray-300 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-2">
            {isKo ? "기술 사양" : "Technical Specifications"}
          </p>
          <p className="text-xs text-gray-400 mb-10">
            {isKo ? "참고용 사양이며, 상세 스펙은 모델별로 상이할 수 있습니다." : "Reference specifications — detailed specs may vary by model."}
          </p>
          <div className="max-w-2xl overflow-hidden rounded-2xl border border-gray-100">
            {specs.map((s, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <span className="text-gray-500 font-medium">{s.label}</span>
                <span className="font-semibold text-gray-900 text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "일상을 다시 잇고 싶으신가요?" : "Ready to Reconnect Daily Life?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 도입 방안을 상담해 드립니다." : "Refind experts will guide you to the optimal implementation."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
