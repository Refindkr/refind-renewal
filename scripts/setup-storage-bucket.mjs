import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const BUCKET = "post-images";

const { data: buckets, error: listError } = await supabase.storage.listBuckets();
if (listError) {
  console.error("list error", listError);
  process.exit(1);
}

if (buckets.some((b) => b.name === BUCKET)) {
  console.log("bucket already exists");
  process.exit(0);
}

const { error } = await supabase.storage.createBucket(BUCKET, {
  public: true,
  fileSizeLimit: "5MB",
  allowedMimeTypes: ["image/png", "image/jpeg", "image/gif", "image/webp"],
});

if (error) {
  console.error("create error", error);
  process.exit(1);
}

console.log("bucket created:", BUCKET);
