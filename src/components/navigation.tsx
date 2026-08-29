"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Wholesale", href: "/wholesale" },
  { name: "Our Standard", href: "/la-vanilla-standard" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          !scrolled
            ? "bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#E5E0D8]/40"
            : "bg-[#2C2518]/95 backdrop-blur-xl border-b border-[#3D3425]/50 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="La Vanilla Supplier"
                  fill
                  className={`object-contain transition-all duration-500 ${
                    !scrolled ? "" : "brightness-0 invert"
                  }`}
                />
              </div>
              <div className="hidden sm:block w-20 lg:w-24 relative h-5 lg:h-6">
                <Image
                  src="/logo-text.png"
                  alt="La Vanilla Supplier"
                  fill
                  className={`object-contain object-left transition-all duration-500 ${
                    !scrolled ? "" : "brightness-0 invert"
                  }`}
                />
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 group ${
                    !scrolled
                      ? "text-[#2C2518]/70 hover:text-[#2C2518]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6 ${
                      !scrolled ? "bg-[#B5A37A]" : "bg-[#B5A37A]"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  !scrolled
                    ? "bg-[#2C2518] text-white hover:bg-[#3D3425] hover:shadow-lg hover:shadow-[#2C2518]/20"
                    : "bg-white text-[#2C2518] hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                }`}
              >
                Get Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.social.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#B5A37A] text-white text-sm font-medium rounded-full hover:bg-[#A8956A] transition-all duration-300 hover:shadow-lg hover:shadow-[#B5A37A]/30 hover:scale-[1.02]"
              >
                WhatsApp
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                  !scrolled
                    ? "text-[#2C2518] hover:bg-[#2C2518]/5"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`border-t ${
              !scrolled ? "border-[#E5E0D8]/60" : "border-white/10"
            }`}
          >
            <div
              className={`px-4 py-6 space-y-1 ${
                !scrolled ? "bg-[#F8F6F2]" : "bg-[#2C2518]"
              }`}
            >
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    !scrolled
                      ? "text-[#2C2518]/80 hover:text-[#2C2518] hover:bg-[#B5A37A]/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3.5 font-medium rounded-xl transition-all duration-300 ${
                    !scrolled
                      ? "bg-[#2C2518] text-white hover:bg-[#3D3425]"
                      : "bg-white text-[#2C2518] hover:bg-white/90"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-[#B5A37A] text-white font-medium rounded-xl hover:bg-[#A8956A] transition-all duration-300"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
