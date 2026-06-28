import type { Metadata } from "next";
import { absoluteUrl } from "./utils";
import { Locale, locales, site } from "./site";

export type SeoInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
};

export function localizedAlternates(path: string) {
  const parts = path.split("/").filter(Boolean);
  const rest = parts.length > 1 ? `/${parts.slice(1).join("/")}` : "";
  return Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(site.url, `/${locale}${rest}`)]),
  );
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image = "/opengraph-image",
}: SeoInput): Metadata {
  const url = absoluteUrl(site.url, path);
  const fullTitle = `${title} | ${site.name[locale]}`;
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: localizedAlternates(path),
    },
    openGraph: {
      type: "website",
      locale,
      url,
      title: fullTitle,
      description,
      siteName: site.name[locale],
      images: [{ url: absoluteUrl(site.url, image), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(site.url, image)],
    },
  };
}
