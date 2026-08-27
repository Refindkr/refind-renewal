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
    title: isKo ? "OhandLite 경량 전자의수" : "OhandLite Lightweight Prosthetic Hand",
    description: isKo
      ? "기존 대비 27% 경량화(363.5g). 장시간 착용에 최적화된 2채널 EMG 전자의수."
      : "27% lighter than standard (363.5g). 2-channel EMG prosthetic optimized for extended daily wear.",
  };
}

export default async function OhandLitePage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(122,19,14,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Prosthetic Hand · Lightweight
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">OhandLite</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "27% 경량화, 동일한 지능" : "27% Lighter, Same Intelligence"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "기존 Ohand 대비 27% 가벼운 363.5g. 장시간 착용이 필요한 사용자를 위한 2채널 EMG 경량형 전자의수."
                : "27% lighter than standard Ohand at 363.5g. A 2-channel EMG lightweight prosthetic for users who need extended wear."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/products/prosthetic`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "전자의수 전체 보기" : "All Prosthetic Hands"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/prosthetic/ohandlite_black_hd.png" alt="OhandLite" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "핵심 특징" : "Key Features"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: isKo ? "초경량 363.5g" : "Ultra-Light 363.5g", desc: isKo ? "기존 Ohand(500g) 대비 27% 경량화. 장시간 착용 시 피로도를 최소화." : "27% lighter than standard Ohand (500g). Minimizes fatigue during extended wear." },
              { title: isKo ? "AI + 2채널 EMG" : "AI + 2-Channel EMG", desc: isKo ? "2채널 EMG로 핵심 동작 제어. AI 알고리즘으로 동작 의도를 정확히 파악." : "2-channel EMG for core motion control. AI algorithm accurately detects motion intent." },
              { title: isKo ? "27동작 중 9개 선택" : "Choose 9 of 27 Motions", desc: isKo ? "27가지 동작 중 사용자가 자주 쓰는 9가지를 앱으로 직접 지정 가능." : "Users can designate 9 frequently used motions out of 27 via the app." },
            ].map((v, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
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
            {isKo ? "가볍게, 자유롭게" : "Light & Free"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/products/prosthetic/gif/feed_1.gif", label: isKo ? "식사하기" : "Eating" },
              { src: "/products/prosthetic/gif/feed_2.gif", label: isKo ? "핀치 동작" : "Pinch Grip" },
              { src: "/products/prosthetic/gif/feed_3.gif", label: isKo ? "파지 동작" : "Power Grasp" },
              { src: "/products/prosthetic/gif/feed_4.gif", label: isKo ? "정밀 집기" : "Precision Grip" },
              { src: "/products/prosthetic/gif/feed_5.gif", label: isKo ? "물건 집기" : "Picking Object" },
              { src: "/products/prosthetic/gif/feed_6.gif", label: isKo ? "음료 잡기" : "Holding Cup" },
            ].map((g, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-gray-900 group">
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
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-gray-100 bg-white mb-10">
            <Image
              src="/products/prosthetic/ohandlite-dimensions.png"
              alt={isKo ? "OhandLite 치수 도면" : "OhandLite Dimension Drawing"}
              width={772}
              height={579}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="max-w-4xl columns-1 md:columns-2 md:gap-x-10">
            {[
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
            ].map((m, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm break-inside-avoid ${i % 2 === 0 ? "bg-gray-50/40" : ""}`}>
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
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">A001</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">S001</th>
                  <th className="px-5 py-4 text-xs font-bold text-[#E1251B]">Lite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { label: isKo ? "손 크기" : "Hand Size", values: [isKo ? "표준" : "Standard", isKo ? "소형" : "Compact", isKo ? "소형" : "Compact"] },
                  { label: isKo ? "무게" : "Weight", values: ["500g", "440g", "363.5g"] },
                  { label: isKo ? "최대 리프팅 하중" : "Max Lifting Load", values: ["30kg", "30kg", "8kg"] },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-700">{row.label}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row.values[0]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row.values[1]}</td>
                    <td className="px-5 py-3.5 text-center text-xs font-bold text-[#E1251B] bg-[#E1251B]/5">{row.values[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            {isKo ? "다른 모델은 " : "See "}
            <Link href={`/products/prosthetic/ohand`} className="text-[#E1251B] font-semibold hover:underline">Ohand</Link>
            {isKo ? ", " : " and "}
            <Link href={`/products/prosthetic/ohand-s001`} className="text-[#E1251B] font-semibold hover:underline">Ohand S001</Link>
            {isKo ? " 페이지를 참고하세요." : " for other models."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7A130E]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">{isKo ? "일상의 자유를 되찾으세요" : "Restore Freedom to Everyday Life"}</h2>
          <p className="text-white/60 mb-8 text-sm">
            {isKo ? "리파인의 전문가 그룹이 제품 도입부터 최적화까지 함께합니다." : "Refind's expert team supports you from product introduction to optimization."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-[#7A130E] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
