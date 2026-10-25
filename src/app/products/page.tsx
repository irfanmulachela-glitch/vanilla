import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown, Plus } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";
import { QuickAnswer } from "@/components/quick-answer";

const DESCRIPTION =
  "Indonesian vanilla beans (Grade A & B), custom vanilla paste and 100% pure vanilla powder from Java. Free samples, private label, orders from 1 kg, air freight worldwide.";

const faqs = [
  {
    q: "Which vanilla bean grade should I buy?",
    a: "Choose Grade A (gourmet) for retail, pastry and culinary use: 15-20 cm beans with 25-35% moisture and 1.1-2.5% vanillin. Choose Grade B (extraction) for extract production: 10-15 cm beans with less than 25% moisture and 1.0-2.0% vanillin. Both grades are sun-cured for 6-9 months.",
  },
  {
    q: "Can you customize vanilla paste?",
    a: "Yes. You choose the strength (single, double or triple fold), sugar content (0-65%) and viscosity. We send a sample for your approval before production starts.",
  },
  {
    q: "Do you offer private label?",
    a: "Yes. We pack vanilla beans, paste and powder under your own brand, so you can launch a vanilla line without building your own supply chain. Tell us your packaging and label requirements and we will quote accordingly.",
  },
  {
    q: "What is in your vanilla powder?",
    a: "Our powder is made from 100% pure cured vanilla beans, finely ground to 40-80 mesh with no fillers or additives. It is ideal for dry mixes, baking blends, and applications where liquid vanilla does not fit.",
  },
  {
    q: "Which documents come with an order?",
    a: "Every shipment includes a phytosanitary certificate, commercial invoice, packing list and air waybill. A Certificate of Analysis for your batch is available on request.",
  },
];

export const metadata: Metadata = {
  title: "Vanilla Beans, Paste & Powder",
  description: DESCRIPTION,
  keywords: [
    "vanilla beans Indonesia",
    "vanilla paste manufacturer",
    "vanilla powder supplier",
    "wholesale vanilla products",
    "Grade A vanilla beans",
    "vanilla powder bulk",
  ],
  alternates: {
    canonical: "/products",
    languages: languageAlternates("products"),
  },
  openGraph: {
    images: ogImages,
    title: "Vanilla Beans, Paste & Powder",
    description: DESCRIPTION,
    url: `${siteConfig.url}/products`,
    type: "website",
  },
  twitter: twitterCard("Vanilla Beans, Paste & Powder | La Vanilla Supplier", DESCRIPTION),
};

export default function ProductsPage() {
  const tags: Record<string, string> = {
    beans: "For extracts, baking & retail",
    paste: "For bakeries, ice cream & desserts",
    powder: "For dry mixes, beverages & baking",
  };
  const specRows: Record<string, [string, string][]> = {
    beans: [["species", "Species"], ["vanillinContent", "Vanillin"], ["moistureContent", "Moisture"], ["beanLength", "Length"], ["moq", "Minimum order"]],
    paste: [["strength", "Strength"], ["beans", "Made from"], ["sugarContent", "Sugar"], ["shelfLife", "Shelf life"], ["moq", "Minimum order"]],
    powder: [["purity", "Purity"], ["meshSize", "Mesh size"], ["moisture", "Moisture"], ["vanillinContent", "Vanillin"], ["moq", "Minimum order"]],
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white overflow-hidden flex items-center min-h-[565px] sm:min-h-[390px] md:min-h-[376px] lg:min-h-[455px] xl:min-h-[545px]">
        <div className="absolute inset-0">
          <Image
            src="/products-hero.webp"
            alt="Cured Indonesian vanilla beans drying before export"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2518]/95 via-[#2C2518]/80 to-[#2C2518]/40" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              <span className="w-8 h-px bg-[#B5A37A]" aria-hidden="true" />
              Our Products
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] mb-5">
              Vanilla Beans, Paste &amp; Powder <span className="text-[#B5A37A]">from Java</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              Three product lines from one source: Grade A and B beans, paste made to your
              spec, and 100% pure powder. Shipped by air to 20+ countries, from 1 kg.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#B5A37A] text-[#2C2518] text-sm font-semibold rounded-lg hover:bg-[#D4C48A] transition-colors"
              >
                Request Free Sample
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/wholesale"
                className="inline-flex items-center justify-center px-7 py-3.5 text-white text-sm font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
              >
                See Wholesale Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product jump links */}
      <nav aria-label="Product lines" className="bg-white border-b border-[#EEE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#EEE9E1]">
            {siteConfig.products.map((product) => (
              <li key={product.id}>
                <a
                  href={`#${product.id}`}
                  className="group flex items-center gap-4 py-5 sm:px-6 first:sm:ps-0 lg:py-6"
                >
                  <span className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#F4F2EE] flex-shrink-0">
                    <Image src={product.image} alt="" fill sizes="56px" className="object-cover" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-[#2C2518] group-hover:text-[#B5A37A] transition-colors">
                      {product.name}
                    </span>
                    <span className="block text-sm text-[#9A9187] truncate">{tags[product.category]}</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#B5A37A] group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Quick Answer */}
      <QuickAnswer
        question="What vanilla products can I buy from La Vanilla Supplier?"
        answer="Three product lines, shipped direct from Indonesia: Grade A and Grade B V. planifolia vanilla beans, custom vanilla bean paste, and 100% pure vanilla powder. Free samples, private label and orders from 1 kg are available, with full export documentation to 20+ countries."
      />

      {/* Products */}
      <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {siteConfig.products.map((product, index) => {
              const specs = product.specifications as Record<string, string>;
              return (
                <article
                  key={product.id}
                  id={product.id}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24"
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F2EE]">
                      <Image
                        src={product.image}
                        alt={`Indonesian ${product.name.toLowerCase()} from Java, La Vanilla Supplier`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="flex items-center gap-3 text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                      <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                      <span className="w-6 h-px bg-[#B5A37A]/60" aria-hidden="true" />
                      {tags[product.category]}
                    </p>
                    <h2 className="text-3xl lg:text-[2.4rem] font-bold text-[#2C2518] leading-tight mb-4">
                      {product.name}
                    </h2>
                    <p className="text-[#6B6358] text-lg leading-relaxed mb-8">{product.description}</p>

                    <dl className="border-t border-[#EEE9E1] mb-8">
                      {specRows[product.category].map(([key, label]) =>
                        specs[key] ? (
                          <div key={key} className="flex items-baseline justify-between gap-6 py-3 border-b border-[#EEE9E1]">
                            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A] flex-shrink-0">
                              {label}
                            </dt>
                            <dd className="text-sm font-medium text-[#2C2518] text-right">{specs[key]}</dd>
                          </div>
                        ) : null
                      )}
                    </dl>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-[#2C2518] text-white text-sm font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
                      >
                        View full specifications
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center text-sm font-semibold text-[#2C2518] hover:text-[#B5A37A] transition-colors"
                      >
                        Request a sample
                        <ArrowRight className="ml-1.5 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom formulation & private label */}
      <section className="py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Custom &amp; Private Label
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] leading-tight mb-5">
                Your formula. Your brand.
              </h2>
              <p className="text-lg text-[#6B6358] leading-relaxed mb-10 max-w-xl">
                Tell us what your product needs and we will make the vanilla fit, from a paste
                tuned to your recipe to beans and powder packed under your own label.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-10">
                {[
                  {
                    title: "Custom vanilla paste",
                    items: [
                      "Single, double or triple fold strength",
                      "Sugar content from 0 to 65%",
                      "Viscosity matched to your line",
                      "Sample for approval before production",
                    ],
                  },
                  {
                    title: "Private label",
                    items: [
                      "Beans, paste and powder under your brand",
                      "Packed to your sizes and format",
                      "No supply chain to build yourself",
                      "Full export documents included",
                    ],
                  },
                ].map((block) => (
                  <div key={block.title}>
                    <h3 className="font-semibold text-[#2C2518] mb-4 pb-3 border-b border-[#E5E0D8]">{block.title}</h3>
                    <ul className="space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[#6B6358]">
                          <CheckCircle2 className="w-4 h-4 text-[#B5A37A] mt-1 flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#2C2518] text-white text-sm font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                Discuss your requirements
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/la-vanilla-standard-hero.webp"
                  alt="Vanilla beans drying on racks in Java before grading and packing"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Vanilla Products FAQ</h2>
            <p className="text-lg text-[#6B6358]">
              Grades, customization, private label and documents for our beans, paste and powder.
            </p>
          </div>
          <div className="border-t border-[#EEE9E1]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-[#EEE9E1]">
                <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none text-lg font-semibold text-[#2C2518] hover:text-[#B5A37A] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <Plus className="w-5 h-5 text-[#B5A37A] flex-shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="pb-6 -mt-1 pe-10 text-[#6B6358] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="text-center text-sm text-[#6B6358] mt-10">
            More questions?{" "}
            <Link href="/faq" className="font-medium text-[#2C2518] underline decoration-[#B5A37A] underline-offset-4 hover:text-[#B5A37A]">
              Read the full FAQ
            </Link>
          </p>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Vanilla Products",
            itemListElement: siteConfig.products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.name,
                description: product.shortDescription,
                url: `${siteConfig.url}/products/${product.slug}`,
                image: `${siteConfig.url}${product.image}`,
                category: product.category,
                brand: {
                  "@type": "Brand",
                  name: "La Vanilla Supplier",
                },
              },
            })),
          }),
        }}
      />

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
