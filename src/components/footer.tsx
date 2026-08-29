import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Vanilla Beans", href: "/products/vanilla-beans" },
    { name: "Vanilla Paste", href: "/products/vanilla-paste" },
    { name: "Vanilla Powder", href: "/products/vanilla-powder" },
    { name: "Wholesale", href: "/wholesale" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Quality & Certifications", href: "/quality" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
  regions: [
    { name: "Dubai, UAE", href: "/suppliers/dubai" },
    { name: "Sydney, Australia", href: "/suppliers/sydney" },
    { name: "New York, USA", href: "/suppliers/new-york" },
    { name: "Europe", href: "/regions/europe" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2C2518] text-stone-300">
      {/* Newsletter section */}
      <div className="border-b border-[#3D3425]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Stay Updated on Vanilla Market Trends
              </h3>
              <p className="text-stone-400 mt-1">
                Get insights on pricing, quality, and export opportunities.
              </p>
            </div>
            <form className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 bg-[#3D3425] border border-[#4D4435] rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#B5A37A] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A] transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="La Vanilla Supplier"
                  width={48}
                  height={48}
                  className="object-contain brightness-0 invert opacity-90"
                />
              </div>
              <div className="w-32 h-12 relative flex-shrink-0">
                <Image
                  src="/logo-text.png"
                  alt="La Vanilla Supplier"
                  fill
                  className="object-contain brightness-0 invert opacity-90"
                />
              </div>
            </Link>
            <p className="text-sm text-stone-400 mb-4">
              Your Formula. Our Vanilla. Premium Indonesian vanilla exported to{" "}
              {siteConfig.stats.countriesServed}+ countries.
            </p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-[#B5A37A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.social.whatsapp}
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="flex items-center gap-2 text-sm hover:text-[#B5A37A] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.social.email}
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                Surakarta, Central Java, Indonesia
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#B5A37A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#B5A37A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Export Regions
            </h4>
            <ul className="space-y-2">
              {footerLinks.regions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#B5A37A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3D3425]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-stone-500 hover:text-stone-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-stone-500 hover:text-stone-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
