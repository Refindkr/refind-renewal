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
    title: isKo ? "RX75 - 표준형 로봇암" : "RX75 Standard Robot Arm",
    description: isKo
      ? "AI 시대를 위한 휴머노이드 로봇암. AI, Embodied AI, 휴머노이드, 연구개발을 위한 차세대 로봇 플랫폼."
      : "A humanoid robot arm for the AI era — a next-generation robot platform for AI, embodied AI, humanoids, and R&D.",
  };
}

interface SpecRow {
  label: string;
  values: string[];
}

function SpecTable({ models, rows }: { models: string[]; rows: SpecRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-900">
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">
              {" "}
            </th>
            {models.map((m, i) => (
              <th key={m} className={`text-center px-5 py-3.5 text-xs font-bold whitespace-nowrap ${i === 2 ? "text-[#E1251B]" : "text-gray-500"}`}>
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "" : "bg-gray-50/40"}>
              <td className="px-5 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className={`px-5 py-3 text-center whitespace-nowrap ${j === 2 ? "text-gray-900 font-semibold bg-[#E1251B]/5" : "text-gray-700"}`}>
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

export default async function Rx75Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "모델명" : "Model", value: "RX75 - 표준형" },
    { label: isKo ? "자유도" : "DOF", value: "7" },
    { label: isKo ? "작업반경" : "Working Radius", value: "709mm" },
    { label: isKo ? "무게" : "Weight", value: "8.2kg" },
    { label: isKo ? "반복 위치 측정 정밀도" : "Repeatability", value: "±0.2mm" },
    { label: isKo ? "가반 하중" : "Payload", value: "5kg" },
    { label: isKo ? "TCP 선속도" : "TCP Linear Speed", value: "≤ 2.2 m/s" },
    { label: isKo ? "정격 소비 전력" : "Rated Power", value: "≤ 200W" },
    { label: isKo ? "최대 출력" : "Max Power", value: "≤ 600W" },
    { label: isKo ? "공급 전압" : "Power Supply", value: "DC 20-30V" },
    { label: isKo ? "엔드 이펙터 카메라" : "End-Effector Camera", value: "-" },
    { label: isKo ? "작동 온도" : "Operating Temp", value: "0-45˚C" },
    { label: isKo ? "6축 힘·토크 측정 범위" : "6-Axis Force/Torque Range", value: "2000N / 7N·m" },
    { label: isKo ? "6축 힘·토크 정밀도" : "6-Axis Force/Torque Accuracy", value: "0.5% FS" },
    { label: isKo ? "재질" : "Material", value: isKo ? "알루미늄 합금 / ABS" : "Aluminum Alloy / ABS" },
  ];

  const features = isKo
    ? ["7축 자유도", "5kg Payload", "내장형 6축 힘·토크 센서"]
    : ["7-Axis DOF", "5kg Payload", "Built-in 6-Axis Force/Torque Sensor"];

  const applications = isKo
    ? [
        { title: "AI·휴머노이드 개발", desc: "사람과 유사한 7축 구조를 기반으로 양팔 휴머노이드 및 Embodied AI 연구에 최적화되어 있습니다." },
        { title: "연구개발(R&D)", desc: "ROS/ROS2 및 SDK를 지원하여 대학, 연구기관, 기업 연구소에서 다양한 로봇 알고리즘과 AI 연구에 활용됩니다." },
        { title: "서비스 로봇", desc: "이동형 로봇(AMR)과 결합하여 물류, 안내, 배송, 순찰 등 다양한 서비스 로봇 플랫폼을 구현할 수 있습니다." },
        { title: "정밀 자동화", desc: "7축 구조와 힘 제어 기능을 활용하여 조립, 검사, Pick & Place 등 정밀 자동화 작업에 적합합니다." },
      ]
    : [
        { title: "AI & Humanoid Development", desc: "Human-like 7-axis structure optimized for dual-arm humanoid and embodied AI research." },
        { title: "R&D", desc: "ROS/ROS2 and SDK support for robot algorithm and AI research at universities, labs, and corporate R&D centers." },
        { title: "Service Robots", desc: "Combinable with mobile robots (AMR) for logistics, guidance, delivery, and patrol service robot platforms." },
        { title: "Precision Automation", desc: "7-axis structure and force control suit assembly, inspection, and pick & place precision automation." },
      ];

  const rxModels = ["RX71 표준형", "RX75S 표준형", "RX75 표준형", "RX75 비전"];
  const rxRows: SpecRow[] = [
    { label: isKo ? "자유도" : "DOF", values: ["7축", "7축", "7축", "7축"] },
    { label: isKo ? "가반하중" : "Payload", values: ["3kg", "5kg", "5kg", "5kg"] },
    { label: isKo ? "작업반경" : "Working Radius", values: ["710mm", "691mm", "709mm", "709mm"] },
    { label: "AI " + (isKo ? "비전" : "Vision"), values: isKo ? ["X", "옵션", "옵션", "기본 탑재"] : ["No", "Optional", "Optional", "Standard"] },
    { label: isKo ? "힘 토크 센서" : "Force/Torque Sensor", values: isKo ? ["모델별 상이", "기본", "기본", "기본"] : ["Varies by model", "Standard", "Standard", "Standard"] },
    { label: isKo ? "특징" : "Character", values: isKo ? ["경제형", "컴팩트형", "표준형", "AI 비전 통합"] : ["Economical", "Compact", "Standard", "AI Vision Integrated"] },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Humanoid Robot · Robot Arm
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              RX75 <span className="text-white/40">{isKo ? "표준형" : "Standard"}</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "AI 시대를 위한 휴머노이드 로봇암. AI, Embodied AI, 휴머노이드, 연구개발을 위한 차세대 로봇 플랫폼입니다."
                : "A humanoid robot arm built for the AI era — a next-generation robot platform for AI, embodied AI, humanoids, and R&D."}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((f) => (
                <span key={f} className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/10">
                  {f}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/humanoid/robot-arm`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "로봇암 전체 보기" : "All Robot Arms"}
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/products/humanoid/robot-arm/rx75.png"
              alt="RX75 Standard"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 사양" : "Specifications"}
          </p>
          <div className="max-w-2xl overflow-hidden">
            {specs.map((s, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50/40" : ""}`}>
                <span className="text-gray-500 font-medium">{s.label}</span>
                <span className="font-semibold text-gray-900 text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "활용 분야" : "Applications"}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {applications.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100">
                <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">{a.title}</span> : {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RX Series Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "RX 시리즈 비교" : "RX Series Comparison"}
          </p>
          <SpecTable models={rxModels} rows={rxRows} />
          <p className="text-sm text-gray-400 mt-6">
            {isKo ? "다른 모델은 " : "See "}
            <Link href={`/${locale}/products/humanoid/robot-arm/rx71`} className="text-[#E1251B] font-semibold hover:underline">RX71</Link>
            {", "}
            <Link href={`/${locale}/products/humanoid/robot-arm/rx75s`} className="text-[#E1251B] font-semibold hover:underline">RX75S</Link>
            {isKo ? ", " : ", and "}
            <Link href={`/${locale}/products/humanoid/robot-arm/rx75-vision`} className="text-[#E1251B] font-semibold hover:underline">RX75 {isKo ? "비전" : "Vision"}</Link>
            {isKo ? " 페이지를 참고하세요." : " for other models."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "로봇암 도입을 검토 중이신가요?" : "Considering a Robot Arm?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution."}
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
