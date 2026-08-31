import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      // Allow all AI crawlers for maximum visibility
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "OAI-SearchBot", "Claude-Web", "anthropic-ai", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://www.lavanillasupplier.com/sitemap.xml",
  };
}
