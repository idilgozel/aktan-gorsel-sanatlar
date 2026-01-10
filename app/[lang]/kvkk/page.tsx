import Container from "../../../components/Container";
import { pages } from "../../../content/pages";
import { Lang, t } from "../../../lib/i18n";

export default function KvkkPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, pages.kvkk.heading)}</h1>
        <div className="card" style={{ marginTop: 24 }}>
          <p className="muted">{t(params.lang, pages.kvkk.body)}</p>
        </div>
      </Container>
    </main>
  );
}
