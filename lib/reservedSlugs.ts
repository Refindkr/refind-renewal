// 공지사항/카드뉴스 flat URL(/notice1, /card1 ...)과 겹치면 안 되는 루트 경로 목록.
// middleware.ts(라우팅)와 app/api/notice, app/api/card-news(생성 시 검증)가 함께 참조한다.
export const RESERVED_ROOT_SEGMENTS = new Set([
  "about",
  "products",
  "inquiry",
  "notice",
  "card-news",
  "auth",
  "admin",
  "post",
  "api",
]);

export function isReservedSlug(slug: string): boolean {
  return RESERVED_ROOT_SEGMENTS.has(slug);
}

const SLUG_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,48}[a-z0-9])?$/;

export function isValidSlugFormat(slug: string): boolean {
  return SLUG_PATTERN.test(slug);
}
