import Container from "../../../components/Container";
import { Lang, t } from "../../../lib/i18n";

const projects = [
  { title: "Project 1", year: "2023", type: "Film" },
  { title: "Project 2", year: "2022", type: "Stage" },
  { title: "Project 3", year: "2021", type: "Brand" },
];

export default function ProjectsPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, { tr: "Projeler", en: "Projects" })}</h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Secilmis calismalarimizdan ornekler.",
            en: "Selected highlights from our collaborations.",
          })}
        </p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h2 className="section-title">{project.title}</h2>
              <p className="muted">{t(params.lang, { tr: "Yil", en: "Year" })}: {project.year}</p>
              <p className="muted">{t(params.lang, { tr: "Tur", en: "Type" })}: {project.type}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
