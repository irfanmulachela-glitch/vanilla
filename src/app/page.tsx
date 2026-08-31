import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShieldCheck,
  Globe,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
  Package,
  MapPin,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { AnimatedCounter } from "@/components/animated-counter";

export const metadata: Metadata = {
  title: "Premium Vanilla Supplier Indonesia | B2B Wholesale Export",
  description:
    "La Vanilla Supplier - Indonesia's trusted vanilla supplier. Food Safety Standards. Grade A & B beans, custom vanilla paste, pure vanilla powder. Export to 20+ countries. MOQ 25kg.",
  keywords: [
    "vanilla supplier Indonesia",
    "wholesale vanilla beans",
    "vanilla paste manufacturer",
    "vanilla powder supplier",
    "B2B vanilla exporter",
    "Quality Assured vanilla",
    "Indonesian vanilla beans",
    "best vanilla supplier",
    "bulk vanilla beans",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Vanilla Supplier Indonesia | B2B Wholesale Export",
    description: "Indonesia's trusted vanilla supplier. Grade A & B beans, vanilla paste, powder. Export to 20+ countries.",
    url: "https://lavanillasupplier.com",
    siteName: "La Vanilla Supplier",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Light, clean, side by side */}
      <section className="bg-[#F8F6F2]">
        <div className="grid lg:grid-cols-5 min-h-[550px]">
          {/* Text Content - 40% */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-20 lg:col-span-2">
            <p className="text-[#B5A37A] text-sm font-semibold uppercase tracking-wider mb-3">
              Indonesia&apos;s #1 Vanilla Supplier
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C2518] mb-3 leading-[1.1]">
              Premium{" "}
              <span className="text-[#B5A37A]">Indonesian Vanilla</span>{" "}
              Supplier
            </h1>
            <p className="text-lg text-[#B5A37A] font-medium mb-5 italic">
              Your Formula. Our Vanilla.
            </p>
            <p className="text-[#6B6358] mb-3 leading-relaxed">
              La Vanilla Supplier is a direct Indonesian vanilla supplier based in Java, sourcing premium Vanilla planifolia beans from local smallholder farmers and curing them for 6-9 months using traditional sun-drying methods.
            </p>
            <p className="text-[#6B6358] mb-7 leading-relaxed">
              Grade A Gourmet and Grade B Extraction available. We export to food manufacturers and distributors across 20+ countries. MOQ 25kg. FOB from Semarang, Jakarta, or Surabaya. Halal certified. Full documentation with every shipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white text-sm font-medium rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                Get Free Sample
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] text-sm font-medium rounded-lg border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Image - 60%, full bleed, no outline */}
          <div className="relative min-h-[400px] lg:min-h-full lg:col-span-3">
            <Image
              src="/wholesale-hero.jpeg"
              alt="Premium Indonesian vanilla beans being sorted at our facility in Java"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#B5A37A] text-sm font-semibold uppercase tracking-wider mb-4">
            About Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6 leading-tight">
            Your Formula. Our Vanilla. Delivered with precision.
          </h2>
          <p className="text-lg text-[#6B6358] mb-6 max-w-3xl mx-auto leading-relaxed">
            La Vanilla Supplier is a direct Indonesian vanilla supplier based in Java, specializing in premium Vanilla planifolia beans sourced from local smallholder farmers and cured using traditional 6-9 month sun-drying methods. We work directly with growers — no middlemen — ensuring consistent quality and fair pricing.
          </p>
          <p className="text-sm text-[#6B6358]/70 mb-12">
            Operated by PT Penta Pelita Semesta — Registered Indonesian Company
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: 10, suffix: "+", label: "Years Experience" },
              { value: 500, suffix: "+", label: "Tons Exported" },
              { value: 20, suffix: "+", label: "Countries Served" },
              { value: 30, suffix: "+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-bold text-[#2C2518] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-[#6B6358]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Quality Assured",
              "Halal Certified",
              "Full Documentation",
              "Phytosanitary",
            ].map((badge) => (
              <span
                key={badge}
                className="px-5 py-2.5 bg-[#F8F6F2] text-[#2C2518] text-sm font-medium rounded-full border border-[#E5E0D8]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Our Premium Vanilla Products
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              From gourmet beans to custom paste formulations — we provide
              complete vanilla solutions for every industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-sm font-medium text-[#B5A37A] rounded-full border border-[#E5E0D8]">
                      {product.category === "beans"
                        ? "Beans"
                        : product.category === "paste"
                        ? "Paste"
                        : "Powder"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2C2518] mb-2 group-hover:text-[#B5A37A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#6B6358] mb-4">{product.shortDescription}</p>
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

      {/* Why Choose Us */}
      <section className="bg-[#F8F6F2]" aria-labelledby="why-choose-heading">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left panel — dark with heading + image */}
          <div className="bg-[#2C2518] flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-[#B5A37A] text-xs font-medium uppercase tracking-[0.2em] mb-6">
                Why La Vanilla Supplier
              </p>
              <h2 id="why-choose-heading" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-white/90 leading-[1.15] mb-8">
                There are hundreds of vanilla suppliers in Indonesia.
              </h2>
              <p className="text-xl sm:text-2xl font-medium text-white/40 leading-snug mb-8">
                Finding one that consistently delivers quality — that&apos;s the hard part.
              </p>
              <div className="w-12 h-[2px] bg-[#B5A37A] mb-8" />
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                There are hundreds of vanilla suppliers in Indonesia. Very few
                have the consistency, transparency, and long-term commitment
                that serious importers need.
              </p>
            </div>
            <div className="mt-10 relative rounded-xl overflow-hidden h-48 sm:h-56">
              <Image
                src="/why-choose-us.jpg"
                alt="Vanilla beans being sorted and prepared for export at our facility in Java, Indonesia"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right panel — numbered proof rows */}
          <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-0">
              {[
                {
                  num: "01",
                  title: "Direct from Source",
                  body: "We work directly with Indonesian farmers, ensuring fair trade practices and full traceability from farm to shipment.",
                },
                {
                  num: "02",
                  title: "Verified Physical Stock",
                  body: "No middlemen. We maintain our own inventory with video call verification available for all wholesale partners.",
                },
                {
                  num: "03",
                  title: "Complete Documentation",
                  body: "Every shipment includes phytosanitary certificates, certificate of origin, and full food safety compliance documentation.",
                },
                {
                  num: "04",
                  title: "Flexible Shipping",
                  body: "FOB Semarang, Jakarta, or Surabaya, CIF, or DDP — we ship via DHL, FedEx, or air cargo.",
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className={`flex gap-5 sm:gap-6 py-7 ${
                    i < 3 ? "border-b border-[#E5E0D8]" : ""
                  }`}
                >
                  <span className="text-2xl sm:text-3xl font-medium text-[#B5A37A] leading-none pt-0.5 w-8 sm:w-10 flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-[#2C2518] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6358] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Product Specifications
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Transparent, detailed specifications for every product. What you
              see is exactly what you get.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#D8D3C9] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#2C2518]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                      Specification
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                      Grade A Beans
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                      Grade B Beans
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  {[
                    { spec: "Species", gradeA: "V. planifolia", gradeB: "V. planifolia" },
                    { spec: "Moisture Content", gradeA: "25–35%", gradeB: "< 25%" },
                    { spec: "Vanillin Content", gradeA: "1.3–2.7%", gradeB: "1.3–2.2%" },
                    { spec: "Bean Length", gradeA: "15–20 cm", gradeB: "10–15 cm" },
                    { spec: "Curing Period", gradeA: "6–9 months", gradeB: "6–9 months" },
                    { spec: "MOQ", gradeA: "25 kg", gradeB: "25 kg" },
                    { spec: "HS Code", gradeA: "0905.10", gradeB: "0905.10" },
                  ].map((row, index) => (
                    <tr key={row.spec} className={index % 2 === 0 ? "bg-white" : "bg-[#F8F6F2]"}>
                      <td className="px-6 py-4 text-sm font-medium text-[#2C2518]">
                        {row.spec}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6B6358]">
                        {row.gradeA}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6B6358]">
                        {row.gradeB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Export Regions */}
      <section className="py-20 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Serving Buyers Worldwide
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              From the Middle East to North America, we deliver premium
              Indonesian vanilla with full export documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                region: "UAE & Middle East",
                href: "/regions/uae",
                description:
                  "Dubai, Abu Dhabi, and across the GCC. Halal certified. Fast air freight.",
              },
              {
                region: "Australia",
                href: "/regions/australia",
                description:
                  "Sydney, Melbourne, Perth. US Import Ready. 5-7 day delivery.",
              },
              {
                region: "USA",
                href: "/regions/usa",
                description:
                  "US Import Ready. East and West coast. DHL and FedEx shipping.",
              },
              {
                region: "Europe",
                href: "/regions/europe",
                description:
                  "EU food safety standards. Netherlands, France, Germany, and more.",
              },
            ].map((item) => (
              <Link
                key={item.region}
                href={item.href}
                className="group p-6 bg-white rounded-xl border border-[#D8D3C9] hover:border-[#B5A37A]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#B5A37A] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#B5A37A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-[#2C2518] mb-1 group-hover:text-[#B5A37A] transition-colors">
                  {item.region}
                </h3>
                <p className="text-sm text-[#6B6358]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-[#B5A37A] fill-[#B5A37A]"
                />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-white mb-8 leading-relaxed">
              &ldquo;The vanillin content and aroma were exactly as promised.
              Our pastry chef baked a batch of vanilla bean canelés with their
              pods. Customers were literally asking if we changed the recipe.
              Safe to say we are hooked.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-white">Sophie</p>
              <p className="text-[#B5A37A]">Budapest, Hungary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2C2518] mb-8 text-center">
            Explore Our Vanilla Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/wholesale"
              className="p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors text-center"
            >
              <Package className="w-8 h-8 text-[#B5A37A] mx-auto mb-2" />
              <h3 className="font-semibold text-[#2C2518]">Wholesale</h3>
              <p className="text-sm text-[#6B6358]">Bulk orders from 25kg</p>
            </Link>
            <Link
              href="/regions/uae"
              className="p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors text-center"
            >
              <Globe className="w-8 h-8 text-[#B5A37A] mx-auto mb-2" />
              <h3 className="font-semibold text-[#2C2518]">Dubai & UAE</h3>
              <p className="text-sm text-[#6B6358]">Halal certified supply</p>
            </Link>
            <Link
              href="/regions/australia"
              className="p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors text-center"
            >
              <Globe className="w-8 h-8 text-[#B5A37A] mx-auto mb-2" />
              <h3 className="font-semibold text-[#2C2518]">Sydney, Australia</h3>
              <p className="text-sm text-[#6B6358]">Food safety compliant</p>
            </Link>
            <Link
              href="/regions/usa"
              className="p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors text-center"
            >
              <Globe className="w-8 h-8 text-[#B5A37A] mx-auto mb-2" />
              <h3 className="font-semibold text-[#2C2518]">New York, USA</h3>
              <p className="text-sm text-[#6B6358]">US Import Ready supply</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Vanilla Journey?
          </h2>
          <p className="text-[#B5A37A] text-lg mb-8 max-w-2xl mx-auto">
            Get a free sample and quote within 24 hours. Minimum order just 25
            kg. No risk, no commitment.
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

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.lavanillasupplier.com/#organization",
            name: "La Vanilla Supplier",
            legalName: "PT Penta Pelita Semesta",
            url: "https://www.lavanillasupplier.com",
            logo: "https://www.lavanillasupplier.com/logo.png",
            description:
              "Indonesian vanilla supplier exporting Vanilla planifolia beans, vanilla paste and vanilla powder to food manufacturers and distributors. Minimum order 25 kg. FOB Semarang, Jakarta or Surabaya.",
            email: "admin@lavanillasupplier.com",
            telephone: "+62-878-3575-6945",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surakarta",
              addressRegion: "Central Java",
              addressCountry: "ID",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-878-3575-6945",
              email: "admin@lavanillasupplier.com",
              contactType: "sales",
              availableLanguage: ["English", "Indonesian"],
            },
            areaServed: ["AE", "AU", "US", "NL", "FR", "DE", "SG", "MY", "JP", "KR"],
            knowsAbout: [
              "Vanilla planifolia",
              "vanilla bean curing",
              "vanillin content",
              "vanilla export documentation",
              "phytosanitary certification",
              "Indonesian vanilla",
            ],
            sameAs: [
              "https://www.linkedin.com/company/lavanillasupplier",
              "https://wa.me/+6287835756945",
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.lavanillasupplier.com/#website",
            name: "La Vanilla Supplier",
            url: "https://www.lavanillasupplier.com",
            publisher: {
              "@id": "https://www.lavanillasupplier.com/#organization",
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
            ])
          ),
        }}
      />
    </>
  );
}
