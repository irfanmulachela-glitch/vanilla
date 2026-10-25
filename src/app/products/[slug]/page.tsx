import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig, breadcrumbSchema } from "@/lib/config";
import { isTranslatedPath, languageAlternates } from "@/lib/hreflang";
import { twitterCard, ogImages } from "@/lib/seo";
import ProductDetail from "@/components/product-detail";

const SPEC_LABELS: Record<string, string> = {
  moq: "MOQ",
  hsCode: "HS Code",
};

const SEO: Record<string, { title: string; description: string }> = {
  "vanilla-beans": {
    title: "Indonesian Vanilla Beans: Grade A & B",
    description:
      "Grade A & Grade B vanilla beans from Java, sun-cured for 6-9 months and vacuum-sealed. Free samples, orders from 1 kg, air freight from Indonesia.",
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
    keywords: [
      product.name.toLowerCase(),
      "vanilla supplier Indonesia",
      "wholesale vanilla",
      "Indonesian vanilla",
    ],
    alternates: {
      canonical: `/products/${slug}`,
      ...(isTranslatedPath(`products/${slug}`) ? { languages: languageAlternates(`products/${slug}`) } : {}),
    },
    openGraph: {
      images: ogImages,
      title,
      description,
      url: `${siteConfig.url}/products/${slug}`,
      type: "website",
    },
    twitter: twitterCard(`${title} | La Vanilla Supplier`, description),
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: `${siteConfig.url}${product.image}`,
            brand: {
              "@type": "Brand",
              name: siteConfig.name,
            },
            manufacturer: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            category: product.category === "beans" ? "Vanilla Beans" : product.category === "paste" ? "Vanilla Paste" : "Vanilla Powder",
            additionalProperty: Object.entries(product.specifications).map(([key, value]) => ({
              "@type": "PropertyValue",
              name:
                SPEC_LABELS[key] ??
                key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()),
              value: value,
            })),
          }),
        }}
      />
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
