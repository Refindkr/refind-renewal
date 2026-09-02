"use client";

import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import type { JSONContent } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";

interface Props {
  content: string;
  onChange: (html: string) => void;
}

// Vercel 서버리스 함수 요청 본문 한도(~4.5MB)보다 여유 있게 설정 — /api/upload와 동일
const MAX_UPLOAD_SIZE = 4 * 1024 * 1024;

// 이미지 삽입 직후 사진 설명을 물어보고, 입력하면 네이버 블로그처럼 사진 바로 아래에
// 표시되는 캡션 문단을 함께 넣어준다 (스타일은 globals.css의 `.prose img + p` 참고).
// 이미지와 캡션을 하나의 insertContent 호출로 함께 넣어야 한다 — 별도의 두 번의 호출로
// 나누면, 빈 에디터(문단 하나만 있는 새 글)에 이미지를 넣을 때 그 이미지가 선택된 상태로
// 남아서 두 번째 호출(캡션 삽입)이 이미지 자체를 캡션 문단으로 덮어써 버리는 문제가 있었음
function insertImageWithCaption(editor: NonNullable<ReturnType<typeof useEditor>>, src: string) {
  const caption = window.prompt("사진 설명을 입력하세요 (사진 아래에 표시됩니다, 생략 가능)", "");
  const content: JSONContent[] = [{ type: "image", attrs: { src, alt: caption || null } }];
  if (caption) {
    content.push({ type: "paragraph", content: [{ type: "text", text: caption }] });
  }
  editor.chain().focus().insertContent(content).run();
}

export default function RichTextEditor({ content, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [toolbarTop, setToolbarTop] = useState(64);

  // 상단 고정 헤더(배너+네비바)의 실제 높이를 추적해 툴바가 그 바로 아래에 딱 붙도록 함 —
  // 배너 유무/줄바꿈에 따라 헤더 높이가 달라지므로 고정값 대신 실측
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const update = () => setToolbarTop(header.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
      Youtube.configure({
        controls: true,
        nocookie: true,
        HTMLAttributes: { class: "rounded-xl" },
      }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[300px] px-4 py-3 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  async function uploadFile(file: File) {
    if (file.size > MAX_UPLOAD_SIZE) {
      setUploadError("이미지 용량은 4MB 이하만 가능합니다");
      return;
    }

    setUploading(true);
    setUploadError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        setUploadError(data.error || "업로드 실패");
        return;
      }
      if (editor) insertImageWithCaption(editor, data.url);
    } catch {
      setUploadError("업로드 중 오류가 발생했습니다");
    } finally {
      setUploading(false);
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
    e.target.value = "";
  }

  if (!editor) return null;

  const btnClass = (active: boolean) =>
    `px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
      active ? "bg-primary-400 text-white" : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="border border-gray-200 rounded-xl">
      <div
        className="sticky z-20 flex flex-wrap items-center gap-1 px-3 py-2 rounded-t-xl border-b border-gray-100 bg-gray-50/95 backdrop-blur-sm shadow-sm"
        style={{ top: toolbarTop }}
      >
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btnClass(editor.isActive("bold"))}>
          굵게
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btnClass(editor.isActive("italic"))}>
          기울임
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btnClass(editor.isActive("heading", { level: 2 }))}>
          제목
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btnClass(editor.isActive("bulletList"))}>
          목록
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btnClass(editor.isActive("orderedList"))}>
          번호 목록
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("링크 URL을 입력하세요");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className={btnClass(editor.isActive("link"))}
        >
          링크
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("유튜브 영상 URL을 입력하세요");
            if (url) editor.commands.setYoutubeVideo({ src: url });
          }}
          className={btnClass(false)}
        >
          유튜브
        </button>
        <span className="w-px h-4 bg-gray-200 mx-1" />
        <button
          type="button"
          onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          className={btnClass(editor.isActive("table"))}
        >
          표
        </button>
        {editor.isActive("table") && (
          <>
            <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()} className={btnClass(false)}>
              행 추가
            </button>
            <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()} className={btnClass(false)}>
              열 추가
            </button>
            <button type="button" onClick={() => editor.chain().focus().deleteRow().run()} className={btnClass(false)}>
              행 삭제
            </button>
            <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()} className={btnClass(false)}>
              열 삭제
            </button>
            <button type="button" onClick={() => editor.chain().focus().deleteTable().run()} className="px-2.5 py-1.5 text-xs font-medium rounded-lg text-red-500 hover:bg-red-50 transition-colors">
              표 삭제
            </button>
          </>
        )}
        <span className="w-px h-4 bg-gray-200 mx-1" />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="px-2.5 py-1.5 text-xs font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          {uploading ? "업로드 중..." : "이미지 업로드"}
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("이미지(GIF 등) URL을 입력하세요");
            if (url) insertImageWithCaption(editor, url);
          }}
          className="px-2.5 py-1.5 text-xs font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          이미지 URL
        </button>
        <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/gif,image/webp" onChange={handleFileSelect} className="hidden" />
      </div>

      {uploadError && <p className="px-3 pt-2 text-xs text-red-500">{uploadError}</p>}

      <div className="rounded-b-xl overflow-hidden">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
