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
    title: isKo ? "Ohand S001 소형 전자의수" : "Ohand S001 Compact Prosthetic Hand",
    description: isKo
      ? "작은 손 크기에 맞춘 소형 근전도(EMG) 전자의수. 5개의 독립 구동 손가락, 최대 30kg 리프팅 하중."
      : "A compact EMG myoelectric prosthetic hand sized for smaller hands. 5 independently driven fingers, up to 30kg lifting load.",
  };
}

export default async function OhandS001Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const measurements = [
    { label: isKo ? "가운데 손가락 끝 ~ 손 밑단" : "Middle Fingertip to Hand Base", value: "157 mm" },
    { label: isKo ? "엄지 끝 ~ 손 밑단" : "Thumb Tip to Hand Base", value: "80 mm" },
    { label: isKo ? "엄지 길이" : "Thumb Length", value: "92 mm" },
    { label: isKo ? "최대 손바닥 너비" : "Maximum Palm Width", value: "76 mm" },
    { label: isKo ? "손목 높이 (소켓 외부)" : "Wrist Height (Outside Socket)", value: "12 mm" },
    { label: isKo ? "손목 높이 (소켓 내부)" : "Wrist Height (Inside Socket)", value: "12.8 mm" },
    { label: isKo ? "손목 지름 (소켓 외부)" : "Wrist Diameter (Outside Socket)", value: "50 mm" },
    { label: isKo ? "손목 지름 (소켓 내부)" : "Wrist Diameter (Inside Socket)", value: "45 mm" },
    { label: isKo ? "손목 회전 범위" : "Wrist Rotation Range", value: "±175˚" },
    { label: isKo ? "엄지 최대 대향 각도" : "Maximum Thumb Opposition Angle", value: "0~50˚" },
  ];

  const features = isKo
    ? [
        { title: "소형 사이즈 설계", desc: "작은 손 크기에 맞춘 컴팩트한 디자인으로 자연스러운 착용감을 제공합니다." },
        { title: "EMG 기반 제어", desc: "근전도(EMG) 신호를 인식하여 사용자의 의도에 맞는 손동작을 구현합니다." },
        { title: "5개의 독립 구동 손가락", desc: "각 손가락이 독립적으로 움직여 다양한 파지 동작을 수행합니다." },
        { title: "강력한 파지력", desc: "일상생활에서 필요한 다양한 물체를 안정적으로 잡을 수 있습니다." },
        { title: "전용 애플리케이션 지원", desc: "사용자의 환경과 습관에 맞게 동작을 설정하고 관리할 수 있습니다." },
      ]
    : [
        { title: "Compact Design", desc: "A compact design sized for smaller hands, providing a natural fit." },
        { title: "EMG-Based Control", desc: "Recognizes EMG signals to realize hand motions matching user intent." },
        { title: "5 Independently Driven Fingers", desc: "Each finger moves independently to perform diverse grip motions." },
        { title: "Powerful Grip Force", desc: "Stably grasps a wide variety of everyday objects." },
        { title: "Dedicated App Support", desc: "Configure and manage motions to fit the user's environment and habits." },
      ];

  const applications = isKo
    ? ["일상생활 보조(ADL)", "재활 훈련", "의료기관", "의수 적합(피팅) 센터", "연구 및 교육"]
    : ["Activities of Daily Living (ADL)", "Rehabilitation Training", "Medical Institutions", "Prosthetic Fitting Centers", "Research & Education"];

  const compareRows: { label: string; values: string[] }[] = [
    { label: isKo ? "손 크기" : "Hand Size", values: [isKo ? "표준" : "Standard", isKo ? "소형" : "Compact", isKo ? "소형" : "Compact"] },
    { label: isKo ? "무게" : "Weight", values: ["500g", "440g", "363.5g"] },
    { label: isKo ? "최대 리프팅 하중" : "Max Lifting Load", values: ["30kg", "30kg", "8kg"] },
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
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              Ohand <span className="text-white/40">S001</span>
            </h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "소형 인공지능 근전도 전자의수" : "Compact AI Myoelectric Prosthetic Hand"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "근전도(EMG) 신호로 손동작을 제어하는 소형 전자의수로, 5개 손가락의 독립 구동을 통해 자연스럽고 정밀한 파지가 가능합니다."
                : "OHand S001 is a compact prosthetic hand that realizes natural hand motion based on EMG signals. With 5 independently driven fingers and precise grip performance, it is widely used in daily living as well as rehabilitation and research."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#E1251B] text-white font-semibold rounded-full text-sm hover:bg-[#9C1912] transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/prosthetic`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/prosthetic/ohand-s001.png" alt="Ohand S001" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "주요 특징" : "Key Features"}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "제품 치수" : "Measurements"}</p>
          <div className="max-w-2xl overflow-hidden">
            {measurements.map((m, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50/40" : ""}`}>
                <span className="text-gray-500 font-medium">{m.label}</span>
                <span className="font-semibold text-gray-900 text-right">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "활용 분야" : "Applications"}</p>
          <div className="flex flex-wrap gap-3">
            {applications.map((a) => (
              <span key={a} className="px-4 py-2 bg-white rounded-full border border-gray-100 text-sm font-medium text-gray-700">
                {a}
              </span>
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
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">A001</th>
                  <th className="px-5 py-4 text-xs font-bold text-[#E1251B]">S001</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">Lite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {compareRows.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-700">{row.label}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row.values[0]}</td>
                    <td className="px-5 py-3.5 text-center text-xs font-bold text-[#E1251B] bg-[#E1251B]/5">{row.values[1]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row.values[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            {isKo ? "다른 모델은 " : "See "}
            <Link href={`/${locale}/products/prosthetic/ohand`} className="text-[#E1251B] font-semibold hover:underline">Ohand</Link>
            {isKo ? ", " : " and "}
            <Link href={`/${locale}/products/prosthetic/ohandlite`} className="text-[#E1251B] font-semibold hover:underline">OhandLite</Link>
            {isKo ? " 페이지를 참고하세요." : " for other models."}
          </p>
        </div>
      </section>

      {/* Use Cases GIF */}
      <section className="py-20 bg-gray-50">
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
