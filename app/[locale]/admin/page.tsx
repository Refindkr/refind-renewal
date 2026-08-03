import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdminPage({ params }: PageProps) {
  const { locale } = await params;

  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect(`/${locale}/auth/login`);
  }

  const [noticeCount, cardNewsCount] = await Promise.all([
    prisma.notice.count(),
    prisma.cardNews.count(),
  ]);

  const stats = [
    { label: "전체 공지사항", value: noticeCount, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "전체 카드뉴스", value: cardNewsCount, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold tracking-[3px] text-[#669DFD] uppercase mb-2">Admin</p>
              <h1 className="text-3xl font-extrabold text-white">관리자 대시보드</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40 bg-white/10 px-3 py-1.5 rounded-full">
                {(session.user as { name?: string })?.name} · 관리자
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{s.label}</p>
              <p className={`text-4xl font-extrabold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Content Management Links */}
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
          <Link
            href={`/${locale}/admin/notice`}
            className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#669DFD] transition-colors">
              공지사항 관리
            </h2>
            <p className="text-sm text-gray-500">공지사항을 작성하고 목록을 관리합니다</p>
          </Link>
          <Link
            href={`/${locale}/admin/card-news`}
            className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#669DFD] transition-colors">
              카드뉴스 관리
            </h2>
            <p className="text-sm text-gray-500">카드뉴스를 작성하고 목록을 관리합니다</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
