import Container from "../../../components/Container";
import { galleryItems } from "../../../content/gallery";
import { pages } from "../../../content/pages";
import { Lang, t } from "../../../lib/i18n";

export default function GalleryPage({ params }: { params: { lang: Lang } }) {
  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, pages.gallery.heading)}</h1>
        {pages.gallery.subheading ? <p className="muted">{t(params.lang, pages.gallery.subheading)}</p> : null}
        <div className="gallery-grid" style={{ marginTop: 24 }}>
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-tile" aria-label={t(params.lang, item.alt)} />
          ))}
        </div>
      </Container>
    </main>
  );
}
