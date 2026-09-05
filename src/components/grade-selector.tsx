"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Truck,
  Shield,
  MessageSquare,
  Package,
  Star,
  Leaf,
  Award,
  FlaskConical,
  Factory,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import VanillaGradingChart from "@/components/vanilla-grading-chart";

type Grade = "a" | "b";

const gradeData = {
  a: {
    title: "Grade A Gourmet Vanilla Beans",
    subtitle: "Grade A Gourmet Vanilla Beans",
    heroTitle: "Indonesian Vanilla Beans — Grade A Gourmet",
    heroTagline: "Direct from Java. Sun-cured 6-9 months. 15-20 cm. 1.3-2.7% vanillin.",
    description:
      "La Vanilla Supplier sources Grade A Gourmet vanilla beans directly from Indonesian smallholder farmers in Central Java. Every batch is lab-tested for vanillin content and moisture, with full documentation included. MOQ 25 kg, shipping FOB from Semarang, Jakarta, or Surabaya.",
    heroDescription:
      "Premium Grade A vanilla beans for retail, pastry, ice cream, and culinary applications. Hand-picked at peak maturity, sun-cured for 6-9 months, and graded to international standards.",
    specs: [
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
    ],
    features: [
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
    ],
    quickStats: [
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
    ],
  },
  b: {
    title: "Grade B Extraction Vanilla Beans",
    subtitle: "Grade B Extraction Vanilla Beans",
    heroTitle: "Indonesian Vanilla Beans — Grade B Extraction",
    heroTagline: "Cost-effective for manufacturing. 10-15 cm. 1.3-2.2% vanillin. Lower moisture.",
    description:
      "La Vanilla Supplier provides Grade B Extraction vanilla beans optimized for extract manufacturing and industrial applications. Cost-effective pricing with consistent quality. MOQ 25 kg, shipping FOB from Semarang, Jakarta, or Surabaya.",
    heroDescription:
      "Grade B vanilla beans for extract manufacturing, industrial flavoring, and large-scale production. Lower moisture content enables efficient vanillin extraction.",
    specs: [
      { spec: "Species", value: "Vanilla planifolia (Bourbon)" },
      { spec: "Grade", value: "B — Extraction" },
      { spec: "Bean Length", value: "10-15 cm" },
      { spec: "Moisture Content", value: "Less than 25%" },
      { spec: "Vanillin Content", value: "1.3-2.2%" },
      { spec: "Curing Period", value: "6-9 months, sun-dried" },
      { spec: "Appearance", value: "Dry, thinner, may have split ends" },
      { spec: "Best For", value: "Extract manufacturing, industrial flavoring" },
      { spec: "Packaging", value: "Vacuum-sealed, 1 kg per bundle" },
      { spec: "MOQ", value: "25 kg" },
      { spec: "HS Code", value: "0905.10" },
      { spec: "Incoterms", value: "FOB / CIF / DDP" },
    ],
    features: [
      {
        icon: FlaskConical,
        title: "Optimized for Extraction",
        desc: "Lower moisture content allows for more efficient vanillin extraction in manufacturing processes.",
      },
      {
        icon: Factory,
        title: "Cost-Effective",
        desc: "30-50% lower cost than Grade A while maintaining consistent vanillin content for industrial use.",
      },
      {
        icon: Package,
        title: "Volume Pricing",
        desc: "Additional discounts available for orders above 100 kg. Ideal for large-scale extract production.",
      },
    ],
    quickStats: [
      {
        icon: FlaskConical,
        label: "Best For",
        value: "Extract Manufacturing",
        desc: "Industrial flavoring production",
      },
      {
        icon: Package,
        label: "Minimum Order",
        value: "25 kg",
        desc: "Volume discounts available",
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
    ],
  },
};

export default function GradeSelector() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>("a");
  const grade = gradeData[selectedGrade];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#2C2518] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-[#B5A37A] hover:text-white mb-4 text-sm transition-colors"
          >
            ← Back to Products
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B5A37A]" />
            <span className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em]">
              Indonesian Origin
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            {grade.heroTitle}
          </h1>
          <p className="text-[#B5A37A] text-lg font-medium mb-4">
            {grade.heroTagline}
          </p>
          <p className="text-stone-300 max-w-2xl mb-6 leading-relaxed">
            {grade.heroDescription}
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
        <div className="px-4 sm:px-6 lg:px-20">
          {/* Grade Selector - Above the grid */}
          <div className="mb-8">
            <div className="inline-flex bg-[#F8F6F2] rounded-xl p-1 border border-[#E5E0D8]">
              <button
                onClick={() => setSelectedGrade("a")}
                className={`px-4 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedGrade === "a"
                    ? "bg-[#2C2518] text-white shadow-md"
                    : "text-[#6B6358] hover:text-[#2C2518]"
                }`}
              >
                Grade A — Gourmet
              </button>
              <button
                onClick={() => setSelectedGrade("b")}
                className={`px-4 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedGrade === "b"
                    ? "bg-[#2C2518] text-white shadow-md"
                    : "text-[#6B6358] hover:text-[#2C2518]"
                }`}
              >
                Grade B — Extraction
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Product Image */}
            <div className="sticky top-24 h-full">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#F8F6F2] h-full">
                <Image
                  src="/vanilla-beans.jpg"
                  alt={grade.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold text-[#2C2518] mb-3 uppercase tracking-wider text-sm">
                  Quick Overview
                </h2>
                <p className="text-sm text-[#6B6358] mb-6 leading-relaxed">
                  {grade.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {grade.quickStats.map((stat) => (
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
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
                {grade.specs.map((row) => (
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

      {/* Grading Chart */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VanillaGradingChart />
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#2C2518] mb-6 uppercase tracking-wider text-sm">
            Why Choose {grade.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {grade.features.map((item) => (
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
            Ready to Order {grade.title}?
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

      {/* Other Products */}
      <section className="bg-[#F8F6F2] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C2518] mb-6">
            Other Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.products
              .filter((p) => p.slug !== "vanilla-beans")
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#2C2518] group-hover:text-[#B5A37A] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[#6B6358] mt-1 line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
