import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { OverlayScrollbar } from "@/components/scrollbar";
import { LocaleProvider } from "@/components/locale-provider";
import { siteConfig } from "@/lib/config";
import { type Locale, locales, getDirection } from "@/i18n";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} - Premium Vanilla Supplier Indonesia`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: {
      languages: {
        en: "/",
        fr: "/fr",
        de: "/de",
        es: "/es",
        tr: "/tr",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : "en";
  const direction = getDirection(locale);

  return (
    <html lang={locale} dir={direction} className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="alternate" hrefLang="en" href={`${siteConfig.url}`} />
        <link rel="alternate" hrefLang="fr" href={`${siteConfig.url}/fr`} />
        <link rel="alternate" hrefLang="de" href={`${siteConfig.url}/de`} />
        <link rel="alternate" hrefLang="es" href={`${siteConfig.url}/es`} />
        <link rel="alternate" hrefLang="tr" href={`${siteConfig.url}/tr`} />
        <link rel="alternate" hrefLang="ar" href={`${siteConfig.url}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteConfig.url}`} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-stone-900 overflow-x-hidden">
        <OverlayScrollbar />
        <LocaleProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
