import { Lang, isSupportedLang } from "./i18n";

export function routes(lang: Lang) {
  return {
    home: `/${lang}`,
    about: `/${lang}/about`,
    services: `/${lang}/services`,
    servicesCinema: `/${lang}/services/cinema`,
    servicesTheatre: `/${lang}/services/theatre`,
    projects: `/${lang}/projects`,
    gallery: `/${lang}/gallery`,
    articles: `/${lang}/articles`,
    contact: `/${lang}/contact`,
    kvkk: `/${lang}/kvkk`,
  };
}

export function swapLangInPath(pathname: string, nextLang: Lang) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLang}`;
  }

  const [, ...rest] = segments;
  if (isSupportedLang(segments[0])) {
    return `/${[nextLang, ...rest].join("/")}`;
  }

  return `/${[nextLang, ...segments].join("/")}`;
}
