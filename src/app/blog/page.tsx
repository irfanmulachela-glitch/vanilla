import { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/config";
import BlogGrid from "@/components/blog-grid";

export const metadata: Metadata = {
  title: "Blog - Vanilla Industry Insights & Guides",
  description:
    "Expert insights on vanilla sourcing, quality testing, export documentation, and market trends. Your guide to the global vanilla trade.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | La Vanilla Supplier",
    description:
      "Expert insights on vanilla sourcing, quality testing, export documentation, and market trends.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const blogPosts = [
  {
    id: "1",
    title: "How to Source High-Quality Vanilla Beans from Indonesia",
    slug: "sourcing-vanilla-beans-indonesia",
    excerpt:
      "A comprehensive guide for B2B buyers on evaluating vanilla bean quality, understanding grades, and finding reliable Indonesian suppliers.",
    category: "Sourcing Guide",
    date: "2026-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "Understanding Vanilla Bean Grading: Grade A vs Grade B",
    slug: "vanilla-bean-grading",
    excerpt:
      "Learn the differences between Grade A gourmet beans and Grade B extraction beans, and which is right for your application.",
    category: "Quality",
    date: "2026-01-10",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Export Documentation Guide: What You Need to Import Vanilla",
    slug: "export-documentation-guide",
    excerpt:
      "Complete guide to phytosanitary certificates, certificate of origin, and other documentation required for vanilla imports.",
    category: "Export Guide",
    date: "2026-01-05",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "Vanilla Paste vs Vanilla Extract: Which Should You Use?",
    slug: "vanilla-paste-vs-extract",
    excerpt:
      "A detailed comparison of vanilla paste and vanilla extract for food manufacturers, including cost analysis and application guide.",
    category: "Product Guide",
    date: "2025-12-28",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Global Vanilla Market Trends 2026",
    slug: "vanilla-market-trends-2026",
    excerpt:
      "Analysis of current vanilla pricing, supply chain dynamics, and forecasts for the coming year.",
    category: "Market Analysis",
    date: "2025-12-20",
    readTime: "12 min read",
  },
  {
    id: "6",
    title: "Food Safety Standards: Why They Matter for Vanilla Buyers",
    slug: "food-safety-standards-vanilla",
    excerpt:
      "Understanding food safety standards and why they're critical for food safety in vanilla processing and export.",
    category: "Quality",
    date: "2025-12-15",
    readTime: "5 min read",
  },
  {
    id: "7",
    title: "Vanilla Bean Prices Indonesia 2026",
    slug: "vanilla-bean-prices-indonesia",
    excerpt:
      "Current wholesale vanilla bean prices from Indonesian suppliers, factors affecting pricing, and how to get the best deals.",
    category: "Market Analysis",
    date: "2025-11-15",
    readTime: "8 min read",
  },
  {
    id: "8",
    title: "Indonesian Vanilla vs Madagascar Vanilla",
    slug: "indonesian-vanilla-vs-madagascar",
    excerpt:
      "Comparing the two largest vanilla origins: flavor profiles, pricing, quality characteristics, and best applications.",
    category: "Product Guide",
    date: "2025-11-01",
    readTime: "9 min read",
  },
  {
    id: "9",
    title: "Finding a Halal Vanilla Supplier",
    slug: "halal-vanilla-supplier",
    excerpt:
      "Guide to sourcing halal-certified vanilla products for Middle Eastern and Muslim-majority markets.",
    category: "Sourcing Guide",
    date: "2025-10-15",
    readTime: "7 min read",
  },
  {
    id: "10",
    title: "How to Store Vanilla Beans: Shelf Life & Best Practices",
    slug: "vanilla-bean-storage-shelf-life",
    excerpt:
      "Learn how to properly store vanilla beans to maximize shelf life, preserve flavor, and maintain quality for food manufacturers and retailers.",
    category: "Quality",
    date: "2026-02-01",
    readTime: "6 min read",
  },
  {
    id: "11",
    title: "Real vs Fake Vanilla Beans: How to Identify Authentic Vanilla",
    slug: "real-vs-fake-vanilla-beans",
    excerpt:
      "A practical guide to identifying genuine vanilla beans from synthetic alternatives, including visual, tactile, and aroma tests.",
    category: "Quality",
    date: "2026-02-08",
    readTime: "7 min read",
  },
  {
    id: "12",
    title: "Bulk Vanilla Ordering Guide for Food Manufacturers",
    slug: "bulk-vanilla-ordering-guide",
    excerpt:
      "Everything food manufacturers need to know about ordering vanilla in bulk — MOQ, logistics, documentation, and cost optimization.",
    category: "Sourcing Guide",
    date: "2026-02-15",
    readTime: "9 min read",
  },
  {
    id: "13",
    title: "Indonesian Vanilla Processing: From Harvest to Export",
    slug: "indonesian-vanilla-processing",
    excerpt:
      "A step-by-step look at how Indonesian vanilla beans are harvested, cured, graded, and prepared for global export.",
    category: "Industry",
    date: "2026-02-22",
    readTime: "8 min read",
  },
  {
    id: "14",
    title: "Why Indonesian Vanilla Is the Best Choice for B2B Buyers",
    slug: "indonesian-vanilla-best-choice",
    excerpt:
      "Discover why Indonesian vanilla offers the best value for B2B buyers — competitive pricing, consistent quality, and reliable supply.",
    category: "Market Analysis",
    date: "2026-03-01",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#2C2518] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center text-[#B5A37A] hover:text-white mb-6 text-sm transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vanilla Industry Insights
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              Expert guides on sourcing, quality, export documentation, and
              market trends. Stay informed about the global vanilla trade.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#B5A37A] rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#B5A37A] uppercase tracking-wider">
                Featured Article
              </span>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-[#F8F6F2] rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white text-[#B5A37A] text-xs font-medium rounded-full border border-[#E5E0D8] flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#6B6358]">
                      <BookOpen className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#2C2518] mb-4 group-hover:text-[#B5A37A] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#6B6358] mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[#6B6358]">
                      <BookOpen className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <span className="text-[#B5A37A] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article
                      <BookOpen className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="bg-[#2C2518] rounded-xl flex items-center justify-center p-8 min-h-[300px]">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-[#B5A37A] mx-auto mb-4" />
                    <p className="text-stone-400 text-sm">Read the full guide</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Interactive Blog Grid */}
      <BlogGrid posts={blogPosts} />

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated on Vanilla Market
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on vanilla pricing, quality trends, and
            export opportunities delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#3D3425] border border-[#4D4435] rounded-xl text-white placeholder-stone-500 focus:ring-2 focus:ring-[#B5A37A] focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#B5A37A] text-white font-semibold rounded-xl hover:bg-[#A8956A] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Vanilla Industry Insights",
            description: "Expert guides on vanilla sourcing and trade",
            url: `${siteConfig.url}/blog`,
          }),
        }}
      />
    </>
  );
}
