import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://burmeister-webdesign.com";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
  lastmod?: string;
}

const TODAY = new Date().toISOString().split("T")[0];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const deEntries: SitemapEntry[] = [
          { path: "/",            changefreq: "monthly", priority: "1.0", lastmod: TODAY },
          { path: "/leistungen",  changefreq: "monthly", priority: "0.9", lastmod: TODAY },
          { path: "/preise",      changefreq: "monthly", priority: "0.9", lastmod: TODAY },
          { path: "/kontakt",     changefreq: "yearly",  priority: "0.8", lastmod: TODAY },
          { path: "/referenzen",  changefreq: "monthly", priority: "0.7", lastmod: TODAY },
          { path: "/ablauf",      changefreq: "monthly", priority: "0.7", lastmod: TODAY },
          { path: "/ueber-mich",  changefreq: "yearly",  priority: "0.6", lastmod: TODAY },
          { path: "/ratgeber",    changefreq: "weekly",  priority: "0.7", lastmod: TODAY },
          { path: "/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
          { path: "/ratgeber/website-relaunch-kosten-leipzig", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
          { path: "/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
          // Pro Ratgeber-Artikel ergänzt scripts/import-ratgeber-article.mjs
          // hier automatisch einen weiteren Eintrag.
        ];

        // Jede deutsche Seite hat unter /en/* ein englisches Gegenstück.
        const entries: SitemapEntry[] = deEntries.flatMap((e) => [
          e,
          { ...e, path: e.path === "/" ? "/en" : `/en${e.path}` },
        ]);

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod    ? `    <lastmod>${e.lastmod}</lastmod>`         : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority   ? `    <priority>${e.priority}</priority>`       : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});