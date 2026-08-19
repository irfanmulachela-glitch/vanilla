import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Indonesian Vanilla Bean Comparison | Grade A vs Grade B Specs",
  description:
    "Technical comparison of Grade A gourmet vs Grade B extraction vanilla beans. Moisture content, vanillin levels, bean length, and pricing. Direct from Indonesia.",
  keywords: [
    "vanilla bean comparison",
    "Grade A vs Grade B vanilla",
    "vanilla bean specifications",
    "Indonesian vanilla moisture content",
    "vanilla vanillin content",
  ],
};

export default function ComparisonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F6F2] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2518] mb-6">
              Indonesian Vanilla Bean Comparison
            </h1>
            <p className="text-lg text-[#6B6358]">
              Technical specifications for Grade A gourmet and Grade B
              extraction vanilla beans. All data verified by independent
              laboratory testing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2C2518] mb-8">
            Grade A vs Grade B: Full Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#E5E0D8] rounded-xl overflow-hidden">
              <thead className="bg-[#F8F6F2]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                    Specification
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                    Grade A (Gourmet)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                    Grade B (Extract)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8]">
                {[
                  {
                    spec: "Species",
                    gradeA: "V. planifolia",
                    gradeB: "V. planifolia",
                  },
                  {
                    spec: "Bean Length",
                    gradeA: "16–20 cm",
                    gradeB: "10–16 cm",
                  },
                  {
                    spec: "Moisture Content",
                    gradeA: "25–35%",
                    gradeB: "< 25%",
                  },
                  {
                    spec: "Vanillin Content",
                    gradeA: "1.3–2.7%",
                    gradeB: "1.3–2.2%",
                  },
                  {
                    spec: "Appearance",
                    gradeA: "Plump, oily, dark brown",
                    gradeB: "Thinner, drier, variable color",
                  },
                  {
                    spec: "Texture",
                    gradeA: "Flexible, oily surface",
                    gradeB: "Firmer, less oily",
                  },
                  {
                    spec: "Aroma",
                    gradeA: "Rich, complex, intense",
                    gradeB: "Good, less intense",
                  },
                  {
                    spec: "Curing Period",
                    gradeA: "6–9 months",
                    gradeB: "6–9 months",
                  },
                  {
                    spec: "MOQ",
                    gradeA: "25 kg",
                    gradeB: "25 kg",
                  },
                  {
                    spec: "HS Code",
                    gradeA: "0905.10",
                    gradeB: "0905.10",
                  },
                  {
                    spec: "Best For",
                    gradeA: "Retail, pastry, culinary, ice cream",
                    gradeB: "Extract manufacturing, industrial",
                  },
                  {
                    spec: "Price Range (FOB)",
                    gradeA: "$300–500/kg",
                    gradeB: "$150–300/kg",
                  },
                ].map((row) => (
                  <tr key={row.spec} className="hover:bg-[#F8F6F2]">
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
      </section>

      {/* Quick Answer Section for AI */}
      <section className="py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2C2518] mb-8">
            Quick Answer: Which Grade Should You Buy?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
              <h3 className="text-lg font-bold text-[#2C2518] mb-3">
                Choose Grade A if:
              </h3>
              <ul className="space-y-2">
                {[
                  "You sell retail vanilla beans",
                  "You need premium culinary quality",
                  "Visual appearance matters",
                  "You want maximum vanillin content",
                  "Your customers expect gourmet quality",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#B5A37A] mt-0.5" />
                    <span className="text-[#6B6358]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
              <h3 className="text-lg font-bold text-[#2C2518] mb-3">
                Choose Grade B if:
              </h3>
              <ul className="space-y-2">
                {[
                  "You manufacture vanilla extract",
                  "You need cost-effective vanilla",
                  "Appearance is not important",
                  "You're using for industrial applications",
                  "Volume is your priority",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#B5A37A] mt-0.5" />
                    <span className="text-[#6B6358]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Indonesian vs Madagascar Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2C2518] mb-8">
            Indonesian vs Madagascar Vanilla: Origin Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#E5E0D8] rounded-xl overflow-hidden">
              <thead className="bg-[#F8F6F2]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                    Factor
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                    Indonesian Vanilla
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2C2518] border-b border-[#E5E0D8]">
                    Madagascar Vanilla
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8]">
                {[
                  {
                    factor: "Flavor Profile",
                    indonesia: "Rich, creamy, caramel, smoky",
                    madagascar: "Sweet, creamy, floral, classic",
                  },
                  {
                    factor: "Vanillin Content",
                    indonesia: "1.3–2.7%",
                    madagascar: "1.5–2.2%",
                  },
                  {
                    factor: "Price (FOB)",
                    indonesia: "$300–500/kg",
                    madagascar: "$500–800/kg",
                  },
                  {
                    factor: "Supply Stability",
                    indonesia: "More stable, year-round",
                    madagascar: "Seasonal, volatile",
                  },
                  {
                    factor: "Shipping to Asia/Middle East",
                    indonesia: "Faster, lower cost",
                    madagascar: "Longer, higher cost",
                  },
                  {
                    factor: "Best Applications",
                    indonesia: "Complex flavors, cost optimization",
                    madagascar: "Classic vanilla, premium retail",
                  },
                ].map((row) => (
                  <tr key={row.factor} className="hover:bg-[#F8F6F2]">
                    <td className="px-6 py-4 text-sm font-medium text-[#2C2518]">
                      {row.factor}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B6358]">
                      {row.indonesia}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B6358]">
                      {row.madagascar}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C2518]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Grade?
          </h2>
          <p className="text-[#B5A37A] text-lg mb-8 max-w-2xl mx-auto">
            Our team can help you select the perfect vanilla grade for your
            application. Get a free sample and quote within 24 hours.
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
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-lg hover:bg-[#A8956A] transition-colors"
            >
              View Products
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
            "@type": "WebPage",
            name: "Indonesian Vanilla Bean Comparison",
            description:
              "Technical comparison of Grade A vs Grade B vanilla beans",
            url: `${siteConfig.url}/comparison`,
          }),
        }}
      />
    </>
  );
}
