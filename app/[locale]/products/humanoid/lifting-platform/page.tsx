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
    title: isKo ? "싱글암 수직 리프트 (Single Arm Vertical Lift)" : "Single Arm Vertical Lift",
    description: isKo
      ? "자율주행 플랫폼, 승강축, 단일 로봇암을 결합한 모바일 자동화 솔루션. 제조·물류·검사 자동화에 최적."
      : "A mobile automation solution combining an autonomous platform, lift axis, and single robot arm — optimized for manufacturing, logistics, and inspection.",
  };
}

export default async function LiftingPlatformPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "전체 장비 치수" : "Overall Dimensions", value: isKo ? "전체 높이 1605mm / 직경 505mm" : "Height 1605mm / Diameter 505mm" },
    { label: isKo ? "회전 반경" : "Turning Radius", value: isKo ? "252.5mm (제자리 회전)" : "252.5mm (in-place rotation)" },
    { label: isKo ? "완제품 중량" : "Total Weight", value: isKo ? "약 100kg" : "~100kg" },
    { label: isKo ? "단일 암 가반하중" : "Payload per Arm", value: "5kg" },
    { label: isKo ? "유효 승강 거리" : "Effective Lift Distance", value: isKo ? "900mm 이상" : "900mm+" },
    { label: isKo ? "이동 속도" : "Movement Speed", value: "1 m/s" },
    { label: isKo ? "사용 시간" : "Runtime", value: isKo ? "3시간" : "3 hours" },
    { label: isKo ? "충전 전원" : "Charging Power", value: "100-240V AC 50Hz" },
    { label: isKo ? "작동 전압" : "Operating Voltage", value: "DC 24V" },
    { label: isKo ? "로봇팔 모델" : "Arm Model", value: "RM65-B-V" },
    { label: isKo ? "위치 측정 정밀도" : "Positioning Accuracy", value: "< ±5cm" },
    { label: isKo ? "작업 환경 온도" : "Operating Temperature", value: "5-40˚C" },
  ];

  const features = isKo
    ? [
        { title: "Vertical Lift System", desc: "승강축을 통해 작업 높이를 자유롭게 조절하여 하나의 로봇으로 다양한 작업 높이에 대응합니다." },
        { title: "Single Arm Manipulation", desc: "단일 로봇암으로 Pick & Place, 검사, 이송 등 다양한 작업을 안정적으로 수행합니다." },
        { title: "Mobile Automation", desc: "이동과 작업을 하나의 플랫폼에서 수행하여 여러 작업 공간을 자유롭게 이동하며 자동화를 구현합니다." },
        { title: "High Precision Control", desc: "정밀한 위치 제어와 반복 정밀도로 생산성과 작업 품질을 향상시킵니다." },
        { title: "Compact Design", desc: "좁은 작업 공간에서도 효율적으로 운용할 수 있는 컴팩트한 구조를 제공합니다." },
      ]
    : [
        { title: "Vertical Lift System", desc: "The lift axis freely adjusts working height, letting one robot handle diverse task heights." },
        { title: "Single Arm Manipulation", desc: "A single robot arm reliably performs pick & place, inspection, and transfer tasks." },
        { title: "Mobile Automation", desc: "Combines mobility and manipulation on one platform, freely moving between workspaces for automation." },
        { title: "High Precision Control", desc: "Precise positioning and repeatability improve productivity and work quality." },
        { title: "Compact Design", desc: "A compact structure enables efficient operation even in narrow workspaces." },
      ];

  const applications = isKo
    ? [
        { title: "스마트 제조", desc: "머신 텐딩, 부품 조립, 공정 간 이송, 품질 검사" },
        { title: "물류 자동화", desc: "Pick & Place, 자재 운반, 분류 작업, 재고 관리" },
        { title: "검사 및 테스트", desc: "비전 검사, 제품 측정, 자동 테스트, 품질 관리" },
        { title: "연구 및 개발", desc: "AI 기반 로봇 제어, 로봇 제어 연구, 모바일 매니퓰레이터 개발" },
      ]
    : [
        { title: "Smart Manufacturing", desc: "Machine tending, part assembly, inter-process transfer, quality inspection" },
        { title: "Logistics Automation", desc: "Pick & place, material transport, sorting, inventory management" },
        { title: "Inspection & Testing", desc: "Vision inspection, product measurement, automated testing, quality control" },
        { title: "R&D", desc: "AI-based robot control, robot control research, mobile manipulator development" },
      ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            Humanoid · Mobile Platform
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight">
            {isKo ? "싱글암 수직 리프트" : "Single Arm Vertical Lift"}
          </h1>
          <p className="text-sm text-[#E1251B] font-semibold mb-5">
            {isKo ? "스마트 자동화를 위한 단일 암 모바일 매니퓰레이터" : "A Single-Arm Mobile Manipulator for Smart Automation"}
          </p>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
            {isKo
              ? "Single Arm Vertical Lift는 자율주행 플랫폼, 승강축, 단일 로봇암을 결합한 모바일 자동화 솔루션입니다. 컴팩트한 설계와 유연한 작업 범위를 바탕으로 제조, 물류, 검사 등 다양한 산업 환경에서 효율적인 자동화를 지원합니다."
              : "Single Arm Vertical Lift is a mobile automation solution combining an autonomous platform, lift axis, and single robot arm. Its compact design and flexible work range support efficient automation across manufacturing, logistics, and inspection environments."}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Single Arm", "~100kg", "900mm+ Lift", "1 m/s", "RM65-B-V"].map((tag) => (
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
              {isKo ? "도입 문의" : "Contact Us"}
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Specifications</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 tracking-tight">
            {isKo ? "기술 사양" : "Technical Specifications"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[420px] md:h-[560px] order-2 md:order-1">
              <Image
                src="/products/humanoid/lifting platform.png"
                alt="Single Arm Vertical Lift"
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
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
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">Comparison</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "Single Arm vs Dual Arm 비교" : "Single Arm vs Dual Arm"}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap"> </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                    <Link href={`/${locale}/products/humanoid/embodied-dual-arm`} className="hover:text-[#E1251B] transition-colors">Dual Arm Vertical Lift</Link>
                  </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B] whitespace-nowrap">Single Arm Vertical Lift</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{isKo ? "로봇암" : "Robot Arm"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-600">{isKo ? "양팔" : "Dual Arm"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#E1251B]/5">{isKo ? "단일 팔" : "Single Arm"}</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{isKo ? "동시 작업" : "Simultaneous Tasks"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-600">{isKo ? "가능" : "Possible"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#E1251B]/5">{isKo ? "불가능" : "Not Possible"}</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{isKo ? "추천 환경" : "Best For"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-600">{isKo ? "제조, 물류, 조립" : "Manufacturing, logistics, assembly"}</td>
                  <td className="px-5 py-3.5 text-center text-gray-900 font-semibold bg-[#E1251B]/5">{isKo ? "검사, 이송, 단순 자동화" : "Inspection, transfer, simple automation"}</td>
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
            {isKo ? "물류 자동화를 고민하고 계신가요?" : "Considering Logistics Automation?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 현장에 맞는 최적 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution for your environment."}
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
