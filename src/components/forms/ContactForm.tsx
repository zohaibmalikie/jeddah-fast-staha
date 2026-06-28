"use client";

import { FormEvent } from "react";
import { Locale, site } from "@/lib/site";
import { ui } from "@/content/content";

const labels = {
  ar: ["الاسم", "رقم الجوال", "المدينة", "الحي", "نوع السيارة", "موقع الاستلام", "موقع الوصول", "رسالة إضافية"],
  en: ["Name", "Phone", "City", "Area", "Car type", "Pickup location", "Drop-off location", "Message"],
  ur: ["نام", "فون", "شہر", "علاقہ", "گاڑی کی قسم", "پک اپ لوکیشن", "ڈراپ آف لوکیشن", "پیغام"],
};

const names = ["name", "phone", "city", "area", "car", "pickup", "dropoff", "message"];

export function ContactForm({ locale }: { locale: Locale }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = names.map((name, index) => `${labels[locale][index]}: ${form.get(name) ?? ""}`);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      {names.map((name, index) =>
        name === "message" ? (
          <label key={name}>
            {labels[locale][index]}
            <textarea name={name} rows={4} />
          </label>
        ) : (
          <label key={name}>
            {labels[locale][index]}
            <input name={name} required={index < 2} type={name === "phone" ? "tel" : "text"} />
          </label>
        ),
      )}
      <button className="btn btn-primary" type="submit">{ui[locale].submit}</button>
    </form>
  );
}
