import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isReservedSlug, isValidSlugFormat } from "@/lib/reservedSlugs";

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
    const { slug, title, content, thumbnail, isExhibitionBanner, bannerSubtitle } = await request.json();

    if (!slug || !title || !content) {
      return NextResponse.json({ error: "필수 항목을 입력해주세요" }, { status: 400 });
    }

    if (!isValidSlugFormat(slug)) {
      return NextResponse.json(
        { error: "슬러그는 영문 소문자, 숫자, 하이픈(-)만 사용할 수 있습니다" },
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
    if ((existingNotice && existingNotice.id !== id) || existingCardNews) {
      return NextResponse.json({ error: "이미 사용 중인 슬러그입니다" }, { status: 409 });
    }

    const notice = await prisma.notice.update({
      where: { id },
      data: {
        slug,
        title,
        content,
        thumbnail: thumbnail || null,
        isExhibitionBanner: Boolean(isExhibitionBanner),
        bannerSubtitle: bannerSubtitle || null,
      },
    });

    return NextResponse.json(notice);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
