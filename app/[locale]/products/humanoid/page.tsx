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
      ? "리파인 휴머노이드 로봇 제품 라인업. Realbot, Embodied Dual Arm, Lifting Platform, Guohua Robot."
      : "Refind humanoid robot lineup. Realbot, Embodied Dual Arm, Lifting Platform, Guohua Robot.",
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
          name: "Realbot",
          nameEn: "Realbot Humanoid",
          tagline: isKo
            ? "풀바디 휴머노이드 로봇. 고자유도 관절과 정밀 제어로 다양한 작업 수행."
            : "Full-body humanoid robot. High-DOF joints and precise control for diverse task execution.",
          image: "/products/humanoid/realbot.jpeg",
          tags: isKo ? ["풀바디", "고자유도", "정밀제어"] : ["Full-Body", "High-DOF", "Precise Control"],
        },
        {
          slug: "realbot",
          name: isKo ? "Embodied Dual Arm" : "Embodied Dual Arm",
          nameEn: "Embodied Dual Arm Robot",
          tagline: isKo
            ? "양팔 협업 로봇 플랫폼. 복잡한 조작 작업을 위한 최적의 양팔 솔루션."
            : "Dual-arm collaborative robot platform. The ideal dual-arm solution for complex manipulation tasks.",
          image: "/products/humanoid/embodied dual arm.jpeg",
          tags: isKo ? ["양팔", "협업", "정밀조작"] : ["Dual-Arm", "Collaborative", "Precision"],
        },
        {
          slug: "realbot",
          name: isKo ? "Lifting Platform" : "Lifting Platform",
          nameEn: "Mobile Lifting Platform",
          tagline: isKo
            ? "이동형 리프팅 플랫폼. 다양한 로봇 팔과 결합해 이동·리프팅 자동화 구현."
            : "Mobile lifting platform. Combine with various robot arms for mobility and lifting automation.",
          image: "/products/humanoid/lifting platform.jpeg",
          tags: isKo ? ["이동형", "리프팅", "모듈형"] : ["Mobile", "Lifting", "Modular"],
        },
        {
          slug: "realbot",
          name: "Guohua Robot",
          nameEn: "Guohua Service Humanoid",
          tagline: isKo
            ? "서비스 특화 휴머노이드. 고객 응대·안내·서비스 업무에 최적화된 플랫폼."
            : "Service-specialized humanoid. Optimized for customer interaction, guidance, and service tasks.",
          image: "/products/humanoid/guohua robot.jpeg",
          tags: isKo ? ["서비스형", "AI 탑재", "친화적"] : ["Service", "AI-Powered", "Friendly"],
        },
      ]}
    />
  );
}
