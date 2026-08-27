"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

interface Banner {
  message: string;
  href: string | null;
}

interface Props {
  banner: Banner | null;
}

const DISMISS_KEY = "topBannerDismissedDate";

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

export default function AnnouncementBar({ banner }: Props) {
  const [visible, setVisible] = useState(!!banner);

  useEffect(() => {
    if (!banner) return;
    if (localStorage.getItem(DISMISS_KEY) === todayString()) {
      setVisible(false);
    }
  }, [banner]);

  if (!banner || !visible) return null;

  const content = (
    <span className="text-sm font-medium text-white truncate">{banner.message}</span>
  );

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-center gap-6 relative">
        {banner.href ? (
          <Link href={banner.href} className="hover:underline">
            {content}
          </Link>
        ) : (
          content
        )}

        <div className="absolute right-6 flex items-center gap-3">
          <label className="hidden sm:flex items-center gap-1.5 text-xs text-white/60 cursor-pointer whitespace-nowrap">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 accent-white"
              onChange={(e) => {
                if (e.target.checked) {
                  localStorage.setItem(DISMISS_KEY, todayString());
                  setVisible(false);
                }
              }}
            />
            오늘 하루 보지 않기
          </label>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="배너 닫기"
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
