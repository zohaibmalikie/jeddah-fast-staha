"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/site";
import { localizedPath } from "@/lib/routes";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className="language-switcher">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        value={currentLocale}
        onChange={(event) => router.push(localizedPath(pathname, event.target.value as Locale))}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
