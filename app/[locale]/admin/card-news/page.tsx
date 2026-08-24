import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdminCardNewsPage({ params }: PageProps) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect(`/${locale}/auth/login`);
  }

  const cardNews = await prisma.cardNews.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } },
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <section className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-2">Admin</p>
              <h1 className="text-3xl font-extrabold text-white">카드뉴스 관리</h1>
            </div>
            <div className="flex gap-2">
              <Link href={`/${locale}/admin`} className="text-xs text-white/40 hover:text-white/70 px-3 py-1.5">
                대시보드
              </Link>
              <Link href={`/${locale}/admin/notice`} className="text-xs text-white/40 hover:text-white/70 px-3 py-1.5">
                공지사항 관리
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">총 {cardNews.length}건</p>
          <Link
            href={`/${locale}/admin/card-news/new`}
            className="px-5 py-2.5 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors text-sm"
          >
            + 새 카드뉴스 작성
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500">제목</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-40">슬러그</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-28 hidden md:table-cell">작성자</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-28 hidden lg:table-cell">날짜</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-20">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {cardNews.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-16 text-center text-gray-400">
                    등록된 카드뉴스가 없습니다
                  </td>
                </tr>
              ) : (
                cardNews.map((card) => (
                  <tr key={card.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <Link href={`/${card.slug}`} target="_blank" className="text-gray-900 hover:text-[#E1251B] font-medium">
                        {card.title}
                      </Link>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 font-mono text-xs">/{card.slug}</td>
                    <td className="px-5 py-3.5 text-gray-700 hidden md:table-cell">{card.author.name}</td>
                    <td className="px-5 py-3.5 text-gray-400 hidden lg:table-cell">
                      {new Date(card.createdAt).toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/${locale}/admin/card-news/${card.id}/edit`}
                        className="text-xs font-medium text-gray-500 hover:text-[#E1251B]"
                      >
                        수정
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
