import Link from "next/link";
import { Lang, t } from "../lib/i18n";
import { routes } from "../lib/routes";

export default function SiteLogo({ lang }: { lang: Lang }) {
  return (
    <Link className="site-logo" href={routes(lang).home}>
      <strong>Aktan Görsel Sanatlar</strong>
      <span>{t(lang, { tr: "Gorsel Iletisim", en: "Visual Arts" })}</span>
    </Link>
  );
}
