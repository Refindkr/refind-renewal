import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXTAUTH_URL || "https://products.refind.kr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/auth/",
          "/eng/auth/",
          "/admin/",
          "/eng/admin/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
