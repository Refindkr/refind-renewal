import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ui/ProductCategoryPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "로봇핸드" : "Robot Hand",
    description: isKo
      ? "리파인 로봇핸드 제품 라인업. 6자유도 11관절 와이어 구동 로봇핸드 — ROH-A002, ROH-AP001, ROH-AP002, ROH-Lite."
      : "Refind robot hand product lineup. 6-DOF 11-joint wire-driven robot hands — ROH-A002, ROH-AP001, ROH-AP002, ROH-Lite.",
  };
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
          slug: "a002",
          name: isKo ? "ROH-A002 (표준형)" : "ROH-A002 (Standard)",
          nameEn: "ROH-A002",
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
          image: "/products/robot-hand/ap001.png",
          tags: isKo ? ["포스센서", "150Hz", "640g"] : ["Force Sensor", "150Hz", "640g"],
        },
        {
          slug: "ap002",
          name: isKo ? "ROH-AP002 (고성능 촉각)" : "ROH-AP002 (Tactile Intelligence)",
          nameEn: "ROH-AP002",
          tagline: isKo
            ? "3D 포스센서 + 11×5 팜 매트릭스로 인간 수준의 촉각 데이터 수집."
            : "3D force sensor + 11×5 palm matrix for human-level tactile data acquisition.",
          image: "/products/robot-hand/ap002.png",
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
        {
          slug: "ap003",
          name: isKo ? "ROH-AP003 (자기식 촉각 센서)" : "ROH-AP003 (Magnetic Tactile Sensors)",
          nameEn: "ROH-AP003",
          tagline: isKo
            ? "자기식 촉각 센서로 수직압력·전단력·미끄러짐까지 감지하는 고성능 로봇 핸드."
            : "High-performance robot hand with magnetic tactile sensors detecting normal force, shear force, and slip.",
          image: "/products/robot-hand/ap003/ap003.png",
          tags: isKo ? ["자기식 촉각", "626g", "6-DOF"] : ["Magnetic Tactile", "626g", "6-DOF"],
        },
        {
          slug: "motion-capture-glove",
          name: isKo ? "모션 캡처 글러브" : "Motion Capture Glove",
          nameEn: "Motion Capture Glove",
          tagline: isKo
            ? "손가락·손목 움직임을 실시간으로 인식해 로봇 손을 원격 제어하는 전용 글러브."
            : "A dedicated glove that recognizes finger and wrist motion in real time to remotely control robot hands.",
          image: "/products/robot-hand/motion-capture-glove/motion-capture-glove.png",
          tags: isKo ? ["6 DOF", "BLE 4.2", "원격조작"] : ["6 DOF", "BLE 4.2", "Teleoperation"],
        },
      ]}
    />
  );
}
