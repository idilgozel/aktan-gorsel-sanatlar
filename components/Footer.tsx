import Link from "next/link";
import { Lang, t } from "../lib/i18n";
import { routes } from "../lib/routes";
import Container from "./Container";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div>
            <h3 className="section-title">Aktan Gorsel Sanatlar</h3>
            <p className="muted">
              {t(lang, {
                tr: "Kurumsal iletisim ve yaratıcı proje ortaklıgı icin bize ulasın.",
                en: "Reach us for corporate communication and creative project partnerships.",
              })}
            </p>
          </div>
          <div>
            <h4 className="section-title">{t(lang, { tr: "Iletisim", en: "Contact" })}</h4>
            <p className="muted">hello@aktanvisual.com</p>
            <p className="muted">+90 (000) 000 00 00</p>
            <p className="muted">Istanbul / Ankara</p>
          </div>
          <div>
            <h4 className="section-title">{t(lang, { tr: "Sosyal", en: "Social" })}</h4>
            <div className="footer-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
                Vimeo
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <Link className="nav-link" href={routes(lang).kvkk}>
              {t(lang, { tr: "KVKK Aydinlatma Metni", en: "Privacy Notice" })}
            </Link>
          </div>
        </div>
        <small>© 2024 Aktan Gorsel Sanatlar.</small>
      </Container>
    </footer>
  );
}
