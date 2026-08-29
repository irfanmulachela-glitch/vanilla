import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Package,
  FileCheck,
  Truck,
  ShieldCheck,
  Clock,
  Tag,
  BarChart3,
  Boxes,
  Handshake,
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
      <section className="relative bg-[#2C2518] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=1600"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Wholesale Vanilla{" "}
              <span className="text-[#B5A37A]">Indonesia</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed mb-8">
              Premium Indonesian vanilla beans, paste, and powder at wholesale
              prices. Direct from source, no middlemen. MOQ 25kg. Export to 20+
              countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg hover:bg-[#F8F6F2] transition-colors"
              >
                Get Wholesale Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-lg hover:bg-[#A8956A] transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#F8F6F2] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25kg", label: "Minimum Order" },
              { value: "20+", label: "Countries Served" },
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Tons Exported" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#B5A37A]">{stat.value}</p>
                <p className="text-sm text-[#6B6358]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Why Buy Wholesale from Us
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              We make B2B vanilla sourcing simple, transparent, and reliable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Package,
                title: "Direct from Source",
                description:
                  "We work directly with Indonesian farmers. No middlemen, better prices.",
                highlight: "No middlemen",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assured",
                description:
                  "Every batch tested. Certificate of Analysis with vanillin content provided.",
                highlight: "Every batch tested",
              },
              {
                icon: FileCheck,
                title: "Complete Documentation",
                description:
                  "Phytosanitary certificate, certificate of origin, and export documents included.",
                highlight: "Full compliance",
              },
              {
                icon: Truck,
                title: "Global Shipping",
                description:
                  "FOB Semarang, Jakarta, or Surabaya. Air freight or sea freight options.",
                highlight: "3 ports available",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 bg-[#F8F6F2] p-6 rounded-2xl border border-[#E5E0D8] hover:border-[#B5A37A]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#2C2518] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#B5A37A] transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#B5A37A] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C2518] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#6B6358] text-sm mb-2">{item.description}</p>
                  <span className="inline-block text-xs font-semibold text-[#B5A37A] bg-[#B5A37A]/10 px-2 py-0.5 rounded">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Wholesale Vanilla Products
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Choose from our range of premium vanilla products. All available
              at wholesale pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2C2518] mb-2 group-hover:text-[#B5A37A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#6B6358] mb-4 text-sm">
                    {product.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 bg-[#F8F6F2] text-[#6B6358] text-xs font-medium rounded border border-[#E5E0D8]"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-[#B5A37A] font-medium text-sm">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              From inquiry to delivery — a simple, transparent process.
            </p>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-[#E5E0D8]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B5A37A]/0 via-[#B5A37A] to-[#B5A37A]/0" />
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Request Quote",
                  description: "Tell us your product, quantity, and destination.",
                },
                {
                  step: "02",
                  title: "Get Pricing",
                  description: "We send a detailed quote within 24 hours.",
                },
                {
                  step: "03",
                  title: "Confirm Order",
                  description: "Approve and we begin processing your order.",
                },
                {
                  step: "04",
                  title: "Receive Delivery",
                  description: "Your vanilla ships with full documentation.",
                },
              ].map((item, index) => (
                <div key={item.step} className="text-center relative">
                  {/* Step circle */}
                  <div className="relative z-10 w-20 h-20 bg-[#2C2518] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-[#B5A37A]">
                      {item.step}
                    </span>
                  </div>
                  {/* Content card */}
                  <div className="bg-[#F8F6F2] rounded-xl p-5 border border-[#E5E0D8] hover:border-[#B5A37A]/50 transition-colors">
                    <h3 className="font-bold text-[#2C2518] mb-2">{item.title}</h3>
                    <p className="text-[#6B6358] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Wholesale Pricing
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Competitive pricing based on your specific requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Tag,
                title: "Grade",
                description: "Grade A (Gourmet) vs Grade B (Extract)",
              },
              {
                icon: BarChart3,
                title: "Vanillin Content",
                description: "Higher vanillin commands premium pricing",
              },
              {
                icon: Boxes,
                title: "Volume",
                description: "Bulk orders (100kg+) receive better pricing",
              },
              {
                icon: Handshake,
                title: "Contract",
                description: "Long-term contracts offer additional discounts",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white p-6 rounded-2xl border border-[#D8D3C9] flex items-start gap-4 hover:border-[#B5A37A]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#F0ECE4] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#B5A37A]/15 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#B5A37A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C2518] mb-1">{item.title}</h3>
                  <p className="text-[#6B6358] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
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
