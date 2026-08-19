import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Users, Globe, Award, Leaf } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about La Vanilla Supplier - Indonesia's trusted vanilla supplier with 10+ years of experience in premium vanilla export. Food Safety Standards.",
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
            <p className="text-lg text-stone-700">
              Bridging Indonesian vanilla farmers with global markets through
              responsible trade, trusted partnerships, and sustainable products.
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
                    title: "Growth With Purpose",
                    description:
                      "We grow beyond profit, creating value for farmers, partners, communities, and long-term sustainability.",
                  },
                  {
                    title: "Partnership Over Transaction",
                    description:
                      "We build business on trust, honesty, and lasting relationships — not just short-term deals.",
                  },
                  {
                    title: "Optimism in Every Opportunity",
                    description:
                      "We see challenges as opportunities to improve, innovate, and contribute to a better future for everyone.",
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
                  "Deliver high-quality natural products to global markets through reliable supply and consistent standards.",
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
                title: "Sustainable Sourcing",
                description:
                  "Support local producers and communities through responsible and sustainable sourcing practices.",
              },
              {
                icon: Globe,
                title: "Market Connectivity",
                description:
                  "Connect local Indonesian potential with global market needs through quality and commitment.",
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
                Our Sources
              </h2>
              <p className="text-gray-600 mb-6">
                From plantation to processing, every product begins in the hands
                of local farmers and communities across Indonesia.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Vanilla Farms",
                    location: "Central Java, Indonesia",
                    description:
                      "Hand-picked vanilla beans, cultivated in partnership with smallholder growers across Java.",
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
              { value: siteConfig.stats.yearsExperience, label: "Years Experience" },
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About La Vanilla Supplier",
            description: "Learn about our vanilla export business",
            url: `${siteConfig.url}/about`,
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              description: siteConfig.description,
            },
          }),
        }}
      />
    </>
  );
}
