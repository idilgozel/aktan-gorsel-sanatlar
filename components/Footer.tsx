import Link from "next/link";
import { site } from "../content/site";
import { Lang, t } from "../lib/i18n";
import { routes } from "../lib/routes";
import Container from "./Container";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div>
            <h3 className="section-title">{site.brandName}</h3>
            <p className="muted">{t(lang, site.description)}</p>
          </div>
          <div>
            <h4 className="section-title">{t(lang, site.nav.contact)}</h4>
            <p className="muted">{site.contact.email}</p>
            <p className="muted">{site.contact.phone}</p>
            <p className="muted">{t(lang, site.contact.address)}</p>
          </div>
          <div>
            <h4 className="section-title">{t(lang, { tr: "Sosyal", en: "Social" })}</h4>
            <div className="footer-links">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={site.social.x} target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
            <Link className="nav-link" href={routes(lang).kvkk}>
              {t(lang, site.nav.kvkk)}
            </Link>
          </div>
        </div>
        <small>© 2024 Aktan Gorsel Sanatlar.</small>
      </Container>
    </footer>
  );
}
