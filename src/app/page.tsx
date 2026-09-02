import { Metadata } from "next";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { HomePageContent } from "@/components/home-page-content";

export const metadata: Metadata = {
  title: "Premium Vanilla Supplier Indonesia | B2B Wholesale Export",
  description:
    "La Vanilla Supplier - Indonesia's trusted vanilla supplier. Food Safety Standards. Grade A & B beans, custom vanilla paste, pure vanilla powder. Export to 20+ countries. MOQ 25kg.",
  keywords: [
    "vanilla supplier Indonesia",
    "wholesale vanilla beans",
    "vanilla paste manufacturer",
    "vanilla powder supplier",
    "B2B vanilla exporter",
    "Quality Assured vanilla",
    "Indonesian vanilla beans",
    "best vanilla supplier",
    "bulk vanilla beans",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/fr",
      de: "/de",
      es: "/es",
      tr: "/tr",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "Premium Vanilla Supplier Indonesia | B2B Wholesale Export",
    description: "Indonesia's trusted vanilla supplier. Grade A & B beans, vanilla paste, powder. Export to 20+ countries.",
    url: "https://lavanillasupplier.com",
    siteName: "La Vanilla Supplier",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageContent />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.lavanillasupplier.com/#organization",
            name: "La Vanilla Supplier",
            legalName: "PT Penta Pelita Semesta",
            url: "https://www.lavanillasupplier.com",
            logo: "https://www.lavanillasupplier.com/logo.png",
            description:
              "Indonesian vanilla supplier exporting Vanilla planifolia beans, vanilla paste and vanilla powder to food manufacturers and distributors. Minimum order 25 kg. FOB Semarang, Jakarta or Surabaya.",
            email: "admin@lavanillasupplier.com",
            telephone: "+62-878-3575-6945",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surakarta",
              addressRegion: "Central Java",
              addressCountry: "ID",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-878-3575-6945",
              email: "admin@lavanillasupplier.com",
              contactType: "sales",
              availableLanguage: ["English", "French", "German", "Spanish", "Turkish", "Arabic"],
            },
            areaServed: ["AE", "AU", "US", "NL", "FR", "DE", "SG", "MY", "JP", "KR"],
            knowsAbout: [
              "Vanilla planifolia",
              "vanilla bean curing",
              "vanillin content",
              "vanilla export documentation",
              "phytosanitary certification",
              "Indonesian vanilla",
            ],
            sameAs: [
              "https://www.linkedin.com/company/lavanillasupplier",
              "https://wa.me/+6287835756945",
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.lavanillasupplier.com/#website",
            name: "La Vanilla Supplier",
            url: "https://www.lavanillasupplier.com",
            publisher: {
              "@id": "https://www.lavanillasupplier.com/#organization",
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
            ])
          ),
        }}
      />
    </>
  );
}
