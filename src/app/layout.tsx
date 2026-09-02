import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { OverlayScrollbar } from "@/components/scrollbar";
import { LocaleProvider } from "@/components/locale-provider";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "de" }, { locale: "es" }, { locale: "tr" }, { locale: "ar" }];
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Premium Vanilla Supplier Indonesia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Premium Vanilla Supplier Indonesia`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Premium Vanilla Supplier Indonesia`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        
        {/* Hreflang tags for SEO */}
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
