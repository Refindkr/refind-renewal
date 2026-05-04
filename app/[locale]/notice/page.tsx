import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NoticePage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  // 추후 DB 연동 예정 — 현재는 정적 샘플 데이터
  const notices = [
    {
      id: 1,
      title: isKo ? "리파인주식회사 홈페이지가 새롭게 오픈했습니다." : "Refind Inc. website has been newly launched.",
      date: "2025-05-01",
      important: true,
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Refind Inc.
          </p>
          <h1 className="text-4xl font-bold text-white">
            {isKo ? "공지사항" : "Notice"}
          </h1>
        </div>
      </section>

      {/* 목록 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {notices.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              {isKo ? "등록된 공지사항이 없습니다." : "No notices available."}
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="flex items-center gap-4 py-5 hover:bg-gray-50 px-3 rounded-xl transition-colors cursor-pointer"
                >
                  {notice.important && (
                    <span className="shrink-0 px-2 py-0.5 text-[11px] font-bold text-primary-500 bg-primary-50 border border-primary-200 rounded-full">
                      {isKo ? "중요" : "Important"}
                    </span>
                  )}
                  <p className="flex-1 text-sm font-medium text-gray-800">{notice.title}</p>
                  <span className="shrink-0 text-xs text-gray-400">{notice.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
