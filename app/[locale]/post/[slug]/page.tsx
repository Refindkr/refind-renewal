import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { stripHtml } from "@/lib/html";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

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
  const { slug } = await params;
  const result = await findPost(slug);

  if (!result) notFound();

  const { type, post } = result;
  const listHref = type === "notice" ? "/ko/notice" : "/ko/card-news";
  const listLabel = type === "notice" ? "공지사항 목록" : "카드뉴스 목록";

  return (
    <div className="pt-16 min-h-screen bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Refind Inc.
          </p>
          <h1 className="text-3xl font-bold text-white">{post.title}</h1>
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
          <Link
            href={listHref}
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {listLabel}
          </Link>

          {post.thumbnail && (
            <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden bg-gray-100">
              <Image src={post.thumbnail} alt={post.title} fill className="object-cover" />
            </div>
          )}

          <div
            className="prose prose-sm sm:prose-base max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />
        </div>
      </section>
    </div>
  );
}
