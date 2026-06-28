import type { Metadata } from "next";
import { BlogFilters } from "@/components/sections/BlogFilters";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/HomeSections";
import { BlogCard } from "@/components/ui/Cards";
import { posts, ui } from "@/content/content";
import { pageMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";

const copy = {
  ar: ["مدونة سطحة جدة ومكة", "مقالات عملية تساعدك عند تعطل السيارة أو طلب نقل سيارة داخل جدة ومكة."],
  en: ["Jeddah and Makkah Towing Blog", "Practical articles for breakdowns, car transport, and safe pickup in Jeddah and Makkah."],
  ur: ["جدہ اور مکہ سطحة بلاگ", "خراب گاڑی، گاڑی منتقلی اور محفوظ پک اپ کے لیے عملی مضامین۔"],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: `/${locale}/blog`, title: copy[locale][0], description: copy[locale][1] });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <>
      <PageHero locale={locale} title={copy[locale][0]} text={copy[locale][1]} crumbs={[{ label: copy[locale][0], href: `/${locale}/blog` }]} />
      <section className="section">
        <div className="container blog-layout">
          <div className="blog-main">
            <p className="eyebrow">{ui[locale].featured}</p>
            <BlogCard post={posts[0]} locale={locale} />
            <div style={{ height: 24 }} />
            <BlogFilters locale={locale} />
          </div>
          <aside className="card blog-sidebar">
            <h2>{ui[locale].recent}</h2>
            {posts.slice(1).map((post) => (
              <p key={post.slug}><a className="text-link" href={`/${locale}/blog/${post.slug}`}>{post.title[locale]}</a></p>
            ))}
          </aside>
        </div>
      </section>
      <ContactSection locale={locale} />
    </>
  );
}
