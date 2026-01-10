import Container from "../../../components/Container";
import NavLink from "../../../components/NavLink";
import { pages } from "../../../content/pages";
import { services } from "../../../content/services";
import { Lang, t } from "../../../lib/i18n";
import { routes } from "../../../lib/routes";

export default function ServicesPage({ params }: { params: { lang: Lang } }) {
  const nav = routes(params.lang);

  return (
    <main>
      <Container>
        <h1 className="section-title">
          {t(params.lang, pages.services.heading)}
        </h1>
        <p className="muted">{t(params.lang, services.overview)}</p>
        <div className="card-grid" style={{ marginTop: 24 }}>
          <div className="card">
            <h2 className="section-title">{t(params.lang, services.cinema.heading)}</h2>
            <p className="muted">{t(params.lang, services.cinema.description)}</p>
            <NavLink href={nav.servicesCinema} label={t(params.lang, pages.services.detailsLabel)} />
          </div>
          <div className="card">
            <h2 className="section-title">{t(params.lang, services.theatre.heading)}</h2>
            <p className="muted">{t(params.lang, services.theatre.description)}</p>
            <NavLink href={nav.servicesTheatre} label={t(params.lang, pages.services.detailsLabel)} />
          </div>
          <div className="card">
            <h2 className="section-title">{t(params.lang, services.consulting.heading)}</h2>
            <p className="muted">{t(params.lang, services.consulting.description)}</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
