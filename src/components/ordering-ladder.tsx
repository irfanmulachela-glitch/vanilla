const tiers = [
  {
    title: "Free Sample",
    quantity: "Small sample",
    description:
      "Assess bean length, colour, oiliness, and aroma by hand before committing.",
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
      "The normal wholesale minimum with full documentation package: CoA, Phytosanitary Certificate, and Certificate of Origin.",
  },
];

export default function OrderingLadder() {
  return (
    <section className="bg-[#2C2518] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-0.5 bg-[#B5A37A] mx-auto mb-4" />
          <h2 className="text-xl font-semibold uppercase tracking-wider text-[#F8F6F2] mb-3">
            How to Start Ordering
          </h2>
          <p className="text-sm text-stone-300 max-w-2xl mx-auto">
            Three ways to begin, each with zero risk. Start with a free sample to
            assess quality, or order from just 1 kg before committing to
            standard volume.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={tier.title}
              className="p-6 rounded-xl border border-[#B5A37A] bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl leading-none font-medium text-[#B5A37A] font-[family-name:var(--font-cormorant)]">
                  {i + 1}
                </span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
