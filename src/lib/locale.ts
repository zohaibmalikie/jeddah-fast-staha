export function detectLocale(acceptLanguage: string | null) {
  if (!acceptLanguage) return "en";

  const preferred = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [language, ...params] = part.trim().split(";");
      const quality = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="))
        ?.slice(2);

      return {
        language: language.toLowerCase(),
        quality: quality ? Number.parseFloat(quality) : 1,
        index,
      };
    })
    .filter((item) => item.language && !Number.isNaN(item.quality))
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { language } of preferred) {
    if (language === "en" || language.startsWith("en-")) return "en";
    if (language === "ar" || language.startsWith("ar-")) return "ar";
    if (language === "ur" || language.startsWith("ur-")) return "ur";
  }

  return "en";
}
