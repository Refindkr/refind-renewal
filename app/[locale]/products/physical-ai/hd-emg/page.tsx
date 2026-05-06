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
    title: isKo ? "HD EMG 고해상도 근전도 측정" : "HD EMG High-Resolution Electromyography",
    description: isKo
      ? "BioFlex nano 32 — 32채널(최대 128ch) 고해상도 EMG 시스템. 4,096Hz 초고속 샘플링으로 미세 신경 신호 분석."
      : "BioFlex nano 32 — 32-channel (up to 128ch) high-resolution EMG system. Ultra-fast 4,096Hz sampling for fine neural signal analysis.",
  };
}

export default async function HDEMGPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(16,185,129,0.2) 0%, transparent 50%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-emerald-400 uppercase mb-4">
              BCI / BMI · HD EMG
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              HD EMG
            </h1>
            <p className="text-sm text-emerald-400 font-semibold mb-5">BioFlex nano 32</p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "32채널에서 최대 128채널까지 확장 가능한 고해상도 근전도 시스템. 4,096Hz의 초고속 샘플링으로 미세 신경-근육 신호를 정밀하게 포착합니다."
                : "High-resolution EMG system expandable from 32 to 128 channels. Precisely captures fine neuromuscular signals with ultra-fast 4,096Hz sampling."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/inquiry`}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "솔루션 문의하기" : "Inquire Now"}
              </Link>
              <Link href={`/${locale}/products/physical-ai/bcibmi`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "BCI/BMI 전체 보기" : "All BCI/BMI"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[400px]">
            <Image
              src="/products/sensors/3.jpeg"
              alt="BioFlex nano 32 HD EMG"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-emerald-500 uppercase mb-10">
            {isKo ? "제품 사양" : "Specifications"}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-extrabold text-gray-900 mb-6">BioFlex nano 32</h3>
              <div className="space-y-3">
                {[
                  { k: isKo ? "기본 채널" : "Base Channels", v: "32ch" },
                  { k: isKo ? "최대 확장" : "Max Expansion", v: "128ch" },
                  { k: isKo ? "샘플링 레이트" : "Sampling Rate", v: "4,096Hz" },
                  { k: isKo ? "해상도" : "Resolution", v: "24-bit" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl px-4 py-3 border border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-400">{s.k}</span>
                    <span className="text-xs font-bold text-gray-900">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: "📡",
                  title: isKo ? "초고속 샘플링" : "Ultra-Fast Sampling",
                  desc: isKo ? "4,096Hz의 샘플링으로 근육 수축의 미세한 타이밍 차이를 포착합니다." : "Captures subtle timing differences in muscle contractions with 4,096Hz sampling.",
                },
                {
                  icon: "🔌",
                  title: isKo ? "확장성" : "Expandability",
                  desc: isKo ? "기본 32채널에서 최대 128채널까지 확장해 대근육군 전체 동시 측정이 가능합니다." : "Expandable from 32 to 128 channels for simultaneous measurement of entire muscle groups.",
                },
                {
                  icon: "🧬",
                  title: isKo ? "연구급 정밀도" : "Research-Grade Precision",
                  desc: isKo ? "신경-근육 메커니즘 분석, 전자의수 제어 알고리즘 개발에 필요한 고품질 데이터를 제공합니다." : "Provides high-quality data for neuromuscular mechanism analysis and prosthetic control algorithm development.",
                },
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-emerald-500 uppercase mb-10">
            {isKo ? "활용 분야" : "Applications"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: isKo ? "신경·근육 메커니즘 분석" : "Neuromuscular Analysis",
                desc: isKo ? "운동신경 단위 수준의 고해상도 데이터로 정밀 신경과학 연구를 수행합니다." : "Perform precision neuroscience research with motor unit-level high-resolution data.",
              },
              {
                num: "02",
                title: isKo ? "전자의수 제어 연구" : "Prosthetic Control Research",
                desc: isKo ? "HD-EMG 신호로 의수 제어 알고리즘을 개발하고 정확도를 높입니다." : "Develop prosthetic control algorithms and improve accuracy with HD-EMG signals.",
              },
              {
                num: "03",
                title: isKo ? "재활 의학" : "Rehabilitation Medicine",
                desc: isKo ? "뇌졸중, 척수 손상 후 근기능 회복 과정을 정량적으로 모니터링합니다." : "Quantitatively monitor muscle function recovery after stroke and spinal cord injury.",
              },
            ].map((u, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="text-xs font-bold text-gray-300 mb-3">{u.num}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "HD EMG 연구에 관심이 있으신가요?" : "Interested in HD EMG Research?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 연구 목적에 맞는 솔루션을 안내해 드립니다." : "Refind experts will guide you to the solution that fits your research goals."}
          </p>
          <Link href={`/${locale}/inquiry`}
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "문의하기" : "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
