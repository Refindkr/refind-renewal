import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isReservedSlug, isValidSlugFormat } from "@/lib/reservedSlugs";

const PAGE_SIZE = 9;

export async function GET(request: NextRequest) {
  const skip = Number(request.nextUrl.searchParams.get("skip")) || 0;
  const take = PAGE_SIZE;

  const [cardNews, total] = await Promise.all([
    prisma.cardNews.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take,
      select: { id: true, slug: true, title: true, thumbnail: true, content: true, createdAt: true },
    }),
    prisma.cardNews.count(),
  ]);

  return NextResponse.json({ cards: cardNews, hasMore: skip + cardNews.length < total });
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const role = (session?.user as { role?: string })?.role;
    if (!session?.user || role !== "admin") {
      return NextResponse.json({ error: "관리자만 작성할 수 있습니다" }, { status: 403 });
    }

    const { slug, title, content, thumbnail } = await request.json();

    if (!slug || !title || !content) {
      return NextResponse.json({ error: "필수 항목을 입력해주세요" }, { status: 400 });
    }

    if (!isValidSlugFormat(slug)) {
      return NextResponse.json(
        { error: "슬러그는 영문, 숫자, 하이픈(-)만 사용할 수 있습니다" },
        { status: 400 }
      );
    }

    if (isReservedSlug(slug)) {
      return NextResponse.json({ error: "사용할 수 없는 슬러그입니다" }, { status: 400 });
    }

    const [existingNotice, existingCardNews] = await Promise.all([
      prisma.notice.findUnique({ where: { slug } }),
      prisma.cardNews.findUnique({ where: { slug } }),
    ]);
    if (existingNotice || existingCardNews) {
      return NextResponse.json({ error: "이미 사용 중인 슬러그입니다" }, { status: 409 });
    }

    const userId = (session.user as { id?: string }).id!;
    const cardNews = await prisma.cardNews.create({
      data: { slug, title, content, thumbnail: thumbnail || null, authorId: userId },
    });

    return NextResponse.json(cardNews, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
