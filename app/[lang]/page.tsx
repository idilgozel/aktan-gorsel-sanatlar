import Link from "next/link";
import Container from "../../components/Container";
import { Lang, t } from "../../lib/i18n";
import { routes } from "../../lib/routes";

export default function LangHome({ params }: { params: { lang: Lang } }) {
  const nav = routes(params.lang);

  return (
    <main>
      <Container>
        <section className="hero">
          <div>
            <p className="hero-eyebrow">
              {t(params.lang, {
                tr: "Kurumsal yaratici ortakliklar icin butik bir gorsel sanatlar stüdyosu.",
                en: "A boutique visual arts studio for corporate creative partnerships.",
              })}
            </p>
            <h1>Aktan Gorsel Sanatlar</h1>
            <p className="hero-body">
              {t(params.lang, {
                tr: "Sinema ve tiyatro odakli yapim, sahneleme ve gorsel anlatim projeleri uretiyoruz.",
                en: "We craft cinema and theatre projects focused on production, staging, and visual storytelling.",
              })}
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href={nav.contact}>
                {t(params.lang, { tr: "Proje Basvurusu", en: "Project Application" })}
              </Link>
              <Link className="button button-secondary" href={nav.projects}>
                {t(params.lang, { tr: "Projeleri Gor", en: "View Projects" })}
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <h2 className="section-title">{t(params.lang, { tr: "Odak", en: "Focus" })}</h2>
            <p className="muted">
              {t(params.lang, {
                tr: "Markalar icin sahne, film ve kurumsal hikaye anlatimini tek cati altinda topluyoruz.",
                en: "We bring stage, film, and corporate storytelling together under one roof.",
              })}
            </p>
            <div className="hero-metrics">
              <div>
                <strong>12+</strong>
                <span>{t(params.lang, { tr: "Yillik Deneyim", en: "Years Experience" })}</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>{t(params.lang, { tr: "Proje", en: "Projects" })}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="section-heading">
            <h2 className="section-title">{t(params.lang, { tr: "Secili Projeler", en: "Featured Projects" })}</h2>
            <p className="muted">
              {t(params.lang, {
                tr: "Kurumlar icin urettigimiz sinema ve sahne calismalarindan ornekler.",
                en: "Examples from our cinema and stage collaborations.",
              })}
            </p>
          </div>
          <div className="card-grid">
            {["Project 1", "Project 2", "Project 3"].map((title) => (
              <article key={title} className="card project-card">
                <span className="project-tag">{t(params.lang, { tr: "2024 · Kurumsal", en: "2024 · Corporate" })}</span>
                <h3>{title}</h3>
                <p className="muted">
                  {t(params.lang, {
                    tr: "Kisa bir proje aciklamasi icin yer tutucu metin.",
                    en: "Short placeholder summary for the featured project.",
                  })}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="section-heading">
            <h2 className="section-title">{t(params.lang, { tr: "Galeri", en: "Gallery" })}</h2>
            <p className="muted">
              {t(params.lang, {
                tr: "Sahne ve set arkasi gorseller icin yer tutucu galeri.",
                en: "Placeholder gallery for stage and behind-the-scenes visuals.",
              })}
            </p>
          </div>
          <div className="gallery-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="gallery-tile" />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
