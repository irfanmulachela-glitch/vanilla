import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      // Allow AI crawlers for better AI visibility
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "OAI-SearchBot"],
        allow: "/",
      },
    ],
    sitemap: "https://pentapelitasemesta.id/sitemap.xml",
  };
}
