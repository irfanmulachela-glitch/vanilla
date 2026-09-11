import Link from "next/link";
import { FlaskConical, Package, Gift, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: Gift,
    title: "Free Sample",
    quantity: "Small sample",
    description:
      "Assess bean length, colour, oiliness, and aroma by hand before committing.",
    highlight: false,
  },
  {
    icon: FlaskConical,
    title: "Trial Order",
    quantity: "5 kg",
    description:
      "Large enough for your QC team to lab-test and run through your process. Priced at wholesale rates.",
    highlight: false,
  },
  {
    icon: Package,
    title: "Standard Order",
    quantity: "25 kg minimum",
    description:
      "The normal wholesale minimum with full documentation package: CoA, Phytosanitary Certificate, and Certificate of Origin.",
    highlight: true,
  },
];

export default function OrderingLadder() {
  return (
    <section className="bg-[#F8F6F2] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold text-[#2C2518] mb-3 uppercase tracking-wider text-sm">
            How to Start Ordering
          </h2>
          <p className="text-sm text-[#6B6358] max-w-2xl mx-auto">
            Three ways to begin, each with zero risk. Start with a free sample to
            assess quality, or go straight to a 5 kg trial before committing to
            a standard order.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={tier.title}
              className={`p-6 rounded-xl border ${
                tier.highlight
                  ? "border-[#B5A37A] bg-white"
                  : "border-[#D8D3C9] bg-white hover:border-[#B5A37A]/50"
              } transition-colors`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2C2518] rounded-lg flex items-center justify-center">
                  <tier.icon className="w-5 h-5 text-[#B5A37A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2C2518]">{tier.title}</p>
                  <p className="text-xs font-medium text-[#B5A37A]">
                    {tier.quantity}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#6B6358] leading-relaxed">
                {tier.description}
              </p>
              {i < tiers.length - 1 && (
                <div className="mt-6 pt-4 border-t border-[#E5E0D8]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#2C2518] text-white font-semibold rounded-xl hover:bg-[#3D3425] transition-colors text-sm"
          >
            Request a Sample
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
