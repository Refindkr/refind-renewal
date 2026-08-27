import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "모션 캡처 글러브 (Motion Capture Glove)" : "Motion Capture Glove",
    description: isKo
      ? "손가락과 손목의 움직임을 실시간으로 인식하여 로봇 손과 전자의수를 자연스럽게 제어하는 모션 캡처 글러브."
      : "A motion capture glove that recognizes finger and wrist movement in real time to naturally control robot hands and prosthetic hands.",
  };
}

export default async function MotionCaptureGlovePage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const specs = [
    { label: isKo ? "자유도" : "DOF", value: "6 DOF" },
    { label: isKo ? "통신 방식" : "Connectivity", value: "BLE 4.2" },
    { label: isKo ? "통신 거리" : "Range", value: "10m" },
    { label: isKo ? "착용 방향" : "Hand Orientation", value: isKo ? "왼쪽 / 오른쪽" : "Left / Right" },
    { label: isKo ? "사이즈" : "Size", value: "L, S" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(225,37,27,0.12) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(225,37,27,0.08) 0%, transparent 45%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Robot Hand · Teleoperation
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              {isKo ? "모션 캡처 글러브" : "Motion Capture Glove"}
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "Motion Capture Glove는 손가락과 손목의 움직임을 실시간으로 인식하여 로봇 손과 전자의수를 자연스럽게 제어하는 모션 캡처 글러브입니다. AI 연구, 휴머노이드, 덱스터러스 핸드, Teleoperation 등 다양한 로봇 시스템과 연동하여 직관적인 원격 제어를 제공합니다."
                : "The Motion Capture Glove recognizes finger and wrist movement in real time to naturally control robot hands and prosthetic hands. It integrates with a wide range of robotic systems — AI research, humanoids, dexterous hands, and teleoperation — for intuitive remote control."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/products/robot-hand`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "로봇핸드 전체 보기" : "All Robot Hands"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image
              src="/products/robot-hand/motion-capture-glove/motion-capture-glove.png"
              alt="Motion Capture Glove"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "핵심 사양" : "Key Specifications"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {specs.map((s, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4 text-center">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">{s.label}</p>
                <p className="text-lg font-extrabold text-gray-900">{s.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mt-8 max-w-2xl">
            {isKo
              ? "ROhand를 원격 제어하기 위한 전용 모션 캡처 장갑으로, 왼쪽/오른쪽과 L/S 사이즈를 선택해 손 크기에 맞게 착용할 수 있습니다."
              : "A dedicated motion capture glove for remotely controlling ROhand, available in left/right orientation and L/S sizes to fit different hand sizes."}
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-6">
            {isKo ? "함께 사용하기 좋은 제품" : "Works Well With"}
          </p>
          <Link
            href={`/products/robot-hand/ap003`}
            className="flex items-center justify-between bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-100 hover:shadow-sm transition-all group max-w-xl"
          >
            <div>
              <div className="text-sm font-bold text-gray-900 mb-1">ROH-AP003</div>
              <div className="text-xs text-gray-400">
                {isKo ? "자기식 촉각 센서 로봇 핸드 — 모션 캡처 글러브로 실시간 원격 제어" : "Magnetic tactile sensor robot hand — real-time teleoperation via motion capture glove"}
              </div>
            </div>
            <svg className="w-4 h-4 text-gray-300 group-hover:text-[#E1251B] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "원격 제어 솔루션이 필요하신가요?" : "Looking for a Teleoperation Solution?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-[#E1251B] text-white font-bold rounded-full hover:bg-[#9C1912] transition-colors text-sm">
            {isKo ? "문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
