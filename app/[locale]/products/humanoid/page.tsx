import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "휴머노이드 로봇" : "Humanoid Robot",
    description: isKo
      ? "리파인 휴머노이드 로봇 제품 라인업. REALMAN REALBOT 시리즈, Guohua Robot, 로봇암 RX 시리즈."
      : "Refind humanoid robot lineup. REALMAN REALBOT series, Guohua Robot, Robot Arm RX series.",
  };
}

export default async function HumanoidPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "휴머노이드 로봇" : "Humanoid Robot"}
      titleEn="Humanoid Robot"
      description={
        isKo
          ? "인간의 형태와 움직임을 닮은 차세대 로봇 플랫폼. 서비스·연구·산업 현장에서 인간과 함께 일하는 휴머노이드를 만나보세요."
          : "Next-generation robot platforms modeled on human form and movement. Meet humanoids that work alongside humans in service, research, and industry."
      }
      categorySlug="humanoid"
      products={[
        {
          slug: "realbot",
          name: "REALBOT S2",
          nameEn: "REALMAN REALBOT S2",
          tagline: isKo
            ? "인간과 유사한 형태와 지능을 갖춘 휴머노이드 로봇으로, 자율 학습과 정밀한 동작을 통해 다양한 환경에서 인간과 협력합니다."
            : "Full-body humanoid robot. High-DOF joints and precise control for diverse task execution.",
          image: "/products/humanoid/realbot-s2.png",
          tags: isKo ? ["REALMAN", "풀바디", "고자유도"] : ["REALMAN", "Full-Body", "High-DOF"],
        },
        {
          slug: "realbot-l2",
          name: "REALBOT L2",
          nameEn: "REALMAN REALBOT L2",
          tagline: isKo
            ? "승강 구조와 휠 기반 이동을 결합해 작업 높이를 자유롭게 조절할 수 있는 휴머노이드 로봇으로, 물류·제조·서비스 환경에 유연하게 대응합니다."
            : "A wheeled humanoid with a lifting structure. Adjustable working height, optimized for logistics, warehouse, and factory use.",
          image: "/products/humanoid/realbot-l2.png",
          tags: isKo ? ["REALMAN", "승강형", "17 DOF"] : ["REALMAN", "Lifting", "17 DOF"],
        },
        {
          slug: "realbot-01",
          name: "REALBOT 01",
          nameEn: "REALMAN REALBOT 01",
          tagline: isKo
            ? "모듈형 구조와 휠 기반 이동을 갖춘 연구용 휴머노이드 로봇으로, Embodied AI 연구와 데이터 수집 및 AI 학습에 적합합니다."
            : "A modular-architecture AI humanoid platform optimized for embodied AI research and algorithm development.",
          image: "/products/humanoid/realbot-01.png",
          tags: isKo ? ["REALMAN", "모듈형", "21 DOF"] : ["REALMAN", "Modular", "21 DOF"],
        },
        {
          slug: "embodied-dual-arm",
          name: "Dual arm vertical Lift",
          nameEn: "REALMAN Dual Arm Vertical Lift",
          tagline: isKo
            ? "이동·승강·양팔 작업을 하나의 플랫폼에 통합한 모바일 로봇으로, 제조·물류·검사 등 다양한 작업을 자동화할 수 있습니다."
            : "An industrial mobile robot integrating mobility, lifting, and dual-arm manipulation on one platform, optimized for manufacturing, logistics, and inspection automation.",
          image: "/products/humanoid/embodied dual arm.png",
          tags: isKo ? ["REALMAN", "양팔", "리프팅"] : ["REALMAN", "Dual-Arm", "Lifting"],
        },
        {
          slug: "lifting-platform",
          name: "Single arm vertical lift",
          nameEn: "REALMAN Single Arm Vertical Lift",
          tagline: isKo
            ? "자율주행·승강·단일 로봇암을 결합해 다양한 높이의 작업을 수행할 수 있는 모바일 자동화 로봇입니다."
            : "A compact mobile manipulator combining an autonomous platform, lift axis, and single robot arm — optimized for manufacturing, logistics, and inspection.",
          image: "/products/humanoid/lifting platform.png",
          tags: isKo ? ["REALMAN", "이동형", "리프팅"] : ["REALMAN", "Mobile", "Lifting"],
        },
        {
          slug: "robot-arm",
          name: isKo ? "로봇암 (RX 시리즈)" : "Robot Arm (RX Series)",
          nameEn: "Robot Arm RX Series",
          tagline: isKo
            ? "산업 자동화와 Physical AI를 위한 신규 로봇암 라인업."
            : "A new robot arm lineup for industrial automation and Physical AI.",
          image: "/products/humanoid/robot-arm/rx75.png",
          tags: isKo ? ["RX 시리즈", "신규"] : ["RX Series", "New"],
        },
      ]}
    />
  );
}
