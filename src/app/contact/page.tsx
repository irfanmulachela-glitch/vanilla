import { Metadata } from "next";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Vanilla Supplier Indonesia",
  description:
    "Get in touch with La Vanilla Supplier for vanilla bean quotes, wholesale inquiries, and custom formulations. We respond within 24 hours. WhatsApp, email, or visit our office in Central Java.",
  keywords: [
    "contact vanilla supplier",
    "vanilla bean quote",
    "wholesale vanilla inquiry",
    "vanilla supplier Indonesia contact",
    "vanilla export inquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | La Vanilla Supplier",
    description:
      "Get in touch for vanilla bean quotes, wholesale inquiries, and custom formulations. We respond within 24 hours.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#D8C393] to-[#C4B07A] text-stone-900 py-16 lg:py-24 overflow-hidden">
        {/* Charcoal accent */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#2C2518] opacity-90" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-[#2C2518]/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#2C2518]/20 via-transparent to-[#2C2518]/40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#2C2518]" />
              <span className="text-xs font-semibold text-[#2C2518] uppercase tracking-[0.2em]">
                We&apos;re Here to Help
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-stone-700">
              Ready to start your vanilla journey? Request a quote, ask
              questions, or schedule a facility visit. We respond within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info (client) */}
      <ContactForm />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Contact", url: `${siteConfig.url}/contact` },
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
