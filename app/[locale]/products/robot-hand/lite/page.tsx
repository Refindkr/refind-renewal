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
    title: isKo ? "ROH-Lite 로봇핸드 (보급형)" : "ROH-Lite Robot Hand (Economy)",
    description: isKo
      ? "가성비 6DOF 로봇핸드. 457g 경량, 빠른 구동으로 연구·교육용에 최적화된 보급형 로봇핸드."
      : "Cost-effective 6-DOF robot hand. 457g lightweight design optimized for research and education.",
  };
}

export default async function LitePage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(225,37,27,0.12) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              Robot Hand · Economy
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">ROH-Lite</h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">{isKo ? "합리적인 가격, 완성된 6 DOF" : "Affordable Price, Complete 6 DOF"}</p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "연구·교육용으로 최적화된 보급형 6자유도 로봇핸드. 가볍고 빠르게, 핵심 기능에 집중합니다."
                : "Economy 6-DOF robot hand optimized for research and education. Light, fast, and focused on core functionality."}
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
                {isKo ? "로봇핸드 전체 보기" : "All Robot Hands"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <Image src="/products/robot-hand/ROhandlite.png" alt="ROH-Lite" fill
              className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "핵심 특징" : "Key Features"}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: isKo ? "경량 설계" : "Lightweight Design", desc: isKo ? "457g의 가벼운 무게로 장시간 운용과 빠른 구동(0.7초)에 최적화" : "457g lightweight design optimized for long operation and fast actuation (0.7s)" },
              { title: isKo ? "합리적인 가격" : "Cost-Effective", desc: isKo ? "핵심 6DOF 기능을 유지하면서 연구·교육 예산에 맞는 최적의 가성비" : "Optimal cost-performance ratio for research and education budgets while maintaining core 6-DOF functionality" },
              { title: isKo ? "즉시 연동" : "Easy Integration", desc: isKo ? "RS-485 및 Modbus 프로토콜 지원으로 기존 시스템에 빠르게 통합 가능" : "Quick integration with existing systems via RS-485 and Modbus protocol support" },
            ].map((v, i) => (
              <div key={i} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">{isKo ? "기술 사양" : "Technical Specs"}</p>
          <div className="max-w-lg border-t-2 border-gray-900 pt-4">
            <div className="space-y-0 text-sm">
              {[
                [isKo ? "자유도" : "DOF", "6 DOF"],
                [isKo ? "무게" : "Weight", "457g ± 5g"],
                [isKo ? "구동 속도" : "Speed", isKo ? "0.7초" : "0.7s"],
                [isKo ? "포스/촉각 센서" : "Force/Tactile", isKo ? "미탑재" : "Not included"],
                [isKo ? "샘플링" : "Sampling", "50Hz"],
                [isKo ? "통신" : "Communication", "RS-485, Modbus"],
                ["SDK", "ROS, ROS2, Python, C++"],
              ].map(([k, v], i, arr) => (
                <div key={i} className={`flex justify-between py-2.5 ${i < arr.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <span className="text-gray-500">{k}</span>
                  <span className="font-semibold text-gray-900">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases — GIF */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "활용 사례" : "Use Cases"}
          </p>
          <h2 className="text-2xl font-extrabold text-white mb-12 tracking-tight">
            {isKo ? "다양한 환경에서의 실제 동작" : "Real-World Motion in Various Environments"}
          </h2>

          {/* GIF grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {[
              { file: "ROhand.gif",            label: isKo ? "기본 동작" : "Basic Motion" },
              { file: "rohandclick.gif",        label: isKo ? "클릭 동작" : "Click" },
              { file: "rohand_grap_shorts.gif", label: isKo ? "파지 동작" : "Grasping" },
              { file: "rohand_mov_shorts.gif",  label: isKo ? "이동 동작" : "Movement" },
              { file: "rohand_g.gif",           label: isKo ? "제스처" : "Gesture" },
              { file: "rohand_g2.gif",          label: isKo ? "제스처 2" : "Gesture 2" },
              { file: "rohand_hu.gif",          label: isKo ? "휴머노이드" : "Humanoid" },
              { file: "rohand_robot.gif",       label: isKo ? "로봇 암 연동" : "Robot Arm" },
            ].map((g, i) => (
              <div key={i} className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={`/products/robot-hand/gif/${g.file}`}
                  alt={g.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-semibold text-white/90">{g.label}</span>
              </div>
            ))}
          </div>

          {/* Use case cards */}
          <div className="grid md:grid-cols-3 gap-3 mt-10">
            {[
              {
                num: "01",
                gif: "rohand_bot15.gif",
                title: isKo ? "연구소 / 대학 AI" : "Lab / University AI",
                desc: isKo ? "파지 알고리즘 연구 및 고정밀 데이터 수집을 통한 논문 성과 극대화" : "Maximize research output through grasping algorithm research and high-precision data collection",
              },
              {
                num: "02",
                gif: "rohand_r2.gif",
                title: isKo ? "휴머노이드 제조" : "Humanoid Manufacturing",
                desc: isKo ? "차세대 로봇 인터페이스로서 인간 수준의 작업 수행 능력 확보" : "Secure human-level task performance capability as a next-gen robot interface",
              },
              {
                num: "03",
                gif: "rohand_robot4.gif",
                title: isKo ? "스마트 팩토리" : "Smart Factory",
                desc: isKo ? "비정형 물체 선별(Picking) 및 공정 자동화 범위 확대, 불량률 감소" : "Expand irregular object picking and process automation scope, reduce defect rates",
              },
            ].map((u, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`/products/robot-hand/gif/${u.gif}`}
                    alt={u.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold text-white/20 mb-1.5">{u.num}</div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{u.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "제품 상세" : "Product Detail"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "ROH-Lite 상세 이미지" : "ROH-Lite Detail Images"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/lite_1.jpeg"
              alt="ROH-Lite Detail"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Size Image + Tables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "치수 도면" : "Dimensions"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "제품 규격 및 치수" : "Product Dimensions"}
          </h2>

          {/* Dimension image */}
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white mb-14">
            <Image
              src="/products/robot-hand/lite_2.jpeg"
              alt={isKo ? "ROH-Lite 치수 도면" : "ROH-Lite Dimension Drawing"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Measurement location table */}
          <div className="max-w-3xl mb-10">
            <div className="overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 w-2/3">
                      {isKo ? "측정 위치" : "Measurement Location"}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500">
                      {isKo ? "치수 및 각도" : "Dimensions and Angles"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["중지 끝에서 손목까지 수직 거리", "Vertical distance from the tip of the middle finger to the wrist", "169 mm"],
                    ["엄지 끝에서 손목까지 수직 거리", "Vertical distance from the thumb tip to wrist", "97 mm"],
                    ["엄지 길이", "Thumb length", "110 mm"],
                    ["최대 손바닥 너비", "Maximum palm width", "75 mm"],
                    ["손목 직경", "Wrist diameter", "49 mm"],
                    ["엄지 측면 최대 개폐 각도", "Maximum opening and closing angle of the thumb side", "0 ~ 31°"],
                    ["엄지와 손바닥 최대 개폐 각도", "Maximum opening and closing angle of the thumb to the palm", "0 ~ 50°"],
                    ["엄지 측면 회전 각도", "Thumb lateral rotation angle", "0 ~ 90°"],
                    ["손가락 터치스크린 기능", "Finger touch screen function", isKo ? "지원" : "Supported"],
                  ].map(([ko, en, val], i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50/40"}>
                      <td className="px-5 py-3 text-sm text-gray-600">
                        <span className="block">{ko}</span>
                        <span className="block text-xs text-gray-400">{en}</span>
                      </td>
                      <td className="px-5 py-3 text-sm font-semibold text-[#E1251B] whitespace-nowrap">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weight */}
          <div className="max-w-3xl mb-10 flex items-center gap-3 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
            <span className="text-sm font-semibold text-gray-500">{isKo ? "무게" : "Weight"}</span>
            <span className="text-xl font-extrabold text-gray-900">457g ± 5g</span>
          </div>

          {/* Performance specs table */}
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-5">
              {isKo ? "사양" : "Specifications"}
            </p>
            <div className="overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 w-2/3">
                      {isKo ? "측정 항목" : "Measuring Position"}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500">
                      {isKo ? "수치" : "Parameters"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["최대 속도 기준 완전 굴곡/신전 시간", "Bending/stretching time for full range at maximum speed", "0.7 s"],
                    ["최대 속도 기준 엄지 전체 회전 시간", "Rotation time of thumb for full range at maximum speed", "0.7 s"],
                    ["신전 상태 각 손가락 끝 능동 추력", "Active force of each finger tip on stretched state", "≥ 0.45 kgf"],
                    ["굴곡 상태 각 손가락 끝 능동 추력", "Active force of each finger tip on bended state", "≥ 1 kgf"],
                    ["엄지 끝 최대 능동 추력", "Maximum active force of thumb tip", "≥ 1 kgf"],
                    ["굴곡 상태 4손가락 최대 수동 하중", "Maximum passive load for four fingers on bended state", "8 kg"],
                    ["굴곡 상태 각 손가락 최대 수동 하중", "Maximum passive load for each finger on bended state", "3 kg"],
                    ["신전 상태 각 손가락 최대 수동 하중", "Maximum passive load for each finger on stretched state", "2.25 kg"],
                  ].map(([ko, en, val], i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50/40"}>
                      <td className="px-5 py-3 text-sm text-gray-600">
                        <span className="block">{ko}</span>
                        <span className="block text-xs text-gray-400">{en}</span>
                      </td>
                      <td className="px-5 py-3 text-sm font-semibold text-[#E1251B] whitespace-nowrap">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "납품 사례" : "Delivery Cases"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "실제 적용 사례" : "Real-World Applications"}
          </h2>
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <Image
              src="/products/robot-hand/lite_3.jpg"
              alt={isKo ? "ROH-Lite 납품 사례" : "ROH-Lite Delivery Cases"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "개발 자료" : "Developer Resources"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "OYMotion 공식 매뉴얼 · SDK · 데모" : "OYMotion Official Manual · SDK · Demos"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "https://oymotion.github.io/en/ROHand/ROH-LiteS001/",
                title: isKo ? "사용자 매뉴얼" : "User Manual",
                desc: isKo ? "ROH-Lite 제품 사양 및 사용 설명서" : "ROH-Lite specifications and user guide",
              },
              {
                href: "https://oymotion.github.io/en/ROHand/SDK/ROH_SDK_CXX/",
                title: "SDK (C/C++, Python)",
                desc: isKo ? "ROS/ROS2 패키지 및 C++·Python API" : "ROS/ROS2 packages and C++/Python API",
              },
              {
                href: "https://oymotion.github.io/en/ROHand/ROH-Demos/ROH_Gen1_Demos/",
                title: isKo ? "데모 (GEN1 · 일반 모델용)" : "Demos (Gen1 · General Models)",
                desc: isKo ? "센서 미탑재 모델(A002, Lite 등)을 위한 기본 데모" : "Basic demos for non-sensor models (A002, Lite, etc.)",
              },
              {
                href: "https://oymotion.github.io/en/ROHand/ROH-Demos/ROH_Demo_Collection/",
                title: isKo ? "데모 컬렉션 (전체 모델)" : "Demo Collection (All Models)",
                desc: isKo ? "일반·센서 모델 모두 지원하는 통합 데모 모음" : "Combined demo set supporting both general and sensor models",
              },
            ].map((r) => (
              <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer"
                className="block bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-primary-300 hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{r.desc}</p>
                <span className="inline-flex items-center text-xs font-semibold text-[#E1251B]">
                  {isKo ? "바로가기" : "View"}
                  <svg className="ml-1 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            ))}
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
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm">
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
          <div className="mt-10 pt-8 border-t border-white/10" />
        </div>
      </section>
    </div>
  );
}
