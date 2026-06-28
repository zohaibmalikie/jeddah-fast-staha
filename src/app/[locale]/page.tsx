import type { Metadata } from "next";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { AreasPreview, BlogPreview, ContactSection, CoverageSection, EmergencyStrip, FAQSection, GallerySection, HeroSection, HowItWorks, ServicesPreview, TestimonialsSection, WhyChooseUs } from "@/components/sections/HomeSections";
import { home } from "@/content/content";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { isLocale } from "@/lib/site";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({
    locale,
    path: `/${locale}`,
    title: home[locale].heroTitle,
    description: home[locale].heroText,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <SEOJsonLd data={serviceSchema(locale, `/${locale}`)} />
      <SEOJsonLd data={faqSchema(locale)} />
      <HeroSection locale={locale} />
      <EmergencyStrip locale={locale} />
      <ServicesPreview locale={locale} />
      <CoverageSection locale={locale} />
      <WhyChooseUs locale={locale} />
      <HowItWorks locale={locale} />
      <AreasPreview locale={locale} />
      <GallerySection locale={locale} />
      <TestimonialsSection locale={locale} />
      <BlogPreview locale={locale} />
      <FAQSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
