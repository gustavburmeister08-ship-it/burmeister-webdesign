/**
 * scripts/generate-sitemap.mjs
 *
 * Erzeugt zur Build-Zeit eine statische public/sitemap.xml.
 * Statische Dateien werden von Cloudflare Pages direkt vom CDN ausgeliefert
 * (kein Worker-Umweg) – garantiert erreichbar fuer Google Search Console.
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root      = resolve(__dirname, "..");

const BASE_URL = "https://burmeister-webdesign.com";
const TODAY    = new Date().toISOString().split("T")[0];

const DE_ENTRIES = [
  { path: "/",           changefreq: "monthly", priority: "1.0" },
  { path: "/leistungen", changefreq: "monthly", priority: "0.9" },
  { path: "/preise",     changefreq: "monthly", priority: "0.9" },
  { path: "/kontakt",    changefreq: "yearly",  priority: "0.8" },
  { path: "/referenzen", changefreq: "monthly", priority: "0.7" },
  { path: "/ablauf",     changefreq: "monthly", priority: "0.7" },
  { path: "/ueber-mich", changefreq: "yearly",  priority: "0.6" },
  { path: "/ratgeber",   changefreq: "weekly",  priority: "0.7" },
  { path: "/tools", changefreq: "monthly", priority: "0.8", deOnly: true },
  { path: "/tools/website-kostenrechner", changefreq: "monthly", priority: "0.8", deOnly: true },
  { path: "/tools/seo-check", changefreq: "monthly", priority: "0.8", deOnly: true },
  { path: "/tools/google-bewertungslink-generator", changefreq: "monthly", priority: "0.8", deOnly: true },
  { path: "/tools/local-seo-check", changefreq: "monthly", priority: "0.8", deOnly: true },
  { path: "/tools/datenschutz-check", changefreq: "monthly", priority: "0.8", deOnly: true },
    { path: "/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen", changefreq: "monthly", priority: "0.6" },
    { path: "/ratgeber/website-relaunch-kosten-leipzig", changefreq: "monthly", priority: "0.6" },
    { path: "/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen", changefreq: "monthly", priority: "0.6" },
  // Pro Ratgeber-Artikel ergänzt scripts/import-ratgeber-article.mjs hier
  // automatisch einen weiteren Eintrag (changefreq: monthly, priority: 0.6).
];

// Jede deutsche Seite hat unter /en/* ein englisches Gegenstück (gleiche
// Priorität/Changefreq, "/" wird zu "/en").
const ENTRIES = DE_ENTRIES.flatMap((e) => e.deOnly ? [e] : [
  e,
  { ...e, path: e.path === "/" ? "/en" : `/en${e.path}` },
]);

const urls = ENTRIES.map(e => [
  `  <url>`,
  `    <loc>${BASE_URL}${e.path}</loc>`,
  `    <lastmod>${TODAY}</lastmod>`,
  `    <changefreq>${e.changefreq}</changefreq>`,
  `    <priority>${e.priority}</priority>`,
  `  </url>`,
].join("\n")).join("\n");

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  urls,
  `</urlset>`,
].join("\n") + "\n";

const outPath = resolve(root, "public/sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`[generate-sitemap] ✓  public/sitemap.xml (${ENTRIES.length} URLs, Stand ${TODAY})`);
