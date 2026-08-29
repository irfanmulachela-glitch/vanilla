import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Truck,
  Package,
  FileCheck,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Vanilla Supplier Dubai | Wholesale Vanilla Beans UAE",
  description:
    "Premium Indonesian vanilla supplier in Dubai, UAE. Halal certified vanilla beans, paste, and powder. Fast air freight to Dubai, Abu Dhabi, and across GCC.",
  keywords: [
    "vanilla supplier Dubai",
    "wholesale vanilla beans UAE",
    "vanilla exporter Dubai",
    "halal vanilla supplier",
    "vanilla beans Abu Dhabi",
    "vanilla paste manufacturer UAE",
  ],
  alternates: {
    canonical: "/suppliers/dubai",
  },
  openGraph: {
    title: "Vanilla Supplier Dubai | Wholesale Vanilla Beans UAE",
    description: "Premium Indonesian vanilla supplier in Dubai, UAE. Halal certified.",
    url: "https://lavanillasupplier.com/suppliers/dubai",
    type: "website",
  },
};

export default function DubaiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F6F2] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B5A37A]/10 rounded-full mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#B5A37A]" />
                <span className="text-sm font-medium text-[#2C2518]">
                  Halal Certified • Serving UAE & GCC
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2518] mb-6">
                Premium Vanilla Supplier in{" "}
                <span className="text-[#B5A37A]">Dubai</span>, UAE
              </h1>
              <p className="text-lg text-[#6B6358] mb-8">
                La Vanilla Supplier provides premium Indonesian vanilla to Dubai,
                Abu Dhabi, and across the GCC. Halal certified, fast air freight
                delivery in 3-5 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
                >
                  Get Quote for Dubai
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
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Halal Certified",
                  desc: "All products halal certified",
                },
                {
                  icon: Truck,
                  title: "3-5 Day Delivery",
                  desc: "Air freight to Dubai",
                },
                {
                  icon: Globe,
                  title: "GCC Coverage",
                  desc: "Dubai, Abu Dhabi, Saudi, Qatar",
                },
                {
                  icon: Package,
                  title: "MOQ 25kg",
                  desc: "Flexible order quantities",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-white rounded-xl border border-[#E5E0D8]"
                >
                  <item.icon className="w-8 h-8 text-[#B5A37A] mb-3" />
                  <h3 className="font-semibold text-[#2C2518]">{item.title}</h3>
                  <p className="text-sm text-[#6B6358]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Dubai */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-12 text-center">
            Why Dubai Buyers Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Halal Compliance",
                description:
                  "All our vanilla products are halal certified, meeting UAE and GCC food safety requirements.",
              },
              {
                icon: Truck,
                title: "Fast Air Freight",
                description:
                  "3-5 day delivery to Dubai International Airport. DHL and FedEx shipping available.",
              },
              {
                icon: FileCheck,
                title: "Complete Documentation",
                description:
                  "Every shipment includes halal certificate, certificate of origin, and phytosanitary certificate.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#F8F6F2] rounded-xl border border-[#E5E0D8]"
              >
                <item.icon className="w-10 h-10 text-[#B5A37A] mb-4" />
                <h3 className="text-xl font-bold text-[#2C2518] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B6358]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products for Dubai */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-12 text-center">
            Vanilla Products for UAE Market
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="p-6 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
              >
                <h3 className="text-xl font-bold text-[#2C2518] mb-2">
                  {product.name}
                </h3>
                <p className="text-[#6B6358] mb-4">{product.shortDescription}</p>
                <div className="flex items-center text-[#B5A37A] font-medium">
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Import Vanilla to Dubai?
          </h2>
          <p className="text-[#B5A37A] text-lg mb-8 max-w-2xl mx-auto">
            Get a free sample and quote within 24 hours. Halal certified.
            Minimum order 25 kg.
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
            name: siteConfig.name,
            description:
              "Premium Indonesian vanilla supplier serving Dubai, UAE. Halal certified.",
            url: `${siteConfig.url}/suppliers/dubai`,
            areaServed: [
              { "@type": "City", name: "Dubai" },
              { "@type": "City", name: "Abu Dhabi" },
              { "@type": "City", name: "Sharjah" },
              { "@type": "Country", name: "UAE" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Vanilla Products for UAE",
              itemListElement: siteConfig.products.map((p) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: p.name,
                  description: p.shortDescription,
                },
              })),
            },
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Export Regions", url: "/regions" },
              { name: "Dubai, UAE", url: "/suppliers/dubai" },
            ])
          ),
        }}
      />