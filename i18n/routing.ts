import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  // 한국어(기본 언어)는 URL에 접두사를 붙이지 않고, 영어는 /eng를 사용
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      en: "/eng",
    },
  },
  // 쿠키/Accept-Language 기반 자동 언어 감지를 끄고, URL만으로 언어를 결정
  // (접두사 없는 주소는 항상 한국어) — 검색엔진·재방문자 모두에게 URL이 언어를 그대로 나타내야 함
  localeDetection: false,
});
