import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { RESERVED_ROOT_SEGMENTS } from "./lib/reservedSlugs";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  const isFlatPostSlug =
    segments.length === 1 &&
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
