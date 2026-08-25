import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import PostForm from "@/components/ui/PostForm";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function EditNoticePage({ params }: PageProps) {
  const { locale, id } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect(`/${locale}/auth/login`);
  }

  const notice = await prisma.notice.findUnique({ where: { id } });
  if (!notice) {
    notFound();
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">공지사항 수정</h1>
        <PostForm
          locale={locale}
          type="notice"
          mode="edit"
          postId={notice.id}
          initialData={{
            slug: notice.slug,
            title: notice.title,
            content: notice.content,
            thumbnail: notice.thumbnail ?? "",
            isExhibitionBanner: notice.isExhibitionBanner,
            bannerEyebrow: notice.bannerEyebrow ?? "",
            bannerSubtitle: notice.bannerSubtitle ?? "",
            bannerColor: notice.bannerColor ?? "",
          }}
        />
      </div>
    </div>
  );
}
