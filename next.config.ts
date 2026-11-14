import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/suppliers/dubai",
        destination: "/regions/uae",
        permanent: true,
      },
      {
        source: "/suppliers/sydney",
        destination: "/regions/australia",
        permanent: true,
      },
      {
        source: "/quality",
        destination: "/la-vanilla-standard",
        permanent: true,
      },
      {
        source: "/:locale(fr|de|es|tr|ar)/quality",
        destination: "/:locale/la-vanilla-standard",
        permanent: true,
      },
      {
        source: "/suppliers/new-york",
        destination: "/regions/usa",
        permanent: true,
      },
      {
        // Merged 2026-11-14 into the longer storage guide (duplicate content).
        source: "/blog/vanilla-bean-storage-shelf-life",
        destination: "/blog/vanilla-bean-storage-best-practices",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
