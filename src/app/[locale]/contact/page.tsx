import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";
import { Locale, site } from "@/lib/site";

const copy = {
  ar: ["اتصل بنا", "للطلب السريع أرسل موقعك عبر واتساب أو اتصل مباشرة على رقم سطحة جدة ومكة."],
  en: ["Contact Us", "For quick service, send your location on WhatsApp or call directly for Jeddah and Makkah car transport."],
  ur: ["رابطہ کریں", "فوری سروس کے لیے واٹس ایپ پر لوکیشن بھیجیں یا جدہ اور مکہ کار ٹرانسپورٹ کے لیے کال کریں۔"],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: `/${locale}/contact`, title: copy[locale][0], description: copy[locale][1] });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <>
      <PageHero locale={locale} title={copy[locale][0]} text={copy[locale][1]} crumbs={[{ label: copy[locale][0], href: `/${locale}/contact` }]} />
      <section className="section muted"><div className="container narrow card"><h2>{site.phoneDisplay}</h2><p>{site.email}</p><p>{site.location}</p></div></section>
      <ContactSection locale={locale} />
    </>
  );
}
