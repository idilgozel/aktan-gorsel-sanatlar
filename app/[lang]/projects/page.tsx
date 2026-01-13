import Container from "../../../components/Container";
import { pages } from "../../../content/pages";
import { projects } from "../../../content/projects";
import { Lang, t } from "../../../lib/i18n";

export default function ProjectsPage({ params }: { params: { lang: Lang } }) {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => project.id !== featuredProject?.id);
  const labels = {
    featured: { tr: "Öne Çıkan Proje", en: "Featured Project" },
    role: { tr: "Rol", en: "Role" },
    press: { tr: "Basın", en: "Press" },
    watch: { tr: "Videoyu İzle", en: "Watch Video" },
  };
  const projectLabels = pages.projects.labels ?? {
    year: { tr: "Yıl", en: "Year" },
    type: { tr: "Tür", en: "Type" },
  };

  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, pages.projects.heading)}</h1>
        {pages.projects.subheading ? <p className="muted">{t(params.lang, pages.projects.subheading)}</p> : null}
        {featuredProject ? (
          <section className="featured-project">
            <div className="featured-project-content">
              <p className="featured-eyebrow">{t(params.lang, labels.featured)}</p>
              <h2 className="featured-title">{t(params.lang, featuredProject.title)}</h2>
              <div className="badge-row">
                <span className="badge">{t(params.lang, featuredProject.role)}</span>
                <span className="badge badge-outline">{featuredProject.year}</span>
                <span className="badge badge-outline">{t(params.lang, featuredProject.type)}</span>
              </div>
              <p className="muted">{t(params.lang, featuredProject.shortDescription)}</p>
              {featuredProject.note ? <p className="featured-note">“{t(params.lang, featuredProject.note)}”</p> : null}
              <div className="button-row">
                {featuredProject.trailer ? (
                  <a
                    className="button button-secondary"
                    href={featuredProject.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(params.lang, labels.watch)}
                  </a>
                ) : null}
                {featuredProject.links.map((link) => (
                  <a
                    key={link.url}
                    className="button button-outline"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="featured-project-card">
              <h3 className="section-title">{t(params.lang, labels.press)}</h3>
              <div className="press-list">
                {featuredProject.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.source}
                  </a>
                ))}
              </div>
              <div className="meta-list">
                <div>
                  <span className="meta-label">{t(params.lang, projectLabels.year)}</span>
                  <strong>{featuredProject.year}</strong>
                </div>
                <div>
                  <span className="meta-label">{t(params.lang, projectLabels.type)}</span>
                  <strong>{t(params.lang, featuredProject.type)}</strong>
                </div>
                <div>
                  <span className="meta-label">{t(params.lang, labels.role)}</span>
                  <strong>{t(params.lang, featuredProject.role)}</strong>
                </div>
              </div>
            </div>
          </section>
        ) : null}
        <div className="card-grid" style={{ marginTop: 24 }}>
          {otherProjects.map((project) => (
            <article key={project.id} className="card">
              <h2 className="section-title">{t(params.lang, project.title)}</h2>
              <p className="muted">
                {t(params.lang, projectLabels.year)}: {project.year}
              </p>
              <p className="muted">
                {t(params.lang, projectLabels.type)}: {t(params.lang, project.type)}
              </p>
              <p className="muted">
                {t(params.lang, labels.role)}: {t(params.lang, project.role)}
              </p>
              <p className="muted">{t(params.lang, project.shortDescription)}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
