"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Star, Package, Plane, Boxes, Globe } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLocaleContext } from "@/components/locale-provider";

export function HomePageContent() {
  const { locale, t } = useLocaleContext();
  const prefix = locale === "en" ? "" : `/${locale}`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <>
      {/* Hero Section - light, product-forward (studio photo blends into the page) */}
      <section className="relative bg-[#FCFCFC] overflow-hidden">
        {/* Photo (desktop): right side, white studio background melts into the section */}
        <div className="hidden lg:block absolute inset-y-0 end-0 w-[56%]" aria-hidden="true">
          <Image
            src="/hero-vanilla-beans-studio.jpg"
            alt=""
            fill
            priority
            sizes="56vw"
            className="object-cover object-left rtl:-scale-x-100"
          />
          <div className="absolute inset-y-0 start-0 w-1/5 bg-gradient-to-r rtl:bg-gradient-to-l from-[#FCFCFC] to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-14 lg:py-24 lg:min-h-[660px] lg:flex lg:items-center">
          <div className="w-full lg:max-w-[520px]">
            {/* Photo (mobile) */}
            <div className="lg:hidden relative -mx-6 sm:-mx-8 mb-6 aspect-[16/11]">
              <Image
                src="/hero-vanilla-beans-studio-mobile.jpg"
                alt="Cured Indonesian vanilla beans from Java"
                fill
                priority
                sizes="100vw"
                className="object-cover rtl:-scale-x-100"
              />
            </div>

            <p className="flex items-center gap-3 text-[#9A8457] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              <span className="w-8 h-px bg-[#B5A37A]" aria-hidden="true" />
              Indonesia&apos;s #1 Vanilla Supplier
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-[3.75rem] text-[#2C2518] mb-5 leading-[1.05] tracking-tight font-[family-name:var(--font-libre)]">
              <span className="font-normal italic">Stop Worrying</span>{" "}
              <span className="font-bold">About Vanilla Supply</span>
            </h1>
            <p className="text-lg text-[#8C7A4F] font-medium mb-4 italic">
              {t.home.heroSubtitle}
            </p>
            <p className="text-[#6B6358] mb-8 leading-relaxed text-base sm:text-lg">
              {t.home.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white text-sm font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                {t.common.requestSample}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href={`${prefix}/products`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] text-sm font-medium rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
              >
                {t.common.learnMore}
              </Link>
            </div>

            <ul className="mt-9 pt-6 border-t border-[#EEE9E1] flex flex-wrap gap-x-6 gap-y-2.5">
              {[t.quality.halalCertified, t.quality.phytosanitary, t.products.fullDocumentation].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#6B6358]">
                  <CheckCircle2 className="w-4 h-4 text-[#B5A37A]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section aria-label="Key figures" className="bg-white border-y border-[#EEE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 py-10 lg:py-0 lg:gap-0 lg:divide-x rtl:lg:divide-x-reverse divide-[#EEE9E1]">
            {t.home.figures.map((fig, i) => {
              const Icon = [Package, Plane, Boxes, Globe][i] ?? Package;
              return (
                <div key={fig.label} className="flex items-start gap-3.5 lg:gap-4 lg:px-8 lg:py-10 first:lg:ps-0 last:lg:pe-0">
                  <Icon className="w-5 h-5 mt-1 flex-shrink-0 text-[#B5A37A]" strokeWidth={1.6} aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A9187]">{fig.label}</dt>
                    <dd className="mt-1.5">
                      <span className="text-[1.65rem] lg:text-[2rem] font-bold leading-none tracking-tight text-[#2C2518]">
                        <span dir="ltr">{fig.value}</span>
                        {fig.unit && <span className="ms-1.5 text-base lg:text-lg font-semibold text-[#B5A37A]">{fig.unit}</span>}
                      </span>
                      <span className="block mt-2 text-[13px] leading-snug text-[#6B6358]">{fig.note}</span>
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">About Us</p>
              <h2 className="text-3xl lg:text-[2.6rem] font-bold text-[#2C2518] leading-[1.15] mb-6">
                {t.common.tagline}
              </h2>
              <div className="w-12 h-[2px] bg-[#B5A37A] mb-6" aria-hidden="true" />
              <p className="text-sm text-[#9A9187]">
                {t.about.operatedBy} {t.about.registeredCompany}
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xl lg:text-[1.35rem] leading-relaxed text-[#2C2518] mb-6">
                {t.about.description}
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-[#6B6358] mb-5">
                {t.home.aboutMore1}
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-[#6B6358] mb-10">
                {t.home.aboutMore2}
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-8 border-t border-[#EEE9E1]">
                {[
                  t.quality.qualityAssured,
                  t.quality.halalCertified,
                  t.products.fullDocumentation,
                  t.quality.phytosanitary,
                ].map((badge) => (
                  <li key={badge} className="flex items-center gap-2.5 text-sm font-medium text-[#2C2518]">
                    <CheckCircle2 className="w-4 h-4 text-[#B5A37A] flex-shrink-0" aria-hidden="true" />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-20 lg:py-24 bg-[#2C2518] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Text */}
            <div className="lg:col-span-5">
              <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Our Source
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Where Our Vanilla<br className="hidden sm:block" /> Comes From
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-10">
                Our vanilla grows on smallholder plantations across Java, where rich volcanic
                soil and a tropical climate give V. planifolia its deep, creamy character. We buy
                directly from the farmers who grow it, so you get fresher beans, fair prices and
                a supply you can rely on.
              </p>

              <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {[
                  { label: "Species", value: "V. planifolia" },
                  { label: "Curing", value: "Sun-cured 6–9 months" },
                  { label: "Soil", value: "Volcanic, Java" },
                ].map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mb-1.5">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-white/90 leading-snug">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Map: Java highlighted, eastern edge fades out at the PNG border */}
            <div className="lg:col-span-7">
              <div className="relative lg:w-[118%] rtl:lg:-ms-[18%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/indonesia-map-java.svg"
                  alt="Map of Indonesia with Java highlighted"
                  className="w-full h-auto"
                  loading="lazy"
                />
                {/* Java marker */}
                <div className="absolute" style={{ left: "32.8%", top: "78.5%" }} aria-hidden="true">
                  <span className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#B5A37A]/30 animate-ping" />
                  <span className="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#E8D9B0] ring-4 ring-[#B5A37A]/40" />
                  <span className="absolute left-0 bottom-2 w-px h-8 sm:h-11 bg-gradient-to-t from-[#B5A37A] to-transparent" />
                  <span className="absolute left-0 bottom-[2.6rem] sm:bottom-[3.4rem] -translate-x-1/2 whitespace-nowrap rounded-full border border-[#B5A37A]/40 bg-[#2C2518]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E8D9B0]">
                    Java
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">{t.home.productsEyebrow}</p>
            <h2 id="products-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4 text-balance">
              {t.home.productsTitle}
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto text-balance">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {siteConfig.products.map((product) => (
              <Link key={product.id} href={`${prefix}/products/${product.slug}`} className="group flex flex-col">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F2EE]">
                  <Image
                    src={product.image}
                    alt={t.home.productAlts[product.category]}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pt-6 flex flex-col flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mb-2">
                    {t.home.productTags[product.category]}
                  </p>
                  <h3 className="text-xl font-semibold text-[#2C2518] mb-2">{product.name}</h3>
                  <p className="text-[#6B6358] leading-relaxed mb-5">{product.shortDescription}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#2C2518]">
                    <span className="border-b border-[#B5A37A]/0 group-hover:border-[#B5A37A] transition-colors">
                      {t.products.viewProduct}
                    </span>
                    <ArrowRight className="ms-2 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Video — contained 16:9 frame, sits right after Products */}
      <section className="pt-20 pb-24 lg:pt-24 lg:pb-36 bg-white border-t border-[#EEE9E1]" aria-labelledby="process-video-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text (left on desktop, above video on mobile) */}
            <div className="lg:col-span-4">
              <div className="w-10 h-[2px] bg-[#B5A37A] mb-6" />
              <p className="text-[#B5A37A] text-xs font-medium uppercase tracking-[0.2em] mb-4">
                Our Process
              </p>
              <h2 id="process-video-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-5 leading-tight">
                See how the paste is made
              </h2>
              <p className="text-lg text-[#6B6358] leading-relaxed mb-8">
                Watch our team grind and blend real vanilla beans into smooth,
                spreadable paste, done the same way every batch, from cured bean
                to export-ready tub.
              </p>
              <Link
                href={`${prefix}/products/vanilla-paste`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C2518] text-white text-sm font-medium rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                View vanilla paste
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Video — true 16:9 so nothing is cropped */}
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#2C2518] shadow-xl ring-1 ring-[#2C2518]/10 group">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls={videoStarted}
                  poster="/process-poster.jpg"
                  preload="metadata"
                  playsInline
                  onPlay={() => setVideoStarted(true)}
                  onEnded={() => setVideoStarted(false)}
                >
                  <source src="/vanilla-paste-process.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!videoStarted && (
                  <button
                    type="button"
                    onClick={() => {
                      videoRef.current?.play();
                      setVideoStarted(true);
                    }}
                    aria-label="Play process video"
                    className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/5 transition-colors duration-300"
                  >
                    <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#B5A37A]/50 backdrop-blur-md ring-1 ring-white/40 text-white flex items-center justify-center shadow-lg group-hover:bg-[#B5A37A] group-hover:scale-105 transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/50 text-white text-xs font-medium">
                      0:29
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F8F6F2]" aria-labelledby="why-choose-heading">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left panel — photo with heading */}
          <div className="relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <Image
              src="/why-choose-us.webp"
              alt="Fresh vanilla pods growing on the vine in Java"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#2C2518]/75" aria-hidden="true" />
            <div className="relative z-10">
              <p className="text-[#B5A37A] text-xs font-medium uppercase tracking-[0.2em] mb-6">
                {t.home.whyChooseUs}
              </p>
              <h2 id="why-choose-heading" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.15] mb-8">
                There are hundreds of vanilla suppliers in Indonesia.
              </h2>
              <p className="text-xl sm:text-2xl font-medium text-white/80 leading-snug mb-8">
                Finding one that consistently delivers quality is the hard part.
              </p>
              <div className="w-12 h-[2px] bg-[#B5A37A] mb-8" />
              <p className="text-white/85 text-sm leading-relaxed max-w-md">
                Very few have the consistency, transparency, and long-term
                commitment that serious importers need.
              </p>
              <a
                href="/La Vanilla Supplier - Company Profile.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#B5A37A] text-[#2C2518] text-sm font-semibold rounded-lg hover:bg-[#D4C48A] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Company Profile
              </a>
            </div>
          </div>

          {/* Right panel — numbered proof rows */}
          <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-0">
              {[
                {
                  num: "01",
                  title: t.home.directFromSource,
                  body: t.home.directFromSourceDesc,
                },
                {
                  num: "02",
                  title: "Verified Physical Stock",
                  body: "No middlemen. We maintain our own inventory with video call verification available for all wholesale partners.",
                },
                {
                  num: "03",
                  title: t.products.fullDocumentation,
                  body: t.products.fullDocumentationDesc,
                },
                {
                  num: "04",
                  title: t.home.globalSupply,
                  body: t.home.globalSupplyDesc,
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className={`flex gap-5 sm:gap-6 py-7 ${
                    i < 3 ? "border-b border-[#E5E0D8]" : ""
                  }`}
                >
                  <span className="text-2xl sm:text-3xl font-medium text-[#B5A37A] leading-none pt-0.5 w-8 sm:w-10 flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-[#2C2518] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6358] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Specifications</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Product Specifications
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Transparent, detailed specifications for every product. What you
              see is exactly what you get.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#2C2518]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                      {t.products.specification}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                      Grade A Beans
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#B5A37A]">
                      Grade B Beans
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  {[
                    { spec: "Species", gradeA: "V. planifolia", gradeB: "V. planifolia" },
                    { spec: "Moisture Content", gradeA: "25–35%", gradeB: "< 25%" },
                    { spec: "Vanillin Content", gradeA: "1.1–2.5%", gradeB: "1.0–2.0%" },
                    { spec: "Bean Length", gradeA: "15–20 cm", gradeB: "10–15 cm" },
                    { spec: "Curing Period", gradeA: "6–9 months", gradeB: "6–9 months" },
                    { spec: "MOQ", gradeA: "From 1 kg", gradeB: "From 1 kg" },
                    { spec: "HS Code", gradeA: "0905.10", gradeB: "0905.10" },
                  ].map((row, index) => (
                    <tr key={row.spec} className={index % 2 === 0 ? "bg-white" : "bg-[#F8F6F2]"}>
                      <td className="px-6 py-4 text-sm font-medium text-[#2C2518]">
                        {row.spec}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6B6358]">
                        {row.gradeA}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6B6358]">
                        {row.gradeB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Export Regions */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Where We Ship</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4 leading-tight">
                Serving Buyers Worldwide
              </h2>
              <p className="text-lg text-[#6B6358] leading-relaxed mb-8">
                From the Middle East to North America, we deliver premium
                Indonesian vanilla with full export documentation.
              </p>
              <Link
                href={`${prefix}/wholesale`}
                className="group inline-flex items-center text-sm font-semibold text-[#2C2518] hover:text-[#B5A37A] transition-colors"
              >
                See wholesale pricing and terms
                <ArrowRight className="ml-2 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <ul className="lg:col-span-7 border-t border-[#E5E0D8]">
              {[
                {
                  region: "UAE & Middle East",
                  href: `${prefix}/regions/uae`,
                  description: "Dubai, Abu Dhabi, and across the GCC. Halal certified. Fast air freight.",
                },
                {
                  region: "Australia",
                  href: `${prefix}/regions/australia`,
                  description: "Sydney, Melbourne, Perth. Food safety compliant. Fast air freight.",
                },
                {
                  region: "USA",
                  href: `${prefix}/regions/usa`,
                  description: "US Import Ready. East and West coast. DHL and FedEx shipping.",
                },
                {
                  region: "Europe",
                  href: `${prefix}/regions/europe`,
                  description: "EU food safety standards. Netherlands, France, Germany, and more.",
                },
              ].map((item) => (
                <li key={item.region} className="border-b border-[#E5E0D8]">
                  <Link
                    href={item.href}
                    className="group flex items-center gap-6 py-6"
                  >
                    <div className="flex-1 sm:flex sm:items-baseline sm:gap-8">
                      <h3 className="sm:w-48 flex-shrink-0 text-lg font-semibold text-[#2C2518] group-hover:text-[#B5A37A] transition-colors mb-1 sm:mb-0">
                        {item.region}
                      </h3>
                      <p className="text-sm text-[#6B6358] leading-relaxed">{item.description}</p>
                    </div>
                    <ArrowRight
                      className="w-5 h-5 flex-shrink-0 text-[#B5A37A] group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-[#B5A37A] fill-[#B5A37A]"
                />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-white mb-8 leading-relaxed">
              &ldquo;Honestly, we had a bad experience with another supplier before finding La Vanilla. The beans were dry, half of them smelled like nothing. La Vanilla was recommended by a friend in the industry and we haven&apos;t looked back. The quality speaks for itself, our clients keep coming back for more.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-white">Ahmed Al-Rashid</p>
              <p className="text-[#B5A37A]">Food Importer, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Insights</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Vanilla Industry Insights
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Expert guides on sourcing, quality, and export from Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                slug: "halal-vanilla-supplier-middle-east",
                title: "Halal Certified Vanilla Supplier for Middle East & Global Markets",
                date: "April 15, 2026",
                category: "Market Guide",
              },
              {
                slug: "vanilla-paste-bulk-order",
                title: "Vanilla Paste Bulk Order: Specifications for Food Manufacturers",
                date: "April 12, 2026",
                category: "Product Guide",
              },
              {
                slug: "wholesale-vanilla-beans-indonesia",
                title: "Wholesale Vanilla Beans from Indonesia: B2B Buyer Guide 2026",
                date: "April 10, 2026",
                category: "Wholesale Guide",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`${prefix}/blog/${post.slug}`}
                className="group flex flex-col p-7 bg-white rounded-2xl border border-[#E5E0D8] hover:border-[#B5A37A]/60 hover:shadow-md transition-all duration-300"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mb-3">
                  {post.category}
                </p>
                <h3 className="text-lg font-semibold leading-snug text-[#2C2518] group-hover:text-[#B5A37A] transition-colors mb-6">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center justify-between text-sm">
                  <span className="text-[#9A9187]">{post.date}</span>
                  <span className="inline-flex items-center font-medium text-[#2C2518] group-hover:text-[#B5A37A] transition-colors">
                    Read
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`${prefix}/blog`}
              className="inline-flex items-center text-sm font-semibold text-[#B5A37A] hover:text-[#A8956A] transition-colors"
            >
              Read all articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Free Samples</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
            Ready to Start Your Vanilla Journey?
          </h2>
          <p className="text-lg text-[#6B6358] mb-8">
            Get a free sample and a quote within 24 hours. Orders from 1 kg at wholesale pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
            >
              {t.common.requestSample}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
            >
              {t.common.whatsapp}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
