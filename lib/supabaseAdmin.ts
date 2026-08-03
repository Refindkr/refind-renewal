import { createClient } from "@supabase/supabase-js";

// service_role 키 사용 — 서버 전용, 절대 클라이언트에 노출하지 말 것
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const POST_IMAGES_BUCKET = "post-images";
