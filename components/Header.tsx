"use client";

import { useState } from "react";
import { Lang, t } from "../lib/i18n";
import { routes } from "../lib/routes";
import Container from "./Container";
import LanguageSwitch from "./LanguageSwitch";
import NavLink from "./NavLink";
import SiteLogo from "./SiteLogo";

export default function Header({ lang }: { lang: Lang }) {
  const nav = routes(lang);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <SiteLogo lang={lang} />
          <div className="header-actions">
            <button
              className="nav-toggle"
              type="button"
              aria-expanded={isOpen}
              aria-label={t(lang, { tr: "Menu", en: "Menu" })}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={`site-nav${isOpen ? " open" : ""}`}>
              <NavLink href={nav.about} label={t(lang, { tr: "Biz Kimiz", en: "About" })} />
              <NavLink href={nav.services} label={t(lang, { tr: "Hizmetler", en: "Services" })} />
              <NavLink href={nav.projects} label={t(lang, { tr: "Projeler", en: "Projects" })} />
              <NavLink href={nav.gallery} label={t(lang, { tr: "Galeri", en: "Gallery" })} />
              <NavLink href={nav.articles} label={t(lang, { tr: "Yazilar", en: "Articles" })} />
              <NavLink href={nav.contact} label={t(lang, { tr: "Iletisim", en: "Contact" })} />
            </nav>
            <LanguageSwitch lang={lang} />
          </div>
        </div>
      </Container>
    </header>
  );
}
