import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { RESERVED_ROOT_SEGMENTS } from "./lib/reservedSlugs";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  // 영어 접두사("eng")는 더 이상 locales 배열의 값과 같지 않으므로 별도로 제외
  const isFlatPostSlug =
    segments.length === 1 &&
    segments[0] !== "eng" &&
    !routing.locales.includes(segments[0] as (typeof routing.locales)[number]) &&
    !RESERVED_ROOT_SEGMENTS.has(segments[0]);

  if (isFlatPostSlug) {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}/post/${segments[0]}`;
    return NextResponse.rewrite(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
