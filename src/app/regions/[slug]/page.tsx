import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  Shield,
  FileCheck,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

type RegionConfig = {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  flag: string;
  highlights: string[];
  cities: string[];
  compliance: string[];
  shippingTime: string;
  image: string;
};

const regions: Record<string, RegionConfig> = {
  uae: {
    name: "UAE & Middle East",
    slug: "uae",
    description:
      "Premium Indonesian vanilla supplier for Dubai, Abu Dhabi, and the GCC region. Halal certified with fast air freight delivery.",
    keywords: [
      "vanilla supplier UAE",
      "vanilla beans Dubai",
      "wholesale vanilla Middle East",
      "vanilla paste supplier Abu Dhabi",
    ],
    flag: "🇦🇪",
    highlights: [
      "Halal certified for all products",
      "Fast air freight to Dubai (3-5 days)",
      "DDP delivery available",
      "Customs documentation included",
    ],
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Doha", "Riyadh", "Jeddah"],
    compliance: [
      "Halal Certified",
      "ESMA compliant",
      "Dubai Municipality standards",
      "Full Arabic documentation",
    ],
    shippingTime: "3-5 days (air freight)",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  australia: {
    name: "Australia",
    slug: "australia",
    description:
      "Quality Assured Indonesian vanilla supplier for Sydney, Melbourne, Perth, and across Australia. Compliant with Australian food standards.",
    keywords: [
      "vanilla supplier Australia",
      "vanilla beans Sydney",
      "wholesale vanilla Melbourne",
      "vanilla paste supplier Perth",
    ],
    flag: "🇦🇺",
    highlights: [
      "Quality-controlled processing",
      "Compliant with FSANZ standards",
      "Fast delivery to major cities",
      "Full phytosanitary documentation",
    ],
    cities: ["Sydney", "Melbourne", "Perth", "Brisbane", "Adelaide"],
    compliance: [
      "Quality Assured",
      "FSANZ Compliant",
      "Australian Biosecurity standards",
      "English documentation",
    ],
    shippingTime: "5-7 days (air freight)",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
  },
  usa: {
    name: "USA",
    slug: "usa",
    description:
      "US Import Ready Indonesian vanilla supplier for New York, Los Angeles, Chicago, and across the United States. Full export documentation.",
    keywords: [
      "vanilla supplier USA",
      "vanilla beans New York",
      "wholesale vanilla California",
      "vanilla paste supplier Texas",
    ],
    flag: "🇺🇸",
    highlights: [
      "US Import Ready products",
      "CoA provided with every order",
      "DHL/FedEx express shipping",
      "East and West coast delivery",
    ],
    cities: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "San Francisco",
      "Miami",
    ],
    compliance: [
      "US Import Ready",
      "Quality Assured",
      "USDA standards",
      "Full English documentation",
    ],
    shippingTime: "5-7 days (air freight)",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=800",
  },
  europe: {
    name: "Europe",
    slug: "europe",
    description:
      "EU food safety compliant Indonesian vanilla supplier for Netherlands, France, Germany, and across Europe. Full traceability.",
    keywords: [
      "vanilla supplier Europe",
      "vanilla beans Netherlands",
      "wholesale vanilla France",
      "vanilla paste supplier Germany",
    ],
    flag: "🇪🇺",
    highlights: [
      "EU food safety standards",
      "Full traceability from farm to shipment",
      "Quality Assured and Halal certified",
      "Competitive pricing for EU buyers",
    ],
    cities: [
      "Amsterdam",
      "Paris",
      "Berlin",
      "London",
      "Milan",
      "Barcelona",
    ],
    compliance: [
      "EU Food Safety Compliant",
      "Quality Assured",
      "REACH compliant",
      "Full EU documentation",
    ],
    shippingTime: "5-10 days (air freight)",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
  },
};

export async function generateStaticParams() {
  return Object.keys(regions).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = regions[slug];

  if (!region) {
    return { title: "Region Not Found" };
  }

  return {
    title: `Vanilla Supplier ${region.name} - Premium Indonesian Vanilla`,
    description: region.description,
    keywords: region.keywords,
    alternates: {
      canonical: `/regions/${slug}`,
      languages: {
        "en-ae": "/regions/uae",
        "en-au": "/regions/australia",
        "en-us": "/regions/usa",
        "en-nl": "/regions/europe",
        "x-default": `/regions/${slug}`,
      },
    },
    openGraph: {
      title: `Vanilla Supplier ${region.name} | La Vanilla Supplier`,
      description: region.description,
      url: `${siteConfig.url}/regions/${slug}`,
      type: "website",
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = regions[slug];

  if (!region) {
    return <div>Region not found</div>;
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#D8C393] to-[#C4B07A] text-stone-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{region.flag}</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Vanilla Supplier in {region.name}
              </h1>
              <p className="text-lg text-stone-700 mb-8">
                {region.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Get Quote for {region.name}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={region.image}
                  alt={`${region.name} vanilla supplier`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us for {region.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {region.highlights.map((highlight) => (
              <div
                key={highlight}
                className="bg-[#F5F0E6] rounded-xl p-6 text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-[#8B7D50] mx-auto mb-3" />
                <p className="font-medium text-gray-900">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Shipping */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Compliance for {region.name}
              </h2>
              <div className="space-y-4">
                {region.compliance.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#8B7D50]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Shipping to {region.name}
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-[#8B7D50]" />
                  <span className="font-semibold text-gray-900">
                    Delivery Time: {region.shippingTime}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  We ship to all major cities in {region.name} via trusted
                  international carriers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D8C393] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Source Vanilla for {region.name}?
          </h2>
          <p className="text-stone-700 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote and sample within 24 hours. We understand the
            requirements for {region.name} and can provide all necessary
            documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
            >
              Request Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors"
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
            "@type": "WebPage",
            name: `Vanilla Supplier ${region.name}`,
            description: region.description,
            url: `${siteConfig.url}/regions/${region.slug}`,
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              areaServed: {
                "@type": "Country",
                name: region.name,
              },
            },
          }),
        }}
      />
    </>
  );
}
