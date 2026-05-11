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
    title: isKo ? "개인 신체증강기기" : "Personal Body Enhancement",
    description: isKo
      ? "전자의수, BCI/BMI, 로봇운동기, 로봇보조기 — 리파인의 신체증강 솔루션 전체 라인업."
      : "Prosthetic hands, BCI/BMI, exercise robots, and support devices — Refind's full body enhancement lineup.",
  };
}

export default async function BodyEnhancementPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const categories = [
    {
      slug: "prosthetic",
      label: isKo ? "전자의수" : "Prosthetic Hand",
      labelEn: "Prosthetic Hand",
      desc: isKo
        ? "EMG 생체신호 기반의 자연스러운 의수 제어. 5~6 자유도 전기식 로봇핸드."
        : "Natural prosthetic control via EMG biosignals. 5–6 DOF electric robot hand.",
      href: `/${locale}/products/prosthetic`,
      products: [
        {
          name: "OHand",
          href: `/${locale}/products/prosthetic/ohand`,
          image: "/products/prosthetic/ohand.jpg",
          tags: isKo ? ["5DOF", "EMG 제어"] : ["5DOF", "EMG Control"],
        },
        {
          name: "OHandLite",
          href: `/${locale}/products/prosthetic/ohandlite`,
          image: "/products/prosthetic/ohandlite.jpeg",
          tags: isKo ? ["경량형", "일상용"] : ["Lightweight", "Daily Use"],
        },
      ],
    },
    {
      slug: "bcibmi",
      label: "BCI / BMI",
      labelEn: "BCI / BMI",
      desc: isKo
        ? "뇌·근전도 신호 기반 인터페이스. EEG, EMG, HD EMG 측정·분석 플랫폼."
        : "Brain and EMG signal interface platform. EEG, EMG, HD EMG measurement and analysis.",
      href: `/${locale}/products/physical-ai/bcibmi`,
      products: [
        {
          name: "Wearable EEG",
          href: `/${locale}/products/physical-ai/eeg`,
          image: "/products/sensors/2.jpeg",
          tags: isKo ? ["EEG", "무선"] : ["EEG", "Wireless"],
        },
        {
          name: "GForcePro+",
          href: `/${locale}/products/physical-ai/gforcepro`,
          image: "/products/sensors/tashan.png",
          tags: isKo ? ["sEMG", "IMU", "BT5.0"] : ["sEMG", "IMU", "BT5.0"],
        },
        {
          name: "HD EMG",
          href: `/${locale}/products/physical-ai/hd-emg`,
          image: "/products/sensors/3.jpeg",
          tags: isKo ? ["32~128ch", "4096Hz"] : ["32–128ch", "4096Hz"],
        },
      ],
    },
    {
      slug: "exercise",
      label: isKo ? "로봇운동기" : "Exercise Robot",
      labelEn: "Exercise Robot",
      desc: isKo
        ? "EMG 기반 상지·손가락 재활 로봇. 근력 약화 및 뇌졸중 환자의 능동적 재활을 지원합니다."
        : "EMG-based upper limb and finger rehabilitation robots. Active rehab for weakness and stroke patients.",
      href: `/${locale}/products/body-enhancement`,
      products: [
        {
          name: "ORE-3000",
          href: `/${locale}/products/body-enhancement/ore-3000`,
          image: "/products/body-enhancement/ORE-3000.jpeg",
          tags: isKo ? ["4ch EMG", "상지 재활"] : ["4ch EMG", "Upper Limb"],
        },
        {
          name: "OYFM-7000",
          href: `/${locale}/products/body-enhancement/oyfm-7000`,
          image: "/products/body-enhancement/OYFM-7000.jpeg",
          tags: isKo ? ["손가락 재활", "외골격"] : ["Finger Rehab", "Exoskeleton"],
        },
      ],
    },
    {
      slug: "robot-support",
      label: isKo ? "로봇보조기" : "Robot Support",
      labelEn: "Robot Support",
      desc: isKo
        ? "하지 보행 보조 및 재활을 위한 웨어러블 로봇. 보행 기능 회복을 돕는 스마트 보조기."
        : "Wearable robots for gait assistance and lower limb rehabilitation.",
      href: `/${locale}/products/robot-support`,
      products: [
        {
          name: "HYBRIDEX",
          href: `/${locale}/products/robot-support/hybridex`,
          image: null,
          tags: isKo ? ["하지 보조", "재활"] : ["Lower Limb", "Rehab"],
        },
        {
          name: "STEP BOOSTER",
          href: `/${locale}/products/robot-support/step-booster`,
          image: null,
          tags: isKo ? ["보행 보조", "경량"] : ["Gait Assist", "Lightweight"],
        },
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* Hero */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #669DFD 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0AABBA 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-4">
            Products · Body Enhancement
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            {isKo ? "개인 신체증강기기" : "Personal Body Enhancement"}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            {isKo
              ? "전자의수부터 BCI/BMI, 재활 로봇, 보행 보조기까지 — 장애와 노화의 한계를 넘는 리파인의 통합 신체증강 솔루션."
              : "From prosthetic hands to BCI/BMI, rehab robots, and gait assistants — Refind's integrated body enhancement solutions."}
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.slug}
          className={`py-16 ${catIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-2">
                  {cat.labelEn}
                </p>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
                  {cat.label}
                </h2>
                <p className="text-sm text-gray-500 max-w-xl">{cat.desc}</p>
              </div>
              <Link
                href={cat.href}
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#669DFD] hover:underline whitespace-nowrap"
              >
                {isKo ? "전체 보기" : "View All"} →
              </Link>
            </div>

            {/* Product cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <span className="text-4xl opacity-30">🦾</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3">{product.name}</h3>
                    <div className="flex items-center gap-1 text-sm font-semibold text-blue-500 group-hover:gap-2 transition-all">
                      {isKo ? "자세히 보기" : "Learn more"}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile "전체 보기" */}
            <div className="mt-5 sm:hidden">
              <Link
                href={cat.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#669DFD] hover:underline"
              >
                {isKo ? "전체 보기" : "View All"} →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            {isKo ? "맞춤 솔루션이 필요하신가요?" : "Need a Tailored Solution?"}
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            {isKo
              ? "리파인 전문가가 상황에 맞는 신체증강 솔루션을 안내해드립니다."
              : "Refind experts will guide you to the right body enhancement solution."}
          </p>
          <Link
            href={`/${locale}/inquiry`}
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
          >
            {isKo ? "문의하기" : "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
