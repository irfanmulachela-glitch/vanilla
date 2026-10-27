import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { twitterCard, ogImages } from "@/lib/seo";
import BlogGrid from "@/components/blog-grid";

const DESCRIPTION =
  "Expert insights on vanilla sourcing, quality testing, export documentation, and market trends. Practical guides for B2B buyers in the global vanilla trade.";

export const metadata: Metadata = {
  title: "Vanilla Industry Blog & Guides",
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    images: ogImages,
    title: "Vanilla Industry Blog & Guides",
    description: DESCRIPTION,
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: twitterCard("Vanilla Industry Blog & Guides | La Vanilla Supplier", DESCRIPTION),
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
      "Everything food manufacturers need to know about ordering vanilla in bulk — order quantities, logistics, documentation, and cost optimization.",
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
  {
    id: "15",
    title: "Vanilla Bean Quality Testing Methods: Complete Guide for B2B Buyers",
    slug: "vanilla-bean-quality-testing-methods",
    excerpt:
      "Learn the essential quality testing methods for vanilla beans including gas chromatography, moisture analysis, and sensory evaluation.",
    category: "Quality",
    date: "2026-03-15",
    readTime: "10 min read",
  },
  {
    id: "16",
    title: "How to Choose the Right Vanilla Supplier: 7 Essential Criteria",
    slug: "how-to-choose-right-vanilla-supplier",
    excerpt:
      "Learn the 7 essential criteria for selecting a reliable vanilla supplier. Due diligence checklist for B2B buyers.",
    category: "Sourcing Guide",
    date: "2026-03-20",
    readTime: "11 min read",
  },
  {
    id: "17",
    title: "Vanilla Bean Storage Best Practices: Extending Shelf Life for Retailers",
    slug: "vanilla-bean-storage-best-practices",
    excerpt:
      "Learn how to store vanilla beans properly to maximize shelf life, preserve flavor, and maintain quality for retailers.",
    category: "Quality",
    date: "2026-03-25",
    readTime: "8 min read",
  },
  {
    id: "18",
    title: "Wholesale Vanilla Beans Guide",
    slug: "wholesale-vanilla-beans-indonesia",
    excerpt:
      "Complete guide to buying wholesale vanilla beans from Indonesia. Grading, shipping terms, documentation, and pricing for B2B importers and food manufacturers.",
    category: "Sourcing Guide",
    date: "2026-04-10",
    readTime: "12 min read",
  },
  {
    id: "19",
    title: "Vanilla Paste Bulk Order Specs",
    slug: "vanilla-paste-bulk-order",
    excerpt:
      "Bulk vanilla paste for food manufacturers: custom formulations, concentration levels, packaging, and flexible quantities direct from an Indonesian producer.",
    category: "Product Guide",
    date: "2026-04-12",
    readTime: "10 min read",
  },
  {
    id: "20",
    title: "Halal Vanilla Supplier - Middle East",
    slug: "halal-vanilla-supplier-middle-east",
    excerpt:
      "Halal certified vanilla beans and paste from Indonesia. MUI certified and compliant with Gulf standards. Export to UAE, Saudi Arabia, and Middle East markets.",
    category: "Export Guide",
    date: "2026-04-15",
    readTime: "9 min read",
  },
];

const EYEBROW = "text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4";

// Short "start here" path for buyers who are new to sourcing vanilla
const START_HERE: { slug: string; label: string }[] = [
  { slug: "sourcing-vanilla-beans-indonesia", label: "How to source vanilla beans from Indonesia" },
  { slug: "vanilla-bean-grading", label: "Grade A vs Grade B, explained" },
  { slug: "wholesale-vanilla-beans-indonesia", label: "Buying vanilla wholesale" },
];

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const startHere = START_HERE.filter((item) => blogPosts.some((p) => p.slug === item.slug));

  return (
    <>
      {/* Masthead: type-led, no photo (posts have no imagery of their own) */}
      <section className="bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-end">
            <div>
              <p className={EYEBROW}>The La Vanilla Journal</p>
              <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.08] tracking-tight text-[#2C2518] font-[family-name:var(--font-libre)] mb-6">
                <span className="font-bold">Guides for buying vanilla</span>{" "}
                <span className="italic font-normal text-[#8C7A4F]">with confidence</span>
              </h1>
              <p className="text-lg text-[#6B6358] leading-relaxed max-w-lg">
                Plain-English guides on sourcing, grading, documents and pricing, written by our
                team in Java.
              </p>
            </div>

            <nav aria-label="Start here">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-1">Start here</p>
              <ol className="border-b border-[#E5E0D8]">
                {startHere.map((post, i) => (
                  <li key={post.slug} className="border-t border-[#E5E0D8] first:border-t-0">
                    <Link href={`/blog/${post.slug}`} className="group flex items-baseline gap-4 py-4">
                      <span className="font-[family-name:var(--font-libre)] text-lg text-[#B5A37A] tabular-nums">{i + 1}</span>
                      <span className="flex-1 font-medium text-[#2C2518] leading-snug group-hover:text-[#8C7A4F] transition-colors">
                        {post.label}
                      </span>
                      <ArrowRight className="w-4 h-4 shrink-0 self-center text-[#B5A37A] group-hover:translate-x-1 transition-transform rtl:rotate-180" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredPost && (
        <section className="bg-white py-16 lg:py-20" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F2EE]">
                <Image
                  src="/blog-featured-v3.webp"
                  alt="A tied bundle of cured Indonesian vanilla beans"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <p className={EYEBROW}>Featured guide</p>
                <h2
                  id="featured-heading"
                  className="text-3xl lg:text-[2.4rem] font-bold leading-tight text-[#2C2518] mb-5 group-hover:text-[#8C7A4F] transition-colors"
                >
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-[#6B6358] leading-relaxed mb-8">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="inline-flex items-center px-6 py-3 bg-[#2C2518] text-white text-sm font-semibold rounded-lg group-hover:bg-[#3D3425] transition-colors">
                    Read the guide
                    <ArrowRight className="ms-2 w-4 h-4 rtl:rotate-180" />
                  </span>
                  <span className="text-sm text-[#9A9187]">
                    {featuredPost.category} · {featuredPost.readTime} · {formatDate(featuredPost.date)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All articles with topic filter */}
      <BlogGrid posts={blogPosts} />

      {/* Closing CTA: honest alternative to a newsletter we don't send */}
      <section className="py-20 lg:py-24 bg-[#2C2518]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={EYEBROW}>Ask Us Directly</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F6F2] mb-4">
            Have a question these guides don&apos;t answer?
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            Tell us what you make and what you need. We reply within 24 hours, and free samples
            are always available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-[#2C2518] font-semibold rounded-lg hover:bg-[#D4C48A] transition-colors"
            >
              Ask a question
              <ArrowRight className="ms-2 w-5 h-5 rtl:rotate-180" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
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
