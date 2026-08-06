import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "개인 신체 증강 기기" : "Personal Body Enhancement",
    description: isKo
      ? "리파인 개인 신체 증강 기기 라인업. 전자의수, BCI/BMI 생체신호 솔루션, 로봇 보조기."
      : "Refind personal body enhancement lineup. Prosthetic hands, BCI/BMI biosignal solutions, and robot support devices.",
  };
}

export default async function BodyEnhancementPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "개인 신체 증강 기기" : "Personal Body Enhancement"}
      titleEn="Personal Body Enhancement"
      description={
        isKo
          ? "인공지능 근전도 전자의수부터 뇌파·근전도 생체신호 솔루션, 재활을 돕는 로봇 보조기까지 — 사람의 신체 능력을 보완하고 확장하는 리파인의 솔루션."
          : "From AI myoelectric prosthetic hands to EEG/EMG biosignal solutions and rehabilitation robot support devices — Refind's solutions that supplement and extend human physical capability."
      }
      categorySlug="body-enhancement"
      products={[
        {
          slug: "prosthetic",
          href: `/${locale}/products/prosthetic`,
          name: isKo ? "전자의수" : "Prosthetic Hand",
          nameEn: "Prosthetic Hand",
          tagline: isKo
            ? "인공지능 근전도(EMG) 신호로 제어하는 생체 모방형 전자의수. Ohand, Ohand S001, OhandLite 라인업."
            : "AI-powered myoelectric prosthetic hand controlled by EMG signals. Ohand, Ohand S001, and OhandLite lineup.",
          image: "/products/prosthetic/ohand.jpg",
          tags: isKo ? ["EMG 제어", "27동작", "3종 모델"] : ["EMG Control", "27 Motions", "3 Models"],
        },
        {
          slug: "bcibmi",
          href: `/${locale}/products/physical-ai/eeg`,
          name: "BCI/BMI",
          nameEn: isKo ? "생체신호 솔루션" : "Biosignal Solutions",
          tagline: isKo
            ? "웨어러블 EEG(NURA)부터 고밀도 EEG(ORION)까지 아우르는 뇌-컴퓨터 인터페이스 라인업."
            : "Brain-computer interface lineup covering wearable EEG (NURA) and high-density EEG (ORION).",
          image: "/products/physical-ai/wearable-eeg.jpeg",
          tags: isKo ? ["EEG", "EMG", "BCI/BMI"] : ["EEG", "EMG", "BCI/BMI"],
        },
        {
          slug: "robot-support",
          href: `/${locale}/products/robot-support`,
          name: isKo ? "로봇 보조기" : "Robot Support",
          nameEn: "Robot Support Device",
          tagline: isKo
            ? "장애 및 노화로 인한 신체 기능 저하를 보완하는 웨어러블 로봇 보조기. HYBRIDEX, STEP BOOSTER."
            : "Wearable robot support devices that supplement physical function loss due to disability or aging. HYBRIDEX and STEP BOOSTER.",
          image: "/products/robot-support/hybridex/hybridex-1.jpg",
          tags: isKo ? ["재활", "웨어러블"] : ["Rehabilitation", "Wearable"],
        },
      ]}
    />
  );
}
