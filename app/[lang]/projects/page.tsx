import Container from "../../../components/Container";
import { pages } from "../../../content/pages";
import { projects } from "../../../content/projects";
import { Lang, t } from "../../../lib/i18n";

export default function ProjectsPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, pages.projects.heading)}</h1>
        {pages.projects.subheading ? <p className="muted">{t(params.lang, pages.projects.subheading)}</p> : null}
        <div className="card-grid" style={{ marginTop: 24 }}>
          {projects.map((project) => (
            <article key={project.id} className="card">
              <h2 className="section-title">{t(params.lang, project.title)}</h2>
              <p className="muted">
                {t(params.lang, pages.projects.labels.year)}: {project.year}
              </p>
              <p className="muted">
                {t(params.lang, pages.projects.labels.type)}: {t(params.lang, project.type)}
              </p>
              <p className="muted">{t(params.lang, project.shortDescription)}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
