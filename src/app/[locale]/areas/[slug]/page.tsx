import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection, FAQSection } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { areas, areaTitle } from "@/content/content";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { Locale, locales } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => areas.map((area) => ({ locale, slug: area[0] })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const area = areas.find((item) => item[0] === slug);
  if (!area) return {};
  const title = `${areaTitle(area, locale)} ${locale === "en" ? "Car Towing" : locale === "ar" ? "سطحة نقل سيارات" : "کار ٹوئنگ"}`;
  return pageMetadata({ locale, path: `/${locale}/areas/${slug}`, title, description: `${title} - ${locale === "en" ? "24/7 regular flatbed car transport." : locale === "ar" ? "خدمة سطحة عادية متاحة 24 ساعة." : "24 گھنٹے عام فلیٹ بیڈ گاڑی منتقلی۔"}` });
}

export default async function AreaDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const area = areas.find((item) => item[0] === slug);
  if (!area) notFound();
  const title = areaTitle(area, locale);
  return (
    <>
      <SEOJsonLd data={serviceSchema(locale, `/${locale}/areas/${slug}`, title)} />
      <PageHero locale={locale} title={title} text={locale === "en" ? `Car transport service available in ${title} with direct call and WhatsApp support.` : locale === "ar" ? `خدمة سطحة لنقل السيارات في ${title} مع تواصل مباشر عبر الاتصال وواتساب.` : `${title} میں کال اور واٹس ایپ سپورٹ کے ساتھ گاڑی منتقلی سروس۔`} crumbs={[{ label: locale === "en" ? "Areas" : locale === "ar" ? "المناطق" : "علاقے", href: `/${locale}/areas` }, { label: title, href: `/${locale}/areas/${slug}` }]} />
      <section className="section"><div className="container narrow article-body"><h2>{title}</h2><p>{locale === "en" ? "Send your exact location and destination for a clear quote before the driver moves." : locale === "ar" ? "أرسل موقعك الدقيق والوجهة للحصول على سعر واضح قبل تحرك السائق." : "ڈرائیور کے روانہ ہونے سے پہلے واضح قیمت کے لیے اپنی لوکیشن اور منزل بھیجیں۔"}</p></div></section>
      <FAQSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
