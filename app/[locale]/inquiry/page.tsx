import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "문의게시판" : "Inquiry Board",
    description: isKo
      ? "리파인주식회사 문의게시판. 제품 구매, 기술 지원, 파트너십 등 다양한 문의를 남겨주세요."
      : "Refind Inc. inquiry board. Leave inquiries about product purchases, technical support, partnerships, and more.",
    robots: { index: false },
  };
}

export default async function InquiryPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { page: pageStr } = await searchParams;
  const t = await getTranslations("inquiry");
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string })?.id;

  const page = parseInt(pageStr ?? "1");
  const limit = 10;
  const skip = (page - 1) * limit;

  const where = session ? {} : { isPrivate: false };

  const [inquiries, total] = await Promise.all([
    prisma.inquiry.findMany({
      where,
      include: {
        author: { select: { name: true } },
        answer: { select: { id: true } },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.inquiry.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-3">{t("title")}</h1>
          <p className="text-gray-400">{t("description")}</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Actions */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              총 {total}건
            </p>
            {session ? (
              <Link
                href={`/${locale}/inquiry/new`}
                className="px-5 py-2.5 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors text-sm"
              >
                {t("writeButton")}
              </Link>
            ) : (
              <Link
                href={`/${locale}/auth/login`}
                className="px-5 py-2.5 bg-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
              >
                {t("loginRequired")}
              </Link>
            )}
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 w-12">{t("table.no")}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 w-24">{t("table.category")}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">{t("table.title")}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 w-24 hidden sm:table-cell">{t("table.author")}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 w-24 hidden md:table-cell">{t("table.date")}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 w-24">{t("table.status")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-400">
                      등록된 문의가 없습니다
                    </td>
                  </tr>
                ) : (
                  inquiries.map((inquiry, idx) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-500">{total - skip - idx}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-primary-50 text-primary-600">
                          {t(`category.${inquiry.category as "product" | "purchase" | "as" | "partnership" | "other"}`)}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/${locale}/inquiry/${inquiry.id}`}
                          className="text-sm text-gray-900 hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          {inquiry.isPrivate && (
                            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          )}
                          {inquiry.isPrivate && inquiry.authorId !== userId
                            ? "비공개 문의입니다"
                            : inquiry.subject}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 hidden sm:table-cell">
                        {inquiry.author.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400 hidden md:table-cell">
                        {new Date(inquiry.createdAt).toLocaleDateString("ko-KR")}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                          inquiry.answer
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}>
                          {inquiry.answer ? t("status.answered") : t("status.pending")}
                        </span>
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
                  href={`/${locale}/inquiry?page=${p}`}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    p === page
                      ? "bg-primary-400 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {p}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
