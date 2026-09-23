-- Additive, rerunnable schema update. Apply before deploying the matching application.
ALTER TABLE "TopBanner" ADD COLUMN IF NOT EXISTS "endsAt" TIMESTAMP(3);
ALTER TABLE "Notice" ADD COLUMN IF NOT EXISTS "bannerEndsAt" TIMESTAMP(3);
ALTER TABLE "Notice" ADD COLUMN IF NOT EXISTS "bannerOrder" INTEGER NOT NULL DEFAULT 1;
