import type { Metadata } from "next";
import ComingSoonProduct from "@/components/ui/ComingSoonProduct";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: "Ohand S001",
    description: isKo
      ? "Ohand S001 전자의수. 상세 페이지 준비 중입니다."
      : "Ohand S001 prosthetic hand. Detail page coming soon.",
  };
}

export default async function OhandS001Page({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ComingSoonProduct
      locale={locale}
      category="prosthetic"
      categoryLabel={isKo ? "전자의수" : "Prosthetic Hand"}
      name="Ohand S001"
      tagline={isKo ? "Ohand 라인업의 신규 모델입니다." : "A new model in the Ohand lineup."}
    />
  );
}
