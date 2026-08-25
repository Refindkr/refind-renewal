import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    const role = (session?.user as { role?: string })?.role;
    if (!session?.user || role !== "admin") {
      return NextResponse.json({ error: "관리자만 수정할 수 있습니다" }, { status: 403 });
    }

    const { id } = await params;
    const { message, href, isActive } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "배너 문구를 입력해주세요" }, { status: 400 });
    }

    const banner = await prisma.topBanner.update({
      where: { id },
      data: {
        message,
        href: href || null,
        isActive: Boolean(isActive),
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    const role = (session?.user as { role?: string })?.role;
    if (!session?.user || role !== "admin") {
      return NextResponse.json({ error: "관리자만 삭제할 수 있습니다" }, { status: 403 });
    }

    const { id } = await params;
    await prisma.topBanner.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
