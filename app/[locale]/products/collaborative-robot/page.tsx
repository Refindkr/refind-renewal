import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CollaborativeRobotPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "협동로봇" : "Collaborative Robot"}
      titleEn="Collaborative Robot"
      description={
        isKo
          ? "사람과 안전하게 협업하는 차세대 협동로봇 솔루션. 연구·교육·스마트 팩토리까지 다양한 환경에 즉시 도입 가능합니다."
          : "Next-generation collaborative robot solutions that work safely alongside humans. Ready for research, education, and smart factory deployment."
      }
      categorySlug="collaborative-robot"
      products={[
        {
          slug: "realman",
          name: "REALMAN",
          nameEn: "REALMAN Collaborative Robot",
          tagline: isKo
            ? "고정밀 6축 협동로봇. ROS2 지원 및 오픈 SDK 제공으로 연구·산업 즉시 적용."
            : "High-precision 6-axis cobot. ROS2 support and open SDK for instant research and industrial use.",
          image: "/products/collaborative-robot/1.jpeg",
          tags: isKo ? ["6축", "ROS2", "오픈 SDK"] : ["6-Axis", "ROS2", "Open SDK"],
        },
        {
          slug: "realman",
          name: "Elephant Robotics",
          nameEn: "Elephant Robotics",
          tagline: isKo
            ? "컴팩트한 테이블탑 협동로봇. 교육·연구·경량 자동화에 최적화된 플랫폼."
            : "Compact tabletop collaborative robot. Optimized for education, research, and lightweight automation.",
          image: "/products/collaborative-robot/2.jpeg",
          tags: isKo ? ["테이블탑", "경량", "교육용"] : ["Tabletop", "Lightweight", "Education"],
        },
        {
          slug: "realman",
          name: isKo ? "MyAGV (자율이동로봇)" : "MyAGV (Autonomous Mobile Robot)",
          nameEn: "MyAGV",
          tagline: isKo
            ? "자율 이동 로봇 플랫폼. 협동로봇과 결합해 완전 자동화 셀 구성 가능."
            : "Autonomous mobile robot platform. Combine with cobots to build fully automated cells.",
          image: "/products/collaborative-robot/3.jpeg",
          tags: isKo ? ["AMR", "자율이동", "모듈형"] : ["AMR", "Autonomous", "Modular"],
        },
      ]}
    />
  );
}
