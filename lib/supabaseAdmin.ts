import { createClient, SupabaseClient } from "@supabase/supabase-js";

// service_role 키 사용 — 서버 전용, 절대 클라이언트에 노출하지 말 것
// 요청 시점에 생성 — 빌드 시 정적 분석(page data collection) 중에 env가 없어도 빌드가 깨지지 않도록 함
let client: SupabaseClient | undefined;

export function getSupabaseAdmin(): SupabaseClient {
  if (!client) {
    client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return client;
}

export const POST_IMAGES_BUCKET = "post-images";
