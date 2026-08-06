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
    title: isKo ? "BCI/BMI 생체신호 솔루션" : "BCI/BMI Biosignal Solutions",
    description: isKo
      ? "웨어러블 EEG(NURA/ORION)부터 고해상도 EMG(BioFlex nano 32)까지. 연구급 뇌파·근전도 측정 장비."
      : "From wearable EEG (NURA/ORION) to high-resolution EMG (BioFlex nano 32). Research-grade brainwave and EMG measurement devices.",
  };
}

export default async function BCIBMIPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const lineup = [
    {
      category: isKo ? "웨어러블 EEG" : "Wearable EEG",
      name: "NURA / Sync Series",
      badge: "EEG + ECG + IMU",
      color: "text-primary-400",
      bg: "bg-primary-500/10",
      border: "border-primary-500/20",
      specs: [
        { k: isKo ? "채널 라인업" : "Channel Lineup", v: isKo ? "1/2/4/7/8ch (Uno~Neo)" : "1/2/4/7/8ch (Uno~Neo)" },
        { k: isKo ? "앰프 무게" : "Amp Weight", v: "25g" },
        { k: isKo ? "샘플링" : "Sampling", v: "250Hz" },
        { k: isKo ? "해상도" : "Resolution", v: "24-bit" },
        { k: isKo ? "주파수 대역" : "Frequency Band", v: "0.5-60Hz" },
        { k: isKo ? "연결" : "Connectivity", v: "Bluetooth 4.2" },
        { k: isKo ? "배터리" : "Battery", v: isKo ? "최대 12시간" : "Up to 12hrs" },
      ],
      desc: isKo
        ? "일상생활에서 자유롭게 착용 가능한 초경량 EEG·ECG 측정 시스템. BCI 실생활 연구, 뉴로피드백, 모바일 헬스 애플리케이션에 최적화되어 있습니다."
        : "Ultra-lightweight EEG/ECG measurement system for free daily wear. Optimized for BCI real-life research, neurofeedback, and mobile health applications.",
    },
    {
      category: isKo ? "고밀도 EEG" : "High-Density EEG",
      name: "ORION",
      badge: isKo ? "16~32ch HD-EEG" : "16~32ch HD-EEG",
      color: "text-primary-400",
      bg: "bg-primary-500/10",
      border: "border-primary-500/20",
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
    {
      category: isKo ? "고해상도 EMG" : "High-Resolution EMG",
      name: "BioFlex nano 32",
      badge: isKo ? "32~128ch HD-EMG" : "32~128ch HD-EMG",
      color: "text-primary-400",
      bg: "bg-primary-500/10",
      border: "border-primary-500/20",
      specs: [
        { k: isKo ? "기본 채널" : "Base Channels", v: "32ch" },
        { k: isKo ? "최대 확장" : "Max Expansion", v: "128ch" },
        { k: isKo ? "샘플링" : "Sampling Rate", v: "4,096Hz" },
      ],
      desc: isKo
        ? "32채널에서 최대 128채널까지 확장 가능한 고해상도 EMG 시스템. 4,096Hz의 초고속 샘플링으로 미세 신경 신호를 포착합니다."
        : "High-resolution EMG system expandable from 32 to 128 channels. Captures fine neural signals with 4,096Hz ultra-fast sampling.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(225,37,27,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(225,37,27,0.1) 0%, transparent 50%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[3px] text-primary-400 uppercase mb-4">
              Physical AI · BCI / BMI Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              BCI / BMI<br />
              <span className="text-primary-400">{isKo ? "생체신호 솔루션" : "Biosignal Suite"}</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
              {isKo
                ? "웨어러블 EEG부터 고해상도 HD-EMG까지. 뇌-컴퓨터 인터페이스와 생체신호 측정의 전 라인업을 공급합니다. 실생활 연구, 임상 실험, 로봇 제어까지 아우르는 통합 생체신호 플랫폼."
                : "From wearable EEG to high-resolution HD-EMG. Full lineup for brain-computer interface and biosignal measurement — covering real-life research, clinical trials, and robot control."}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["EEG", "EMG", "ECG", "IMU", "BCI", "BMI", "SDK"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "솔루션 문의하기" : "Inquire Now"}
              </a>
              <Link href={`/${locale}/products/physical-ai`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "Physical AI 전체" : "All Physical AI"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-primary-500 uppercase mb-4">Full Lineup</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
            {isKo ? "통합 생체신호 솔루션 라인업" : "Integrated Biosignal Solution Lineup"}
          </h2>
          <div className="space-y-8">
            {lineup.map((p, i) => (
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

      {/* Summary Table */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-primary-400 uppercase mb-4">Comparison</p>
          <h2 className="text-4xl font-extrabold mb-12 tracking-tight">
            {isKo ? "어떤 제품이 맞을까요?" : "Which Product Fits Your Needs?"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-sm font-bold text-white/50 uppercase tracking-wider">{isKo ? "제품" : "Product"}</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-white/50 uppercase tracking-wider">{isKo ? "주요 장점" : "Key Advantage"}</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-white/50 uppercase tracking-wider">{isKo ? "추천 용도" : "Best For"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "NURA / Sync",
                    advantage: isKo ? "기동성, 일상생활 측정" : "Mobility, daily-life measurement",
                    use: isKo ? "BCI 실생활 연구, 뉴로피드백, 모바일 헬스" : "BCI real-life research, neurofeedback, mobile health",
                  },
                  {
                    name: "ORION",
                    advantage: isKo ? "고밀도 데이터, 편리한 세팅" : "High-density data, easy setup",
                    use: isKo ? "정밀 뇌인지 연구, 임상 실험" : "Precision brain-cognition research, clinical trials",
                  },
                  {
                    name: "BioFlex nano 32",
                    advantage: isKo ? "초고해상도, 초고속 샘플링" : "Ultra-high resolution, ultra-fast sampling",
                    use: isKo ? "신경-근육 메커니즘 분석, 로봇 의수 연구" : "Neuromuscular mechanism analysis, prosthetic research",
                  },
                  {
                    name: "GForcePro+",
                    advantage: isKo ? "착용 편의성, 제스처 인식" : "Wearability, gesture recognition",
                    use: isKo ? "인터랙티브 장치 제어, 운동 보조기기" : "Interactive device control, assistive devices",
                  },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-sm font-bold text-white">{r.name}</td>
                    <td className="py-4 px-6 text-sm text-white/60">{r.advantage}</td>
                    <td className="py-4 px-6 text-sm text-white/60">{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-primary-500 uppercase mb-4">Applications</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "응용 분야" : "Application Areas"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isKo ? "의료 & 재활" : "Medical & Rehabilitation",
                desc: isKo ? "신경재활, 뇌졸중 회복, 인지 장애 진단 등 의료 현장에서 활용합니다." : "Used in medical settings for neurorehabilitation, stroke recovery, and cognitive disorder diagnosis.",
              },
              {
                title: isKo ? "로봇 & 의수 제어" : "Robot & Prosthetic Control",
                desc: isKo ? "EMG/EEG 신호로 로봇 팔, 전자의수, 외골격을 직관적으로 제어합니다." : "Intuitively control robotic arms, prosthetic hands, and exoskeletons with EMG/EEG signals.",
              },
              {
                title: isKo ? "뇌인지 & 신경과학 연구" : "Neuroscience Research",
                desc: isKo ? "대학, 연구소, 병원에서 뇌 활동과 신경 메커니즘을 고해상도로 분석합니다." : "High-resolution analysis of brain activity and neural mechanisms at universities, institutes, and hospitals.",
              },
            ].map((u, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8">
                <div className="text-xs font-mono text-gray-300 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            {isKo ? "어떤 솔루션이 필요하신가요?" : "Which Solution Do You Need?"}
          </h2>
          <p className="text-white/50 mb-10">
            {isKo
              ? "연구 목적, 응용 분야, 필요 채널 수를 알려주시면 최적의 솔루션을 안내해 드립니다."
              : "Tell us your research goals, application area, and required channels — we'll guide you to the optimal solution."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
              {isKo ? "솔루션 상담하기" : "Get Consultation"}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link href={`/${locale}/products/physical-ai`}
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
              {isKo ? "Physical AI 전체 보기" : "All Physical AI"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
