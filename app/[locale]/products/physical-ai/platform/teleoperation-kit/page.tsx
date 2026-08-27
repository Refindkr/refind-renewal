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
    title: isKo ? "원격조작 키트 (Teleoperation Kit)" : "Teleoperation Kit",
    description: isKo
      ? "작업자의 움직임을 로봇에 실시간으로 전달하는 마스터-슬레이브 원격조작 키트. Embodied AI 학습 데이터 수집에 최적화."
      : "A master-slave teleoperation kit that transmits an operator's movements to a robot in real time. Optimized for embodied AI training data collection.",
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
              Model
            </th>
            {models.map((m) => (
              <th key={m} className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B] whitespace-nowrap">
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
                <td key={j} className="px-5 py-3 text-center text-gray-700 whitespace-nowrap">
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

export default async function TeleoperationKitPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const models = ["GLN-RX71", "GLN-RX75", "Aloha"];
  const rows: SpecRow[] = [
    { label: isKo ? "자유도" : "DOF", values: ["7", "7", "7"] },
    { label: isKo ? "작업 반경" : "Working Radius", values: ["474mm", "709mm", "599mm"] },
    { label: isKo ? "정격 출력" : "Rated Power", values: ["≤ 100W", "≤ 200W", "≤ 84W"] },
    { label: isKo ? "그립 형태" : "Grip Type", values: isKo
      ? ["조이스틱", "조이스틱", "레일식 링 그립 클램프"]
      : ["Joystick", "Joystick", "Rail-Type Ring Grip Clamp"] },
    { label: isKo ? "마스터 암 자중" : "Master Arm Weight", values: ["3.8kg", "7.8kg", "1.5kg"] },
    { label: isKo ? "최대 작동 속도" : "Max Operating Speed", values: ["30RPM", "30RPM", "110RPM"] },
    { label: isKo ? "통신 인터페이스" : "Communication", values: isKo
      ? ["RJ45 인터페이스", "RJ45 인터페이스", "RJ45 인터페이스 / 10핀 항공 커넥터"]
      : ["RJ45 Interface", "RJ45 Interface", "RJ45 Interface / 10-Pin Aviation Connector"] },
    { label: isKo ? "작동 전압" : "Operating Voltage", values: ["DC24V", "DC24V", "DC12V"] },
  ];

  const features = isKo
    ? [
        "고도의 동형 구조 - 데이터 도메인 편차 최소화",
        "전신 6자유도 제어 - 양팔, 그리퍼, 섀시, 승강, 허리, 헤드 통합 데이터 수집",
        "즉시 사용 가능 - 이더넷 기반 Plug & Play 지원. RJ45 통신 인터페이스",
      ]
    : [
        "Highly isomorphic structure — minimizes data domain deviation",
        "Full-body 6-DOF control — integrated data collection across arms, gripper, chassis, lift, waist, and head",
        "Ready to use instantly — Ethernet-based Plug & Play support with RJ45 communication interface",
      ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Physical AI · Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight">
              {isKo ? "원격조작 키트" : "Teleoperation Kit"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "사람의 움직임을 직관적으로 로봇에 전달해 실제 환경에서 체화지능 학습에 필요한 데이터를 효율적으로 수집하고 다양한 로봇 동작을 검증할 수 있는 원격조작 플랫폼입니다."
                : "Intuitive control just like a human arm — every frame becomes training data. Ideal for embodied AI data collection, functional verification, home service, and retail environments."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors"
              >
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link
                href={`/${locale}/products/physical-ai/platform`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors"
              >
                {isKo ? "플랫폼 전체 보기" : "All Platforms"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image
              src="/products/physical-ai/platform/teleoperation-kit/gln-rx71.png"
              alt="Teleoperation Kit"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Overview</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {isKo ? "마스터-슬레이브 구조의 실시간 원격조작 솔루션" : "A Real-Time Master-Slave Teleoperation Solution"}
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl mb-10">
            {isKo
              ? "Teleoperation Kit은 작업자의 움직임을 로봇에 실시간으로 전달하여 원격 조작(Teleoperation)과 AI 학습 데이터 수집을 지원하는 솔루션입니다. 마스터(Master) 장치의 동작을 슬레이브(Slave) 로봇이 그대로 재현하는 마스터-슬레이브(Master-Slave) 구조를 기반으로 하며, Embodied AI 및 휴머노이드 로봇 개발에 필요한 고품질 시연(Demonstration) 데이터를 효율적으로 생성할 수 있습니다."
              : "The Teleoperation Kit transmits an operator's movements to a robot in real time, supporting both teleoperation and AI training data collection. Built on a master-slave structure in which a slave robot faithfully reproduces the motion of a master device, it efficiently generates the high-quality demonstration data required for embodied AI and humanoid robot development."}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 border-l-2 border-gray-900 pl-4 py-1">
                <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 사양" : "Specifications"}
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { src: "/products/physical-ai/platform/teleoperation-kit/gln-rx71.png", label: "GLN-RX71" },
              { src: "/products/physical-ai/platform/teleoperation-kit/gln-rx75.png", label: "GLN-RX75" },
              { src: "/products/physical-ai/platform/teleoperation-kit/aloha.png", label: "Aloha" },
            ].map((m) => (
              <div key={m.src} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="relative h-56">
                  <Image src={m.src} alt={m.label} fill className="object-contain p-4" sizes="(max-width: 768px) 33vw, 20vw" />
                </div>
                <p className="text-center text-xs font-bold text-[#E1251B] py-2 border-t border-gray-100">{m.label}</p>
              </div>
            ))}
          </div>
          <SpecTable models={models} rows={rows} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "원격조작 키트 도입을 검토 중이신가요?" : "Considering a Teleoperation Kit?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution."}
          </p>
          <a
            href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
          >
            {isKo ? "문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
