import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { detectLocale } from "@/lib/locale";

export default async function Page() {
  const requestHeaders = await headers();
  redirect(`/${detectLocale(requestHeaders.get("accept-language"))}`);
}
