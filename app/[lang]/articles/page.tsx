import Container from "../../../components/Container";
import { Lang, t } from "../../../lib/i18n";

const articles = [
  { title: "HalkTV Interview", source: "External", year: "2024" },
  { title: "Creative Industry Talk", source: "External", year: "2023" },
  { title: "Behind the Stage", source: "External", year: "2022" },
];

export default function ArticlesPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, { tr: "Yazilar", en: "Articles" })}</h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Gelecekte dis baglantilar burada listelenecek.",
            en: "External links will be listed here in the future.",
          })}
        </p>
        <div className="list" style={{ marginTop: 24 }}>
          {articles.map((article) => (
            <div key={article.title} className="article-item">
              <div>
                <strong>{article.title}</strong>
                <p className="muted">{article.source}</p>
              </div>
              <span className="muted">{article.year}</span>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
