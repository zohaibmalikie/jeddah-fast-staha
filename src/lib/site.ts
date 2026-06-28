export const site = {
  name: {
    ar: "Satha Express",
    en: "Satha Express",
    ur: "Satha Express",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://staha-jeddah.com",
  phoneDisplay: "0593057492",
  phoneIntl: "+966593057492",
  phoneHref: "tel:+966593057492",
  email: "chmohxingujjar9@gmail.com",
  emailHref: "mailto:chmohxingujjar9@gmail.com",
  whatsapp: "https://wa.me/966593057492",
  whatsappMessage:
    "https://wa.me/966593057492?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B3%D8%B7%D8%AD%D8%A9%20%D9%84%D9%86%D9%82%D9%84%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%AA%D9%8A",
  location: "Jeddah, Saudi Arabia",
};

export const locales = ["ar", "en", "ur"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
  ur: "اردو",
};

export const localeDir: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
  ur: "rtl",
};

export const defaultLocale: Locale = "en";

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function toLocale(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}
