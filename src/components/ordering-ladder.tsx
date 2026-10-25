import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProcessSteps } from "./process-steps";

const tiers = [
  {
    title: "Free Sample",
    quantity: "Small sample",
    description:
      "Check the colour, aroma and texture yourself before committing. You only cover shipping.",
  },
  {
    title: "Small Order",
    quantity: "From 1 kg",
    description:
      "Enough for your QC team to lab-test and run through your process. Priced at wholesale rates.",
  },
  {
    title: "Standard Order",
    quantity: "Flexible quantities",
    description:
      "Regular wholesale volumes with full export documents. A Certificate of Analysis is available for every batch on request.",
  },
];

type Props = {
  /** "dark" sits between white sections (product pages); "light" is for pages that end next to the dark footer. */
  tone?: "dark" | "light";
  /** Show the "Request a free sample" button under the steps. Off on the Contact page, where the form is right above. */
  showCta?: boolean;
};

export default function OrderingLadder({
  tone = "dark",
  showCta = true,
}: Props) {
  const dark = tone === "dark";

  return (
    <section
      className={`py-20 lg:py-24 ${dark ? "bg-[#2C2518]" : "bg-[#F8F6F2]"}`}
      aria-labelledby="ordering-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Getting Started
          </p>
          <h2
            id="ordering-heading"
            className={`text-3xl lg:text-4xl font-bold mb-4 ${dark ? "text-[#F8F6F2]" : "text-[#2C2518]"}`}
          >
            How to start ordering
          </h2>
          <p
            className={`leading-relaxed ${dark ? "text-stone-300" : "text-[#6B6358]"}`}
          >
            Three easy steps, each with zero risk. Start with a free sample to
            assess quality, or order from just 1 kg before moving to standard
            volumes.
          </p>
        </div>

        <ProcessSteps
          tone={dark ? "dark" : "light"}
          columns={3}
          steps={tiers.map((t) => ({ eyebrow: t.quantity, title: t.title, description: t.description }))}
        />

        {showCta && (
          <div
            className={`mt-14 lg:mt-16 pt-10 border-t text-center ${dark ? "border-white/10" : "border-[#E5E0D8]"}`}
          >
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-colors ${
                dark
                  ? "bg-[#B5A37A] text-[#2C2518] hover:bg-[#D4C48A]"
                  : "bg-[#2C2518] text-white hover:bg-[#3D3425]"
              }`}
            >
              Request a free sample
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
