"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { stripHtml } from "@/lib/html";

interface CardNewsItem {
  id: string;
  slug: string;
  title: string;
  thumbnail: string | null;
  content: string;
  createdAt: string;
}

interface Props {
  initialCards: CardNewsItem[];
  initialHasMore: boolean;
  isKo: boolean;
}

export default function CardNewsGrid({ initialCards, initialHasMore, isKo }: Props) {
  const [cards, setCards] = useState(initialCards);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    setLoading(true);
    try {
      const res = await fetch(`/api/card-news?skip=${cards.length}`);
      const data = await res.json();
      setCards((prev) => [...prev, ...data.cards]);
      setHasMore(data.hasMore);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-8 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            {loading ? (isKo ? "불러오는 중..." : "Loading...") : isKo ? "더보기" : "Load more"}
          </button>
        </div>
      )}
    </>
  );
}
