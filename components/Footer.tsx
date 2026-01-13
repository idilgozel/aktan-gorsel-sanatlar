import Link from "next/link";
import { site } from "../content/site";
import { Lang, t } from "../lib/i18n";
import { routes } from "../lib/routes";
import Container from "./Container";

export default function Footer({ lang }: { lang: Lang }) {
  const socialIcons: Record<string, JSX.Element> = {
    instagram: (
      <svg viewBox="0 0 24 24" role="img" aria-label="Instagram">
        <path
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm4.75-3.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" role="img" aria-label="X">
        <path
          d="M4 4h4.6l3.4 4.9L15.8 4H20l-5.6 7.6L20 20h-4.6l-3.8-5.4L8.2 20H4l6.3-8.2L4 4Z"
          fill="currentColor"
        />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" role="img" aria-label="YouTube">
        <path
          d="M22 12s0-4-1-5s-5-1-9-1s-8 0-9 1s-1 5-1 5s0 4 1 5s5 1 9 1s8 0 9-1s1-5 1-5Zm-12.5 3V9l5 3l-5 3Z"
          fill="currentColor"
        />
      </svg>
    ),
  };
  const socials = [
    {
      key: "instagram",
      label: "Instagram",
      url: site.social.instagram,
    },
    {
      key: "x",
      label: "X",
      url: site.social.x,
    },
    {
      key: "youtube",
      label: "YouTube",
      url: site.social.youtube,
    },
  ].filter((social) => social.url && social.url !== "#");

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
            <h4 className="section-title">{t(lang, { tr: "Sosyal", en: "Socials" })}</h4>
            <p className="muted">{t(lang, { tr: "Instagram'da bizi takip edin.", en: "Follow us on Instagram." })}</p>
            <div className="social-buttons">
              {socials.map((social) => (
                <a key={social.key} className="social-button" href={social.url} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon" aria-hidden="true">
                    {socialIcons[social.key]}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
            <Link className="nav-link" href={routes(lang).kvkk}>
              {t(lang, site.nav.kvkk)}
            </Link>
          </div>
        </div>
        <small>© 2024 Aktan Görsel Sanatlar.</small>
      </Container>
    </footer>
  );
}
