import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Users, Globe, BadgeCheck } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";
import { QuickAnswer } from "@/components/quick-answer";

const DESCRIPTION =
  "About La Vanilla Supplier: an Indonesian vanilla exporter in Java supplying vanilla beans, paste and powder to food makers, importers and distributors in 20+ countries.";

export const metadata: Metadata = {
  title: "About Us: Indonesian Vanilla Exporter in Java",
  description: DESCRIPTION,
  keywords: [
    "about La Vanilla Supplier",
    "Indonesian vanilla exporter",
    "vanilla supplier Java",
    "PT Penta Pelita Semesta",
    "Indonesian vanilla quality",
  ],
  alternates: {
    canonical: "/about",
    languages: languageAlternates("about"),
  },
  openGraph: {
    images: ogImages,
    title: "About Us: Indonesian Vanilla Exporter in Java",
    description: DESCRIPTION,
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  twitter: twitterCard("About Us | La Vanilla Supplier", DESCRIPTION),
};

const EYEBROW = "text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4";

const figures = [
  { icon: CalendarDays, label: "Experience", value: siteConfig.stats.yearsExperience, unit: "years", note: "In Indonesian vanilla" },
  { icon: Users, label: "Clients", value: siteConfig.stats.happyClients, unit: "", note: "Food makers, importers and distributors" },
  { icon: Globe, label: "Countries", value: siteConfig.stats.countriesServed, unit: "", note: "Asia, Europe, the Americas and the Middle East" },
  { icon: BadgeCheck, label: "Certification", value: "Halal", unit: "MUI", note: "Certified by MUI, Indonesia" },
];

const beliefs = [
  {
    title: "Vanilla is grown, not manufactured.",
    body: "A vanilla vine takes years to flower, and every flower is pollinated by hand. We respect the time the plant and the farmer need, and we never promise what nature cannot deliver.",
  },
  {
    title: "Farmers are partners, not a supply line.",
    body: "Our vanilla is only as good as the people who grow it. We work hand in hand with farming families in Java, because when they do well, the vanilla does too.",
  },
  {
    title: "Honesty is part of the product.",
    body: "If a grade is not right for your product, we will tell you. Clear specs and straight answers matter more to us than a quick sale.",
  },
];

const founderFacts: [string, string][] = [
  ["Based in", "Java, Indonesia"],
  ["Works with", "Vanilla farmers across Java"],
  ["Oversees", "Grading and quality before every export"],
  ["Speaks", "English and Indonesian"],
];

const company: [string, string][] = [
  ["Company", "PT Penta Pelita Semesta, a registered Indonesian company"],
  ["Brand", "La Vanilla Supplier"],
  ["Based in", "Central Java, Indonesia"],
  ["Products", "Vanilla beans (Grade A and Grade B), vanilla paste, vanilla powder"],
  ["Species", "Vanilla planifolia"],
  ["Certification", "Halal certified (MUI)"],
  ["Markets", "20+ countries, shipped by air"],
  ["Contact", `${siteConfig.social.email} · WhatsApp +62 878-3575-6945`],
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function AboutPage() {
  const whatsapp = `https://wa.me/${siteConfig.social.whatsapp}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white overflow-hidden flex items-center min-h-[565px] sm:min-h-[390px] md:min-h-[376px] lg:min-h-[455px] xl:min-h-[545px]">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.webp"
            alt="Green vanilla pods growing on the vine in Java"
            fill
            sizes="100vw"
            className="object-cover object-[65%_50%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2518]/95 via-[#2C2518]/75 to-[#2C2518]/25 rtl:bg-gradient-to-l" />
          <div className="absolute inset-0 bg-[#2C2518]/40 sm:hidden" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-2xl">
            <h1 className="sr-headline text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] mb-4 lg:whitespace-nowrap">
              <span>About La Vanilla</span> <span className="text-[#B5A37A]">Supplier</span>
            </h1>
            <p className="font-[family-name:var(--font-libre)] italic text-xl lg:text-2xl text-[#D4C48A] mb-5">
              Your Formula. Our Vanilla.
            </p>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              An Indonesian vanilla exporter in Java, supplying vanilla beans, paste and powder to
              food makers, importers and distributors in 20+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#B5A37A] text-[#2C2518] text-sm font-semibold rounded-lg hover:bg-[#D4C48A] transition-colors"
              >
                Get in Touch
                <ArrowRight className="ms-2 w-4 h-4 rtl:rotate-180" />
              </Link>
              <Link
                href="/la-vanilla-standard"
                className="inline-flex items-center justify-center px-7 py-3.5 text-white text-sm font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
              >
                See Our Standard
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
        question="Who is La Vanilla Supplier?"
        answer="La Vanilla Supplier is an Indonesian vanilla exporter based in Java, operated by PT Penta Pelita Semesta. We supply Grade A and Grade B Vanilla planifolia beans, vanilla paste and vanilla powder to buyers in 20+ countries, with free samples, orders from 1 kg, private label and air freight in 3 to 7 days."
      />

      {/* Who we are */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className={EYEBROW}>Who We Are</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">
                Real Java vanilla, from people who know it
              </h2>
              <div className="space-y-5 text-lg text-[#6B6358] leading-relaxed">
                <p>
                  La Vanilla Supplier exports Indonesian vanilla from Java: Grade A and Grade B
                  vanilla beans, vanilla paste and pure vanilla powder. We work hand in hand with
                  vanilla farmers across the island, following every lot through curing, grading and packing so
                  every batch matches the grade our buyers approved.
                </p>
                <p>
                  Our buyers are food manufacturers, bakeries, ice cream makers, importers and
                  distributors. Some order a single kilo to test, others need hundreds of kilos a
                  month. We supply both, and offer private label for buyers who want our vanilla
                  under their own brand.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/about-bundle-grade-a.webp"
                alt="A tied bundle of Grade A cured Indonesian vanilla beans"
                width={1400}
                height={906}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="w-full max-w-lg h-auto drop-shadow-[0_24px_30px_rgba(44,37,24,0.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#EEE9E1]" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className={EYEBROW}>Our Philosophy</p>
            <h2 id="philosophy-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518]">
              What we believe
            </h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-12 md:gap-10 lg:gap-14">
            {beliefs.map((b, i) => (
              <li key={b.title} className="text-center md:text-start">
                <span className="block text-xs font-semibold tracking-[0.2em] text-[#B5A37A] mb-5 tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-libre)] italic text-2xl lg:text-[1.65rem] leading-snug text-[#2C2518] mb-4">
                  {b.title}
                </h3>
                <span className="block w-10 h-px bg-[#B5A37A] mb-4 mx-auto md:mx-0" aria-hidden="true" />
                <p className="text-[#6B6358] leading-relaxed">{b.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#EEE9E1]" aria-labelledby="founder-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className={EYEBROW}>Who You Will Work With</p>
              <h2 id="founder-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-2">
                Muhammad Irfan
              </h2>
              <p className="font-[family-name:var(--font-libre)] italic text-lg text-[#8C7A4F] mb-6">
                Export Director, La Vanilla Supplier
              </p>
              <div className="space-y-5 text-[#6B6358] leading-relaxed">
                <p>
                  Irfan leads La Vanilla Supplier from Java. He works hand in hand with the farmers
                  who grow our vanilla, and oversees grading and quality before every batch
                  is exported.
                </p>
                <p>
                  His focus is simple: give buyers vanilla they can rely on, with clear specs, honest
                  answers and a reply within 24 hours.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/muhammad-irfan-601756367"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center text-sm font-semibold text-[#2C2518] group"
              >
                Connect on LinkedIn
                <ArrowRight className="ms-2 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </a>
            </div>
            <dl className="border-t border-[#EEE9E1] lg:mt-14">
              {founderFacts.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-6 py-4 border-b border-[#EEE9E1]">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A] flex-shrink-0">{label}</dt>
                  <dd className="font-medium text-[#2C2518] text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Company at a glance */}
      <section className="py-20 lg:py-24 bg-[#2C2518]" aria-labelledby="company-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className={EYEBROW}>The Company</p>
              <h2 id="company-heading" className="text-3xl lg:text-4xl font-bold text-[#F8F6F2] mb-4">
                At a glance
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed">
                The essentials about who you are buying from, all in one place.
              </p>
            </div>
            <dl className="border-t border-white/10">
              {company.map(([label, value]) => (
                <div key={label} className="grid sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-1 py-5 border-b border-white/10">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] sm:pt-1">{label}</dt>
                  <dd className="text-[#F8F6F2]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={EYEBROW}>Work With Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Let&apos;s talk about your vanilla</h2>
          <p className="text-lg text-[#6B6358] mb-8">
            Tell us what you make and how much you need. We reply within 24 hours, and free samples
            are always available.
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
            "@type": "AboutPage",
            name: "About La Vanilla Supplier",
            description: "About La Vanilla Supplier, an Indonesian vanilla exporter in Java operated by PT Penta Pelita Semesta.",
            url: `${siteConfig.url}/about`,
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surakarta",
                addressRegion: "Central Java",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.social.whatsapp,
                contactType: "sales",
                availableLanguage: ["English", "Indonesian"],
              },
              areaServed: ["AE", "AU", "US", "NL", "FR", "DE", "SG", "MY", "JP", "KR"],
              hasCredential: [
                "Halal Certified",
                "Phytosanitary Certified",
              ],
              founder: {
                "@type": "Person",
                name: "Muhammad Irfan",
                jobTitle: "Export Director",
                url: "https://www.linkedin.com/in/muhammad-irfan-601756367",
                sameAs: [
                  "https://www.linkedin.com/in/muhammad-irfan-601756367",
                ],
              },
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
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />
    </>
  );
}
