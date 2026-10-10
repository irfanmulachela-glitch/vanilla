export function QuickAnswer({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 lg:pt-12 lg:pb-10">
        <div className="max-w-3xl">
          <div className="w-10 h-0.5 bg-[#B5A37A] mb-5" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5A37A] mb-2">
            Quick answer
          </p>
          <h2 className="text-[#2C2518] font-semibold text-xl lg:text-2xl leading-snug mb-3">
            {question}
          </h2>
          <p className="text-[#6B6358] leading-relaxed">{answer}</p>
        </div>
      </div>
    </section>
  );
}
