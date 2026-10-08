import { Metadata } from "next";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { twitterCard, ogImages } from "@/lib/seo";
import { HomePageContent } from "@/components/home-page-content";

const DESCRIPTION =
  "Premium Indonesian vanilla beans, paste, and powder. Sun-cured on volcanic soil and lab-tested Grade A & B. Exporting to 20+ countries with flexible orders.";

export const metadata: Metadata = {
  title: "Wholesale Vanilla Supplier Indonesia | Beans, Paste & Powder",
  description: DESCRIPTION,
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
    "Java vanilla exporter",
    "air freight vanilla",
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
      "x-default": "/",
    },
  },
  openGraph: {
    images: ogImages,
    title: "Wholesale Vanilla Supplier Indonesia | Beans, Paste & Powder",
    description: DESCRIPTION,
    url: `${siteConfig.url}`,
    siteName: "La Vanilla Supplier",
    type: "website",
  },
  twitter: twitterCard(
    "Wholesale Vanilla Supplier Indonesia | Beans, Paste & Powder",
    DESCRIPTION,
  ),
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
              "Indonesian vanilla supplier exporting Vanilla planifolia beans, vanilla paste and vanilla powder to food manufacturers and distributors. Sun-cured on volcanic soil. Flexible order quantities. Air freight from Indonesia.",
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
