import type { Metadata } from "next";
import { ContactSection, FAQSection, ServicesPreview } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";

const copy = {
  ar: ["سطحة مكة", "خدمة نقل سيارات في مكة ومن مكة إلى جدة للأعطال والمشاوير المخططة بتواصل مباشر على مدار الساعة."],
  en: ["Car Towing Makkah", "Vehicle transport in Makkah and from Makkah to Jeddah for breakdowns and planned moves."],
  ur: ["مکہ سطحة", "مکہ میں اور مکہ سے جدہ تک خراب یا منصوبہ بند گاڑی منتقلی کے لیے 24 گھنٹے رابطہ۔"],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: `/${locale}/makkah`, title: copy[locale][0], description: copy[locale][1] });
}

export default async function MakkahPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <><PageHero locale={locale} title={copy[locale][0]} text={copy[locale][1]} crumbs={[{ label: copy[locale][0], href: `/${locale}/makkah` }]} /><ServicesPreview locale={locale} /><FAQSection locale={locale} /><ContactSection locale={locale} /></>;
}
