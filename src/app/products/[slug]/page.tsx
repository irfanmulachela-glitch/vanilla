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
      <section className="bg-gradient-to-br from-[#D8C393] to-[#C4B07A] text-stone-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/products"
                className="inline-flex items-center text-[#8B7D50] hover:text-stone-900 mb-6 text-sm"
              >
                ← Back to Products
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-stone-700 mb-8">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#C4B07A]/50 text-stone-900 text-sm font-medium rounded-full border border-[#C4B07A]/50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {cert}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main specs table */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <tr key={key} className="hover:bg-gray-100 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
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
            <div className="space-y-6">
              {/* Quick quote card */}
                <div className="bg-[#F5F0E6] rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Get a Quick Quote
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tell us your quantity and requirements. We&apos;ll respond
                  within 24 hours with pricing and availability.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-[#A08C5A] text-white font-medium rounded-lg hover:bg-[#8B7D50] transition-colors"
                >
                  Request Quote
                </Link>
              </div>

              {/* Trust signals */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Why Buy From Us
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "Quality Guaranteed",
                      description: "Food Safety Compliant processing",
                    },
                    {
                      icon: Truck,
                      title: "Fast Shipping",
                      description: "3-7 days worldwide",
                    },
                    {
                      icon: FileCheck,
                      title: "Full Documentation",
                      description: "Phyto, COO, CoA included",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#E8DCC0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#8B7D50]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">
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
                className="block bg-stone-900 text-white rounded-2xl p-6 text-center hover:bg-stone-800 transition-colors"
              >
                <MessageSquare className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">Chat on WhatsApp</p>
                <p className="text-sm text-stone-700">
                  Get instant response
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.products
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
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
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
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
