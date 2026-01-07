import Container from "../../../../components/Container";
import { Lang, t } from "../../../../lib/i18n";

export default function TheatrePage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, { tr: "Tiyatro", en: "Theatre" })}</h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Sahneleme, dekor tasarimi ve performans odakli yaratıcı üretim.",
            en: "Creative production focused on staging, set design, and performance.",
          })}
        </p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {[
            t(params.lang, { tr: "Konsept ve sahne dili tasarimi", en: "Concept and stage language design" }),
            t(params.lang, { tr: "Teknik uygulama ve ekip koordinasyonu", en: "Technical implementation and crew coordination" }),
            t(params.lang, { tr: "Gorsel dramaturji ve provalar", en: "Visual dramaturgy and rehearsals" }),
          ].map((item) => (
            <div key={item} className="card">
              <p className="muted">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
