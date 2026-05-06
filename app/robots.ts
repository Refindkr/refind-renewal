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
          "/ko/auth/",
          "/en/auth/",
          "/ko/inquiry/new",
          "/en/inquiry/new",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
