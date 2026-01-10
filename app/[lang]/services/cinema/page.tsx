import Container from "../../../../components/Container";
import { services } from "../../../../content/services";
import { Lang, t } from "../../../../lib/i18n";

export default function CinemaPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, services.cinema.heading)}</h1>
        <p className="muted">{t(params.lang, services.cinema.description)}</p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {services.cinema.bullets.map((item) => (
            <div key={item.tr} className="card">
              <p className="muted">{t(params.lang, item)}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
