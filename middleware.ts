import { NextRequest, NextResponse } from "next/server";
import { detectLocale } from "@/lib/locale";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${detectLocale(request.headers.get("accept-language"))}`, request.url));
}

export const config = {
  matcher: ["/"],
};
