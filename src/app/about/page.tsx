import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Users, Globe, Award, Leaf } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about La Vanilla Supplier - Indonesia's trusted vanilla supplier based in Central Java. Premium natural vanilla for global markets.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About La Vanilla Supplier",
    description: "Indonesia's trusted vanilla supplier based in Central Java. Premium natural vanilla for global markets.",
    url: "https://lavanillasupplier.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#D8C393] to-[#C4B07A] text-stone-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About La Vanilla Supplier
            </h1>
            <p className="text-lg text-[#B5A37A] font-medium mb-2 italic">
              Your Formula. Our Vanilla.
            </p>
            <p className="text-lg text-stone-700">
              Indonesian vanilla supplier based in Central Java, providing
              premium natural vanilla to global markets with consistent quality
              and reliable supply.
            </p>
            <p className="text-sm text-stone-600 mt-4">
              Operated by PT Penta Pelita Semesta — Registered Indonesian Company
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Quality First",
                    description:
                      "We focus on delivering consistent, high-quality vanilla that meets international standards.",
                  },
                  {
                    title: "Long-Term Reliability",
                    description:
                      "We build lasting partnerships based on trust, transparency, and consistent supply.",
                  },
                  {
                    title: "Indonesian Excellence",
                    description:
                      "We are committed to showcasing the best of Indonesian vanilla to the world.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#8B7D50] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600"
                  alt="Our vanilla processing facility"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#E8DCC0] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#8B7D50]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600"
                  alt="Indonesian vanilla farm"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vanilla
              </h2>
              <p className="text-gray-600 mb-6">
                Our vanilla is cultivated in the rich volcanic soil of Java,
                where the tropical climate produces beans of exceptional quality.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Origin",
                    location: "Central Java, Indonesia",
                    description:
                      "Our vanilla comes from the highlands of Central Java, where rich volcanic soil and tropical climate create ideal growing conditions.",
                  },
                  {
                    title: "Processing",
                    location: "Indonesia",
                    description:
                      "We handle curing, grading, and packaging at our facility, ensuring quality control from harvest to shipment.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-50 rounded-lg p-4"
                  >
                    <p className="font-semibold text-gray-900">
                      {item.title} — {item.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#D8C393] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: siteConfig.stats.countriesServed, label: "Countries Served" },
              { value: siteConfig.stats.yearsExperience, label: "Years in Business" },
              { value: siteConfig.stats.happyClients, label: "Happy Clients" },
              { value: siteConfig.stats.tonsExported, label: "Tons Exported" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-[#8B7D50]">{stat.label}</p>
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
                <p className="text-[#6B6358] mb-6">
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
                  className="inline-flex items-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
                >
                  Schedule a Visit
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
                addressRegion: "Central Java",
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
