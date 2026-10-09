import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { twitterCard, ogImages } from "@/lib/seo";
import { HomePageContent } from "@/components/home-page-content";
import { type Locale, locales } from "@/i18n";
import { languageAlternates } from "@/lib/hreflang";

interface LocaleHomePageProps {
  params: Promise<{ locale: string }>;
}

const DESCRIPTION =
  "Premium Indonesian vanilla beans, paste, and powder. Sun-cured on volcanic soil and lab-tested Grade A & B. Exporting to 20+ countries with flexible orders.";

export async function generateMetadata({ params }: LocaleHomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const prefix = locale === "en" ? "" : `/${locale}`;
  return {
    title: {
      absolute: "Wholesale Vanilla Supplier Indonesia | Beans, Paste & Powder",
    },
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
      canonical: prefix || "/",
      languages: languageAlternates(""),
    },
    openGraph: {
      images: ogImages,
      title: "Wholesale Vanilla Supplier Indonesia | Beans, Paste & Powder",
      description: DESCRIPTION,
      url: `${siteConfig.url}${prefix}`,
      siteName: "La Vanilla Supplier",
      type: "website",
    },
    twitter: twitterCard(
      "Wholesale Vanilla Supplier Indonesia | Beans, Paste & Powder",
      DESCRIPTION,
    ),
  };
}

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <>
      <HomePageContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.lavanillasupplier.com/#organization",
            name: "La Vanilla Supplier",
            legalName: "PT Penta Pelita Semesta",
            foundingDate: "2014",
            url: "https://www.lavanillasupplier.com",
            logo: "https://www.lavanillasupplier.com/logo.png",
            description:
              "Indonesian vanilla supplier exporting Vanilla planifolia beans, vanilla paste and vanilla powder to food manufacturers and distributors. Sun-cured on volcanic soil. Flexible order quantities. Air freight from Indonesia.",
            email: "admin@lavanillasupplier.com",
            telephone: "+6287835756945",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surakarta",
              addressRegion: "Central Java",
              addressCountry: "ID",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+6287835756945",
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
    </>
  );
}
