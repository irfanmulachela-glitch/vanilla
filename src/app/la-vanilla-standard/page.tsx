import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Shield, Leaf, Award, FileCheck, Truck } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import VanillaGradingChart from "@/components/vanilla-grading-chart";

export const metadata: Metadata = {
  title: "The La Vanilla Standard | Quality Framework for Vanilla Supply",
  description:
    "The La Vanilla Standard is our 5-step quality framework for vanilla sourcing, grading, and export. Learn how we ensure consistent quality for B2B buyers worldwide.",
  alternates: {
    canonical: "/la-vanilla-standard",
  },
  openGraph: {
    title: "The La Vanilla Standard | La Vanilla Supplier",
    description:
      "Our 5-step quality framework for vanilla sourcing, grading, and export.",
    url: `${siteConfig.url}/la-vanilla-standard`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    title: "Source Verification",
    icon: Leaf,
    description:
      "Every batch originates from verified farms in Central Java, Indonesia. We maintain direct relationships with farming communities, ensuring traceability from harvest to shipment.",
    details: [
      "Direct farm relationships in Central Java",
      "Bean variety verification (V. planifolia)",
      "Full traceability from harvest to shipment",
    ],
  },
  {
    number: "02",
    title: "Curing Excellence",
    icon: Award,
    description:
      "Our 6-9 month curing process combines traditional sun-drying with controlled sweat-box techniques, developing the rich, complex flavor profile that defines premium Indonesian vanilla.",
    details: [
      "6-9 month traditional curing process",
      "Sun-dried with controlled sweat-box technique",
      "Temperature and humidity monitoring",
      "Flavor development optimization",
    ],
  },
  {
    number: "03",
    title: "Precision Grading",
    icon: Shield,
    description:
      "Each bean undergoes multi-stage inspection for length, moisture content, and vanillin concentration. Only beans meeting our strict specifications receive the La Vanilla Standard designation.",
    details: [
      "Grade A: 15-20 cm, 25-35% moisture, 1.3-2.7% vanillin",
      "Grade B: 10-15 cm, less than 25% moisture, 1.3-2.2% vanillin",
      "Visual inspection for defects",
      "Batch-specific Certificates of Analysis",
    ],
  },
  {
    number: "04",
    title: "Quality Assurance",
    icon: FileCheck,
    description:
      "Every shipment includes complete documentation: Phytosanitary Certificate, Certificate of Origin, and batch-specific quality testing results. No exceptions.",
    details: [
      "Phytosanitary Certificate (IQFAST system)",
      "Certificate of Origin (Ministry of Trade)",
      "Batch-specific Certificate of Analysis",
      "Full export documentation package",
    ],
  },
  {
    number: "05",
    title: "Reliable Delivery",
    icon: Truck,
    description:
      "We ship air freight from Indonesia with flexible options to meet your needs. Temperature-controlled packaging preserves bean quality during transit.",
    details: [
      "Air freight from Indonesia",
      "Flexible shipping options",
      "Temperature-controlled packaging",
      "Flexible order quantities for wholesale",
    ],
  },
];

export default function LaVanillaStandardPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2C2518] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/la-vanilla-standard-hero.webp"
            alt="Premium Indonesian vanilla beans cured to perfection"
            fill
            className="object-cover blur-[2px] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2518]/95 via-[#2C2518]/75 to-[#2C2518]/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              The La Vanilla{" "}
              <span className="text-[#B5A37A]">Standard</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              A 5-step quality framework that ensures every vanilla bean we
              export meets the highest standards of quality, traceability, and
              consistency. This is how we deliver reliability to B2B buyers
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-[#F8F6F2] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5", label: "Quality Steps" },
              { value: "6-9", label: "Months Curing" },
              { value: "100%", label: "Traceable" },
              { value: "0", label: "Exceptions" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#B5A37A]">{stat.value}</p>
                <p className="text-sm text-[#6B6358]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Steps - Horizontal Progress Flow */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em] mb-3">
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              5 Steps to Perfect Vanilla
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              From farm to your facility — every step is documented, verified, and optimized for quality.
            </p>
          </div>

          {/* Horizontal Flow */}
          <div className="relative mb-16">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#B5A37A]/30 via-[#B5A37A]/60 to-[#B5A37A]/30" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Number + Icon Circle */}
                  <div className="relative z-10 w-[80px] h-[80px] bg-white border-2 border-[#E5E0D8] rounded-full flex flex-col items-center justify-center mb-4 group-hover:border-[#B5A37A] group-hover:shadow-lg transition-all duration-300">
                    <span className="text-xs font-bold text-[#B5A37A] mb-0.5">
                      {step.number}
                    </span>
                    <step.icon className="w-6 h-6 text-[#B5A37A]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-[#2C2518] mb-2 group-hover:text-[#B5A37A] transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Key Points (abbreviated) */}
                  <ul className="space-y-1">
                    {step.details.slice(0, 2).map((detail) => (
                      <li key={detail} className="text-xs text-[#6B6358] leading-tight">
                        {detail.length > 40 ? detail.substring(0, 40) + '...' : detail}
                      </li>
                    ))}
                  </ul>

                  {/* Connector Arrow (between cards) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[36px] -right-2 w-4 h-4 items-center justify-center">
                      <div className="w-2 h-2 bg-[#B5A37A]/50 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-10 items-start bg-[#F8F6F2] rounded-2xl p-6 lg:p-8 border border-[#E5E0D8] hover:border-[#B5A37A]/50 transition-all duration-300"
              >
                {/* Left: Number + Icon */}
                <div className="flex lg:flex-col items-center gap-4 lg:gap-2 lg:w-[100px]">
                  <span className="text-4xl font-bold text-[#B5A37A]/20 lg:text-[#B5A37A]/30">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-[#B5A37A]/15 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#B5A37A]" />
                  </div>
                </div>

                {/* Middle: Title + Description */}
                <div>
                  <h3 className="text-xl font-bold text-[#2C2518] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6B6358] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Right: Key Details */}
                <div className="bg-white rounded-xl p-5 border border-[#E5E0D8]">
                  <h4 className="font-semibold text-[#2C2518] mb-3 text-xs uppercase tracking-wider">
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B5A37A] mt-0.5 flex-shrink-0" />
                        <span className="text-[#6B6358] text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grading Chart */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em] mb-3">
              Visual Reference
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Vanilla Bean Grading System
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Understand the differences between our vanilla bean grades with this visual comparison.
            </p>
          </div>
          <VanillaGradingChart />
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
              Our Promise to You
            </h2>
            <p className="text-lg text-[#6B6358] max-w-2xl mx-auto">
              Every shipment backed by the La Vanilla Standard. No exceptions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Traceability",
                description: "From farm to shipment, every step documented and verified.",
              },
              {
                title: "Consistent Quality",
                description: "Same high standards across every batch, every order.",
              },
              {
                title: "Complete Documentation",
                description: "All certificates and compliance documents included.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-[#E5E0D8] text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-[#B5A37A] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2C2518] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B6358] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experience The La Vanilla Standard
          </h2>
          <p className="text-[#B5A37A] mb-8 max-w-2xl mx-auto">
            Request a sample and see the quality difference for yourself.
            Every sample includes our full documentation package.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg hover:bg-[#F8F6F2] transition-colors"
            >
              Request Free Sample
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/quality"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-lg hover:bg-[#A8956A] transition-colors"
            >
              View Quality Page
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The La Vanilla Standard: Quality Framework for Vanilla Supply",
            description:
              "A 5-step quality framework for vanilla sourcing, grading, and export",
            author: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/la-vanilla-standard`,
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
              { name: "The La Vanilla Standard", url: "/la-vanilla-standard" },
            ])
          ),
        }}
      />
    </>
  );
}
