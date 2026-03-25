import { getTranslations } from "next-intl/server";
import ProductPage from "@/components/ui/ProductPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CollaborativeRobotPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("products.collaborativeRobot");

  return (
    <ProductPage
      locale={locale}
      title={t("title")}
      description={t("description")}
      items={[
        { name: "REALMAN RM65-B", description: locale === "ko" ? "6축 협동로봇, 5kg 가반하중, 900mm 작업반경, 안전 협업 인증" : "6-axis collaborative robot, 5kg payload, 900mm working radius, safety certified" },
        { name: "REALMAN RM75-B", description: locale === "ko" ? "7축 고자유도 협동로봇, 5kg 가반하중, 사람 팔과 유사한 동작" : "7-axis high-DOF collaborative robot with human arm-like motion" },
        { name: "Elephant Robotics myCobot", description: locale === "ko" ? "6축 소형 협동로봇 시리즈, 연구/교육용, 오픈소스 지원" : "6-axis compact collaborative robot series for research and education, open source supported" },
      ]}
      icon="🦾"
      color="bg-gradient-to-br from-gray-900 to-gray-700"
    />
  );
}
