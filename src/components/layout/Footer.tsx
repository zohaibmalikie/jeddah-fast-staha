import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { areas, areaTitle, services } from "@/content/content";
import { Locale, site } from "@/lib/site";
import { navItems, pathFor, routeLabels } from "@/lib/routes";

export function Footer({ locale }: { locale: Locale }) {
  const quickLinksLabel = locale === "en" ? "Footer quick links" : locale === "ar" ? "روابط التذييل السريعة" : "فوٹر فوری روابط";
  const serviceLinksLabel = locale === "en" ? "Footer services" : locale === "ar" ? "خدمات التذييل" : "فوٹر سروسز";
  const areaLinksLabel = locale === "en" ? "Footer service areas" : locale === "ar" ? "مناطق الخدمة في التذييل" : "فوٹر سروس علاقے";

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>{site.name[locale]}</h2>
          <p>
            {locale === "en"
              ? "Regular flatbed car transport in Jeddah, Makkah, and nearby roads with direct 24/7 contact."
              : locale === "ar"
                ? "خدمة سطحة عادية لنقل السيارات في جدة ومكة والطرق القريبة مع تواصل مباشر على مدار الساعة."
                : "جدہ، مکہ اور قریبی راستوں پر عام فلیٹ بیڈ گاڑی منتقلی کے لیے 24 گھنٹے رابطہ۔"}
          </p>
        </div>
        <nav aria-label={quickLinksLabel}>
          <h3>{locale === "en" ? "Quick Links" : locale === "ar" ? "روابط سريعة" : "فوری روابط"}</h3>
          {navItems.map((item) => (
            <Link key={item} href={pathFor(locale, item)}>
              {routeLabels[locale][item]}
            </Link>
          ))}
          <Link href="/sitemap.html">Sitemap</Link>
        </nav>
        <nav aria-label={serviceLinksLabel}>
          <h3>{routeLabels[locale].services}</h3>
          {services.slice(0, 5).map((service) => (
            <Link key={service.slug} href={`/${locale}/services/${service.slug}`}>
              {service.title[locale]}
            </Link>
          ))}
        </nav>
        <nav aria-label={areaLinksLabel}>
          <h3>{routeLabels[locale].areas}</h3>
          {areas.slice(0, 6).map((area) => (
            <Link key={area[0]} href={`/${locale}/areas/${area[0]}`}>
              {areaTitle(area, locale)}
            </Link>
          ))}
        </nav>
        <address>
          <h3>{routeLabels[locale].contact}</h3>
          <a href={site.phoneHref}><Phone size={16} /> {site.phoneDisplay}</a>
          <a href={site.emailHref}><Mail size={16} /> {site.email}</a>
          <span><MapPin size={16} /> {site.location}</span>
        </address>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name[locale]}</span>
      </div>
    </footer>
  );
}
