import type { Metadata } from "next";
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
      ? "HYBRIDEX 로봇 보조기. 장애 및 노화로 인한 신체 기능 저하를 보완하는 웨어러블 로봇 보조기."
      : "HYBRIDEX robot support device. Wearable robotic support compensating for physical function loss due to disability or aging.",
  };
}

export default async function HYBRIDEXPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(102,157,253,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
            {isKo ? "로봇보조기" : "Robot Support"}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">HYBRIDEX</h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
            {isKo
              ? "장애 및 노화로 인한 신체 기능 저하를 보완하는 웨어러블 로봇 보조기. 보행 능력 회복과 재활을 돕습니다."
              : "Wearable robotic support device that compensates for physical function loss due to disability or aging. Helps restore mobility and supports rehabilitation."}
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
      </section>

      <section className="py-32 bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">🦿</p>
          <p className="text-gray-400 text-sm">
            {isKo ? "상세 스펙 준비 중입니다." : "Detailed specifications coming soon."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full text-sm hover:bg-gray-700 transition-colors">
            {isKo ? "문의하기" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}
