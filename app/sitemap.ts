import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const BASE_URL = process.env.NEXTAUTH_URL || "https://products.refind.kr";
const locales = ["ko", "en"];
// 한국어(기본 언어)는 URL 접두사 없음, 영어는 /eng
const localePrefix: Record<string, string> = { ko: "", en: "/eng" };

// 정적 페이지 목록 (locale 제외)
const staticPages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/notice", priority: 0.6, changeFrequency: "weekly" },
  { path: "/card-news", priority: 0.7, changeFrequency: "weekly" },
  // 제품 카테고리
  { path: "/products/physical-ai", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/robot-hand", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/collaborative-robot", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/humanoid", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/body-enhancement", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/prosthetic", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/robot-support", priority: 0.8, changeFrequency: "monthly" },
  // 로봇핸드 상세
  { path: "/products/robot-hand/a002", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/ap001", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/ap002", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/ap003", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/lite", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-hand/motion-capture-glove", priority: 0.7, changeFrequency: "monthly" },
  // 협동로봇 상세
  { path: "/products/collaborative-robot/realman/rm65-75", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/collaborative-robot/realman/rml63", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/collaborative-robot/realman/eco", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/avr-amr", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/avr-amr/myagv", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/avr-amr/mobile-chassis", priority: 0.8, changeFrequency: "monthly" },
  // 로봇보조기 상세
  { path: "/products/robot-support/hybridex", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robot-support/step-booster", priority: 0.8, changeFrequency: "monthly" },
  // 휴머노이드 상세
  { path: "/products/humanoid/realman", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products/humanoid/realbot", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/humanoid/realbot-l2", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products/humanoid/realbot-01", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products/humanoid/embodied-dual-arm", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/humanoid/lifting-platform", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/humanoid/robot-arm", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products/humanoid/robot-arm/rx75", priority: 0.6, changeFrequency: "monthly" },
  { path: "/products/humanoid/robot-arm/rx75s", priority: 0.6, changeFrequency: "monthly" },
  { path: "/products/humanoid/robot-arm/rx75-vision", priority: 0.6, changeFrequency: "monthly" },
  { path: "/products/humanoid/robot-arm/rx71", priority: 0.6, changeFrequency: "monthly" },
  // 전자의수 상세
  { path: "/products/prosthetic/ohand", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/prosthetic/ohand-s001", priority: 0.6, changeFrequency: "monthly" },
  { path: "/products/prosthetic/ohandlite", priority: 0.8, changeFrequency: "monthly" },
  // 피지컬 AI 상세
  { path: "/products/physical-ai/actuator", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/platform", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/platform/dual-arm", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/platform/teleoperation-kit", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/bcibmi", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/eeg", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/gforcepro", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/physical-ai/tashan", priority: 0.8, changeFrequency: "monthly" },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}${localePrefix[locale]}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}${localePrefix[l]}${page.path}`])
          ),
        },
      });
    }
  }

  // 공지사항·카드뉴스 개별 게시글은 locale 접두사 없는 flat URL(/<slug>)이라
  // 언어 대체(alternates) 없이 페이지당 하나씩만 등록
  const [notices, cardNewsList] = await Promise.all([
    prisma.notice.findMany({ select: { slug: true, updatedAt: true } }),
    prisma.cardNews.findMany({ select: { slug: true, updatedAt: true } }),
  ]);

  for (const post of [...notices, ...cardNewsList]) {
    entries.push({
      url: `${BASE_URL}/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
