import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Plus,
  Plane,
  TrendingDown,
  Clock,
  Layers,
  Handshake,
  Sprout,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";
import { QuickAnswer } from "@/components/quick-answer";
import { ProcessSteps } from "@/components/process-steps";

const DESCRIPTION =
  "Premium wholesale vanilla beans from Indonesia. Grade A & B beans, vanilla paste, and powder from source. Export to 20+ countries with flexible order sizes.";

const faqs = [
  {
    q: "What are wholesale vanilla prices?",
    a: "Pricing depends on grade, volume, and contract terms. Send us your grade, quantity, and destination for a competitive air freight quote within 24 hours. Volume pricing improves with larger orders, and long-term contracts receive additional discounts.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Order quantities start from 1 kg. Free samples are available for evaluation, and we supply consistent monthly volumes well beyond 100 kg for established partners.",
  },
  {
    q: "Can I order samples before a bulk order?",
    a: "Yes. We offer free samples for serious buyers, shipped via DHL or FedEx within 3-5 days, so your team can verify quality before committing to a full shipment. You only cover shipping.",
  },
  {
    q: "How are bulk shipments delivered?",
    a: "Air freight is our standard: DHL, FedEx, or air cargo worldwide in 3-7 days, on FCA or CPT terms. Sea freight can be arranged on request for very large orders.",
  },
  {
    q: "What are your payment terms?",
    a: "We accept T/T (bank transfer), Wise and PayPal. Standard orders are paid 100% before dispatch. For larger or scheduled orders we offer deposit terms, and L/C at sight for long-term supply contracts, agreed per order.",
  },
];

export const metadata: Metadata = {
  title: "Wholesale Vanilla Beans Supplier",
  description: DESCRIPTION,
  keywords: [
    "wholesale vanilla beans",
    "bulk vanilla supplier",
    "vanilla beans Indonesia wholesale",
    "vanilla paste bulk",
    "vanilla powder wholesale",
    "Indonesian vanilla supplier",
  ],
  alternates: {
    canonical: "/wholesale",
    languages: languageAlternates("wholesale"),
  },
  openGraph: {
    images: ogImages,
    title: "Wholesale Vanilla Beans Supplier",
    description: DESCRIPTION,
    url: `${siteConfig.url}/wholesale`,
    type: "website",
  },
  twitter: twitterCard("Wholesale Vanilla Beans Supplier | La Vanilla Supplier", DESCRIPTION),
};

const EYEBROW = "text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4";

const TAGS: Record<string, string> = {
  beans: "For extracts, baking & retail",
  paste: "For bakeries, ice cream & desserts",
  powder: "For dry mixes, beverages & baking",
};

const figures = [
  { icon: TrendingDown, label: "Volume pricing", value: "100+", unit: "kg", note: "Better rates per kilo" },
  { icon: Clock, label: "Quote in", value: "24", unit: "hours", note: "Priced for your exact order" },
  { icon: Layers, label: "Mixed orders", value: "3", unit: "products", note: "Beans, paste and powder together" },
  { icon: Handshake, label: "Supply contracts", value: "Fixed", unit: "pricing", note: "Steady volume and price all year" },
];

const benefits = [
  {
    icon: Sprout,
    title: "Direct from Java",
    description:
      "We work hand in hand with vanilla farmers in Java, so there are no middlemen between their harvest and your order.",
  },
  {
    icon: ShieldCheck,
    title: "Checked every batch",
    description:
      "Every batch is graded and checked before it ships. A Certificate of Analysis is available for each batch on request.",
  },
  {
    icon: FileCheck,
    title: "Export documents included",
    description:
      "Phytosanitary certificate, commercial invoice, packing list and air waybill come with every shipment.",
  },
  {
    icon: Plane,
    title: "Fast air freight",
    description:
      "Air freight worldwide in 3–7 days, on FCA or CPT terms to suit how you import.",
  },
];

const steps = [
  { title: "Request a quote", description: "Tell us the product, grade, quantity and destination." },
  { title: "Get your pricing", description: "We reply with a detailed quote within 24 hours." },
  { title: "Confirm your order", description: "Approve the quote and we start preparing your batch." },
  { title: "Receive your delivery", description: "Your vanilla ships by air with full export documents." },
];

const priceFactors = [
  { title: "Grade", description: "Grade A (Gourmet) or Grade B (Extraction)." },
  { title: "Vanillin content", description: "Beans with higher vanillin command a higher price." },
  { title: "Volume", description: "Larger orders, from 100 kg up, get better rates per kilo." },
  { title: "Contract", description: "Long-term supply contracts receive additional discounts." },
];

const terms: { label: string; value: string; detail?: string; list?: [string, string][] }[] = [
  {
    label: "Minimum order",
    value: "From 1 kg",
    detail: "Free samples available. You only cover shipping.",
  },
  {
    label: "Payment",
    value: "T/T (bank transfer), Wise or PayPal",
    detail:
      "Standard orders are paid 100% before dispatch. Deposit terms for larger or scheduled orders, and L/C at sight for long-term supply contracts, agreed per order.",
  },
  {
    label: "Packaging",
    value: "Packed to suit your use",
    list: [
      ["Vanilla beans", "Vacuum-sealed, 1 kg or 2.5 kg packs"],
      ["Vanilla paste", "1 kg plastic jars, or glass jars for private label"],
      ["Vanilla powder", "Vacuum-sealed packs"],
    ],
    detail: "Need a different pack size or format? Tell us how you want it packed and we will work it out together.",
  },
  {
    label: "Supply capacity",
    value: "Hundreds of kilos per month",
    detail: "For regular buyers, we can schedule shipments around your production.",
  },
  {
    label: "Shipping",
    value: "Air freight, 3–7 days",
    detail: "FCA (Surakarta) or CPT. Sea freight on request for very large orders.",
  },
  {
    label: "Documents",
    value: "Full export paperwork",
    detail:
      "Phytosanitary certificate, commercial invoice, packing list and air waybill. A Certificate of Analysis is available per batch on request.",
  },
  {
    label: "Certification",
    value: "Halal certified (MUI)",
  },
  {
    label: "Private label",
    value: "Available",
    detail: "Your brand on our vanilla, from the jar to the label.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function WholesalePage() {
  const whatsapp = `https://wa.me/${siteConfig.social.whatsapp}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white overflow-hidden flex items-center min-h-[565px] sm:min-h-[390px] md:min-h-[376px] lg:min-h-[455px] xl:min-h-[545px]">
        <div className="absolute inset-0">
          <Image
            src="/wholesale-hero.webp"
            alt="Vanilla vines growing on a farm in Java, Indonesia"
            fill
            sizes="100vw"
            className="object-cover object-[65%_45%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2518]/95 via-[#2C2518]/75 to-[#2C2518]/25 rtl:bg-gradient-to-l" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] mb-5">
              Wholesale Vanilla <br className="hidden sm:block" />
              <span className="text-[#B5A37A]">from Indonesia</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              Volume pricing, steady monthly supply and flexible terms for importers,
              distributors and food manufacturers, shipped by air from Java.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#B5A37A] text-[#2C2518] text-sm font-semibold rounded-lg hover:bg-[#D4C48A] transition-colors"
              >
                Get Wholesale Quote
                <ArrowRight className="ms-2 w-4 h-4 rtl:rotate-180" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-3.5 text-white text-sm font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section aria-label="Key figures" className="bg-white border-b border-[#EEE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 py-10 lg:py-0 lg:gap-0 lg:divide-x rtl:lg:divide-x-reverse divide-[#EEE9E1]">
            {figures.map((fig) => (
              <div key={fig.label} className="flex items-start gap-3.5 lg:gap-4 lg:px-8 lg:py-10 first:lg:ps-0 last:lg:pe-0">
                <fig.icon className="w-5 h-5 mt-1 flex-shrink-0 text-[#B5A37A]" strokeWidth={1.6} aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A9187]">{fig.label}</dt>
                  <dd className="mt-1.5">
                    <span className="text-[1.65rem] lg:text-[2rem] font-bold leading-none tracking-tight text-[#2C2518]">
                      <span dir="ltr" data-count className="tabular-nums">{fig.value}</span>
                      {fig.unit && <span className="ms-1.5 text-base lg:text-lg font-semibold text-[#B5A37A]">{fig.unit}</span>}
                    </span>
                    <span className="block mt-2 text-[13px] leading-snug text-[#6B6358]">{fig.note}</span>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Quick Answer */}
      <QuickAnswer
        question="What is wholesale vanilla from La Vanilla Supplier?"
        answer="Buying wholesale means ordering vanilla in larger volumes directly from us in Indonesia, where the price per kilo drops as your order grows compared to small-quantity buying. If you purchase regularly, we can also set up a supply contract that holds your volume and pricing steady across shipments, so your costs stay predictable throughout the year."
      />

      {/* Why buy wholesale */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <p className={EYEBROW}>Why Buy From Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Wholesale vanilla, without the guesswork
            </h2>
            <p className="text-lg text-[#6B6358]">
              Buying vanilla in volume should be simple, open and reliable. Here is how we keep it that way.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {benefits.map((item) => (
              <li key={item.title} className="pt-6 border-t border-[#E5E0D8]">
                <item.icon className="w-7 h-7 text-[#B5A37A] mb-5" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-[#2C2518] mb-2">{item.title}</h3>
                <p className="text-[#6B6358] leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#EEE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <p className={EYEBROW}>What We Supply</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Wholesale vanilla products</h2>
            <p className="text-lg text-[#6B6358]">
              Three product lines from the same Java beans, all available at wholesale pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {siteConfig.products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group flex flex-col">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F2EE]">
                  <Image
                    src={product.image}
                    alt={`Indonesian ${product.name.toLowerCase()} for wholesale from La Vanilla Supplier`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mt-6 mb-2">
                  {TAGS[product.category]}
                </p>
                <h3 className="text-xl font-semibold text-[#2C2518] mb-2">{product.name}</h3>
                <p className="text-[#6B6358] leading-relaxed mb-4">{product.shortDescription}</p>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#2C2518]">
                  View product
                  <ArrowRight className="ms-2 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#EEE9E1]" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
            <p className={EYEBROW}>How It Works</p>
            <h2 id="how-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              From inquiry to delivery
            </h2>
            <p className="text-lg text-[#6B6358]">Four simple steps, with a clear quote before you commit.</p>
          </div>
          <ProcessSteps steps={steps} />
        </div>
      </section>

      {/* Wholesale terms */}
      <section className="py-20 lg:py-24 bg-[#2C2518]" aria-labelledby="terms-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <p className={EYEBROW}>Wholesale Terms</p>
              <h2 id="terms-heading" className="text-3xl lg:text-4xl font-bold text-[#F8F6F2] mb-4">
                Our terms at a glance
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                The essentials buyers ask about before their first order. For larger or regular
                orders, almost everything here can be tailored.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#B5A37A] text-[#2C2518] text-sm font-semibold rounded-lg hover:bg-[#D4C48A] transition-colors"
              >
                Discuss your order
                <ArrowRight className="ms-2 w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
            <dl className="border-t border-white/10">
              {terms.map((t) => (
                <div key={t.label} className="grid sm:grid-cols-[11rem_1fr] gap-x-8 gap-y-1.5 py-6 border-b border-white/10">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] sm:pt-1">{t.label}</dt>
                  <dd>
                    <p className="font-semibold text-[#F8F6F2]">{t.value}</p>
                    {t.list && (
                      <ul className="mt-3 space-y-2">
                        {t.list.map(([name, pack]) => (
                          <li key={name} className="flex flex-col sm:flex-row sm:gap-3 text-stone-300">
                            <span className="text-[#D4C48A] sm:w-32 shrink-0">{name}</span>
                            <span>{pack}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {t.detail && <p className={`text-stone-400 leading-relaxed ${t.list ? "mt-3 text-sm" : "mt-1"}`}>{t.detail}</p>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <p className={EYEBROW}>Wholesale Pricing</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">What shapes your price</h2>
              <p className="text-lg text-[#6B6358] leading-relaxed mb-8">
                Every quote is built around your order. Send us your grade, quantity and destination and
                you will have an air freight quote within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#2C2518] text-white text-sm font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                Request a quote
                <ArrowRight className="ms-2 w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
            <ol className="border-t border-[#E5E0D8]">
              {priceFactors.map((item, i) => (
                <li key={item.title} className="flex gap-6 lg:gap-10 py-7 border-b border-[#E5E0D8]">
                  <span className="text-[1.7rem] font-medium text-[#B5A37A] leading-none tabular-nums w-10 shrink-0" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C2518] mb-1.5">{item.title}</h3>
                    <p className="text-[#6B6358] leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className={EYEBROW}>FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Wholesale vanilla FAQ</h2>
            <p className="text-lg text-[#6B6358]">
              Answers to the questions buyers ask most before placing a wholesale order.
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

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={EYEBROW}>Free Samples</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Ready to buy wholesale vanilla?</h2>
          <p className="text-lg text-[#6B6358] mb-8">
            Start with a free sample and get your quote within 24 hours. Orders from 1 kg.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
            >
              Request Free Sample
              <ArrowRight className="ms-2 w-5 h-5 rtl:rotate-180" />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25A55F]" />
              Chat on WhatsApp
            </a>
          </div>
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "La Vanilla Supplier",
            description: "Wholesale vanilla beans supplier from Indonesia",
            url: `${siteConfig.url}/wholesale`,
            logo: `${siteConfig.url}/logo.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surakarta",
              addressRegion: "Central Java",
              addressCountry: "ID",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "150",
              highPrice: "700",
              offerCount: "3",
            },
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
              { name: "Wholesale", url: "/wholesale" },
            ])
          ),
        }}
      />
    </>
  );
}
