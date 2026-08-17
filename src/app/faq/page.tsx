import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Answers to common questions about ordering vanilla beans, paste, and powder. MOQ, shipping, certifications, payment terms, and more.",
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
        a: "Grade A beans are 16-20 cm long with 25-35% moisture content and 1.8-2.7% vanillin — ideal for gourmet culinary use. Grade B beans are 10-16 cm with less than 25% moisture — perfect for extract production. Both grades undergo the same 6-9 month curing process.",
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
    ],
  },
  {
    category: "Shipping & Documentation",
    questions: [
      {
        q: "What shipping methods do you offer?",
        a: "We ship via DHL, FedEx, or air cargo for smaller orders. For larger shipments, we offer sea freight options. FOB Jakarta, CIF, and DDP incoterms are available.",
      },
      {
        q: "How long does shipping take?",
        a: "Air freight typically takes 3-7 days worldwide. Sea freight takes 2-4 weeks depending on destination. Express courier (DHL/FedEx) can deliver in 3-5 days.",
      },
      {
        q: "What documents are included with shipments?",
        a: "Every shipment includes: Certificate of Analysis (CoA), Phytosanitary Certificate, Certificate of Origin (COO), HACCP Statement Letter, Halal Certificate, Packing List, and Commercial Invoice.",
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
        a: "Our quoted prices are typically FOB Jakarta. Shipping costs depend on your location, order volume, and preferred shipping method. We'll provide a detailed quote including all costs.",
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
        a: "Our facilities are HACCP certified. All products are Halal certified. We provide phytosanitary certificates for all exports. Additional certifications (organic, FDA registration) are available upon request.",
      },
      {
        q: "Are your products organic?",
        a: "Some of our products are available in organic certified variants. Contact us to discuss organic certification requirements for your specific market.",
      },
      {
        q: "Do you comply with FDA regulations?",
        a: "Yes, our products meet FDA requirements for import into the United States. We can provide additional documentation as needed for FDA compliance.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#D8C393] to-[#C4B07A] text-stone-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-stone-700">
              Find answers to common questions about our products, ordering,
              shipping, and certifications.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-gray-50 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-[#8B7D50] transition-colors">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our team is
            ready to help. Chat with us on WhatsApp for instant response.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#A08C5A] text-white font-semibold rounded-lg hover:bg-[#8B7D50] transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors"
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
    </>
  );
}
