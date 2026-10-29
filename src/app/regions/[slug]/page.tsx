import { Metadata } from "next";
import { UsAgentSection } from "@/components/us-agent";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { twitterCard, ogImages } from "@/lib/seo";

const META_DESCRIPTIONS: Record<string, string> = {
  uae: "Premium Indonesian vanilla supplier for Dubai, Abu Dhabi, and the GCC. Halal certified beans, paste, and powder with fast air freight and flexible quantities.",
  australia:
    "Indonesian vanilla supplier for Sydney, Melbourne and Perth. Grade A and B beans, paste and powder by air in 3-7 days, with phytosanitary certificates. Free samples.",
  usa: "Indonesian vanilla supplier for New York, Los Angeles and Chicago. Full export documents, an authorized US agent for samples and meetings, and orders from 1 kg.",
  europe:
    "Indonesian vanilla supplier for the Netherlands, France and Germany. Grade A and B beans, paste and powder by air in 3-7 days, with full export documents.",
};

const REGION_TITLES: Record<string, string> = {
  uae: "Vanilla Supplier UAE & Middle East",
  australia: "Vanilla Supplier Australia | Bulk",
  usa: "Vanilla Supplier USA | Wholesale",
  europe: "Vanilla Supplier Europe | Bulk",
};

type RegionPoint = { title: string; body: string };

type RegionConfig = {
  name: string;
  /** how the region reads inside a sentence */
  place: string;
  slug: string;
  headline: string;
  intro: string;
  description: string;
  keywords: string[];
  points: RegionPoint[];
  cities: string[];
};

const DOCS =
  "Phytosanitary certificate, commercial invoice, packing list and air waybill with every shipment, plus a Certificate of Analysis per batch on request.";

const regions: Record<string, RegionConfig> = {
  uae: {
    name: "UAE & Middle East",
    place: "the UAE and the Gulf",
    slug: "uae",
    headline: "for Dubai and the GCC",
    intro:
      "Halal certified vanilla beans, paste and powder from Java, flown to Dubai, Abu Dhabi and across the Gulf in 3 to 7 days.",
    description:
      "Indonesian vanilla supplier for Dubai, Abu Dhabi and the GCC. Halal certified beans, paste and powder by air in 3-7 days.",
    keywords: [
      "vanilla supplier UAE",
      "vanilla beans Dubai",
      "wholesale vanilla Middle East",
      "vanilla paste supplier Abu Dhabi",
    ],
    points: [
      { title: "Halal certified by MUI", body: "Every product we supply is Halal certified by MUI, Indonesia's Halal authority." },
      { title: "Air freight to the Gulf", body: "Shipped by DHL, FedEx or air cargo to Dubai, Abu Dhabi, Riyadh and Doha in 3 to 7 days." },
      { title: "Documents ready for customs", body: DOCS },
      { title: "Private label for your brand", body: "Beans, paste and powder packed under your own label, ready for shelves across the region." },
    ],
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Doha", "Riyadh", "Jeddah"],
  },
  australia: {
    name: "Australia",
    place: "Australia",
    slug: "australia",
    headline: "for buyers across Australia",
    intro:
      "Gourmet and extraction grade vanilla from Java, flown to Sydney, Melbourne, Perth and beyond in 3 to 7 days, with the paperwork ready.",
    description:
      "Indonesian vanilla supplier for Sydney, Melbourne, Perth and across Australia, with a phytosanitary certificate on every shipment.",
    keywords: [
      "vanilla supplier Australia",
      "vanilla beans Sydney",
      "wholesale vanilla Melbourne",
      "vanilla paste supplier Perth",
    ],
    points: [
      { title: "Phytosanitary certificate every time", body: "Australia checks plant products closely, so every shipment travels with a phytosanitary certificate." },
      { title: "Air freight to major cities", body: "Delivered to Sydney, Melbourne, Brisbane, Perth and Adelaide in 3 to 7 days." },
      { title: "Certificate of Analysis on request", body: "A CoA per batch confirms the specs of the grade you ordered." },
      { title: "Start from 1 kg", body: "Test with a small order and a free sample before you commit to regular supply." },
    ],
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  usa: {
    name: "USA",
    place: "the US",
    slug: "usa",
    headline: "for buyers across the US",
    intro:
      "Vanilla beans, paste and powder from Java, shipped to both coasts in 3 to 7 days, with an authorized agent on the ground in the US.",
    description:
      "Indonesian vanilla supplier for buyers across the United States, with full export documents and an authorized US agent.",
    keywords: [
      "vanilla supplier USA",
      "vanilla beans New York",
      "wholesale vanilla California",
      "vanilla paste supplier Texas",
    ],
    points: [
      { title: "Regular US shipments", body: "DHL, FedEx or air cargo to the East and West coast in 3 to 7 days." },
      { title: "Import paperwork in order", body: DOCS },
      { title: "Private label for your brand", body: "Beans, paste and powder packed under your own label, from glass jars to vacuum packs." },
      { title: "Start from 1 kg", body: "Test with a small order and a free sample before you commit to regular supply." },
    ],
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco", "Miami"],
  },
  europe: {
    name: "Europe",
    place: "Europe",
    slug: "europe",
    headline: "for buyers across Europe",
    intro:
      "Gourmet and extraction grade vanilla from Java, flown to Europe's main cities in 3 to 7 days, with every document your importer needs.",
    description:
      "Indonesian vanilla supplier for the Netherlands, France, Germany and across Europe, with full export documents.",
    keywords: [
      "vanilla supplier Europe",
      "vanilla beans Netherlands",
      "wholesale vanilla France",
      "vanilla paste supplier Germany",
    ],
    points: [
      { title: "Documents for import", body: DOCS },
      { title: "Air freight to main hubs", body: "Delivered to Amsterdam, Paris, Berlin, London, Milan and Barcelona in 3 to 7 days." },
      { title: "Two clear grades", body: "Grade A gourmet for retail and pastry, Grade B extraction for extract and flavour makers." },
      { title: "Halal certified by MUI", body: "Every product we supply is Halal certified by MUI, Indonesia's Halal authority." },
    ],
    cities: ["Amsterdam", "Paris", "Berlin", "London", "Milan", "Barcelona"],
  },
};

const PRODUCT_TAGS: Record<string, string> = {
  beans: "For extracts, baking & retail",
  paste: "For bakeries, ice cream & desserts",
  powder: "For dry mixes, beverages & baking",
};

const EYEBROW = "text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export async function generateStaticParams() {
  return Object.keys(regions).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = regions[slug];

  if (!region) {
    return { title: "Region Not Found" };
  }

  const title = REGION_TITLES[slug] ?? `Vanilla Supplier ${region.name}`;
  const description = META_DESCRIPTIONS[slug] ?? region.description;

  return {
    title,
    description,
    keywords: region.keywords,
    alternates: {
      canonical: `/regions/${slug}`,
    },
    openGraph: {
      images: ogImages,
      title,
      description,
      url: `${siteConfig.url}/regions/${slug}`,
      type: "website",
    },
    twitter: twitterCard(`${title} | La Vanilla Supplier`, description),
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = regions[slug];

  if (!region) {
    notFound();
  }

  const otherRegions = Object.values(regions).filter((r) => r.slug !== slug);

  const glance: [string, string][] = [
    ["Transit", "3–7 days by air"],
    ["Terms", "FCA Surakarta or CPT"],
    ["Minimum order", "From 1 kg"],
    ["Samples", "Free, you cover shipping"],
    ["Certification", "Halal (MUI)"],
  ];

  return (
    <>
      {/* Masthead: type-led on cream, the key terms on the right */}
      <section className="bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 lg:mb-14 text-sm text-[#9A9187]">
            <Link href="/wholesale" className="hover:text-[#2C2518] transition-colors">Wholesale</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-[#2C2518]">{region.name}</span>
          </nav>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-end">
            <div>
              <p className={EYEBROW}>Export region · {region.name}</p>
              <h1 className="sr-headline text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.08] tracking-tight text-[#2C2518] font-[family-name:var(--font-libre)] mb-6">
                <span className="font-bold">Indonesian vanilla</span>{" "}
                <br className="hidden sm:block" />
                <span className="italic font-normal text-[#8C7A4F]">{region.headline}</span>
              </h1>
              <p className="text-lg text-[#6B6358] leading-relaxed max-w-lg mb-8">{region.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
                >
                  Get a quote
                  <ArrowRight className="ms-2 w-5 h-5" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#2C2518] font-semibold rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25A55F]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-1">At a glance</p>
              <dl className="border-b border-[#E5E0D8]">
                {glance.map(([k, v], i) => (
                  <div key={k} className={`flex items-baseline justify-between gap-6 py-3.5 ${i ? "border-t border-[#E5E0D8]" : ""}`}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A]">{k}</dt>
                    <dd className="font-medium text-[#2C2518] text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {slug === "usa" && <UsAgentSection />}

      {/* What buyers in this region get */}
      <section className={`py-20 lg:py-24 bg-white ${slug === "usa" ? "border-t border-[#EEE9E1]" : ""}`} aria-labelledby="region-points">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className={EYEBROW}>Why buyers choose us</p>
              <h2 id="region-points" className="text-3xl lg:text-4xl font-bold text-[#2C2518] leading-tight">
                What you get in {region.place}
              </h2>
            </div>
            <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 border-t border-[#E5E0D8] sm:border-t-0">
              {region.points.map((pt, i) => (
                <li key={pt.title} className="py-6 border-b border-[#E5E0D8] sm:border-t sm:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b">
                  <span className="font-[family-name:var(--font-libre)] text-lg text-[#B5A37A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[#2C2518]">{pt.title}</h3>
                  <p className="mt-1.5 text-[#6B6358] leading-relaxed">{pt.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-20 lg:py-24 bg-[#2C2518] text-white" aria-labelledby="region-shipping">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={EYEBROW}>Shipping</p>
          <h2 id="region-shipping" className="text-3xl lg:text-4xl font-bold leading-tight mb-12 max-w-2xl">
            From Java to {region.place}, by air
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 border-t border-[#4E463A]">
            {[
              ["Transit time", "3–7 days", "DHL, FedEx or air cargo. Sea freight on request for very large orders."],
              ["Terms", "FCA or CPT", "FCA Surakarta, or CPT if you want air freight included in the price."],
              ["Documents", "Ready for customs", "Phytosanitary certificate, invoice, packing list and air waybill. CoA per batch on request."],
              ["Delivering to", region.cities.slice(0, 3).join(", "), `And ${region.cities.slice(3).join(", ")}.`],
            ].map(([k, v, d]) => (
              <div key={k} className="py-7 border-b border-[#4E463A] lg:border-b-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A]">{k}</dt>
                <dd className="mt-3">
                  <p className="text-xl font-semibold text-white">{v}</p>
                  <p className="mt-2 text-sm text-[#C9C3B8] leading-relaxed">{d}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-24 bg-white" aria-labelledby="region-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className={EYEBROW}>Our products</p>
            <h2 id="region-products" className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              What we ship to {region.place}
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Vanilla beans, paste and powder from Java, all from 1 kg.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {siteConfig.products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group flex flex-col">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F2EE]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pt-6 flex flex-col flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mb-2">
                    {PRODUCT_TAGS[product.category]}
                  </p>
                  <h3 className="text-xl font-semibold text-[#2C2518] mb-2">{product.name}</h3>
                  <p className="text-[#6B6358] leading-relaxed mb-5">{product.shortDescription}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#2C2518]">
                    View product
                    <ArrowRight className="ms-2 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA + other regions (cream, so the dark footer follows a light section) */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className={EYEBROW}>Next step</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Sourcing vanilla for {region.place}?
            </h2>
            <p className="text-lg text-[#6B6358] mb-8">
              Tell us what you make, the grade and volume you need. We reply within 24 hours, and your
              first sample is free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                Request a quote
                <ArrowRight className="ms-2 w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25A55F]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-1 text-center sm:text-start">
              Other export regions
            </p>
            <ul className="grid sm:grid-cols-3 gap-x-8 border-t border-[#E5E0D8]">
              {otherRegions.map((other) => (
                <li key={other.slug} className="border-b border-[#E5E0D8]">
                  <Link href={`/regions/${other.slug}`} className="group flex items-center justify-between py-4">
                    <span className="font-semibold text-[#2C2518] group-hover:text-[#8C7A4F] transition-colors">
                      {other.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: `Vanilla Supplier ${region.name}`,
              description: region.description,
              url: `${siteConfig.url}/regions/${region.slug}`,
              mainEntity: {
                "@type": "Organization",
                name: siteConfig.name,
                areaServed: {
                  "@type": "Country",
                  name: region.name,
                },
              },
            },
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Wholesale", url: "/wholesale" },
              { name: region.name, url: `/regions/${region.slug}` },
            ]),
          ]),
        }}
      />
    </>
  );
}
