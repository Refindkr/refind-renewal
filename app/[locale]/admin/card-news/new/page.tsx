import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "@/i18n/navigation";
import PostForm from "@/components/ui/PostForm";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NewCardNewsPage({ params }: PageProps) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect({ href: "/auth/login", locale });
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">새 카드뉴스 작성</h1>
        <PostForm locale={locale} type="cardNews" />
      </div>
    </div>
  );
}
