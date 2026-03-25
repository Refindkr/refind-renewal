import { getTranslations } from "next-intl/server";
import ProductPage from "@/components/ui/ProductPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PhysicalAIPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("products.physicalAI");

  return (
    <ProductPage
      locale={locale}
      title={t("title")}
      description={t("description")}
      items={[
        { name: "GELLO 원격조작기", description: locale === "ko" ? "직관적인 로봇 원격조작 솔루션, 실시간 모션 캡처, 모방학습 데이터 수집" : "Intuitive robot teleoperation solution with real-time motion capture and imitation learning data collection" },
        { name: "LeRobot 플랫폼", description: locale === "ko" ? "Hugging Face 기반 오픈소스 모방학습 플랫폼, 다양한 로봇 지원" : "Open-source imitation learning platform based on Hugging Face, supporting various robots" },
        { name: "AI 학습 데이터 시스템", description: locale === "ko" ? "로봇 조작 시연 데이터 수집 및 AI 모델 학습 통합 솔루션" : "Integrated solution for robot manipulation demonstration data collection and AI model training" },
      ]}
      icon="🧠"
      color="bg-gradient-to-br from-purple-900 to-purple-700"
    />
  );
}
