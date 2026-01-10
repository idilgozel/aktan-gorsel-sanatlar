import Link from "next/link";
import Container from "../../components/Container";
import { galleryItems } from "../../content/gallery";
import { projects } from "../../content/projects";
import { pages } from "../../content/pages";
import { site } from "../../content/site";
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
              {t(params.lang, pages.home.eyebrow)}
            </p>
            <h1>{site.brandName}</h1>
            <p className="hero-body">
              {t(params.lang, pages.home.heroBody)}
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href={nav.contact}>
                {t(params.lang, pages.home.ctaPrimary)}
              </Link>
              <Link className="button button-secondary" href={nav.projects}>
                {t(params.lang, pages.home.ctaSecondary)}
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <h2 className="section-title">{t(params.lang, pages.home.focusTitle)}</h2>
            <p className="muted">
              {t(params.lang, pages.home.focusBody)}
            </p>
            <div className="hero-metrics">
              <div>
                <strong>12+</strong>
                <span>{t(params.lang, pages.home.metrics.years)}</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>{t(params.lang, pages.home.metrics.projects)}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="section-heading">
            <h2 className="section-title">{t(params.lang, pages.home.featured.heading)}</h2>
            {pages.home.featured.subheading ? (
              <p className="muted">{t(params.lang, pages.home.featured.subheading)}</p>
            ) : null}
          </div>
          <div className="card-grid">
            {projects.slice(0, 3).map((project) => (
              <article key={project.id} className="card project-card">
                <span className="project-tag">
                  {project.year} · {t(params.lang, project.type)}
                </span>
                <h3>{t(params.lang, project.title)}</h3>
                <p className="muted">{t(params.lang, project.shortDescription)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section">
          <div className="section-heading">
            <h2 className="section-title">{t(params.lang, pages.home.gallery.heading)}</h2>
            {pages.home.gallery.subheading ? (
              <p className="muted">{t(params.lang, pages.home.gallery.subheading)}</p>
            ) : null}
          </div>
          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item) => (
              <div key={item.id} className="gallery-tile" aria-label={t(params.lang, item.alt)} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
