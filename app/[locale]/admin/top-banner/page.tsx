import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import DeleteButton from "@/components/ui/DeleteButton";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdminTopBannerPage({ params }: PageProps) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect({ href: "/auth/login", locale });
  }

  const banners = await prisma.topBanner.findMany({
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
              <h1 className="text-3xl font-extrabold text-white">상단 공지 배너 관리</h1>
            </div>
            <div className="flex gap-2">
              <Link href={`/admin`} className="text-xs text-white/40 hover:text-white/70 px-3 py-1.5">
                대시보드
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">총 {banners.length}건 — 사이트 최상단에는 노출(지금 노출) 켜진 것 중 가장 최근 것 하나만 보여집니다</p>
          <Link
            href={`/admin/top-banner/new`}
            className="px-5 py-2.5 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors text-sm"
          >
            + 새 배너 작성
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500">문구</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-24">상태</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-28 hidden md:table-cell">작성자</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-28 hidden lg:table-cell">날짜</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-28">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {banners.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-16 text-center text-gray-400">
                    등록된 배너가 없습니다
                  </td>
                </tr>
              ) : (
                banners.map((banner) => (
                  <tr key={banner.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-gray-900">{banner.message}</td>
                    <td className="px-5 py-3.5">
                      {banner.isActive ? (
                        <span className="text-xs font-semibold text-primary-500 bg-primary-50 px-2 py-0.5 rounded">노출 중</span>
                      ) : (
                        <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded">꺼짐</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-gray-700 hidden md:table-cell">{banner.author.name}</td>
                    <td className="px-5 py-3.5 text-gray-400 hidden lg:table-cell">
                      {new Date(banner.createdAt).toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/admin/top-banner/${banner.id}/edit`}
                          className="text-xs font-medium text-gray-500 hover:text-[#E1251B]"
                        >
                          수정
                        </Link>
                        <DeleteButton apiPath={`/api/top-banner/${banner.id}`} confirmMessage={`"${banner.message}" 배너를 삭제하시겠습니까? 되돌릴 수 없습니다.`} />
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
