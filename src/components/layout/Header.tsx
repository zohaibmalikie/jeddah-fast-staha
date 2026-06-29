import Link from "next/link";
import { Truck } from "lucide-react";
import { Locale, site } from "@/lib/site";
import { navItems, pathFor, routeLabels } from "@/lib/routes";
import { PhoneButton, WhatsAppButton } from "@/components/ui/CTAButtons";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={`/${locale}`} className="brand" aria-label={site.name[locale]}>
          <span className="brand-mark">
            <Truck size={24} aria-hidden="true" />
          </span>
          <span>
            <strong>{site.name[locale]}</strong>
            <small>{locale === "en" ? "Car transport service" : locale === "ar" ? "خدمة نقل السيارات" : "گاڑی منتقلی سروس"}</small>
          </span>
        </Link>
        <nav
          className="main-nav"
          aria-label={locale === "en" ? "Primary navigation" : locale === "ar" ? "التنقل الرئيسي" : "مرکزی نیویگیشن"}
        >
          {navItems.map((item) => (
            <Link key={item} href={pathFor(locale, item)}>
              {routeLabels[locale][item]}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher currentLocale={locale} />
          <WhatsAppButton locale={locale} compact />
          <PhoneButton locale={locale} compact />
        </div>
      </div>
    </header>
  );
}
