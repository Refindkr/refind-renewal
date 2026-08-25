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

// 기존 노션 사이트(products.refind.kr) 슬러그를 SEO 유지 목적으로 그대로 가져오는 경우가 있어
// 대문자·긴 길이(예: 날짜+해시가 붙은 슬러그)까지 허용한다.
const SLUG_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,198}[A-Za-z0-9])?$/;

export function isValidSlugFormat(slug: string): boolean {
  return SLUG_PATTERN.test(slug);
}
