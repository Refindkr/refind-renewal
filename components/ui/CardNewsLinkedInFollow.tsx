import { hasLinkedInFollowLink } from "@/lib/linkedinFollow";
import { socialLinks } from "@/lib/socialLinks";

export default function CardNewsLinkedInFollow({ content, locale }: { content: string; locale: string }) {
  if (hasLinkedInFollowLink(content)) return null;
  const isKo = locale === "ko";
  return (
    <aside data-linkedin-follow className="mt-8 border-t border-gray-200 pt-6 text-sm leading-relaxed sm:text-base">
      <p className="text-gray-700">
        {isKo ? "로봇핸드·로봇팔의 실제 시연과 신제품 소식을 받아보세요." : "Get real robot hand and arm demos, plus the latest product news."}
      </p>
      <p className="mt-2">
        <span aria-hidden="true">👉 </span>
        <a href={`${socialLinks.linkedin.replace(/\/+$/, "")}/`} target="_blank" rel="noopener noreferrer"
          aria-label={isKo ? "리파인드 LinkedIn 팔로우 (새 창)" : "Follow REFIND on LinkedIn (opens in a new tab)"}
          className="inline-block py-1 font-medium text-[#0a66c2] underline underline-offset-4 hover:text-[#004182] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          {isKo ? "리파인드 LinkedIn 팔로우" : "Follow REFIND on LinkedIn"}
        </a>
      </p>
    </aside>
  );
}
