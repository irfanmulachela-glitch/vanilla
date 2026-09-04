import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Halal Certified Vanilla Supplier for Middle East & Global Markets",
  description:
    "Halal certified vanilla beans and paste from Indonesia. MUI certified, compliant with Gulf Cooperation Council standards. Export to UAE, Saudi Arabia, and beyond.",
  keywords: [
    "halal vanilla supplier",
    "halal vanilla beans Indonesia",
    "halal certified vanilla",
    "vanilla supplier Middle East",
    "MUI certified vanilla",
  ],
  alternates: {
    canonical: "/blog/halal-vanilla-supplier-middle-east",
  },
  openGraph: {
    title: "Halal Certified Vanilla Supplier | La Vanilla Supplier",
    description: "Halal certified vanilla beans and paste for Middle East and global markets.",
    url: `${siteConfig.url}/blog/halal-vanilla-supplier-middle-east`,
    type: "article",
  },
};

export default function HalalVanillaSupplierMiddleEast() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Halal Certified Vanilla Supplier for Middle East & Global Markets",
              description: "Halal certified vanilla beans and paste from Indonesia.",
              url: `${siteConfig.url}/blog/halal-vanilla-supplier-middle-east`,
              datePublished: "2026-04-15",
              dateModified: "2026-04-15",
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
              { name: "Halal Vanilla Supplier", url: "/blog/halal-vanilla-supplier-middle-east" },
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
              Market Guide
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-400">
              <Clock className="w-3 h-3" />
              9 min read
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Halal Certified Vanilla Supplier for Middle East & Global Markets
          </h1>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              April 15, 2026
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
            La Vanilla Supplier holds Halal certification from MUI (Majelis Ulama Indonesia) for all vanilla products. This certification is recognized by Gulf Cooperation Council (GCC) countries, making our vanilla beans and paste suitable for food manufacturers serving Muslim consumers worldwide.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Why Halal Certification Matters
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Halal certification ensures that food products meet Islamic dietary laws. For food manufacturers exporting to Middle East, Southeast Asia, or serving Muslim communities globally, Halal certification is often a market requirement. Vanilla used in food products must be Halal certified to access these markets.
            </p>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              MUI Certification
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Our Halal certification is issued by MUI (Majelis Ulama Indonesia), one of the world&apos;s most recognized Halal certification bodies. MUI certification is accepted by:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Gulf Cooperation Council (GCC) countries</li>
              <li>Saudi Arabia</li>
              <li>United Arab Emirates</li>
              <li>Kuwait, Qatar, Bahrain, Oman</li>
              <li>Malaysia and Brunei</li>
              <li>Indonesia</li>
              <li>Singapore</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Products Covered
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Our Halal certification covers all vanilla products:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="font-semibold text-[#2C2518]">Vanilla Beans</p>
                <p className="text-sm text-[#6B6358]">Grade A & B whole beans</p>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="font-semibold text-[#2C2518]">Vanilla Paste</p>
                <p className="text-sm text-[#6B6358]">Standard & custom formulations</p>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="font-semibold text-[#2C2518]">Vanilla Powder</p>
                <p className="text-sm text-[#6B6358]">Spray-dried powder</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Export Documentation for Middle East
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Shipments to Middle East countries include comprehensive documentation:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Halal Certificate (MUI issued)</li>
              <li>Certificate of Origin (legalized by Indonesian chamber of commerce)</li>
              <li>Phytosanitary Certificate</li>
              <li>Health Certificate</li>
              <li>Certificate of Analysis (vanillin content, moisture, microbiology)</li>
              <li>Commercial Invoice and Packing List</li>
              <li>Bill of Lading</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Middle East Market Requirements
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              GCC countries have specific import requirements for food products. Key considerations:
            </p>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>Arabic labeling may be required for retail products</li>
              <li>Shelf life requirements vary by country</li>
              <li>Some countries require additional testing from accredited laboratories</li>
              <li>Import permits may be needed for certain product categories</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Why Choose La Vanilla Supplier for Halal Vanilla
            </h2>
            <ul className="list-disc list-inside text-[#6B6358] space-y-2 mb-8 pl-4">
              <li>MUI Halal certified — recognized globally</li>
              <li>10+ years export experience to Middle East</li>
              <li>Complete documentation for customs clearance</li>
              <li>Flexible MOQ starting at 25 kg</li>
              <li>FOB shipping from Indonesian ports</li>
              <li>Responsive communication in English and Arabic</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2C2518] mt-12 mb-4">
              Getting Started
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-6">
              Contact us to discuss your Halal vanilla requirements. We can provide samples, pricing, and documentation for your specific destination country. Our team understands Middle East import requirements and can guide you through the process.
            </p>
          </div>

          <div className="mt-16 p-8 bg-[#F8F6F2] rounded-2xl border border-[#E5E0D8]">
            <h3 className="text-xl font-bold text-[#2C2518] mb-3">
              Need Halal Certified Vanilla?
            </h3>
            <p className="text-[#6B6358] mb-6">
              MUI Halal certified vanilla beans and paste. Export to Middle East, Southeast Asia, and global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors">
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/quality" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] font-semibold rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors">
                View Certifications
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
