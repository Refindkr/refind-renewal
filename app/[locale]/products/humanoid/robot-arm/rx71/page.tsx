import type { Metadata } from "next";
import ComingSoonProduct from "@/components/ui/ComingSoonProduct";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: "RX71",
    description: isKo
      ? "리파인 로봇암 RX71 표준형. 상세 페이지 준비 중입니다."
      : "Refind Robot Arm RX71 Standard. Detail page coming soon.",
  };
}

export default async function Rx71Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ComingSoonProduct
      locale={locale}
      category="humanoid"
      categoryLabel={isKo ? "휴머노이드 로봇" : "Humanoid Robot"}
      name={isKo ? "RX71-표준형" : "RX71 Standard"}
      tagline={isKo ? "로봇암 RX 시리즈의 표준형 모델입니다." : "The standard model in the Robot Arm RX series."}
    />
  );
}
