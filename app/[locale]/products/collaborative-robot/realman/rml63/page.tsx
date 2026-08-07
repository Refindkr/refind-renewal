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
    title: isKo ? "협동로봇 (RML63)" : "Cobot (RML63)",
    description: isKo
      ? "최대 917mm 작업반경의 장팔(Long Reach) 협동로봇. 서비스 로봇·물류 자동화에 최적."
      : "A long-reach cobot with up to 917mm working radius. Ideal for service robots and logistics automation.",
  };
}

export default async function RML63Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const features = isKo
    ? [
        { title: "긴 작업 반경", desc: "최대 917mm 작업반경 — 넓은 작업 공간 커버" },
        { title: "초경량 설계", desc: "약 10kg의 경량 설계, AMR(자율이동로봇) 탑재 용이" },
        { title: "내부 배선", desc: "비전 센서 및 엔드이펙터 케이블을 로봇 내부로 배선하여 외부 케이블 노출을 최소화하고 깔끔한 설치와 높은 신뢰성을 제공합니다." },
        { title: "6축 자유도", desc: "복잡한 자세 제어와 다양한 각도의 작업을 수행합니다." },
        { title: "높은 반복 정밀도", desc: "±0.05mm 반복정밀도로 정밀 조립 및 검사 작업에 적합합니다." },
      ]
    : [
        { title: "Long Reach", desc: "Up to 917mm working radius — covers a wide work area" },
        { title: "Ultra-Lightweight", desc: "~10kg lightweight design, easy to mount on an AMR" },
        { title: "Internal Wiring", desc: "Routes vision sensor and end-effector cables inside the robot, minimizing external cable exposure for a clean, reliable install." },
        { title: "6-Axis DOF", desc: "Handles complex posture control and work at various angles." },
        { title: "High Repeatability", desc: "±0.05mm repeatability, ideal for precision assembly and inspection." },
      ];

  const applications = isKo
    ? [
        "서비스 로봇 : 카페, 호텔, 리테일 등 다양한 서비스 환경의 자동화",
        "AI 로봇 : AI 비전 기반 물체 인식 및 자율 작업",
        "물류 자동화 : 박스 피킹, 분류, 선반 작업 등 물류 공정 자동화",
        "Pick & Place : 부품 이송 및 적재 자동화",
      ]
    : [
        "Service Robots: automation for cafes, hotels, retail, and other service settings",
        "AI Robots: AI vision-based object recognition and autonomous work",
        "Logistics Automation: box picking, sorting, shelving in logistics processes",
        "Pick & Place: part transfer and palletizing automation",
      ];

  const specs = [
    { k: isKo ? "자유도" : "DOF", v: "6" },
    { k: isKo ? "페이로드" : "Payload", v: "3kg" },
    { k: isKo ? "최대 작업 반경" : "Maximum Reach", v: "917mm" },
    { k: isKo ? "반복 정밀도" : "Repeatability", v: "± 0.05 mm" },
    { k: isKo ? "로봇 무게" : "Robot Weight", v: "10kg" },
    { k: "TCP " + (isKo ? "속도" : "Speed"), v: "2.8 m/s" },
    { k: isKo ? "전원 공급" : "Power Supply", v: "DC 24V" },
    { k: isKo ? "정격 소비전력" : "Rated Power Consumption", v: "150W" },
    { k: isKo ? "최대 소비전력" : "Peak Power Consumption", v: "600–900W" },
    { k: isKo ? "통신 인터페이스" : "Communication Interface", v: "Ethernet, Wi-Fi, USB, RS485" },
    { k: isKo ? "통합 제어기" : "Integrated Controller", v: isKo ? "지원" : "Yes" },
    { k: isKo ? "내부 배선" : "Internal Wiring", v: isKo ? "지원" : "Yes" },
    { k: isKo ? "힘/토크 센서" : "Force/Torque Sensor", v: isKo ? "옵션" : "Optional" },
    { k: isKo ? "비전 센서" : "Vision Sensor", v: isKo ? "옵션" : "Optional" },
  ];

  const controllerBenefits = isKo
    ? ["제어기 일체형 설계", "별도 제어반(Control Box) 불필요", "설치 공간 최소화", "배선 간소화 및 깔끔한 시스템 구성", "유지보수 및 설치 시간 단축", "AMR(자율이동로봇) 및 서비스 로봇 탑재에 최적화"]
    : ["Integrated controller design", "No separate control box needed", "Minimal installation footprint", "Simplified wiring and clean system layout", "Reduced maintenance and install time", "Optimized for AMR and service robot mounting"];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(225,37,27,0.25) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Collaborative Robot · REALMAN
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">RML63</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "사람의 팔을 닮은 장팔(Long Reach) 협동로봇" : "Human-like Arm Design Cobot"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "RML63은 최대 917mm의 긴 작업반경을 제공하여 넓은 작업 공간에서도 하나의 로봇으로 다양한 작업을 수행할 수 있습니다. 사람과 유사한 팔 구조를 적용하여 서비스 로봇, AI 로봇, 물류 자동화 등 다양한 분야에 적합합니다."
                : "RML63 offers up to 917mm of working radius, letting a single robot handle diverse tasks across a wide workspace. Its human-like arm structure suits service robots, AI robots, and logistics automation."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#E1251B] text-white font-semibold rounded-full text-sm hover:bg-[#9C1912] transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/collaborative-robot/realman`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "REALMAN 전체 보기" : "All REALMAN Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/collaborative-robot/RML63.jpeg" alt="RML63" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
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
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
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
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
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

      {/* Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "제품 사양" : "Specifications"}
          </p>
          <div className="max-w-2xl overflow-hidden rounded-2xl border border-gray-100">
            {specs.map((s, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <span className="text-gray-500 font-medium">{s.k}</span>
                <span className="font-semibold text-gray-900 text-right">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Controller */}
      <section className="py-20 bg-white">
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
          <div className="grid md:grid-cols-3 gap-4">
            {controllerBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
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
