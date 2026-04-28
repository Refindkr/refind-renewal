import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BodyEnhancementPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "신체증강기기" : "Body Enhancement"}
      titleEn="Body Enhancement"
      description={
        isKo
          ? "EMG 생체신호 기반의 웨어러블 재활·증강 기기. 뇌졸중, 척수 손상, 근력 약화 환자의 일상 복귀를 돕습니다."
          : "Wearable rehabilitation and enhancement devices based on EMG biosignals. Helping patients with stroke, spinal cord injuries, and muscle weakness return to daily life."
      }
      categorySlug="body-enhancement"
      products={[
        {
          slug: "ore-3000",
          name: "ORE-3000",
          nameEn: "ORE-3000 Upper Limb Rehab Robot",
          tagline: isKo
            ? "상지 재활 및 근력 증강을 위한 로봇 운동기. 4채널 EMG 내장, 3가지 운동 모드."
            : "Robotic exercise device for upper limb rehabilitation and strength enhancement. 4-channel EMG, 3 exercise modes.",
          image: "/products/body-enhancement/HDE.jpg",
          tags: isKo ? ["4채널 EMG", "3운동 모드", "무선"] : ["4ch EMG", "3 Exercise Modes", "Wireless"],
        },
        {
          slug: "oyfm-7000",
          name: "OYFM-7000",
          nameEn: "OYFM-7000 Finger Rehabilitation",
          tagline: isKo
            ? "손가락 재활·보조를 위한 경량 외골격. 4채널 EMG로 운동 의도 파악, 0°~70° 운동 범위."
            : "Lightweight exoskeleton for finger rehabilitation and assistance. 4-channel EMG intent detection, 0°–70° range of motion.",
          image: "/products/body-enhancement/HDE.jpg",
          tags: isKo ? ["손가락 재활", "EMG 보조", "경량"] : ["Finger Rehab", "EMG Assist", "Lightweight"],
        },
      ]}
    />
  );
}
