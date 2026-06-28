import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ContactSection } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { BlogCard } from "@/components/ui/Cards";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { posts } from "@/content/content";
import { pageMetadata } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { Locale, locales, site } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return pageMetadata({ locale, path: `/${locale}/blog/${slug}`, title: post.title[locale], description: post.excerpt[locale] });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  return (
    <>
      <SEOJsonLd data={blogPostingSchema({ headline: post.title[locale], description: post.excerpt[locale], datePublished: post.date, url: absoluteUrl(site.url, `/${locale}/blog/${slug}`), image: post.image })} />
      <PageHero locale={locale} title={post.title[locale]} text={post.excerpt[locale]} crumbs={[{ label: locale === "en" ? "Blog" : locale === "ar" ? "المدونة" : "بلاگ", href: `/${locale}/blog` }, { label: post.title[locale], href: `/${locale}/blog/${slug}` }]} />
      <section className="section">
        <div className="container narrow">
          <Image className="article-hero-image" src={post.image} alt={post.title[locale]} width={1100} height={620} priority />
          <article className="article-body">
            <p className="meta">{post.date} · {post.readTime} min · {post.category[locale]}</p>
            <p>{post.excerpt[locale]}</p>
            <nav className="toc" aria-label={locale === "en" ? "Table of contents" : locale === "ar" ? "فهرس المقال" : "مضمون فہرست"}>
              <strong>{locale === "en" ? "In this article" : locale === "ar" ? "في هذا المقال" : "اس مضمون میں"}</strong>
              {post.content[locale].map((section) => (
                <a key={section.heading} href={`#${section.heading.replaceAll(" ", "-")}`}>{section.heading}</a>
              ))}
            </nav>
            {post.content[locale].map((section) => (
              <section key={section.heading} id={section.heading.replaceAll(" ", "-")}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <div className="article-cta">
              <h2>{locale === "en" ? "Need help now?" : locale === "ar" ? "تحتاج مساعدة الآن؟" : "ابھی مدد چاہیے؟"}</h2>
              <p>{locale === "en" ? "Call or send your location on WhatsApp for direct coordination." : locale === "ar" ? "اتصل أو أرسل موقعك عبر واتساب للتنسيق المباشر." : "براہ راست رابطے کے لیے کال کریں یا واٹس ایپ پر لوکیشن بھیجیں۔"}</p>
            </div>
          </article>
        </div>
      </section>
      <section className="section muted"><div className="container card-grid three">{related.map((item) => <BlogCard key={item.slug} post={item} locale={locale} />)}</div></section>
      <ContactSection locale={locale} />
    </>
  );
}
