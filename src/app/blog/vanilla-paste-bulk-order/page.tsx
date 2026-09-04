import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Vanilla Paste Bulk Order: Specifications for Food Manufacturers",
  description:
    "Bulk vanilla paste for food manufacturers. Custom formulations, concentration levels, packaging options, and MOQ. Direct from Indonesian producer.",
  keywords: [
    "vanilla paste bulk",
    "vanilla paste manufacturer",
    "bulk vanilla paste order",
    "vanilla paste supplier",
    "custom vanilla paste",
  ],
  alternates: {
    canonical: "/blog/vanilla-paste-bulk-order",
  },
  openGraph: {
    title: "Vanilla Paste Bulk Order | La Vanilla Supplier",
    description: "Bulk vanilla paste specifications for food manufacturers and B2B buyers.",
    url: `${siteConfig.url}/blog/vanilla-paste-bulk-order`,
    type: "article",
  },
};

export default function VanillaPasteBulkOrder() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Vanilla Paste Bulk Order: Specifications for Food Manufacturers",
              description: "Bulk vanilla paste for food manufacturers with custom formulations.",
              url: `${siteConfig.url}/blog/vanilla-paste-bulk-order`,
              datePublished: "2026-04-12",
              dateModified: "2026-04-12",
              author: {
                "@type": "Person",
                name: "La Vanilla Supplier",
                url: siteConfig.url,
              },
              publisher: {
                "@type": "Organization",
                name: "La Vanilla Supplier",
                url: siteConfig.url,
              },
            },
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Vanilla Paste Bulk Order", url: "/blog/vanilla-paste-bulk-order" },
            ]),
          ]),
        }}
      />

      <section className="bg-[#2C2518] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-[#B5A37A] hover:text-white mb-6 text-sm transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/10 text-[#B5A37A] text-xs font-medium rounded-full border border-white/20 flex items-center gap-1.5">
              <Tag className="w-3 h-3" />
              Product Guide
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-400">
              <Clock className="w-3 h-3" />
              10 min read
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Vanilla Paste Bulk Order: Specifications for Food Manufacturers
          </h1>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              April 12, 2026
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              La Vanilla Supplier
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#6B6358] leading-relaxed mb-8">
            La Vanilla Supplier produces bulk vanilla paste for food manufacturers worldwide. Our paste is made from 100% natural Indonesian vanilla beans with no synthetic additives. This guide covers specifications, custom formulations, and ordering information for B2B buyers.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              What is Vanilla Paste
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Vanilla paste is a concentrated vanilla product made by extracting flavor compounds from vanilla beans and suspending them in a glycerin or sugar base. Unlike vanilla extract, paste contains visible vanilla bean specks and provides a richer flavor profile. Food manufacturers use paste in products where visual appeal and strong vanilla flavor are essential.
            </p>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Product Specifications
            </h2>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">Standard Formulation</h3>
              <ul className="list-disc list-inside text-[#6B6358] space-y-2 pl-4">
                <li>Base: 100% Indonesian Vanilla Beans (V. planifolia)</li>
                <li>Carrier: Food-grade glycerin</li>
                <li>Vanillin content: 1.5-2.5% (customizable)</li>
                <li>Appearance: Dark brown with visible bean specks</li>
                <li>Shelf life: 24 months (unopened)</li>
                <li>Storage: Cool, dry place. Refrigerate after opening.</li>
              </ul>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">Concentration Options</h3>
              <ul className="list-disc list-inside text-[#6B6358] space-y-2 pl-4">
                <li>Standard: 1x concentration — general purpose</li>
                <li>Double: 2x concentration — intense flavor applications</li>
                <li>Triple: 3x concentration — premium products, reduced usage rate</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Custom Formulation
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Food manufacturers often require specific formulations to match their product profiles. We offer custom vanilla paste formulations including:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Adjustable vanillin concentration</li>
              <li>Custom carrier bases (glycerin, propylene glycol, sugar syrup)</li>
              <li>Seed-speck density adjustments</li>
              <li>Flavor profile modifications (bold, smooth, creamy)</li>
              <li>Organic-certified formulations on request</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Packaging Options
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              We package bulk vanilla paste to match your production requirements:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>1 kg jars — small batch production</li>
              <li>5 kg pails — medium scale manufacturing</li>
              <li>10 kg buckets — large scale production</li>
              <li>20 kg drums — industrial applications</li>
              <li>Custom packaging available on request</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Applications
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Bulk vanilla paste is used across multiple food manufacturing sectors:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="font-semibold text-[#2C2518]">Ice Cream & Dairy</p>
                <p className="text-sm text-[#6B6358]">Premium vanilla ice cream, yogurt, custard, puddings</p>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="font-semibold text-[#2C2518]">Bakery & Pastry</p>
                <p className="text-sm text-[#6B6358]">Cakes, cookies, croissants, Danish pastry</p>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="font-semibold text-[#2C2518]">Confectionery</p>
                <p className="text-sm text-[#6B6358]">Chocolate, candy, gummies, marshmallows</p>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="font-semibold text-[#2C2518]">Beverages</p>
                <p className="text-sm text-[#6B6358]">Coffee drinks, smoothies, cocktails, syrups</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              MOQ and Lead Time
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Our MOQ for bulk vanilla paste is 25 kg. Standard lead time is 7-14 days for stock formulations and 21-30 days for custom orders. We ship FOB from Semarang, Jakarta, or Surabaya.
            </p>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Quality Assurance
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Every batch of vanilla paste undergoes quality testing including vanillin content analysis, pH testing, and microbiological screening. Certificate of Analysis is provided with every shipment.
            </p>
          </div>

          <div className="mt-16 p-8 bg-[#F8F6F2] rounded-2xl border border-[#E5E0D8]">
            <h3 className="text-xl font-bold text-[#2C2518] mb-3">
              Need Bulk Vanilla Paste?
            </h3>
            <p className="text-[#6B6358] mb-6">
              Request samples or discuss custom formulations with our team. MOQ 25kg, export to 20+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors">
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/products/vanilla-paste" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] font-semibold rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors">
                View Vanilla Paste
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2C2518] rounded-full flex items-center justify-center">
                <span className="text-[#B5A37A] font-bold">LVS</span>
              </div>
              <div>
                <p className="font-semibold text-[#2C2518]">La Vanilla Supplier</p>
                <p className="text-sm text-[#6B6358]">Premium Indonesian vanilla for B2B buyers</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
