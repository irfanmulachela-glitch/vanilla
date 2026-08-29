import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Products - Vanilla Beans, Paste & Powder",
  description:
    "Explore our range of premium Indonesian vanilla products. Grade A & B beans, custom vanilla paste, and pure vanilla powder. Food Safety Standards. MOQ 25kg.",
  keywords: [
    "vanilla beans Indonesia",
    "vanilla paste manufacturer",
    "vanilla powder supplier",
    "wholesale vanilla products",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products - La Vanilla Supplier",
    description: "Premium Indonesian vanilla products including beans, paste, and powder.",
    url: "https://lavanillasupplier.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2C2518] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Vanilla <span className="text-[#B5A37A]">Products</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              From raw beans to custom formulations — we provide complete
              vanilla solutions for food manufacturers, distributors, and
              artisan producers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {siteConfig.products.map((product, index) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E0D8]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="inline-block px-3 py-1 bg-[#F8F6F2] text-[#B5A37A] text-xs font-semibold uppercase tracking-wider rounded-full mb-4 border border-[#E5E0D8]">
                    {product.category === "beans"
                      ? "Vanilla Beans"
                      : product.category === "paste"
                      ? "Vanilla Paste"
                      : "Vanilla Powder"}
                  </span>
                  <h2 className="text-3xl font-bold text-[#2C2518] mb-4">
                    {product.name}
                  </h2>
                  <p className="text-[#6B6358] mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(product.specifications)
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-[#F8F6F2] rounded-lg p-3 border border-[#E5E0D8]"
                        >
                          <p className="text-xs text-[#6B6358] uppercase tracking-wide mb-0.5">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p className="font-semibold text-[#2C2518] text-sm">
                            {value}
                          </p>
                        </div>
                      ))}
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F8F6F2] text-[#2C2518] text-sm font-medium rounded-full border border-[#E5E0D8]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B5A37A]" />
                        {cert}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-[#2C2518] text-white font-medium rounded-lg hover:bg-[#3D3425] transition-colors"
                  >
                    View Full Specifications
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Formulation CTA */}
      <section className="py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-[#E5E0D8]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2C2518] mb-4">
                  Need a Custom Vanilla Formulation?
                </h2>
                <p className="text-[#6B6358] mb-6 leading-relaxed">
                  We specialize in creating custom vanilla paste compositions
                  tailored to your exact specifications. Whether you need a
                  specific vanillin concentration, sugar content, or viscosity —
                  we can develop it for you.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Adjustable vanillin concentration (1.0-3.0%)",
                    "Custom sugar content (0-65%)",
                    "Various viscosity options",
                    "Small batch prototyping available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#B5A37A] mt-0.5 flex-shrink-0" />
                      <span className="text-[#6B6358]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#2C2518] text-white font-medium rounded-lg hover:bg-[#3D3425] transition-colors"
                >
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="relative hidden lg:block">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#E5E0D8]">
                  <Image
                    src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600"
                    alt="Custom vanilla paste formulation"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Vanilla Products",
            description:
              "Premium Indonesian vanilla products including beans, paste, and powder",
            url: `${siteConfig.url}/products`,
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
              { name: "Products", url: "/products" },
            ])
          ),
        }}
      />
    </>
  );
}
