import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Wholesale Vanilla Beans from Indonesia: B2B Buyer Guide 2026",
  description:
    "Complete guide to buying wholesale vanilla beans from Indonesia. MOQ, grading, FOB shipping, documentation, and pricing for B2B importers and food manufacturers.",
  keywords: [
    "wholesale vanilla beans Indonesia",
    "buy vanilla beans bulk Indonesia",
    "vanilla bean supplier Indonesia",
    "B2B vanilla beans",
    "Indonesian vanilla exporter",
  ],
  alternates: {
    canonical: "/blog/wholesale-vanilla-beans-indonesia",
  },
  openGraph: {
    title: "Wholesale Vanilla Beans from Indonesia | La Vanilla Supplier",
    description: "Complete guide to buying wholesale vanilla beans from Indonesia for B2B buyers.",
    url: `${siteConfig.url}/blog/wholesale-vanilla-beans-indonesia`,
    type: "article",
  },
};

export default function WholesaleVanillaBeansIndonesia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Wholesale Vanilla Beans from Indonesia: B2B Buyer Guide 2026",
              description: "Complete guide to buying wholesale vanilla beans from Indonesia for B2B buyers.",
              url: `${siteConfig.url}/blog/wholesale-vanilla-beans-indonesia`,
              datePublished: "2026-04-10",
              dateModified: "2026-04-10",
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
              { name: "Wholesale Vanilla Beans Indonesia", url: "/blog/wholesale-vanilla-beans-indonesia" },
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
              Wholesale Guide
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-400">
              <Clock className="w-3 h-3" />
              12 min read
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Wholesale Vanilla Beans from Indonesia: B2B Buyer Guide 2026
          </h1>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              April 10, 2026
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
            La Vanilla Supplier exports wholesale vanilla beans from Indonesia to 20+ countries. This guide covers everything B2B buyers need to know: grading systems, MOQ requirements, FOB shipping terms, documentation, and how to evaluate Indonesian vanilla suppliers.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Why Indonesia for Wholesale Vanilla Beans
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Indonesia is the world&apos;s second-largest vanilla producer after Madagascar. Indonesian vanilla beans offer competitive pricing, consistent supply, and distinct flavor profiles prized by food manufacturers worldwide. The country&apos;s tropical climate and generations of farming expertise produce beans with vanillin content ranging from 1.3% to 2.7%.
            </p>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Vanilla Bean Grading: What B2B Buyers Need to Know
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Indonesian vanilla beans are graded by size, moisture content, and appearance. Understanding grading helps you match the right product to your application.
            </p>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">Grade A (Gourmet)</h3>
              <ul className="list-disc list-inside text-[#6B6358] space-y-2 pl-4">
                <li>Bean length: 15-22 cm</li>
                <li>Moisture content: 25-35%</li>
                <li>Use: Premium retail, gourmet cooking, extraction</li>
                <li>Appearance: Dark brown, oily surface, flexible</li>
              </ul>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">Grade B (Extraction)</h3>
              <ul className="list-disc list-inside text-[#6B6358] space-y-2 pl-4">
                <li>Bean length: 10-15 cm</li>
                <li>Moisture content: 15-25%</li>
                <li>Use: Industrial extraction, vanilla paste, flavoring</li>
                <li>Appearance: Darker, drier, may have surface cracks</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              MOQ and Pricing Structure
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Wholesale vanilla bean orders typically require a minimum order quantity (MOQ). At La Vanilla Supplier, our MOQ is 25 kg — low enough for trial orders while supporting volume scaling for established buyers.
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Trial orders: 25-50 kg</li>
              <li>Standard wholesale: 100-500 kg</li>
              <li>Volume contracts: 500+ kg with custom pricing</li>
            </ul>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Pricing is quoted FOB (Free on Board) from Indonesian ports: Semarang, Jakarta, or Surabaya. Contact us for current pricing based on your grade and volume requirements.
            </p>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Shipping and Logistics
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Indonesian vanilla beans ship via major container lines from three primary ports. FOB terms mean you control the shipping from port of origin. We also offer CIF pricing for destinations where we arrange freight.
            </p>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">Documentation Included</h3>
              <ul className="list-disc list-inside text-[#6B6358] space-y-2 pl-4">
                <li>Commercial Invoice</li>
                <li>Packing List</li>
                <li>Certificate of Origin</li>
                <li>Phytosanitary Certificate</li>
                <li>Certificate of Analysis (CoA)</li>
                <li>Bill of Lading</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              How to Evaluate an Indonesian Vanilla Supplier
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Not all Indonesian vanilla suppliers are equal. Key evaluation criteria include:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Quality testing: Vanillin content via GC analysis, moisture testing</li>
              <li>Documentation: Full export documentation with every shipment</li>
              <li>MOQ flexibility: Willingness to start with trial orders</li>
              <li>Communication: Response time and clarity</li>
              <li>Track record: Export experience to your destination country</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Common Applications for Wholesale Vanilla Beans
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              B2B buyers typically purchase vanilla beans for these applications:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Bakeries and pastry production</li>
              <li>Ice cream and dairy manufacturing</li>
              <li>Chocolate and confectionery</li>
              <li>Beverage production</li>
              <li>Vanilla extract and paste manufacturing</li>
              <li>Specialty food products</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Getting Started
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Start by requesting samples to evaluate quality firsthand. Then place a trial order of 25-50 kg before committing to larger volumes. This approach minimizes risk while building a reliable supply relationship.
            </p>
          </div>

          <div className="mt-16 p-8 bg-[#F8F6F2] rounded-2xl border border-[#E5E0D8]">
            <h3 className="text-xl font-bold text-[#2C2518] mb-3">
              Ready to Order Wholesale Vanilla Beans?
            </h3>
            <p className="text-[#6B6358] mb-6">
              La Vanilla Supplier offers Grade A and B vanilla beans with MOQ 25kg. Export to 20+ countries with full documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors">
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] font-semibold rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors">
                View Products
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
