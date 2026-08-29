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
import { siteConfig } from "@/lib/config";

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
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = siteConfig.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
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
            {product.name}
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

      {/* Product + Quick Info */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E5E0D8]">
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
            <div>
              <h2 className="text-2xl font-bold text-[#2C2518] mb-6">
                Quick Overview
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, label: "Quality", value: "Assured" },
                  { icon: Package, label: "MOQ", value: "25 kg" },
                  { icon: Truck, label: "Shipping", value: "FOB/CIF/DDP" },
                  { icon: FileCheck, label: "Documents", value: "Included" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg border border-[#E5E0D8] bg-[#F8F6F2]"
                  >
                    <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center mb-3">
                      <stat.icon className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <p className="font-semibold text-[#2C2518] text-sm">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#6B6358]">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-[#B5A37A] text-white font-semibold rounded-lg hover:bg-[#A8956A] transition-colors"
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications + Sidebar */}
      <section className="bg-[#F8F6F2] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Specs Table */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#2C2518] mb-6">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-xl border border-[#E5E0D8] overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#F8F6F2]">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                        Specification
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, value], index) => (
                        <tr
                          key={key}
                          className={
                            index % 2 === 0
                              ? "bg-white"
                              : "bg-[#F8F6F2]/50"
                          }
                        >
                          <td className="px-6 py-3 text-sm font-medium text-[#2C2518] border-b border-[#E5E0D8]/50">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </td>
                          <td className="px-6 py-3 text-sm text-[#6B6358] border-b border-[#E5E0D8]/50">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Quote Card */}
              <div className="bg-white rounded-xl p-6 border border-[#E5E0D8]">
                <h3 className="font-bold text-[#2C2518] mb-2">
                  Get a Quote
                </h3>
                <p className="text-sm text-[#6B6358] mb-4">
                  Tell us your quantity and requirements. We&apos;ll respond
                  within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A] transition-colors"
                >
                  Request Quote
                </Link>
              </div>

              {/* Trust Card */}
              <div className="bg-white rounded-xl p-6 border border-[#E5E0D8]">
                <h3 className="font-bold text-[#2C2518] mb-4">
                  Why Buy From Us
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: Shield,
                      title: "Quality Guaranteed",
                      desc: "Food Safety Standards",
                    },
                    {
                      icon: Truck,
                      title: "Flexible Shipping",
                      desc: "FOB, CIF, or DDP",
                    },
                    {
                      icon: FileCheck,
                      title: "Full Documentation",
                      desc: "Phyto, COO, CoA",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#B5A37A]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#2C2518]">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#6B6358]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}?text=Hi, I'm interested in ${product.name}. Can you provide more details?`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2C2518] text-white rounded-xl p-5 text-center hover:bg-[#3D3425] transition-colors"
              >
                <MessageSquare className="w-6 h-6 mx-auto mb-2 text-[#B5A37A]" />
                <p className="font-bold text-sm">Chat on WhatsApp</p>
                <p className="text-xs text-stone-400">Instant response</p>
              </a>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E0D8]">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#B5A37A] fill-[#B5A37A]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#6B6358] italic mb-2">
                  &ldquo;The vanillin content and aroma were exactly as
                  promised. Safe to say we are hooked.&rdquo;
                </p>
                <p className="text-xs font-medium text-[#2C2518]">Sophie</p>
                <p className="text-xs text-[#6B6358]">Budapest, Hungary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C2518] mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Leaf,
                title: "Premium Quality",
                desc: "Carefully selected and processed to meet international standards",
              },
              {
                icon: Award,
                title: "Quality Assured",
                desc: "Every batch tested with Certificate of Analysis provided",
              },
              {
                icon: FileCheck,
                title: "Full Documentation",
                desc: "Phytosanitary, Certificate of Origin, and export documents included",
              },
              {
                icon: Package,
                title: "Flexible Packaging",
                desc: "Bulk or retail packaging options to suit your requirements",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-4 rounded-xl border border-[#E5E0D8] bg-[#F8F6F2]"
              >
                <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-[#B5A37A]" />
                </div>
                <h3 className="font-semibold text-[#2C2518] text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#6B6358] text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: `${siteConfig.url}${product.image}`,
            brand: {
              "@type": "Brand",
              name: siteConfig.name,
            },
            manufacturer: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            category: product.category,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: siteConfig.name,
              },
            },
            additionalProperty: Object.entries(product.specifications).map(
              ([key, value]) => ({
                "@type": "PropertyValue",
                name: key.replace(/([A-Z])/g, " $1").trim(),
                value: value,
              })
            ),
          }),
        }}
      />
    </>
  );
}
