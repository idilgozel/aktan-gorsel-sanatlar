import Container from "../../../components/Container";
import { Lang, t } from "../../../lib/i18n";

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">
          {t(params.lang, { tr: "Biz Kimiz", en: "About" })}
        </h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Aktan Gorsel Sanatlar, kurumsal projeler icin sinema ve tiyatro odakli yaratıcı iletisim stüdyosudur.",
            en: "Aktan Visual Arts is a creative studio focused on cinema and theatre for corporate projects.",
          })}
        </p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {[
            t(params.lang, {
              tr: "Yaratıcı vizyonu kurum kimligiyle bulusturuyoruz.",
              en: "We align creative vision with corporate identity.",
            }),
            t(params.lang, {
              tr: "Kapsamli proje yonetimi ve sahneleme deneyimi sunuyoruz.",
              en: "We deliver end-to-end project management and staging experience.",
            }),
            t(params.lang, {
              tr: "Her projede hikaye anlatimini merkeze aliyoruz.",
              en: "We place storytelling at the core of every project.",
            }),
          ].map((text) => (
            <div key={text} className="card">
              <p className="muted">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
