import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXTAUTH_URL || "https://products.refind.kr";
const locales = ["ko", "en"];

// 정적 페이지 목록 (locale 제외)
const staticPages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/inquiry", priority: 0.6, changeFrequency: "weekly" },
  { path: "/notice", priority: 0.6, changeFrequency: "weekly" },
  { path: "/card-news", priority: 0.7, changeFrequency: "weekly" },
  // 제품 카테고리
  { path: "/products/robot-hand", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/collaborative-robot", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/humanoid", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/body-enhancement", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/prosthetic", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/physical-ai", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/guohua-robot", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-support", priority: 0.8, changeFrequency: "monthly" },
  // 로봇핸드 상세
  { path: "/products/robot-hand/a001", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/ap001", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/ap002", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/lite", priority: 0.8, changeFrequency: "monthly" },
  // 협동로봇 상세
  { path: "/products/collaborative-robot/realman", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/collaborative-robot/elephant-robotics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/collaborative-robot/myagv", priority: 0.8, changeFrequency: "monthly" },
  // 휴머노이드 상세
  { path: "/products/humanoid/realbot", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/humanoid/embodied-dual-arm", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/humanoid/lifting-platform", priority: 0.8, changeFrequency: "monthly" },
  // 신체증강기기 상세
  { path: "/products/body-enhancement/ore-3000", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/body-enhancement/oyfm-7000", priority: 0.8, changeFrequency: "monthly" },
  // 전자의수 상세
  { path: "/products/prosthetic/ohand", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/prosthetic/ohandlite", priority: 0.8, changeFrequency: "monthly" },
  // 피지컬 AI 상세
  { path: "/products/physical-ai/gforcepro", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/bcibmi", priority: 0.8, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page.path}`])
          ),
        },
      });
    }
  }

  return entries;
}
