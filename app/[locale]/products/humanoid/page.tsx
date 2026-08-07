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
            ? "풀바디 휴머노이드 로봇. 고자유도 관절과 정밀 제어로 다양한 작업 수행."
            : "Full-body humanoid robot. High-DOF joints and precise control for diverse task execution.",
          image: "/products/humanoid/realbot-s2.png",
          tags: isKo ? ["REALMAN", "풀바디", "고자유도"] : ["REALMAN", "Full-Body", "High-DOF"],
        },
        {
          slug: "realbot-l2",
          name: "REALBOT L2",
          nameEn: "REALMAN REALBOT L2",
          tagline: isKo
            ? "승강 구조의 휠형 휴머노이드. 작업 높이를 자유롭게 조절해 물류·창고·공장에 최적화."
            : "A wheeled humanoid with a lifting structure. Adjustable working height, optimized for logistics, warehouse, and factory use.",
          image: "/products/humanoid/realbot-l2.png",
          tags: isKo ? ["REALMAN", "승강형", "17 DOF"] : ["REALMAN", "Lifting", "17 DOF"],
        },
        {
          slug: "realbot-01",
          name: "REALBOT 01",
          nameEn: "REALMAN REALBOT 01",
          tagline: isKo
            ? "모듈형 아키텍처 기반 AI 휴머노이드 플랫폼. Embodied AI 연구와 알고리즘 개발에 최적화."
            : "A modular-architecture AI humanoid platform optimized for embodied AI research and algorithm development.",
          image: "/products/humanoid/realbot-01.png",
          tags: isKo ? ["REALMAN", "모듈형", "21 DOF"] : ["REALMAN", "Modular", "21 DOF"],
        },
        {
          slug: "embodied-dual-arm",
          name: "Dual arm vertical Lift",
          nameEn: "REALMAN Dual Arm Vertical Lift",
          tagline: isKo
            ? "이동·승강·양팔 작업을 하나의 플랫폼에 통합한 산업용 모바일 로봇. 제조·물류·검사 자동화에 최적."
            : "An industrial mobile robot integrating mobility, lifting, and dual-arm manipulation on one platform, optimized for manufacturing, logistics, and inspection automation.",
          image: "/products/humanoid/embodied dual arm.png",
          tags: isKo ? ["REALMAN", "양팔", "리프팅"] : ["REALMAN", "Dual-Arm", "Lifting"],
        },
        {
          slug: "lifting-platform",
          name: "Single arm vertical lift",
          nameEn: "REALMAN Single Arm Vertical Lift",
          tagline: isKo
            ? "자율주행 플랫폼·승강축·단일 로봇암을 결합한 컴팩트 모바일 매니퓰레이터. 제조·물류·검사에 최적."
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
