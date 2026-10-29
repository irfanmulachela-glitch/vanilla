import { Metadata } from "next";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";
import OrderingLadder from "@/components/ordering-ladder";
import { UsAgentStrip } from "@/components/us-agent";

const DESCRIPTION =
  "Get in touch for vanilla bean quotes, wholesale inquiries, and custom formulations. We respond within 24 hours via WhatsApp, email, or our Central Java office.";

export const metadata: Metadata = {
  title: "Contact Us for Vanilla Quotes",
  description: DESCRIPTION,
  keywords: [
    "contact vanilla supplier",
    "vanilla bean quote",
    "wholesale vanilla inquiry",
    "vanilla supplier Indonesia contact",
    "vanilla export inquiry",
  ],
  alternates: {
    canonical: "/contact",
    languages: languageAlternates("contact"),
  },
  openGraph: {
    images: ogImages,
    title: "Contact Us for Vanilla Quotes",
    description: DESCRIPTION,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: twitterCard("Contact Us for Vanilla Quotes | La Vanilla Supplier", DESCRIPTION),
};

export default function ContactPage() {
  return (
    <>
      {/* Masthead: type-led, the fastest ways to reach us on the right */}
      <section className="bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-end">
            <div>
              <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Contact</p>
              <h1 className="sr-headline text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.08] tracking-tight text-[#2C2518] font-[family-name:var(--font-libre)] mb-6">
                <span className="font-bold">Let&apos;s talk about</span>{" "}
                <br className="hidden sm:block" />
                <span className="italic font-normal text-[#8C7A4F]">your vanilla</span>
              </h1>
              <p className="text-lg text-[#6B6358] leading-relaxed max-w-lg">
                Ask for a quote, request a free sample or just ask a question. We reply within
                24 hours.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-1">Reach us directly</p>
              <dl className="border-b border-[#E5E0D8]">
                <div className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A]">WhatsApp</dt>
                  <dd>
                    <a href={`https://wa.me/${siteConfig.social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-medium text-[#2C2518] hover:text-[#8C7A4F] transition-colors">
                      +62 878-3575-6945
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-3.5 border-t border-[#E5E0D8]">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A]">Email</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.social.email}`} className="font-medium text-[#2C2518] hover:text-[#8C7A4F] transition-colors break-all">
                      {siteConfig.social.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-3.5 border-t border-[#E5E0D8]">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A]">Office</dt>
                  <dd className="font-medium text-[#2C2518] text-right">Surakarta, Central Java</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-3.5 border-t border-[#E5E0D8]">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A]">Hours</dt>
                  <dd className="font-medium text-[#2C2518] text-right">Mon–Sat, 08:00–17:00 WIB</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized US agent */}
      <UsAgentStrip />

      {/* Contact Form & Info (client) */}
      <ContactForm />

      {/* How to Start Ordering */}
      <OrderingLadder tone="light" showCta={false} />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact" },
            ])
          ),
        }}
      />

      {/* ContactPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact La Vanilla Supplier",
            description: "Get in touch for vanilla quotes and inquiries",
            url: `${siteConfig.url}/contact`,
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.social.whatsapp,
                contactType: "sales",
                email: siteConfig.social.email,
                availableLanguage: ["English", "Indonesian"],
              },
            },
          }),
        }}
      />
    </>
  );
}
