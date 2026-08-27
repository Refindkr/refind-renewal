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
    title: isKo ? "협동로봇 (ECO 62/63/65)" : "Cobot (ECO 62/63/65)",
    description: isKo
      ? "합리적인 가격과 안정적인 성능을 제공하는 경제형 협동로봇. 제조 자동화·교육·연구개발에 최적."
      : "An economical cobot with reasonable pricing and stable performance — ideal for manufacturing automation, education, and R&D.",
  };
}

export default async function EcoSeriesPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = isKo
    ? [
        "경제적인 협동로봇 솔루션 : 합리적인 가격과 안정적인 성능을 제공하는 경제형 협동로봇",
        "All Joint Mechanical Brake : 모든 관절에 기계식 브레이크를 적용하여 정전이나 정지시에도 안정적",
        "경제적인 설계 : 알루미늄과 엔지니어링 플라스틱을 적용한 경량 설계로 가격 경쟁력과 실용성을 제공합니다.",
        "다양한 옵션 지원 : 힘·토크 센서, 비전 센서, 다양한 그리퍼 등 옵션 장착을 지원하여 작업 환경에 맞는 자동화 시스템을 구축할 수 있습니다.",
      ]
    : [
        "Economical Cobot Solution: reasonable pricing with stable, reliable performance",
        "All Joint Mechanical Brake: mechanical brakes on every joint for stability during power loss or stops",
        "Economical Design: lightweight aluminum and engineering plastic construction for cost competitiveness and practicality",
        "Wide Option Support: force/torque sensors, vision sensors, and various grippers to build automation systems fit for your environment",
      ];

  const applications = isKo
    ? ["스마트팩토리", "전자제품 조립", "교육 및 연구", "물류 자동화"]
    : ["Smart Factory", "Electronics Assembly", "Education & Research", "Logistics Automation"];

  const controllerBenefits = isKo
    ? ["제어기 일체형 설계", "별도 제어반(Control Box) 불필요", "설치 공간 최소화", "유지보수 및 설치 시간 단축"]
    : ["Integrated controller design", "No separate control box needed", "Minimal installation footprint", "Reduced maintenance and install time"];

  const models = ["ECO62", "ECO63", "ECO65"];
  const specRows = [
    { label: "DOF", values: ["6", "6", "6"] },
    { label: isKo ? "페이로드" : "Payload", values: ["1kg", "3kg", "5kg"] },
    { label: isKo ? "최대 작업 반경" : "Maximum Reach", values: ["355mm", "900mm", "610mm"] },
    { label: isKo ? "반복 정밀도" : "Repeatability", values: ["±0.1mm", "±0.05mm", "±0.05mm"] },
    { label: isKo ? "로봇 무게" : "Robot Weight", values: ["3.3kg", "9.5kg", "7.8kg"] },
    { label: isKo ? "최대 TCP 속도" : "Max TCP Speed", values: ["≤1.3 m/s", "≤2.8 m/s", "1.8 m/s"] },
    { label: isKo ? "전원 공급" : "Power Supply", values: ["DC 24V", "DC 24V", "DC 24V"] },
    { label: isKo ? "정격 소비전력" : "Rated Power", values: ["≤100W", "≤150W", "150W"] },
    { label: isKo ? "최대 소비전력" : "Peak Power", values: ["≤250W", "≤600W", "600W"] },
    { label: isKo ? "통신 인터페이스" : "Communication", values: ["Ethernet, Wi-Fi, USB, RS485", "Ethernet, Wi-Fi, USB, RS485", "Ethernet, Wi-Fi, USB, RS485"] },
    { label: isKo ? "통합 제어기" : "Integrated Controller", values: isKo ? ["지원", "지원", "지원"] : ["Yes", "Yes", "Yes"] },
    { label: isKo ? "힘/토크 센서" : "Force/Torque Sensor", values: isKo ? ["옵션", "옵션", "옵션"] : ["Optional", "Optional", "Optional"] },
    { label: isKo ? "비전 센서" : "Vision Sensor", values: isKo ? ["옵션", "옵션", "옵션"] : ["Optional", "Optional", "Optional"] },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(225,37,27,0.12) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Collaborative Robot · REALMAN
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">ECO 62 / 63 / 65</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "경제적인 협동로봇 솔루션" : "Economical Collaborative Robot Solution"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "합리적인 가격과 안정적인 성능을 제공하는 경제형 협동로봇으로, 제조 자동화, 교육, 연구개발 등 다양한 환경에서 효율적인 자동화를 지원합니다."
                : "An economical cobot offering reasonable pricing and stable performance, supporting efficient automation across manufacturing, education, and R&D environments."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/collaborative-robot/realman`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "REALMAN 전체 보기" : "All REALMAN Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/collaborative-robot/ECO65.png" alt="ECO 62 / 63 / 65" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "특징" : "Features"}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const [title, ...rest] = f.split(isKo ? " : " : ": ");
              return (
                <div key={i} className="flex items-start gap-3 border-l-2 border-gray-900 pl-4 py-1">
                  <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">{title}</span>
                    {rest.length > 0 ? ` : ${rest.join(": ")}` : ""}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-8">
            {isKo ? "활용 분야" : "Applications"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((a, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4 text-center">
                <span className="text-sm font-semibold text-gray-800">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Controller */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "통합 제어기" : "Integrated Controller"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">Integrated Controller</h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl mb-8">
            {isKo
              ? "별도의 외부 제어기(Control Box) 없이 제어기를 로봇 본체에 통합하여 설치 공간을 최소화하고 간편한 시스템 구축을 지원합니다. 외부 제어반이 필요 없어 배선이 간결하며, 설치와 유지보수가 더욱 편리합니다."
              : "The controller is integrated into the robot body — no separate external control box needed — minimizing installation footprint and simplifying system setup. Without an external control panel, wiring is cleaner and installation/maintenance is easier."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {controllerBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 border-l-2 border-gray-900 pl-4 py-1">
                <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{b}</span>
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
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">
                    {isKo ? "항목" : "Item"}
                  </th>
                  {models.map((m) => (
                    <th key={m} className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B] whitespace-nowrap">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {specRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "" : "bg-gray-50/40"}>
                    <td className="px-5 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-5 py-3 text-center text-gray-700 whitespace-nowrap">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <a
            href="https://develop.realman-robotics.com/en/robot/summarize/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 px-6 py-5 hover:border-primary-200 hover:shadow-md transition-all"
          >
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{isKo ? "REALMAN 개발자 매뉴얼" : "REALMAN Developer Manual"}</h3>
              <p className="text-xs text-gray-500">{isKo ? "제어 프로토콜 및 개발 문서 (공식 사이트)" : "Control protocol and development docs (official site)"}</p>
            </div>
            <span className="inline-flex items-center text-xs font-semibold text-[#E1251B] shrink-0">
              {isKo ? "바로가기" : "View"}
              <svg className="ml-1 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
            {isKo ? "로봇의 미래를 함께 설계하십시오" : "Let's Design the Future of Robotics Together"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "기술 사양서 요청 및 협업 문의를 보내주세요." : "Request technical specs or send a collaboration inquiry."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-[#E1251B] text-white font-bold rounded-full hover:bg-[#9C1912] transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
