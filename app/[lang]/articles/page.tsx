import Container from "../../../components/Container";
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
        <h1 className="section-title">{t(params.lang, { tr: "Yazilar", en: "Articles" })}</h1>
        <p className="muted">
          {t(params.lang, {
            tr: "HalkTV yazarlik sayfasindaki tum yazilar listelenir.",
            en: "All articles from the HalkTV author page are listed here.",
          })}
        </p>
        {failed || articles.length === 0 ? (
          <div className="card" style={{ marginTop: 24 }}>
            <p className="muted">
              {t(params.lang, {
                tr: "Yazilar su an alinmiyor. HalkTV sayfasini ziyaret edebilirsiniz.",
                en: "Articles could not be fetched right now. Please visit the HalkTV page.",
              })}
            </p>
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
