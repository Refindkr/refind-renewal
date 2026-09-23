"use client";

import { toKstInput } from "@/lib/bannerSchedule";

export default function BannerDeadline({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      배너 종료일시 (한국 시간)
      <input type="datetime-local" value={value} onChange={(e) => onChange(e.target.value)} className="block w-full border border-gray-200 rounded-xl px-4 py-3 mt-2" />
    </label>
    <div className="flex gap-3 text-sm">
      <button type="button" onClick={() => onChange(toKstInput(new Date(Date.now() + 3 * 86400000).toISOString()))} className="text-primary-500">지금부터 3일 후</button>
      <button type="button" onClick={() => onChange("")} className="text-gray-500">종료일 없음</button>
    </div>
    <p className="text-xs text-gray-500">비워두면 계속 노출됩니다. 설정한 시각부터 배너만 숨기며 게시글은 유지됩니다.</p>
  </div>;
}
