import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection, FAQSection } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { services } from "@/content/content";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { Locale, locales } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({ locale, path: `/${locale}/services/${slug}`, title: service.title[locale], description: service.description[locale] });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <>
      <SEOJsonLd data={serviceSchema(locale, `/${locale}/services/${slug}`, service.title[locale])} />
      <PageHero locale={locale} title={service.title[locale]} text={service.description[locale]} crumbs={[{ label: locale === "en" ? "Services" : locale === "ar" ? "الخدمات" : "سروسز", href: `/${locale}/services` }, { label: service.title[locale], href: `/${locale}/services/${slug}` }]} />
      <section className="section">
        <div className="container narrow article-body">
          <h2>{service.title[locale]}</h2>
          <p>{service.description[locale]}</p>
          <p>
            {locale === "en"
              ? "Share your pickup point, destination, and car type on WhatsApp. We confirm availability and price before dispatch."
              : locale === "ar"
                ? "أرسل موقع الاستلام والوجهة ونوع السيارة عبر واتساب، ونؤكد لك التوفر والسعر قبل التحرك."
                : "واٹس ایپ پر پک اپ پوائنٹ، منزل اور گاڑی کی قسم بھیجیں، روانگی سے پہلے دستیابی اور قیمت بتائی جائے گی۔"}
          </p>
        </div>
      </section>
      <FAQSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
