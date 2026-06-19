import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string; status?: string }>;
}

export default async function AdminPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { page: pageStr, status } = await searchParams;

  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect(`/${locale}/auth/login`);
  }

  const page = parseInt(pageStr ?? "1");
  const limit = 15;
  const skip = (page - 1) * limit;

  const where = status === "pending"
    ? { answer: null }
    : status === "answered"
    ? { answer: { isNot: null } }
    : {};

  const [inquiries, total, totalInquiries, pendingCount, answeredCount, userCount] = await Promise.all([
    prisma.inquiry.findMany({
      where,
      include: {
        author: { select: { name: true, email: true } },
        answer: { select: { id: true } },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.inquiry.count({ where }),
    prisma.inquiry.count(),
    prisma.inquiry.count({ where: { answer: null } }),
    prisma.inquiry.count({ where: { answer: { isNot: null } } }),
    prisma.user.count(),
  ]);

  const totalPages = Math.ceil(total / limit);

  const stats = [
    { label: "전체 문의", value: totalInquiries, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "답변 대기", value: pendingCount, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "답변 완료", value: answeredCount, color: "text-green-600", bg: "bg-green-50" },
    { label: "전체 회원", value: userCount, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  const categoryMap: Record<string, string> = {
    product: "제품문의",
    purchase: "구매문의",
    as: "A/S",
    partnership: "파트너십",
    other: "기타",
  };

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
            <span className="text-xs text-white/40 bg-white/10 px-3 py-1.5 rounded-full">
              {(session.user as { name?: string })?.name} · 관리자
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{s.label}</p>
              <p className={`text-4xl font-extrabold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { label: "전체", value: "" },
            { label: "답변 대기", value: "pending" },
            { label: "답변 완료", value: "answered" },
          ].map((tab) => (
            <Link
              key={tab.value}
              href={`/${locale}/admin${tab.value ? `?status=${tab.value}` : ""}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                (status ?? "") === tab.value
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {tab.label}
            </Link>
          ))}
          <span className="ml-auto text-sm text-gray-400 flex items-center">총 {total}건</span>
        </div>

        {/* Inquiry Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-10">No</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-24">분류</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500">제목</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-32 hidden md:table-cell">작성자</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-28 hidden lg:table-cell">날짜</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 w-24">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-gray-400">
                    문의가 없습니다
                  </td>
                </tr>
              ) : (
                inquiries.map((inquiry, idx) => (
                  <tr
                    key={inquiry.id}
                    className={`hover:bg-gray-50 transition-colors ${!inquiry.answer ? "border-l-2 border-yellow-400" : ""}`}
                  >
                    <td className="px-5 py-3.5 text-gray-400">{total - skip - idx}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
                        {categoryMap[inquiry.category] ?? inquiry.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/${locale}/inquiry/${inquiry.id}`}
                        className="text-gray-900 hover:text-[#669DFD] transition-colors font-medium flex items-center gap-2"
                      >
                        {inquiry.isPrivate && (
                          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                        {inquiry.subject}
                      </Link>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <div>
                        <p className="text-gray-700 font-medium">{inquiry.author.name}</p>
                        <p className="text-xs text-gray-400">{inquiry.author.email}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 hidden lg:table-cell">
                      {new Date(inquiry.createdAt).toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-5 py-3.5">
                      {inquiry.answer ? (
                        <span className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-full bg-green-50 text-green-600">
                          답변완료
                        </span>
                      ) : (
                        <Link
                          href={`/${locale}/inquiry/${inquiry.id}`}
                          className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-full bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-colors"
                        >
                          답변하기 →
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/${locale}/admin?page=${p}${status ? `&status=${status}` : ""}`}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
