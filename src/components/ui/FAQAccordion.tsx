import { faqs } from "@/content/content";
import { Locale } from "@/lib/site";

export function FAQAccordion({ locale }: { locale: Locale }) {
  return (
    <div className="faq-list">
      {faqs[locale].map(([question, answer]) => (
        <details key={question} className="faq-item">
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
