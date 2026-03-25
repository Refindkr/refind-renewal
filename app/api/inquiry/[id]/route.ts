import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    const userId = (session?.user as { id?: string })?.id;

    const inquiry = await prisma.inquiry.findUnique({
      where: { id },
      include: {
        author: { select: { name: true } },
        answer: { include: { author: { select: { name: true } } } },
      },
    });

    if (!inquiry) return NextResponse.json({ error: "Not found" }, { status: 404 });

    if (inquiry.isPrivate && inquiry.authorId !== userId) {
      const userRole = (session?.user as { role?: string })?.role;
      if (userRole !== "admin") {
        return NextResponse.json({ error: "비공개 게시글입니다" }, { status: 403 });
      }
    }

    return NextResponse.json(inquiry);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
