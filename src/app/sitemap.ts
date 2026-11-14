import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { isTranslatedPath, languageAlternates } from "@/lib/hreflang";

/**
 * Last-modified dates are real, not `new Date()`:
 * - Static/product/region pages: the last git commit that touched the page
 *   file (checked 2026-11-14; update when a page's content changes).
 * - Blog posts: their publish date (posts are not edited after publishing,
 *   except the merged storage guide, dated the day it was merged).
 */
const LAST_MODIFIED: Record<string, string> = {
  "": "2026-11-10",
  products: "2026-11-10",
  "products/vanilla-beans": "2026-11-10",
  "products/vanilla-paste": "2026-11-10",
  "products/vanilla-powder": "2026-11-10",
  about: "2026-11-10",
  contact: "2026-10-29",
  faq: "2026-11-10",
  blog: "2026-10-29",
  wholesale: "2026-11-10",
  comparison: "2026-11-10",
  "la-vanilla-standard": "2026-11-10",
  "regions/uae": "2026-10-29",
  "regions/australia": "2026-10-29",
  "regions/usa": "2026-10-29",
  "regions/europe": "2026-10-29",
  "blog/sourcing-vanilla-beans-indonesia": "2026-01-15",
  "blog/vanilla-bean-grading": "2026-01-10",
  "blog/export-documentation-guide": "2026-01-05",
  "blog/vanilla-paste-vs-extract": "2025-12-28",
  "blog/vanilla-market-trends-2026": "2025-12-20",
  "blog/food-safety-standards-vanilla": "2025-12-15",
  "blog/vanilla-bean-prices-indonesia": "2025-11-15",
  "blog/indonesian-vanilla-vs-madagascar": "2025-11-01",
  "blog/halal-vanilla-supplier": "2025-10-15",
  "blog/real-vs-fake-vanilla-beans": "2026-02-08",
  "blog/bulk-vanilla-ordering-guide": "2026-02-15",
  "blog/indonesian-vanilla-processing": "2026-02-22",
  "blog/indonesian-vanilla-best-choice": "2026-03-01",
  "blog/wholesale-vanilla-beans-indonesia": "2026-04-10",
  "blog/vanilla-paste-bulk-order": "2026-04-12",
  "blog/how-to-choose-right-vanilla-supplier": "2026-03-20",
  "blog/halal-vanilla-supplier-middle-east": "2026-04-15",
  // Merged 2026-11-14 with vanilla-bean-storage-shelf-life (now redirected).
  "blog/vanilla-bean-storage-best-practices": "2026-11-14",
  "blog/vanilla-bean-quality-testing-methods": "2026-03-15",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const entry = (
    path: string,
    changeFrequency: "weekly" | "monthly",
    priority: number,
  ): MetadataRoute.Sitemap[number] => {
    const lastModified = LAST_MODIFIED[path] ?? "2026-11-10";
    const translated = path === "" || isTranslatedPath(path);
    return {
      url: path ? `${baseUrl}/${path}` : baseUrl,
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
      ...(translated
        ? {
            alternates: {
              languages: Object.fromEntries(
                Object.entries(languageAlternates(path)).map(([lang, href]) => [
                  lang,
                  `${baseUrl}${href}`,
                ]),
              ),
            },
          }
        : {}),
    };
  };

  const staticPages = [
    entry("", "weekly", 1.0),
    entry("products", "weekly", 0.9),
    entry("about", "monthly", 0.7),
    entry("contact", "monthly", 0.8),
    entry("faq", "monthly", 0.7),
    entry("blog", "weekly", 0.8),
    entry("wholesale", "monthly", 0.8),
    entry("comparison", "monthly", 0.7),
    entry("la-vanilla-standard", "monthly", 0.8),
  ];

  const productPages = siteConfig.products.map((product) =>
    entry(`products/${product.slug}`, "weekly", 0.9),
  );

  const regionPages = siteConfig.regions.map((region) =>
    entry(`regions/${region.toLowerCase()}`, "monthly", 0.8),
  );

  const blogSlugs = [
    "sourcing-vanilla-beans-indonesia",
    "vanilla-bean-grading",
    "export-documentation-guide",
    "vanilla-paste-vs-extract",
    "vanilla-market-trends-2026",
    "food-safety-standards-vanilla",
    "vanilla-bean-prices-indonesia",
    "indonesian-vanilla-vs-madagascar",
    "halal-vanilla-supplier",
    "real-vs-fake-vanilla-beans",
    "bulk-vanilla-ordering-guide",
    "indonesian-vanilla-processing",
    "indonesian-vanilla-best-choice",
    "wholesale-vanilla-beans-indonesia",
    "vanilla-paste-bulk-order",
    "how-to-choose-right-vanilla-supplier",
    "halal-vanilla-supplier-middle-east",
    "vanilla-bean-storage-best-practices",
    "vanilla-bean-quality-testing-methods",
  ];

  const blogPages = blogSlugs.map((slug) =>
    entry(`blog/${slug}`, "monthly", 0.7),
  );

  return [...staticPages, ...productPages, ...regionPages, ...blogPages];
}
