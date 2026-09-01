import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "How to Choose the Right Vanilla Supplier: 7 Essential Criteria",
  description:
    "Learn the 7 essential criteria for selecting a reliable vanilla supplier. Due diligence checklist for B2B buyers including quality, documentation, and pricing.",
  keywords: [
    "vanilla supplier selection",
    "choosing vanilla supplier",
    "vanilla supplier checklist",
    "B2B vanilla sourcing",
    "vanilla supplier evaluation",
  ],
  alternates: {
    canonical: "/blog/how-to-choose-right-vanilla-supplier",
  },
  openGraph: {
    title: "How to Choose the Right Vanilla Supplier | La Vanilla Supplier",
    description: "7 essential criteria for selecting a reliable vanilla supplier.",
    url: `${siteConfig.url}/blog/how-to-choose-right-vanilla-supplier`,
    type: "article",
  },
};

export default function HowToChooseRightVanillaSupplier() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "How to Choose the Right Vanilla Supplier: 7 Essential Criteria",
              description: "Learn the 7 essential criteria for selecting a reliable vanilla supplier.",
              url: `${siteConfig.url}/blog/how-to-choose-right-vanilla-supplier`,
              datePublished: "2026-03-20",
              dateModified: "2026-03-20",
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
              { name: "How to Choose the Right Vanilla Supplier", url: "/blog/how-to-choose-right-vanilla-supplier" },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="bg-[#2C2518] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#B5A37A] hover:text-white mb-6 text-sm transition-colors"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/10 text-[#B5A37A] text-xs font-medium rounded-full border border-white/20 flex items-center gap-1.5">
              <Tag className="w-3 h-3" />
              Sourcing Guide
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-400">
              <Clock className="w-3 h-3" />
              11 min read
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            How to Choose the Right Vanilla Supplier: 7 Essential Criteria
          </h1>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 20, 2026
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              La Vanilla Supplier
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <p className="text-lg text-[#6B6358] leading-relaxed mb-8">
            La Vanilla Supplier recommends evaluating vanilla suppliers on 7 criteria: quality testing, documentation, MOQ flexibility, pricing transparency, communication, shipping capability, and track record. This checklist helps B2B buyers avoid costly mistakes and build reliable supply partnerships.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Why Supplier Selection Matters
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Choosing the wrong vanilla supplier can cost you months of delays, quality issues, and damaged customer relationships. The vanilla supply chain involves multiple variables — from harvest timing to curing methods to export documentation. A reliable supplier manages these complexities so you do not have to.
            </p>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              The 7 Essential Evaluation Criteria
            </h2>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">
                1. Quality Testing & Documentation
              </h3>
              <p className="text-[#6B6358] leading-relaxed mb-4">
                A reliable supplier provides Certificate of Analysis (CoA) with every shipment. The CoA should include vanillin content (GC testing), moisture percentage, and sensory evaluation notes. Without documentation, you cannot verify what you received.
              </p>
              <p className="text-[#6B6358] leading-relaxed">
                <strong className="text-[#2C2518]">Red flag:</strong> Supplier refuses to provide CoA or charges extra for basic documentation.
              </p>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">
                2. MOQ Flexibility
              </h3>
              <p className="text-[#6B6358] leading-relaxed mb-4">
                Minimum order quantity (MOQ) affects your cash flow and storage requirements. The ideal supplier offers reasonable MOQs for initial orders (25-50 kg) while supporting volume scaling for growth. Rigid high MOQs create risk for new partnerships.
              </p>
              <p className="text-[#6B6358] leading-relaxed">
                <strong className="text-[#2C2518]">What to ask:</strong> Can I start with a trial order? What are the volume pricing tiers?
              </p>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">
                3. Pricing Transparency
              </h3>
              <p className="text-[#6B6358] leading-relaxed mb-4">
                Hidden costs destroy trust. A good supplier provides clear pricing including FOB/CIF terms, packaging costs, and documentation fees. Ask for a complete quote breakdown before committing.
              </p>
              <p className="text-[#6B6358] leading-relaxed">
                <strong className="text-[#2C2518]">Warning sign:</strong> Price seems too good to be true. Low prices often mean lower quality or hidden fees.
              </p>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">
                4. Communication & Responsiveness
              </h3>
              <p className="text-[#6B6358] leading-relaxed mb-4">
                Response time indicates reliability. Test potential suppliers by sending inquiries through multiple channels (email, WhatsApp, contact form). Evaluate how quickly and thoroughly they respond. Slow responses during sales often predict slower responses during issues.
              </p>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">
                5. Shipping Capability
              </h3>
              <p className="text-[#6B6358] leading-relaxed mb-4">
                Verify the supplier offers shipping methods that match your needs: FOB, CIF, or DDP. Check which ports they ship from and confirm experience with your destination country. Import requirements vary — a supplier experienced with your market saves you headaches.
              </p>
              <p className="text-[#6B6358] leading-relaxed">
                <strong className="text-[#2C2518]">Key question:</strong> How many shipments have you completed to [your country]?
              </p>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">
                6. Certifications & Compliance
              </h3>
              <p className="text-[#6B6358] leading-relaxed mb-4">
                Verify certifications relevant to your market: Halal for Middle East, phytosanitary for all exports, organic if required. Certifications should be current and verifiable through issuing bodies.
              </p>
            </div>

            <div className="bg-[#F8F6F2] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#2C2518] mb-4">
                7. Track Record & References
              </h3>
              <p className="text-[#6B6358] leading-relaxed mb-4">
                Ask for references from existing customers, especially those in your industry. Check online presence, reviews, and how long the company has been operating. Established suppliers with long-term customers indicate reliability.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Due Diligence Checklist
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-4">
              Before placing your first order, complete this checklist:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Request and review Certificate of Analysis from recent batches</li>
              <li>Verify company registration and business license</li>
              <li>Check certifications against issuing body databases</li>
              <li>Request sample order (25-50 kg) before bulk commitment</li>
              <li>Confirm payment terms and escrow options for first orders</li>
              <li>Verify shipping experience with your destination country</li>
              <li>Request customer references in your industry</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-6 pl-4">
              <li>Choosing based on price alone (quality suffers)</li>
              <li>Skip sample orders (always test first)</li>
              <li>Ignoring documentation (regulatory risk)</li>
              <li>Not verifying certifications (could be expired or fake)</li>
              <li>Rushing the relationship (build trust gradually)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Conclusion
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Selecting the right vanilla supplier requires careful evaluation across multiple criteria. Use this checklist to systematically assess potential partners. The best supplier relationships are built on transparency, quality, and mutual respect.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-[#F8F6F2] rounded-2xl border border-[#E5E0D8]">
            <h3 className="text-xl font-bold text-[#2C2518] mb-3">
              Looking for a Reliable Vanilla Supplier?
            </h3>
            <p className="text-[#6B6358] mb-6">
              La Vanilla Supplier meets all 7 criteria. We provide quality-tested vanilla beans with full documentation, flexible MOQ, and responsive communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors"
              >
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/quality"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] font-semibold rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
              >
                View Our Standards
              </Link>
            </div>
          </div>

          {/* Author */}
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
