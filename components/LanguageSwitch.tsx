"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lang } from "../lib/i18n";
import { swapLangInPath } from "../lib/routes";

type LanguageSwitchProps = {
  lang: Lang;
};

export default function LanguageSwitch({ lang }: LanguageSwitchProps) {
  const pathname = usePathname();
  const nextLang: Lang = lang === "tr" ? "en" : "tr";

  return (
    <div className="lang-switch">
      <Link className={lang === "tr" ? "active" : ""} href={swapLangInPath(pathname, "tr")}>
        TR
      </Link>
      <Link className={lang === "en" ? "active" : ""} href={swapLangInPath(pathname, "en")}>
        EN
      </Link>
      <span className="muted">/{nextLang.toUpperCase()}</span>
    </div>
  );
}
