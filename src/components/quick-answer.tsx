import { Zap } from "lucide-react";

export function QuickAnswer({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <section className="bg-white border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="max-w-4xl flex items-start gap-4 lg:gap-5 border border-[#E5E0D8] border-t-2 border-t-[#B5A37A] bg-[#F8F6F2] rounded-xl p-6 lg:p-7 shadow-[0_1px_2px_rgba(44,37,24,0.04)]">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-[#B5A37A]/12 flex items-center justify-center">
            <Zap className="w-5 h-5 text-[#B5A37A]" aria-hidden />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5A37A] mb-1.5">
              Quick answer
            </p>
            <p className="font-semibold text-[#2C2518] text-base lg:text-lg leading-snug mb-2">
              {question}
            </p>
            <p className="text-[#6B6358] text-[15px] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
