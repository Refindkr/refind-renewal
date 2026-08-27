import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "공지사항" : "Notice",
    description: isKo
      ? "리파인주식회사 공지사항. 제품 업데이트, 회사 소식 등 최신 정보를 확인하세요."
      : "Refind Inc. official notices. Check the latest product updates and company announcements.",
    robots: { index: false },
  };
}

export default async function NoticePage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";

  const session = await getServerSession(authOptions);
  const isAdmin = (session?.user as { role?: string })?.role === "admin";

  const notices = await prisma.notice.findMany({
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
            {isKo ? "공지사항" : "Notice"}
          </h1>
        </div>
      </section>

      {/* 목록 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {isAdmin && (
            <div className="flex justify-end mb-6">
              <Link
                href={`/admin/notice/new`}
                className="px-5 py-2.5 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors text-sm"
              >
                + 글쓰기
              </Link>
            </div>
          )}
          {notices.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              {isKo ? "등록된 공지사항이 없습니다." : "No notices available."}
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notices.map((notice) => (
                <Link
                  key={notice.id}
                  href={`/${notice.slug}`}
                  className="flex items-center gap-4 py-5 hover:bg-gray-50 px-3 rounded-xl transition-colors"
                >
                  <p className="flex-1 text-sm font-medium text-gray-800">{notice.title}</p>
                  <span className="shrink-0 text-xs text-gray-400">
                    {new Date(notice.createdAt).toLocaleDateString("ko-KR")}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
