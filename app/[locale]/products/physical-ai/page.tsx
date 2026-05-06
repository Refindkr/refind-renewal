import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "피지컬 AI / BCI" : "Physical AI / BCI",
    description: isKo
      ? "리파인 피지컬 AI 및 BCI 제품 라인업. 근전도·뇌파 생체신호 인터페이스, AVR/AMR 자율이동로봇 — GForcePro+, BCI/BMI 솔루션."
      : "Refind Physical AI and BCI lineup. EMG/EEG biosignal interfaces, AVR/AMR autonomous mobile robots — GForcePro+, BCI/BMI solutions.",
  };
}

export default async function PhysicalAIPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "피지컬 AI / BCI" : "Physical AI / BCI"}
      titleEn="Physical AI / BCI"
      description={
        isKo
          ? "뇌파(EEG)·근전도(EMG) 생체신호 인터페이스부터 로봇 제어 플랫폼까지. 인간과 기계를 연결하는 리파인의 Physical AI 솔루션."
          : "From EEG/EMG biosignal interfaces to robot control platforms. Refind's Physical AI solutions that connect humans and machines."
      }
      categorySlug="physical-ai"
      products={[
        {
          slug: "gforcepro",
          name: "GForcePro+",
          nameEn: "GForcePro+ EMG Armband",
          tagline: isKo
            ? "8채널 건식 EMG + 9축 IMU 암밴드. 최대 16가지 제스처 인식 및 로봇 제어 연동."
            : "8-channel dry EMG + 9-axis IMU armband. Up to 16 gesture recognition with robot control integration.",
          image: "/products/sensors/1.jpeg",
          tags: isKo ? ["8채널 EMG", "9축 IMU", "16제스처"] : ["8ch EMG", "9-axis IMU", "16 Gestures"],
        },
        {
          slug: "bcibmi",
          name: isKo ? "BCI/BMI 생체신호 솔루션" : "BCI/BMI Biosignal Solutions",
          nameEn: "BCI/BMI Suite",
          tagline: isKo
            ? "웨어러블 EEG(NURA/ORION)부터 고해상도 EMG(BioFlex nano 32)까지. 연구급 생체신호 측정 장비 라인업."
            : "From wearable EEG (NURA/ORION) to high-resolution EMG (BioFlex nano 32). Research-grade biosignal measurement lineup.",
          image: "/products/sensors/tashan.png",
          tags: isKo ? ["EEG", "EMG", "연구급", "무선"] : ["EEG", "EMG", "Research-Grade", "Wireless"],
        },
        {
          slug: "gforcepro",
          name: isKo ? "Tashan 포스센서" : "Tashan Force Sensor",
          nameEn: "Tashan Force Sensor",
          tagline: isKo
            ? "로봇핸드 내장형 고감도 포스센서. 0.1N~25N 정밀 측정, 150Hz 샘플링."
            : "High-sensitivity force sensor for robot hand integration. 0.1N–25N precision measurement, 150Hz sampling.",
          image: "/products/sensors/tashan.png",
          tags: isKo ? ["포스센서", "150Hz", "로봇핸드 내장"] : ["Force Sensor", "150Hz", "Embedded"],
        },
        {
          slug: "avr-amr",
          name: isKo ? "AVR/AMR 자율이동로봇" : "AVR/AMR Autonomous Mobile Robot",
          nameEn: "AVR/AMR",
          tagline: isKo
            ? "라이다 기반 SLAM 자율주행 모바일 플랫폼. 협동로봇 암과 결합해 완전 자동화 셀 구성 가능."
            : "LiDAR-based SLAM autonomous mobile platform. Combine with cobot arms to build fully automated cells.",
          image: "/products/physical-ai/amr.jpg",
          tags: isKo ? ["AMR", "SLAM", "자율이동", "모듈형"] : ["AMR", "SLAM", "Autonomous", "Modular"],
        },
      ]}
    />
  );
}
