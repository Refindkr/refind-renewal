import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "피지컬 AI & 로봇부속" : "Physical AI & Robot Parts",
    description: isKo
      ? "리파인 피지컬 AI & 로봇부속 라인업. 액추에이터, 듀얼암 플랫폼, AVR/AMR 자율이동로봇, Tashan 포스센서."
      : "Refind Physical AI & Robot Parts lineup. Actuator, dual-arm platform, AVR/AMR autonomous mobile robot, Tashan force sensor.",
  };
}

export default async function PhysicalAIPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "피지컬 AI & 로봇부속" : "Physical AI & Robot Parts"}
      titleEn="Physical AI & Robot Parts"
      description={
        isKo
          ? "액추에이터부터 듀얼암 로봇 플랫폼, 자율이동로봇, 고감도 포스센서까지 — 실세계 AI 로보틱스를 위한 리파인의 Physical AI & 로봇부속 솔루션."
          : "From actuators to dual-arm robot platforms, autonomous mobile robots, and high-sensitivity force sensors — Refind's Physical AI & Robot Parts solutions for real-world robotics."
      }
      categorySlug="physical-ai"
      products={[
        {
          slug: "tashan",
          name: isKo ? "Tashan 포스센서" : "Tashan Force Sensor",
          nameEn: "Tashan Force Sensor",
          tagline: isKo
            ? "로봇핸드 내장형 고감도 포스센서. 0.1N~25N 정밀 측정, 150Hz 샘플링."
            : "High-sensitivity force sensor for robot hand integration. 0.1N–25N precision measurement, 150Hz sampling.",
          image: "/products/sensors/tashan.png",
          tags: isKo ? ["포스센서", "150Hz", "로봇핸드 내장"] : ["Force Sensor", "150Hz", "Embedded"],
        },
        {
          slug: "actuator",
          name: isKo ? "액추에이터" : "Actuator",
          nameEn: "Realman Actuator",
          tagline: isKo
            ? "Realman 공식 파트너로서 제공하는 고성능 로봇 액추에이터 솔루션."
            : "High-performance robot actuator solutions provided as an official Realman partner.",
          image: "/products/physical-ai/actuator/whj-series.png",
          tags: isKo ? ["Realman", "공식 파트너"] : ["Realman", "Official Partner"],
        },
        {
          slug: "avr-amr",
          name: isKo ? "AVR/AMR 자율이동로봇" : "AVR/AMR Autonomous Mobile Robot",
          nameEn: "AVR/AMR",
          tagline: isKo
            ? "라이다 기반 SLAM 자율주행 모바일 플랫폼. 협동로봇 암과 결합해 완전 자동화 셀 구성 가능."
            : "LiDAR-based SLAM autonomous mobile platform. Combine with cobot arms to build fully automated cells.",
          image: "/products/physical-ai/amr.png",
          tags: isKo ? ["AMR", "SLAM", "자율이동", "모듈형"] : ["AMR", "SLAM", "Autonomous", "Modular"],
        },
        {
          slug: "platform",
          name: isKo ? "플랫폼" : "Platform",
          nameEn: "Dural Arm Embodied AI Platform",
          tagline: isKo
            ? "양팔 로봇 + 딥비전 + 엔드이펙터 + 엣지 컴퓨팅이 통합된 올인원 AI 로보틱스 연구·교육 플랫폼."
            : "All-in-one AI robotics research and education platform integrating dual-arm robot, depth vision, end effectors, and edge computing.",
          image: "/products/platform/1.png",
          tags: isKo ? ["Dual Arm", "Embodied AI", "Edge Computing"] : ["Dual Arm", "Embodied AI", "Edge Computing"],
        },
      ]}
    />
  );
}
