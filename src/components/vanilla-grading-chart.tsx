"use client";

import { useId, useState } from "react";

type Grade = "a" | "b";

const grades = {
  a: {
    name: "Grade A (Gourmet)",
    label: "GRADE A",
    range: "Gourmet · 15 – 20 cm",
    description:
      "Plump, supple gourmet beans with the highest vanillin content. Perfect for retail display, pastry, and culinary applications where presentation matters.",
    specs: {
      length: "15-20 cm",
      moisture: "25-35%",
      vanillin: "1.1-2.5%",
      appearance: "Black-brown, oily, supple, may show vanillin frost",
    },
  },
  b: {
    name: "Grade B (Extraction)",
    label: "GRADE B",
    range: "Extraction · 10 – 15 cm",
    description:
      "Cost-effective beans for extract manufacturing and industrial applications. Lower moisture enables efficient extraction.",
    specs: {
      length: "10-15 cm",
      moisture: "Below 25%",
      vanillin: "1.0-2.0%",
      appearance: "Drier, reddish-brown, thinner, may have split ends",
    },
  },
} as const;

const SCALE = 12; // pixels per cm
const MAX_CM = 20;
const TOP = 28; // y position of the 0 cm mark (px)
const HOOK = 10; // room above the pod for the stem hook (px)
const BEAN_W = 36; // svg width (px)

const beans: { cm: number; grade: Grade }[] = [
  { cm: 20, grade: "a" },
  { cm: 18, grade: "a" },
  { cm: 16, grade: "a" },
  { cm: 14, grade: "b" },
  { cm: 12, grade: "b" },
  { cm: 10, grade: "b" },
];

/* ---------- realistic bean geometry (deterministic, SSR-safe) ---------- */

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Pt = [number, number];

// Catmull-Rom -> cubic Bézier for smooth organic outlines
function smoothPath(pts: Pt[], closed = false) {
  const p = closed ? [pts[pts.length - 1], ...pts, pts[0], pts[1]] : [pts[0], ...pts, pts[pts.length - 1]];
  let d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  for (let i = 1; i < p.length - 2; i++) {
    const [x0, y0] = p[i - 1];
    const [x1, y1] = p[i];
    const [x2, y2] = p[i + 1];
    const [x3, y3] = p[i + 2];
    const c1x = x1 + (x2 - x0) / 6;
    const c1y = y1 + (y2 - y0) / 6;
    const c2x = x2 - (x3 - x1) / 6;
    const c2y = y2 - (y3 - y1) / 6;
    d += ` C${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }
  return closed ? d + " Z" : d;
}

function beanGeometry(lengthPx: number, seed: number, grade: Grade) {
  const r = rng(seed);
  const cx = BEAN_W / 2;
  const maxHalf = grade === "a" ? 7.4 : 5.9;
  const amp = grade === "a" ? 2.2 + r() * 1.4 : 2.8 + r() * 1.8;
  const phase = r() * Math.PI;
  const bulgePhase = r() * Math.PI * 2;
  const N = 56;

  // gentle S-curve along the pod
  const center = (t: number) =>
    cx + amp * Math.sin(Math.PI * 1.25 * t + phase) - amp * Math.sin(phase) + amp * 0.35 * Math.sin(Math.PI * 3 * t);
  const half = (t: number) => {
    const tt = Math.min(Math.max(t, 0), 1);
    // near-uniform body; stem end narrows quickly, blossom end tapers to a soft point
    const top = Math.pow(Math.min(1, tt / 0.1), 0.55);
    const bottom = Math.pow(Math.min(1, (1 - tt) / 0.14), 0.6);
    const swell = 1 + 0.07 * Math.sin(Math.PI * 4 * tt + bulgePhase) - 0.1 * tt;
    return Math.max(0.6, maxHalf * top * bottom * swell);
  };
  const y = (t: number) => HOOK + t * lengthPx;

  const left: Pt[] = [];
  const right: Pt[] = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const wobble = (r() - 0.5) * (grade === "a" ? 0.35 : 0.6);
    left.push([center(t) - half(t) + wobble, y(t)]);
    right.push([center(t) + half(t) + wobble * 0.6, y(t)]);
  }
  const outline = smoothPath([...left, ...right.reverse()], true);

  // longitudinal wrinkles / ridges
  const wrinkleCount = grade === "a" ? 6 : 9;
  const wrinkles: { d: string; o: number; w: number }[] = [];
  for (let k = 0; k < wrinkleCount; k++) {
    const f = -0.72 + (1.44 * (k + 0.5)) / wrinkleCount + (r() - 0.5) * 0.14;
    const t0 = 0.03 + r() * 0.2;
    const t1 = 0.7 + r() * 0.27;
    const pts: Pt[] = [];
    for (let i = 0; i <= 16; i++) {
      const t = t0 + ((t1 - t0) * i) / 16;
      const jitter = (r() - 0.5) * (grade === "a" ? 0.7 : 1.2);
      pts.push([center(t) + f * half(t) + jitter, y(t)]);
    }
    wrinkles.push({ d: smoothPath(pts), o: (grade === "a" ? 0.32 : 0.42) + r() * 0.25, w: 0.5 + r() * 0.5 });
  }

  // the pod's lengthwise seam (a shallow groove slightly off-centre)
  const seamPts: Pt[] = [];
  for (let i = 0; i <= 20; i++) {
    const t = 0.04 + (0.9 * i) / 20;
    seamPts.push([center(t) + 0.18 * half(t) + (r() - 0.5) * 0.4, y(t)]);
  }
  const seam = smoothPath(seamPts);

  // short cross creases (more on the drier Grade B)
  const creases: string[] = [];
  const creaseCount = grade === "a" ? 3 : 7;
  for (let i = 0; i < creaseCount; i++) {
    const t = 0.12 + r() * 0.76;
    const w = half(t);
    const x0 = center(t) - w * (0.2 + r() * 0.5);
    const x1 = center(t) + w * (0.1 + r() * 0.5);
    const yy = y(t);
    creases.push(`M${x0.toFixed(2)} ${(yy - 0.8).toFixed(2)} Q${((x0 + x1) / 2).toFixed(2)} ${(yy + 1.4).toFixed(2)} ${x1.toFixed(2)} ${(yy + 0.6).toFixed(2)}`);
  }

  // oily sheen along one side
  const hl: Pt[] = [];
  for (let i = 0; i <= 18; i++) {
    const t = 0.08 + (0.8 * i) / 18;
    hl.push([center(t) - 0.42 * half(t), y(t)]);
  }

  // stem hook at the top
  const sx = center(0);
  const dir = r() > 0.5 ? 1 : -1;
  const stem = `M${sx.toFixed(2)} ${(HOOK + 2).toFixed(2)} C${(sx + dir * 0.4).toFixed(2)} ${(HOOK - 3).toFixed(2)} ${(sx + dir * 3.2).toFixed(2)} ${(HOOK - 7).toFixed(2)} ${(sx + dir * 5.4).toFixed(2)} ${(HOOK - 5.5).toFixed(2)}`;

  // a few vanillin frost crystals on gourmet beans
  const frost: { x: number; y: number; r: number }[] = [];
  if (grade === "a") {
    for (let i = 0; i < 14; i++) {
      const t = 0.12 + r() * 0.72;
      frost.push({ x: center(t) + (r() - 0.5) * 1.3 * half(t), y: y(t), r: 0.3 + r() * 0.35 });
    }
  }

  return { outline, wrinkles, seam, creases, highlight: smoothPath(hl), stem, frost };
}

const palette = {
  a: { edge: "#120a05", base: "#2a190f", mid: "#4b2f1d", lift: "#6a4630", stem: "#1a0f08" },
  b: { edge: "#2b170b", base: "#5b3520", mid: "#7c4d2f", lift: "#9a6643", stem: "#3a2112" },
};

function VanillaBean({ cm, grade, seed, uid }: { cm: number; grade: Grade; seed: number; uid: string }) {
  const lengthPx = cm * SCALE;
  const h = lengthPx + HOOK + 4;
  const g = beanGeometry(lengthPx, seed, grade);
  const c = palette[grade];
  const id = `${uid}-${seed}`;

  return (
    <svg
      width={BEAN_W}
      height={h}
      viewBox={`0 0 ${BEAN_W} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${cm} cm ${grade === "a" ? "Grade A gourmet" : "Grade B extraction"} vanilla bean`}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={c.edge} />
          <stop offset="22%" stopColor={c.mid} />
          <stop offset="34%" stopColor={c.lift} />
          <stop offset="55%" stopColor={c.base} />
          <stop offset="100%" stopColor={c.edge} />
        </linearGradient>
        <linearGradient id={`${id}-len`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
          <stop offset="12%" stopColor="#000" stopOpacity="0" />
          <stop offset="88%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <path d={g.outline} />
        </clipPath>
        <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9 0.035" numOctaves="2" seed={seed % 97} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <filter id={`${id}-blur`} x="-50%" y="-5%" width="200%" height="110%">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
        <filter id={`${id}-shadow`} x="-60%" y="-5%" width="220%" height="112%">
          <feDropShadow dx="1.4" dy="2" stdDeviation="1.4" floodColor="#2C2518" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter={`url(#${id}-shadow)`}>
        {/* stem hook */}
        <path d={g.stem} stroke={c.stem} strokeWidth="1.5" strokeLinecap="round" />
        {/* pod body */}
        <path d={g.outline} fill={`url(#${id}-body)`} />
      </g>

      <g clipPath={`url(#${id}-clip)`}>
        {/* fibrous grain */}
        <rect
          x="0"
          y="0"
          width={BEAN_W}
          height={h}
          filter={`url(#${id}-grain)`}
          opacity={grade === "a" ? 0.22 : 0.32}
          style={{ mixBlendMode: "multiply" }}
        />
        {/* darker ends */}
        <rect x="0" y={HOOK} width={BEAN_W} height={lengthPx} fill={`url(#${id}-len)`} />
        {/* wrinkles */}
        {g.wrinkles.map((w, i) => (
          <path key={i} d={w.d} stroke="#0b0603" strokeOpacity={w.o} strokeWidth={w.w} strokeLinecap="round" />
        ))}
        {/* seam groove */}
        <path d={g.seam} stroke="#050302" strokeOpacity="0.55" strokeWidth="0.9" strokeLinecap="round" />
        {/* cross creases */}
        {g.creases.map((d, i) => (
          <path key={`c${i}`} d={d} stroke="#0b0603" strokeOpacity="0.35" strokeWidth="0.5" strokeLinecap="round" />
        ))}
        {/* oily sheen */}
        <path
          d={g.highlight}
          stroke="#fff6e8"
          strokeOpacity={grade === "a" ? 0.38 : 0.16}
          strokeWidth="2"
          strokeLinecap="round"
          filter={`url(#${id}-blur)`}
        />
        {/* vanillin frost */}
        {g.frost.map((f, i) => (
          <circle key={i} cx={f.x} cy={f.y} r={f.r} fill="#fffaf0" opacity="0.55" />
        ))}
      </g>
    </svg>
  );
}

/* ------------------------------- chart -------------------------------- */

export default function VanillaGradingChart() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>("a");
  const grade = grades[selectedGrade];
  const uid = useId().replace(/:/g, "");
  const chartHeight = TOP + MAX_CM * SCALE + 56;

  return (
    <div className="bg-[#F8F6F2] rounded-2xl px-4 py-8 sm:p-8 lg:p-12 border border-[#E5E0D8]">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-[#B5A37A] uppercase tracking-[0.2em] mb-3">
          Grading · Drawn to Scale
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold text-[#2C2518]">
          Our two grades, side by side
        </h3>
      </div>

      {/* Visual Chart */}
      <div className="relative mb-8 overflow-x-auto">
        <div className="flex min-w-[340px]">
          {/* Scale ruler */}
          <div className="relative w-9 sm:w-12 lg:w-16 flex-shrink-0" style={{ height: `${chartHeight}px` }}>
            <div
              className="absolute left-0 border-l-2 border-[#B5A37A]/30"
              style={{ top: `${TOP}px`, height: `${MAX_CM * SCALE}px` }}
            />
            {[0, 5, 10, 15, 20].map((cm) => (
              <div
                key={cm}
                className="absolute left-0 flex items-center -translate-y-1/2"
                style={{ top: `${TOP + cm * SCALE}px` }}
              >
                <div className="w-3 lg:w-4 h-px bg-[#B5A37A]" />
                <span className="ml-1.5 lg:ml-2 text-[10px] lg:text-xs text-[#B5A37A] font-medium">{cm}</span>
              </div>
            ))}
            <div
              className="absolute left-0 text-[10px] lg:text-xs text-[#B5A37A] font-medium"
              style={{ top: `${TOP + MAX_CM * SCALE + 14}px` }}
            >
              CM
            </div>
          </div>

          {/* Beans */}
          <div className="flex-1 relative" style={{ height: `${chartHeight}px` }}>
            <div className="absolute inset-0 flex items-start justify-center gap-1.5 sm:gap-6 lg:gap-10">
              {beans.map((bean, index) => {
                const isActive = selectedGrade === bean.grade;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setSelectedGrade(bean.grade)}
                    aria-label={`Show ${grades[bean.grade].name}`}
                    className={`flex flex-col items-center transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-35 hover:opacity-60"
                    }`}
                    style={{ marginTop: `${TOP - HOOK}px` }}
                  >
                    <VanillaBean cm={bean.cm} grade={bean.grade} seed={index * 7919 + 13} uid={uid} />
                    <div className="mt-2 text-center">
                      <div className="w-8 lg:w-12 border-t border-dashed border-[#B5A37A]/50 mx-auto mb-1" />
                      <p className="text-[10px] lg:text-xs font-medium text-[#2C2518]">{bean.cm} cm</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Grade Selector */}
      <div className="flex justify-center gap-8 lg:gap-16 mb-8">
        {(Object.keys(grades) as Grade[]).map((key) => (
          <button
            type="button"
            key={key}
            onClick={() => setSelectedGrade(key)}
            className={`text-center transition-all ${
              selectedGrade === key ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            <div
              className={`w-full h-0.5 rounded-full mb-3 ${
                selectedGrade === key ? "bg-[#B5A37A]" : "bg-[#E5E0D8]"
              }`}
            />
            <p className="text-xs lg:text-sm font-bold text-[#2C2518] tracking-wider">{grades[key].label}</p>
            <p className="text-[10px] lg:text-xs text-[#6B6358] mt-1">{grades[key].range}</p>
          </button>
        ))}
      </div>

      {/* Grade Details */}
      <div className="bg-white rounded-xl p-6 lg:p-8 border border-[#E5E0D8]">
        <h4 className="text-lg font-bold text-[#2C2518] mb-2">{grade.name} Vanilla Beans</h4>
        <p className="text-[#6B6358] mb-6">{grade.description}</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(grade.specs).map(([key, value]) => (
            <div key={key} className="bg-[#F8F6F2] rounded-lg p-4">
              <p className="text-xs font-semibold text-[#B5A37A] uppercase tracking-wider mb-1">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="text-sm font-medium text-[#2C2518]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
