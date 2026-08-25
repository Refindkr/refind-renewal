import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const banners = await prisma.topBanner.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(banners);
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const role = (session?.user as { role?: string })?.role;
    if (!session?.user || role !== "admin") {
      return NextResponse.json({ error: "관리자만 작성할 수 있습니다" }, { status: 403 });
    }

    const { message, href, isActive } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "배너 문구를 입력해주세요" }, { status: 400 });
    }

    const userId = (session.user as { id?: string }).id!;
    const banner = await prisma.topBanner.create({
      data: {
        message,
        href: href || null,
        isActive: Boolean(isActive),
        authorId: userId,
      },
    });

    return NextResponse.json(banner, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
