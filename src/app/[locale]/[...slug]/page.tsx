import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { type Locale, locales, getTranslations } from "@/i18n";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

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
  
  const path = slug?.join("/") || "";
  
  // Route to correct page component
  switch (path) {
    case "":
      return <HomePage locale={locale} t={t} />;
    case "products":
      return <ProductsPage locale={locale} t={t} />;
    case "products/vanilla-beans":
      return <ProductDetailPage locale={locale} t={t} product="vanilla-beans" />;
    case "products/vanilla-paste":
      return <ProductDetailPage locale={locale} t={t} product="vanilla-paste" />;
    case "products/vanilla-powder":
      return <ProductDetailPage locale={locale} t={t} product="vanilla-powder" />;
    case "about":
      return <AboutPage locale={locale} t={t} />;
    case "contact":
      return <ContactPage locale={locale} t={t} />;
    case "quality":
      return <QualityPage locale={locale} t={t} />;
    case "faq":
      return <FAQPage locale={locale} t={t} />;
    case "wholesale":
      return <WholesalePage locale={locale} t={t} />;
    case "la-vanilla-standard":
      return <StandardPage locale={locale} t={t} />;
    default:
      notFound();
  }
}

// Page Components
function HomePage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <>
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
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white text-sm font-medium rounded-lg hover:bg-[#3D3425] transition-colors">
                {t.common.requestSample}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href={`/${locale}/products`} className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] text-sm font-medium rounded-lg border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors">
                {t.common.learnMore}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full lg:col-span-3">
            <Image src="/wholesale-hero.jpeg" alt="Premium Indonesian vanilla beans" fill className="object-cover" priority />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{t.common.tagline}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
    </>
  );
}

function ProductsPage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">{t.products.title}</h1>
          <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">{t.products.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.products.map((product) => (
            <Link key={product.id} href={`/${locale}/products/${product.slug}`} className="group bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64">
                <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C2518] mb-2 group-hover:text-[#B5A37A] transition-colors">{product.name}</h3>
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
  );
}

function ProductDetailPage({ locale, t, product }: { locale: Locale; t: ReturnType<typeof getTranslations>; product: string }) {
  const productData = siteConfig.products.find((p) => p.slug === product);
  if (!productData) return notFound();
  
  const specs = Object.entries(productData.specifications);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}/products`} className="text-[#B5A37A] hover:underline mb-8 inline-block">
          {t.common.backToProducts}
        </Link>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{productData.name}</h1>
        <p className="text-lg text-[#6B6358] mb-8">{productData.description}</p>
        <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
          <h2 className="text-xl font-bold text-[#2C2518] mb-4">{t.products.quickOverview}</h2>
          <div className="grid grid-cols-2 gap-4">
            {specs.map(([key, value]) => (
              <div key={key} className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-[#B5A37A] uppercase">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                <p className="text-sm font-medium text-[#2C2518]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-6 py-3 bg-[#2C2518] text-white text-sm font-medium rounded-lg hover:bg-[#3D3425] transition-colors">
            {t.common.requestQuote}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link href={`https://wa.me/${siteConfig.social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-[#B5A37A] text-white text-sm font-medium rounded-lg hover:bg-[#A8956A] transition-colors">
            {t.common.whatsapp}
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{t.about.title}</h1>
        <p className="text-lg text-[#6B6358] mb-8">{t.about.description}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
            <h2 className="text-xl font-bold text-[#2C2518] mb-4">{t.about.ourMission}</h2>
            <p className="text-[#6B6358]">{t.about.globalQualityStandardsDesc}</p>
          </div>
          <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
            <h2 className="text-xl font-bold text-[#2C2518] mb-4">{t.about.ourPhilosophy}</h2>
            <p className="text-[#6B6358]">{t.about.qualityFirstDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{t.contact.title}</h1>
        <p className="text-lg text-[#6B6358] mb-8">{t.contact.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
            <h2 className="text-xl font-bold text-[#2C2518] mb-4">{t.contact.sendMessage}</h2>
            <form className="space-y-4">
              <input type="text" placeholder={t.contact.name} className="w-full px-4 py-3 bg-white border border-[#E5E0D8] rounded-lg" />
              <input type="email" placeholder={t.contact.email} className="w-full px-4 py-3 bg-white border border-[#E5E0D8] rounded-lg" />
              <textarea placeholder={t.contact.message} rows={4} className="w-full px-4 py-3 bg-white border border-[#E5E0D8] rounded-lg" />
              <button type="submit" className="px-6 py-3 bg-[#2C2518] text-white font-medium rounded-lg hover:bg-[#3D3425] transition-colors">
                {t.common.contactUs}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
              <h2 className="text-xl font-bold text-[#2C2518] mb-4">{t.contact.whatsappChat}</h2>
              <p className="text-[#6B6358] mb-4">{t.contact.whatsappDesc}</p>
              <Link href={`https://wa.me/${siteConfig.social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A] transition-colors">
                {t.common.whatsapp}
              </Link>
            </div>
            <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
              <h2 className="text-xl font-bold text-[#2C2518] mb-4">{t.contact.emailUs}</h2>
              <p className="text-[#6B6358]">{siteConfig.social.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityPage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{t.quality.title}</h1>
        <p className="text-lg text-[#6B6358] mb-8">{t.quality.qualityPolicyDesc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[t.quality.halalCertified, t.quality.phytosanitary, t.quality.qualityAssured, t.quality.usImportReady, t.quality.sustainablySourced].map((cert) => (
            <div key={cert} className="bg-[#F8F6F2] rounded-xl p-6 border border-[#E5E0D8]">
              <h3 className="font-bold text-[#2C2518]">{cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQPage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{t.faq.title}</h1>
        <p className="text-lg text-[#6B6358] mb-8">{t.faq.description}</p>
        <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8] text-center">
          <p className="text-[#6B6358]">{t.faq.stillHaveQuestionsDesc}</p>
          <Link href={`https://wa.me/${siteConfig.social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A] transition-colors mt-4">
            {t.faq.chatWithUs}
          </Link>
        </div>
      </div>
    </section>
  );
}

function WholesalePage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{t.wholesale.title}</h1>
        <p className="text-lg text-[#6B6358] mb-8">{t.wholesale.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
            <h2 className="text-xl font-bold text-[#2C2518] mb-2">{t.wholesale.moq}</h2>
            <p className="text-[#6B6358]">{t.wholesale.moqDesc}</p>
          </div>
          <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
            <h2 className="text-xl font-bold text-[#2C2518] mb-2">{t.wholesale.volumePricing}</h2>
            <p className="text-[#6B6358]">{t.wholesale.volumePricingDesc}</p>
          </div>
          <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
            <h2 className="text-xl font-bold text-[#2C2518] mb-2">{t.wholesale.paymentTerms}</h2>
            <p className="text-[#6B6358]">{t.wholesale.paymentTermsDesc}</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors">
            {t.common.requestQuote}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StandardPage({ locale, t }: { locale: Locale; t: ReturnType<typeof getTranslations> }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-6">{t.nav.ourStandard}</h1>
        <p className="text-lg text-[#6B6358] mb-8">
          {locale === "en" ? "Our quality standards ensure consistent, premium vanilla products for global buyers." : t.about.qualityFirstDesc}
        </p>
        <div className="bg-[#F8F6F2] rounded-2xl p-8 border border-[#E5E0D8]">
          <h2 className="text-xl font-bold text-[#2C2518] mb-4">{t.quality.qualityAssured}</h2>
          <p className="text-[#6B6358]">{t.quality.qualityAssuredDesc}</p>
        </div>
      </div>
    </section>
  );
}
