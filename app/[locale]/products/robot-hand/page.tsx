import { getTranslations } from "next-intl/server";
import ProductPage from "@/components/ui/ProductPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RobotHandPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("products.robotHand");

  return (
    <ProductPage
      locale={locale}
      title={t("title")}
      description={t("description")}
      items={[
        { name: "ROHAND E1", description: locale === "ko" ? "5DOF 전기식 로봇핸드, 최대 10kg 파지력, 정밀 제어 가능한 5개 독립 손가락" : "5DOF electric robot hand with up to 10kg gripping force and 5 independently controlled fingers" },
        { name: "ROHAND E2", description: locale === "ko" ? "6DOF 고정밀 로봇핸드, 촉각 센서 내장, 0.1mm 정밀도" : "6DOF high-precision robot hand with built-in tactile sensors and 0.1mm precision" },
        { name: "OHand 전자의수 / Prosthetic", description: locale === "ko" ? "EMG 생체신호 기반 자연스러운 의수 제어, 5개 손가락 개별 구동" : "Natural prosthetic hand control based on EMG biosignals with 5 individually actuated fingers" },
      ]}
      icon="🤖"
      color="bg-gradient-to-br from-blue-900 to-blue-700"
    />
  );
}
