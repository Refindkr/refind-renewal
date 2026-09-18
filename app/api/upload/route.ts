import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getR2Client, R2_BUCKET_NAME, R2_PUBLIC_URL } from "@/lib/r2";

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/gif", "image/webp"];
const MAX_SIZE = 4 * 1024 * 1024; // 4MB — Vercel 서버리스 함수 요청 본문 한도(~4.5MB)보다 여유 있게 설정

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string })?.role;
  if (!session?.user || role !== "admin") {
    return NextResponse.json({ error: "관리자만 업로드할 수 있습니다" }, { status: 403 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "파일이 없습니다" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "png, jpg, gif, webp 이미지만 업로드할 수 있습니다" }, { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "이미지 용량은 4MB 이하만 가능합니다" }, { status: 400 });
  }

  const ext = file.name.split(".").pop() || "jpg";
  const buffer = Buffer.from(await file.arrayBuffer());
  const hash = createHash("sha256").update(buffer).digest("hex");
  const path = `${hash}.${ext}`;

  const r2 = getR2Client();

  // 파일 내용의 해시를 경로로 쓰기 때문에, 이미 같은 내용의 파일이 있으면 굳이 다시 올리지 않고
  // 기존 파일의 URL을 그대로 재사용해 중복 저장을 막는다
  const alreadyExists = await r2
    .send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: path }))
    .then(() => true)
    .catch(() => false);

  if (!alreadyExists) {
    try {
      await r2.send(
        new PutObjectCommand({
          Bucket: R2_BUCKET_NAME,
          Key: path,
          Body: buffer,
          ContentType: file.type,
        })
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "업로드 중 오류가 발생했습니다" }, { status: 500 });
    }
  }

  return NextResponse.json(
    { url: `${R2_PUBLIC_URL}/${path}`, deduplicated: alreadyExists },
    { status: 201 }
  );
}
