import { Mail, MessageCircle, Phone } from "lucide-react";
import { Locale, site } from "@/lib/site";
import { ui } from "@/content/content";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  compact?: boolean;
  className?: string;
};

export function PhoneButton({ locale, compact, className }: Props) {
  return (
    <a className={cn("btn btn-primary", className)} href={site.phoneHref} aria-label={`${ui[locale].call} ${site.phoneDisplay}`}>
      <Phone size={18} aria-hidden="true" />
      <span>{compact ? site.phoneDisplay : ui[locale].call}</span>
    </a>
  );
}

export function WhatsAppButton({ locale, className }: Props) {
  return (
    <a className={cn("btn btn-whatsapp", className)} href={site.whatsappMessage} target="_blank" rel="noreferrer" aria-label={ui[locale].whatsapp}>
      <MessageCircle size={18} aria-hidden="true" />
      <span>{ui[locale].whatsapp}</span>
    </a>
  );
}

export function EmailButton({ locale, className }: Props) {
  return (
    <a className={cn("btn btn-ghost", className)} href={site.emailHref} aria-label={`${ui[locale].email} ${site.email}`}>
      <Mail size={18} aria-hidden="true" />
      <span>{ui[locale].email}</span>
    </a>
  );
}
