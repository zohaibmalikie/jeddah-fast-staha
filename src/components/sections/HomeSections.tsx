import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { AreaCard, BlogCard, ServiceCard } from "@/components/ui/Cards";
import { PhoneButton, WhatsAppButton } from "@/components/ui/CTAButtons";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { areas, areaTitle, home, images, posts, services, steps, testimonials, trustBadges, ui, why } from "@/content/content";
import { Locale, site } from "@/lib/site";

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{home[locale].badge}</p>
          <h1>{home[locale].heroTitle}</h1>
          <p>{home[locale].heroText}</p>
          <div className="button-row">
            <PhoneButton locale={locale} />
            <WhatsAppButton locale={locale} />
          </div>
          <div className="trust-row">
            {trustBadges[locale].map((badge) => (
              <span key={badge}><CheckCircle size={16} />{badge}</span>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <Image src={images.hero} alt={home[locale].heroTitle} width={900} height={700} priority />
          <div className="floating-contact">
            <strong>{site.phoneDisplay}</strong>
            <span>{ui[locale].whatsapp} · {site.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EmergencyStrip({ locale }: { locale: Locale }) {
  return (
    <section className="emergency-strip">
      <div className="container emergency-inner">
        <strong>{home[locale].emergency}</strong>
        <div>
          <a href={site.phoneHref}><Phone size={17} />{site.phoneDisplay}</a>
          <a href={site.whatsappMessage}><MapPin size={17} />WhatsApp</a>
          <a href={site.emailHref}><Mail size={17} />{site.email}</a>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={home[locale].servicesTitle} text={home[locale].servicesText} />
        <div className="card-grid three">{services.map((service) => <ServiceCard key={service.slug} service={service} locale={locale} />)}</div>
      </div>
    </section>
  );
}

export function CoverageSection({ locale }: { locale: Locale }) {
  return (
    <section className="section split-section">
      <div className="container split-grid">
        <Image src={images.city} alt={home[locale].coverageTitle} width={760} height={520} />
        <div>
          <SectionHeading title={home[locale].coverageTitle} text={home[locale].coverageText} />
          <div className="area-cloud">
            {areas.slice(0, 10).map((area) => <AreaCard key={area[0]} slug={area[0]} title={areaTitle(area, locale)} locale={locale} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs({ locale }: { locale: Locale }) {
  return (
    <section className="section muted">
      <div className="container">
        <SectionHeading title={home[locale].whyTitle} />
        <div className="card-grid four">
          {why.map((item) => {
            const Icon = item.icon;
            return <article className="card mini-card" key={item.en}><Icon size={24} /><h3>{item[locale]}</h3></article>;
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={home[locale].howTitle} />
        <div className="steps">
          {steps[locale].map((step, index) => (
            <article key={step} className="step"><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection({ locale }: { locale: Locale }) {
  return (
    <section className="section muted">
      <div className="container">
        <SectionHeading title={home[locale].galleryTitle} />
        <div className="gallery-grid">
          {[images.truck, images.roadside, images.hero, images.city].map((src, index) => (
            <Image key={src} src={src} alt={`${home[locale].galleryTitle} ${index + 1}`} width={700} height={480} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={home[locale].testimonialsTitle} />
        <div className="card-grid three">
          {testimonials[locale].map((quote) => <blockquote key={quote} className="card testimonial">{quote}</blockquote>)}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview({ locale }: { locale: Locale }) {
  return (
    <section className="section muted">
      <div className="container">
        <SectionHeading title={home[locale].blogTitle} />
        <div className="card-grid three">{posts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}</div>
      </div>
    </section>
  );
}

export function FAQSection({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container narrow">
        <SectionHeading title={home[locale].faqTitle} />
        <FAQAccordion locale={locale} />
      </div>
    </section>
  );
}

export function ContactSection({ locale }: { locale: Locale }) {
  return (
    <section className="section contact-band">
      <div className="container contact-grid">
        <div>
          <SectionHeading title={home[locale].contactTitle} text={home[locale].emergency} />
          <div className="button-row">
            <PhoneButton locale={locale} />
            <WhatsAppButton locale={locale} />
          </div>
          <p className="contact-line">{site.email}</p>
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
}

export function AreasPreview({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={home[locale].areasTitle} />
        <div className="area-cloud all">
          {areas.map((area) => <AreaCard key={area[0]} slug={area[0]} title={areaTitle(area, locale)} locale={locale} />)}
        </div>
        <Link className="text-link view-all" href={`/${locale}/areas`}>{ui[locale].viewAll}</Link>
      </div>
    </section>
  );
}
