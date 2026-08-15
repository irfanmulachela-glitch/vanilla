import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog - Vanilla Industry Insights & Guides",
  description:
    "Expert insights on vanilla sourcing, quality testing, export documentation, and market trends. Your guide to the global vanilla trade.",
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
    title: "HACCP Certification: Why It Matters for Vanilla Buyers",
    slug: "haccp-certification-vanilla",
    excerpt:
      "Understanding HACCP standards and why they're critical for food safety in vanilla processing and export.",
    category: "Quality",
    date: "2025-12-15",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vanilla Industry Insights
            </h1>
            <p className="text-lg text-emerald-100">
              Expert guides on sourcing, quality, export documentation, and
              market trends. Stay informed about the global vanilla trade.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated on Vanilla Market
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights on vanilla pricing, quality trends, and
            export opportunities delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
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
