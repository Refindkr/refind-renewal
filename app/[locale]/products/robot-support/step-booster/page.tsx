import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "STEP BOOSTER 로봇 보조기" : "STEP BOOSTER Robot Support",
    description: isKo
      ? "기존 다리 보조기(AFO, KAFO 등)에 장착하는 착탈식 휴대용 보행 보조 동력 장치. AI 기반 맞춤형 보조력 제공."
      : "A detachable, portable powered assist device that attaches to existing leg orthoses (AFO, KAFO, etc.), providing AI-personalized gait assistance.",
  };
}

export default async function STEPBOOSTERPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = isKo
    ? [
        {
          title: "뛰어난 호환성",
          desc: "모듈러 시스템으로 하지보조기(AFO), 긴다리보조기(KAFO), 골반하지보조기(HKAFO), 정형 신발 등 다양한 기존 보조기에 부착 가능하며, 좌우 구분 없이 사용할 수 있습니다.",
        },
        {
          title: "AI 기반 맞춤형 보조",
          desc: "인공지능이 사용자의 보행 특성을 분석해 개인별로 필요한 최적의 보조력을 계산·제공합니다. (개인 보행 판별 → 필요 보조력 계산 → 텐던 구동 방식으로 보조력 제공)",
        },
        {
          title: "휴대성 및 경량화",
          desc: "무게 600g 이내(배터리 제외), 크기 100×120×45mm의 착탈식 구조로 필요할 때만 장착해 일상생활 부담을 최소화합니다.",
        },
        {
          title: "경제성",
          desc: "약 1억 원에 달하는 고가의 외골격 로봇이나 수천만 원대 타사 제품 대비, 약 250만 원의 저렴한 비용으로 보행 보조 효과를 구현합니다.",
        },
      ]
    : [
        {
          title: "Excellent Compatibility",
          desc: "A modular system attaches to a wide range of existing orthoses — AFO, KAFO, HKAFO, and orthopedic shoes — and works on either leg.",
        },
        {
          title: "AI-Personalized Assistance",
          desc: "AI analyzes the user's gait characteristics and calculates the optimal assistive force for each individual, delivered via a tendon-driven mechanism (gait detection → assist force calculation → tendon-driven assistance).",
        },
        {
          title: "Portable & Lightweight",
          desc: "Under 600g (excluding battery) and 100×120×45mm in size. The detachable structure means it's worn only when needed, minimizing daily burden.",
        },
        {
          title: "Cost-Effective",
          desc: "Delivers gait assistance for around ₩2.5 million — a fraction of the cost of a ~₩100 million exoskeleton robot or competing products priced in the tens of millions of won.",
        },
      ];

  const clinicalStats = [
    { value: isKo ? "12.8% 단축" : "12.8% Faster", label: "TUGT", desc: isKo ? "일어나 걸어가기 수행 시간" : "Timed Up & Go Test" },
    { value: isKo ? "7.4% 향상" : "7.4% Faster", label: "10MWT", desc: isKo ? "10m 걷기 보행 속도" : "10m Walk Test speed" },
    { value: isKo ? "5.4% 증가" : "5.4% Farther", label: "6MWT", desc: isKo ? "6분 걷기 이동 거리" : "6-Minute Walk Test distance" },
    { value: isKo ? "29.3% 감소" : "29.3% Less", label: "PCI", desc: isKo ? "보행 에너지 소모" : "Energy expenditure" },
  ];

  const audience = isKo
    ? [
        { title: "Walk Again", desc: "다시 두 발로 걷고자 하는 강한 의지가 있는 분 (재활 초기/중기)" },
        { title: "Better Movement", desc: "기존 보조기의 제한된 움직임에 답답함을 느끼는 분" },
        { title: "Daily Freedom", desc: "더 편안하고 자연스럽게, 안전한 보행을 원하는 분 (경증 보행 장애, 편마비 등)" },
      ]
    : [
        { title: "Walk Again", desc: "For those with a strong will to walk on two feet again (early/mid rehabilitation)" },
        { title: "Better Movement", desc: "For those frustrated by the limited movement of existing orthoses" },
        { title: "Daily Freedom", desc: "For those seeking more comfortable, natural, and safe walking (mild gait disorders, hemiplegia, etc.)" },
      ];

  const specs = [
    { label: isKo ? "구동 방식" : "Drive Mechanism", value: isKo ? "텐던(줄) 이용 발 들어올리기 지원" : "Tendon-driven foot clearance assist" },
    { label: isKo ? "무게" : "Weight", value: isKo ? "600g 이내 (배터리 제외)" : "Under 600g (excl. battery)" },
    { label: isKo ? "크기" : "Dimensions", value: "100 × 120 × 45mm" },
    { label: isKo ? "사용 시간" : "Operating Time", value: isKo ? "연속 4시간 이상" : "4+ hours continuous" },
    { label: isKo ? "재질" : "Material", value: isKo ? "알루미늄 케이스, 합성수지 텐던" : "Aluminum case, synthetic resin tendon" },
    { label: isKo ? "착용 방식" : "Wearing Method", value: isKo ? "골반 착용 및 서스펜더로 무게 분산" : "Waist-worn with suspenders for weight distribution" },
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
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">STEP BOOSTER</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "당신의 불안했던 발걸음에 자존감을 더하다" : "Walk with Confidence"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "기존 수동식 다리 보조기(AFO, KAFO 등)에 장착하여 보행 보조력을 제공하는 착탈식 휴대용 보조 동력 장치입니다."
                : "A detachable, portable powered assist device that attaches to existing passive leg orthoses (AFO, KAFO, etc.) to provide walking assistance."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/products/robot-support`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "로봇보조기 전체 보기" : "All Robot Support"}
              </Link>
            </div>
          </div>
          <div className="relative h-56 md:h-72">
            <Image src="/products/robot-support/step-booster/step-booster-unit.png" alt="STEP BOOSTER" fill
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
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Composition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 구성" : "Product Composition"}
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 relative h-48 overflow-hidden">
                <Image src="/products/robot-support/step-booster/step-booster-full.png" alt={isKo ? "전체 착용 모습" : "Full wear"} fill
                  className="object-contain p-4" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 relative h-48 overflow-hidden">
                <Image src="/products/robot-support/step-booster/step-booster-ankle.png" alt={isKo ? "발목 구동부 클로즈업" : "Ankle mechanism close-up"} fill
                  className="object-contain p-4" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-80 md:h-96">
                <Image src="/products/robot-support/step-booster/step-booster-worn.png" alt={isKo ? "착용 전체 모습" : "Worn on leg"} fill
                  className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mt-8 max-w-2xl">
            {isKo
              ? "골반에 착용하는 구동 유닛에서 텐던(줄)이 발목 보조기까지 이어져 보행 시 발 들어올리기(Foot Clearance)를 지원합니다."
              : "A tendon runs from the waist-worn drive unit down to the ankle orthosis, supporting foot clearance during walking."}
          </p>
        </div>
      </section>

      {/* Clinical Effects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "임상 효과" : "Clinically Proven"}
          </p>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed mb-10">
            {isKo
              ? "회선 보행, 족하수(Foot Drop), 무릎 굴곡 이상 등 다양한 병적 보행 패턴 완화가 확인되었으며, 보행의 자연스러움과 안정성 증가, 피로감 감소로 보조기 착용 의지와 빈도가 높아졌습니다."
              : "Improvements were confirmed across pathological gait patterns including circumduction, foot drop, and abnormal knee flexion — with increased natural gait, stability, and reduced fatigue leading to higher willingness to wear the device."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clinicalStats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
                <p className="text-lg font-extrabold text-[#E1251B] mb-1">{s.value}</p>
                <p className="text-xs font-bold text-gray-900 mb-0.5">{s.label}</p>
                <p className="text-xs text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "추천 대상" : "Target Audience"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {audience.map((a, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "주요 스펙 요약" : "Key Specifications"}
          </p>
          <div className="max-w-2xl overflow-hidden">
            {specs.map((s, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50/40" : ""}`}>
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
            {isKo ? "자신감 있는 걸음을 되찾고 싶으신가요?" : "Ready to Walk with Confidence?"}
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
