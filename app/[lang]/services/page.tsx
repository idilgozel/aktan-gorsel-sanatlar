import Container from "../../../components/Container";
import { Lang, t } from "../../../lib/i18n";
import { routes } from "../../../lib/routes";
import NavLink from "../../../components/NavLink";

export default function ServicesPage({ params }: { params: { lang: Lang } }) {
  const nav = routes(params.lang);

  return (
    <main>
      <Container>
        <h1 className="section-title">
          {t(params.lang, { tr: "Hizmetler", en: "Services" })}
        </h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Sinema ve tiyatro odakli, proje bazli yaratıcı hizmetler.",
            en: "Project-based creative services centered on cinema and theatre.",
          })}
        </p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          <div className="card">
            <h2 className="section-title">{t(params.lang, { tr: "Sinema", en: "Cinema" })}</h2>
            <p className="muted">
              {t(params.lang, {
                tr: "Kurumsal film, belgesel, marka hikayesi uretimi.",
                en: "Corporate films, documentaries, brand storytelling production.",
              })}
            </p>
            <NavLink href={nav.servicesCinema} label={t(params.lang, { tr: "Detaylar", en: "Details" })} />
          </div>
          <div className="card">
            <h2 className="section-title">{t(params.lang, { tr: "Tiyatro", en: "Theatre" })}</h2>
            <p className="muted">
              {t(params.lang, {
                tr: "Sahne tasarimi, konsept gelistirme, yapım koordinasyonu.",
                en: "Stage design, concept development, production coordination.",
              })}
            </p>
            <NavLink href={nav.servicesTheatre} label={t(params.lang, { tr: "Detaylar", en: "Details" })} />
          </div>
          <div className="card">
            <h2 className="section-title">{t(params.lang, { tr: "Danismanlik", en: "Consulting" })}</h2>
            <p className="muted">
              {t(params.lang, {
                tr: "Kurumsal iletisim projeleri icin yaratıcı strateji.",
                en: "Creative strategy for corporate communication projects.",
              })}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
