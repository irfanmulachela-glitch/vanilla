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
      <section className="relative bg-[#2C2518] text-white py-16 lg:py-24 overflow-hidden">
        {/* Gold vertical line on right */}
        <div className="absolute top-0 right-16 lg:right-24 w-px h-full bg-[#B5A37A]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#B5A37A]" />
              <span className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em]">
                We&apos;re Here to Help
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-stone-300">
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
