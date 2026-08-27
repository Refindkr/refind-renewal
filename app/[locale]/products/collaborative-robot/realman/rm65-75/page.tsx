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
    title: isKo ? "협동로봇 (RM65/75)" : "Cobot (RM65/75)",
    description: isKo
      ? "5kg 가반하중과 ±0.05mm 반복정밀도를 제공하는 초경량 6/7축 협동로봇."
      : "An ultra-lightweight 6/7-axis collaborative robot with 5kg payload and ±0.05mm repeatability.",
  };
}

export default async function RM6575Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const coreFeatures = isKo
    ? [
        { title: "Ultra Lightweight", desc: "무게 7.2kg / 5kg Payload" },
        { title: "High Precision", desc: "±0.05mm / 정밀 조립 가능" },
        { title: "Force Control", desc: "6축 힘센서 모델 제공 / 접촉 작업 가능" },
        { title: "Human-like Structure", desc: "6축 사람팔 구조 / 좁은 공간 작업 최적화" },
        { title: "Easy Integration", desc: "ROS / SDK / API / Ethernet 지원" },
      ]
    : [
        { title: "Ultra Lightweight", desc: "7.2kg body / 5kg payload" },
        { title: "High Precision", desc: "±0.05mm — capable of precision assembly" },
        { title: "Force Control", desc: "6-axis force sensor model available for contact work" },
        { title: "Human-like Structure", desc: "6-axis human-arm structure optimized for tight spaces" },
        { title: "Easy Integration", desc: "ROS / SDK / API / Ethernet support" },
      ];

  const applications = isKo
    ? [
        "스마트 팩토리 : 생산 공정 자동화, 품질 향상 및 생산성 증대를 위한 협동로봇 솔루션",
        "전자제품 조립 : PCB, 커넥터, 소형 전자부품 등 정밀 조립 작업",
        "머신 텐딩 : CNC, 사출기, 프레스 등 생산 설비의 자동 투입·배출 작업",
        "픽 앤 플레이스 : 부품 이송, 적재, 분류 및 포장 자동화",
        "의료 및 바이오 : 실험실 자동화, 시료 이송, 의료기기 조작 등 정밀 작업",
        "교육 및 연구 : 대학, 연구소, AI·로봇 기술 개발을 위한 연구 플랫폼",
      ]
    : [
        "Smart Factory: cobot solutions for production automation, quality, and productivity",
        "Electronics Assembly: precision assembly of PCBs, connectors, and small parts",
        "Machine Tending: automatic loading/unloading for CNC, injection molding, presses",
        "Pick & Place: part transfer, palletizing, sorting, and packaging automation",
        "Medical & Bio: lab automation, sample transfer, precision handling of medical devices",
        "Education & Research: research platform for universities, labs, AI/robotics R&D",
      ];

  const specs = [
    { ko: "자유도", en: "DOF", rm65: "6", rm75: "7" },
    { ko: "구조 형상", en: "Structure", rm65: isKo ? "휴머노이드 구조" : "Humanoid structure", rm75: isKo ? "휴머노이드 구조" : "Humanoid structure" },
    { ko: "관절 브레이크 형식", en: "Joint Brake Type", rm65: isKo ? "1-3축 기계식 / 4-6축 소프트" : "J1-3 mechanical / J4-6 soft", rm75: isKo ? "1-4축 기계식 / 5-7축 소프트" : "J1-4 mechanical / J5-7 soft" },
    { ko: "작업 반경 (mm)", en: "Working Radius (mm)", rm65: "610", rm75: "610" },
    { ko: "유효 가반 하중 (kg)", en: "Payload (kg)", rm65: "5", rm75: "5" },
    { ko: "자중 (kg)", en: "Net Weight (kg)", rm65: "7.2", rm75: "7.8" },
    { ko: "반복 위치 정밀도 (mm)", en: "Repeatability (mm)", rm65: "±0.05", rm75: "±0.05" },
    { ko: "TCP 선속도 (m/s)", en: "TCP Linear Speed (m/s)", rm65: "≤1.8", rm75: "≤1.8" },
    { ko: "정격 소비전력 (W)", en: "Rated Power (W)", rm65: "≤150", rm75: "≤200" },
    { ko: "최대 출력 (W)", en: "Max Power (W)", rm65: "≤600", rm75: "≤600" },
    { ko: "베이스 크기 (mm)", en: "Base Size (mm)", rm65: "107Φ", rm75: "107Φ" },
    { ko: "작동 온도 (˚C)", en: "Operating Temp (˚C)", rm65: "0-45", rm75: "0-45" },
    { ko: "공급 전압 (V)", en: "Power Supply (V)", rm65: "DC 24V", rm75: "DC 24V" },
  ];

  const controllerBenefits = isKo
    ? ["제어기 일체형 설계", "별도 제어반(Control Box) 불필요", "설치 공간 최소화", "배선 간소화 및 깔끔한 시스템 구성", "유지보수 및 설치 시간 단축", "AMR(자율이동로봇) 및 서비스 로봇 탑재에 최적화"]
    : ["Integrated controller design", "No separate control box needed", "Minimal installation footprint", "Simplified wiring and clean system layout", "Reduced maintenance and install time", "Optimized for AMR and service robot mounting"];

  const comparison = [
    { k: isKo ? "제품 포지셔닝" : "Positioning", rm: isKo ? "프리미엄 협동로봇" : "Premium cobot", eco: isKo ? "경제형 협동로봇" : "Economical cobot" },
    { k: isKo ? "주요 타겟" : "Main Target", rm: isKo ? "AI 로봇, 서비스 로봇, 연구개발, 산업자동화" : "AI robots, service robots, R&D, industrial automation", eco: isKo ? "제조 자동화, 교육, 연구" : "Manufacturing automation, education, research" },
    { k: isKo ? "무게" : "Weight", rm: isKo ? "약 7.2kg" : "~7.2kg", eco: isKo ? "약 7.8kg" : "~7.8kg" },
    { k: isKo ? "특징" : "Character", rm: isKo ? "초경량 설계로 이동형 AI 플랫폼에 적합" : "Ultra-lightweight, ideal for mobile AI platforms", eco: isKo ? "경제성, 높은 안전성, 생산라인에 적합" : "Cost-effective, high safety, ideal for production lines" },
    { k: isKo ? "브레이크" : "Brake", rm: isKo ? "J1~J3 하드 / J4~J6 소프트" : "J1-3 hard / J4-6 soft", eco: isKo ? "J1~J6 전체 하드 브레이크" : "All joints hard brake" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(225,37,27,0.25) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Collaborative Robot · REALMAN
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">RM65 / RM75</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "초경량 6축 협동로봇" : "Ultra-Lightweight 6-Axis Collaborative Robot"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "7.2kg의 초경량 설계로 5kg 페이로드를 지원하며, 제어기가 통합된 고성능 6축 협동로봇입니다."
                : "An ultra-lightweight cobot with 5kg payload and ±0.05mm repeatability. RM65 was developed for ultra-lightweight design, human-like 6-axis structure, collaborative work, and AI/vision integration."}
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
            <Image src="/products/collaborative-robot/RM65.png" alt="RM65 / RM75" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "핵심 특징" : "Core Features"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreFeatures.map((f, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-sm font-bold text-[#E1251B] mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "활용 분야" : "Applications"}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {applications.map((a, i) => {
              const [title, ...rest] = a.split(isKo ? " : " : ": ");
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

      {/* Spec Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 사양" : "Specifications"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{isKo ? "항목" : "Item"}</th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B] whitespace-nowrap">RM65</th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B] whitespace-nowrap">RM75</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {specs.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50/40"}>
                    <td className="px-5 py-3 text-xs font-semibold text-gray-500">
                      {isKo ? s.ko : s.en}
                      <span className="block text-[11px] font-normal text-gray-400">{isKo ? s.en : s.ko}</span>
                    </td>
                    <td className="px-5 py-3 text-center text-gray-700 whitespace-nowrap">{s.rm65}</td>
                    <td className="px-5 py-3 text-center text-gray-700 whitespace-nowrap">{s.rm75}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mt-6 max-w-3xl">
            {isKo
              ? "힘·토크 센서, 비전 센서 등 다양한 옵션을 지원하여 고객의 작업 환경에 맞는 맞춤형 자동화 시스템을 구현할 수 있습니다."
              : "Supports optional force/torque and vision sensors, enabling custom automation systems tailored to your work environment."}
          </p>
        </div>
      </section>

      {/* Integrated Controller */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "통합 제어기" : "Integrated Controller"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Integrated Controller
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl mb-8">
            {isKo
              ? "별도의 외부 제어기(Control Box) 없이 제어기를 로봇 본체에 통합하여 설치 공간을 최소화하고 간편한 시스템 구축을 지원합니다. 외부 제어반이 필요 없어 배선이 간결하며, 설치와 유지보수가 더욱 편리합니다."
              : "The controller is integrated into the robot body — no separate external control box needed — minimizing installation footprint and simplifying system setup. Without an external control panel, wiring is cleaner and installation/maintenance is easier."}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {controllerBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 border-l-2 border-gray-900 pl-4 py-1">
                <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell: ROHand */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "함께 사용할 수 있는 제품" : "Works Well With"}
          </p>
          <p className="text-gray-500 leading-relaxed mb-6">
            {isKo ? "로봇손 Rohand와 연계하여 사용하실 수 있습니다." : "Can be used together with the ROHand robot hand."}
          </p>
          <Link
            href={`/${locale}/products/robot-hand`}
            className="flex items-center justify-between bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-100 hover:shadow-sm transition-all group"
          >
            <div>
              <div className="text-sm font-bold text-gray-900 mb-1">
                {isKo ? "ROHand (로봇 핸드) — 다관절 로봇 핸드" : "ROHand — Multi-Joint Robot Hand"}
              </div>
              <div className="text-xs text-gray-400">
                {isKo
                  ? "사람 손과 유사한 다관절 구조 · 정밀 파지 · AI/비전 연동 · AI Robot, 휴머노이드, 연구개발, 정밀 조립에 적합"
                  : "Human-like multi-joint structure · Precision grasping · AI/vision integration · Ideal for AI robots, humanoids, R&D, precision assembly"}
              </div>
            </div>
            <svg className="w-4 h-4 text-gray-300 group-hover:text-[#E1251B] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* RM vs ECO Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "RM 시리즈와 ECO 시리즈 비교" : "RM Series vs ECO Series"}
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap"> </th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B]">RM {isKo ? "시리즈" : "Series"}</th>
                  <th className="text-center px-5 py-3.5 text-xs font-bold text-gray-500">ECO {isKo ? "시리즈" : "Series"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparison.map((c, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50/40"}>
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">{c.k}</td>
                    <td className="px-5 py-3.5 text-center text-gray-700">{c.rm}</td>
                    <td className="px-5 py-3.5 text-center text-gray-700">{c.eco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-t-2 border-gray-900 pt-4">
              <h3 className="text-sm font-bold text-[#E1251B] mb-4">RM {isKo ? "시리즈" : "Series"}</h3>
              <ul className="space-y-2">
                {(isKo
                  ? ["초경량 설계(약 7.2kg)", "AI·비전·서비스 로봇 등 확장성 중심", "이동형 로봇(AMR) 및 휴머노이드 플랫폼에 적합", "일부 관절에 소프트 브레이크를 적용해 무게를 줄이고 기동성을 향상", "내부 배선(Internal Wiring) 지원 — 비전 카메라, 그리퍼 등 말단 장치를 연결하는 케이블을 로봇 암 내부로 배선"]
                  : ["Ultra-lightweight design (~7.2kg)", "Extensibility-focused for AI, vision, service robots", "Ideal for mobile robot (AMR) and humanoid platforms", "Soft brakes on some joints reduce weight and improve agility", "Internal wiring support — routes end-effector cables (vision cameras, grippers) inside the arm"]
                ).map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                    <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-gray-900 pt-4">
              <h3 className="text-sm font-bold text-gray-700 mb-4">ECO {isKo ? "시리즈" : "Series"}</h3>
              <ul className="space-y-2">
                {(isKo
                  ? ["가성비를 중시한 경제형 협동로봇", "모든 관절에 기계식(하드) 브레이크 적용", "정전 및 비상정지 시 자세 유지에 유리", "생산 자동화와 산업 현장에 최적화", "경제적인 복합 소재 설계 — 알루미늄과 엔지니어링 플라스틱을 적절히 조합"]
                  : ["Cost-effective economical cobot", "Mechanical (hard) brakes on all joints", "Holds posture reliably during power loss or emergency stop", "Optimized for production automation and industrial sites", "Economical composite design — combines aluminum and engineering plastic"]
                ).map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                    <span className="text-gray-400 font-bold mt-0.5">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-8">
            {isKo ? "ECO 시리즈 상세는 " : "See the "}
            <Link href={`/${locale}/products/collaborative-robot/realman/eco`} className="text-[#E1251B] font-semibold hover:underline">
              {isKo ? "ECO 62/63/65 페이지" : "ECO 62/63/65 page"}
            </Link>
            {isKo ? "를 참고하세요." : " for ECO series details."}
          </p>
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
