"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

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
      <div className="bg-emerald-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.social.whatsapp}</span>
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.social.email}</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-emerald-200">
              <span>HACCP Certified</span>
              <span>|</span>
              <span>Export to {siteConfig.stats.countriesServed} Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">PP</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-gray-900 text-sm lg:text-base leading-tight">
                  Penta Pelita
                </p>
                <p className="text-gray-500 text-xs lg:text-sm">Semesta</p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
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
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
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
