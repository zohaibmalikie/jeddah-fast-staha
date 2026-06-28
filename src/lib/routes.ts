import { Locale, locales } from "./site";

export type RouteKey =
  | "home"
  | "services"
  | "areas"
  | "blog"
  | "about"
  | "contact";

export const routeLabels: Record<Locale, Record<RouteKey, string>> = {
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    areas: "المناطق",
    blog: "المدونة",
    about: "من نحن",
    contact: "اتصل بنا",
  },
  en: {
    home: "Home",
    services: "Services",
    areas: "Areas",
    blog: "Blog",
    about: "About",
    contact: "Contact",
  },
  ur: {
    home: "ہوم",
    services: "سروسز",
    areas: "علاقے",
    blog: "بلاگ",
    about: "ہمارے بارے میں",
    contact: "رابطہ",
  },
};

export const navItems: RouteKey[] = [
  "home",
  "services",
  "areas",
  "blog",
  "about",
  "contact",
];

export function pathFor(locale: Locale, key: RouteKey) {
  if (key === "home") return `/${locale}`;
  return `/${locale}/${key}`;
}

export function localizedPath(pathname: string, locale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0 || !locales.includes(parts[0] as Locale)) {
    return `/${locale}`;
  }
  parts[0] = locale;
  return `/${parts.join("/")}`;
}
