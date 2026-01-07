export type Lang = "tr" | "en";

export const supportedLangs: Lang[] = ["tr", "en"];

export function isSupportedLang(value: string): value is Lang {
  return supportedLangs.includes(value as Lang);
}

export function t(lang: Lang, copy: { tr: string; en: string }) {
  return lang === "tr" ? copy.tr : copy.en;
}
