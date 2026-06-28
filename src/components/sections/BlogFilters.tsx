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

  return (
    <>
      <div className="blog-tools">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ui[locale].search} />
        <button type="button" onClick={() => setCategory("all")}>{ui[locale].all}</button>
        {categories.map((item) => (
          <button key={item} type="button" onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <div className="card-grid three">
        {filtered.map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}
      </div>
    </>
  );
}
