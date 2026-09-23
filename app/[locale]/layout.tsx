import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import SessionProvider from "@/components/SessionProvider";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// 상대경로 이미지/링크를 절대 URL로 변환할 때 기준이 되는 주소 — 없으면 배포 환경에 따라
// 미리보기 주소(*.vercel.app) 등 엉뚱한 도메인으로 해석될 수 있어 명시적으로 지정
const BASE_URL = process.env.NEXTAUTH_URL || "https://products.refind.kr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Refind | 리파인주식회사",
    template: "%s | Refind 리파인주식회사",
  },
  description: "리파인주식회사 — 로봇핸드, 전자의수, 협동로봇, 휴머노이드 등 첨단 로봇 기술로 장애와 노화의 한계를 극복합니다.",
  keywords: ["리파인", "Refind", "로봇핸드", "전자의수", "협동로봇", "휴머노이드", "촉각센서", "BCI", "재활로봇"],
  authors: [{ name: "리파인주식회사", url: "https://products.refind.kr" }],
  creator: "리파인주식회사",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Refind 리파인주식회사",
    title: "Refind | 리파인주식회사",
    description: "로봇핸드, 전자의수, 협동로봇, 휴머노이드 등 첨단 로봇 기술 솔루션",
    // 페이지별로 별도 openGraph 이미지를 지정하지 않으면 이 기본 이미지가 공유 미리보기에 쓰임
    images: [{ url: "/logo.png", width: 596, height: 253, alt: "Refind 리파인주식회사" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// 검색결과 지식패널·리치 스니펫에 회사 정보(로고, 주소, 연락처)를 노출하기 위한 구조화 데이터
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "리파인주식회사",
  alternateName: "Refind Inc.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "지정면 기업도시로 200",
    addressLocality: "원주시",
    addressRegion: "강원특별자치도",
    addressCountry: "KR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-70-4837-2829",
    email: "refind@refind.kr",
    contactType: "customer service",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ko" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const session = await getServerSession(authOptions);
  const banner = await prisma.topBanner.findFirst({
    where: { isActive: true, OR: [{ endsAt: null }, { endsAt: { gt: new Date() } }] },
    orderBy: { createdAt: "desc" },
    select: { message: true, href: true, endsAt: true },
  });

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SMDRW2E497" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SMDRW2E497');
          `}
        </Script>
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <SessionProvider session={session}>
          <NextIntlClientProvider messages={messages}>
            <SiteHeader locale={locale} banner={banner} />
            <main className="min-h-screen">{children}</main>
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
