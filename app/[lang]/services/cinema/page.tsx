import Container from "../../../../components/Container";
import { Lang, t } from "../../../../lib/i18n";

export default function CinemaPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, { tr: "Sinema", en: "Cinema" })}</h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Marka filmleri, kurumsal belgeseller ve gorsel hikaye anlatımı odakli yapım hizmetleri.",
            en: "Production services focused on brand films, corporate documentaries, and visual storytelling.",
          })}
        </p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {[
            t(params.lang, { tr: "Proje gelistirme ve senaryo destegi", en: "Project development and script support" }),
            t(params.lang, { tr: "Cekim planlama ve set yonetimi", en: "Shooting planning and set management" }),
            t(params.lang, { tr: "Kurgu, renk, ses ve teslim", en: "Editing, color, sound, and delivery" }),
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
