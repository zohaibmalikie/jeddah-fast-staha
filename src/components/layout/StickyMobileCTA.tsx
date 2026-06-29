import { Mail, MessageCircle, Phone } from "lucide-react";
import { Locale, site } from "@/lib/site";
import { ui } from "@/content/content";

export function StickyMobileCTA({ locale }: { locale: Locale }) {
  return (
    <nav
      className="mobile-cta"
      aria-label={locale === "en" ? "Quick contact" : locale === "ar" ? "تواصل سريع" : "فوری رابطہ"}
    >
      <a href={site.phoneHref} aria-label={`${ui[locale].call} ${site.phoneDisplay}`}>
        <Phone size={18} aria-hidden="true" />
        {ui[locale].call}
      </a>
      <a href={site.whatsappMessage} target="_blank" rel="noreferrer" aria-label={ui[locale].whatsapp}>
        <MessageCircle size={18} aria-hidden="true" />
        {ui[locale].whatsapp}
      </a>
      <a href={site.emailHref} aria-label={`${ui[locale].email} ${site.email}`}>
        <Mail size={18} aria-hidden="true" />
        {ui[locale].email}
      </a>
    </nav>
  );
}
