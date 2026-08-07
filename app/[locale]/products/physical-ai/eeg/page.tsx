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
      ? "웨어러블 EEG(NURA), 고밀도 무선 EEG(ORION). 일상생활 BCI 연구부터 정밀 임상 실험까지 아우르는 뇌파 측정 솔루션."
      : "Wearable EEG (NURA) and high-density wireless EEG (ORION). Brainwave measurement solutions from daily-life BCI research to precision clinical trials.",
  };
}

interface ConfigRow {
  label: string;
  values: string[];
}

function ConfigTable({ models, rows, highlight }: { models: string[]; rows: ConfigRow[]; highlight?: number }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">
              {" "}
            </th>
            {models.map((m, i) => (
              <th key={m} className={`text-center px-5 py-3.5 text-xs font-bold whitespace-nowrap ${i === highlight ? "text-primary-500" : "text-gray-500"}`}>
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <td className="px-5 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className={`px-5 py-3 text-center whitespace-nowrap ${j === highlight ? "text-gray-900 font-semibold bg-primary-500/5" : "text-gray-700"}`}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SpecList({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100">
      {specs.map((s, i) => (
        <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
          <span className="text-gray-500 font-medium">{s.label}</span>
          <span className="font-semibold text-gray-900 text-right">{s.value}</span>
        </div>
      ))}
    </div>
  );
}

export default async function EEGPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const nuraConfigRows: ConfigRow[] = [
    { label: isKo ? "EEG 채널" : "EEG Channels", values: ["1", "2", "4", "7", "8"] },
    { label: isKo ? "ECG 채널" : "ECG Channels", values: ["0", "1", "1", "1", "1*"] },
    { label: isKo ? "캡 전극 배치" : "Cap Opening", values: [isKo ? "10-20 표준 21개소" : "21 in Standard 10-20", ...Array(4).fill(isKo ? "10-10 표준 75개소" : "75 in Standard 10-10")] },
    { label: isKo ? "전극 종류" : "Electrode Types", values: [isKo ? "드라이" : "Dry", ...Array(4).fill(isKo ? "드라이, 젤, 살린" : "Dry, Gel, Saline")] },
  ];

  const nuraSpecs = [
    { label: isKo ? "레퍼런스/바이어스 채널" : "Reference / Bias Channel", value: isKo ? "귀 클립 전극 각 1개" : "1 ear clip electrode each" },
    { label: isKo ? "샘플링 레이트 (무선)" : "Sampling Rate (Wireless)", value: "250 Hz" },
    { label: isKo ? "샘플링 레이트 (내부)" : "Sampling Rate (Internal)", value: "2000 Hz" },
    { label: isKo ? "커플링" : "Coupling", value: isKo ? "DC 커플링" : "DC Coupled" },
    { label: isKo ? "해상도" : "Resolution", value: "24 bits" },
    { label: isKo ? "주파수 대역" : "Frequency Band", value: "0.5-60 Hz" },
    { label: isKo ? "노치 필터" : "Notch Filter", value: "50 Hz, 60 Hz" },
    { label: "LPF", value: "80 Hz" },
    { label: "HPF", value: "0.5 Hz" },
    { label: isKo ? "노이즈 플로어" : "Noise Floor", value: "3 μV" },
    { label: isKo ? "입력 범위" : "Input Range", value: "−666mV ~ +666mV" },
    { label: "CMRR", value: "IEC 60601-2-26 Equivalent" },
    { label: isKo ? "입력 임피던스" : "Input Impedance", value: "> 500 kΩ" },
    { label: isKo ? "임피던스 체크" : "Impedance Check", value: isKo ? "실시간" : "Real Time" },
    { label: isKo ? "캡 사이즈" : "Cap Sizes", value: "S: 54cm, M: 58cm, L: 62cm" },
  ];

  const orionConfigRows: ConfigRow[] = [
    { label: isKo ? "EEG 채널" : "EEG Channels", values: ["16", "24", "32"] },
    { label: isKo ? "샘플링 레이트 (무선)" : "Sampling Rate (Wireless)", values: ["250/500 Hz", "250/500 Hz", "250 Hz"] },
  ];

  const orionSpecs = [
    { label: isKo ? "레퍼런스 채널 (드라이)" : "Reference Channel (Dry)", value: isKo ? "귀 클립 전극 1개" : "1 ear clip electrode" },
    { label: isKo ? "그라운드 채널 (드라이)" : "Ground Channel (Dry)", value: isKo ? "귀 클립 전극 1개" : "1 ear clip electrode" },
    { label: isKo ? "레퍼런스 채널 (살린/젤)" : "Reference Channel (Saline, Gel)", value: "CPz" },
    { label: isKo ? "그라운드 채널 (살린/젤)" : "Ground Channel (Saline, Gel)", value: "Fz" },
    { label: isKo ? "샘플링 레이트 (온디바이스 SD)" : "Sampling Rate (On Device - SD Card)", value: "500 Hz" },
    { label: isKo ? "샘플링 레이트 (내부)" : "Sampling Rate (Internal)", value: "2000 Hz" },
    { label: isKo ? "커플링" : "Coupling", value: isKo ? "DC 커플링" : "DC Coupled" },
    { label: isKo ? "해상도" : "Resolution", value: "24 bits" },
    { label: isKo ? "주파수 대역" : "Frequency Band", value: "0.5-60 Hz" },
    { label: isKo ? "노치 필터" : "Notch Filter", value: "50 Hz, 60 Hz" },
    { label: "LPF", value: "80 Hz" },
    { label: "HPF", value: "0.5 Hz" },
    { label: isKo ? "노이즈 플로어" : "Noise Floor", value: "3 μV" },
    { label: isKo ? "입력 범위" : "Input Range", value: "−666mV ~ +666mV" },
    { label: "CMRR", value: "IEC 60601-2-26 Equivalent" },
    { label: isKo ? "입력 임피던스" : "Input Impedance", value: "> 500 kΩ" },
    { label: isKo ? "임피던스 체크" : "Impedance Check", value: isKo ? "실시간" : "Real Time" },
    { label: "IMU", value: isKo ? "가속도계 ±8g, 50Hz / 자이로 ±2000dps, 50Hz" : "Accel ±8g, 50Hz / Gyro ±2000dps, 50Hz" },
    { label: isKo ? "배터리" : "Battery", value: isKo ? "충전식 리튬이온 3.7V, 1000mAh" : "Rechargeable Li-ion 3.7V, 1000mAh" },
    { label: isKo ? "배터리 지속시간" : "Battery Life", value: isKo ? "최대 10시간" : "Up to 10 hrs" },
    { label: isKo ? "앰프 무게" : "Weight (Amplifier)", value: "45 g" },
    { label: isKo ? "무선 통신" : "Wireless Communication", value: "BLE 5.0" },
    { label: isKo ? "캡 사이즈" : "Cap Sizes", value: "S: 54cm, M: 58cm, L: 62cm" },
    { label: isKo ? "캡 전극 배치" : "Cap Opening", value: isKo ? "10-10 표준 75개소" : "75 in Standard 10-10" },
    { label: isKo ? "전극 종류" : "Electrode Types", value: isKo ? "드라이, 젤, 살린" : "Dry, Gel, Saline" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(225,37,27,0.2) 0%, transparent 50%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-primary-400 uppercase mb-4">
              BCI / BMI · EEG
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              EEG
            </h1>
            <p className="text-sm text-primary-400 font-semibold mb-5">
              {isKo ? "확장 가능한 뇌파 측정을 위한 구성형 전극 플랫폼" : "Configurable Electrode Platform for Scalable Brain Signal Acquisition"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "일상 착용형 웨어러블 EEG NURA부터 최대 32채널 고밀도 무선 EEG ORION까지. 연구 목적과 환경에 맞는 최적의 뇌파 측정 시스템을 제공합니다."
                : "From the wearable everyday EEG NURA to the high-density 32-channel wireless EEG ORION. We provide the optimal brainwave measurement system for your research purpose and environment."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "솔루션 문의하기" : "Inquire Now"}
              </a>
              <Link href={`/${locale}/products/physical-ai/bcibmi`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "BCI/BMI 전체 보기" : "All BCI/BMI"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[400px]">
            <Image
              src="/products/physical-ai/wearable-eeg.png"
              alt="EEG System"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* NURA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-primary-500 uppercase mb-4">
            {isKo ? "웨어러블 EEG" : "Wearable EEG"}
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">NURA</h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed mb-10">
            {isKo
              ? "일상생활에서 자유롭게 착용 가능한 초경량 EEG·ECG 측정 시스템. 10-20 국제 표준 전극 배치를 기반으로 Uno(1채널)부터 Neo(8채널)까지 5단계 구성을 선택할 수 있습니다."
              : "An ultra-lightweight EEG/ECG measurement system for free daily wear. Choose from 5 configurations — Uno (1-channel) to Neo (8-channel) — based on the international 10-20 electrode placement standard."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: isKo ? "복합 데이터 기록" : "Multimodal Recording", value: "ECG + EEG" },
              { label: isKo ? "샘플링" : "Sampling", value: isKo ? "최대 250 SPS" : "Up to 250 SPS" },
              { label: isKo ? "배터리" : "Battery Life", value: isKo ? "최대 12시간" : "Up to 12 Hours" },
              { label: isKo ? "무게" : "Weight", value: "25g" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
                <p className="text-lg font-extrabold text-primary-600 mb-1">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs font-bold tracking-[2px] text-gray-400 uppercase mb-4">
            {isKo ? "구성 라인업 (Uno / Trio / Pento / Octo / Neo)" : "Configuration Lineup (Uno / Trio / Pento / Octo / Neo)"}
          </p>
          <div className="mb-12">
            <ConfigTable models={["Uno", "Trio", "Pento", "Octo", "Neo"]} rows={nuraConfigRows} />
            <p className="text-xs text-gray-400 mt-3">
              {isKo
                ? "* Neo는 ECG가 기본 제공되지 않으며, Synchroni 앱에서 EEG 리드 1개를 ECG로 전환하여 사용합니다."
                : "* ECG does not come standard on the Neo; switch 1 EEG lead to ECG in the Synchroni app."}
            </p>
          </div>

          <p className="text-xs font-bold tracking-[2px] text-gray-400 uppercase mb-4">
            {isKo ? "공통 기술 사양" : "Common Technical Specifications"}
          </p>
          <div className="max-w-2xl">
            <SpecList specs={nuraSpecs} />
          </div>
        </div>
      </section>

      {/* ORION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-primary-500 uppercase mb-4">
            {isKo ? "고밀도 무선 EEG" : "High-Density Wireless EEG"}
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">ORION</h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed mb-10">
            {isKo
              ? "10-10 국제 표준 시스템 어디에나 배치 가능한 최대 32채널 고밀도 무선 EEG. 모든 채널 실시간 임피던스 감지로 정밀 뇌인지 연구와 임상 실험의 데이터 신뢰성을 확보합니다."
              : "A high-density wireless EEG system with up to 32 channels, placeable anywhere on the 10-10 system. Real-time impedance sensing for every channel ensures data reliability for precision brain-cognition research and clinical trials."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: isKo ? "임피던스 감지" : "Impedance Sensing", value: isKo ? "전 채널 실시간" : "Real-time, All Ch." },
              { label: isKo ? "샘플링" : "Sampling", value: isKo ? "최대 500 SPS" : "Up to 500 SPS" },
              { label: isKo ? "배터리" : "Battery Life", value: isKo ? "최대 10시간" : "Up to 10 Hours" },
              { label: isKo ? "연결" : "Connectivity", value: "Bluetooth 5.0" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
                <p className="text-lg font-extrabold text-primary-600 mb-1">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs font-bold tracking-[2px] text-gray-400 uppercase mb-4">
            {isKo ? "하나의 기기, 모든 전극" : "One Device, Any Electrode"}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { title: isKo ? "드라이 전극" : "Dry Electrodes", desc: isKo ? "준비 과정 없이 빠른 세팅. 모바일·실환경 연구에 적합." : "Fast setup, no prep. Ideal for mobile and real-world studies." },
              { title: isKo ? "살린 전극" : "Saline Electrodes", desc: isKo ? "낮은 준비 과정으로 안정적인 접촉. 장시간 세션에 적합." : "Low-prep with reliable contact. Great for longer sessions." },
              { title: isKo ? "젤 전극" : "Gel Electrodes", desc: isKo ? "정밀 연구실 연구를 위한 최고 수준의 신호 품질." : "Gold-standard signal quality for high-precision lab research." },
            ].map((e, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{e.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs font-bold tracking-[2px] text-gray-400 uppercase mb-4">
            {isKo ? "구성 라인업 (Orion-16 / 24 / 32)" : "Configuration Lineup (Orion-16 / 24 / 32)"}
          </p>
          <div className="mb-12">
            <ConfigTable models={["Orion-16", "Orion-24", "Orion-32"]} rows={orionConfigRows} />
          </div>

          <p className="text-xs font-bold tracking-[2px] text-gray-400 uppercase mb-4">
            {isKo ? "공통 기술 사양" : "Common Technical Specifications"}
          </p>
          <div className="max-w-2xl">
            <SpecList specs={orionSpecs} />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-primary-500 uppercase mb-10">
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
            {isKo ? "어떤 EEG 시스템이 필요하신가요?" : "Which EEG System Do You Need?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "연구 목적과 환경에 맞는 최적의 솔루션을 제안해 드립니다." : "We'll suggest the optimal solution for your research goals and environment."}
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
