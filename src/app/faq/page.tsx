import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, ChevronDown } from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Answers to common questions about ordering vanilla beans, paste, and powder. MOQ, shipping, certifications, payment terms, and more.",
  keywords: [
    "vanilla supplier FAQ",
    "vanilla beans ordering",
    "wholesale vanilla MOQ",
    "vanilla shipping",
    "vanilla certifications",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - La Vanilla Supplier",
    description: "Answers to common questions about ordering vanilla beans, paste, and powder.",
    url: "https://lavanillasupplier.com/faq",
    type: "website",
  },
};

const faqs = [
  {
    category: "Ordering & MOQ",
    questions: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "Our MOQ is 25 kg for all products. We believe in building long-term partnerships with serious buyers.",
      },
      {
        q: "Can I order samples before placing a bulk order?",
        a: "Yes! We offer free samples for serious buyers. Simply fill out our contact form or message us on WhatsApp with your requirements. Samples are shipped via DHL or FedEx within 3-5 days.",
      },
      {
        q: "How do I place an order?",
        a: "You can place an order by contacting us via WhatsApp, email, or our contact form. Share your product requirements, quantity, and shipping destination. We'll provide a quote within 24 hours.",
      },
      {
        q: "Do you offer white-label or private-label services?",
        a: "Yes, we offer complete white-label services including custom packaging, labeling, and formulation. Contact us to discuss your branding requirements.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        q: "What is the difference between Grade A and Grade B vanilla beans?",
        a: "Grade A beans are 15-20 cm long with 25-35% moisture content and 1.3-2.7% vanillin — ideal for gourmet culinary use. Grade B beans are 10-15 cm with less than 25% moisture — perfect for extract production. Both grades undergo the same 6-9 month curing process.",
      },
      {
        q: "What vanilla species do you supply?",
        a: "We supply V. planifolia (Bourbon vanilla), the primary variety known for its rich, creamy flavor profile with optimal vanillin content (1.3-2.7%).",
      },
      {
        q: "Can you customize vanilla paste composition?",
        a: "Absolutely! We specialize in custom formulations. You can specify vanillin concentration (1.0-3.0%), sugar content (0-65%), viscosity, and other parameters. We'll create a sample for your approval before production.",
      },
      {
        q: "How do you ensure consistent quality across orders?",
        a: "Every batch undergoes gas chromatography testing for vanillin content, moisture analysis, and sensory evaluation. We maintain detailed batch records and can provide Certificate of Analysis with every shipment.",
      },
      {
        q: "What is the vanillin content of your vanilla beans?",
        a: "Our Grade A vanilla beans have vanillin content ranging from 1.3% to 2.7%. Grade B beans range from 1.3% to 2.2%. We can provide lab test results for every batch.",
      },
    ],
  },
  {
    category: "Shipping & Documentation",
    questions: [
      {
        q: "What shipping methods do you offer?",
        a: "We ship via DHL, FedEx, or air cargo for smaller orders. For larger shipments, we offer sea freight options. FOB Semarang, Jakarta, or Surabaya, CIF, and DDP incoterms are available.",
      },
      {
        q: "How long does shipping take?",
        a: "Air freight typically takes 3-7 days worldwide. Sea freight takes 2-4 weeks depending on destination. Express courier (DHL/FedEx) can deliver in 3-5 days.",
      },
      {
        q: "What documents are included with shipments?",
        a: "Every shipment includes: Certificate of Analysis (CoA), Phytosanitary Certificate, Certificate of Origin (COO), Quality Statement Letter, Halal Certificate, Packing List, and Commercial Invoice.",
      },
      {
        q: "Do you ship to my country?",
        a: "We export to 20+ countries including UAE, Australia, USA, UK, France, Germany, Japan, Singapore, and many more. Contact us to confirm availability for your specific location.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        q: "What are your payment terms?",
        a: "We accept T/T (bank transfer), L/C (Letter of Credit), and PayPal for smaller orders. Standard terms are 30-50% deposit with balance before shipping. New customers may be required full upfront payment.",
      },
      {
        q: "How do you handle pricing for large orders?",
        a: "We offer competitive volume pricing. The more you order, the better the per-kg rate. Contact us with your estimated annual volume for a custom pricing proposal.",
      },
      {
        q: "Do prices include shipping?",
        a: "Our quoted prices are typically FOB Semarang, Jakarta, or Surabaya. Shipping costs depend on your location, order volume, and preferred shipping method. We'll provide a detailed quote including all costs.",
      },
      {
        q: "Is there a price match guarantee?",
        a: "We guarantee that our quality-to-price ratio is competitive. If you find a certified supplier with equivalent quality and documentation at a lower price, we'll match it.",
      },
    ],
  },
  {
    category: "Certifications & Compliance",
    questions: [
      {
        q: "What certifications do you have?",
        a: "Our facilities follow Food Safety Standards. All products are Halal certified. We provide phytosanitary certificates for all exports. Additional documentation available upon request.",
      },
      {
        q: "Are your products Sustainably Sourced?",
        a: "Some of our products are available in Sustainably Sourced certified variants. Contact us to discuss certification requirements for your specific market.",
      },
      {
        q: "Are your products US Import Ready?",
        a: "Yes, our products meet US import requirements. We can provide additional documentation as needed for US import compliance.",
      },
    ],
  },
  {
    category: "Bulk & Wholesale Orders",
    questions: [
      {
        q: "How much do wholesale vanilla beans cost?",
        a: "Pricing depends on grade, volume, and contract terms. Contact us with your requirements for a competitive quote within 24 hours.",
      },
      {
        q: "Can you supply 100kg or more per month?",
        a: "Yes, we can supply consistent monthly volumes well beyond 100kg. We maintain inventory to ensure year-round availability. Contact us to discuss your volume requirements.",
      },
      {
        q: "Do you offer long-term supply contracts?",
        a: "Yes, we offer quarterly and annual supply contracts with fixed pricing and priority allocation. Long-term partners receive preferential pricing and guaranteed supply.",
      },
    ],
  },
];

export default function FAQPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              Find answers to common questions about our products, ordering,
              shipping, and certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-[#E5E0D8] py-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {faqs.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="px-4 py-2 text-sm font-medium text-[#6B6358] bg-[#F8F6F2] rounded-full border border-[#E5E0D8] hover:bg-[#2C2518] hover:text-white hover:border-[#2C2518] transition-all"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category) => (
            <div
              key={category.category}
              id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="mb-16 last:mb-0 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B5A37A] font-bold text-sm">
                    {category.category.charAt(0)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#2C2518]">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:border-[#B5A37A]/50 transition-colors"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#2C2518] hover:text-[#B5A37A] transition-colors list-none">
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-[#6B6358] group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 text-[#6B6358] leading-relaxed border-t border-[#E5E0D8] pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2C2518] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[#6B6358] mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our team is
            ready to help. Chat with us on WhatsApp for instant response.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-xl hover:bg-[#A8956A] transition-colors"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              }))
            ),
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
              { name: "FAQ", url: "/faq" },
            ])
          ),
        }}
      />
    </>
  );
}
