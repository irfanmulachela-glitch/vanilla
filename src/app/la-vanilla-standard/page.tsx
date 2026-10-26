import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Clock, Ruler, Droplets, FlaskConical } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";
import VanillaGradingChart from "@/components/vanilla-grading-chart";
import { QuickAnswer } from "@/components/quick-answer";

const DESCRIPTION =
  "The La Vanilla Standard: five checks every batch of our Indonesian vanilla passes, from partner farms in Java to air freight, so every order matches the grade you approved.";

export const metadata: Metadata = {
  title: "The La Vanilla Standard: 5 Quality Checks",
  description: DESCRIPTION,
  alternates: {
    canonical: "/la-vanilla-standard",
    languages: languageAlternates("la-vanilla-standard"),
  },
  openGraph: {
    images: ogImages,
    title: "The La Vanilla Standard: 5 Quality Checks",
    description: DESCRIPTION,
    url: `${siteConfig.url}/la-vanilla-standard`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: twitterCard("The La Vanilla Standard | La Vanilla Supplier", DESCRIPTION),
};

const EYEBROW = "text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4";

const figures = [
  { icon: Clock, label: "Curing", value: "6–9", unit: "months", note: "Slow-cured by partner farmers" },
  { icon: FlaskConical, label: "Vanillin, Grade A", value: "1.1–2.5", unit: "%", note: "Grade B 1.0–2.0%" },
  { icon: Droplets, label: "Moisture, Grade A", value: "25–35", unit: "%", note: "Grade B under 25%" },
  { icon: Ruler, label: "Length, Grade A", value: "15–20", unit: "cm", note: "Grade B 10–15 cm" },
];

const steps = [
  {
    title: "Sourcing",
    lead: "Vanilla planifolia from partner farmers in Java.",
    description:
      "We work hand in hand with vanilla farmers across Java. Every lot is Vanilla planifolia, the classic vanilla species, and we stay in touch with each farm through the season.",
    checks: [
      "Partner farmers across Java",
      "Vanilla planifolia only",
      "Cured at the farmers' own facilities, coordinated with us",
    ],
  },
  {
    title: "Curing",
    lead: "Six to nine months of slow, traditional curing.",
    description:
      "Fresh green pods are blanched, sweated, sun-dried and slowly conditioned. Taking the full six to nine months is what builds the deep aroma and natural oils buyers look for.",
    checks: [
      "6–9 months from harvest to export-ready",
      "Sun-dried and slowly conditioned",
      "Nothing added, aroma develops naturally",
    ],
  },
  {
    title: "Grading",
    lead: "Every bean sorted into one of two clear grades.",
    description:
      "Beans are sorted by hand for length, moisture, colour and defects, then placed in Grade A (Gourmet) or Grade B (Extraction). Two grades, clearly defined, so you always know what you are getting.",
    checks: [
      "Grade A: 15–20 cm, 25–35% moisture, 1.1–2.5% vanillin",
      "Grade B: 10–15 cm, under 25% moisture, 1.0–2.0% vanillin",
      "Sorted by hand for colour and defects",
    ],
  },
  {
    title: "Batch check",
    lead: "Each batch checked against its grade before packing.",
    description:
      "Before a batch is packed, we check it against the grade you ordered. A Certificate of Analysis is available for every batch on request, issued just before it ships.",
    checks: [
      "Checked against grade specs before packing",
      "Certificate of Analysis per batch, on request",
      "Halal certified (MUI)",
    ],
  },
  {
    title: "Packing & shipping",
    lead: "Vacuum-sealed and flown out in 3–7 days.",
    description:
      "Beans are vacuum-sealed to lock in moisture and aroma, then shipped by air with full export paperwork. Your vanilla arrives the way it left Java.",
    checks: [
      "Vacuum-sealed, 1 kg or 2.5 kg packs",
      "Air freight in 3–7 days, FCA, CPT or DDP",
      "Phyto certificate, invoice, packing list and air waybill",
    ],
  },
];

const promises = [
  {
    title: "Your 100th order matches your first",
    body: "Same grades, same specs, every batch. The sample you approve is the standard we ship to.",
  },
  {
    title: "Clear, honest specs",
    body: "Length, moisture and vanillin ranges stated up front for each grade, so there are no surprises on arrival.",
  },
  {
    title: "Try it before you commit",
    body: "Free samples so you can check colour, aroma and texture yourself. You only cover shipping.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function LaVanillaStandardPage() {
  const whatsapp = `https://wa.me/${siteConfig.social.whatsapp}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white overflow-hidden flex items-center min-h-[565px] sm:min-h-[390px] md:min-h-[376px] lg:min-h-[455px] xl:min-h-[545px]">
        <div className="absolute inset-0">
          <Image
            src="/la-vanilla-standard-hero.webp"
            alt="Vanilla beans drying on wooden racks at a partner farm in Java"
            fill
            sizes="100vw"
            className="object-cover object-[55%_35%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2518]/95 via-[#2C2518]/75 to-[#2C2518]/25 rtl:bg-gradient-to-l" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] mb-5">
              The La Vanilla <span className="text-[#B5A37A]">Standard</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              Five checks every batch passes on its way from Java to your door, so the vanilla
              you receive always matches the grade you approved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#B5A37A] text-[#2C2518] text-sm font-semibold rounded-lg hover:bg-[#D4C48A] transition-colors"
              >
                Request Free Sample
                <ArrowRight className="ms-2 w-4 h-4 rtl:rotate-180" />
              </Link>
              <a
                href="#grades"
                className="inline-flex items-center justify-center px-7 py-3.5 text-white text-sm font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
              >
                See Our Two Grades
              </a>
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
                      <span dir="ltr">{fig.value}</span>
                      <span className="ms-1.5 text-base lg:text-lg font-semibold text-[#B5A37A]">{fig.unit}</span>
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
        question="What is the La Vanilla Standard?"
        answer="The La Vanilla Standard is the five-step process every batch of our Indonesian vanilla goes through before export: sourcing V. planifolia from partner farmers in Java, curing for 6 to 9 months, hand grading into Grade A or Grade B, a batch check against the grade specs, and vacuum-sealed air shipment with full export documents."
      />

      {/* The five checks */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]" aria-labelledby="steps-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className={EYEBROW}>The Five Checks</p>
            <h2 id="steps-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              From farm to your door
            </h2>
            <p className="text-lg text-[#6B6358]">
              Every batch goes through the same five steps, in the same order, every time.
            </p>
          </div>

          <ol className="border-t border-[#E5E0D8]">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_minmax(0,5fr)] gap-x-12 gap-y-5 py-10 lg:py-12 border-b border-[#E5E0D8]"
              >
                <div className="flex gap-5 lg:gap-6">
                  <span className="text-[2.25rem] lg:text-[2.75rem] font-medium text-[#B5A37A] leading-none tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#2C2518] mb-2">{step.title}</h3>
                    <p className="font-[family-name:var(--font-libre)] italic text-[#8C7A4F] leading-snug">{step.lead}</p>
                  </div>
                </div>
                <p className="text-[#6B6358] leading-relaxed lg:pt-1">{step.description}</p>
                <ul className="space-y-3 lg:pt-1">
                  {step.checks.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[15px] text-[#2C2518]">
                      <Check className="w-4 h-4 mt-1 flex-shrink-0 text-[#B5A37A]" strokeWidth={2.5} aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Grading chart */}
      <section id="grades" className="py-20 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className={EYEBROW}>Grading</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Our two grades, drawn to scale</h2>
            <p className="text-lg text-[#6B6358]">
              Choose a grade to compare length, moisture and vanillin side by side.
            </p>
          </div>
          <VanillaGradingChart />
        </div>
      </section>

      {/* What it means for you */}
      <section className="py-20 lg:py-24 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <p className={EYEBROW}>What It Means for You</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F6F2]">Consistency you can plan around</h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-10 md:gap-8">
            {promises.map((p, i) => (
              <li key={p.title} className="pt-6 border-t-2 border-[#B5A37A]/60">
                <span className="block text-[1.7rem] font-medium text-[#B5A37A] leading-none mb-4 tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-[#F8F6F2] mb-2">{p.title}</h3>
                <p className="text-stone-300 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={EYEBROW}>Free Samples</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">See the Standard for yourself</h2>
          <p className="text-lg text-[#6B6358] mb-8">
            Request a free sample of Grade A or Grade B and check the colour, aroma and texture in
            your own hands. You only cover shipping.
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The La Vanilla Standard: Five Quality Checks for Indonesian Vanilla",
            description:
              "Five checks every batch passes: sourcing, curing, grading, batch check, and packing and shipping.",
            image: `${siteConfig.url}/og-image.png`,
            datePublished: "2026-08-26",
            dateModified: "2026-10-26",
            author: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/la-vanilla-standard`,
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
              { name: "The La Vanilla Standard", url: "/la-vanilla-standard" },
            ])
          ),
        }}
      />
    </>
  );
}
