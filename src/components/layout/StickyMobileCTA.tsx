import { Mail, MessageCircle, Phone } from "lucide-react";
import { Locale, site } from "@/lib/site";
import { ui } from "@/content/content";

export function StickyMobileCTA({}: { locale: Locale }) {
  return (
    <div className="mobile-cta" aria-label="Quick contact">
      <a href={site.phoneHref}><Phone size={18} />{ui.en.call}</a>
      <a href={site.whatsappMessage} target="_blank" rel="noreferrer"><MessageCircle size={18} />{ui.en.whatsapp}</a>
      <a href={site.emailHref}><Mail size={18} />{ui.en.email}</a>
    </div>
  );
}
