import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { stripHtml } from "@/lib/html";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import DeleteButton from "@/components/ui/DeleteButton";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// 리치 텍스트 에디터 출력 + 네이버 블로그 등에서 붙여넣은 서식을 최대한 보존하면서 위험한 태그만 제거
const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    "img",
    "h1",
    "h2",
    "span",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "u",
    "s",
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    "*": ["style", "class"],
    img: ["src", "alt", "width", "height"],
    a: ["href", "target", "rel"],
  },
  allowedSchemes: ["http", "https", "data"],
};

async function findPost(slug: string) {
  const [notice, cardNews] = await Promise.all([
    prisma.notice.findUnique({ where: { slug } }),
    prisma.cardNews.findUnique({ where: { slug } }),
  ]);

  if (notice) return { type: "notice" as const, post: notice };
  if (cardNews) return { type: "cardNews" as const, post: cardNews };
  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await findPost(slug);
  if (!result) return {};

  const { post } = result;
  const description = stripHtml(post.content).slice(0, 100);
  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.thumbnail ? [post.thumbnail] : undefined,
    },
  };
}

export default async function FlatPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const result = await findPost(slug);

  if (!result) notFound();

  const { type, post } = result;
  const listHref = type === "notice" ? "/ko/notice" : "/ko/card-news";
  const listLabel = type === "notice" ? "공지사항 목록" : "카드뉴스 목록";

  const session = await getServerSession(authOptions);
  const isAdmin = (session?.user as { role?: string })?.role === "admin";
  const editHref =
    type === "notice"
      ? `/${locale}/admin/notice/${post.id}/edit`
      : `/${locale}/admin/card-news/${post.id}/edit`;
  const apiPath = type === "notice" ? `/api/notice/${post.id}` : `/api/card-news/${post.id}`;

  return (
    <div className="pt-16 min-h-screen bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Refind Inc.
          </p>
          <h1 className="text-3xl font-bold text-white whitespace-pre-line">{post.title}</h1>
          <p className="text-gray-400 text-sm mt-3">
            {new Date(post.createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <Link
              href={listHref}
              className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {listLabel}
            </Link>
            {isAdmin && (
              <div className="flex items-center gap-2">
                <Link
                  href={editHref}
                  className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors border border-primary-200 rounded-full px-4 py-1.5"
                >
                  수정
                </Link>
                <DeleteButton
                  apiPath={apiPath}
                  confirmMessage={`"${post.title}"을 삭제하시겠습니까? 되돌릴 수 없습니다.`}
                  redirectTo={listHref}
                  className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-red-500 transition-colors border border-gray-200 rounded-full px-4 py-1.5"
                />
              </div>
            )}
          </div>

          {post.thumbnail && (
            <div className="relative w-full max-h-[480px] aspect-video mb-8 rounded-2xl overflow-hidden bg-gray-100">
              <Image src={post.thumbnail} alt={post.title} fill className="object-contain" />
            </div>
          )}

          <div
            className="prose prose-sm sm:prose-base max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content, SANITIZE_OPTIONS) }}
          />
        </div>
      </section>
    </div>
  );
}
