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
    title: isKo ? "EEG 뇌파 측정 시스템" : "EEG Brainwave Measurement System",
    description: isKo
      ? "웨어러블 EEG(NURA/Sync), 고밀도 EEG(ORION). 일상생활 BCI 연구부터 임상 실험까지 아우르는 뇌파 측정 솔루션."
      : "Wearable EEG (NURA/Sync) and high-density EEG (ORION). Brainwave measurement solutions from daily-life BCI research to clinical trials.",
  };
}

export default async function EEGPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const products = [
    {
      category: isKo ? "웨어러블 EEG" : "Wearable EEG",
      name: "NURA / Sync Series",
      badge: "EEG + ECG + IMU",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      specs: [
        { k: isKo ? "채널 라인업" : "Channel Lineup", v: "1ch / 2ch / 4ch / 7+1ch / 8ch" },
        { k: isKo ? "앰프 무게" : "Amp Weight", v: "23g" },
        { k: isKo ? "샘플링" : "Sampling", v: "250Hz" },
        { k: isKo ? "해상도" : "Resolution", v: "24-bit" },
        { k: isKo ? "대역폭" : "Bandwidth", v: "0~80Hz" },
        { k: isKo ? "연결" : "Connectivity", v: "BT 5.0" },
        { k: isKo ? "배터리" : "Battery", v: isKo ? "최대 12시간" : "Up to 12hrs" },
      ],
      desc: isKo
        ? "일상생활에서 자유롭게 착용 가능한 초경량 EEG·ECG 측정 시스템. BCI 실생활 연구, 뉴로피드백, 모바일 헬스 애플리케이션에 최적화되어 있습니다."
        : "Ultra-lightweight EEG/ECG measurement system for free daily wear. Optimized for BCI real-life research, neurofeedback, and mobile health applications.",
    },
    {
      category: isKo ? "고밀도 EEG" : "High-Density EEG",
      name: "ORION",
      badge: "16~32ch HD-EEG",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      specs: [
        { k: isKo ? "채널" : "Channels", v: "16 / 24 / 32ch" },
        { k: isKo ? "해상도" : "Resolution", v: "24-bit" },
        { k: isKo ? "데이터 전송" : "Data Transfer", v: isKo ? "무선 무손실" : "Wireless Lossless" },
        { k: isKo ? "임피던스 감지" : "Impedance Detection", v: isKo ? "실시간 전 채널" : "Real-time All Ch." },
        { k: isKo ? "내장 저장" : "Internal Storage", v: "SD Card" },
      ],
      desc: isKo
        ? "정밀 뇌인지 연구와 임상 실험을 위한 고밀도 무선 EEG 시스템. 실시간 임피던스 감지로 데이터 신뢰성을 확보합니다."
        : "High-density wireless EEG system for precision brain-cognition research and clinical trials. Ensures data reliability with real-time impedance detection.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.2) 0%, transparent 50%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-indigo-400 uppercase mb-4">
              BCI / BMI · EEG
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              EEG
            </h1>
            <p className="text-sm text-indigo-400 font-semibold mb-5">
              {isKo ? "뇌파로 세상을 연결하다" : "Connecting the World with Brainwaves"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "웨어러블 EEG부터 고밀도 HD-EEG까지. 연구 목적과 환경에 맞는 최적의 뇌파 측정 시스템을 제공합니다."
                : "From wearable EEG to high-density HD-EEG. We provide the optimal brainwave measurement system for your research purpose and environment."}
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
              src="/products/physical-ai/wearable-eeg.jpeg"
              alt="EEG System"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-indigo-500 uppercase mb-4">
            {isKo ? "제품 라인업" : "Product Lineup"}
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            {isKo ? "EEG 솔루션 라인업" : "EEG Solution Lineup"}
          </h2>
          <div className="space-y-8">
            {products.map((p, i) => (
              <div key={i} className={`border ${p.border} rounded-2xl p-8 ${p.bg}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/3">
                    <span className={`inline-block text-xs font-bold tracking-[2px] uppercase mb-2 ${p.color}`}>
                      {p.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{p.name}</h3>
                    <span className="inline-block text-xs font-semibold bg-gray-900/10 text-gray-700 px-3 py-1 rounded-full mb-4">
                      {p.badge}
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-2 gap-3">
                      {p.specs.map((s, j) => (
                        <div key={j} className="bg-white rounded-xl px-4 py-3 border border-gray-100 flex justify-between items-center">
                          <span className="text-xs text-gray-400">{s.k}</span>
                          <span className="text-xs font-bold text-gray-900">{s.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-indigo-500 uppercase mb-10">
            {isKo ? "활용 분야" : "Applications"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: isKo ? "BCI 실생활 연구" : "Real-life BCI Research",
                desc: isKo ? "일상 환경에서 뇌파를 측정해 자연스러운 신경 데이터를 수집합니다." : "Measure brainwaves in daily environments to collect natural neural data.",
              },
              {
                num: "02",
                title: isKo ? "임상 & 신경과학 연구" : "Clinical & Neuroscience Research",
                desc: isKo ? "정밀 뇌인지 연구 및 신경 재활 프로그램에 적용합니다." : "Applied to precision brain-cognition research and neurorehabilitation programs.",
              },
              {
                num: "03",
                title: isKo ? "뉴로피드백" : "Neurofeedback",
                desc: isKo ? "실시간 뇌파 피드백으로 집중력, 수면, 스트레스 관리를 돕습니다." : "Real-time brainwave feedback for focus, sleep, and stress management.",
              },
            ].map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
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
            {isKo ? "어떤 EEG 시스템이 필요하신가요?" : "Which EEG System Do You Need?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "연구 목적과 환경에 맞는 최적의 솔루션을 제안해 드립니다." : "We'll suggest the optimal solution for your research goals and environment."}
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
