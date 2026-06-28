import { areas, areaTitle, faqs, services } from "@/content/content";
import { Locale, site, toLocale } from "./site";
import { absoluteUrl } from "./utils";

export function organizationSchema(locale: Locale) {
  const currentLocale = toLocale(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name[currentLocale],
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      contactType: "customer service",
      availableLanguage: ["Arabic", "English", "Urdu"],
    },
  };
}

export function localBusinessSchema(locale: Locale) {
  const currentLocale = toLocale(locale);
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: site.name[currentLocale],
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    areaServed: areas.map((area) => areaTitle(area, currentLocale)),
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
  };
}

export function serviceSchema(locale: Locale, path: string, name?: string) {
  const currentLocale = toLocale(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name ?? services[0].title[currentLocale],
    serviceType: "Flatbed car transport",
    provider: { "@type": "AutomotiveBusiness", name: site.name[currentLocale] },
    areaServed: areas.map((area) => areaTitle(area, currentLocale)),
    url: absoluteUrl(site.url, path),
  };
}

export function faqSchema(locale: Locale) {
  const currentLocale = toLocale(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs[currentLocale].map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingSchema(input: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    image: input.image,
    url: input.url,
    author: { "@type": "Organization", name: "سطحة جدة السريعة" },
    publisher: { "@type": "Organization", name: "سطحة جدة السريعة" },
  };
}
