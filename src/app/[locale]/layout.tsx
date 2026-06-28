import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { isLocale, localeDir, locales, type Locale } from "@/lib/site";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const current = locale as Locale;

  return (
    <html lang={current} dir={localeDir[current]}>
      <body>
        <SEOJsonLd data={organizationSchema(current)} />
        <SEOJsonLd data={localBusinessSchema(current)} />
        <SEOJsonLd data={websiteSchema(current)} />
        <Header locale={current} />
        <main>{children}</main>
        <Footer locale={current} />
        <StickyMobileCTA locale={current} />
      </body>
    </html>
  );
}
