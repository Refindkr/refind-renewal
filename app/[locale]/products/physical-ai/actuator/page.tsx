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
    title: isKo ? "액추에이터" : "Actuator",
    description: isKo
      ? "리파인(주)는 세계적인 로보틱스 브랜드 Realman의 공식 파트너로서, 산업 현장에 최적화된 로봇 자동화 솔루션과 기술 지원을 제공합니다."
      : "Refind Inc. is an official partner of the global robotics brand Realman, providing robot automation solutions and technical support optimized for industrial sites.",
  };
}

interface SpecRow {
  label: string;
  values: string[];
}

function SpecTable({ models, rows }: { models: string[]; rows: SpecRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
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
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
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

export default async function ActuatorPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specLabels = {
    weight: isKo ? "무게(g)" : "Weight (g)",
    size: isKo ? "크기(mm)" : "Size (mm)",
    torque: isKo ? "정격 토크(N·M)" : "Rated Torque (N·M)",
    voltage: isKo ? "정격 전압(V)" : "Rated Voltage (V)",
    rpm: "RPM",
    bore: isKo ? "중공내경(mm)" : "Hollow Bore (mm)",
    current: isKo ? "정격 전류(A)" : "Rated Current (A)",
    power: isKo ? "정격 출력(W)" : "Rated Power (W)",
    ratio: isKo ? "감속비" : "Reduction Ratio",
    temp: isKo ? "작동 온도(˚C)" : "Operating Temp (˚C)",
    incEncoder: isKo ? "증분형 엔코더(bits)" : "Incremental Encoder (bits)",
    absEncoder: isKo ? "절대형 엔코더(bits)" : "Absolute Encoder (bits)",
    brake: isKo ? "브레이크 유형" : "Brake Type",
    comm: isKo ? "통신 인터페이스" : "Communication",
  };

  const whjModels = ["WHJ03", "WHJ10-B", "WHJ10-N", "WHJ30", "WHJ60"];
  const whjRows: SpecRow[] = [
    { label: specLabels.weight, values: ["170", "455", "425", "750", "1040"] },
    { label: specLabels.size, values: ["33 x 48", "50 x 73", "50 x 64", "60 x 86.5", "70 x 91"] },
    { label: specLabels.torque, values: ["3", "10", "10", "30", "60"] },
    { label: specLabels.voltage, values: ["24 / 48", "24 / 48", "24 / 48", "24 / 48", "24 / 48"] },
    { label: specLabels.rpm, values: ["60", "75", "75", "75", "60"] },
    { label: specLabels.bore, values: ["4", "6", "8", "9", "9"] },
    { label: specLabels.current, values: ["0.4A (48V)", "1.6A (48V)", "1.6A (48V)", "4.9A (48V)", "7.9A (48V)"] },
    { label: specLabels.power, values: ["20", "78.5", "78.5", "234", "377"] },
    { label: specLabels.ratio, values: ["100", "80", "80", "80", "100"] },
    { label: specLabels.temp, values: ["0 - 50", "0 - 50", "0 - 50", "0 - 50", "0 - 50"] },
    { label: specLabels.incEncoder, values: ["16", "16", "16", "16", "16"] },
    { label: specLabels.absEncoder, values: ["18", "18", "18", "18", "18"] },
    { label: specLabels.brake, values: isKo
      ? ["소프트 브레이크", "판 잠금식 브레이크", "소프트 브레이크", "판 잠금식 브레이크", "판 잠금식 브레이크"]
      : ["Soft Brake", "Plate-Lock Brake", "Soft Brake", "Plate-Lock Brake", "Plate-Lock Brake"] },
    { label: specLabels.comm, values: ["CANFD", "CANFD", "CANFD", "CANFD", "CANFD"] },
  ];

  const whjTorqueModels = ["WHJ10", "WHJ30", "WHJ60"];
  const whjTorqueRows: SpecRow[] = [
    { label: specLabels.weight, values: ["489", "820", "1121"] },
    { label: specLabels.size, values: ["50 x 78", "60 x 101", "70 x 106"] },
    { label: specLabels.torque, values: ["10", "30", "60"] },
    { label: specLabels.voltage, values: ["24 / 48", "24 / 48", "24 / 48"] },
    { label: specLabels.rpm, values: ["37.5", "37.5", "30"] },
    { label: specLabels.bore, values: ["8", "6.5", "9"] },
    { label: specLabels.current, values: ["3.4A (48V)", "9.8A (48V)", "15.8A (48V)"] },
    { label: specLabels.power, values: ["80.5", "236", "379"] },
    { label: specLabels.ratio, values: ["80", "80", "100"] },
    { label: specLabels.temp, values: ["0 - 50", "0 - 50", "0 - 50"] },
    { label: specLabels.incEncoder, values: ["16", "16", "16"] },
    { label: specLabels.absEncoder, values: ["18", "18", "18"] },
    { label: specLabels.brake, values: isKo
      ? ["소프트 브레이크", "판 잠금식 브레이크", "판 잠금식 브레이크"]
      : ["Soft Brake", "Plate-Lock Brake", "Plate-Lock Brake"] },
    { label: specLabels.comm, values: ["CANFD", "CANFD", "CANFD"] },
  ];

  const whgModels = ["WHG1410", "WHG1730", "WHG2060", "WHG25120", "WHG32240"];
  const whgRows: SpecRow[] = [
    { label: specLabels.weight, values: ["800", "1308", "1770", "2816", "5700"] },
    { label: specLabels.size, values: ["70 x 69", "80 x 80", "90 x 92", "110 x 103", "142 x 125"] },
    { label: specLabels.torque, values: ["10", "30", "60", "120", "240"] },
    { label: specLabels.voltage, values: ["24 / 48", "24 / 48", "24 / 48", "24 / 48", "24 / 48"] },
    { label: specLabels.rpm, values: ["75", "75", "60", "45", "27"] },
    { label: specLabels.bore, values: ["9", "9", "9", "16", "18"] },
    { label: specLabels.current, values: ["1.6A (48V)", "4.9A (48V)", "7.9A (48V)", "15.7A (48V)", "20.8A (48V)"] },
    { label: specLabels.power, values: ["78.5", "234", "377", "755", "1000"] },
    { label: specLabels.ratio, values: ["100", "100", "100", "100", "100"] },
    { label: specLabels.temp, values: ["0 - 50", "0 - 50", "0 - 50", "0 - 50", "0 - 50"] },
    { label: specLabels.incEncoder, values: ["16", "16", "16", "16", "16"] },
    { label: specLabels.absEncoder, values: ["18", "18", "18", "18", "18"] },
    { label: specLabels.brake, values: isKo
      ? ["전자기 브레이크", "전자기 브레이크", "전자기 브레이크", "전자기 브레이크", "전자기 브레이크"]
      : ["Electromagnetic Brake", "Electromagnetic Brake", "Electromagnetic Brake", "Electromagnetic Brake", "Electromagnetic Brake"] },
    { label: specLabels.comm, values: ["CANFD", "CANFD", "CANFD", "CANFD", "CANFD"] },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            Physical AI · Actuator
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            {isKo ? "액추에이터" : "Actuator"}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
            {isKo
              ? "리파인(주)는 세계적인 로보틱스 브랜드 Realman의 공식 파트너로서, 산업 현장에 최적화된 로봇 자동화 솔루션과 수준 높은 기술 지원을 제공합니다."
              : "Refind Inc. is an official partner of the global robotics brand Realman, providing robot automation solutions and high-level technical support optimized for industrial sites."}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              {isKo ? "도입 문의" : "Contact Us"}
            </a>
            <Link
              href={`/${locale}/products/physical-ai`}
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors"
            >
              {isKo ? "피지컬 AI 전체 보기" : "All Physical AI"}
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">
            Official Partner
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            {isKo ? "Realman 공식 파트너" : "Realman Official Partner"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {isKo
              ? "리파인(주)는 세계적인 로보틱스 브랜드 리얼맨(Realman)의 공식 파트너로서, 산업 현장에 최적화된 로봇 자동화 솔루션과 수준 높은 기술 지원을 제공합니다. 협동로봇에 적용되는 고성능 액추에이터를 기반으로, 정밀 제어와 안정적인 구동을 필요로 하는 다양한 자동화 프로젝트에 적용 가능합니다."
              : "Refind Inc. is an official partner of the world-renowned robotics brand Realman, providing robot automation solutions and high-level technical support optimized for industrial sites. Built on the high-performance actuators used in Realman's collaborative robots, our solutions apply to a wide range of automation projects that require precise control and stable operation."}
          </p>
        </div>
      </section>

      {/* WHJ Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">WHJ Series</p>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {isKo ? "정밀 각도 제어를 위한 고성능 서보 하모닉 액추에이터" : "High-Performance Servo Harmonic Actuators for Precise Angle Control"}
              </h2>

              {/* MTBF badge */}
              <div className="bg-gray-950 rounded-2xl p-8 mb-6">
                <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-2">
                  {isKo ? "무고장 운전시간 5만 시간" : "50,000-Hour MTBF"}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {isKo
                    ? "Realman의 모듈은 평균 무고장 운전시간(MTBF) 5만 시간을 달성하여 산업 현장에서 요구되는 최고 수준의 내구성을 제공합니다. (CRL3 인증 획득)"
                    : "Realman's modules achieve a mean time between failures (MTBF) of 50,000 hours, delivering the industry-leading durability required in industrial settings. (CRL3 certified)"}
                </p>
              </div>

              <p className="text-gray-500 leading-relaxed">
                {isKo
                  ? "WHJ 시리즈는 매 각도를 오차 없이 정밀하게 제어하도록 설계된 고성능 서보 하모닉 액추에이터입니다."
                  : "The WHJ series is a high-performance servo harmonic actuator designed to precisely control every angle with zero error."}
              </p>
            </div>
            <div className="relative h-72 md:h-80 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <Image
                src="/products/physical-ai/actuator/whj-series.png"
                alt="WHJ Series"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {(isKo
              ? [
                  "고토크 밀도 및 탁월한 장기 운전 신뢰성 보장",
                  "다양한 로봇팔, 회전 스테이지 및 공구에 최적화",
                  "초경량, 소형화로 공간 제약이 있는 환경에 적합",
                  "IP67 등급 설계 및 고속 CAN FD 통신 완벽 지원",
                ]
              : [
                  "High torque density and outstanding long-term operational reliability",
                  "Optimized for a wide range of robot arms, rotary stages, and tools",
                  "Ultra-lightweight, compact design suited for space-constrained environments",
                  "IP67-rated design with full support for high-speed CAN FD communication",
                ]
            ).map((f, i) => (
              <div key={i} className="flex items-start gap-3 border-l-2 border-gray-900 pl-4 py-1">
                <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{f}</span>
              </div>
            ))}
          </div>

          <SpecTable models={whjModels} rows={whjRows} />
        </div>
      </section>

      {/* WHJ Torque Series */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">WHJ Torque Series</p>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <p className="text-gray-500 leading-relaxed">
              {isKo
                ? "관절급 포스 센싱으로 모든 인터랙션을 완벽하게 제어합니다. 정밀 조립, 연마, 폴리싱, 협업 안전 충돌 방지, 유연한 파지 등 다양한 응용 분야에 적합합니다."
                : "Joint-level force sensing delivers complete control over every interaction. Suited for precision assembly, grinding, polishing, collaborative safety collision avoidance, and flexible gripping."}
            </p>
            <div className="relative h-72 md:h-80 bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <Image
                src="/products/physical-ai/actuator/whj-torque-series.png"
                alt="WHJ Torque Series"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <SpecTable models={whjTorqueModels} rows={whjTorqueRows} />
        </div>
      </section>

      {/* WHG Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">WHG Series</p>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <p className="text-gray-500 leading-relaxed">
              {isKo
                ? "고성능 로봇용 고하중 구동 표준 모듈입니다. 산업 자동화, 협업로봇, 휴머노이드 로봇, 반도체 및 정밀 장비 등 다양한 분야에 적합합니다."
                : "A high-load drive standard module for high-performance robots. Suited for industrial automation, collaborative robots, humanoid robots, semiconductors, and precision equipment."}
            </p>
            <div className="relative h-72 md:h-80 bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <Image
                src="/products/physical-ai/actuator/whg-series.png"
                alt="WHG Series"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <SpecTable models={whgModels} rows={whgRows} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "액추에이터 도입을 검토 중이신가요?" : "Considering Actuator Integration?"}
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
