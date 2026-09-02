import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import tr from "./locales/tr.json";
import ar from "./locales/ar.json";

export type Locale = "en" | "fr" | "de" | "es" | "tr" | "ar";

export const locales: Locale[] = ["en", "fr", "de", "es", "tr", "ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  tr: "Türkçe",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  es: "🇪🇸",
  tr: "🇹🇷",
  ar: "🇸🇦",
};

const translations: Record<Locale, typeof en> = {
  en,
  fr,
  de,
  es,
  tr,
  ar,
};

export function getTranslations(locale: Locale = "en") {
  return translations[locale] || translations.en;
}

export function getDirection(locale: Locale = "en"): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
