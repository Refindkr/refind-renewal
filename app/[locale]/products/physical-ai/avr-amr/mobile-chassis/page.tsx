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
    title: isKo ? "모바일 섀시 (Mobile Chassis)" : "Mobile Chassis",
    description: isKo
      ? "민첩한 조향 성능으로 복잡한 환경에서도 안정적으로 주행하는 모바일 섀시. 산업 물류, 상업 서비스, 연구·교육에 적합."
      : "A mobile chassis with agile steering that runs stably even in complex environments. Suited for industrial logistics, commercial service, and R&D.",
  };
}

interface SpecRow {
  label: string;
  values: string[];
}

function SpecTable({ variants, rows }: { variants: string[]; rows: SpecRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-900">
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 whitespace-nowrap">
              Item
            </th>
            {variants.map((v) => (
              <th key={v} className="text-center px-5 py-3.5 text-xs font-bold text-[#E1251B] whitespace-nowrap">
                {v}
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

export default async function MobileChassisPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const variants = isKo ? ["4륜 조향 · 4륜 구동", "2륜 차동구동"] : ["4-Wheel Steering / 4WD", "2-Wheel Differential"];
  const rows: SpecRow[] = [
    { label: isKo ? "섀시 이동 속도" : "Chassis Speed", values: ["0 ~ 1.5 m/s", "0 ~ 1 m/s"] },
    { label: isKo ? "회전 반경" : "Turning Radius", values: ["413mm", "360mm"] },
    { label: isKo ? "깊이 카메라" : "Depth Camera", values: ["RGBD Camera", "RGBD Camera"] },
    { label: isKo ? "무게" : "Weight", values: ["65kg", "60kg"] },
    { label: isKo ? "물리 충돌 센서" : "Physical Collision Sensor", values: isKo ? ["최소 감지력 10N", "최소 감지력 10N"] : ["Min. 10N detection", "Min. 10N detection"] },
    { label: isKo ? "사용 시간" : "Runtime", values: ["≥ 6h", "≥ 6h"] },
    { label: isKo ? "휠베이스 x 트레드 폭 / 윤거" : "Wheelbase x Tread / Track Width", values: ["380mm x 320mm", "365mm"] },
    { label: isKo ? "최대 등판 능력" : "Max Climbing Angle", values: ["8˚", "-"] },
    { label: isKo ? "장애물 극복 능력" : "Obstacle Clearance", values: ["≤ 20mm", "≤ 15mm"] },
    { label: isKo ? "SLAM 내비게이션 및 위치 추정" : "SLAM Navigation & Localization", values: isKo ? ["지원", "지원"] : ["Supported", "Supported"] },
    { label: isKo ? "동적 장애물 회피 성능" : "Dynamic Obstacle Avoidance", values: isKo ? ["지원", "지원"] : ["Supported", "Supported"] },
    { label: "LiDAR", values: isKo ? ["탐지 거리 0.1~40m @90%, 단일라인 360˚ 스캔", "탐지 거리 0.1~40m @90%, 단일라인 360˚ 스캔"] : ["Range 0.1–40m @90%, single-line 360˚ scan", "Range 0.1–40m @90%, single-line 360˚ scan"] },
    { label: isKo ? "총 배터리 용량" : "Total Battery Capacity", values: ["48V 20Ah", "48V 20Ah"] },
    { label: isKo ? "퀵 탈착 지원 여부" : "Quick-Swap Battery", values: isKo ? ["지원", "미지원"] : ["Supported", "Not Supported"] },
    { label: isKo ? "배터리 수량" : "Battery Count", values: ["2", "1"] },
    { label: isKo ? "충전기 입력 전압" : "Charger Input Voltage", values: ["220V", "220V"] },
    { label: isKo ? "자동 복귀 충전" : "Auto-Return Charging", values: isKo ? ["지원", "-"] : ["Supported", "-"] },
    { label: isKo ? "라이트 바 인터랙션" : "Light Bar Interaction", values: isKo ? ["지원", "지원"] : ["Supported", "Supported"] },
    { label: isKo ? "통신 방식" : "Communication", values: ["Gigabit Ethernet (RJ45)", "Gigabit Ethernet (RJ45)"] },
    { label: isKo ? "휴대용 무선 단말기" : "Wireless Remote", values: isKo ? ["리모컨(섀시 주행 제어 지원)", "리모컨(섀시 주행 제어 지원)"] : ["Remote (chassis drive control)", "Remote (chassis drive control)"] },
  ];

  const features = isKo
    ? [
        "4륜 구동 전방향 이동 - 제자리 회전, 사이드 이동 최소 회전 반경 413mm",
        "전방위 환경 인식 - 지도 기반 내비게이션, 동적 장애물 회피 360도 Lidar + RGBD 카메라",
        "고효율 장시간 운용 - 사용 시간 > 6h, 배터리 퀵 교체와 자동 복귀, 충전 지원",
      ]
    : [
        "4WD omnidirectional movement — in-place rotation and lateral movement with a 413mm minimum turning radius",
        "360° environment awareness — map-based navigation and dynamic obstacle avoidance via 360° LiDAR + RGBD camera",
        "High-efficiency long runtime — over 6h runtime, quick battery swap, and auto-return charging support",
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
              Physical AI · Autonomous Mobile Robot
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              {isKo ? "모바일 섀시" : "Mobile Chassis"}
            </h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "민첩한 조향 성능. 복잡한 환경에서도 안정적인 주행" : "Agile Steering — Stable Navigation in Complex Environments"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "자율주행 모바일 플랫폼으로, 물류·서비스·연구·교육 등 다양한 환경에서 로봇의 이동과 데이터 수집을 효율적으로 지원합니다."
                : "An autonomous mobile platform suited for industrial logistics, commercial service, research and education, and embodied AI data collection."}
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
                href={`/${locale}/products/physical-ai/avr-amr`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors"
              >
                {isKo ? "AVR/AMR 전체 보기" : "All AVR/AMR"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image
              src="/products/physical-ai/avr-amr/mobile-chassis/4wheel.png"
              alt="Mobile Chassis"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "핵심 특징" : "Key Features"}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100">
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
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-2xl">
            {[
              { src: "/products/physical-ai/avr-amr/mobile-chassis/4wheel.png", label: variants[0] },
              { src: "/products/physical-ai/avr-amr/mobile-chassis/2wheel.png", label: variants[1] },
            ].map((v) => (
              <div key={v.src} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="relative h-48">
                  <Image src={v.src} alt={v.label} fill className="object-contain p-4" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <p className="text-center text-xs font-bold text-[#E1251B] py-2 border-t border-gray-100">{v.label}</p>
              </div>
            ))}
          </div>
          <SpecTable variants={variants} rows={rows} />
          <p className="text-sm text-gray-500 leading-relaxed mt-6 max-w-3xl">
            {isKo
              ? "RGBD 카메라: 깊이 영상 최대 해상도 1280 x 800 @30 FPS (화면비 16:10, 시야각 90˚ x 65˚ ± 3˚ @2m) / RGB 영상 최대 해상도 1280 x 800 @60 FPS (화면비 16:10, 시야각 94˚ x 68˚ ± 3˚)"
              : "RGBD Camera: Depth image up to 1280 x 800 @30 FPS (16:10, FOV 90˚ x 65˚ ± 3˚ @2m) / RGB image up to 1280 x 800 @60 FPS (16:10, FOV 94˚ x 68˚ ± 3˚)"}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "모바일 섀시 도입을 검토 중이신가요?" : "Considering a Mobile Chassis?"}
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
