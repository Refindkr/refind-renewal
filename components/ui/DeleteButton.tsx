"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  apiPath: string;
  confirmMessage?: string;
  redirectTo?: string;
  className?: string;
}

export default function DeleteButton({
  apiPath,
  confirmMessage = "삭제하시겠습니까? 되돌릴 수 없습니다.",
  redirectTo,
  className,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm(confirmMessage)) return;
    setLoading(true);
    try {
      const res = await fetch(apiPath, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "삭제 중 오류가 발생했습니다");
        return;
      }
      if (redirectTo) {
        router.push(redirectTo);
      } else {
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className={className || "text-xs font-medium text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"}
    >
      {loading ? "삭제 중..." : "삭제"}
    </button>
  );
}
