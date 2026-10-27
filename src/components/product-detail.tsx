"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  IceCreamCone,
  IceCreamBowl,
  Croissant,
  Coffee,
  Candy,
  Milk,
  Wheat,
  CupSoda,
  FlaskConical,
  Factory,
  Cake,
  CakeSlice,
  Cookie,
  Gift,
  ChefHat,
  Martini,
  Wine,
  Beer,
  Droplets,
  Sparkles,
  Flower2,
  Flame,
  Dumbbell,
  Soup,
  Dessert,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import VanillaGradingChart from "@/components/vanilla-grading-chart";
import OrderingLadder from "@/components/ordering-ladder";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const USE_ICONS = {
  iceCream: IceCreamCone,
  frozen: IceCreamBowl,
  pastry: Croissant,
  coffee: Coffee,
  confectionery: Candy,
  dairy: Milk,
  dryMixes: Wheat,
  beverages: CupSoda,
  extract: FlaskConical,
  industrial: Factory,
  frosting: Cake,
  cheesecake: CakeSlice,
  cookies: Cookie,
  retail: Gift,
  chef: ChefHat,
  cocktails: Martini,
  spirits: Wine,
  brewing: Beer,
  syrups: Droplets,
  sugar: Sparkles,
  cosmetics: Flower2,
  candles: Flame,
  nutrition: Dumbbell,
  spices: Soup,
  custard: Dessert,
} as const;

type UseKey = keyof typeof USE_ICONS;

type Variant = {
  key: string;
  tabLabel?: string;
  title: string;
  tagline: string;
  summary: string;
  overview: string;
  facts: [string, string][];
  specs: [string, string][];
  uses: { icon: UseKey; label: string }[];
  reasons: { title: string; body: string }[];
  slides?: Slide[];
};

type Slide = { src: string; alt: string };

type ProductContent = {
  name: string;
  slides: Slide[];
  variants: Variant[];
  sampleLine: string;
};

const DOCS = "Phytosanitary certificate, commercial invoice, packing list and air waybill with every shipment. A Certificate of Analysis for your batch is available on request.";

const CONTENT: Record<string, ProductContent> = {
  "vanilla-beans": {
    name: "Vanilla Beans",
    sampleLine: "Request a free sample of Grade A or Grade B beans. You only cover shipping.",
    slides: [],
    variants: [
      {
        key: "a",
        tabLabel: "Grade A · Gourmet",
        title: "Indonesian Vanilla Beans, Grade A Gourmet",
        tagline: "Plump, oily and fragrant. The beans you choose when vanilla is the star.",
        summary: "Grade A V. planifolia from Java for retail, pastry, ice cream and fine dining, sun-cured for 6–9 months.",
        overview:
          "These are big, oily, flexible beans, often with vanillin crystals visible on the pod. They are hand-picked at peak maturity by smallholder farmers across Java, then sun-cured slowly for 6–9 months until the aroma turns deep and sweet. Split one open and you can smell it straight away: rich, warm and unmistakably real.",
        facts: [
          ["Vanillin", "1.1–2.5%"],
          ["Length", "15–20 cm"],
          ["Moisture", "25–35%"],
          ["Curing", "Sun-cured 6–9 months"],
          ["Minimum order", "From 1 kg"],
        ],
        specs: [
          ["Species", "Vanilla planifolia (Bourbon)"],
          ["Grade", "A (Gourmet)"],
          ["Bean length", "15–20 cm"],
          ["Moisture", "25–35%"],
          ["Vanillin", "1.1–2.5%"],
          ["Curing", "6–9 months, sun-dried"],
          ["Appearance", "Black-brown, oily, supple, full pod"],
          ["Best for", "Retail, pastry, ice cream, culinary"],
          ["Packaging", "Vacuum-sealed, 1 kg per bundle"],
          ["Minimum order", "From 1 kg"],
          ["HS code", "0905.10"],
          ["Incoterms", "FCA (Surakarta) / CPT / DDP"],
        ],
        uses: [
          { icon: "iceCream", label: "Ice cream & gelato" },
          { icon: "pastry", label: "Pastry & fine baking" },
          { icon: "custard", label: "Custards & crème brûlée" },
          { icon: "confectionery", label: "Chocolate & confectionery" },
          { icon: "coffee", label: "Coffee & specialty drinks" },
          { icon: "cocktails", label: "Cocktails & liqueurs" },
          { icon: "chef", label: "Fine dining & sauces" },
          { icon: "retail", label: "Retail & gift packs" },
        ],
        reasons: [
          { title: "Gourmet look and aroma", body: "Plump, oily pods that look the part on a shelf or a pastry counter, with a deep, sweet aroma." },
          { title: "Our richest flavour", body: "1.1–2.5% vanillin, the top of our range, for products where vanilla has to stand out." },
          { title: "Paperwork done right", body: DOCS },
        ],
        slides: [
          { src: "/vanilla-beans-a-m1.webp", alt: "Bundle of long Grade A gourmet Indonesian vanilla beans tied with twine" },
          { src: "/vanilla-beans-a-m2.webp", alt: "Plump, oily Grade A V. planifolia vanilla beans from Java" },
          { src: "/vanilla-beans-a-m3.webp", alt: "Close-up of a Grade A vanilla bean bundle tied with twine" },
          { src: "/vanilla-beans-a-m4.webp", alt: "Grade A vanilla pods standing upright, showing their oily sheen" },
        ],
      },
      {
        key: "b",
        tabLabel: "Grade B · Extraction",
        title: "Indonesian Vanilla Beans, Grade B Extraction",
        tagline: "Real vanilla character at a better price per kilo, made for extraction.",
        summary: "Grade B V. planifolia from Java for extracts, syrups and large-batch flavouring, with the same 6–9 month cure.",
        overview:
          "Grade B beans are drier and slimmer, often with split ends, but they carry the same real vanilla character at a lower price per kilo. They cure for the same 6–9 months, then go to work where vanilla is an ingredient rather than the star: extracts, syrups and large-batch flavouring.",
        facts: [
          ["Vanillin", "1.0–2.0%"],
          ["Length", "10–15 cm"],
          ["Moisture", "Below 25%"],
          ["Curing", "Sun-cured 6–9 months"],
          ["Minimum order", "From 1 kg"],
        ],
        specs: [
          ["Species", "Vanilla planifolia (Bourbon)"],
          ["Grade", "B (Extraction)"],
          ["Bean length", "10–15 cm"],
          ["Moisture", "Below 25%"],
          ["Vanillin", "1.0–2.0%"],
          ["Curing", "6–9 months, sun-dried"],
          ["Appearance", "Drier, reddish-brown, thinner, may have split ends"],
          ["Best for", "Extract manufacturing, industrial flavouring"],
          ["Packaging", "Vacuum-sealed, 1 kg per bundle"],
          ["Minimum order", "From 1 kg"],
          ["HS code", "0905.10"],
          ["Incoterms", "FCA (Surakarta) / CPT / DDP"],
        ],
        uses: [
          { icon: "extract", label: "Vanilla extract" },
          { icon: "syrups", label: "Syrups & flavourings" },
          { icon: "industrial", label: "Food manufacturing" },
          { icon: "spirits", label: "Spirits & liqueurs" },
          { icon: "brewing", label: "Craft beer & brewing" },
          { icon: "sugar", label: "Vanilla sugar & salt" },
          { icon: "cosmetics", label: "Perfume & cosmetics" },
          { icon: "candles", label: "Candles & home fragrance" },
        ],
        reasons: [
          { title: "Made for extraction", body: "Lower moisture means more vanillin per kilo goes into your extract, not water weight." },
          { title: "Lower cost per kilo", body: "The same 6–9 month cure as Grade A at a lower price, for products where vanilla is an ingredient." },
          { title: "Paperwork done right", body: DOCS },
        ],
        slides: [
          { src: "/vanilla-beans-b-q1.webp", alt: "Bundle of shorter Grade B extraction vanilla beans, drier with reddish-brown streaks" },
          { src: "/vanilla-beans-b-q2.webp", alt: "Close-up of drier Grade B Indonesian vanilla beans tied with twine" },
        ],
      },
    ],
  },
  "vanilla-paste": {
    name: "Vanilla Paste",
    sampleLine: "Request a free paste sample made to your spec. You only cover shipping.",
    slides: [{ src: "/vanilla-paste.jpg", alt: "Jar of Indonesian vanilla bean paste with visible vanilla seeds" }],
    variants: [
      {
        key: "paste",
        title: "Indonesian Vanilla Bean Paste",
        tagline: "Thick, glossy and full of real bean specks. Made to your recipe.",
        summary: "Vanilla bean paste from Java with single, double or triple fold strength, adjustable sugar and viscosity.",
        overview:
          "Our vanilla paste is thick, glossy and flecked with real bean seeds, the kind that makes a kitchen smell like fresh vanilla the moment you open the tub. It is made from cured Indonesian V. planifolia beans, and we tune every batch to your line: strength, sugar content and viscosity. You approve a sample before production starts.",
        facts: [
          ["Strength", "Single, double or triple fold"],
          ["Made from", "Cured V. planifolia (1.1–2.5% vanillin)"],
          ["Sugar", "Custom, 0–65%"],
          ["Shelf life", "24 months"],
          ["Minimum order", "From 1 kg"],
        ],
        specs: [],
        uses: [
          { icon: "iceCream", label: "Ice cream & gelato" },
          { icon: "custard", label: "Crème brûlée & panna cotta" },
          { icon: "frosting", label: "Frosting & buttercream" },
          { icon: "cheesecake", label: "Cheesecake & mousse" },
          { icon: "cookies", label: "Cakes & cookies" },
          { icon: "dairy", label: "Whipped cream & yogurt" },
          { icon: "coffee", label: "Lattes & coffee syrups" },
          { icon: "confectionery", label: "White chocolate & confectionery" },
        ],
        reasons: [
          { title: "Made to your recipe", body: "Choose the strength, sugar content and viscosity that fit your production line." },
          { title: "Sample before production", body: "We send a sample for approval first, so your order matches what you tested." },
          { title: "Preservative-free option", body: "Our paste uses sodium benzoate as a preservative, which we can leave out on request." },
        ],
      },
    ],
  },
  "vanilla-powder": {
    name: "Vanilla Powder",
    sampleLine: "Request a free powder sample. You only cover shipping.",
    slides: [{ src: "/vanilla-powder.jpg", alt: "Pure Indonesian vanilla powder ground from cured vanilla beans" }],
    variants: [
      {
        key: "powder",
        title: "Pure Indonesian Vanilla Powder",
        tagline: "100% vanilla, finely ground. No fillers, no additives.",
        summary: "Vanilla powder milled from cured Javanese beans for dry mixes, instant drinks and bakery, 40–80 mesh.",
        overview:
          "Our pure vanilla powder is milled from cured Indonesian beans to a fine 40–80 mesh, with nothing else added and under 5% moisture. It smells warm and sweet the moment you open the bag, and it works anywhere liquid vanilla does not: dry baking mixes, instant beverages, confectionery and dairy powders.",
        facts: [
          ["Purity", "100% vanilla"],
          ["Mesh size", "40–80 mesh, customizable"],
          ["Moisture", "Below 5%"],
          ["Vanillin", "1.1–2.5%"],
          ["Minimum order", "From 1 kg"],
        ],
        specs: [],
        uses: [
          { icon: "dryMixes", label: "Baking & pancake mixes" },
          { icon: "beverages", label: "Instant drinks & latte mixes" },
          { icon: "nutrition", label: "Protein & nutrition powders" },
          { icon: "confectionery", label: "Chocolate & confectionery" },
          { icon: "cookies", label: "Macarons & delicate pastry" },
          { icon: "frozen", label: "Ice cream & dairy powders" },
          { icon: "spices", label: "Spice blends & dry rubs" },
          { icon: "pastry", label: "Bakery manufacturing" },
        ],
        reasons: [
          { title: "Nothing but vanilla", body: "Ground from cured beans only, with no sugar, fillers or carriers added." },
          { title: "Works where liquid can't", body: "Blends evenly into dry mixes and instant products without adding moisture." },
          { title: "Ground to your spec", body: "40–80 mesh as standard, with finer or coarser grinds available on request." },
        ],
      },
    ],
  },
};

const SPEC_LABELS: Record<string, string> = {
  species: "Species",
  moistureContent: "Moisture",
  vanillinContent: "Vanillin",
  beanLength: "Bean length",
  curing: "Curing",
  moq: "Minimum order",
  hsCode: "HS code",
  incoterms: "Incoterms",
  strength: "Strength",
  beans: "Made from",
  sugarContent: "Sugar content",
  viscosity: "Viscosity",
  shelfLife: "Shelf life",
  packaging: "Packaging",
  meshSize: "Mesh size",
  moisture: "Moisture",
  purity: "Purity",
};

const TAGS: Record<string, string> = {
  beans: "For extracts, baking & retail",
  paste: "For bakeries, ice cream & desserts",
  powder: "For dry mixes, beverages & baking",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Gallery (slides when there is more than one photo)                  */
/* ------------------------------------------------------------------ */

function Gallery({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const onIndex = setIndex;
  const multi = slides.length > 1;

  const goTo = (i: number) => {
    const next = (i + slides.length) % slides.length;
    onIndex(next);
    const el = trackRef.current;
    if (el) el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== index) onIndex(i);
  };

  return (
    <div>
      <div className="relative group">
        <div
          ref={trackRef}
          onScroll={multi ? onScroll : undefined}
          className={`relative aspect-[4/3] rounded-2xl bg-[#F4F2EE] ${
            multi ? "flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "overflow-hidden"
          }`}
          aria-roledescription={multi ? "carousel" : undefined}
        >
          {slides.map((s, i) => (
            <div key={s.src} className={`relative ${multi ? "shrink-0 w-full h-full snap-center" : "w-full h-full"} rounded-2xl overflow-hidden`}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {multi && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur text-[#2C2518] shadow-md flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur text-[#2C2518] shadow-md flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/45 text-white text-xs font-medium tabular-nums">
              {index + 1} / {slides.length}
            </span>
          </>
        )}
      </div>

      {multi && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-[#F4F2EE] transition ${
                i === index ? "ring-2 ring-[#B5A37A] ring-offset-2" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={s.src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const EYEBROW = "text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4";

export default function ProductDetail({ slug }: { slug: string }) {
  const content = CONTENT[slug];
  const product = siteConfig.products.find((p) => p.slug === slug)!;
  const [variantIndex, setVariantIndex] = useState(0);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const v = content.variants[variantIndex];
  const multiVariant = content.variants.length > 1;
  const whatsapp = `https://wa.me/${siteConfig.social.whatsapp}`;

  const specs: [string, string][] =
    v.specs.length > 0
      ? v.specs
      : [
          ...Object.entries(product.specifications as Record<string, string>).map(
            ([k, val]) => [SPEC_LABELS[k] ?? k, val] as [string, string]
          ),
          ...(slug === "vanilla-paste" ? [["Preservative", "Sodium benzoate, can be left out on request"] as [string, string]] : []),
        ];

  const chooseVariant = (i: number) => setVariantIndex(i);

  return (
    <>
      {/* Top: gallery + essentials */}
      <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[#9A9187] mb-8">
            <Link href="/products" className="hover:text-[#2C2518] transition-colors">Products</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-[#2C2518]">{content.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <Gallery key={v.key} slides={v.slides ?? content.slides} />
            </div>

            <div>
              {multiVariant && (
                <div role="tablist" aria-label="Grade" className="inline-flex p-1 rounded-full border border-[#E5E0D8] mb-7">
                  {content.variants.map((variant, i) => (
                    <button
                      key={variant.key}
                      type="button"
                      role="tab"
                      aria-selected={variantIndex === i}
                      onClick={() => chooseVariant(i)}
                      className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                        variantIndex === i ? "bg-[#2C2518] text-white" : "text-[#6B6358] hover:text-[#2C2518]"
                      }`}
                    >
                      {variant.tabLabel}
                    </button>
                  ))}
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2C2518] leading-[1.15] mb-4">
                {v.title}
              </h1>
              <p className="text-xl text-[#8C7A4F] italic leading-snug mb-5 font-[family-name:var(--font-libre)]">
                {v.tagline}
              </p>
              <p className="text-[#6B6358] text-lg leading-relaxed mb-8">{v.summary}</p>

              <dl className="border-t border-[#EEE9E1] mb-8">
                {v.facts.map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-6 py-3 border-b border-[#EEE9E1]">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A] flex-shrink-0">{label}</dt>
                    <dd className="text-sm font-medium text-[#2C2518] text-right">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-7 py-4 bg-[#2C2518] text-white text-sm font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
                >
                  Request Free Sample
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="hidden sm:inline-flex items-center justify-center px-7 py-4 text-[#2C2518] text-sm font-medium rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex items-center justify-center w-[52px] h-[52px] rounded-lg border border-[#D8D3C9] text-[#25A55F] hover:border-[#B5A37A] transition-colors flex-shrink-0"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>

              <ul className="mt-8 pt-6 border-t border-[#EEE9E1] flex flex-wrap gap-x-6 gap-y-2.5">
                {["Halal Certified", "Phytosanitary Certified", "Free samples"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#6B6358]">
                    <CheckCircle2 className="w-4 h-4 text-[#B5A37A]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + uses */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#EEE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={EYEBROW}>Overview</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] leading-tight mb-6">
              {multiVariant ? `About ${v.tabLabel?.split(" · ")[0]} beans` : `About our ${content.name.toLowerCase()}`}
            </h2>
            <p className="text-lg text-[#6B6358] leading-relaxed">{v.overview}</p>
          </div>

          <div className="mt-16">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className={EYEBROW}>Applications</p>
                <h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#2C2518]">What buyers use it for</h3>
              </div>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
              {v.uses.map((use) => {
                const Icon = USE_ICONS[use.icon];
                return (
                  <li key={use.label} className="group flex flex-col items-center text-center">
                    <span className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#F8F6F2] flex items-center justify-center mb-4 ring-1 ring-[#EEE9E1] transition-colors group-hover:bg-[#F1EBDD]">
                      <span className="absolute inset-2 rounded-full border border-dashed border-[#B5A37A]/35" aria-hidden="true" />
                      <Icon className="relative w-8 h-8 lg:w-9 lg:h-9 text-[#9A8457]" strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-[#2C2518] leading-snug max-w-[11rem]">{use.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Paste: process video (click to play) */}
      {slug === "vanilla-paste" && (
        <section className="pb-20 lg:pb-24 bg-white" aria-labelledby="paste-process-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-4">
                <p className={EYEBROW}>Our Process</p>
                <h2 id="paste-process-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518] leading-tight mb-5">
                  See how the paste is made
                </h2>
                <p className="text-lg text-[#6B6358] leading-relaxed">
                  Real vanilla beans ground and blended into a smooth, spreadable paste, done the
                  same way every batch, from cured bean to export-ready tub.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#2C2518] shadow-xl group">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls={videoStarted}
                    poster="/process-poster.jpg"
                    preload="metadata"
                    playsInline
                    onPlay={() => setVideoStarted(true)}
                    onEnded={() => setVideoStarted(false)}
                  >
                    <source src="/vanilla-paste-process.mp4" type="video/mp4" />
                  </video>
                  {!videoStarted && (
                    <button
                      type="button"
                      onClick={() => {
                        videoRef.current?.play();
                        setVideoStarted(true);
                      }}
                      aria-label="Play process video"
                      className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/5 transition-colors"
                    >
                      <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#B5A37A]/50 backdrop-blur-md ring-1 ring-white/40 text-white flex items-center justify-center shadow-lg group-hover:bg-[#B5A37A] transition-all">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full specifications */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className={EYEBROW}>Specifications</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] leading-tight mb-4">Technical details</h2>
              <p className="text-[#6B6358] leading-relaxed">
                Everything your QC and import teams need before ordering. Need something different? Ask us.
              </p>
            </div>
            <dl className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 border-t border-[#E5E0D8]">
              {specs.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-6 py-4 border-b border-[#E5E0D8]">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B5A37A] flex-shrink-0">{label}</dt>
                  <dd className="text-sm font-medium text-[#2C2518] text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Beans: grading chart */}
      {slug === "vanilla-beans" && (
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VanillaGradingChart showTitle />
          </div>
        </section>
      )}

      {/* Why choose */}
      <section className={`py-20 lg:py-24 bg-white ${slug === "vanilla-beans" ? "border-t border-[#EEE9E1]" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className={EYEBROW}>Why Choose It</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518]">
              Why buyers choose our {multiVariant ? `${v.tabLabel?.split(" · ")[0]} beans` : content.name.toLowerCase()}
            </h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-10 md:gap-8">
            {v.reasons.map((r, i) => (
              <li key={r.title} className="pt-6 border-t-2 border-[#B5A37A]/60">
                <span className="block text-[1.7rem] font-medium text-[#B5A37A] leading-none mb-4 tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-[#2C2518] mb-2">{r.title}</h3>
                <p className="text-[#6B6358] leading-relaxed">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How to start ordering */}
      <OrderingLadder />

      {/* Other products */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className={EYEBROW}>More From Java</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518]">Other products</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            {siteConfig.products
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F2EE]">
                    <Image
                      src={p.image}
                      alt={`Indonesian ${p.name.toLowerCase()} from La Vanilla Supplier`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mt-6 mb-2">{TAGS[p.category]}</p>
                  <h3 className="text-xl font-semibold text-[#2C2518] mb-2">{p.name}</h3>
                  <p className="text-[#6B6358] leading-relaxed mb-4">{p.shortDescription}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#2C2518]">
                    View product
                    <ArrowRight className="ms-2 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={EYEBROW}>Free Samples</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">Try it before you order</h2>
          <p className="text-lg text-[#6B6358] mb-8">{content.sampleLine}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors"
            >
              Request Free Sample
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25A55F]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
