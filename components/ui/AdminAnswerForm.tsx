"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  inquiryId: string;
}

export default function AdminAnswerForm({ inquiryId }: Props) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch(`/api/inquiry/${inquiryId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    if (res.ok) {
      setContent("");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "오류가 발생했습니다");
    }

    setLoading(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-primary-200 overflow-hidden mt-4">
      <div className="p-4 bg-primary-50 border-b border-primary-100">
        <h3 className="font-semibold text-primary-700 text-sm">관리자 답변 작성</h3>
      </div>
      <form onSubmit={handleSubmit} className="p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          placeholder="답변 내용을 입력하세요"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
          required
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-primary-400 text-white text-sm font-medium rounded-xl hover:bg-primary-500 transition-colors disabled:opacity-50"
          >
            {loading ? "등록 중..." : "답변 등록"}
          </button>
        </div>
      </form>
    </div>
  );
}
