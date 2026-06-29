import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Locale, localeDir, site } from "@/lib/site";
import { ui } from "@/content/content";
import { breadcrumbSchema } from "@/lib/schema";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { absoluteUrl } from "@/lib/utils";

export function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: { label: string; href: string }[];
}) {
  const Icon = localeDir[locale] === "rtl" ? ChevronLeft : ChevronRight;
  const allItems = [{ label: ui[locale].home, href: `/${locale}` }, ...items];
  return (
    <>
      <SEOJsonLd
        data={breadcrumbSchema(
          allItems.map((item) => ({ name: item.label, url: absoluteUrl(site.url, item.href) })),
        )}
      />
      <nav className="breadcrumbs" aria-label={ui[locale].breadcrumbs}>
        {allItems.map((item, index) => (
          <span key={item.href}>
            {index > 0 ? <Icon size={14} aria-hidden="true" /> : null}
            <Link href={item.href} aria-current={index === allItems.length - 1 ? "page" : undefined}>
              {item.label}
            </Link>
          </span>
        ))}
      </nav>
    </>
  );
}
