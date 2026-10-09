import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";

const DESCRIPTION =
  "Premium wholesale vanilla beans from Indonesia. Grade A & B beans, vanilla paste, and powder from source. Export to 20+ countries with flexible order sizes.";

const faqs = [
  {
    q: "What are wholesale vanilla prices?",
    a: "Pricing depends on grade, volume, and contract terms. Send us your grade, quantity, and destination for a competitive FOB or CIF quote within 24 hours. Volume pricing improves with larger orders, and long-term contracts receive additional discounts.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Order quantities are flexible. Free samples are available for evaluation, trial orders are welcome, and we can supply consistent monthly volumes well beyond 100 kg for established partners.",
  },
  {
    q: "Can I order samples before a bulk order?",
    a: "Yes. We offer free samples for serious buyers, shipped via DHL or FedEx within 3-5 days, so your team can verify quality before committing to a full shipment.",
  },
  {
    q: "How are bulk shipments delivered?",
    a: "We ship via DHL, FedEx, or air cargo for smaller orders and sea freight for larger shipments. Air freight takes 3-7 days worldwide and sea freight 2-4 weeks. FOB from Semarang, Jakarta, or Surabaya, with CIF and DDP options available.",
  },
  {
    q: "What are your payment terms?",
    a: "We accept T/T (bank transfer), L/C (Letter of Credit), and PayPal for smaller orders. Standard terms are a 30-50% deposit with the balance due before shipping.",
  },
];

export const metadata: Metadata = {
  title: "Wholesale Vanilla Beans Supplier",
  description: DESCRIPTION,
  keywords: [
    "wholesale vanilla beans",
    "bulk vanilla supplier",
    "vanilla beans Indonesia wholesale",
    "vanilla paste bulk",
    "vanilla powder wholesale",
    "B2B vanilla supplier",
  ],
  alternates: {
    canonical: "/wholesale",
    languages: languageAlternates("wholesale"),
  },
  openGraph: {
    images: ogImages,
    title: "Wholesale Vanilla Beans Supplier",
    description: DESCRIPTION,
    url: `${siteConfig.url}/wholesale`,
    type: "website",
  },
  twitter: twitterCard("Wholesale Vanilla Beans Supplier | La Vanilla Supplier", DESCRIPTION),
};

export default function WholesalePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/wholesale-hero.jpeg"
            alt=""
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2518]/90 via-[#2C2518]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Wholesale Vanilla{" "}
              <span className="text-[#B5A37A]">Indonesia</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed mb-8">
              Premium Indonesian vanilla beans, paste, and powder at wholesale
              prices. Direct from source, no middlemen. Flexible order quantities. Export to 20+
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

      {/* Quick Answer */}
      <section className="py-10 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#B5A37A] bg-[#F8F6F2] rounded-r-2xl p-6">
            <p className="font-bold text-[#2C2518] mb-2">
              Quick answer: What is wholesale vanilla from La Vanilla Supplier?
            </p>
            <p className="text-[#6B6358] leading-relaxed">
              We produce and export wholesale vanilla directly from Surakarta,
              Central Java: Grade A and Grade B vanilla beans, custom vanilla
              paste, and 100% pure vanilla powder. Every order is lab-tested
              with a Certificate of Analysis, flexible in quantity, Halal
              certified, and shipped with full export documentation to 20+
              countries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#F8F6F2] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "Flexible", label: "Order Quantity" },
              { value: "20+", label: "Countries Served" },
              { value: "10+", label: "Years Experience" },
              { value: "150+", label: "Tons Exported" },
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
                  <item.icon className="w-7 h-7 text-[#D4C48A] group-hover:text-white transition-colors duration-300" />
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
                className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
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
                  <div className="mt-auto flex items-center text-[#B5A37A] font-medium text-sm">
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
                    <span className="text-2xl font-bold text-[#D4C48A]">
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

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C2518] mb-3 text-center">
            Wholesale Vanilla FAQ
          </h2>
          <p className="text-[#6B6358] text-center mb-10 max-w-2xl mx-auto">
            Answers to the questions buyers ask most before placing a wholesale
            order.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:border-[#B5A37A]/50 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#2C2518] hover:text-[#B5A37A] transition-colors list-none">
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#6B6358] group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-[#6B6358] leading-relaxed border-t border-[#E5E0D8] pt-4">
                  {faq.a}
                </div>
              </details>
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
            Get a free sample and quote within 24 hours. Flexible order quantities.
            Free samples available. Trial orders welcome.
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

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

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
            logo: `${siteConfig.url}/logo.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surakarta",
              addressRegion: "Central Java",
              addressCountry: "ID",
            },
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

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Wholesale", url: "/wholesale" },
            ])
          ),
        }}
      />
    </>
  );
}
