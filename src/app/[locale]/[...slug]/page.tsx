import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { type Locale, locales } from "@/i18n";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Package,
  Globe,
  MapPin,
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { useLocaleContext } from "@/components/locale-provider";
import { getTranslations } from "@/i18n";

interface LocaleSlugPageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

export async function generateStaticParams() {
  const paths: { locale: string; slug: string[] }[] = [];
  
  for (const locale of locales) {
    if (locale === "en") continue;
    paths.push({ locale, slug: [] });
    paths.push({ locale, slug: ["products"] });
    paths.push({ locale, slug: ["products", "vanilla-beans"] });
    paths.push({ locale, slug: ["products", "vanilla-paste"] });
    paths.push({ locale, slug: ["products", "vanilla-powder"] });
    paths.push({ locale, slug: ["about"] });
    paths.push({ locale, slug: ["contact"] });
    paths.push({ locale, slug: ["quality"] });
    paths.push({ locale, slug: ["faq"] });
    paths.push({ locale, slug: ["blog"] });
    paths.push({ locale, slug: ["wholesale"] });
    paths.push({ locale, slug: ["la-vanilla-standard"] });
    paths.push({ locale, slug: ["regions", "uae"] });
    paths.push({ locale, slug: ["regions", "australia"] });
    paths.push({ locale, slug: ["regions", "usa"] });
    paths.push({ locale, slug: ["regions", "europe"] });
  }
  
  return paths;
}

export default async function LocaleSlugPage({ params }: LocaleSlugPageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : "en";
  const t = getTranslations(locale);
  
  // Homepage
  if (!slug || slug.length === 0) {
    return <HomePageContent locale={locale} />;
  }
  
  // For now, redirect to homepage for other routes
  // In a full implementation, you would have separate components for each page
  notFound();
}

// Simple homepage content for locale pages
function HomePageContent({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F8F6F2]">
        <div className="grid lg:grid-cols-5 min-h-[550px]">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-20 lg:col-span-2">
            <p className="text-[#B5A37A] text-sm font-semibold uppercase tracking-wider mb-3">
              Indonesia&apos;s #1 Vanilla Supplier
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C2518] mb-3 leading-[1.1]">
              {t.home.heroTitle}
            </h1>
            <p className="text-lg text-[#B5A37A] font-medium mb-5 italic">
              {t.home.heroSubtitle}
            </p>
            <p className="text-[#6B6358] mb-3 leading-relaxed">
              {t.home.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white text-sm font-medium rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                {t.common.requestSample}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] text-sm font-medium rounded-lg border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
              >
                {t.common.learnMore}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full lg:col-span-3">
            <Image
              src="/wholesale-hero.jpeg"
              alt="Premium Indonesian vanilla beans being sorted at our facility in Java"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#B5A37A] text-sm font-semibold uppercase tracking-wider mb-4">
            About Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6 leading-tight">
            {t.common.tagline}
          </h2>
          <p className="text-lg text-[#6B6358] mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: 10, suffix: "+", label: t.home.yearsExperience },
              { value: 500, suffix: "+", label: t.home.tonsExported },
              { value: 20, suffix: "+", label: t.home.countriesServed },
              { value: 30, suffix: "+", label: t.home.happyClients },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-bold text-[#2C2518] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-[#6B6358]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              {t.products.title}
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <Link
                key={product.id}
                href={`/${locale}/products/${product.slug}`}
                className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2C2518] mb-2 group-hover:text-[#B5A37A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#6B6358] mb-4">{product.shortDescription}</p>
                  <div className="flex items-center text-[#B5A37A] font-medium">
                    {t.products.whyChoose}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Vanilla Journey?
          </h2>
          <p className="text-[#B5A37A] text-lg mb-8 max-w-2xl mx-auto">
            Get a free sample and quote within 24 hours. Minimum order just 25 kg.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg hover:bg-[#F8F6F2] transition-colors"
            >
              {t.common.requestSample}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-lg hover:bg-[#A8956A] transition-colors"
            >
              {t.common.whatsapp}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
