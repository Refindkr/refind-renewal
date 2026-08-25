import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import TopBannerForm from "@/components/ui/TopBannerForm";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NewTopBannerPage({ params }: PageProps) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect(`/${locale}/auth/login`);
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">새 상단 배너 작성</h1>
        <TopBannerForm locale={locale} />
      </div>
    </div>
  );
}
