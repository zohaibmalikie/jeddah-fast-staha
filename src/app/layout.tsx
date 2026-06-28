import "@/styles/globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name.ar,
  description: "خدمة سطحة عادية لنقل السيارات في جدة ومكة على مدار الساعة.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
