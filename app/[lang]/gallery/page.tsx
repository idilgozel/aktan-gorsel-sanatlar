import Image from "next/image";
import Container from "../../../components/Container";
import { galleryItems } from "../../../content/gallery";
import { pages } from "../../../content/pages";
import { Lang, t } from "../../../lib/i18n";

export default function GalleryPage({ params }: { params: { lang: Lang } }) {
  const featuredItem = galleryItems.find((item) => item.featured) ?? galleryItems[0];
  const otherItems = galleryItems.filter((item) => item.id !== featuredItem?.id);
  const isRemote = (src: string) => src.startsWith("http");
  const renderMedia = (item: typeof galleryItems[number]) =>
    isRemote(item.src) ? (
      <img src={item.src} alt={t(params.lang, item.alt)} />
    ) : (
      <Image
        src={item.src}
        alt={t(params.lang, item.alt)}
        fill
        sizes="(max-width: 720px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    );

  return (
    <main>
      <Container>
        <h1 className="section-title">{t(params.lang, pages.gallery.heading)}</h1>
        {pages.gallery.subheading ? <p className="muted">{t(params.lang, pages.gallery.subheading)}</p> : null}
        {featuredItem ? (
          <section className="gallery-featured">
            {featuredItem.href ? (
              <a
                className="gallery-featured-tile"
                href={featuredItem.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="gallery-media">{renderMedia(featuredItem)}</div>
                <div className="gallery-overlay">
                  <span className="gallery-label">{t(params.lang, featuredItem.label)}</span>
                  {featuredItem.title ? (
                    <h2 className="gallery-title">{t(params.lang, featuredItem.title)}</h2>
                  ) : null}
                </div>
              </a>
            ) : (
              <div className="gallery-featured-tile">
                <div className="gallery-media">{renderMedia(featuredItem)}</div>
                <div className="gallery-overlay">
                  <span className="gallery-label">{t(params.lang, featuredItem.label)}</span>
                  {featuredItem.title ? (
                    <h2 className="gallery-title">{t(params.lang, featuredItem.title)}</h2>
                  ) : null}
                </div>
              </div>
            )}
          </section>
        ) : null}
        <div className="gallery-grid" style={{ marginTop: 24 }}>
          {otherItems.map((item) => (
            <a
              key={item.id}
              className="gallery-tile"
              href={item.href ?? item.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gallery-media">{renderMedia(item)}</div>
              <div className="gallery-caption">{t(params.lang, item.label)}</div>
            </a>
          ))}
        </div>
      </Container>
    </main>
  );
}
