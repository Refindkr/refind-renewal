import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "전자의수" : "Prosthetic Hand",
    description: isKo
      ? "리파인 전자의수 제품 라인업. AI 근전도 제어 지능형 전자의수 — Ohand, OhandLite."
      : "Refind prosthetic hand lineup. AI myoelectric intelligent prosthetic hands — Ohand, OhandLite.",
  };
}

export default async function ProstheticPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "전자의수" : "Prosthetic Hand"}
      titleEn="Prosthetic Hand"
      description={
        isKo
          ? "인공지능 근전도(EMG) 신호로 제어하는 생체 모방형 전자의수. 27가지 동작 패턴과 전용 앱 연동으로 일상생활의 자유를 되찾아드립니다."
          : "AI-powered myoelectric prosthetic hand controlled by EMG signals. With 27 motion patterns and a dedicated app, restore freedom to everyday life."
      }
      categorySlug="prosthetic"
      products={[
        {
          slug: "ohand",
          name: isKo ? "Ohand (AI 전자의수)" : "Ohand (AI Prosthetic)",
          nameEn: "Ohand",
          tagline: isKo
            ? "8채널 EMG + AI 알고리즘으로 27가지 동작 구현. 배터리 12시간 지속."
            : "8-channel EMG + AI algorithm for 27 motion patterns. 12-hour battery life.",
          image: "/products/prosthetic/ohand.png",
          tags: isKo ? ["8채널 EMG", "27동작", "500g", "12h 배터리"] : ["8ch EMG", "27 Motions", "500g", "12h Battery"],
        },
        {
          slug: "ohandlite",
          name: isKo ? "OhandLite (경량형)" : "OhandLite (Lightweight)",
          nameEn: "OhandLite",
          tagline: isKo
            ? "기존 대비 27% 경량화(363.5g). 장시간 착용에 최적화된 2채널 EMG 의수."
            : "27% lighter than standard (363.5g). 2-channel EMG prosthetic optimized for extended wear.",
          image: "/products/prosthetic/ohandlite.png",
          tags: isKo ? ["2채널 EMG", "363.5g", "경량"] : ["2ch EMG", "363.5g", "Lightweight"],
        },
        {
          slug: "ohand-s001",
          name: isKo ? "Ohand S001 (소형)" : "Ohand S001 (Compact)",
          nameEn: "Ohand S001",
          tagline: isKo
            ? "작은 손 크기에 맞춘 소형 전자의수. 5개의 독립 구동 손가락, 최대 30kg 리프팅 하중."
            : "A compact prosthetic hand sized for smaller hands. 5 independently driven fingers, up to 30kg lifting load.",
          image: "/products/prosthetic/ohand-s001.png",
          tags: isKo ? ["EMG 제어", "440g", "소형"] : ["EMG Control", "440g", "Compact"],
        },
      ]}
    />
  );
}
