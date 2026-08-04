import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripHtml } from "@/lib/html";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "카드뉴스" : "Card News",
    description: isKo
      ? "리파인의 제품과 기술을 쉽게 소개하는 카드뉴스. 로봇핸드, 전자의수, 협동로봇 등 최신 소식."
      : "Card news introducing Refind products and technology in an easy-to-read format.",
  };
}

export default async function CardNewsPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const session = await getServerSession(authOptions);
  const isAdmin = (session?.user as { role?: string })?.role === "admin";

  const cards = await prisma.cardNews.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Refind Inc.
          </p>
          <h1 className="text-4xl font-bold text-white">
            {isKo ? "카드뉴스" : "Card News"}
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            {isKo
              ? "리파인의 제품과 기술을 쉽게 소개하는 카드뉴스입니다."
              : "Card news that introduces Refind products and technology in an easy-to-read format."}
          </p>
        </div>
      </section>

      {/* 카드 그리드 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {isAdmin && (
            <div className="flex justify-end mb-6">
              <Link
                href={`/${locale}/admin/card-news/new`}
                className="px-5 py-2.5 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors text-sm"
              >
                + 글쓰기
              </Link>
            </div>
          )}
          {cards.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-gray-400 text-sm">
                {isKo ? "등록된 카드뉴스가 없습니다." : "No card news available."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card) => (
                <Link
                  key={card.id}
                  href={`/${card.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="h-52 bg-gray-100 overflow-hidden">
                    {card.thumbnail && (
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2">
                      {new Date(card.createdAt).toLocaleDateString("ko-KR")}
                    </p>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{card.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{stripHtml(card.content)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
