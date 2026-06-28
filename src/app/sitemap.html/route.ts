import { areas, areaTitle, posts, services } from "@/content/content";
import { locales, site } from "@/lib/site";

export function GET() {
  const links = locales.flatMap((locale) => [
    [`/${locale}`, `${site.name[locale]} home`],
    [`/${locale}/services`, "Services"],
    ...services.map((service) => [`/${locale}/services/${service.slug}`, service.title[locale]]),
    [`/${locale}/areas`, "Areas"],
    ...areas.map((area) => [`/${locale}/areas/${area[0]}`, areaTitle(area, locale)]),
    [`/${locale}/blog`, "Blog"],
    ...posts.map((post) => [`/${locale}/blog/${post.slug}`, post.title[locale]]),
    [`/${locale}/about`, "About"],
    [`/${locale}/contact`, "Contact"],
    [`/${locale}/jeddah`, "Jeddah"],
    [`/${locale}/makkah`, "Makkah"],
  ]);

  const body = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HTML Sitemap | ${site.name.en}</title>
  <meta name="robots" content="index, follow" />
  <style>body{font-family:Arial,sans-serif;line-height:1.6;margin:40px;max-width:960px}a{color:#0c7fb0}</style>
</head>
<body>
  <main>
    <h1>HTML Sitemap</h1>
    <p>Browse all public pages for ${site.name.en}.</p>
    <ul>
      ${links.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("\n      ")}
    </ul>
  </main>
</body>
</html>`;

  return new Response(body, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
