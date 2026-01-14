import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isSupportedLang } from "../lib/i18n";

export default function RootPage() {
  const headerList = headers();
  const acceptLanguage = headerList.get("accept-language") ?? "";
  const rawLang = acceptLanguage.split(",")[0]?.trim() ?? "";
  const normalized = rawLang.split(";")[0].trim().slice(0, 2).toLowerCase();
  const lang = isSupportedLang(normalized) ? normalized : "tr";

  redirect(`/${lang}`);
}
