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
    title: isKo ? "듀얼암 수직 리프트 (Dual Arm Vertical Lift)" : "Dual Arm Vertical Lift",
    description: isKo
      ? "이동, 승강, 양팔 작업을 하나의 플랫폼에 통합한 산업용 모바일 로봇. 제조·물류·검사 공정 자동화."
      : "An industrial mobile robot integrating mobility, lifting, and dual-arm manipulation on one platform, for manufacturing, logistics, and inspection automation.",
  };
}

export default async function EmbodiedDualArmPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "전체 장비 치수" : "Overall Dimensions", value: "640 x 450 x 1780mm" },
    { label: isKo ? "회전 반경" : "Turning Radius", value: isKo ? "450mm (제자리 회전)" : "450mm (in-place rotation)" },
    { label: isKo ? "작업 범위" : "Work Range", value: isKo ? "상하 0~2400mm / 좌우 790mm / 전방 0~690mm" : "Vertical 0-2400mm / Lateral 790mm / Forward 0-690mm" },
    { label: isKo ? "완제품 중량" : "Total Weight", value: "157kg" },
    { label: isKo ? "유효 승강 거리" : "Effective Lift Distance", value: "900mm" },
    { label: isKo ? "이동 속도" : "Movement Speed", value: "1.5 m/s" },
    { label: isKo ? "사용 시간" : "Runtime", value: isKo ? "3~4시간" : "3-4 hours" },
    { label: isKo ? "충전 전원" : "Charging Power", value: "AC 220V ± 10% 50Hz" },
    { label: isKo ? "로봇팔 모델" : "Arm Model", value: "RM65-B-V (Optional: RM75-B-V)" },
    { label: isKo ? "비전 센서" : "Vision Sensor", value: isKo ? "있음" : "Included" },
    { label: isKo ? "엔드 툴" : "End Tool", value: isKo ? "CTAG2F90D (기본 제공 그리퍼)" : "CTAG2F90D (included gripper)" },
    { label: isKo ? "작업 환경 온도" : "Operating Temperature", value: "5-40˚C" },
  ];

  const features = isKo
    ? [
        { title: "Vertical Lift System", desc: "승강축을 통해 작업 높이를 자유롭게 조절하여 하나의 로봇으로 다양한 작업 높이에 대응합니다." },
        { title: "Dual Arm Manipulation", desc: "양팔 로봇을 활용해 동시에 두 개의 작업을 수행하거나 협업이 필요한 공정을 효율적으로 처리합니다." },
        { title: "Mobile Automation", desc: "이동과 작업을 하나의 플랫폼에서 수행하여 여러 작업 공간을 자유롭게 이동하며 자동화를 구현합니다." },
        { title: "Precision Control", desc: "정밀한 위치 제어와 반복 작업 성능으로 조립, 검사, 피킹 등 다양한 산업 공정에 적합합니다." },
        { title: "Flexible Integration", desc: "그리퍼, 비전 시스템, AI 솔루션 등 다양한 장비와 연동하여 맞춤형 자동화 시스템을 구축할 수 있습니다." },
      ]
    : [
        { title: "Vertical Lift System", desc: "The lift axis freely adjusts working height, letting one robot handle diverse task heights." },
        { title: "Dual Arm Manipulation", desc: "Dual arms perform two tasks simultaneously or efficiently handle processes requiring cooperation." },
        { title: "Mobile Automation", desc: "Combines mobility and manipulation on one platform, freely moving between workspaces for automation." },
        { title: "Precision Control", desc: "Precise positioning and repeatable performance suit assembly, inspection, picking, and other industrial processes." },
        { title: "Flexible Integration", desc: "Integrates with grippers, vision systems, and AI solutions to build custom automation systems." },
      ];

  const applications = isKo
    ? [
        { title: "스마트 제조", desc: "머신 텐딩, 부품 조립, 공정 간 이송, 품질 검사" },
        { title: "물류 자동화", desc: "피킹, 적재 및 하역, 물품 분류, 재고 관리" },
        { title: "검사 및 테스트", desc: "비전 검사, 제품 측정, 자동 테스트, 품질 관리" },
        { title: "연구 및 개발", desc: "AI 기반 로봇 제어, 자율 이동 연구, 자동화 시스템 개발" },
      ]
    : [
        { title: "Smart Manufacturing", desc: "Machine tending, part assembly, inter-process transfer, quality inspection" },
        { title: "Logistics Automation", desc: "Picking, loading & unloading, item sorting, inventory management" },
        { title: "Inspection & Testing", desc: "Vision inspection, product measurement, automated testing, quality control" },
        { title: "R&D", desc: "AI-based robot control, autonomous mobility research, automation system development" },
      ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(102,157,253,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
            Humanoid · Dual Arm
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight">
            {isKo ? "듀얼암 수직 리프트" : "Dual Arm Vertical Lift"}
          </h1>
          <p className="text-sm text-[#669DFD] font-semibold mb-5">
            {isKo ? "더 넓은 작업 범위, 더 높은 생산성" : "Wider Work Range, Higher Productivity"}
          </p>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
            {isKo
              ? "이동, 승강, 양팔 작업을 하나의 플랫폼에 통합한 산업용 모바일 로봇입니다. 두 개의 로봇암과 승강축을 결합하여 다양한 높이의 작업 환경에 대응하며, 제조·물류·검사 공정의 자동화를 지원합니다."
              : "An industrial mobile robot that integrates mobility, lifting, and dual-arm manipulation on a single platform. Combining two robot arms with a lift axis, it handles work environments of varying heights and supports automation in manufacturing, logistics, and inspection."}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Dual Arm", "157kg", "900mm Lift", "1.5 m/s", "RM65-B-V"].map((tag) => (
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
              {isKo ? "협업 문의" : "Contact Us"}
            </a>
            <Link href={`/${locale}/products/humanoid`}
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
              {isKo ? "휴머노이드 전체 보기" : "All Humanoids"}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "제품 특징" : "Product Features"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">Specifications</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "기술 사양" : "Technical Specifications"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[420px] md:h-[560px] order-2 md:order-1">
              <Image
                src="/products/humanoid/embodied dual arm.jpeg"
                alt="Dual Arm Vertical Lift"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 order-1 md:order-2">
              {specs.map((s, i) => (
                <div key={i} className="flex justify-between items-start gap-4 bg-gray-50 rounded-xl px-5 py-3 border border-gray-100">
                  <span className="text-sm text-gray-500 shrink-0">{s.label}</span>
                  <span className="text-sm font-bold text-gray-900 text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-10">
            {isKo ? "활용 분야" : "Applications"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {applications.map((a, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-xs font-mono text-white/30 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-sm font-bold text-white mb-2">{a.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single vs Dual Arm Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">Comparison</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "Single Arm vs Dual Arm 비교" : "Single Arm vs Dual Arm"}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap"> </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-[#669DFD] whitespace-nowrap">Dual Arm Vertical Lift</th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                    <Link href={`/${locale}/products/humanoid/lifting-platform`} className="hover:text-[#669DFD] transition-colors">Single Arm Vertical Lift</Link>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{isKo ? "로봇암" : "Robot Arm"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#669DFD]/5">{isKo ? "양팔" : "Dual Arm"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-600">{isKo ? "단일 팔" : "Single Arm"}</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{isKo ? "동시 작업" : "Simultaneous Tasks"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#669DFD]/5">{isKo ? "가능" : "Possible"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-600">{isKo ? "불가능" : "Not Possible"}</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{isKo ? "추천 환경" : "Best For"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#669DFD]/5">{isKo ? "제조, 물류, 조립" : "Manufacturing, logistics, assembly"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-600">{isKo ? "검사, 이송, 단순 자동화" : "Inspection, transfer, simple automation"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "양팔 자동화 솔루션이 필요하신가요?" : "Need a Dual-Arm Automation Solution?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 도입 방안을 설계해 드립니다." : "Refind experts will design the optimal deployment plan."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "문의하기" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}
