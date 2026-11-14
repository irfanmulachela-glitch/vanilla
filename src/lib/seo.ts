import { siteConfig } from "./config";

export function twitterCard(title: string, description: string, image = "/og-image.png") {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [image],
  };
}

export const ogImages = [
  {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: siteConfig.name,
  },
];

/**
 * Per-page Open Graph image. Pass the public/ path plus the image's real
 * dimensions so social crawlers get a correct share card. Every page should
 * use its own image instead of the generic brand fallback above.
 */
export function ogImageFor(src: string, alt: string, width: number, height: number) {
  return [
    {
      url: `${siteConfig.url}${src}`,
      width,
      height,
      alt,
    },
  ];
}
