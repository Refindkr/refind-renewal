import sanitizeHtml from "sanitize-html";
import { socialLinks } from "@/lib/socialLinks";

export function hasLinkedInFollowLink(content: string): boolean {
  const companyPath = new URL(socialLinks.linkedin).pathname.replace(/\/+$/, "");
  let found = false;
  // Inspect actual anchor text and destination, not source mentions or other companies.
  sanitizeHtml(content, {
    allowedTags: ["a"],
    allowedAttributes: { a: ["href"] },
    exclusiveFilter: (frame) => {
      if (frame.tag !== "a" || !/(팔로우|follow)/i.test(frame.text)) return false;
      try {
        const url = new URL(frame.attribs.href);
        if (["http:", "https:"].includes(url.protocol)
          && ["linkedin.com", "www.linkedin.com"].includes(url.hostname.toLowerCase())
          && url.pathname.replace(/\/+$/, "") === companyPath) found = true;
      } catch { /* A missing or invalid href is not a working follow link. */ }
      return false;
    },
  });
  return found;
}
