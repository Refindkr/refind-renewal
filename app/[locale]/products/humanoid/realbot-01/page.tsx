import type { Metadata } from "next";
import ComingSoonProduct from "@/components/ui/ComingSoonProduct";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: "REALBOT01",
    description: isKo
      ? "REALMAN REALBOT01 휴머노이드 로봇. 상세 페이지 준비 중입니다."
      : "REALMAN REALBOT01 humanoid robot. Detail page coming soon.",
  };
}

export default async function Realbot01Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ComingSoonProduct
      locale={locale}
      category="humanoid"
      categoryLabel={isKo ? "휴머노이드 로봇" : "Humanoid Robot"}
      name="REALBOT01"
      tagline={isKo ? "REALMAN 휴머노이드 로봇 라인업의 신규 모델입니다." : "A new model in the REALMAN humanoid robot lineup."}
    />
  );
}
