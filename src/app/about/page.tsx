import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Users, Globe, Award, Leaf, ArrowRight, MapPin, Handshake, Target } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "About La Vanilla Supplier | Indonesian Vanilla Exporter Since 2015",
  description:
    "PT Penta Pelita Semesta - Indonesia's trusted vanilla supplier based in Java. Premium Grade A & B vanilla beans exported to 20+ countries.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About La Vanilla Supplier",
    description: "Indonesia's trusted vanilla supplier based in Java. Premium natural vanilla for global markets.",
    url: "https://lavanillasupplier.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2C2518] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center text-[#B5A37A] hover:text-white mb-6 text-sm transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              About La Vanilla Supplier
            </h1>
            <p className="text-[#B5A37A] text-lg font-medium mb-4">
              Your Formula. Our Vanilla.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed">
              Indonesian vanilla supplier based in Java, providing
              premium natural vanilla to global markets with consistent quality
              and reliable supply.
            </p>
            <p className="text-sm text-stone-400 mt-4">
              Operated by PT Penta Pelita Semesta — Registered Indonesian Company
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2C2518] mb-6">
                Meet Our Founder
              </h2>
              <div className="space-y-4">
                <p className="text-[#6B6358] leading-relaxed">
                  <strong className="text-[#2C2518]">Muhammad Irfan</strong> is the Founder &amp; Director of La Vanilla Supplier (PT Penta Pelita Semesta). Based in Java, Irfan has established direct relationships with smallholder farmers across the region, ensuring fair trade practices and full traceability from farm to shipment.
                </p>
                <p className="text-[#6B6358] leading-relaxed">
                  His deep knowledge of vanilla curing, grading, and export logistics has helped food manufacturers and distributors in 20+ countries source consistent, high-quality Indonesian vanilla. Irfan personally oversees quality control and maintains the relationships that make La Vanilla Supplier a trusted partner for B2B buyers worldwide.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/muhammad-irfan-601756367"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#B5A37A] hover:text-[#A8956A] font-medium flex items-center gap-1"
                  >
                    View LinkedIn Profile
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#F8F6F2] p-8 border border-[#E5E0D8]">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2518]">Based in Java</p>
                      <p className="text-sm text-[#6B6358]">Heart of Indonesian vanilla production</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2518]">Direct Farmer Partnerships</p>
                      <p className="text-sm text-[#6B6358]">Fair trade practices with full traceability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2518]">20+ Countries Served</p>
                      <p className="text-sm text-[#6B6358]">Global B2B vanilla supply network</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-[#B5A37A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2518]">Quality Oversight</p>
                      <p className="text-sm text-[#6B6358]">Personally oversees every batch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2C2518] mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Quality First",
                    description:
                      "We focus on delivering consistent, high-quality vanilla that meets international standards.",
                  },
                  {
                    icon: Handshake,
                    title: "Long-Term Reliability",
                    description:
                      "We build lasting partnerships based on trust, transparency, and consistent supply.",
                  },
                  {
                    icon: Leaf,
                    title: "Indonesian Excellence",
                    description:
                      "We are committed to showcasing the best of Indonesian vanilla to the world.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#2C2518] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#B5A37A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2518] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#6B6358]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#2C2518] p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Leaf className="w-20 h-20 text-[#B5A37A] mx-auto mb-6" />
                  <p className="text-stone-300 text-lg">Premium Indonesian Vanilla</p>
                  <p className="text-stone-400 text-sm mt-2">Sustainably Sourced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C2518] mb-4">
              Our Mission
            </h2>
            <p className="text-[#6B6358] max-w-2xl mx-auto">
              We are committed to delivering the highest quality Indonesian vanilla while building sustainable partnerships with buyers worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Global Quality Standards",
                description:
                  "Deliver high-quality natural vanilla to global markets through reliable supply and consistent standards.",
              },
              {
                icon: Users,
                title: "Trusted Partnerships",
                description:
                  "Build long-term partnerships based on trust, transparency, and mutual growth.",
              },
              {
                icon: Award,
                title: "Integrity & Compliance",
                description:
                  "Uphold integrity, compliance, and professionalism in every aspect of our operations.",
              },
              {
                icon: Leaf,
                title: "Continuous Improvement",
                description:
                  "Continuously improve processes to ensure efficiency, quality assurance, and customer satisfaction.",
              },
              {
                icon: CheckCircle2,
                title: "Sustainable Practices",
                description:
                  "Maintain sustainable practices throughout our operations to support environmental responsibility.",
              },
              {
                icon: Globe,
                title: "Indonesian Heritage",
                description:
                  "Represent the rich tradition of Indonesian vanilla cultivation with pride and excellence.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#2C2518] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#B5A37A]" />
                </div>
                <h3 className="font-semibold text-[#2C2518] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B6358] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vanilla Origin */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#2C2518] p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-[#B5A37A] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#2C2518]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Java, Indonesia</p>
                      <p className="text-sm text-stone-300">Heart of vanilla cultivation</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl text-center">
                      <p className="text-2xl font-bold text-[#B5A37A]">0-1200m</p>
                      <p className="text-xs text-stone-300 mt-1">Altitude Range</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl text-center">
                      <p className="text-2xl font-bold text-[#B5A37A]">27°C</p>
                      <p className="text-xs text-stone-300 mt-1">Avg Temperature</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl text-center">
                      <p className="text-2xl font-bold text-[#B5A37A]">80%</p>
                      <p className="text-xs text-stone-300 mt-1">Humidity Level</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl text-center">
                      <p className="text-2xl font-bold text-[#B5A37A]">Volcanic</p>
                      <p className="text-xs text-stone-300 mt-1">Rich Soil Type</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#2C2518] mb-6">
                Our Vanilla Origin
              </h2>
              <p className="text-[#6B6358] mb-6 leading-relaxed">
                Our vanilla is cultivated in the rich volcanic soil of Java,
                where the tropical climate produces beans of exceptional quality.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-[#E5E0D8]">
                  <p className="font-semibold text-[#2C2518] mb-1">
                    Origin — Java, Indonesia
                  </p>
                  <p className="text-sm text-[#6B6358]">
                    Our vanilla comes from the highlands of Java, where rich volcanic soil and tropical climate create ideal growing conditions.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E0D8]">
                  <p className="font-semibold text-[#2C2518] mb-1">
                    Processing — Indonesia
                  </p>
                  <p className="text-sm text-[#6B6358]">
                    We handle curing, grading, and packaging at our facility, ensuring quality control from harvest to shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: siteConfig.stats.countriesServed, label: "Countries Served" },
              { value: siteConfig.stats.yearsExperience, label: "Years in Business" },
              { value: siteConfig.stats.happyClients, label: "Happy Clients" },
              { value: siteConfig.stats.tonsExported, label: "Tons Exported" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-[#B5A37A]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Visit */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F6F2] rounded-2xl p-8 lg:p-12 border border-[#E5E0D8]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#2C2518] mb-4">
                  Visit Our Facility
                </h2>
                <p className="text-[#6B6358] mb-6 leading-relaxed">
                  We welcome buyers to visit our processing facility and see how
                  we maintain the highest quality standards. Schedule a visit to
                  witness our curing, grading, and packaging operations
                  firsthand.
                </p>
                <div className="space-y-3">
                  {[
                    "See our vanilla curing process in action",
                    "Inspect quality control procedures",
                    "Meet our team and discuss your requirements",
                    "Verify our inventory and packaging",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B5A37A]" />
                      <span className="text-[#6B6358]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <a
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors"
                >
                  Schedule a Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <p className="text-sm text-[#6B6358] mt-4">
                  Contact us to arrange your facility tour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About La Vanilla Supplier",
            description: "Learn about La Vanilla Supplier - Indonesia's trusted vanilla supplier",
            url: `${siteConfig.url}/about`,
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surakarta",
                addressRegion: "Java",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.social.whatsapp,
                contactType: "sales",
                availableLanguage: ["English", "Indonesian"],
              },
              areaServed: ["AE", "AU", "US", "NL", "FR", "DE", "SG", "MY", "JP", "KR"],
              hasCredential: [
                "Halal Certified",
                "Phytosanitary Certified",
              ],
              founder: {
                "@type": "Person",
                name: "Muhammad Irfan",
                jobTitle: "Founder & Director",
                url: "https://www.linkedin.com/in/muhammad-irfan-601756367",
                sameAs: [
                  "https://www.linkedin.com/in/muhammad-irfan-601756367",
                ],
              },
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
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />
    </>
  );
}
