import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Package,
  FileCheck,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Wholesale Vanilla Beans Indonesia | Bulk Vanilla Supplier",
  description:
    "Premium wholesale vanilla beans from Indonesia. Grade A & B beans, vanilla paste, and powder. MOQ 25kg. Direct from source. Export to 20+ countries.",
  keywords: [
    "wholesale vanilla beans",
    "bulk vanilla supplier",
    "vanilla beans Indonesia wholesale",
    "vanilla paste bulk",
    "vanilla powder wholesale",
    "B2B vanilla supplier",
  ],
};

export default function WholesalePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F6F2] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B5A37A]/10 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-[#B5A37A]" />
              <span className="text-sm font-medium text-[#2C2518]">
                Direct from Indonesian Farms
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2518] mb-6">
              Wholesale Vanilla Beans{" "}
              <span className="text-[#B5A37A]">Indonesia</span>
            </h1>
            <p className="text-lg text-[#6B6358] mb-8">
              Premium Indonesian vanilla beans, paste, and powder at wholesale
              prices. Direct from source, no middlemen. MOQ 25kg. Export to 20+
              countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                Get Wholesale Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-12 text-center">
            Why Buy Wholesale from Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: "Direct from Source",
                description:
                  "We work directly with Indonesian farmers. No middlemen, better prices.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assured",
                description:
                  "Every batch tested. Certificate of Analysis with vanillin content provided.",
              },
              {
                icon: FileCheck,
                title: "Complete Documentation",
                description:
                  "Phytosanitary certificate, certificate of origin, and export documents included.",
              },
              {
                icon: Truck,
                title: "Global Shipping",
                description:
                  "FOB Semarang, Jakarta, or Surabaya. Air freight or sea freight options.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-[#F0EDE6] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#B5A37A]" />
                </div>
                <h3 className="text-lg font-bold text-[#2C2518] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B6358] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-12 text-center">
            Wholesale Vanilla Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2C2518] mb-2 group-hover:text-[#B5A37A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#6B6358] mb-4">
                    {product.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 bg-[#F8F6F2] text-[#6B6358] text-xs font-medium rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-[#B5A37A] font-medium">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-12 text-center">
            Wholesale Pricing
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
              <h3 className="text-xl font-bold text-[#2C2518] mb-4">
                Price Factors
              </h3>
              <ul className="space-y-3 text-[#6B6358]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B5A37A] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#2C2518]">Grade:</strong> Grade A
                    (Gourmet) vs Grade B (Extract)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B5A37A] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#2C2518]">Vanillin Content:</strong>{" "}
                    Higher vanillin commands premium pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B5A37A] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#2C2518]">Volume:</strong> Bulk
                    orders (100kg+) receive better pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B5A37A] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#2C2518]">Contract:</strong>{" "}
                    Long-term contracts offer additional discounts
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Buy Wholesale Vanilla?
          </h2>
          <p className="text-[#B5A37A] text-lg mb-8 max-w-2xl mx-auto">
            Get a free sample and quote within 24 hours. Minimum order 25 kg.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg hover:bg-[#F8F6F2] transition-colors"
            >
              Request Free Sample
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-lg hover:bg-[#A8956A] transition-colors"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "La Vanilla Supplier",
            description: "Wholesale vanilla beans supplier from Indonesia",
            url: `${siteConfig.url}/wholesale`,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "150",
              highPrice: "700",
              offerCount: "3",
            },
          }),
        }}
      />
    </>
  );
}
