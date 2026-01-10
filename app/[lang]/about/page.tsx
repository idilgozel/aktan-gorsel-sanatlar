import Container from "../../../components/Container";
import { pages } from "../../../content/pages";
import { Lang, t } from "../../../lib/i18n";

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">
          {t(params.lang, pages.about.heading)}
        </h1>
        <p className="muted">{t(params.lang, pages.about.intro)}</p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {pages.about.bullets.map((text, index) => (
            <div key={`${index}-${text.tr}`} className="card">
              <p className="muted">{t(params.lang, text)}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
