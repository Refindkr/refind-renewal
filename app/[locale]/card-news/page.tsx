import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import CardNewsGrid from "@/components/ui/CardNewsGrid";

const PAGE_SIZE = 9;

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

  const [cards, total] = await Promise.all([
    prisma.cardNews.findMany({
      orderBy: { createdAt: "desc" },
      take: PAGE_SIZE,
      select: { id: true, slug: true, title: true, thumbnail: true, content: true, createdAt: true },
    }),
    prisma.cardNews.count(),
  ]);

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
                href={`/admin/card-news/new`}
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
            <CardNewsGrid
              initialCards={cards.map((c) => ({ ...c, createdAt: c.createdAt.toISOString() }))}
              initialHasMore={total > cards.length}
              isKo={isKo}
            />
          )}
        </div>
      </section>
    </div>
  );
}
