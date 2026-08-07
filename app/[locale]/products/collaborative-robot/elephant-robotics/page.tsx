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
    title: isKo ? "Elephant Robotics 협동로봇" : "Elephant Robotics Collaborative Robot",
    description: isKo
      ? "교육·연구·개발을 위한 소형 협동 로봇암 플랫폼. myCobot 280 / 320 / 630 시리즈."
      : "Compact collaborative robot arm platform for education, research, and development. myCobot 280 / 320 / 630 series.",
  };
}

export default async function ElephantRoboticsPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const products = [
    {
      model: "myCobot 280",
      image: "/products/collaborative-robot/mycobot280.jpg",
      tagline: isKo ? "로봇 입문자를 위한 컴팩트 교육용 cobot" : "Compact educational cobot for beginners",
      desc: isKo
        ? "myCobot 280은 로봇 교육과 기초 연구에 최적화된 모델로, 가장 컴팩트한 크기와 간단한 설치가 특징입니다."
        : "myCobot 280 is optimized for robot education and basic research, featuring the most compact size and simple installation.",
      features: isKo
        ? ["초소형 6축 로봇암", "가벼운 하중 대응", "데스크탑에서 즉시 사용 가능", "합리적인 가격대"]
        : ["Ultra-compact 6-axis robot arm", "Light payload support", "Ready to use on desktop", "Affordable price"],
      specs: [
        ["자유도", "DOF", "6" + (isKo ? "축" : "-axis")],
        ["작업 반경", "Working Radius", "280 mm"],
        ["가반하중", "Payload", "250 g"],
        ["반복 정밀도", "Repeatability", "±0.5 mm"],
        ["구동 방식", "Drive", isKo ? "서보 모터" : "Servo Motor"],
        ["제어 방식", "Control", "Python / ROS"],
        ["전원 공급", "Power", "DC " + (isKo ? "어댑터" : "Adapter")],
        ["설치 형태", "Installation", isKo ? "데스크탑" : "Desktop"],
        ["주요 분야", "Application", isKo ? "교육, 로봇 입문, 기초 연구" : "Education, Intro to Robotics, Basic Research"],
      ],
    },
    {
      model: "myCobot 320",
      image: "/products/collaborative-robot/mycobot320.jpg",
      tagline: isKo ? "교육과 연구의 균형을 잡은 스탠다드 모델" : "Standard model balancing education and research",
      desc: isKo
        ? "myCobot 320은 280 대비 작업 반경과 안정성이 향상된 모델로, 교육을 넘어 본격적인 연구·개발 실험에 적합합니다."
        : "myCobot 320 offers improved reach and stability over the 280, suitable for serious research and development experiments.",
      features: isKo
        ? ["6축 구조 유지", "향상된 작업 반경", "안정적인 반복 동작", "다양한 엔드이펙터 실험 가능"]
        : ["6-axis structure", "Improved working radius", "Stable repetitive motion", "Supports various end-effector experiments"],
      specs: [
        ["자유도", "DOF", "6" + (isKo ? "축" : "-axis")],
        ["작업 반경", "Working Radius", "320 mm"],
        ["가반하중", "Payload", "500 g"],
        ["반복 정밀도", "Repeatability", "±0.5 mm"],
        ["구동 방식", "Drive", isKo ? "서보 모터" : "Servo Motor"],
        ["제어 방식", "Control", "Python / ROS"],
        ["전원 공급", "Power", "DC " + (isKo ? "어댑터" : "Adapter")],
        ["설치 형태", "Installation", isKo ? "데스크탑" : "Desktop"],
        ["주요 분야", "Application", isKo ? "교육, 연구실, 알고리즘 테스트" : "Education, Lab, Algorithm Testing"],
      ],
    },
    {
      model: "myCobot 630",
      image: "/products/collaborative-robot/mycobot630.png",
      tagline: isKo ? "연구·개발 중심의 하이엔드 소형 cobot" : "High-end compact cobot for R&D",
      desc: isKo
        ? "myCobot 630은 myCobot 시리즈 중 가장 큰 작업 반경과 확장성을 갖춘 모델로, 연구·개발·시연 목적에 최적화된 플랫폼입니다."
        : "myCobot 630 has the largest working radius and extensibility in the myCobot series, optimized for research, development, and demonstration.",
      features: isKo
        ? ["6축 소형 cobot 구조", "넓은 작업 반경", "다양한 제어 실험 가능", "데모 및 기술 시연에 적합"]
        : ["6-axis compact cobot", "Wide working radius", "Supports diverse control experiments", "Ideal for demos and tech showcases"],
      specs: [
        ["자유도", "DOF", "6" + (isKo ? "축" : "-axis")],
        ["작업 반경", "Working Radius", "630 mm"],
        ["가반하중", "Payload", "1 kg"],
        ["반복 정밀도", "Repeatability", "±0.5 mm"],
        ["구동 방식", "Drive", isKo ? "서보 모터" : "Servo Motor"],
        ["제어 방식", "Control", "Python / ROS"],
        ["전원 공급", "Power", isKo ? "외부 전원 공급 장치" : "External Power Supply"],
        ["설치 형태", "Installation", isKo ? "데스크탑 / 작업대" : "Desktop / Workbench"],
        ["주요 분야", "Application", isKo ? "연구, 개발, 개념 검증, 시연" : "Research, Development, PoC, Demo"],
      ],
    },
  ];

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
              Collaborative Robot · Education & Research
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              Elephant Robotics
            </h1>
            <p className="text-sm text-[#E1251B] font-semibold mb-5">
              {isKo ? "교육·연구·개발을 위한 소형 협동 로봇암 플랫폼" : "Compact Collaborative Robot Arm Platform for Education & Research"}
            </p>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {isKo
                ? "myCobot 시리즈는 산업 자동화보다는 교육, 연구, 로봇 개발, 알고리즘 실험에 최적화된 플랫폼입니다. 컴팩트한 크기와 직관적인 제어 구조를 바탕으로 입문자부터 전문 연구자까지 폭넓게 활용할 수 있습니다."
                : "The myCobot series is optimized for education, research, robot development, and algorithm experimentation rather than industrial automation. Its compact size and intuitive control structure make it accessible from beginners to professional researchers."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">
                {isKo ? "도입 문의" : "Contact Us"}
              </a>
              <Link href={`/${locale}/products/collaborative-robot`}
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm hover:border-white/50 hover:text-white transition-colors">
                {isKo ? "협동로봇 전체 보기" : "All Collaborative Robots"}
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px]">
            <Image
              src="/products/collaborative-robot/mycobot320.jpg"
              alt="Elephant Robotics myCobot"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-10">
            {isKo ? "핵심 특징" : "Key Features"}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: isKo ? "고자유도 6축 구동" : "High-DOF 6-Axis Motion", desc: isKo ? "6축 관절 구조로 인간 팔과 유사한 자유로운 동작이 가능. 좁은 공간에서도 정밀한 작업을 수행합니다." : "6-axis joint structure enables human arm-like freedom of motion, performing precise tasks even in confined spaces." },
              { title: isKo ? "쉬운 프로그래밍" : "Easy Programming", desc: isKo ? "Python, ROS, myBlockly 등 다양한 SDK 지원. 비전문가도 쉽게 자동화 작업을 구성할 수 있습니다." : "Supports Python, ROS, myBlockly and more. Anyone can configure automation tasks without deep expertise." },
              { title: isKo ? "교육·연구 최적화" : "Education & Research Optimized", desc: isKo ? "로봇 공학 입문부터 고급 알고리즘 실험까지, 교육 현장과 연구소 모두에서 즉시 활용 가능합니다." : "From intro robotics to advanced algorithm experiments — instantly deployable in classrooms and research labs." },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((p, idx) => (
        <section key={p.model} className={`py-20 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
              myCobot Series
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative h-72 md:h-96 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.model}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Info */}
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">{p.model}</h2>
                <p className="text-sm text-[#E1251B] font-semibold mb-4">{p.tagline}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.features.map((f, i) => (
                    <span key={i} className="px-3 py-1.5 bg-primary-50 text-[#E1251B] rounded-full text-xs font-medium border border-primary-100">
                      {f}
                    </span>
                  ))}
                </div>
                {/* Spec table */}
                <div className="rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {isKo ? "사양" : "Specifications"}
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {p.specs.map(([ko, en, v], i) => (
                      <div key={i} className="flex justify-between px-5 py-2.5 text-sm">
                        <span className="text-gray-500 pr-4">
                          <span className="block">{ko}</span>
                          <span className="block text-xs text-gray-400">{en}</span>
                        </span>
                        <span className="font-semibold text-gray-900 whitespace-nowrap self-center">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Model Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {isKo ? "모델 비교" : "Model Comparison"}
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 tracking-tight">
            {isKo ? "myCobot 시리즈 한눈에 보기" : "myCobot Series at a Glance"}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500">{isKo ? "항목" : "Spec"}</th>
                  <th className="text-center px-5 py-4 text-xs font-bold text-[#E1251B]">myCobot 280</th>
                  <th className="text-center px-5 py-4 text-xs font-bold text-[#E1251B]">myCobot 320</th>
                  <th className="text-center px-5 py-4 text-xs font-bold text-[#E1251B]">myCobot 630</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  [isKo ? "자유도" : "DOF",             "6" + (isKo ? "축" : "-axis"), "6" + (isKo ? "축" : "-axis"), "6" + (isKo ? "축" : "-axis")],
                  [isKo ? "작업 반경" : "Working Radius", "280 mm",  "320 mm",  "630 mm"],
                  [isKo ? "가반하중" : "Payload",         "250 g",   "500 g",   "1 kg"],
                  [isKo ? "반복 정밀도" : "Repeatability", "±0.5 mm", "±0.5 mm", "±0.5 mm"],
                  [isKo ? "제어 방식" : "Control",        "Python / ROS", "Python / ROS", "Python / ROS"],
                  [isKo ? "주요 용도" : "Main Use",       isKo ? "입문·교육" : "Beginner / Education", isKo ? "교육·연구" : "Education / Research", isKo ? "연구·개발·시연" : "R&D / Demo"],
                ].map(([label, v280, v320, v630], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-5 py-3.5 text-xs font-semibold text-gray-700">{label}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-600">{v280}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-600">{v320}</td>
                    <td className="px-5 py-3.5 text-center text-xs text-gray-600">{v630}</td>
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
            {isKo ? "자동화 도입을 고민하고 계신가요?" : "Considering Automation?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo ? "리파인 전문가가 최적의 솔루션을 제안해 드립니다." : "Refind experts will propose the optimal solution."}
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
