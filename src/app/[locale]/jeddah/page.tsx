import type { Metadata } from "next";
import { AreasPreview, ContactSection, FAQSection, ServicesPreview } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";

const copy = {
  ar: ["سطحة جدة", "خدمة سطحة عادية لنقل السيارات داخل جدة، شمالها وجنوبها، مع واتساب مباشر وسعر واضح قبل التحرك."],
  en: ["Car Towing Jeddah", "Regular flatbed car transport across North and South Jeddah with direct WhatsApp coordination."],
  ur: ["جدہ سطحة", "شمالی اور جنوبی جدہ میں عام فلیٹ بیڈ گاڑی منتقلی، واٹس ایپ رابطہ اور واضح قیمت کے ساتھ۔"],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: `/${locale}/jeddah`, title: copy[locale][0], description: copy[locale][1] });
}

export default async function JeddahPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <><PageHero locale={locale} title={copy[locale][0]} text={copy[locale][1]} crumbs={[{ label: copy[locale][0], href: `/${locale}/jeddah` }]} /><ServicesPreview locale={locale} /><AreasPreview locale={locale} /><FAQSection locale={locale} /><ContactSection locale={locale} /></>;
}
