import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container";
import GalleryReel from "../../components/GalleryReel";
import { galleryItems } from "../../content/gallery";
import { projects } from "../../content/projects";
import { pages } from "../../content/pages";
import { site } from "../../content/site";
import { Lang, t } from "../../lib/i18n";
import { fetchLatestArticles, getAuthorUrl, HalkTvArticle } from "../../lib/halktv";
import { routes } from "../../lib/routes";

export default async function LangHome({ params }: { params: { lang: Lang } }) {
  const nav = routes(params.lang);
  const localGalleryItems = galleryItems.filter((item) => item.src.startsWith("/gallery/"));
  const heroImage = localGalleryItems[0] ?? galleryItems[0];
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const featuredImage = localGalleryItems[1] ?? localGalleryItems[0] ?? galleryItems[0];
  const reelItems = (localGalleryItems.length > 0 ? localGalleryItems : galleryItems).slice(0, 12);

  const latestLabels = {
    heading: { tr: "Son Yazılar", en: "Latest Articles" },
    viewAll: { tr: "Tümünü Gör", en: "View all" },
    featured: { tr: "Seçili Proje", en: "Featured Work" },
    reel: { tr: "Galeri Akışı", en: "Gallery Reel" },
    scroll: { tr: "Kaydır", en: "Scroll" },
    source: { tr: "Kaynak: HalkTV", en: "Source: HalkTV" },
    fallback: {
      tr: "Yazılar şu anda yüklenemiyor. Lütfen HalkTV sayfasını ziyaret edin.",
      en: "Articles are unavailable right now. Please visit the HalkTV page.",
    },
  };

  let latestArticles: HalkTvArticle[] = [];
  let articlesFailed = false;

  try {
    latestArticles = await fetchLatestArticles(3);
  } catch (error) {
    articlesFailed = true;
  }

  return (
    <main>
      <section className="hero-bleed">
        {heroImage ? (
          <div className="hero-media">
            {heroImage.src.startsWith("/") ? (
              <Image src={heroImage.src} alt={t(params.lang, heroImage.alt)} fill priority sizes="100vw" />
            ) : (
              <img src={heroImage.src} alt={t(params.lang, heroImage.alt)} />
            )}
          </div>
        ) : null}
        <div className="hero-overlay" aria-hidden="true" />
        <Container>
          <div className="hero-content">
            <span className="hero-kicker">{t(params.lang, pages.home.eyebrow)}</span>
            <h1 className="hero-title">{site.brandName}</h1>
            <p className="hero-subtitle">{t(params.lang, site.tagline)}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={nav.contact}>
                {t(params.lang, pages.home.ctaPrimary)}
              </Link>
              <Link className="button button-secondary" href={nav.projects}>
                {t(params.lang, pages.home.ctaSecondary)}
              </Link>
            </div>
            <div className="hero-meta">
              <span>{t(params.lang, pages.home.metrics.years)} · 12+</span>
              <span>{t(params.lang, pages.home.metrics.projects)} · 50+</span>
            </div>
            <span className="hero-scroll">{t(params.lang, latestLabels.scroll)}</span>
          </div>
        </Container>
      </section>

      <Container>
        <section className="page-section featured-work">
          <div className="section-heading section-heading-row">
            <h2 className="section-title">{t(params.lang, latestLabels.featured)}</h2>
            <Link className="text-link" href={nav.projects}>
              {t(params.lang, pages.home.ctaSecondary)}
            </Link>
          </div>
          {featuredProject ? (
            <article className="featured-work-card">
              <div className="featured-work-media">
                {featuredImage ? (
                  featuredImage.src.startsWith("/") ? (
                    <Image src={featuredImage.src} alt={t(params.lang, featuredImage.alt)} fill sizes="50vw" />
                  ) : (
                    <img src={featuredImage.src} alt={t(params.lang, featuredImage.alt)} />
                  )
                ) : null}
              </div>
              <div className="featured-work-content">
                <span className="featured-work-tag">
                  {featuredProject.year} · {t(params.lang, featuredProject.type)}
                </span>
                <h3>{t(params.lang, featuredProject.title)}</h3>
                <div className="badge-row">
                  <span className="badge">{t(params.lang, featuredProject.role)}</span>
                  <span className="badge badge-outline">{featuredProject.year}</span>
                </div>
                <p className="muted">{t(params.lang, featuredProject.shortDescription)}</p>
                <div className="button-row">
                  {featuredProject.trailer ? (
                    <a
                      className="button button-secondary"
                      href={featuredProject.trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(params.lang, { tr: "Fragmanı İzle", en: "Watch Trailer" })}
                    </a>
                  ) : null}
                  {featuredProject.links.map((link) => (
                    <a
                      key={link.url}
                      className="button button-outline"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ) : null}
        </section>

        <section className="page-section gallery-reel">
          <div className="section-heading section-heading-row">
            <h2 className="section-title">{t(params.lang, latestLabels.reel)}</h2>
            <Link className="text-link" href={nav.gallery}>
              {t(params.lang, pages.home.gallery.heading)}
            </Link>
          </div>
          <GalleryReel
            items={reelItems.map((item) => ({
              src: item.src,
              alt: t(params.lang, item.alt),
            }))}
            lang={params.lang}
            hrefOnClick={nav.gallery}
          />
        </section>

        <section className="page-section latest-articles">
          <div className="section-heading section-heading-row">
            <h2 className="section-title">{t(params.lang, latestLabels.heading)}</h2>
            <Link className="text-link" href={nav.articles}>
              {t(params.lang, latestLabels.viewAll)}
            </Link>
          </div>
          {latestArticles.length > 0 && !articlesFailed ? (
            <div className="latest-articles-list">
              {latestArticles.map((article) => (
                <article key={article.url} className="latest-article">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <strong>{article.title}</strong>
                  </a>
                  {article.publishedText ? <span className="muted">{article.publishedText}</span> : null}
                </article>
              ))}
            </div>
          ) : (
            <p className="muted">
              {t(params.lang, latestLabels.fallback)}{" "}
              <a href={getAuthorUrl()} target="_blank" rel="noopener noreferrer">
                HalkTV
              </a>
              .
            </p>
          )}
          <p className="muted latest-articles-source">
            {t(params.lang, latestLabels.source)} ·{" "}
            <a href={getAuthorUrl()} target="_blank" rel="noopener noreferrer">
              HalkTV
            </a>
          </p>
        </section>
      </Container>
    </main>
  );
}
