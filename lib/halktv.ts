import * as cheerio from "cheerio";

const BASE_URL = "https://halktv.com.tr/yazar/aytun-aktan-33700";

export type HalkTvArticle = {
  title: string;
  url: string;
  publishedText: string;
};

export async function fetchAuthorPage(page: number) {
  const url = page <= 1 ? BASE_URL : `${BASE_URL}?page=${page}`;
  const response = await fetch(url, { next: { revalidate: 21600 } });

  if (!response.ok) {
    throw new Error(`Failed to fetch HalkTV author page: ${response.status}`);
  }

  return response.text();
}

function toAbsoluteUrl(href: string) {
  if (href.startsWith("http")) {
    return href;
  }
  return `https://halktv.com.tr${href}`;
}

export function parseArticles(html: string) {
  const $ = cheerio.load(html);
  const results: HalkTvArticle[] = [];

  $(".item").each((_, element) => {
    const container = $(element);
    const link = container.find('a[href*="/makale/"]').first();
    const title = link.text().trim();
    const href = link.attr("href");
    const publishedText =
      container.find("time").first().text().trim() ||
      container.find(".date, .news-date, .card-date").first().text().trim();

    if (title && href) {
      results.push({
        title,
        url: toAbsoluteUrl(href),
        publishedText,
      });
    }
  });

  if (results.length > 0) {
    return results;
  }

  $("a[href*='/makale/']").each((_, element) => {
    const link = $(element);
    const title = link.text().trim();
    const href = link.attr("href");
    if (!title || !href) {
      return;
    }

    const container = link.closest(".item").length ? link.closest(".item") : link.parent();
    const publishedText =
      container.find("time").first().text().trim() ||
      container.find(".date, .news-date, .card-date").first().text().trim();

    results.push({
      title,
      url: toAbsoluteUrl(href),
      publishedText,
    });
  });

  return results;
}

export async function fetchAllArticles() {
  const articles: HalkTvArticle[] = [];
  const seen = new Set<string>();
  let previousFirstUrl: string | null = null;

  for (let page = 1; page <= 20; page += 1) {
    const html = await fetchAuthorPage(page);
    const pageItems = parseArticles(html);

    if (pageItems.length === 0) {
      break;
    }

    const currentFirstUrl = pageItems[0]?.url;
    if (currentFirstUrl && currentFirstUrl === previousFirstUrl) {
      break;
    }

    let added = 0;
    for (const item of pageItems) {
      if (!seen.has(item.url)) {
        seen.add(item.url);
        articles.push(item);
        added += 1;
      }
    }

    if (added === 0) {
      break;
    }

    previousFirstUrl = currentFirstUrl ?? previousFirstUrl;
  }

  return articles;
}

export function getAuthorUrl() {
  return BASE_URL;
}
