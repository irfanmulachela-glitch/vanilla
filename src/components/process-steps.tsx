"use client";

import { useState } from "react";

type Step = { title: string; description: string; eyebrow?: string };

/**
 * Numbered step line. The gold "current" circle follows the step the visitor
 * hovers (or taps), and the line up to it fills gold. Leaving the list resets it to step 1.
 * Used on the Wholesale page ("From inquiry to delivery") and in OrderingLadder.
 */
export function ProcessSteps({
  steps,
  tone = "light",
  columns = 4,
}: {
  steps: Step[];
  /** "light" for white/cream sections, "dark" for charcoal sections. */
  tone?: "light" | "dark";
  columns?: 3 | 4;
}) {
  const [active, setActive] = useState(0);
  const dark = tone === "dark";

  const grid =
    columns === 3
      ? "md:grid-cols-3 md:gap-8 lg:gap-12"
      : "md:grid-cols-4 md:gap-6 lg:gap-10";
  const lineOverlap = columns === 3 ? "-me-8 lg:-me-12" : "-me-6 lg:-me-10";
  const lineIdle = dark ? "bg-[#B5A37A]/30" : "bg-[#D8D3C9]";

  return (
    <ol
      className={`grid gap-10 ${grid} max-w-xl md:max-w-none mx-auto`}
      onMouseLeave={() => setActive(0)}
    >
      {steps.map((step, i) => {
        const isActive = i === active;
        const last = i === steps.length - 1;
        const lineDone = i < active;
        return (
          <li
            key={step.title}
            className="relative flex gap-5 md:block cursor-default"
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            {/* Marker + line to the next step (down on phones, across on wider screens) */}
            <div className="flex flex-col md:flex-row items-center md:mb-7">
              <span
                className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full text-lg font-semibold tabular-nums shrink-0 border transition-all duration-300 ${
                  isActive
                    ? `bg-[#B5A37A] border-[#B5A37A] text-[#2C2518] scale-110 ${
                        dark
                          ? "shadow-[0_0_0_6px_rgba(181,163,122,0.15)]"
                          : "shadow-[0_6px_18px_-6px_rgba(181,163,122,0.7)]"
                      }`
                    : dark
                      ? "bg-[#2C2518] border-[#B5A37A]/70 text-[#D4C48A]"
                      : "bg-white border-[#B5A37A] text-[#9A8457]"
                }`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              {!last && (
                <span
                  className={`md:hidden w-px flex-1 mt-3 -mb-7 transition-colors duration-300 ${
                    lineDone ? "bg-[#B5A37A]" : lineIdle
                  }`}
                  aria-hidden="true"
                />
              )}
              {!last && (
                <span
                  className={`hidden md:block flex-1 h-px ms-4 ${lineOverlap} transition-colors duration-300 ${
                    lineDone ? "bg-[#B5A37A]" : lineIdle
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>

            <div className={step.eyebrow ? "pt-1 md:pt-0" : "pt-2 md:pt-0"}>
              {step.eyebrow && (
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mb-2">
                  {step.eyebrow}
                </p>
              )}
              <h3
                className={`font-semibold transition-colors duration-300 ${
                  step.eyebrow ? "text-xl mb-3" : "text-lg mb-2"
                } ${
                  dark
                    ? isActive ? "text-white" : "text-[#F8F6F2]/85"
                    : isActive ? "text-[#2C2518]" : "text-[#2C2518]/80"
                }`}
              >
                {step.title}
              </h3>
              <p className={`leading-relaxed ${dark ? "text-stone-300" : "text-[#6B6358]"}`}>
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
