import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "BCI/BMI 생체신호 솔루션" : "BCI/BMI Biosignal Solutions",
    description: isKo
      ? "웨어러블 EEG(NURA/ORION)부터 고해상도 EMG(BioFlex nano 32), GForcePro+까지. 연구급 뇌파·근전도 측정 장비 라인업."
      : "From wearable EEG (NURA/ORION) to high-resolution EMG (BioFlex nano 32) and GForcePro+. Research-grade brainwave and EMG measurement device lineup.",
  };
}

export default async function BCIBMIPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title="BCI/BMI"
      titleEn="BCI / BMI Biosignal Solutions"
      description={
        isKo
          ? "웨어러블 EEG부터 EMG 암밴드까지. 뇌-컴퓨터 인터페이스와 생체신호 측정의 전 라인업을 공급합니다. 실생활 연구, 임상 실험, 로봇 제어까지 아우르는 통합 생체신호 플랫폼."
          : "From wearable EEG to EMG armbands. Full lineup for brain-computer interface and biosignal measurement — covering real-life research, clinical trials, and robot control."
      }
      categorySlug="physical-ai"
      products={[
        {
          slug: "eeg",
          name: isKo ? "Wearable EEG (NURA / ORION)" : "Wearable EEG (NURA / ORION)",
          nameEn: "Wearable EEG",
          tagline: isKo
            ? "일상 착용용 초경량 EEG(NURA)와 정밀 연구용 고밀도 무선 EEG(ORION)로 구성된 뇌파 측정 라인업."
            : "Brainwave measurement lineup combining the ultra-lightweight, daily-wear NURA and the precision, high-density wireless ORION.",
          image: "/products/physical-ai/wearable-eeg.png",
          tags: isKo ? ["1~32채널", "24-bit", "Bluetooth"] : ["1-32ch", "24-bit", "Bluetooth"],
        },
        {
          slug: "gforcepro",
          name: "GForcePro+",
          nameEn: "GForcePro+",
          tagline: isKo
            ? "8채널 건식 EMG + 9축 IMU 암밴드. 최대 16가지 제스처 인식과 SDK로 로봇 제어까지 연동합니다."
            : "8-channel dry EMG + 9-axis IMU armband. Up to 16 gesture recognition patterns with SDK support for robot control integration.",
          image: "/products/physical-ai/gforce.png",
          tags: isKo ? ["8채널 EMG", "9축 IMU", "16 제스처"] : ["8ch EMG", "9-axis IMU", "16 Gestures"],
        },
      ]}
    />
  );
}
