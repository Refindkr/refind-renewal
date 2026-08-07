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
    title: isKo ? "자율이동로봇 AVR/AMR" : "Autonomous Mobile Robot AVR/AMR",
    description: isKo
      ? "myAGV 2023 모바일 로봇 플랫폼과 모바일 섀시 — 리파인의 자율이동로봇(AVR/AMR) 라인업."
      : "myAGV 2023 mobile robot platform and mobile chassis — Refind's autonomous mobile robot (AVR/AMR) lineup.",
  };
}

export default async function AVRAMRCategoryPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const products = [
    {
      href: `/${locale}/products/physical-ai/avr-amr/myagv`,
      image: "/products/physical-ai/amr/1.JPG",
      name: isKo ? "모바일 로봇 플랫폼" : "Mobile Robot Platform",
      nameEn: "myAGV 2023",
      tagline: isKo
        ? "Elephant Robotics에서 개발한 소형 자율주행 로봇. 자율주행·SLAM·경로 계획 등 이동 로봇 핵심 기술을 실습할 수 있는 교육·연구용 모바일 로봇 플랫폼입니다."
        : "A small autonomous robot developed by Elephant Robotics. An education and research platform for practicing core mobile-robot technologies — autonomous driving, SLAM, and path planning.",
      tags: isKo ? ["myAGV 2023", "SLAM", "교육·연구"] : ["myAGV 2023", "SLAM", "Education & Research"],
    },
    {
      href: `/${locale}/products/physical-ai/avr-amr/mobile-chassis`,
      image: "/products/physical-ai/avr-amr/mobile-chassis/4wheel.jpg",
      name: isKo ? "모바일 섀시" : "Mobile Chassis",
      nameEn: "Mobile Chassis",
      tagline: isKo
        ? "민첩한 조향 성능으로 복잡한 환경에서도 안정적으로 주행하는 모바일 플랫폼. 산업 물류, 상업 서비스, 연구·교육, 체화 지능 데이터 수집에 활용됩니다."
        : "A mobile platform with agile steering that runs stably even in complex environments. Used in industrial logistics, commercial service, R&D, and embodied AI data collection.",
      tags: isKo ? ["4륜/2륜 구동", "SLAM", "6h+ 사용시간"] : ["4WD/2WD", "SLAM", "6h+ Runtime"],
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
              "radial-gradient(circle at 20% 50%, #E1251B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E1251B 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            Products · AVR / AMR
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            {isKo ? "자율이동로봇 AVR/AMR" : "Autonomous Mobile Robot AVR/AMR"}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            {isKo
              ? "자율주행·SLAM 기반의 모바일 로봇 플랫폼과 섀시 라인업입니다."
              : "Refind's SLAM-based autonomous mobile robot platform and chassis lineup."}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 transition-all duration-300"
              >
                <div className="relative h-56 bg-gray-50 p-4">
                  <div className="relative h-full w-full rounded-xl bg-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{product.nameEn}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{product.tagline}</p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary-500 group-hover:gap-2 transition-all">
                    {isKo ? "자세히 보기" : "Learn more"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {isKo ? "제품에 대해 궁금한 점이 있으신가요?" : "Have questions about our products?"}
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            {isKo ? "전문가가 직접 상담해드립니다. 지금 문의해주세요." : "Our experts are ready to help. Contact us today."}
          </p>
          <a
            href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-sm"
          >
            {isKo ? "협업 문의하기" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}
