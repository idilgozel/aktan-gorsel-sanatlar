import Container from "../../../components/Container";
import { Lang, t } from "../../../lib/i18n";

export default function KvkkPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, { tr: "KVKK", en: "Privacy Notice" })}</h1>
        <div className="card" style={{ marginTop: 24 }}>
          <p className="muted">
            {t(params.lang, {
              tr: "Bu alan, KVKK aydinlatma metni icin ayrilmistir. Veri sorumlusu, veri isleme amaci, saklama suresi ve basvuru kanallari gibi bilgiler burada yer alacaktir.",
              en: "This section is reserved for the privacy notice. Details about data controller, processing purposes, retention period, and contact channels will be placed here.",
            })}
          </p>
        </div>
      </Container>
    </main>
  );
}
