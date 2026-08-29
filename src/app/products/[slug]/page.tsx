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
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={product.image}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2518] via-[#2C2518]/90 to-[#2C2518]/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/products"
                className="inline-flex items-center text-[#B5A37A] hover:text-white mb-6 text-sm transition-colors"
              >
                ← Back to Products
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg hover:bg-[#F8F6F2] transition-colors"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-lg hover:bg-[#A8956A] transition-colors"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#B5A37A] text-white rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm font-medium">MOQ 25kg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "Quality", value: "Assured" },
              { icon: Package, label: "MOQ", value: "25 kg" },
              { icon: Truck, label: "Shipping", value: "FOB/CIF/DDP" },
              { icon: FileCheck, label: "Documents", value: "Included" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-[#F8F6F2] rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#B5A37A]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#2C2518]">{stat.value}</p>
                  <p className="text-sm text-[#6B6358]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main specs */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#2C2518] mb-6">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-2xl border border-[#D8D3C9] overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#2C2518]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                        Specification
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D8]">
                    {Object.entries(product.specifications).map(
                      ([key, value], index) => (
                        <tr key={key} className={index % 2 === 0 ? "bg-white" : "bg-[#F8F6F2]"}>
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

              {/* Key Features */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#2C2518] mb-6">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Leaf,
                      title: "Premium Quality",
                      description: "Carefully selected and processed to meet international standards",
                    },
                    {
                      icon: Shield,
                      title: "Quality Assured",
                      description: "Every batch tested with Certificate of Analysis provided",
                    },
                    {
                      icon: FileCheck,
                      title: "Full Documentation",
                      description: "Phytosanitary, Certificate of Origin, and export documents included",
                    },
                    {
                      icon: Package,
                      title: "Flexible Packaging",
                      description: "Bulk or retail packaging options to suit your requirements",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-white p-4 rounded-xl border border-[#D8D3C9] flex items-start gap-3"
                    >
                      <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-[#B5A37A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2C2518] text-sm mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-[#6B6358] text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick quote card */}
              <div className="bg-white rounded-2xl p-6 border border-[#D8D3C9]">
                <h3 className="font-bold text-[#2C2518] mb-4">
                  Get a Quick Quote
                </h3>
                <p className="text-sm text-[#6B6358] mb-4">
                  Tell us your quantity and requirements. We&apos;ll respond
                  within 24 hours with pricing and availability.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A] transition-colors"
                >
                  Request Quote
                </Link>
              </div>

              {/* Trust signals */}
              <div className="bg-white rounded-2xl p-6 border border-[#D8D3C9]">
                <h3 className="font-bold text-[#2C2518] mb-4">
                  Why Buy From Us
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "Quality Guaranteed",
                      description: "Food Safety Standards processing",
                    },
                    {
                      icon: Truck,
                      title: "Flexible Shipping",
                      description: "FOB, CIF, or DDP terms",
                    },
                    {
                      icon: FileCheck,
                      title: "Full Documentation",
                      description: "Phyto, COO, CoA included",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#B5A37A]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#2C2518] text-sm">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#6B6358]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}?text=Hi, I'm interested in ${product.name}. Can you provide more details?`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2C2518] text-white rounded-2xl p-6 text-center hover:bg-[#3D3425] transition-colors"
              >
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-[#B5A37A]" />
                <p className="font-bold">Chat on WhatsApp</p>
                <p className="text-sm text-stone-400">
                  Get instant response
                </p>
              </a>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl p-6 border border-[#D8D3C9]">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#B5A37A] fill-[#B5A37A]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#6B6358] italic mb-3">
                  &ldquo;The vanillin content and aroma were exactly as promised.
                  Safe to say we are hooked.&rdquo;
                </p>
                <p className="text-sm font-medium text-[#2C2518]">Sophie</p>
                <p className="text-xs text-[#6B6358]">Budapest, Hungary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2C2518] mb-8">
            Other Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.products
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-xl border border-[#D8D3C9] overflow-hidden hover:shadow-lg transition-all duration-300"
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
                    <p className="text-sm text-[#6B6358] mt-1">
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
