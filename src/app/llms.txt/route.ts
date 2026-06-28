import { areas, areaTitle, posts, services } from "@/content/content";
import { site } from "@/lib/site";

export function GET() {
  const serviceLinks = services
    .map((service) => `- [${service.title.en}](${site.url}/en/services/${service.slug}): ${service.description.en}`)
    .join("\n");
  const areaLinks = areas
    .map((area) => `- [${areaTitle(area, "en")}](${site.url}/en/areas/${area[0]})`)
    .join("\n");
  const blogLinks = posts
    .map((post) => `- [${post.title.en}](${site.url}/en/blog/${post.slug}): ${post.excerpt.en}`)
    .join("\n");

  const body = `# ${site.name.en}

> Regular flatbed car transport service for Jeddah, Makkah, and nearby roads. The website is available in English, Arabic, and Urdu.

Business contact:
- Phone: ${site.phoneIntl}
- WhatsApp: ${site.whatsapp}
- Email: ${site.email}
- Service area: Jeddah, Makkah, North Jeddah, South Jeddah, Obhur, Al Safa, Al Salamah, Al Marwah, Al Rawdah, Al Hamdaniyah, Al Balad, Makkah Haram Area, Aziziyah Makkah, Al Awali Makkah, Al Shara'i Makkah
- Availability: 24/7

Important context:
- This is a regular flatbed car transport service.
- Primary user tasks are calling, opening WhatsApp, checking service areas, reading safety guides, and requesting car pickup.
- Use /en as the English canonical experience, /ar for Arabic, and /ur for Urdu.

## Core Pages
- [Home](${site.url}/en)
- [Services](${site.url}/en/services)
- [Areas](${site.url}/en/areas)
- [Blog](${site.url}/en/blog)
- [About](${site.url}/en/about)
- [Contact](${site.url}/en/contact)
- [Jeddah landing page](${site.url}/en/jeddah)
- [Makkah landing page](${site.url}/en/makkah)

## Services
${serviceLinks}

## Service Areas
${areaLinks}

## Blog and Answer Guides
${blogLinks}

## Discovery Files
- [XML Sitemap](${site.url}/sitemap.xml)
- [Robots](${site.url}/robots.txt)
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
