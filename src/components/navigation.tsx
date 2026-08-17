"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Quality", href: "/quality" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#D8C393] text-stone-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.social.whatsapp}</span>
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.social.email}</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-stone-600">
              <span>HACCP Certified</span>
              <span>|</span>
              <span>Export to {siteConfig.stats.countriesServed} Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <Image
                  src="/logo.png"
                  alt="La Vanilla Supplier"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block w-24 lg:w-32 relative h-8 lg:h-10">
                <Image
                  src="/logo-text.png"
                  alt="La Vanilla Supplier"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#8B7D50] hover:bg-[#F5F0E6] rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-[#A08C5A] text-white text-sm font-medium rounded-lg hover:bg-[#8B7D50] transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
              >
                WhatsApp
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-100">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#8B7D50] hover:bg-[#F5F0E6] rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-[#A08C5A] text-white font-medium rounded-lg hover:bg-[#8B7D50]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-stone-900 text-white font-medium rounded-lg hover:bg-stone-800"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
