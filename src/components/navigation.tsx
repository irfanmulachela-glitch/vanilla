"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { LanguageSwitcher } from "./language-switcher";
import { useLocaleContext } from "./locale-provider";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { locale, t } = useLocaleContext();

  const prefix = locale === "en" ? "" : `/${locale}`;

  const megaDescriptions: Record<string, string> = {
    "vanilla-beans": "Grade A gourmet & Grade B extraction, sun-cured 6-9 months",
    "vanilla-paste": "Custom vanillin, sugar & viscosity for your formulation",
    "vanilla-powder": "40-80 mesh, 100% pure, no fillers or additives",
  };

  const navigation: { name: string; href: string; mega?: boolean }[] = [
    { name: t.nav.home, href: `${prefix}/` },
    { name: t.nav.products, href: `${prefix}/products`, mega: true },
    { name: t.nav.wholesale, href: `${prefix}/wholesale` },
    { name: t.nav.ourStandard, href: `${prefix}/la-vanilla-standard` },
    { name: t.nav.blog, href: `${prefix}/blog` },
    { name: t.nav.faq, href: `${prefix}/faq` },
    { name: t.nav.contact, href: `${prefix}/contact` },
  ];

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
            ? "bg-[#F8F6F2] border-b border-[#E5E0D8]/40"
            : "bg-[#2C2518] border-b border-[#3D3425]/30 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 lg:h-16">
            {/* Logo */}
            <Link href={`${prefix}/`} className="flex items-center gap-3 group mr-auto">
              <div className="w-12 h-12 lg:w-14 lg:h-14 relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="La Vanilla Supplier"
                  fill
                  className={`object-contain transition-all duration-500 ${
                    !scrolled ? "" : "brightness-0 invert"
                  }`}
                />
              </div>
              <div className="hidden sm:block w-24 lg:w-28 relative h-6 lg:h-7">
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

            {/* Desktop navigation + CTA grouped right */}
            <div className="hidden lg:flex items-center gap-6">
              <nav className="flex items-center gap-1">
                {navigation.map((item) =>
                  item.mega ? (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={() => setMegaOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`relative block px-3 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 group ${
                          !scrolled
                            ? "text-[#2C2518]/60 hover:text-[#2C2518]"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] rounded-full bg-[#B5A37A] transition-all duration-300 group-hover:w-5" />
                      </Link>

                      {/* Mega menu panel */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full z-50 transition-all duration-300 ${
                          megaOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="pt-3">
                          <div className="w-[620px] bg-white border border-[#E5E0D8] rounded-2xl shadow-2xl shadow-[#2C2518]/15 overflow-hidden">
                            <div className="grid grid-cols-[210px_1fr]">
                              <div className="relative m-4 rounded-xl overflow-hidden bg-[#F8F6F2]">
                                <Image
                                  src="/vanilla-beans.jpg"
                                  alt="Indonesian vanilla beans"
                                  fill
                                  sizes="210px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-4 pr-5">
                                <Link
                                  href={`${prefix}/products`}
                                  className="flex items-center justify-between px-4 py-2.5 mb-1 border-b border-[#E5E0D8] text-[11px] font-semibold tracking-widest uppercase text-[#2C2518] hover:text-[#B5A37A] transition-colors"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  All Products
                                  <ArrowRight className="w-3.5 h-3.5 text-[#B5A37A]" />
                                </Link>
                                {siteConfig.products.map((product) => (
                                  <Link
                                    key={product.slug}
                                    href={`${prefix}/products/${product.slug}`}
                                    className="group flex items-start justify-between gap-3 px-4 py-3 rounded-xl hover:bg-[#F8F6F2] transition-colors"
                                    onClick={() => setMegaOpen(false)}
                                  >
                                    <div>
                                      <p className="text-sm font-semibold text-[#2C2518] group-hover:text-[#B5A37A] transition-colors">
                                        {product.name}
                                      </p>
                                      <p className="text-[13px] text-[#6B6358] leading-snug mt-0.5">
                                        {megaDescriptions[product.slug]}
                                      </p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-[#B5A37A] opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-3 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 group ${
                        !scrolled
                          ? "text-[#2C2518]/60 hover:text-[#2C2518]"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] rounded-full transition-all duration-300 group-hover:w-5 ${
                          !scrolled ? "bg-[#B5A37A]" : "bg-[#B5A37A]"
                        }`}
                      />
                    </Link>
                  )
                )}
              </nav>

              {/* Language Switcher */}
              <LanguageSwitcher currentLocale={locale} />

              {/* CTA buttons */}
              <div className="flex items-center gap-2.5">
                <Link
                  href={`${prefix}/contact`}
                  className={`inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    !scrolled
                      ? "bg-[#2C2518] text-white hover:bg-[#3D3425] hover:shadow-lg hover:shadow-[#2C2518]/20"
                      : "bg-white text-[#2C2518] hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                  }`}
                >
                  {t.common.getQuote}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#B5A37A] text-white text-sm font-medium rounded-full hover:bg-[#A8956A] transition-all duration-300 hover:shadow-lg hover:shadow-[#B5A37A]/30"
                >
                  WhatsApp
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ml-4 ${
                !scrolled
                  ? "text-[#2C2518] hover:bg-[#2C2518]/5"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
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
              !scrolled ? "border-[#2C2518]/10" : "border-white/10"
            }`}
          >
            <div
              className={`px-4 py-5 space-y-0.5 ${
                !scrolled ? "bg-white" : "bg-[#2C2518]"
              }`}
            >
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    !scrolled
                      ? "text-[#2C2518]/70 hover:text-[#2C2518] hover:bg-[#B5A37A]/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-2 pb-1">
                <p className={`text-xs font-medium mb-2 ${!scrolled ? "text-[#2C2518]/50" : "text-white/50"}`}>
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {(["en", "fr", "de", "es", "tr", "ar"] as const).map((loc) => (
                    <Link
                      key={loc}
                      href={`/${loc === "en" ? "" : loc}`}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                        locale === loc
                          ? "bg-[#B5A37A] text-white"
                          : !scrolled
                          ? "bg-[#2C2518]/5 text-[#2C2518]/70 hover:bg-[#B5A37A]/10"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {localeFlags[loc]} {localeNames[loc]}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-3 space-y-2">
                <Link
                  href={`${prefix}/contact`}
                  className={`flex items-center justify-center gap-1.5 w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    !scrolled
                      ? "bg-[#2C2518] text-white hover:bg-[#3D3425]"
                      : "bg-white text-[#2C2518] hover:bg-white/90"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.common.getQuote}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full px-3 py-2.5 text-sm bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A] transition-all duration-300"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-14 lg:h-16" />
    </>
  );
}

import { localeFlags, localeNames } from "@/i18n";
