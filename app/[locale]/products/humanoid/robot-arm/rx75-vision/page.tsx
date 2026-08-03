import type { Metadata } from "next";
import ComingSoonProduct from "@/components/ui/ComingSoonProduct";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: "RX75 Vision",
    description: isKo
      ? "리파인 로봇암 RX75 비전형. 상세 페이지 준비 중입니다."
      : "Refind Robot Arm RX75 Vision. Detail page coming soon.",
  };
}

export default async function Rx75VisionPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ComingSoonProduct
      locale={locale}
      category="humanoid"
      categoryLabel={isKo ? "휴머노이드 로봇" : "Humanoid Robot"}
      name={isKo ? "RX75-비전형" : "RX75 Vision"}
      tagline={isKo ? "비전 시스템을 탑재한 로봇암 RX 시리즈 모델입니다." : "The vision-equipped model in the Robot Arm RX series."}
    />
  );
}
