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
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 px-2 py-1.5 text-[13px] font-medium text-[#2C2518]/65 hover:text-[#2C2518] transition-colors duration-200 group"
      >
        <Globe className="w-4 h-4 text-[#B5A37A]" />
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
          <div className="absolute end-0 top-full mt-2 z-50 w-52 bg-white border border-[#EEE9E1] rounded-xl shadow-[0_16px_40px_-12px_rgba(44,37,24,0.25)] overflow-hidden py-1">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                  currentLocale === locale
                    ? "bg-[#F8F6F2] text-[#2C2518]"
                    : "text-[#2C2518]/75 hover:bg-[#F8F6F2] hover:text-[#2C2518]"
                }`}
              >
                <span className="font-semibold w-6 text-[#B5A37A]">{localeShortNames[locale]}</span>
                <span>{localeNames[locale]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
