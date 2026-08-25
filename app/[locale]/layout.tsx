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

export const metadata: Metadata = {
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
  },
  robots: {
    index: true,
    follow: true,
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
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
    select: { message: true, href: true },
  });

  return (
    <html lang={locale}>
      <head>
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
