import Container from "../../../components/Container";
import { Lang, t } from "../../../lib/i18n";

export default function GalleryPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, { tr: "Galeri", en: "Gallery" })}</h1>
        <p className="muted">
          {t(params.lang, {
            tr: "Yakinda fotograflar ve sahne goruntu arsivi burada olacak.",
            en: "Photography and stage visuals archive will live here soon.",
          })}
        </p>
        <div className="gallery-grid" style={{ marginTop: 24 }}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="gallery-tile" />
          ))}
        </div>
      </Container>
    </main>
  );
}
