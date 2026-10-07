export function isTranslatedPath(path: string): boolean {
  return TRANSLATED_PATHS.includes(path);
}

export function languageAlternates(path: string) {
  const unprefixed = path ? `/${path}` : "/";
  const prefixed = (locale: string) => (path ? `/${locale}/${path}` : `/${locale}`);
  return {
    en: unprefixed,
    fr: prefixed("fr"),
    de: prefixed("de"),
    es: prefixed("es"),
    tr: prefixed("tr"),
    ar: prefixed("ar"),
    "x-default": unprefixed,
  };
}

const TRANSLATED_PATHS = [
  "products",
  "products/vanilla-beans",
  "products/vanilla-paste",
  "products/vanilla-powder",
  "about",
  "contact",
  "quality",
  "faq",
  "wholesale",
  "la-vanilla-standard",
];
