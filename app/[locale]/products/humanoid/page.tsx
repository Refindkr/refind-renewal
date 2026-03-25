import { getTranslations } from "next-intl/server";
import ProductPage from "@/components/ui/ProductPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HumanoidPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("products.humanoid");

  return (
    <ProductPage
      locale={locale}
      title={t("title")}
      description={t("description")}
      items={[
        { name: "Unitree G1", description: locale === "ko" ? "고성능 휴머노이드 로봇, 23 DOF, 35kg 무게, 최대 2m/s 이동속도" : "High-performance humanoid robot, 23 DOF, 35kg weight, max 2m/s movement speed" },
        { name: "Unitree H1", description: locale === "ko" ? "산업용 휴머노이드 로봇, 47 DOF, 고하중 작업 가능, 강화학습 지원" : "Industrial humanoid robot, 47 DOF, capable of heavy-duty tasks, reinforcement learning support" },
        { name: "Unitree H1-2", description: locale === "ko" ? "차세대 산업용 휴머노이드, 향상된 손 기민성, AI 통합 플랫폼" : "Next-gen industrial humanoid with enhanced hand dexterity and AI integration platform" },
      ]}
      icon="🚶"
      color="bg-gradient-to-br from-teal-900 to-teal-700"
    />
  );
}
