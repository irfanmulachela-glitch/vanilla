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
  Package,
  Clock,
  MapPin,
  Star,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

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
  port: string;
  documents: string[];
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
      "Halal Certified (MUI)",
      "ESMA Compliant",
      "Dubai Municipality Standards",
      "Full Arabic Documentation",
    ],
    shippingTime: "3-5 days (air freight)",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    port: "Jebel Ali, Dubai",
    documents: [
      "Halal Certificate",
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Certificate of Analysis",
      "Commercial Invoice",
      "Packing List",
    ],
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
      "Australian Biosecurity Standards",
      "English Documentation",
    ],
    shippingTime: "5-7 days (air freight)",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    port: "Sydney / Melbourne",
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Certificate of Analysis",
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading",
    ],
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
      "FDA Documentation Available",
      "Full English Documentation",
    ],
    shippingTime: "5-7 days (air freight)",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=800",
    port: "Los Angeles / New York",
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Certificate of Analysis",
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading",
    ],
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
      "REACH Compliant",
      "Full EU Documentation",
    ],
    shippingTime: "5-10 days (air freight)",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    port: "Rotterdam / Hamburg",
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Certificate of Analysis",
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading",
    ],
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
    title: `Vanilla Supplier ${region.name} | Indonesian Vanilla Export`,
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

  const otherRegions = Object.values(regions).filter((r) => r.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white py-12 lg:py-16 overflow-hidden">
        {/* Charcoal geometric accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a1410] opacity-60" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-[#B5A37A]/20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#B5A37A]/40 via-[#B5A37A]/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/wholesale"
            className="inline-flex items-center text-[#B5A37A] hover:text-white mb-4 text-sm transition-colors"
          >
            ← Back to Wholesale
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B5A37A]" />
            <span className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em]">
              Export Region
            </span>
          </div>
          <div className="text-4xl mb-4">{region.flag}</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            Vanilla Supplier in{" "}
            <span className="text-[#B5A37A]">{region.name}</span>
          </h1>
          <p className="text-[#B5A37A] text-lg font-medium mb-4">
            Delivery: {region.shippingTime} | Port: {region.port}
          </p>
          <p className="text-stone-300 max-w-2xl mb-6 leading-relaxed">
            {region.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#B5A37A] text-white font-semibold rounded-xl hover:bg-[#A8956A] transition-colors"
            >
              Get Quote for {region.name}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E0D8]">
            <div className="py-8 px-6 text-center">
              <p className="text-3xl font-bold text-[#2C2518]">10+</p>
              <p className="text-sm text-[#6B6358] mt-1">Years Experience</p>
            </div>
            <div className="py-8 px-6 text-center">
              <p className="text-3xl font-bold text-[#2C2518]">20+</p>
              <p className="text-sm text-[#6B6358] mt-1">Countries Served</p>
            </div>
            <div className="py-8 px-6 text-center">
              <p className="text-3xl font-bold text-[#2C2518]">30+</p>
              <p className="text-sm text-[#6B6358] mt-1">Happy Clients</p>
            </div>
            <div className="py-8 px-6 text-center">
              <p className="text-3xl font-bold text-[#2C2518]">500+</p>
              <p className="text-sm text-[#6B6358] mt-1">Tons Exported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#B5A37A] text-sm font-semibold tracking-wider uppercase">
              Why La Vanilla Supplier
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mt-3 mb-4">
              Why Choose Us for {region.name}
            </h2>
            <p className="text-[#6B6358] max-w-2xl mx-auto">
              We understand the specific requirements for exporting to {region.name} and provide tailored solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {region.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="bg-white rounded-2xl p-6 border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#F0ECE4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B5A37A] transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#B5A37A] group-hover:text-white transition-colors" />
                </div>
                <p className="font-semibold text-[#2C2518]">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Documents */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Compliance */}
            <div>
              <span className="text-[#B5A37A] text-sm font-semibold tracking-wider uppercase">
                Compliance
              </span>
              <h2 className="text-2xl font-bold text-[#2C2518] mt-3 mb-6">
                Certifications for {region.name}
              </h2>
              <div className="space-y-4">
                {region.compliance.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-4 bg-[#F8F6F2] rounded-xl"
                  >
                    <div className="w-10 h-10 bg-[#F0ECE4] rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <span className="text-[#2C2518] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div>
              <span className="text-[#B5A37A] text-sm font-semibold tracking-wider uppercase">
                Documentation
              </span>
              <h2 className="text-2xl font-bold text-[#2C2518] mt-3 mb-6">
                Export Documents Included
              </h2>
              <div className="space-y-4">
                {region.documents.map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-4 p-4 bg-[#F8F6F2] rounded-xl"
                  >
                    <div className="w-10 h-10 bg-[#F0ECE4] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <span className="text-[#2C2518] font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Cities */}
      <section className="py-16 lg:py-20 bg-[#2C2518] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#B5A37A] text-sm font-semibold tracking-wider uppercase">
                Shipping
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 mb-6">
                Delivery to {region.name}
              </h2>
              
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#B5A37A] rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{region.shippingTime}</p>
                    <p className="text-sm text-stone-400">From Indonesian ports</p>
                  </div>
                </div>
                <p className="text-stone-300 text-sm">
                  We ship via trusted international carriers with full tracking and insurance.
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-stone-400">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#B5A37A]" />
                  <span>FOB / CIF / DDP terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#B5A37A]" />
                  <span>Port: {region.port}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {region.cities.map((city) => (
                  <div
                    key={city}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-[#B5A37A] mx-auto mb-2" />
                    <p className="font-medium">{city}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Available */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#B5A37A] text-sm font-semibold tracking-wider uppercase">
              Products
            </span>
            <h2 className="text-3xl font-bold text-[#2C2518] mt-3 mb-4">
              Vanilla Products for {region.name}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/products/vanilla-beans"
              className="group bg-[#F8F6F2] rounded-2xl p-6 border border-[#E5E0D8] hover:border-[#B5A37A] transition-all"
            >
              <div className="w-14 h-14 bg-[#F0ECE4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B5A37A] transition-colors">
                <Leaf className="w-7 h-7 text-[#B5A37A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2518] mb-2">Vanilla Beans</h3>
              <p className="text-[#6B6358] text-sm mb-4">
                Grade A gourmet and Grade B extraction beans. Direct from Indonesian farmers.
              </p>
              <span className="text-[#B5A37A] font-semibold text-sm flex items-center gap-1">
                View Products <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link
              href="/products/vanilla-paste"
              className="group bg-[#F8F6F2] rounded-2xl p-6 border border-[#E5E0D8] hover:border-[#B5A37A] transition-all"
            >
              <div className="w-14 h-14 bg-[#F0ECE4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B5A37A] transition-colors">
                <Package className="w-7 h-7 text-[#B5A37A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2518] mb-2">Vanilla Paste</h3>
              <p className="text-[#6B6358] text-sm mb-4">
                Custom formulations, standard to triple concentration. No synthetic additives.
              </p>
              <span className="text-[#B5A37A] font-semibold text-sm flex items-center gap-1">
                View Products <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link
              href="/products/vanilla-powder"
              className="group bg-[#F8F6F2] rounded-2xl p-6 border border-[#E5E0D8] hover:border-[#B5A37A] transition-all"
            >
              <div className="w-14 h-14 bg-[#F0ECE4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B5A37A] transition-colors">
                <Star className="w-7 h-7 text-[#B5A37A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2518] mb-2">Vanilla Powder</h3>
              <p className="text-[#6B6358] text-sm mb-4">
                Spray-dried pure vanilla powder. Instant dissolve, long shelf life.
              </p>
              <span className="text-[#B5A37A] font-semibold text-sm flex items-center gap-1">
                View Products <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
            Ready to Source Vanilla for {region.name}?
          </h2>
          <p className="text-[#6B6358] text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote and sample within 24 hours. We understand the
            requirements for {region.name} and can provide all necessary
            documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors"
            >
              Request Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Other Regions */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2C2518] mb-8 text-center">
            Other Export Regions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRegions.map((other) => (
              <Link
                key={other.slug}
                href={`/regions/${other.slug}`}
                className="flex items-center gap-4 p-4 bg-[#F8F6F2] rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
              >
                <span className="text-3xl">{other.flag}</span>
                <div>
                  <p className="font-semibold text-[#2C2518]">{other.name}</p>
                  <p className="text-sm text-[#6B6358]">Vanilla supplier →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
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
            },
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Wholesale", url: "/wholesale" },
              { name: region.name, url: `/regions/${region.slug}` },
            ]),
          ]),
        }}
      />
    </>
  );
}
