"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../../../components/Container";
import { pages } from "../../../content/pages";
import { services } from "../../../content/services";
import { Lang, t } from "../../../lib/i18n";
import { routes } from "../../../lib/routes";

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  const [submitted, setSubmitted] = useState(false);
  const nav = routes(params.lang);

  return (
    <main>
      <Container>
        <h1 className="section-title">
          {t(params.lang, pages.contact.heading)}
        </h1>
        <p className="muted">{t(params.lang, pages.contact.intro)}</p>
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
          style={{ marginTop: 24 }}
        >
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">{t(params.lang, pages.contact.labels.name)}</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="email">{t(params.lang, pages.contact.labels.email)}</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="phone">{t(params.lang, pages.contact.labels.phone)}</label>
              <input id="phone" name="phone" type="tel" />
            </div>
            <div className="field">
              <label htmlFor="type">{t(params.lang, pages.contact.labels.type)}</label>
              <select id="type" name="type">
                <option value="cinema">{t(params.lang, services.cinema.heading)}</option>
                <option value="theatre">{t(params.lang, services.theatre.heading)}</option>
                <option value="other">{t(params.lang, pages.contact.options.other)}</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="title">{t(params.lang, pages.contact.labels.title)}</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="field">
              <label htmlFor="budget">{t(params.lang, pages.contact.labels.budget)}</label>
              <input id="budget" name="budget" type="text" placeholder={t(params.lang, pages.contact.labels.optional)} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="description">{t(params.lang, pages.contact.labels.description)}</label>
            <textarea id="description" name="description" required />
          </div>
          <div className="field">
            <label htmlFor="file">{t(params.lang, pages.contact.labels.file)}</label>
            <input id="file" name="file" type="file" />
          </div>
          <div className="field checkbox">
            <input id="kvkk" name="kvkk" type="checkbox" required />
            <label htmlFor="kvkk">
              {t(params.lang, pages.contact.labels.kvkk)}{" "}
              <Link className="nav-link" href={nav.kvkk}>
                {t(params.lang, pages.contact.labels.kvkkLink)}
              </Link>
            </label>
          </div>
          <button type="submit">{t(params.lang, pages.contact.labels.submit)}</button>
          {submitted ? (
            <p className="muted">{t(params.lang, pages.contact.success)}</p>
          ) : null}
        </form>
      </Container>
    </main>
  );
}
