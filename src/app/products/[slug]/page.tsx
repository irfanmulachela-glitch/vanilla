import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { isTranslatedPath, languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImageFor } from "@/lib/seo";
import ProductDetail from "@/components/product-detail";

const SEO: Record<string, { title: string; description: string }> = {
  "vanilla-beans": {
    title: "Indonesian Vanilla Beans: Grade A & B",
    description:
      "Grade A & Grade B vanilla beans from Java, sun-cured for months and vacuum-sealed. Free samples, orders from 1 kg, air freight from Indonesia.",
  },
  "vanilla-paste": {
    title: "Vanilla Paste - 28% Bean Solids",
    description:
      "Custom-composition vanilla paste tailored to your exact specifications. 28% bean solids, 24-month shelf life, and flexible bulk formats shipped from Indonesia.",
  },
  "vanilla-powder": {
    title: "Pure Vanilla Powder - 40-80 Mesh",
    description:
      "100% pure vanilla powder, finely ground from premium cured beans. 40-80 mesh and under 5% moisture, ideal for bakery mixes. Shipped direct from Indonesia.",
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteConfig.products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = siteConfig.products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const seo = SEO[slug];
  const title = seo?.title ?? product.name;
  const description = seo?.description ?? product.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${slug}`,
      ...(isTranslatedPath(`products/${slug}`) ? { languages: languageAlternates(`products/${slug}`) } : {}),
    },
    openGraph: {
      // All three product images are 1600x1200.
      images: ogImageFor(product.image, `Indonesian ${product.name.toLowerCase()} from La Vanilla Supplier`, 1600, 1200),
      title,
      description,
      url: `${siteConfig.url}/products/${slug}`,
      type: "website",
    },
    twitter: twitterCard(`${title} | La Vanilla Supplier`, description, product.image),
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = siteConfig.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail slug={slug} />

      {/*
        TODO (SEO): add Product JSON-LD with an offers block once real prices
        are published. The previous Product markup was removed 2026-11-14
        because, without offers/review/aggregateRating, Google flagged it
        invalid. Do not re-add Product schema without prices.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: product.name, url: `/products/${product.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
