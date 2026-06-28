import { Mail, MessageCircle, Phone } from "lucide-react";
import { Locale, site } from "@/lib/site";
import { ui } from "@/content/content";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  compact?: boolean;
  className?: string;
};

export function PhoneButton({ compact, className }: Props) {
  return (
    <a className={cn("btn btn-primary", className)} href={site.phoneHref} aria-label={`${ui.en.call} ${site.phoneDisplay}`}>
      <Phone size={18} aria-hidden="true" />
      <span>{compact ? site.phoneDisplay : ui.en.call}</span>
    </a>
  );
}

export function WhatsAppButton({ className }: Props) {
  return (
    <a className={cn("btn btn-whatsapp", className)} href={site.whatsappMessage} target="_blank" rel="noreferrer" aria-label={ui.en.whatsapp}>
      <MessageCircle size={18} aria-hidden="true" />
      <span>{ui.en.whatsapp}</span>
    </a>
  );
}

export function EmailButton({ className }: Props) {
  return (
    <a className={cn("btn btn-ghost", className)} href={site.emailHref} aria-label={`${ui.en.email} ${site.email}`}>
      <Mail size={18} aria-hidden="true" />
      <span>{ui.en.email}</span>
    </a>
  );
}
