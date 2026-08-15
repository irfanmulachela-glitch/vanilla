# Penta Pelita Semesta - Vanilla B2B Website

Premium Indonesian vanilla supplier website built with Next.js, Supabase, and deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Language:** TypeScript

## Features

- SEO optimized with JSON-LD schema markup
- Mobile-first responsive design
- Product showcase with specifications
- Regional landing pages (UAE, Australia, USA, Europe)
- Contact form with Supabase integration
- Blog system
- FAQ with schema markup
- AI crawler friendly (GPTBot, PerplexityBot, ClaudeBot)

## Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd pentapelita-vanilla
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase Setup

1. Create a new Supabase project
2. Go to SQL Editor
3. Run the schema from `supabase/schema.sql`
4. Copy the project URL and anon key to `.env.local`

### 4. Development

```bash
npm run dev
```

Visit http://localhost:3000

### 5. Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation/footer
│   ├── page.tsx            # Homepage
│   ├── products/
│   │   ├── page.tsx        # Products listing
│   │   └── [slug]/page.tsx # Product detail
│   ├── about/page.tsx      # About page
│   ├── quality/page.tsx    # Quality & certifications
│   ├── contact/page.tsx    # Contact form
│   ├── faq/page.tsx        # FAQ with schema
│   ├── blog/page.tsx       # Blog listing
│   ├── regions/[slug]/page.tsx  # Regional landing pages
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── navigation.tsx      # Header navigation
│   └── footer.tsx          # Footer
├── lib/
│   ├── config.ts           # Site configuration
│   ├── utils.ts            # Utility functions
│   └── supabase/
│       ├── client.ts       # Browser client
│       └── server.ts       # Server client
└── types/
    └── index.ts            # TypeScript types
```

## SEO Features

- Dynamic metadata for all pages
- JSON-LD schema (Organization, Product, FAQPage)
- Auto-generated sitemap.xml
- robots.txt allowing AI crawlers
- Open Graph and Twitter cards
- Semantic HTML structure

## Customization

### Products

Edit `src/lib/config.ts` to update products, specifications, and company info.

### Images

Replace Unsplash placeholder images with your own in the `public/images/` directory.

### Colors

The primary color scheme uses emerald green. To change, update Tailwind classes throughout components.

## License

Private - PT Penta Pelita Semesta
