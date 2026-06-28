import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Locale } from "@/lib/site";

export function PageHero({
  locale,
  title,
  text,
  crumbs,
}: {
  locale: Locale;
  title: string;
  text: string;
  crumbs: { label: string; href: string }[];
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs locale={locale} items={crumbs} />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
