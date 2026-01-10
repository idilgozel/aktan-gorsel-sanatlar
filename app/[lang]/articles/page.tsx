import Container from "../../../components/Container";
import { pages } from "../../../content/pages";
import { Lang, t } from "../../../lib/i18n";
import { fetchAllArticles, getAuthorUrl, HalkTvArticle } from "../../../lib/halktv";

export default async function ArticlesPage({ params }: { params: { lang: Lang } }) {
  let articles: HalkTvArticle[] = [];
  let failed = false;

  try {
    articles = await fetchAllArticles();
  } catch (error) {
    failed = true;
  }

  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, pages.articles.heading)}</h1>
        {pages.articles.subheading ? <p className="muted">{t(params.lang, pages.articles.subheading)}</p> : null}
        <p className="muted">{t(params.lang, pages.articles.sourceLabel)}</p>
        {failed || articles.length === 0 ? (
          <div className="card" style={{ marginTop: 24 }}>
            <p className="muted">{t(params.lang, pages.articles.fallback)}</p>
            <a className="button button-secondary" href={getAuthorUrl()} target="_blank" rel="noopener noreferrer">
              HalkTV
            </a>
          </div>
        ) : (
          <div className="list articles-list" style={{ marginTop: 24 }}>
            {articles.map((article) => (
              <article key={article.url} className="article-item">
                <div>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <strong>{article.title}</strong>
                  </a>
                  {article.publishedText ? <p className="muted">{article.publishedText}</p> : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
