import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RobotHandPage({ params }: PageProps) {
  const { locale } = await params;

  const isKo = locale === "ko";

  return (
    <ProductCategoryPage
      locale={locale}
      title={isKo ? "로봇핸드" : "Robot Hand"}
      titleEn="Robot Hand"
      description={
        isKo
          ? "인간의 손을 완벽히 모사한 6자유도 메커니즘. 연구소, 스마트 팩토리, 휴머노이드까지 — 리파인의 로봇핸드로 새로운 자동화의 한계를 개척합니다."
          : "6-DOF mechanism that perfectly replicates human hand motion. From research labs to smart factories and humanoids — push the boundaries of automation with Refind robot hands."
      }
      categorySlug="robot-hand"
      products={[
        {
          slug: "a001",
          name: isKo ? "ROH-A001 (표준형)" : "ROH-A001 (Standard)",
          nameEn: "ROH-A001",
          tagline: isKo
            ? "6자유도 11관절 와이어 구동 시스템. 최대 30kg 파워 그립 구현."
            : "6-DOF 11-joint wire-driven system. Up to 30kg power grip.",
          image: "/products/robot-hand/a002.png",
          tags: isKo ? ["6 DOF", "545g", "RS485"] : ["6 DOF", "545g", "RS485"],
        },
        {
          slug: "ap001",
          name: isKo ? "ROH-AP001 (포스피드백)" : "ROH-AP001 (Force Sensing)",
          nameEn: "ROH-AP001",
          tagline: isKo
            ? "Tashan 내장 포스센서로 실시간 힘 피드백. 정밀 조립·표면가공에 최적."
            : "Tashan integrated force sensor for real-time force feedback. Ideal for precision assembly and surface finishing.",
          image: "/products/robot-hand/ap001.jpeg",
          tags: isKo ? ["포스센서", "150Hz", "640g"] : ["Force Sensor", "150Hz", "640g"],
        },
        {
          slug: "ap002",
          name: isKo ? "ROH-AP002 (고성능 촉각)" : "ROH-AP002 (Tactile Intelligence)",
          nameEn: "ROH-AP002",
          tagline: isKo
            ? "3D 포스센서 + 11×5 팜 매트릭스로 인간 수준의 촉각 데이터 수집."
            : "3D force sensor + 11×5 palm matrix for human-level tactile data acquisition.",
          image: "/products/robot-hand/ap002.jpeg",
          tags: isKo ? ["3D 포스", "팜 매트릭스", "575g"] : ["3D Force", "Palm Matrix", "575g"],
        },
        {
          slug: "lite",
          name: isKo ? "ROH-Lite (보급형)" : "ROH-Lite (Economy)",
          nameEn: "ROH-Lite",
          tagline: isKo
            ? "가성비 6DOF 로봇핸드. 가볍고 빠른 구동으로 입문 연구·교육용 최적."
            : "Cost-effective 6-DOF robot hand. Light and fast — ideal for entry-level research and education.",
          image: "/products/robot-hand/ROhandlite.png",
          tags: isKo ? ["6 DOF", "457g", "보급형"] : ["6 DOF", "457g", "Economy"],
        },
      ]}
    />
  );
}
