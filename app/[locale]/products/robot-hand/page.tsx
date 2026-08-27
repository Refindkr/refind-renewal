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
            ? "인간 손과 유사한 6자유도 구조를 기반으로 다양한 손동작을 정밀하게 구현할 수 있는 다관절 로봇 핸드입니다."
            : "6-DOF 11-joint wire-driven system. Up to 30kg power grip.",
          image: "/products/robot-hand/a002.png",
          tags: isKo ? ["6 DOF", "RS485", "545g"] : ["6 DOF", "RS485", "545g"],
        },
        {
          slug: "ap001",
          name: isKo ? "ROH-AP001 (포스 매트릭스 센서)" : "ROH-AP001 (Force Matrix Sensor)",
          nameEn: "ROH-AP001",
          tagline: isKo
            ? "포스 매트릭스 센서를 통해 물체에 가해지는 힘을 실시간으로 감지하고, 상황에 맞는 정밀한 힘 조절이 가능한 로봇 핸드입니다."
            : "Tashan integrated force sensor for real-time force feedback. Ideal for precision assembly and surface finishing.",
          image: "/products/robot-hand/ap001.png",
          tags: isKo ? ["6 DOF", "RS485", "포스 센서"] : ["6 DOF", "RS485", "Force Sensor"],
        },
        {
          slug: "ap002",
          name: isKo ? "ROH-AP002 (3D 촉각 캐패시터 센서)" : "ROH-AP002 (3D Tactile Capacitor Sensor)",
          nameEn: "ROH-AP002",
          tagline: isKo
            ? "3D 촉각 캐패시터 센서와 손바닥 영역의 센서 매트릭스를 통해 힘의 변화를 정밀하게 감지하는 고정밀 로봇 핸드입니다."
            : "3D force sensor + 11×5 palm matrix for human-level tactile data acquisition.",
          image: "/products/robot-hand/ap002.png",
          tags: isKo ? ["6 DOF", "RS485", "3D 촉각 센서"] : ["6 DOF", "RS485", "3D Tactile Sensor"],
        },
        {
          slug: "ap003",
          name: isKo ? "ROH-AP003 (3D 촉각 마그네틱 센서)" : "ROH-AP003 (3D Tactile Magnetic Sensor)",
          nameEn: "ROH-AP003",
          tagline: isKo
            ? "3D 촉각 마그네틱 센서를 통해 섬세한 촉각 정보를 정밀하게 감지하는 고성능 로봇 핸드입니다."
            : "High-performance robot hand with a magnetic tactile sensor that precisely detects delicate tactile information.",
          image: "/products/robot-hand/ap003/ap003.png",
          tags: isKo ? ["6 DOF", "RS485", "마그네틱 촉각"] : ["6 DOF", "RS485", "Magnetic Tactile"],
        },
        {
          slug: "lite",
          name: isKo ? "ROH-Lite (보급형)" : "ROH-Lite (Economy)",
          nameEn: "ROH-Lite",
          tagline: isKo
            ? "가성비 6DOF 로봇핸드. 가볍고 빠른 구동으로 입문 연구·교육용 최적."
            : "Cost-effective 6-DOF robot hand. Light and fast — ideal for entry-level research and education.",
          image: "/products/robot-hand/ROhandlite.png",
          tags: isKo ? ["6 DOF", "RS485", "457g"] : ["6 DOF", "RS485", "457g"],
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
