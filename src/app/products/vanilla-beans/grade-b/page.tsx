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
  FlaskConical,
  Factory,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Grade B Extraction Vanilla Beans - Indonesian Vanilla for Manufacturing",
  description:
    "Grade B Extraction vanilla beans from Indonesia. 10-15 cm, <25% moisture, 1.3-2.2% vanillin. Cost-effective for extract manufacturing and industrial applications. MOQ 25 kg.",
  keywords: [
    "grade B vanilla beans",
    "extraction vanilla beans",
    "vanilla beans manufacturing",
    "vanilla extract原料",
    "industrial vanilla beans",
  ],
  alternates: {
    canonical: "/products/vanilla-beans/grade-b",
  },
  openGraph: {
    title: "Grade B Extraction Vanilla Beans - La Vanilla Supplier",
    description:
      "Grade B Extraction vanilla beans from Indonesia. 10-15 cm, <25% moisture, 1.3-2.2% vanillin. Cost-effective for extract manufacturing.",
    url: "https://www.lavanillasupplier.com/products/vanilla-beans/grade-b",
    type: "website",
  },
};

export default function GradeBPage() {
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
            Grade B Extraction Vanilla Beans — Cost-Effective for Manufacturing
          </h1>
          <p className="text-stone-300 max-w-2xl mb-6 leading-relaxed">
            Our Grade B Extraction vanilla beans are designed for extract
            manufacturing and industrial applications. Measuring 10-15 cm with
            less than 25% moisture and 1.3-2.2% vanillin content, these
            cost-effective beans deliver consistent flavor for large-scale
            production.
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
                  alt="Grade B Extraction Vanilla Beans"
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
                  Grade B Extraction Vanilla Beans
                </strong>{" "}
                optimized for extract manufacturing and industrial applications.
                Cost-effective pricing with consistent quality. Minimum order
                quantity is 25 kg, shipping FOB from Semarang, Jakarta, or
                Surabaya.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
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
                ].map((row) => (
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

      {/* Why Choose Grade B */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#2C2518] mb-6 uppercase tracking-wider text-sm">
            Why Choose Grade B Extraction
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            Ready to Order Grade B Extraction Vanilla Beans?
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Request a quote today and receive pricing within 24 hours. Volume
            discounts available for orders above 100 kg.
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
              { name: "Grade B Extraction", url: "/products/vanilla-beans/grade-b" },
            ])
          ),
        }}
      />
    </>
  );
}
