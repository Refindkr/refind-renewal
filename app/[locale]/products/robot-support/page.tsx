import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "로봇 보조기" : "Robot Support Device",
    description: isKo
      ? "리파인 로봇 보조기 라인업. 하이브리드 상지 보조 로봇 HYBRIDEX, 보행 보조 동력 장치 STEP BOOSTER."
      : "Refind robot support device lineup. HYBRIDEX hybrid upper-limb support robot and STEP BOOSTER gait assist device.",
  };
}

export default async function RobotSupportPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "로봇 보조기" : "Robot Support Device"}
      titleEn="Robotic Exoskeleton"
      description={
        isKo
          ? "장애 및 노화로 인한 신체 기능 저하를 보완하는 웨어러블 로봇 보조기. 상지 기능을 보조하는 HYBRIDEX와 보행을 보조하는 STEP BOOSTER로 일상 복귀와 재활을 돕습니다."
          : "Wearable robot support devices that compensate for physical function loss due to disability or aging. HYBRIDEX assists upper-limb function and STEP BOOSTER assists walking — helping users return to daily life and supporting rehabilitation."
      }
      categorySlug="robot-support"
      products={[
        {
          slug: "hybridex",
          name: "HYBRIDEX",
          nameEn: isKo ? "하이브리드 상지 보조 로봇" : "Hybrid Upper-Limb Support Robot",
          tagline: isKo
            ? "로봇 의수와 기계식 상지 보조기를 융합한 지능형 하이브리드 로봇. EMG 센서와 AI로 사용자 의도를 인식해 손과 팔의 기능을 보조·대체합니다."
            : "An intelligent hybrid robot fusing a robotic hand with a mechanical arm support. Reads user intent via EMG sensors and AI to assist or replace hand and arm function.",
          image: "/products/robot-support/hybridex/hybridex-1.jpg",
          tags: isKo ? ["EMG 제어", "AI 의도 인식", "5~6 자유도"] : ["EMG Control", "AI Intent Recognition", "5-6 DOF"],
        },
        {
          slug: "step-booster",
          name: "STEP BOOSTER",
          nameEn: isKo ? "보행 보조 동력 장치" : "Gait Assist Device",
          tagline: isKo
            ? "기존 다리 보조기(AFO, KAFO 등)에 장착하는 착탈식 휴대용 보조 동력 장치. AI 기반 맞춤형 보조력으로 보행 기능을 향상시킵니다."
            : "A detachable, portable powered assist device that attaches to existing leg orthoses (AFO, KAFO, etc.), improving gait with AI-personalized assistance.",
          image: "/products/robot-support/step-booster/step-booster-unit.png",
          tags: isKo ? ["텐던 구동", "AI 맞춤 보조", "600g 이내"] : ["Tendon-Driven", "AI Personalized", "Under 600g"],
        },
      ]}
    />
  );
}
