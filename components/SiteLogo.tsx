import Link from "next/link";
import { site } from "../content/site";
import { Lang, t } from "../lib/i18n";
import { routes } from "../lib/routes";

export default function SiteLogo({ lang }: { lang: Lang }) {
  return (
    <Link className="site-logo" href={routes(lang).home}>
      <strong>{site.brandName}</strong>
      <span>{t(lang, site.tagline)}</span>
    </Link>
  );
}
