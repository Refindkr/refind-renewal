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
    title: isKo ? "ROH-AP003 로봇핸드 (자기식 촉각 센서)" : "ROH-AP003 Robot Hand (Magnetic Tactile Sensors)",
    description: isKo
      ? "Magnetic Tactile Sensor를 적용해 수직압력·전단력·미끄러짐까지 감지하는 고성능 로봇 핸드."
      : "A high-performance robot hand with magnetic tactile sensors that detect normal force, shear force, and slip.",
  };
}

export default async function AP003Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const loadAndSpeed = [
    { k: isKo ? "최대 속도 전 범위 굽힘/펴기 시간" : "Bending/stretching time for full range at max speed", v: "0.7s" },
    { k: isKo ? "최대 속도 기준 엄지 전체 회전 시간" : "Rotation time of thumb for full range at max speed", v: "0.7s" },
    { k: isKo ? "펴진 상태 각 손가락 끝 능동력" : "Active force of each finger tip on stretched state", v: "≥ 0.5 Kgf" },
    { k: isKo ? "굽힌 상태 각 손가락 끝 능동력" : "Active force of each finger tip on bended state", v: "≥ 1.0 Kgf" },
    { k: isKo ? "4손가락 굽힌 상태 최대 수동 하중" : "Maximum passive load for four fingers on bended state", v: "30kg" },
    { k: isKo ? "각 손가락 굽힌 상태 최대 수동 하중" : "Maximum passive load for each finger on bended state", v: "10kg" },
    { k: isKo ? "각 손가락 펴진 상태 최대 수동 하중" : "Maximum passive load for each finger on stretched state", v: "8kg" },
    { k: isKo ? "무게" : "Weight", v: "626g ± 5g" },
  ];

  const forceSensor3D = [
    { k: isKo ? "주파수" : "Frequency", v: "≥ 50Hz" },
    { k: isKo ? "최대 견딜 수 있는 힘" : "Maximum Withstand Force", v: isKo ? "30N (개별 촉각 센서 기준)" : "30N (for individual tactile sensor)" },
    { k: isKo ? "수직 압력 범위 / 감도" : "Normal Force Range / Sensitivity", v: "15N / 0.1N" },
    { k: isKo ? "전단력 범위 (말단골)" : "Shear Force Range (Distal Phalanx)", v: "± 5N" },
    { k: isKo ? "방향 분해능" : "Directional Resolution", v: "1˚" },
  ];

  const dotMatrix = [
    { k: isKo ? "주파수" : "Frequency", v: "150Hz" },
    { k: isKo ? "도트 수" : "Dots", v: "11 x 5" },
    { k: isKo ? "수직 압력 범위" : "Normal Force Range", v: "0.1N ~ 25N" },
    { k: isKo ? "반복 정확도" : "Repeatability Accuracy", v: isKo ? "± 20% (500g 하중 기준)" : "± 20% (500g load)" },
  ];

  const useCases = [
    {
      title: isKo ? "연구 및 교육 (R&D & Education)" : "R&D & Education",
      points: isKo
        ? ["ROS/ROS2 완벽 지원 및 Python API 제공으로 즉시 연구 투입 가능", "합리적인 가격의 6자유도(6-DOF) 다관절 핸드"]
        : ["Full ROS/ROS2 support and Python API for immediate research use", "Cost-effective 6-DOF multi-joint hand"],
    },
    {
      title: isKo ? "스마트 팩토리 & 정밀 조립 (Manufacturing)" : "Smart Factory & Precision Assembly",
      points: isKo
        ? ["인간의 손과 같은 유연한 파지로 다양한 형상의 비정형 물체 핸들링", "손끝 포스 센서로 달걀 같은 껍질도 깨지 않고 파지"]
        : ["Human-like flexible grasping for handling irregularly shaped objects", "Fingertip force sensors grip fragile items like eggshells without breaking them"],
    },
    {
      title: isKo ? "서비스 & 푸드테크 (Service & Retail)" : "Service & Retail",
      points: isKo
        ? ["사람 손 사이즈와 동일한 디자인으로 거부감 없는 HRI 구현", "키논(Keenon) 등 모바일 로봇(AMR)과 결합하여 엘리베이터 버튼 조작 가능"]
        : ["Human hand-sized design enables natural, unintimidating HRI", "Combinable with mobile robots (AMR) like Keenon to operate elevator buttons"],
    },
    {
      title: isKo ? "원격 제어 & 위험 작업 (Tele-operation)" : "Teleoperation & Hazardous Tasks",
      points: isKo
        ? ["전용 모션 캡처 글러브(Dataglove)를 통한 실시간 동기화 제어", "작업자의 손동작을 그대로 모방하여 별도의 티칭 없이 직관적 작업 가능"]
        : ["Real-time synchronized control via a dedicated motion capture glove (Dataglove)", "Directly mimics the operator's hand motion for intuitive work without separate teaching"],
    },
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
              Robot Hand · Magnetic Tactile Sensors
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">ROH-AP003</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "자기식 촉각 센서로 사람의 손끝을 재현하다" : "Reproducing the Human Fingertip with Magnetic Tactile Sensing"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "AP003는 Magnetic Tactile Sensor(자기식 촉각 센서)를 적용하여 사람의 손끝과 유사한 촉각 정보를 제공하는 고성능 로봇 핸드입니다."
                : "AP003 is a high-performance robot hand that applies a Magnetic Tactile Sensor to provide tactile information similar to the human fingertip."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#E1251B] text-white font-semibold rounded-full text-sm hover:bg-[#9C1912] transition-colors">
                {isKo ? "협업 문의하기" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/robot-hand`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "제품 목록" : "All Models"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image
              src="/products/robot-hand/ap003/ap003.png"
              alt="ROH-AP003 Magnetic Tactile Sensor"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">Magnetic Tactile Sensor</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {isKo ? "압력을 넘어, 전단력과 미끄러짐까지 감지" : "Beyond Pressure — Sensing Shear Force and Slip"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {isKo
              ? "기존의 일반적인 압력 센서가 접촉 여부와 압력의 크기를 중심으로 측정하는 반면, AP003의 자기식 촉각 센서는 수직 압력(Normal Force)뿐만 아니라 전단력(Shear Force)과 접촉 방향, 미끄러짐(Slip)까지 감지할 수 있습니다."
              : "While conventional pressure sensors mainly measure contact and the magnitude of pressure, AP003's magnetic tactile sensor detects not only normal force but also shear force, contact direction, and slip."}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isKo
              ? "이를 통해 물체를 집는 과정에서 미끄러짐을 조기에 인식하고 그립력을 자동으로 조절하여, 달걀, 유리컵, 공구 등 다양한 물체를 보다 안정적이고 섬세하게 파지할 수 있습니다."
              : "This allows the hand to detect slip early during grasping and automatically adjust grip force — enabling stable, delicate handling of objects ranging from eggs and glass cups to tools."}
          </p>
        </div>
      </section>

      {/* Load and Speed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "부하 및 속도" : "Load and Speed"}
          </p>
          <div className="max-w-2xl overflow-hidden rounded-2xl border border-gray-100">
            {loadAndSpeed.map((s, i) => (
              <div key={i} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <span className="text-gray-500 font-medium">{s.k}</span>
                <span className="font-semibold text-gray-900 text-right">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Force Sensor */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">Force Sensor</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">
                  {isKo ? "3D 포스 (말단골 + 기절골)" : "3D Force (Distal + Proximal Phalanx)"}
                </h3>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {forceSensor3D.map((s, i) => (
                  <div key={i} className="flex justify-between px-6 py-3">
                    <span className="text-gray-500 pr-4">{s.k}</span>
                    <span className="font-semibold text-gray-900 whitespace-nowrap text-right">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">
                  {isKo ? "도트 매트릭스 (손바닥)" : "Dot Matrix (Palm)"}
                </h3>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {dotMatrix.map((s, i) => (
                  <div key={i} className="flex justify-between px-6 py-3">
                    <span className="text-gray-500 pr-4">{s.k}</span>
                    <span className="font-semibold text-gray-900 whitespace-nowrap text-right">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "활용 사례" : "Use Cases"}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map((u, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <div className="w-8 h-8 rounded-lg bg-[#FDEDEB] text-[#E1251B] flex items-center justify-center text-xs font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{u.title}</h3>
                <ul className="space-y-2">
                  {u.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500 leading-relaxed">
                      <span className="text-[#E1251B] font-bold mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">
            {isKo ? "원격 제어에는 " : "For teleoperation, see the "}
            <Link href={`/${locale}/products/robot-hand/motion-capture-glove`} className="text-[#E1251B] font-semibold hover:underline">
              {isKo ? "모션 캡처 글러브" : "Motion Capture Glove"}
            </Link>
            {isKo ? "를 함께 참고하세요." : "."}
          </p>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-3">Hardware Compatibility</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 tracking-tight">
            {isKo ? "협동로봇 & 하드웨어 호환성" : "Collaborative Robot & Hardware Compatibility"}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border-t-2 border-gray-900 pt-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Realman</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {isKo
                  ? "[공식 파트너십] 리얼맨 협동로봇 전 라인업 최적화 및 연동 검증 완료"
                  : "[Official Partnership] Optimized and verified integration across the entire Realman collaborative robot lineup"}
              </p>
            </div>
            <div className="border-t-2 border-gray-900 pt-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Elephant Robotics</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {isKo
                  ? "주요 모델(myCobot 등) 테스트 완료 및 즉시 연동 지원"
                  : "Tested on major models (myCobot, etc.) and ready for immediate integration"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">{isKo ? "기술 혁신을 직접 경험해보세요" : "Experience the Innovation Firsthand"}</h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인은 단순한 판매를 넘어 최적화된 기술 지원 및 커스텀 솔루션을 제공합니다." : "Refind goes beyond sales — we provide optimized technical support and custom solutions."}
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
