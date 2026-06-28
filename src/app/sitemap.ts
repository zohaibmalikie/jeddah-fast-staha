import type { MetadataRoute } from "next";
import { areas, posts, services } from "@/content/content";
import { locales, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/services", "/areas", "/blog", "/about", "/contact", "/jeddah", "/makkah"];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const areaPaths = areas.map((area) => `/areas/${area[0]}`);
  const blogPaths = posts.map((post) => `/blog/${post.slug}`);
  const paths = [...staticPaths, ...servicePaths, ...areaPaths, ...blogPaths];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path.includes("/blog/") ? "monthly" : "weekly",
      priority: path === "" ? 1 : 0.8,
    })),
  );
}
