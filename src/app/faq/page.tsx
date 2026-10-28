import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";

const DESCRIPTION =
  "Answers to common questions about ordering wholesale vanilla beans from Indonesia, including shipping, payment terms, certifications, and lead times for buyers.";

export const metadata: Metadata = {
  title: "FAQ: Orders, Shipping & Payment",
  description: DESCRIPTION,
  keywords: [
    "vanilla supplier FAQ",
    "vanilla beans ordering",
    "wholesale vanilla MOQ",
    "vanilla shipping",
    "vanilla certifications",
  ],
  alternates: {
    canonical: "/faq",
    languages: languageAlternates("faq"),
  },
  openGraph: {
    images: ogImages,
    title: "FAQ: Orders, Shipping & Payment",
    description: DESCRIPTION,
    url: `${siteConfig.url}/faq`,
    type: "website",
  },
  twitter: twitterCard("FAQ: Orders, Shipping & Payment | La Vanilla Supplier", DESCRIPTION),
};

const faqs = [
  {
    category: "Ordering",
    questions: [
      {
        q: "What are the order quantities?",
        a: "Orders start from 1 kg. Free samples are available so you can check the quality first, and we are happy to start with whatever quantity suits you, then grow from there.",
      },
      {
        q: "Can I order samples before placing a bulk order?",
        a: "Yes. Samples are free; you only cover shipping. Fill in our contact form or message us on WhatsApp with your requirements, and samples are shipped by DHL or FedEx, usually arriving in 3-5 days.",
      },
      {
        q: "How do I place an order?",
        a: "You can place an order by contacting us via WhatsApp, email, or our contact form. Share your product requirements, quantity, and shipping destination. We'll provide a quote within 24 hours.",
      },
      {
        q: "Do you offer white-label or private-label services?",
        a: "Yes. We supply vanilla beans, paste and powder packed under your own brand: vacuum packs for beans and powder, glass jars for paste, with your label. Paste can also be made to your recipe. Tell us what you have in mind and we will prepare a sample for your approval.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        q: "What is the difference between Grade A and Grade B vanilla beans?",
        a: "Grade A (Gourmet) beans are 15-20 cm long with 25-35% moisture and 1.1-2.5% vanillin, ideal for pastry, ice cream and retail. Grade B (Extraction) beans are 10-15 cm long with under 25% moisture and 1.0-2.0% vanillin, ideal for extracts and syrups. Both are cured for 6-9 months.",
      },
      {
        q: "What vanilla species do you supply?",
        a: "We supply V. planifolia (Bourbon vanilla), the primary variety known for its rich, creamy flavor profile with optimal vanillin content (1.1-2.5%).",
      },
      {
        q: "Can you customize vanilla paste composition?",
        a: "Yes. You can choose the strength (single, double or triple fold), sweetness and viscosity. We prepare a sample for your approval before production.",
      },
      {
        q: "How do you ensure consistent quality across orders?",
        a: "Every batch is graded by hand for length, moisture, colour and defects, then checked against the specs of the grade you ordered before packing. A Certificate of Analysis is available for each batch on request.",
      },
      {
        q: "What is the vanillin content of your vanilla beans?",
        a: "Grade A beans range from 1.1% to 2.5% vanillin, and Grade B beans from 1.0% to 2.0%. A Certificate of Analysis is available for each batch on request.",
      },
    ],
  },
  {
    category: "Shipping & Documentation",
    questions: [
      {
        q: "What shipping methods do you offer?",
        a: "Air freight is our standard, by DHL, FedEx or air cargo, arriving in 3-7 days worldwide. We ship on FCA (Surakarta) or CPT terms, and sea freight can be arranged on request for very large orders.",
      },
      {
        q: "How long does shipping take?",
        a: "Air freight typically takes 3-7 days worldwide, and express courier (DHL/FedEx) can deliver in 3-5 days. For very large orders, sea freight can be arranged on request (2-4 weeks).",
      },
      {
        q: "What documents are included with shipments?",
        a: "Every shipment travels with a phytosanitary certificate, commercial invoice, packing list and air waybill. A Certificate of Analysis is available for each batch on request.",
      },
      {
        q: "Do you ship to my country?",
        a: "We export to 20+ countries including UAE, Australia, USA, UK, France, Germany, Japan, Singapore, and many more. Contact us to confirm availability for your specific location.",
      },
      {
        q: "Do you have a representative in the United States?",
        a: "Yes. Aldo M. is our authorized US agent. US buyers can get samples sent within the US, meet him in person, and get quotes and place orders through him. Email aldo@lavanillasupplier.com.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        q: "What are your payment terms?",
        a: "We accept T/T (bank transfer), Wise and PayPal. Standard orders are paid 100% before dispatch. For larger or scheduled orders we offer deposit terms, and L/C at sight for long-term supply contracts, agreed per order.",
      },
      {
        q: "How do you handle pricing for large orders?",
        a: "The more you order, the better the rate per kilo, with better pricing from 100 kg. Send us your estimated volume and we will put together a quote for you.",
      },
      {
        q: "Do prices include shipping?",
        a: "Quotes are usually FCA Surakarta, so shipping is added on top. Shipping depends on your destination, volume and method. If you prefer, we can quote CPT so the price includes air freight to your destination airport.",
      },
      {
        q: "How quickly will I get a quote?",
        a: "Within 24 hours. Tell us the product, grade, quantity and destination, and we will send a quote priced for your exact order.",
      },
    ],
  },
  {
    category: "Certifications & Compliance",
    questions: [
      {
        q: "What certifications do you have?",
        a: "Our vanilla is Halal certified by MUI (Majelis Ulama Indonesia). Every shipment comes with a phytosanitary certificate, and a Certificate of Analysis is available for each batch on request.",
      },
      {
        q: "How do you work with farmers?",
        a: "We work hand in hand with smallholder farmers across Java, with no traders in between. Our vanilla is only as good as the people who grow it, so we stay close to them season after season.",
      },
      {
        q: "Are your products US Import Ready?",
        a: "We regularly ship to the US by air with a phytosanitary certificate, commercial invoice, packing list and air waybill. Tell us your requirements and we will confirm what we can provide for your import.",
      },
    ],
  },
  {
    category: "Bulk & Wholesale Orders",
    questions: [
      {
        q: "How much do wholesale vanilla beans cost?",
        a: "Pricing depends on grade, volume and destination. Send us your requirements and we will reply with a quote within 24 hours.",
      },
      {
        q: "Can you supply 100kg or more per month?",
        a: "Yes. We can supply hundreds of kilos per month, and for regular buyers we schedule shipments around your production. Tell us your volumes and timing.",
      },
      {
        q: "Do you offer long-term supply contracts?",
        a: "Yes. For regular buyers we offer supply contracts that keep your volume and pricing steady across shipments, with additional discounts. Payment can be agreed per contract, including L/C at sight.",
      },
    ],
  },
];

const EYEBROW = "text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4";

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const QUICK_FACTS: [string, string][] = [
  ["Minimum order", "From 1 kg"],
  ["Samples", "Free, you cover shipping"],
  ["Shipping", "By air, 3–7 days"],
  ["Payment", "T/T, Wise or PayPal"],
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function FAQPage() {
  const total = faqs.reduce((n, c) => n + c.questions.length, 0);

  return (
    <>
      {/* Masthead: type-led with the four answers buyers ask first */}
      <section className="bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-end">
            <div>
              <p className={EYEBROW}>FAQ</p>
              <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.08] tracking-tight text-[#2C2518] font-[family-name:var(--font-libre)] mb-6">
                <span className="font-bold">Questions buyers ask</span>{" "}
                <br className="hidden sm:block" />
                <span className="italic font-normal text-[#8C7A4F]">before ordering</span>
              </h1>
              <p className="text-lg text-[#6B6358] leading-relaxed max-w-lg">
                Straight answers on ordering, quality, shipping, payment and documents. If yours
                isn&apos;t here, we reply within 24 hours.
              </p>
            </div>

            <dl aria-label="Quick answers">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-1">In short</p>
              <div className="border-b border-[#E5E0D8]">
                {QUICK_FACTS.map(([k, v], i) => (
                  <div key={k} className={`flex items-baseline justify-between gap-6 py-3.5 ${i ? "border-t border-[#E5E0D8]" : ""}`}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A]">{k}</dt>
                    <dd className="font-medium text-[#2C2518] text-right">{v}</dd>
                  </div>
                ))}
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Topic tabs (phone and tablet) */}
      <nav aria-label="FAQ topics" className="lg:hidden sticky top-16 z-20 bg-white/[0.97] backdrop-blur-md border-b border-[#EEE9E1]">
        <div className="px-4 sm:px-6 flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {faqs.map((c) => (
            <a key={c.category} href={`#${slug(c.category)}`} className="shrink-0 py-4 text-sm font-medium text-[#6B6358] hover:text-[#2C2518]">
              {c.category}
            </a>
          ))}
        </div>
      </nav>

      {/* Questions */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[16rem_1fr] gap-12 lg:gap-20">
            {/* Topic sidebar (desktop) */}
            <aside className="hidden lg:block">
              <nav aria-label="FAQ topics" className="sticky top-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-3">
                  {faqs.length} topics · {total} questions
                </p>
                <ul className="border-t border-[#EEE9E1]">
                  {faqs.map((c, i) => (
                    <li key={c.category} className="border-b border-[#EEE9E1]">
                      <a href={`#${slug(c.category)}`} className="group flex items-baseline gap-3 py-3 text-[15px] text-[#6B6358] hover:text-[#2C2518] transition-colors">
                        <span className="text-xs text-[#B5A37A] tabular-nums w-5">{String(i + 1).padStart(2, "0")}</span>
                        <span className="flex-1">{c.category}</span>
                        <span className="text-xs text-[#C9C1B4] tabular-nums">{c.questions.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="max-w-3xl">
              {faqs.map((c, i) => (
                <div key={c.category} id={slug(c.category)} className="scroll-mt-32 lg:scroll-mt-28 mb-16 last:mb-0">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-[family-name:var(--font-libre)] text-2xl text-[#B5A37A] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="text-2xl lg:text-[1.75rem] font-bold text-[#2C2518]">{c.category}</h2>
                  </div>
                  <div className="border-t border-[#E5E0D8] mt-4">
                    {c.questions.map((faq) => (
                      <details key={faq.q} className="group border-b border-[#EEE9E1]">
                        <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[17px] font-semibold text-[#2C2518] hover:text-[#8C7A4F] transition-colors [&::-webkit-details-marker]:hidden">
                          <span>{faq.q}</span>
                          <Plus className="w-5 h-5 text-[#B5A37A] flex-shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                        </summary>
                        <p className="pb-6 -mt-1 pe-10 text-[#6B6358] leading-relaxed">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={EYEBROW}>Still Have Questions?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Ask us directly</h2>
          <p className="text-lg text-[#6B6358] mb-8">
            Tell us what you make and what you need. We reply within 24 hours, and free samples are
            always available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
            >
              Contact Us
              <ArrowRight className="ms-2 w-5 h-5 rtl:rotate-180" />
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
      </section>

      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              }))
            ),
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
              { name: "FAQ", url: "/faq" },
            ])
          ),
        }}
      />
    </>
  );
}
