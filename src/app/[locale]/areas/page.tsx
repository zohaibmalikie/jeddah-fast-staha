import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/HomeSections";
import { AreaCard } from "@/components/ui/Cards";
import { areas, areaTitle } from "@/content/content";
import { pageMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";

const copy = {
  ar: ["مناطق تغطية السطحة", "نخدم أحياء جدة ومكة الرئيسية والطرق القريبة بخدمة نقل سيارات واضحة وسريعة."],
  en: ["Service Areas", "We serve key Jeddah and Makkah districts and nearby roads with direct car transport support."],
  ur: ["سروس علاقے", "جدہ اور مکہ کے اہم علاقوں اور قریبی راستوں پر گاڑی منتقلی کی سہولت۔"],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: `/${locale}/areas`, title: copy[locale][0], description: copy[locale][1] });
}

export default async function AreasPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <>
      <PageHero locale={locale} title={copy[locale][0]} text={copy[locale][1]} crumbs={[{ label: copy[locale][0], href: `/${locale}/areas` }]} />
      <section className="section"><div className="container area-cloud all">{areas.map((area) => <AreaCard key={area[0]} slug={area[0]} title={areaTitle(area, locale)} locale={locale} />)}</div></section>
      <ContactSection locale={locale} />
    </>
  );
}
