"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../../../components/Container";
import { Lang, t } from "../../../lib/i18n";
import { routes } from "../../../lib/routes";

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  const [submitted, setSubmitted] = useState(false);
  const nav = routes(params.lang);

  return (
    <main>
      <Container>
        <h1 className="section-title">
          {t(params.lang, { tr: "Proje Basvurusu", en: "Project Application" })}
        </h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Projenizi ve ihtiyaclarinizi detaylandirarak bize ulasin.",
            en: "Share your project needs and we will reach out with next steps.",
          })}
        </p>
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
              <label htmlFor="name">{t(params.lang, { tr: "Ad Soyad *", en: "Full Name *" })}</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="email">{t(params.lang, { tr: "E-Posta *", en: "Email *" })}</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="phone">{t(params.lang, { tr: "Telefon", en: "Phone" })}</label>
              <input id="phone" name="phone" type="tel" />
            </div>
            <div className="field">
              <label htmlFor="type">{t(params.lang, { tr: "Proje Turu", en: "Project Type" })}</label>
              <select id="type" name="type">
                <option value="cinema">{t(params.lang, { tr: "Sinema", en: "Cinema" })}</option>
                <option value="theatre">{t(params.lang, { tr: "Tiyatro", en: "Theatre" })}</option>
                <option value="other">{t(params.lang, { tr: "Diger", en: "Other" })}</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="title">{t(params.lang, { tr: "Proje Basligi", en: "Project Title" })}</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="field">
              <label htmlFor="budget">{t(params.lang, { tr: "Butce", en: "Budget" })}</label>
              <input id="budget" name="budget" type="text" placeholder={t(params.lang, { tr: "Opsiyonel", en: "Optional" })} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="description">{t(params.lang, { tr: "Proje Aciklamasi *", en: "Project Description *" })}</label>
            <textarea id="description" name="description" required />
          </div>
          <div className="field">
            <label htmlFor="file">{t(params.lang, { tr: "Dosya Yukle", en: "Upload File" })}</label>
            <input id="file" name="file" type="file" />
          </div>
          <div className="field checkbox">
            <input id="kvkk" name="kvkk" type="checkbox" required />
            <label htmlFor="kvkk">
              {t(params.lang, {
                tr: "KVKK aydinlatma metnini okudum ve kabul ediyorum.",
                en: "I have read and accept the privacy notice.",
              })}{" "}
              <Link className="nav-link" href={nav.kvkk}>
                {t(params.lang, { tr: "KVKK Metni", en: "Privacy Notice" })}
              </Link>
            </label>
          </div>
          <button type="submit">{t(params.lang, { tr: "Basvuru Gonder", en: "Submit Application" })}</button>
          {submitted ? (
            <p className="muted">
              {t(params.lang, { tr: "Tesekkurler! En kisa surede donus yapacagiz.", en: "Thank you! We will get back to you shortly." })}
            </p>
          ) : null}
        </form>
      </Container>
    </main>
  );
}
