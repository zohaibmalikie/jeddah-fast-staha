import { NextRequest, NextResponse } from "next/server";

function detectLocale(acceptLanguage: string | null) {
  const languages = acceptLanguage
    ? acceptLanguage
        .split(",")
        .map((part) => part.split(";")[0]?.trim().toLowerCase())
        .filter(Boolean)
    : [];

  if (languages.some((language) => language === "ar" || language.startsWith("ar-"))) {
    return "ar";
  }

  if (languages.some((language) => language === "ur" || language.startsWith("ur-"))) {
    return "ur";
  }

  return "en";
}

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${detectLocale(request.headers.get("accept-language"))}`, request.url));
}

export const config = {
  matcher: ["/"],
};
