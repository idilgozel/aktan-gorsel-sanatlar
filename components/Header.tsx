"use client";

import { useState } from "react";
import { site } from "../content/site";
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
              <NavLink href={nav.about} label={t(lang, site.nav.about)} />
              <NavLink href={nav.services} label={t(lang, site.nav.services)} />
              <NavLink href={nav.projects} label={t(lang, site.nav.projects)} />
              <NavLink href={nav.gallery} label={t(lang, site.nav.gallery)} />
              <NavLink href={nav.articles} label={t(lang, site.nav.articles)} />
              <NavLink href={nav.contact} label={t(lang, site.nav.contact)} />
            </nav>
            <LanguageSwitch lang={lang} />
          </div>
        </div>
      </Container>
    </header>
  );
}
