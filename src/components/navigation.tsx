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
      <div className="bg-[#2C2518] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#B5A37A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.social.whatsapp}</span>
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="flex items-center gap-1.5 hover:text-[#B5A37A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.social.email}</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-stone-400">
              <span>HACCP Certified</span>
              <span>|</span>
              <span>Export to {siteConfig.stats.countriesServed} Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
                <Image
                  src="/logo.png"
                  alt="La Vanilla Supplier"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block w-24 lg:w-28 relative h-6 lg:h-7">
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
                  className="px-3 py-2 text-sm font-medium text-[#6B6358] hover:text-[#B5A37A] hover:bg-[#F8F6F2] rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-[#2C2518] text-white text-sm font-medium rounded-lg hover:bg-[#3D3425] transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-[#B5A37A] text-white text-sm font-medium rounded-lg hover:bg-[#A8956A] transition-colors"
              >
                WhatsApp
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 text-[#2C2518] hover:bg-[#F8F6F2] rounded-lg"
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
          <div className="lg:hidden border-t border-[#E5E0D8]">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[#6B6358] hover:text-[#B5A37A] hover:bg-[#F8F6F2] rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-[#2C2518] text-white font-medium rounded-lg hover:bg-[#3D3425]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A]"
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
