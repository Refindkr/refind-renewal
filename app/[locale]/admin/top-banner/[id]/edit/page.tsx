import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import TopBannerForm from "@/components/ui/TopBannerForm";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function EditTopBannerPage({ params }: PageProps) {
  const { locale, id } = await params;
  const session = await getServerSession(authOptions);
  const userRole = (session?.user as { role?: string })?.role;

  if (!session || userRole !== "admin") {
    redirect(`/${locale}/auth/login`);
  }

  const banner = await prisma.topBanner.findUnique({ where: { id } });
  if (!banner) {
    notFound();
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">상단 배너 수정</h1>
        <TopBannerForm
          locale={locale}
          mode="edit"
          bannerId={banner.id}
          initialData={{
            message: banner.message,
            href: banner.href ?? "",
            isActive: banner.isActive,
          }}
        />
      </div>
    </div>
  );
}
