"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

const localeShortNames: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  de: "DE",
  es: "ES",
  tr: "TR",
  ar: "AR",
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    const segments = pathname.split("/");
    const localeIndex = segments.indexOf(currentLocale);
    
    let newPath = pathname;
    if (localeIndex > 0) {
      segments.splice(localeIndex, 1);
      newPath = segments.join("/") || "/";
    }
    
    if (locale !== "en") {
      newPath = `/${locale}${newPath}`;
    }
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium tracking-widest uppercase text-[#B5A37A] hover:text-[#D4C48A] transition-colors duration-300 group"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{localeShortNames[currentLocale]}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 z-50 w-48 bg-[#2C2518] border border-[#3D3425] rounded-lg shadow-xl overflow-hidden">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                  currentLocale === locale
                    ? "bg-[#B5A37A]/20 text-[#B5A37A]"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="font-medium">{localeShortNames[locale]}</span>
                <span className="text-white/50">{localeNames[locale]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
