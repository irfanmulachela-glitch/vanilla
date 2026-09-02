"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { locales, type Locale, getTranslations } from "@/i18n";

const LocaleContext = createContext<{
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
}>({
  locale: "en",
  t: getTranslations("en"),
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const firstSegment = segments[1];
  
  const locale: Locale = locales.includes(firstSegment as Locale)
    ? (firstSegment as Locale)
    : "en";
  
  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  return useContext(LocaleContext);
}
