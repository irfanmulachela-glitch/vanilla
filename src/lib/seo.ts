import { siteConfig } from "./config";

export function twitterCard(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: ["/og-image.png"],
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
