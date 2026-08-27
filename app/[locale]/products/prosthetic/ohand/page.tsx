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
    title: isKo ? "Ohand AI 전자의수" : "Ohand AI Prosthetic Hand",
    description: isKo
      ? "8채널 EMG + AI 알고리즘으로 27가지 동작 구현. 배터리 12시간 지속. 전용 앱 연동."
      : "8-channel EMG + AI algorithm for 27 motion patterns. 12-hour battery life with dedicated app integration.",
  };
}

export default async function OhandPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const measurements = [
    { label: isKo ? "손 전체 길이" : "Total Hand Length", value: "179 mm" },
    { label: isKo ? "손바닥 최대 너비" : "Maximum Palm Width", value: "83 mm" },
    { label: isKo ? "손목 마운트 너비" : "Wrist Mount Width", value: "47 mm" },
    { label: isKo ? "손목 높이 (소켓 외부)" : "Wrist Height (Outside Socket)", value: "13 mm" },
    { label: isKo ? "손목 높이 (소켓 내부)" : "Wrist Height (Inside Socket)", value: "15 mm" },
    { label: isKo ? "엄지 접힘 각도" : "Thumb Fold Angle", value: "31˚" },
  ];

  const seriesCompareRows: { label: string; values: string[] }[] = [
    { label: isKo ? "손 크기" : "Hand Size", values: [isKo ? "표준" : "Standard", isKo ? "소형" : "Compact", isKo ? "소형" : "Compact"] },
    { label: isKo ? "무게" : "Weight", values: ["500g", "440g", "363.5g"] },
    { label: isKo ? "최대 리프팅 하중" : "Max Lifting Load", values: ["30kg", "30kg", "8kg"] },
  ];

  const gripModes = isKo
    ? [
        { mode: "외측 모드 (Lateral Mode)", grips: ["주먹쥐기", "마우스", "열쇠 집기", "포인트", "컬럼", "접시", "Salute", "젓가락"] },
        { mode: "반대 모드 1 (Opposed Mode 1)", grips: ["핀치 3종", "파워", "쥐기", "들어올리기", "접시"] },
        { mode: "반대 모드 2 (Opposed Mode 2)", grips: ["세손가락 집기 5종", "파워", "쥐기", "물건들기", "접시"] },
      ]
    : [
        { mode: "Lateral Mode", grips: ["Fist", "Mouse", "Key", "Point", "Column", "Plate", "Salute", "Chopsticks"] },
        { mode: "Opposed Mode 1", grips: ["3 Pinch types", "Power", "Grasp", "Lift", "Plate"] },
        { mode: "Opposed Mode 2", grips: ["5 Tripod types", "Power", "Grasp", "Lift", "Plate"] },
      ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(122,19,14,0.2) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Prosthetic Hand · AI Myoelectric
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">Ohand</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "인공지능 근전도 전자의수" : "AI Myoelectric Prosthetic Hand"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "8채널 EMG 센서와 인공지능 알고리즘으로 27가지 동작 패턴을 구현하는 지능형 전자의수. 일상의 자유를 되찾아드립니다."
                : "An intelligent prosthetic hand that realizes 27 motion patterns with 8-channel EMG sensors and AI algorithms. Restore freedom to everyday life."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/prosthetic`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "전자의수 전체 보기" : "All Prosthetic Hands"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/prosthetic/ohand_pinch_hd.png" alt="Ohand" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "주요 특징" : "Key Features"}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: isKo ? "생체 모방 설계" : "Biomimetic Design", desc: isKo ? "사람 손의 구조와 동작을 모방해 27가지 다양한 동작 구현 가능" : "Mimics human hand structure and motion, enabling 27 diverse motion patterns" },
              { title: isKo ? "AI & EMG 제어" : "AI & EMG Control", desc: isKo ? "8채널 EMG 센서로 근육 신호를 실시간 분석해 자연스러운 움직임 보장" : "Real-time muscle signal analysis with 8-channel EMG sensors for natural movement" },
              { title: isKo ? "전용 앱 연동" : "Dedicated App", desc: isKo ? "스마트폰 앱으로 동작 패턴 설정 및 근전도 경계치 실시간 조절" : "Set motion patterns and adjust EMG thresholds in real-time via smartphone app" },
              { title: isKo ? "12시간 배터리" : "12h Battery", desc: isKo ? "내부 배터리 기준 약 12시간 연속 사용 가능. 하루 종일 안심 착용." : "Approximately 12 hours of continuous use on internal battery. Wear all day with confidence." },
            ].map((v, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "주요 사양" : "Specifications"}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
            {[
              { label: isKo ? "동작 속도" : "Motion Speed", value: "1.0s", unit: isKo ? "이하" : "or less" },
              { label: isKo ? "파지력" : "Grip Force", value: "0.45kg", unit: isKo ? "이상" : "or more" },
              { label: isKo ? "본체 무게" : "Weight", value: "500g", unit: "± 5g" },
              { label: isKo ? "배터리" : "Battery", value: "12h", unit: isKo ? "지속" : "continuous" },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 text-center">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-2">{s.label}</span>
                <p className="text-3xl font-extrabold text-[#7A130E]">{s.value} <span className="text-base font-normal text-gray-400">{s.unit}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grip Modes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">{isKo ? "그립 모드" : "Grip Modes"}</p>
          <p className="text-sm text-gray-400 mb-10">{isKo ? "총 27가지 동작 패턴을 3가지 모드로 구성" : "27 total motion patterns organized in 3 modes"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {gripModes.map((mode, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-xs font-bold text-[#E1251B] uppercase tracking-wide mb-4">{mode.mode}</h3>
                <div className="flex flex-wrap gap-2">
                  {mode.grips.map((g) => (
                    <span key={g} className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-200">{g}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases GIF */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">{isKo ? "활용 사례" : "Use Cases"}</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
            {isKo ? "일상에서 자연스럽게" : "Natural in Everyday Life"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/products/prosthetic/gif/feed_1.gif", label: isKo ? "열기 동작" : "Opening" },
              { src: "/products/prosthetic/gif/feed_2.gif", label: isKo ? "핀치 동작" : "Pinch Grip" },
              { src: "/products/prosthetic/gif/feed_3.gif", label: isKo ? "파지 동작" : "Power Grasp" },
              { src: "/products/prosthetic/gif/feed_4.gif", label: isKo ? "정밀 집기" : "Precision Grip" },
              { src: "/products/prosthetic/gif/feed_5.gif", label: isKo ? "물건 집기" : "Picking Object" },
              { src: "/products/prosthetic/gif/feed_6.gif", label: isKo ? "음료 잡기" : "Holding Cup" },
              { src: "/products/prosthetic/gif/feed_7.gif", label: isKo ? "물건 잡기" : "Grabbing Object" },
              { src: "/products/prosthetic/gif/feed_8.gif", label: isKo ? "EMG 컨트롤" : "EMG Control" },
              { src: "/products/prosthetic/gif/feed_9.gif", label: isKo ? "식사하기" : "Eating" },
            ].map((g, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-gray-950 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-semibold text-white/70">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "제품 치수" : "Measurements"}</p>
          <div className="max-w-2xl overflow-hidden">
            {measurements.map((m, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white/60" : ""}`}>
                <span className="text-gray-500 font-medium">{m.label}</span>
                <span className="font-semibold text-gray-900 text-right">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OHand Series Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "OHand 시리즈 비교" : "OHand Series Comparison"}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">{isKo ? "구분" : "Spec"}</th>
                  <th className="px-5 py-4 text-xs font-bold text-[#E1251B]">A001</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">S001</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">Lite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {seriesCompareRows.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-700">{row.label}</td>
                    <td className="px-5 py-3.5 text-center text-xs font-bold text-[#E1251B] bg-[#E1251B]/5">{row.values[0]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row.values[1]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row.values[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            {isKo ? "다른 모델은 " : "See "}
            <Link href={`/${locale}/products/prosthetic/ohand-s001`} className="text-[#E1251B] font-semibold hover:underline">Ohand S001</Link>
            {isKo ? ", " : " and "}
            <Link href={`/${locale}/products/prosthetic/ohandlite`} className="text-[#E1251B] font-semibold hover:underline">OhandLite</Link>
            {isKo ? " 페이지를 참고하세요." : " for other models."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7A130E]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">{isKo ? "기술 혁신을 직접 경험해보세요" : "Experience the Innovation Firsthand"}</h2>
          <p className="text-white/60 mb-8 text-sm">
            {isKo ? "리파인은 단순한 판매를 넘어 최적화된 기술 지원 및 커스텀 솔루션을 제공합니다." : "Refind goes beyond sales — we provide optimized technical support and custom solutions."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-white text-[#7A130E] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
              {isKo ? "협업 문의하기" : "Contact Us"}
            </a>
          </div>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
