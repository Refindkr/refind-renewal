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
    title: isKo ? "OYFM-7000 손가락 재활 외골격" : "OYFM-7000 Finger Rehabilitation Exoskeleton",
    description: isKo
      ? "손가락 재활·보조를 위한 경량 외골격. 4채널 EMG 운동 의도 감지, 0°~70° 운동 범위."
      : "Lightweight exoskeleton for finger rehabilitation and assistance. 4-channel EMG intent detection, 0°–70° range of motion.",
  };
}

export default async function OYFM7000Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const modes = [
    {
      name: isKo ? "수동 모드" : "Passive Mode",
      desc: isKo
        ? "앱에 설정된 값에 따라 손가락이 0°~70° 범위에서 반복적으로 굴곡 및 신전 운동을 수행합니다."
        : "Fingers perform repetitive flexion and extension movements in the 0°–70° range based on app settings.",
      icon: "🔄",
    },
    {
      name: isKo ? "원격 제어 모드" : "Remote Control Mode",
      desc: isKo
        ? "리모컨 버튼으로 손가락 운동을 직접 제어합니다. 치료사 또는 보호자 보조 훈련에 최적화되어 있습니다."
        : "Directly control finger movements with remote control buttons. Optimized for therapist or caregiver-assisted training.",
      icon: "📡",
    },
    {
      name: isKo ? "보조 모드" : "Assistive Mode",
      desc: isKo
        ? "4채널 EMG 센서로 상지 근전도 신호를 수집해 제스처를 인식하고 손가락 운동 의도를 파악하여 능동 보조합니다."
        : "Collects upper limb EMG signals via 4-channel sensors to recognize gestures and identify finger movement intent for active assistance.",
      icon: "🧠",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(251,191,36,0.12) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-yellow-400 uppercase mb-4">
              Body Enhancement · Hand / Finger
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              OYFM-7000
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "손가락 재활 및 지능형 움직임 보조를 위한 경량 로봇 기기. 0°~70° 광범위한 운동 범위와 EMG 기반 의도 감지로 일상생활 속 손 기능을 회복합니다."
                : "Lightweight robotic device for finger rehabilitation and intelligent movement assistance. Restores hand function in daily life with 0°–70° wide range of motion and EMG-based intent detection."}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["4ch EMG", "0°~70°", isKo ? "3가지 모드" : "3 Modes", isKo ? "경량 설계" : "Lightweight", isKo ? "일상 착용 가능" : "Daily Wearable"].map((tag) => (
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
            <Image src="/products/body-enhancement/HDE.jpg" alt="OYFM-7000" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 divide-x divide-gray-100">
          {[
            { value: "0°~70°", label: isKo ? "손가락 운동 범위" : "Finger ROM" },
            { value: "4ch", label: isKo ? "EMG 채널" : "EMG Channels" },
            { value: "3", label: isKo ? "운동 모드" : "Operating Modes" },
          ].map((s) => (
            <div key={s.label} className="py-10 px-8 text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Modes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-yellow-500 uppercase mb-4">Operating Modes</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            {isKo ? "3가지 지능형 운동 모드" : "3 Intelligent Operating Modes"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modes.map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-4xl mb-5">{m.icon}</div>
                <div className="text-xs font-mono text-gray-300 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Strengths */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-yellow-400 uppercase mb-4">Design Features</p>
          <h2 className="text-4xl font-extrabold mb-16 tracking-tight">
            {isKo ? "일상과 함께하는 스마트 디자인" : "Smart Design for Everyday Use"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isKo ? "가볍고 유연한 소재" : "Lightweight & Flexible",
                desc: isKo ? "가벼운 소재로 오랜 시간 착용해도 편안하며, 유연한 디자인으로 일상 활동을 방해하지 않습니다." : "Lightweight material ensures comfort during extended wear, and flexible design doesn't interfere with daily activities.",
              },
              {
                title: isKo ? "지능형 EMG 감지" : "Intelligent EMG Detection",
                desc: isKo ? "4채널 센서와 알고리즘을 통해 손아귀 힘을 감지하고 적절한 보조를 제공하여 손가락 피로를 줄입니다." : "Detects grip strength via 4-channel sensors and algorithms to provide appropriate assistance and reduce finger fatigue.",
              },
              {
                title: isKo ? "높은 휴대성" : "Highly Portable",
                desc: isKo ? "가방에 쉽게 보관할 수 있어 이동 중에도 언제 어디서나 편리하게 사용할 수 있습니다." : "Easily stored in a bag, allowing convenient use anywhere, anytime while on the go.",
              },
            ].map((f, i) => (
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
          <p className="text-xs font-bold tracking-[3px] text-yellow-500 uppercase mb-4">Who It's For</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "활용 대상" : "Target Users"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                title: isKo ? "중추 신경계 손상" : "Central Nervous System Injury",
                desc: isKo ? "뇌졸중, 척수 손상, 외상성 뇌 손상으로 인한 손가락 운동 장애를 가진 분들의 재활을 지원합니다." : "Supports rehabilitation for those with finger motor disorders caused by stroke, spinal cord injury, or traumatic brain injury.",
              },
              {
                title: isKo ? "말초 신경 손상" : "Peripheral Nerve Injury",
                desc: isKo ? "근력 감소, 관절 가동성 상실, 근육 위축 등 상지 말초 신경 손상 후 손가락 운동 장애 재활에 활용합니다." : "Used for rehabilitation of finger motor disorders after upper limb peripheral nerve injuries including muscle weakness and joint mobility loss.",
              },
              {
                title: isKo ? "어린이 뇌성마비" : "Pediatric Cerebral Palsy",
                desc: isKo ? "뇌성마비나 마비로 인한 중추 또는 말초 신경계 손상이 발생한 어린이의 손가락 운동 재활을 돕습니다." : "Helps with finger movement rehabilitation in children with cerebral palsy or neurological damage from paralysis.",
              },
              {
                title: isKo ? "일상 기능 보조" : "Daily Function Assistance",
                desc: isKo ? "손 기능을 보완하여 환자가 일상 생활에서 자가 관리를 할 수 있도록 보조합니다." : "Supplements hand function to help patients perform self-care activities in daily life.",
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

      {/* Compare with ORE-3000 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-yellow-500 uppercase mb-4">Product Lineup</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "신체 증강 제품 비교" : "Body Enhancement Lineup"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    {isKo ? "항목" : "Item"}
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-bold text-gray-900">ORE-3000</th>
                  <th className="text-center py-4 px-6 text-sm font-bold text-yellow-600">OYFM-7000</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: isKo ? "대상 부위" : "Target Area", ore: isKo ? "상지 (팔 전체)" : "Upper Limb (Full Arm)", oyfm: isKo ? "손가락" : "Fingers" },
                  { label: isKo ? "EMG 채널" : "EMG Channels", ore: "4ch", oyfm: "4ch" },
                  { label: isKo ? "운동 모드" : "Modes", ore: "3", oyfm: "3" },
                  { label: isKo ? "운동 범위" : "Range of Motion", ore: isKo ? "상지 굴곡/신전" : "Arm Flexion/Extension", oyfm: "0°~70°" },
                  { label: isKo ? "SDK 제공" : "SDK Available", ore: "✓", oyfm: "-" },
                  { label: isKo ? "일상 착용" : "Daily Wearable", ore: "△", oyfm: "✓" },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 text-sm text-gray-500 font-medium">{r.label}</td>
                    <td className="py-4 px-6 text-sm text-gray-900 text-center">{r.ore}</td>
                    <td className="py-4 px-6 text-sm text-yellow-700 font-semibold text-center">{r.oyfm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            {isKo ? "손 기능 회복의 새로운 시작" : "A New Start for Hand Function Recovery"}
          </h2>
          <p className="text-white/50 mb-10">
            {isKo ? "제품 도입 및 상담 문의를 보내주세요." : "Send your product inquiry and consultation request."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/inquiry`}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
              {isKo ? "제품 문의하기" : "Contact Us"}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/products/body-enhancement`}
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
              {isKo ? "다른 제품 보기" : "Other Products"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
