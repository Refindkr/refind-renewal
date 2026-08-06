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
    title: isKo ? "ROH-A001 로봇핸드 (표준형)" : "ROH-A001 Robot Hand (Standard)",
    description: isKo
      ? "6자유도 11관절 와이어 구동 로봇핸드. 최대 30kg 파워 그립. ROS2, Python, C++ SDK 지원."
      : "6-DOF 11-joint wire-driven robot hand. Up to 30kg power grip. Supports ROS2, Python, C++ SDK.",
  };
}

export default async function A001Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(225,37,27,0.15) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Robot Hand · Standard
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
              ROH-A001
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "인간의 손을 완벽히 모사한 6자유도 메커니즘으로 로봇 자동화의 새로운 한계를 개척합니다."
                : "Pioneering new frontiers in robotic automation with a 6-DOF mechanism that perfectly replicates human hand motion."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/robot-hand`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/robot-hand/a002.png" alt="ROH-A001" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "핵심 가치" : "Core Value"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: isKo ? "Precision Engineering" : "Precision Engineering",
                desc: isKo
                  ? "인간과 유사한 6자유도(DOF) 구조로 비정형 물체에 대한 완벽한 파지(Grasping) 구현"
                  : "6-DOF human-like structure enabling perfect grasping of irregular objects",
              },
              {
                title: isKo ? "High Payload" : "High Payload",
                desc: isKo
                  ? "파워 그립(Power grip) 시 최대 30kg 하중을 견디는 와이어 구동 시스템"
                  : "Wire-driven system withstanding up to 30kg payload in power grip mode",
              },
              {
                title: isKo ? "Seamless Integration" : "Seamless Integration",
                desc: isKo
                  ? "ROS2, Python, C++ 기반의 오픈 SDK 제공으로 어떤 로봇 플랫폼에도 즉시 연동"
                  : "Open SDK based on ROS2, Python, C++ for instant integration with any robot platform",
              },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "기술 사양" : "Technical Specs"}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 text-xs flex items-center justify-center font-bold">1</span>
                {isKo ? "메커니즘" : "Mechanism"}
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500">{isKo ? "가동 관절" : "Active Joints"}</span>
                  <span className="font-semibold text-gray-900">11{isKo ? "개" : ""} / 6 DOF</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500">{isKo ? "무게" : "Weight"}</span>
                  <span className="font-semibold text-gray-900">545g ± 5g</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500">{isKo ? "구동 속도" : "Actuation Speed"}</span>
                  <span className="font-semibold text-gray-900">1.0{isKo ? "초" : "s"}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">{isKo ? "최대 하중" : "Max Payload"}</span>
                  <span className="font-semibold text-gray-900">30kg ({isKo ? "파워그립" : "Power Grip"})</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 text-xs flex items-center justify-center font-bold">2</span>
                {isKo ? "인터페이스" : "Interface"}
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500">{isKo ? "통신" : "Communication"}</span>
                  <span className="font-semibold text-gray-900">RS485</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500">{isKo ? "프로토콜" : "Protocol"}</span>
                  <span className="font-semibold text-gray-900">SerialCtrl, ModBus-RTU</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-500">{isKo ? "SDK" : "SDK"}</span>
                  <span className="font-semibold text-gray-900">ROS, ROS2, Python, C++</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">{isKo ? "포스 센서" : "Force Sensor"}</span>
                  <span className="font-semibold text-gray-500">{isKo ? "미탑재" : "Not included"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "활용 사례" : "Use Cases"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: isKo ? "연구소 / 대학 AI" : "Lab / University AI",
                desc: isKo
                  ? "파지 알고리즘 연구 및 고정밀 데이터 수집을 통한 논문 성과 극대화"
                  : "Maximize research output through grasping algorithm research and high-precision data collection",
              },
              {
                num: "02",
                title: isKo ? "휴머노이드 제조" : "Humanoid Manufacturing",
                desc: isKo
                  ? "차세대 로봇 인터페이스로서 인간 수준의 작업 수행 능력 확보"
                  : "Secure human-level task performance capability as a next-gen robot interface",
              },
              {
                num: "03",
                title: isKo ? "스마트 팩토리" : "Smart Factory",
                desc: isKo
                  ? "비정형 물체 선별(Picking) 및 공정 자동화 범위 확대, 불량률 감소"
                  : "Expand irregular object picking and process automation scope, reduce defect rates",
              },
            ].map((u, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="text-xs font-bold text-gray-300 mb-3">{u.num}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "모델 비교" : "Model Comparison"}
          </p>
          <p className="text-sm text-gray-400 mb-8">
            {isKo ? "용도에 맞는 최적의 로봇핸드 모델을 선택하세요." : "Choose the optimal robot hand model for your application."}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">{isKo ? "구분" : "Spec"}</th>
                  <th className="px-5 py-4 text-xs font-bold text-[#E1251B]">ROH-A001</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">ROH-AP001</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">ROH-AP002</th>
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500">ROH-Lite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  [isKo ? "가동 관절" : "Active Joints", "11개 / 6 DOF", "11개 / 6 DOF", "11개 / 6 DOF", "6 DOF"],
                  [isKo ? "무게" : "Weight", "545g", "640g", "575g", "457g"],
                  [isKo ? "구동 속도" : "Speed", "1.0초", "0.7초", "0.7초", "0.7초"],
                  [isKo ? "포스/촉각 센서" : "Force/Tactile", isKo ? "미탑재" : "None", "Tashan 포스", "3D 포스+팜", isKo ? "미탑재" : "None"],
                  [isKo ? "통신" : "Comm.", "RS485", "UART/RS485/CAN FD", "UART/RS485/CAN FD", "RS485/Modbus"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-700">{row[0]}</td>
                    <td className="px-5 py-3.5 text-center text-xs font-bold text-[#E1251B]">{row[1]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row[2]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row[3]}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-500">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {isKo ? "기술 혁신을 직접 경험해보세요" : "Experience the Innovation Firsthand"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo
              ? "리파인은 단순한 판매를 넘어 최적화된 기술 지원 및 커스텀 솔루션을 제공합니다."
              : "Refind goes beyond sales — we provide optimized technical support and custom solutions."}
          </p>
          <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}
