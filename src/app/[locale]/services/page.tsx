import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection, FAQSection } from "@/components/sections/HomeSections";
import { ServiceCard } from "@/components/ui/Cards";
import { services } from "@/content/content";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { Locale } from "@/lib/site";

const copy = {
  ar: ["خدمات السطحة", "خدمات نقل سيارات في جدة ومكة للأعطال والحوادث والتنقل بين المدن بتواصل مباشر وسعر واضح."],
  en: ["Car Towing Services", "Car transport services in Jeddah and Makkah for breakdowns, accident cars, and intercity moves."],
  ur: ["کار ٹوئنگ سروسز", "جدہ اور مکہ میں خراب گاڑی، حادثہ زدہ گاڑی اور شہروں کے درمیان منتقلی کی خدمات۔"],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: `/${locale}/services`, title: copy[locale][0], description: copy[locale][1] });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <>
      <SEOJsonLd data={serviceSchema(locale, `/${locale}/services`)} />
      <PageHero locale={locale} title={copy[locale][0]} text={copy[locale][1]} crumbs={[{ label: copy[locale][0], href: `/${locale}/services` }]} />
      <section className="section"><div className="container card-grid three">{services.map((service) => <ServiceCard key={service.slug} service={service} locale={locale} />)}</div></section>
      <FAQSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
