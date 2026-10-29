"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll animations for every page, without touching page code:
 * 1. Sections: content fades up as it scrolls into view (staggered).
 * 2. Numbers: elements marked `data-count` count up from zero.
 * 3. Photos: cover images ease from a slight zoom back to normal.
 * 4. Lines: gold accent lines draw in; divider lines sweep in as a gold line
 *    from left to right, then soften to their normal colour.
 * 5. Hero photo: elements marked `data-parallax` drift slower than the page
 *    (large screens only).
 *
 * Anything already on screen when a page loads keeps its final state (except
 * numbers, which are hidden by CSS until this runs). Nothing animates for
 * visitors who ask their device for reduced motion.
 */
const MAX_STAGGER = 6;
const STEP_MS = 90;
const DIVIDER_COLORS = new Set([
  "rgb(229, 224, 216)", // #E5E0D8
  "rgb(238, 233, 225)", // #EEE9E1
  "rgb(216, 211, 201)", // #D8D3C9
  "rgb(181, 163, 122)", // #B5A37A
  "rgb(78, 70, 58)", // #4E463A (dark sections)
]);
const GOLD = "#B5A37A";

function targetsFor(section: HTMLElement): HTMLElement[] {
  const direct = Array.from(section.children).filter(
    (el): el is HTMLElement =>
      el instanceof HTMLElement && getComputedStyle(el).position !== "absolute" && getComputedStyle(el).position !== "fixed",
  );
  // Typical section: <section><div class="max-w-7xl ...">blocks</div></section>
  if (direct.length === 1 && direct[0].children.length > 1) {
    const inner = Array.from(direct[0].children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement && getComputedStyle(el).position !== "absolute",
    );
    if (inner.length > 0 && inner.length <= 12) return inner;
  }
  return direct;
}

/** Run once when the element enters the viewport. */
function onEnter(
  els: Element[],
  cb: (el: HTMLElement) => void,
  margin = "0px 0px -10% 0px",
): IntersectionObserver {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        cb(e.target as HTMLElement);
      }
    },
    { threshold: 0, rootMargin: margin },
  );
  els.forEach((el) => io.observe(el));
  return io;
}

/** Remove the animation classes once the transition is over. */
function finish(el: HTMLElement, classes: string[], prop: string, ms: number) {
  const done = () => {
    el.classList.remove(...classes);
    el.style.removeProperty("--sr-delay");
    el.removeEventListener("transitionend", onEnd);
  };
  const onEnd = (e: TransitionEvent) => {
    if (e.target === el && e.propertyName === prop) done();
  };
  el.addEventListener("transitionend", onEnd);
  window.setTimeout(done, ms);
}

/* ---------- numbers ---------- */
const NUM = /\d+(?:\.\d+)?/g;

function countUp(el: HTMLElement) {
  const final = el.dataset.countFinal ?? el.textContent ?? "";
  const nums = final.match(NUM);
  if (!nums) {
    el.textContent = final;
    return;
  }
  const dur = 1400;
  const start = performance.now();
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);
  const frame = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const k = ease(t);
    el.textContent = final.replace(NUM, (m) => {
      const dec = m.includes(".") ? m.split(".")[1].length : 0;
      return (parseFloat(m) * k).toFixed(dec);
    });
    if (t < 1) requestAnimationFrame(frame);
    else el.textContent = final;
  };
  requestAnimationFrame(frame);
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      root.classList.add("sr-ready");
      return;
    }

    const observers: IntersectionObserver[] = [];
    const cleanups: (() => void)[] = [];
    const raf = requestAnimationFrame(() => {
      const main = document.querySelector("main");
      if (!main) return;
      const viewH = window.innerHeight;
      const belowFold = (el: Element) => el.getBoundingClientRect().top > viewH * 0.9;

      /* 1. Sections */
      const sections = Array.from(main.querySelectorAll<HTMLElement>("section")).filter(
        (s) => !s.parentElement?.closest("section") && !s.dataset.srDone,
      );
      const blocks: HTMLElement[] = [];
      for (const section of sections) {
        section.dataset.srDone = "1";
        if (!belowFold(section)) continue;
        targetsFor(section).forEach((el, i) => {
          el.style.setProperty("--sr-delay", `${Math.min(i, MAX_STAGGER - 1) * STEP_MS}ms`);
          el.classList.add("sr-hidden");
          blocks.push(el);
        });
      }
      observers.push(
        onEnter(blocks, (el) => {
          el.classList.add("sr-in");
          el.classList.remove("sr-hidden");
          finish(el, ["sr-in"], "transform", 1700);
        }),
      );

      /* 2. Numbers (count up even near the top: they are hidden until now) */
      const counters = Array.from(main.querySelectorAll<HTMLElement>("[data-count]")).filter(
        (el) => !el.dataset.countFinal,
      );
      for (const el of counters) {
        el.dataset.countFinal = el.textContent ?? "";
        if ((el.textContent ?? "").match(NUM)) el.textContent = el.textContent!.replace(NUM, (m) => (m.includes(".") ? "0.0" : "0"));
        el.dataset.counting = "1";
      }
      observers.push(onEnter(counters, (el) => window.setTimeout(() => countUp(el), 150), "0px 0px -5% 0px"));

      /* 3. Photos */
      const photos = Array.from(main.querySelectorAll<HTMLImageElement>("img")).filter((img) => {
        if (!belowFold(img) || img.dataset.srImg) return false;
        const box = img.parentElement;
        if (!box || img.getBoundingClientRect().width < 160) return false;
        const cs = getComputedStyle(box);
        return cs.overflow === "hidden" || cs.overflowX === "hidden" || getComputedStyle(box.parentElement ?? box).overflow === "hidden";
      });
      photos.forEach((img) => {
        img.dataset.srImg = "1";
        img.classList.add("sr-img-hidden");
      });
      observers.push(
        onEnter(photos, (img) => {
          img.classList.add("sr-img-in");
          img.classList.remove("sr-img-hidden");
          finish(img, ["sr-img-in"], "transform", 1800);
        }),
      );

      /* 4. Lines: gold accent bars and top divider lines */
      const lines: HTMLElement[] = [];
      main.querySelectorAll<HTMLElement>("span, div, li, dl, ol, ul, hr, p").forEach((el) => {
        if (el.dataset.srLine || !belowFold(el)) return;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        // Gold accent bar, e.g. <span class="w-10 h-px bg-[#B5A37A]">
        if (r.height <= 2 && r.width >= 16 && r.width <= 120 && cs.backgroundColor === "rgb(181, 163, 122)") {
          el.dataset.srLine = "bar";
          el.classList.add("sr-bar-hidden");
          lines.push(el);
          return;
        }
        // Thin top divider on list rows (not boxed cards, not sections)
        if (
          r.width >= 160 &&
          cs.borderTopStyle === "solid" &&
          parseFloat(cs.borderTopWidth) === 1 &&
          parseFloat(cs.borderLeftWidth) === 0 &&
          parseFloat(cs.borderRightWidth) === 0 &&
          cs.backgroundImage === "none" &&
          DIVIDER_COLORS.has(cs.borderTopColor)
        ) {
          el.dataset.srLine = "rule";
          el.style.setProperty("--sr-rule", cs.borderTopColor);
          el.classList.add("sr-rule-hidden");
          lines.push(el);
        }
      });
      observers.push(
        onEnter(lines, (el) => {
          if (el.dataset.srLine === "bar") {
            el.classList.add("sr-bar-in");
            requestAnimationFrame(() => el.classList.remove("sr-bar-hidden"));
            const done = () => el.classList.remove("sr-bar-in");
            el.addEventListener("transitionend", (e) => e.propertyName === "transform" && done(), { once: true });
            window.setTimeout(done, 1700);
            return;
          }
          // Divider: a gold line sweeps across, then the border fades back to its own colour.
          el.classList.add("sr-rule-in");
          requestAnimationFrame(() => el.classList.remove("sr-rule-hidden"));
          let settled = false;
          const settle = () => {
            if (settled) return;
            settled = true;
            el.style.setProperty("border-top-color", GOLD, "important");
            el.classList.remove("sr-rule-in");
            el.style.removeProperty("--sr-rule");
            void el.offsetWidth;
            el.style.setProperty("transition", "border-top-color 1.1s ease 0.25s");
            el.style.removeProperty("border-top-color");
            window.setTimeout(() => el.style.removeProperty("transition"), 1500);
          };
          el.addEventListener("transitionend", (e) => e.propertyName === "background-size" && settle(), { once: true });
          window.setTimeout(settle, 1600);
        }),
      );

      /* 5. Hero photo drift (large screens only) */
      const drifters = Array.from(main.querySelectorAll<HTMLElement>("[data-parallax]"));
      if (drifters.length && window.matchMedia("(min-width: 1024px)").matches) {
        let ticking = false;
        const update = () => {
          ticking = false;
          const y = window.scrollY;
          for (const el of drifters) {
            if (y > window.innerHeight * 1.5) continue;
            const f = parseFloat(el.dataset.parallax ?? "0.15");
            el.style.transform = `translate3d(0, ${(y * f).toFixed(1)}px, 0)`;
          }
        };
        const onScroll = () => {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
          }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          drifters.forEach((el) => el.style.removeProperty("transform"));
        });
        update();
      }

      root.classList.add("sr-ready");
    });

    return () => {
      cancelAnimationFrame(raf);
      observers.forEach((o) => o.disconnect());
      cleanups.forEach((fn) => fn());
      // Never leave content hidden when navigating away.
      document
        .querySelectorAll<HTMLElement>(".sr-hidden, .sr-img-hidden, .sr-bar-hidden, .sr-rule-hidden")
        .forEach((el) => el.classList.remove("sr-hidden", "sr-img-hidden", "sr-bar-hidden", "sr-rule-hidden"));
      document.querySelectorAll<HTMLElement>("[data-count-final]").forEach((el) => {
        el.textContent = el.dataset.countFinal ?? el.textContent;
      });
    };
  }, [pathname]);

  return null;
}
