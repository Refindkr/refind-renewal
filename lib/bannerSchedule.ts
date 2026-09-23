// Admin datetime-local values are always interpreted in Korea, regardless of browser timezone.
export function parseBannerEnd(value: unknown): Date | null | undefined {
  if (value === null || value === "" || value === undefined) return null;
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) return undefined;
  const date = new Date(`${value}:00+09:00`);
  if (!Number.isFinite(date.getTime()) || toKstInput(date.toISOString()) !== value) return undefined;
  return date;
}

export function toKstInput(value?: string | null): string {
  if (!value) return "";
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "";
  return new Date(date.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 16);
}
