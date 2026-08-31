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
      <section className="bg-gradient-to-br from-[#D8C393] to-[#C4B07A] text-stone-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
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
