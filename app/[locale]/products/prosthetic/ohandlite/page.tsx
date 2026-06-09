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
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(0,105,114,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-4">
              Prosthetic Hand · Lightweight
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">OhandLite</h1>
            <p className="text-sm text-[#0AABBA] font-semibold mb-5">
              {isKo ? "27% 경량화, 동일한 지능" : "27% Lighter, Same Intelligence"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "기존 Ohand 대비 27% 가벼운 363.5g. 장시간 착용이 필요한 사용자를 위한 2채널 EMG 경량형 전자의수."
                : "27% lighter than standard Ohand at 363.5g. A 2-channel EMG lightweight prosthetic for users who need extended wear."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-[#0AABBA] text-white font-semibold rounded-full text-sm hover:bg-[#088A96] transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </Link>
              <Link href={`/${locale}/products/prosthetic`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
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
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-10">{isKo ? "핵심 특징" : "Key Features"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "🪶", title: isKo ? "초경량 363.5g" : "Ultra-Light 363.5g", desc: isKo ? "기존 Ohand(500g) 대비 27% 경량화. 장시간 착용 시 피로도를 최소화." : "27% lighter than standard Ohand (500g). Minimizes fatigue during extended wear." },
              { icon: "🧠", title: isKo ? "AI + 2채널 EMG" : "AI + 2-Channel EMG", desc: isKo ? "2채널 EMG로 핵심 동작 제어. AI 알고리즘으로 동작 의도를 정확히 파악." : "2-channel EMG for core motion control. AI algorithm accurately detects motion intent." },
              { icon: "⚙️", title: isKo ? "27동작 중 9개 선택" : "Choose 9 of 27 Motions", desc: isKo ? "27가지 동작 중 사용자가 자주 쓰는 9가지를 앱으로 직접 지정 가능." : "Users can designate 9 frequently used motions out of 27 via the app." },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-10">{isKo ? "Ohand vs OhandLite" : "Ohand vs OhandLite"}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">{isKo ? "구분" : "Spec"}</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">Ohand</th>
                  <th className="px-5 py-4 text-xs font-bold text-[#0AABBA]">OhandLite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  [isKo ? "무게" : "Weight", "500g ± 5g", "363.5g"],
                  [isKo ? "EMG 채널" : "EMG Channels", isKo ? "8채널" : "8-channel", isKo ? "2채널" : "2-channel"],
                  [isKo ? "동작 수" : "Motions", isKo ? "27가지" : "27 motions", isKo ? "최대 9가지 (선택)" : "Up to 9 (selectable)"],
                  [isKo ? "배터리" : "Battery", isKo ? "약 12시간" : "~12 hours", isKo ? "동일" : "Same"],
                  [isKo ? "앱 연동" : "App Control", "✓", "✓"],
                  [isKo ? "손목 회전" : "Wrist Rotation", isKo ? "수동" : "Manual", isKo ? "수동" : "Manual"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-700">{row[0]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row[1]}</td>
                    <td className="px-5 py-3.5 text-center text-xs font-bold text-[#0AABBA]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases GIF */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#0AABBA] uppercase mb-3">{isKo ? "활용 사례" : "Use Cases"}</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
            {isKo ? "가볍게, 자유롭게" : "Light & Free"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/products/prosthetic/gif/feed_1.gif", label: isKo ? "음료 잡기" : "Holding Cup" },
              { src: "/products/prosthetic/gif/feed_2.gif", label: isKo ? "식사하기" : "Eating" },
              { src: "/products/prosthetic/gif/feed_3.gif", label: isKo ? "물건 집기" : "Picking Object" },
              { src: "/products/prosthetic/gif/feed_4.gif", label: isKo ? "핀치 동작" : "Pinch Grip" },
              { src: "/products/prosthetic/gif/feed_5.gif", label: isKo ? "파지 동작" : "Power Grasp" },
              { src: "/products/prosthetic/gif/feed_6.gif", label: isKo ? "정밀 집기" : "Precision Grip" },
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

      {/* CTA */}
      <section className="py-20 bg-[#006972]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">{isKo ? "일상의 자유를 되찾으세요" : "Restore Freedom to Everyday Life"}</h2>
          <p className="text-white/60 mb-8 text-sm">
            {isKo ? "리파인의 전문가 그룹이 제품 도입부터 최적화까지 함께합니다." : "Refind's expert team supports you from product introduction to optimization."}
          </p>
          <Link href={`/${locale}/inquiry`}
            className="inline-flex items-center px-8 py-3.5 bg-white text-[#006972] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
