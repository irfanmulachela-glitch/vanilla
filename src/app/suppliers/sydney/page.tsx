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
  title: "Vanilla Supplier Sydney | Wholesale Vanilla Beans Australia",
  description:
    "Premium Indonesian vanilla supplier in Sydney, Australia. Food safety compliant vanilla beans, paste, and powder. Fast delivery to Sydney, Melbourne, Perth.",
  keywords: [
    "vanilla supplier Sydney",
    "wholesale vanilla beans Australia",
    "vanilla exporter Australia",
    "vanilla supplier Melbourne",
    "vanilla beans Perth",
    "vanilla paste manufacturer Australia",
  ],
  alternates: {
    canonical: "/suppliers/sydney",
  },
  openGraph: {
    title: "Vanilla Supplier Sydney | Wholesale Vanilla Beans Australia",
    description: "Premium Indonesian vanilla supplier in Sydney, Australia.",
    url: "https://lavanillasupplier.com/suppliers/sydney",
    type: "website",
  },
};

export default function SydneyPage() {
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
                  Food Safety Compliant • Serving Australia
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2518] mb-6">
                Premium Vanilla Supplier in{" "}
                <span className="text-[#B5A37A]">Sydney</span>, Australia
              </h1>
              <p className="text-lg text-[#6B6358] mb-8">
                La Vanilla Supplier provides premium Indonesian vanilla to
                Sydney, Melbourne, Perth, and across Australia. Compliant with
                Australian food standards, 5-7 day delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
                >
                  Get Quote for Australia
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
                  title: "Food Safety",
                  desc: "Compliant with AU standards",
                },
                {
                  icon: Truck,
                  title: "5-7 Day Delivery",
                  desc: "Air freight to Sydney",
                },
                {
                  icon: Globe,
                  title: "AU Coverage",
                  desc: "Sydney, Melbourne, Perth",
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

      {/* Why Choose Us for Australia */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-12 text-center">
            Why Australian Buyers Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Australian Compliance",
                description:
                  "Our products meet Australian food safety standards. We provide all required documentation for import.",
              },
              {
                icon: Truck,
                title: "Fast Air Freight",
                description:
                  "5-7 day delivery to Sydney, Melbourne, or Perth. DHL and FedEx shipping available.",
              },
              {
                icon: FileCheck,
                title: "Import Documentation",
                description:
                  "Complete documentation including phytosanitary certificate, certificate of origin, and analysis reports.",
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

      {/* Products for Australia */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-12 text-center">
            Vanilla Products for Australian Market
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
            Ready to Import Vanilla to Australia?
          </h2>
          <p className="text-[#B5A37A] text-lg mb-8 max-w-2xl mx-auto">
            Get a free sample and quote within 24 hours. Food safety compliant.
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
              "Premium Indonesian vanilla supplier serving Sydney, Australia.",
            url: `${siteConfig.url}/suppliers/sydney`,
            areaServed: [
              { "@type": "City", name: "Sydney" },
              { "@type": "City", name: "Melbourne" },
              { "@type": "City", name: "Perth" },
              { "@type": "Country", name: "Australia" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Vanilla Products for Australia",
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
              { name: "Sydney, Australia", url: "/suppliers/sydney" },
            ])
          ),
        }}
      />
    </>
  );
}