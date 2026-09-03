import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Truck,
  Shield,
  MessageSquare,
  Star,
  Package,
  Leaf,
  Clock,
  Award,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import GradeSelector from "@/components/grade-selector";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteConfig.products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = siteConfig.products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} - Premium Indonesian Vanilla`,
    description: product.shortDescription,
    keywords: [
      product.name.toLowerCase(),
      "vanilla supplier Indonesia",
      "wholesale vanilla",
      "B2B vanilla",
    ],
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: `${product.name} - La Vanilla Supplier`,
      description: product.shortDescription,
      url: `${siteConfig.url}/products/${slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = siteConfig.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Use GradeSelector for vanilla beans page
  if (slug === "vanilla-beans") {
    return <GradeSelector />;
  }

  return (
    <>
      {/* Hero - Clean, minimal */}
      <section className="bg-[#2C2518] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-[#B5A37A] hover:text-white mb-4 text-sm transition-colors"
          >
            ← Back to Products
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {product.name} — Premium Indonesian {product.category === "beans" ? "Vanilla Beans" : product.category === "paste" ? "Vanilla Paste" : "Vanilla Powder"} for Wholesale & B2B
          </h1>
          <p className="text-stone-300 max-w-2xl mb-6 leading-relaxed">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B5A37A]" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Vanilla Paste Only */}
      {slug === "vanilla-paste" && (
        <section className="grid lg:grid-cols-2">
          <div className="relative bg-[#2C2518] h-[600px] lg:h-[700px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/vanilla-paste-process.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col justify-center px-10 lg:px-20 py-16 lg:py-20 bg-[#F8F6F2]">
            <h2 className="text-xs font-semibold text-[#B5A37A] uppercase tracking-wider mb-4">
              Our Process
            </h2>
            <p className="text-xl text-[#2C2518] leading-relaxed mb-8">
              We produce vanilla paste at scale to meet B2B demand. Our team blends ground vanilla beans with natural sugar and glycerin to create a smooth, spreadable paste that holds up during baking and cooking.
            </p>
            <ul className="space-y-4">
              {[
                "Vanilla beans ground in-house for maximum freshness",
                "Consistent texture across every batch",
                "Halal certified production facility",
                "Ready for export",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#2C2518]">
                  <CheckCircle2 className="w-5 h-5 text-[#B5A37A] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Product + Quick Info */}
      <section className="bg-white py-12 lg:py-16">
        <div className="px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Product Image */}
            <div className="sticky top-24 h-full">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E0D8] bg-[#F8F6F2] h-full">
                <Image
                  src={product.image}
                  alt={product.name}
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
                La Vanilla Supplier provides <strong className="text-[#2C2518]">{product.name}</strong> sourced directly from Indonesian smallholder farmers. Every batch is quality-tested for vanillin content and moisture, with full documentation included. Minimum order quantity is 25 kg, shipping FOB from Semarang, Jakarta, or Surabaya.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, label: "Quality Assured", value: "Lab-Tested", desc: "Third-party vanillin verification" },
                  { icon: Package, label: "Minimum Order", value: "25 kg", desc: "Flexible for trial orders" },
                  { icon: Truck, label: "Shipping Terms", value: "FOB/CIF/DDP", desc: "Semarang, Jakarta, Surabaya" },
                  { icon: FileCheck, label: "Documents", value: "All Included", desc: "CoA, Phytosanitary, COO" },
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
                    <p className="text-xs font-medium text-[#B5A37A] mt-0.5">{stat.label}</p>
                    <p className="text-xs text-[#6B6358] mt-1">{stat.desc}</p>
                  </div>
                ))}
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
                {Object.entries(product.specifications).map(
                  ([key, value], index) => (
                    <tr
                      key={key}
                      className="border-b border-[#E5E0D8]/50 last:border-0 hover:bg-[#F8F6F2]/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-[#2C2518]">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6B6358]">
                        {value}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#2C2518] mb-6 uppercase tracking-wider text-sm">
            Why Choose {product.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "Premium Quality",
                desc: "Carefully selected and processed to meet international standards for consistent flavor and aroma.",
              },
              {
                icon: Award,
                title: "Quality Assured",
                desc: "Every batch tested with Certificate of Analysis provided. Third-party verification for vanillin content.",
              },
              {
                icon: FileCheck,
                title: "Full Documentation",
                desc: "Phytosanitary Certificate, Certificate of Origin, and all export documents included with every shipment.",
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
            Ready to Order {product.name}?
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

      {/* Related Products */}
      <section className="bg-[#F8F6F2] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C2518] mb-6">
            Other Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.products
              .filter((p) => p.slug !== slug)
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: product.name, url: `/products/${product.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
