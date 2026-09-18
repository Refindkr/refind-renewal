import { S3Client } from "@aws-sdk/client-s3";

// R2는 S3 호환 API를 제공 — service_role 키와 마찬가지로 서버 전용, 절대 클라이언트에 노출하지 말 것
let client: S3Client | undefined;

export function getR2Client(): S3Client {
  if (!client) {
    client = new S3Client({
      region: "auto",
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
      },
    });
  }
  return client;
}

export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME!;
export const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL!;
