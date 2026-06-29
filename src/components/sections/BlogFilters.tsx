"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/ui/Cards";
import { posts, ui } from "@/content/content";
import { Locale } from "@/lib/site";

export function BlogFilters({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = useMemo(() => Array.from(new Set(posts.map((post) => post.category[locale]))), [locale]);
  const filtered = posts.filter((post) => {
    const matchesQuery = `${post.title[locale]} ${post.excerpt[locale]}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || post.category[locale] === category;
    return matchesQuery && matchesCategory;
  });
  const resultLabel =
    locale === "en"
      ? `${filtered.length} article${filtered.length === 1 ? "" : "s"} found`
      : locale === "ar"
        ? `تم العثور على ${filtered.length} مقال`
        : `${filtered.length} مضامین ملے`;

  return (
    <>
      <div className="blog-tools">
        <label className="sr-only" htmlFor="blog-search">{ui[locale].search}</label>
        <input id="blog-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ui[locale].search} />
        <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")}>{ui[locale].all}</button>
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{resultLabel}</p>
      <div className="card-grid three">
        {filtered.map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}
      </div>
    </>
  );
}
