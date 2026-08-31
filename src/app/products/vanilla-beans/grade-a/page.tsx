import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Truck,
  Shield,
  MessageSquare,
  Package,
  Leaf,
  Award,
  Star,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Grade A Gourmet Vanilla Beans - Premium Indonesian Vanilla",
  description:
    "Premium Grade A Gourmet vanilla beans from Indonesia. 15-20 cm, 25-35% moisture, 1.3-2.7% vanillin. Perfect for retail, pastry, and culinary applications. MOQ 25 kg.",
  keywords: [
    "grade A vanilla beans",
    "gourmet vanilla beans",
    "premium vanilla beans Indonesia",
    "vanilla beans wholesale",
    "B2B vanilla beans",
  ],
  alternates: {
    canonical: "/products/vanilla-beans/grade-a",
  },
  openGraph: {
    title: "Grade A Gourmet Vanilla Beans - La Vanilla Supplier",
    description:
      "Premium Grade A Gourmet vanilla beans from Indonesia. 15-20 cm, 25-35% moisture, 1.3-2.7% vanillin.",
    url: "https://www.lavanillasupplier.com/products/vanilla-beans/grade-a",
    type: "website",
  },
};

export default function GradeAPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2C2518] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products/vanilla-beans"
            className="inline-flex items-center text-[#B5A37A] hover:text-white mb-4 text-sm transition-colors"
          >
            ← Back to Vanilla Beans
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Grade A Gourmet Vanilla Beans — Premium Indonesian Vanilla for
            Retail & Culinary
          </h1>
          <p className="text-stone-300 max-w-2xl mb-6 leading-relaxed">
            Our Grade A Gourmet vanilla beans are hand-picked at peak maturity
            and sun-cured for 6-9 months. Measuring 15-20 cm with 25-35%
            moisture and 1.3-2.7% vanillin content, these premium beans are
            perfect for retail, pastry, ice cream, and culinary applications.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Quality Assured", "Export Ready", "Phytosanitary"].map(
              (cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B5A37A]" />
                  {cert}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Product + Quick Info */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#F8F6F2]">
                <Image
                  src="/vanilla-beans.jpg"
                  alt="Grade A Gourmet Vanilla Beans"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-[#2C2518] mb-3 uppercase tracking-wider text-sm">
                Quick Overview
              </h2>
              <p className="text-sm text-[#6B6358] mb-6 leading-relaxed">
                La Vanilla Supplier provides{" "}
                <strong className="text-[#2C2518]">
                  Grade A Gourmet Vanilla Beans
                </strong>{" "}
                sourced directly from Indonesian smallholder farmers. Every batch
                is quality-tested for vanillin content and moisture, with full
                documentation included. Minimum order quantity is 25 kg, shipping
                FOB from Semarang, Jakarta, or Surabaya.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: Shield,
                    label: "Quality Assured",
                    value: "Lab-Tested",
                    desc: "Third-party vanillin verification",
                  },
                  {
                    icon: Package,
                    label: "Minimum Order",
                    value: "25 kg",
                    desc: "Flexible for trial orders",
                  },
                  {
                    icon: Truck,
                    label: "Shipping Terms",
                    value: "FOB/CIF/DDP",
                    desc: "Semarang, Jakarta, Surabaya",
                  },
                  {
                    icon: FileCheck,
                    label: "Documents",
                    value: "All Included",
                    desc: "CoA, Phytosanitary, COO",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl border border-[#D8D3C9] bg-white hover:border-[#B5A37A]/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#3D3425] transition-colors">
                      <stat.icon className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <p className="font-semibold text-[#2C2518]">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-[#B5A37A] mt-0.5">
                      {stat.label}
                    </p>
                    <p className="text-xs text-[#6B6358] mt-1">{stat.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-[#B5A37A] text-white font-semibold rounded-xl hover:bg-[#A8956A] transition-colors"
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-[#F8F6F2] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#2C2518] mb-6 uppercase tracking-wider text-sm">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-2xl border border-[#D8D3C9] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E5E0D8]">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B6358] uppercase tracking-wider">
                    Specification
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B6358] uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { spec: "Species", value: "Vanilla planifolia (Bourbon)" },
                  { spec: "Grade", value: "A — Gourmet" },
                  { spec: "Bean Length", value: "15-20 cm" },
                  { spec: "Moisture Content", value: "25-35%" },
                  { spec: "Vanillin Content", value: "1.3-2.7%" },
                  { spec: "Curing Period", value: "6-9 months, sun-dried" },
                  { spec: "Appearance", value: "Black, oily, flexible, full pod" },
                  { spec: "Best For", value: "Retail, pastry, ice cream, culinary" },
                  { spec: "Packaging", value: "Vacuum-sealed, 1 kg per bundle" },
                  { spec: "MOQ", value: "25 kg" },
                  { spec: "HS Code", value: "0905.10" },
                  { spec: "Incoterms", value: "FOB / CIF / DDP" },
                ].map((row, index) => (
                  <tr
                    key={row.spec}
                    className="border-b border-[#E5E0D8]/50 last:border-0 hover:bg-[#F8F6F2]/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#2C2518]">
                      {row.spec}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B6358]">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Grade A */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#2C2518] mb-6 uppercase tracking-wider text-sm">
            Why Choose Grade A Gourmet
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "Premium Appearance",
                desc: "Plump, oily beans with visible vanillin crystals. Perfect for retail display and gourmet applications.",
              },
              {
                icon: Leaf,
                title: "Maximum Vanillin",
                desc: "Higher vanillin content (1.3-2.7%) delivers richer flavor and aroma in finished products.",
              },
              {
                icon: Award,
                title: "Full Documentation",
                desc: "Every shipment includes Certificate of Analysis, Phytosanitary Certificate, and Certificate of Origin.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-[#D8D3C9] hover:border-[#B5A37A]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#2C2518] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#B5A37A]" />
                </div>
                <h3 className="font-semibold text-[#2C2518] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6358]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C2518] py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Order Grade A Gourmet Vanilla Beans?
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Request a quote today and receive pricing within 24 hours. Sample
            orders available for quality evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-xl hover:bg-[#F8F6F2] transition-colors"
            >
              Request Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-xl hover:bg-[#A8956A] transition-colors"
            >
              <MessageSquare className="mr-2 w-4 h-4" />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: "Vanilla Beans", url: "/products/vanilla-beans" },
              { name: "Grade A Gourmet", url: "/products/vanilla-beans/grade-a" },
            ])
          ),
        }}
      />
    </>
  );
}
