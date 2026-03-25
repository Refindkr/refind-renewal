import { getTranslations } from "next-intl/server";
import ProductPage from "@/components/ui/ProductPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BodyEnhancementPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("products.bodyEnhancement");

  return (
    <ProductPage
      locale={locale}
      title={t("title")}
      description={t("description")}
      items={[
        { name: "BCI/BMI 연구장비", description: locale === "ko" ? "뇌-컴퓨터 인터페이스 연구 플랫폼, EEG/EMG 신호 처리, 실시간 분류" : "Brain-computer interface research platform with EEG/EMG signal processing and real-time classification" },
        { name: "웨어러블 재활기기", description: locale === "ko" ? "EMG 기반 상지 재활 보조 장치, 능동형 보조 알고리즘 탑재" : "EMG-based upper limb rehabilitation assist device with active assist algorithm" },
        { name: "생체신호 측정시스템", description: locale === "ko" ? "다채널 EMG/EEG 측정 및 분석 시스템, 실시간 모니터링" : "Multi-channel EMG/EEG measurement and analysis system with real-time monitoring" },
      ]}
      icon="💪"
      color="bg-gradient-to-br from-green-900 to-green-700"
    />
  );
}
