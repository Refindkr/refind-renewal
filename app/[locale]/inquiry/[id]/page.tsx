import { getTranslations } from "next-intl/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function InquiryDetailPage({ params }: PageProps) {
  const { locale, id } = await params;
  const t = await getTranslations("inquiry");
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string })?.id;
  const userRole = (session?.user as { role?: string })?.role;

  const inquiry = await prisma.inquiry.findUnique({
    where: { id },
    include: {
      author: { select: { name: true } },
      answer: { include: { author: { select: { name: true } } } },
    },
  });

  if (!inquiry) notFound();

  if (inquiry.isPrivate && inquiry.authorId !== userId && userRole !== "admin") {
    return (
      <div className="pt-32 text-center">
        <p className="text-gray-600 mb-4">비공개 문의입니다</p>
        <Link href={`/${locale}/inquiry`} className="text-primary-400 underline">
          {t("detail.back")}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href={`/${locale}/inquiry`}
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("detail.back")}
        </Link>

        {/* Question */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-4">
          <div className="p-6 border-b border-gray-50">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary-50 text-primary-600">
                {t(`category.${inquiry.category as "product" | "purchase" | "as" | "partnership" | "other"}`)}
              </span>
              <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                inquiry.answer ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"
              }`}>
                {inquiry.answer ? t("status.answered") : t("status.pending")}
              </span>
              {inquiry.isPrivate && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                  비공개
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-900">{inquiry.subject}</h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
              <span>{inquiry.author.name}</span>
              <span>{new Date(inquiry.createdAt).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{inquiry.content}</p>
          </div>
        </div>

        {/* Answer */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-primary-50">
            <h2 className="font-semibold text-primary-700">{t("detail.answer")}</h2>
          </div>
          <div className="p-6">
            {inquiry.answer ? (
              <div>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{inquiry.answer.content}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                  <span>{inquiry.answer.author.name}</span>
                  <span>{new Date(inquiry.answer.createdAt).toLocaleDateString("ko-KR")}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">{t("detail.noAnswer")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
