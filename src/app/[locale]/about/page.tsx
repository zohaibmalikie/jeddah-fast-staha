import type { Metadata } from "next";
import { ContactSection, WhyChooseUs } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";
import { Locale, site } from "@/lib/site";

const copy = {
  ar: ["من نحن", "Jeddah Satha خدمة محلية لنقل السيارات في جدة ومكة بتواصل مباشر وتركيز على الأمان والوضوح."],
  en: ["About Us", "Jeddah Satha is a local car transport service for Jeddah and Makkah focused on clear communication and safe handling."],
  ur: ["ہمارے بارے میں", "Jeddah Satha جدہ اور مکہ کے لیے مقامی گاڑی منتقلی سروس ہے جس میں واضح رابطہ اور محفوظ ہینڈلنگ اہم ہے۔"],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: `/${locale}/about`, title: copy[locale][0], description: copy[locale][1] });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <>
      <PageHero locale={locale} title={copy[locale][0]} text={copy[locale][1]} crumbs={[{ label: copy[locale][0], href: `/${locale}/about` }]} />
      <section className="section"><div className="container narrow article-body"><h2>{site.name[locale]}</h2><p>{copy[locale][1]}</p><p>{locale === "en" ? "We avoid exaggerated claims and focus on practical support: direct contact, clear price confirmation, and careful transport." : locale === "ar" ? "نبتعد عن الوعود المبالغ فيها ونركز على الدعم العملي: تواصل مباشر، تأكيد سعر واضح، ونقل حذر للسيارة." : "ہم غیر حقیقی دعووں کے بجائے عملی مدد پر توجہ دیتے ہیں: براہ راست رابطہ، واضح قیمت اور احتیاط سے گاڑی منتقلی۔"}</p></div></section>
      <WhyChooseUs locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
