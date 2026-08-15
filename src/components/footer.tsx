import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Vanilla Beans", href: "/products/vanilla-beans" },
    { name: "Vanilla Paste", href: "/products/vanilla-paste" },
    { name: "Vanilla Powder", href: "/products/vanilla-powder" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Quality & Certifications", href: "/quality" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
  regions: [
    { name: "UAE", href: "/regions/uae" },
    { name: "Australia", href: "/regions/australia" },
    { name: "USA", href: "/regions/usa" },
    { name: "Europe", href: "/regions/europe" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Stay Updated on Vanilla Market Trends
              </h3>
              <p className="text-gray-400 mt-1">
                Get insights on pricing, quality, and export opportunities.
              </p>
            </div>
            <form className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
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
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PP</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">
                  Penta Pelita
                </p>
                <p className="text-gray-400 text-xs">Semesta</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Premium Indonesian vanilla supplier for wholesale, B2B, and direct
              export. HACCP certified with {siteConfig.stats.yearsExperience} years of experience.
            </p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.social.whatsapp}
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
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
                    className="text-sm hover:text-emerald-400 transition-colors"
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
                    className="text-sm hover:text-emerald-400 transition-colors"
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
                    className="text-sm hover:text-emerald-400 transition-colors"
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
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
