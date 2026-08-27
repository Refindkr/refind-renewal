import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { redirect } from "@/i18n/navigation";
import PostForm from "@/components/ui/PostForm";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function EditCardNewsPage({ params }: PageProps) {
  const { locale, id } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect({ href: "/auth/login", locale });
  }

  const cardNews = await prisma.cardNews.findUnique({ where: { id } });
  if (!cardNews) {
    notFound();
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">카드뉴스 수정</h1>
        <PostForm
          locale={locale}
          type="cardNews"
          mode="edit"
          postId={cardNews.id}
          initialData={{
            slug: cardNews.slug,
            title: cardNews.title,
            content: cardNews.content,
            thumbnail: cardNews.thumbnail ?? "",
          }}
        />
      </div>
    </div>
  );
}
