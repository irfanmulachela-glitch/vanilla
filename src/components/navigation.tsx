"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { LanguageSwitcher } from "./language-switcher";
import { useLocaleContext } from "./locale-provider";
import { localeFlags, localeNames } from "@/i18n";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, t } = useLocaleContext();
  const pathname = usePathname() || "/";

  const prefix = locale === "en" ? "" : `/${locale}`;
  const whatsappHref = `https://wa.me/${siteConfig.social.whatsapp}`;

  // "Home" is left out on purpose: the logo already links home.
  const navigation = [
    { name: t.nav.products, path: "/products" },
    { name: t.nav.wholesale, path: "/wholesale" },
    { name: t.nav.ourStandard, path: "/la-vanilla-standard" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.blog, path: "/blog" },
    { name: t.nav.faq, path: "/faq" },
    { name: t.nav.contact, path: "/contact" },
  ];

  // path without the language prefix, e.g. /fr/products/vanilla-paste -> /products/vanilla-paste
  const currentPath = prefix && pathname.startsWith(prefix) ? pathname.slice(prefix.length) || "/" : pathname;
  const isActive = (path: string) => currentPath === path || currentPath.startsWith(`${path}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // stop the page scrolling behind the open phone menu (links close the menu themselves)
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[70] transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/[0.97] backdrop-blur-md border-b border-[#EEE9E1] shadow-[0_8px_24px_-16px_rgba(44,37,24,0.25)]"
            : "bg-[#FCFCFC] border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <Link href={`${prefix}/`} className="flex items-center gap-2.5 group me-auto" aria-label="La Vanilla Supplier, home">
              <div className="w-10 h-10 lg:w-11 lg:h-11 relative transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.png" alt="" fill sizes="44px" className="object-contain" priority />
              </div>
              <div className="w-24 lg:w-28 relative h-6 lg:h-7">
                <Image src="/logo-text.png" alt="La Vanilla Supplier" fill sizes="112px" className="object-contain object-left" priority />
              </div>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5">
              <nav aria-label="Main" className="flex items-center">
                {navigation.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      href={`${prefix}${item.path}`}
                      aria-current={active ? "page" : undefined}
                      className={`relative whitespace-nowrap px-2.5 xl:px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 group ${
                        active ? "text-[#2C2518]" : "text-[#2C2518]/65 hover:text-[#2C2518]"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#B5A37A] transition-all duration-300 ${
                          active ? "w-5" : "w-0 group-hover:w-5"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              <span className="w-px h-5 bg-[#E5E0D8]" aria-hidden="true" />

              <LanguageSwitcher currentLocale={locale} />

              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-sm font-medium rounded-full bg-[#2C2518] text-white hover:bg-[#3D3425] transition-colors"
              >
                {t.common.getQuote}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.whatsapp}
                title={t.common.whatsapp}
                className="hidden xl:inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E5E0D8] text-[#B5A37A] hover:bg-[#B5A37A] hover:border-[#B5A37A] hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
            </div>

            {/* Phone menu button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden -me-2 p-2.5 rounded-lg text-[#2C2518] hover:bg-[#2C2518]/5 transition-colors"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Phone menu: full-screen panel under the bar */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-[65] bg-white transition-[opacity,transform] duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="h-full overflow-y-auto px-6 pt-4 pb-8 flex flex-col">
          <nav aria-label="Main" className="flex flex-col">
            {navigation.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  href={`${prefix}${item.path}`}
                  aria-current={active ? "page" : undefined}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={`flex items-center justify-between py-4 border-b border-[#EEE9E1] text-lg font-medium ${
                    active ? "text-[#2C2518]" : "text-[#2C2518]/75"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#B5A37A]" aria-hidden="true" />}
                    {item.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#B5A37A] rtl:rotate-180" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-3">Language</p>
            <div className="flex flex-wrap gap-2">
              {(["en", "fr", "de", "es", "tr", "ar"] as const).map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc === "en" ? "" : loc}`}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    locale === loc
                      ? "bg-[#2C2518] border-[#2C2518] text-white"
                      : "border-[#E5E0D8] text-[#2C2518]/75 hover:border-[#B5A37A]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {localeFlags[loc]} {localeNames[loc]}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8 grid gap-3">
            <Link
              href={`${prefix}/contact`}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-semibold rounded-lg bg-[#2C2518] text-white hover:bg-[#3D3425] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.common.getQuote}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-semibold rounded-lg border border-[#D8D3C9] text-[#2C2518] hover:border-[#B5A37A] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25A55F]" />
              {t.common.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Spacer so content starts below the fixed bar */}
      <div className="h-16" />
    </>
  );
}
