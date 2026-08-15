import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShieldCheck,
  Globe,
  Award,
  Truck,
  Leaf,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
  Package,
  FileCheck,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Premium Vanilla Supplier Indonesia | B2B Wholesale Export",
  description:
    "PT Penta Pelita Semesta - Indonesia's trusted vanilla supplier. HACCP certified. Grade A & B beans, custom vanilla paste, pure vanilla powder. Export to 40+ countries. MOQ 1kg.",
  keywords: [
    "vanilla supplier Indonesia",
    "wholesale vanilla beans",
    "vanilla paste manufacturer",
    "vanilla powder supplier",
    "B2B vanilla exporter",
    "HACCP certified vanilla",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/50 rounded-full border border-emerald-700/50 mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-200">
                  HACCP Certified • 10+ Years Export Experience
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Indonesian{" "}
                <span className="text-emerald-400">Vanilla</span>{" "}
                for Global Markets
              </h1>
              <p className="text-lg lg:text-xl text-emerald-100 mb-8 max-w-lg">
                Direct from Indonesian farms to your production line. Vanilla
                beans, custom paste, and pure powder — HACCP certified, shipped
                to {siteConfig.stats.countriesServed} countries with full
                documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700/50 text-white font-semibold rounded-lg border border-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1631206846301-7d2e0d1e5a9e?w=800"
                  alt="Premium Indonesian vanilla beans"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {siteConfig.stats.countriesServed}
                    </p>
                    <p className="text-sm text-gray-500">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                label: "HACCP Certified",
                value: "Food Safety",
              },
              {
                icon: Globe,
                label: "Global Export",
                value: `${siteConfig.stats.countriesServed} Countries`,
              },
              {
                icon: Award,
                label: "Experience",
                value: `${siteConfig.stats.yearsExperience} Years`,
              },
              { icon: Users, label: "Happy Clients", value: "100+" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Vanilla Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From gourmet beans to custom paste formulations — we provide
              complete vanilla solutions for every industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-emerald-700 rounded-full">
                      {product.category === "beans"
                        ? "Beans"
                        : product.category === "paste"
                        ? "Paste"
                        : "Powder"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-emerald-600 font-medium">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Global Buyers Choose Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience exporting Indonesian vanilla to
                the world, we understand what B2B buyers need: consistency,
                transparency, and reliable supply.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Leaf,
                    title: "Direct from Source",
                    description:
                      "We work directly with Indonesian farmers, ensuring fair trade practices and full traceability from farm to shipment.",
                  },
                  {
                    icon: Package,
                    title: "Verified Physical Stock",
                    description:
                      "No middlemen. We maintain our own inventory with video call verification available for all wholesale partners.",
                  },
                  {
                    icon: FileCheck,
                    title: "Complete Documentation",
                    description:
                      "Every shipment includes phytosanitary certificates, certificate of origin, and full HACCP compliance documentation.",
                  },
                  {
                    icon: Truck,
                    title: "Flexible Shipping",
                    description:
                      "FOB Jakarta, CIF, or DDP — we ship via DHL, FedEx, or air cargo. 3-7 day delivery worldwide.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800"
                  alt="Vanilla processing facility"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-emerald-600 text-white rounded-xl p-6 shadow-xl">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-emerald-100">Tons Exported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent, detailed specifications for every product. What you
              see is exactly what you get.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-900">
                      Specification
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-900">
                      Grade A Beans
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-900">
                      Grade B Beans
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { spec: "Species", gradeA: "V. planifolia / V. tahitensis", gradeB: "V. planifolia" },
                    { spec: "Moisture Content", gradeA: "25–35%", gradeB: "< 25%" },
                    { spec: "Vanillin Content", gradeA: "1.8–2.7%", gradeB: "1.8–2.2%" },
                    { spec: "Bean Length", gradeA: "16–20 cm", gradeB: "10–16 cm" },
                    { spec: "Curing Period", gradeA: "6–9 months", gradeB: "6–9 months" },
                    { spec: "MOQ", gradeA: "1 kg", gradeB: "1 kg" },
                    { spec: "HS Code", gradeA: "0905.10", gradeB: "0905.10" },
                    { spec: "Lead Time", gradeA: "3–7 days", gradeB: "3–7 days" },
                  ].map((row) => (
                    <tr key={row.spec} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {row.spec}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {row.gradeA}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving Buyers Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  "Sydney, Melbourne, Perth. HACCP compliant. 5-7 day delivery.",
              },
              {
                region: "USA",
                href: "/regions/usa",
                description:
                  "FDA compliant. East and West coast. DHL and FedEx shipping.",
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
                className="group p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {item.region}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium mb-8">
              &ldquo;The vanillin content and aroma were exactly as promised.
              Our pastry chef baked a batch of vanilla bean canelés with their
              pods. Customers were literally asking if we changed the recipe.
              Safe to say we are hooked.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold">Sophie</p>
              <p className="text-emerald-200">Budapest, Hungary</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Vanilla Journey?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free sample and quote within 24 hours. Minimum order just 1
              kg. No risk, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Request Free Sample
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Chat on WhatsApp
              </Link>
            </div>
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
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.png`,
            description: siteConfig.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surakarta",
              addressRegion: "Central Java",
              addressCountry: "ID",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: siteConfig.social.whatsapp,
              contactType: "sales",
              availableLanguage: ["English", "Indonesian"],
            },
            sameAs: [],
            hasCredential: [
              "HACCP Certified",
              "Halal Certified",
              "Phytosanitary Certified",
            ],
          }),
        }}
      />
    </>
  );
}
