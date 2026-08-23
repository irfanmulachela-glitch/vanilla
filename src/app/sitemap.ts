import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/quality`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/wholesale`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/comparison`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const productPages = siteConfig.products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const regionPages = siteConfig.regions.map((region) => ({
    url: `${baseUrl}/regions/${region.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

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
    "vanilla-bean-storage-shelf-life",
    "real-vs-fake-vanilla-beans",
    "bulk-vanilla-ordering-guide",
    "indonesian-vanilla-processing",
    "indonesian-vanilla-best-choice",
  ];

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const supplierPages = [
    { url: `${baseUrl}/suppliers/dubai`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/suppliers/sydney`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/suppliers/new-york`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return [...staticPages, ...productPages, ...regionPages, ...blogPages, ...supplierPages];
}
