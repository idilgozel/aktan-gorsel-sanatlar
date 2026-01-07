import Container from "../../components/Container";
import { Lang, t } from "../../lib/i18n";

export default function LangHome({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <section className="hero">
          <div>
            <p className="muted">
              {t(params.lang, {
                tr: "Kurumsal yaratıcı ortaklıklar icin butik bir gorsel sanatlar stüdyosu.",
                en: "A boutique visual arts studio for corporate creative partnerships.",
              })}
            </p>
            <h1>Aktan Gorsel Sanatlar</h1>
          </div>
          <div className="card">
            <p className="muted">
              {t(params.lang, {
                tr: "Sinema ve tiyatro odakli yapım, sahneleme ve gorsel anlatım projeleri.",
                en: "Cinema and theatre focused production, staging, and visual storytelling projects.",
              })}
            </p>
          </div>
        </section>
        <section className="card-grid">
          {[
            {
              title: t(params.lang, { tr: "Strateji", en: "Strategy" }),
              body: t(params.lang, {
                tr: "Marka ve proje vizyonunu netlestiren yaratıcı yonlendirme.",
                en: "Creative direction that clarifies brand and project vision.",
              }),
            },
            {
              title: t(params.lang, { tr: "Yapım", en: "Production" }),
              body: t(params.lang, {
                tr: "Sinema ve tiyatro icin kapsamli yapım planlama.",
                en: "End-to-end production planning for cinema and theatre.",
              }),
            },
            {
              title: t(params.lang, { tr: "Sahneleme", en: "Staging" }),
              body: t(params.lang, {
                tr: "Mekân ve sahne deneyimini kuran gorsel tasarim.",
                en: "Visual design that shapes spatial and stage experiences.",
              }),
            },
          ].map((item) => (
            <article key={item.title} className="card">
              <h2 className="section-title">{item.title}</h2>
              <p className="muted">{item.body}</p>
            </article>
          ))}
        </section>
      </Container>
    </main>
  );
}
