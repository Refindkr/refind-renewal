import type { NextConfig } from "next";
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// 기존 노션 사이트(products.refind.kr)에서 구글에 색인된 짧은 슬러그 URL을
// 새 사이트의 실제 페이지로 301(영구) 리다이렉트 — SEO 순위 유지 목적.
// 게시글(공지사항/카드뉴스)의 UUID 슬러그(예: /2e0a2d7f-...)는 이미 그대로
// 유지되는 flat URL 구조라 여기 대상이 아님. 목록은 Google Search Console의
// 색인된 페이지 340개 중 UUID가 아닌 42개를 골라 사용자와 함께 확인한 것.
const legacyRedirects = [
  { source: "/actuator", destination: "/products/physical-ai/actuator" },
  { source: "/avr", destination: "/products/physical-ai/avr-amr" },
  { source: "/bci", destination: "/products/physical-ai/bcibmi" },
  { source: "/collaborativerobot", destination: "/products/collaborative-robot" },
  { source: "/gforcepro", destination: "/products/physical-ai/gforcepro" },
  { source: "/humanoidrobot", destination: "/products/humanoid" },
  { source: "/mobileshassis", destination: "/products/physical-ai/avr-amr/mobile-chassis" },
  { source: "/physicalai", destination: "/products/physical-ai" },
  { source: "/platform", destination: "/products/physical-ai/platform" },
  { source: "/realman", destination: "/products/collaborative-robot" },
  { source: "/robotarm", destination: "/products/humanoid/robot-arm" },
  { source: "/robothand", destination: "/products/robot-hand" },
  { source: "/robothandmotion", destination: "/products/robot-hand/motion-capture-glove" },
  { source: "/robotsupport", destination: "/products/robot-support" },
  { source: "/rohandap002", destination: "/products/robot-hand/ap002" },
  { source: "/rohap001", destination: "/products/robot-hand/ap001" },
  { source: "/rohap001_eng", destination: "/eng/products/robot-hand/ap001" },
  { source: "/tashan", destination: "/products/physical-ai/tashan" },
  { source: "/teleoperationkit", destination: "/products/physical-ai/platform/teleoperation-kit" },
  // 사용자 확인 완료 (원래 애매했던 항목)
  { source: "/rohand", destination: "/products/robot-hand/a002" },
  { source: "/rohand_eng", destination: "/eng/products/robot-hand/a002" },
  { source: "/rohlites001", destination: "/products/robot-hand/lite" },
  { source: "/rohlites001_eng", destination: "/eng/products/robot-hand/lite" },
  { source: "/ohandseries", destination: "/products/prosthetic" },
  { source: "/rehabilitation", destination: "/products/body-enhancement" },
  { source: "/rehabilitationrobot", destination: "/products/body-enhancement" },
  { source: "/liftingplatform", destination: "/products/humanoid/lifting-platform" },
  { source: "/realmanbot", destination: "/products/humanoid/realbot" },
].map((r) => ({ ...r, permanent: true }));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "products.refind.kr" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default withNextIntl(nextConfig);
