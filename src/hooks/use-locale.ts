"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n";

export function useLocale(): Locale {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const firstSegment = segments[1];
  
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return "en";
}
