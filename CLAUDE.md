@AGENTS.md

# La Vanilla Supplier website (lavanillasupplier.com)

B2B website for **La Vanilla Supplier**, operated by **PT Penta Pelita Semesta** (Surakarta, Central Java).
Sells Indonesian vanilla beans (Grade A / Grade B), vanilla paste and vanilla powder to importers,
food manufacturers and distributors. Owner: Muhammad Irfan (Export Director). Migrated from OpenCode to Claude on 2026-10-24.

## How changes go live (automatic)
- GitHub repo: `irfanmulachela-glitch/vanilla`, branch `main`.
- Vercel project `open-code` (team `mulachela`) is connected to that repo. **Every push to `main` deploys to production** (~20s build, live in 1-2 min).
- Workflow for any edit: change files → `npx tsc --noEmit` (and lint the touched file) → commit → `git push origin main` → confirm the Vercel deployment is Ready → check the live page.
- The owner wants edits deployed live automatically; no need to ask before pushing routine site edits. Ask first only for risky/irreversible things (deleting pages, changing URLs/redirects that affect SEO, database schema changes).
- Commit message style used throughout history: `ui: …`, `content: …`, `fix: …`, `feat: …`, `media: …`, `chore: …`, `seo: …` (lowercase prefix, short summary).

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript. Read `AGENTS.md`: this Next.js version has breaking changes, check `node_modules/next/dist/docs/` before using unfamiliar APIs.
- Tailwind CSS v4 (`@tailwindcss/postcss`), `lucide-react` icons, `clsx` + `tailwind-merge` (`src/lib/utils.ts`).
- Supabase for contact-form inquiries (`supabase/schema.sql`, `supabase/inquiries-table.sql`, `src/app/api/inquiries/route.ts`).
- Email via Nodemailer + Hostinger SMTP (`src/lib/email.ts`), sends notification + confirmation to the sender.
- Google Analytics `G-M5ZETTBC79` in `src/app/layout.tsx`.
- Env vars (set in Vercel for all environments; locally in `.env.local`, never commit): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SMTP_PASSWORD`.

## Where things live
- `src/components/home-page-content.tsx` – the whole homepage (shared by `/` and `/[locale]`).
- `src/app/[locale]/…` – translated routes (fr, de, es, tr, ar). Translations: `src/i18n/locales/{en,fr,de,es,tr,ar}.json`. When changing a translated string, update all 6 files. Arabic is RTL.
- `src/lib/config.ts` – company info, products, specs (single source of truth for product data).
- Pages: `products` (+ `[slug]` PDPs), `wholesale`, `la-vanilla-standard`, `quality`, `comparison`, `about`, `faq`, `contact`, `blog` (+ individual posts), `regions` (usa, uae, europe, australia), old `suppliers/*` (redirected in `next.config.ts`).
- SEO: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/lib/seo.ts`, `src/lib/hreflang.ts`, JSON-LD in pages, `public/llms.txt` (AI crawler facts – keep in sync with site facts).
- Media: `public/` (hero photos, product photos, `vanilla-paste-process.mp4` 1280x720 + `process-poster.jpg`, company profile PDF).
- Not part of the site: `content/` (LinkedIn articles), `directory-submissions.md`, `font-options*.html` (old font experiments), `scripts/keep-supabase-alive.sh` (manual Supabase ping).

## Brand & design rules
- Palette: charcoal `#2C2518` (dark sections, buttons), gold `#B5A37A` (accents, eyebrows, numerals), light gold `#D4C48A`, cream `#F8F6F2` (alt section bg), body text `#6B6358`, borders `#E5E0D8` / `#D8D3C9`, hover dark `#3D3425`.
- Fonts: Inter (body), Libre Baskerville (hero headlines, italic + bold mix), Outfit (numerals).
- Layout: sections use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, `py-20`. Alternate white / cream / charcoal backgrounds; avoid two same-colour sections touching. Eyebrow labels: small uppercase gold with wide tracking.
- Copy: warm, plain, buyer-focused. No em dashes in headline/hero copy. Don't show "B2B" in visible About-page copy.

## Business facts to keep consistent sitewide
- MOQ: **from 1 kg** (no trial tiers). Free samples available.
- Shipping: **air freight first**, 3-7 days. Incoterms FCA (Surakarta) / CPT / DDP. Do not claim FOB/CIF; sea freight only on request.
- Vanillin: 1.1-2.5% overall; Grade A 1.1-2.5%, Grade B 1.0-2.0%. Moisture Grade A 25-35%, Grade B < 25%. Length Grade A 15-20 cm, Grade B 10-15 cm. Curing 6-9 months. HS code 0905.10. Species V. planifolia.
- 10+ years experience, 150+ tons exported, 20+ countries, 30+ clients, founded 2014. Halal certified (MUI).
- Contact: admin@lavanillasupplier.com, WhatsApp +62 878-3575-6945.
- The company does NOT sell cocoa; never add cocoa products.

## Verify before saying "done"
- Type-check passes; page renders on desktop and mobile; video/images not cropped or upscaled.
- After push: Vercel deployment Ready, and the change is visible on https://www.lavanillasupplier.com.
