import type { Metadata } from "next";
import ComingSoonProduct from "@/components/ui/ComingSoonProduct";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "로봇암 RX 시리즈" : "Robot Arm RX Series",
    description: isKo
      ? "리파인 로봇암 RX 시리즈. 상세 페이지 준비 중입니다."
      : "Refind Robot Arm RX Series. Detail page coming soon.",
  };
}

export default async function RobotArmPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ComingSoonProduct
      locale={locale}
      category="humanoid"
      categoryLabel={isKo ? "휴머노이드 로봇" : "Humanoid Robot"}
      name={isKo ? "로봇암 (RX 시리즈)" : "Robot Arm (RX Series)"}
      tagline={isKo ? "산업 자동화와 Physical AI를 위한 신규 로봇암 라인업입니다." : "A new robot arm lineup for industrial automation and Physical AI."}
    />
  );
}
