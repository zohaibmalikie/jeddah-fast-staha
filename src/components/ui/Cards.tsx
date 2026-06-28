import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { type posts, ui } from "@/content/content";
import { Locale } from "@/lib/site";

export function ServiceCard({ service, locale }: { service: (typeof import("@/content/content").services)[number]; locale: Locale }) {
  const Icon = service.icon;
  return (
    <article className="card service-card">
      <Icon size={26} aria-hidden="true" />
      <h3>{service.title[locale]}</h3>
      <p>{service.description[locale]}</p>
      <Link href={`/${locale}/services/${service.slug}`}>
        {ui[locale].readMore} <ChevronRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

export function AreaCard({ slug, title, locale }: { slug: string; title: string; locale: Locale }) {
  return (
    <Link href={`/${locale}/areas/${slug}`} className="card area-card">
      <MapPin size={20} aria-hidden="true" />
      <span>{title}</span>
    </Link>
  );
}

export function BlogCard({ post, locale }: { post: (typeof posts)[number]; locale: Locale }) {
  return (
    <article className="card blog-card">
      <Image
        src={post.image}
        alt={post.title[locale]}
        width={640}
        height={420}
        sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw"
      />
      <div>
        <p className="eyebrow">{post.category[locale]}</p>
        <h3>{post.title[locale]}</h3>
        <p>{post.excerpt[locale]}</p>
        <span className="meta"><Calendar size={15} /> {post.date} · {post.readTime} min</span>
        <Link href={`/${locale}/blog/${post.slug}`}>{ui[locale].readMore}</Link>
      </div>
    </article>
  );
}
