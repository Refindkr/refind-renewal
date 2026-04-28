import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
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
          image: "/products/prosthetic/ohand.jpg",
          tags: isKo ? ["8채널 EMG", "27동작", "500g", "12h 배터리"] : ["8ch EMG", "27 Motions", "500g", "12h Battery"],
        },
        {
          slug: "ohandlite",
          name: isKo ? "OhandLite (경량형)" : "OhandLite (Lightweight)",
          nameEn: "OhandLite",
          tagline: isKo
            ? "기존 대비 27% 경량화(363.5g). 장시간 착용에 최적화된 2채널 EMG 의수."
            : "27% lighter than standard (363.5g). 2-channel EMG prosthetic optimized for extended wear.",
          image: "/products/prosthetic/ohandlite.jpeg",
          tags: isKo ? ["2채널 EMG", "363.5g", "경량"] : ["2ch EMG", "363.5g", "Lightweight"],
        },
      ]}
    />
  );
}
