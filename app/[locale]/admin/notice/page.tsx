import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import DeleteButton from "@/components/ui/DeleteButton";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdminNoticePage({ params }: PageProps) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect(`/${locale}/auth/login`);
  }

  const notices = await prisma.notice.findMany({
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
              <h1 className="text-3xl font-extrabold text-white">공지사항 관리</h1>
            </div>
            <div className="flex gap-2">
              <Link href={`/${locale}/admin`} className="text-xs text-white/40 hover:text-white/70 px-3 py-1.5">
                대시보드
              </Link>
              <Link href={`/${locale}/admin/card-news`} className="text-xs text-white/40 hover:text-white/70 px-3 py-1.5">
                카드뉴스 관리
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">총 {notices.length}건</p>
          <Link
            href={`/${locale}/admin/notice/new`}
            className="px-5 py-2.5 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors text-sm"
          >
            + 새 공지사항 작성
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
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-28">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {notices.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-16 text-center text-gray-400">
                    등록된 공지사항이 없습니다
                  </td>
                </tr>
              ) : (
                notices.map((notice) => (
                  <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <Link href={`/${notice.slug}`} target="_blank" className="text-gray-900 hover:text-[#E1251B] font-medium">
                        {notice.title}
                      </Link>
                      {notice.isExhibitionBanner && (
                        <span className="ml-2 text-[10px] font-semibold text-primary-500 bg-primary-50 px-1.5 py-0.5 rounded">
                          전시회 배너
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 font-mono text-xs">/{notice.slug}</td>
                    <td className="px-5 py-3.5 text-gray-700 hidden md:table-cell">{notice.author.name}</td>
                    <td className="px-5 py-3.5 text-gray-400 hidden lg:table-cell">
                      {new Date(notice.createdAt).toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/${locale}/admin/notice/${notice.id}/edit`}
                          className="text-xs font-medium text-gray-500 hover:text-[#E1251B]"
                        >
                          수정
                        </Link>
                        <DeleteButton apiPath={`/api/notice/${notice.id}`} confirmMessage={`"${notice.title}" 공지사항을 삭제하시겠습니까? 되돌릴 수 없습니다.`} />
                      </div>
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
