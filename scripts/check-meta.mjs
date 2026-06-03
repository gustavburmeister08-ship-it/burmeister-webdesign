#!/usr/bin/env node
/**
 * scripts/check-meta.mjs
 *
 * Prüft alle Seiten-Routen auf korrekte Meta-Tags, wie ein Crawler sie sieht.
 * Funktioniert gegen Dev-Server (npm run dev) oder Build-Preview (npm run preview).
 *
 * Nutzung:
 *   node scripts/check-meta.mjs               → http://localhost:8080
 *   node scripts/check-meta.mjs http://localhost:4173
 *   node scripts/check-meta.mjs https://burmeister-webdesign.de
 */

const BASE = (process.argv[2] ?? "http://localhost:8080").replace(/\/$/, "");

/** Alle Seiten inkl. erwarteter Mindest-/Maximal-Zeichenanzahl */
const ROUTES = [
  { path: "/",           label: "Startseite"  },
  { path: "/leistungen", label: "Leistungen"  },
  { path: "/referenzen", label: "Referenzen"  },
  { path: "/preise",     label: "Preise"      },
  { path: "/ablauf",     label: "Ablauf"      },
  { path: "/ueber-mich", label: "Über mich"   },
  { path: "/kontakt",    label: "Kontakt"     },
];

const TITLE_MIN = 50, TITLE_MAX = 60;
const DESC_MIN  = 145, DESC_MAX  = 160;

// ── ANSI-Farben ─────────────────────────────────────────────────────────────
const C = {
  red:    (s) => `\x1b[31m${s}\x1b[0m`,
  green:  (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  blue:   (s) => `\x1b[34m${s}\x1b[0m`,
  dim:    (s) => `\x1b[2m${s}\x1b[0m`,
  bold:   (s) => `\x1b[1m${s}\x1b[0m`,
};

function lenStatus(n, min, max) {
  if (n < min) return C.yellow(`${n} Zeichen  ← zu kurz  (min ${min})`);
  if (n > max) return C.red(   `${n} Zeichen  ← zu lang  (max ${max})`);
  return C.green(`${n} Zeichen  ✓`);
}

// ── HTML-Parser (ohne Dependency) ───────────────────────────────────────────
function extract(html, ...patterns) {
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return m[1].trim();
  }
  return null;
}

function parseMeta(html) {
  return {
    title:     extract(html,
                 /<title[^>]*>([\s\S]*?)<\/title>/i),
    desc:      extract(html,
                 /<meta\s[^>]*name=["']description["'][^>]*content=["']([^"']*?)["']/i,
                 /<meta\s[^>]*content=["']([^"']*?)["'][^>]*name=["']description["']/i),
    ogTitle:   extract(html,
                 /<meta\s[^>]*property=["']og:title["'][^>]*content=["']([^"']*?)["']/i,
                 /<meta\s[^>]*content=["']([^"']*?)["'][^>]*property=["']og:title["']/i),
    ogDesc:    extract(html,
                 /<meta\s[^>]*property=["']og:description["'][^>]*content=["']([^"']*?)["']/i,
                 /<meta\s[^>]*content=["']([^"']*?)["'][^>]*property=["']og:description["']/i),
    ogImage:   extract(html,
                 /<meta\s[^>]*property=["']og:image["'][^>]*content=["']([^"']*?)["']/i,
                 /<meta\s[^>]*content=["']([^"']*?)["'][^>]*property=["']og:image["']/i),
    canonical: extract(html,
                 /<link\s[^>]*rel=["']canonical["'][^>]*href=["']([^"']*?)["']/i,
                 /<link\s[^>]*href=["']([^"']*?)["'][^>]*rel=["']canonical["']/i),
    robots:    extract(html,
                 /<meta\s[^>]*name=["']robots["'][^>]*content=["']([^"']*?)["']/i),
    ldJson:    (html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) ?? [])
                 .map(s => {
                   try {
                     const inner = s.replace(/<script[^>]*>|<\/script>/gi, "").trim();
                     return JSON.parse(inner);
                   } catch { return null; }
                 }).filter(Boolean),
  };
}

// ── Route abrufen + parsen ───────────────────────────────────────────────────
async function checkRoute(route) {
  const url = BASE + route.path;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "MetaChecker/1.0 (+bot)" },
      signal: AbortSignal.timeout(12_000),
      redirect: "follow",
    });
    if (!res.ok) return { ...route, error: `HTTP ${res.status}` };
    const html = await res.text();
    return { ...route, ...parseMeta(html), statusCode: res.status };
  } catch (e) {
    return { ...route, error: e.message };
  }
}

// ── Report ausgeben ──────────────────────────────────────────────────────────
function printRoute(r) {
  const sep = C.dim("─".repeat(64));
  console.log(`\n${sep}`);
  console.log(C.bold(`  ${r.label}`) + C.dim(`  ${r.path}`));
  console.log(sep);

  if (r.error) {
    console.log(`  ${C.red("✗ Fehler:")} ${r.error}`);
    return 1;
  }

  let issues = 0;

  // <title>
  if (!r.title) {
    console.log(`  ${C.red("✗")} <title>       ${C.red("fehlt!")}`);
    issues++;
  } else {
    const flag = r.title.length < TITLE_MIN || r.title.length > TITLE_MAX;
    if (flag) issues++;
    console.log(`  ${flag ? C.yellow("⚠") : C.green("✓")} <title>       ${lenStatus(r.title.length, TITLE_MIN, TITLE_MAX)}`);
    console.log(`     ${C.dim(r.title)}`);
  }

  // description
  if (!r.desc) {
    console.log(`  ${C.red("✗")} description   ${C.red("fehlt!")}`);
    issues++;
  } else {
    const flag = r.desc.length < DESC_MIN || r.desc.length > DESC_MAX;
    if (flag) issues++;
    console.log(`  ${flag ? C.yellow("⚠") : C.green("✓")} description   ${lenStatus(r.desc.length, DESC_MIN, DESC_MAX)}`);
    console.log(`     ${C.dim(r.desc.slice(0, 90) + (r.desc.length > 90 ? "…" : ""))}`);
  }

  // OG-Tags
  const ogFields = [
    ["og:title",       r.ogTitle],
    ["og:description", r.ogDesc],
    ["og:image",       r.ogImage],
  ];
  for (const [name, val] of ogFields) {
    if (!val) {
      console.log(`  ${C.yellow("⚠")} ${name.padEnd(15)}${C.yellow("fehlt")}`);
      issues++;
    } else {
      const display = val.length > 60 ? val.slice(0, 57) + "…" : val;
      console.log(`  ${C.green("✓")} ${name.padEnd(15)}${C.dim(display)}`);
    }
  }

  // canonical
  if (!r.canonical) {
    console.log(`  ${C.yellow("⚠")} canonical      ${C.yellow("fehlt")}`);
    issues++;
  } else if (!r.canonical.startsWith("http")) {
    console.log(`  ${C.yellow("⚠")} canonical      ${C.yellow(`nicht absolut: ${r.canonical}`)}`);
    issues++;
  } else {
    console.log(`  ${C.green("✓")} canonical      ${C.dim(r.canonical)}`);
  }

  // robots
  if (r.robots) {
    console.log(`  ${C.dim("ℹ")} robots         ${C.dim(r.robots)}`);
  }

  // JSON-LD
  if (!r.ldJson?.length) {
    console.log(`  ${C.yellow("⚠")} JSON-LD        ${C.yellow("kein strukturiertes Datum")}`);
    issues++;
  } else {
    const types = r.ldJson.map(o => o["@type"]).join(", ");
    console.log(`  ${C.green("✓")} JSON-LD        ${C.dim(types)}`);
  }

  return issues;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n${C.bold("Meta-Tag-Audit")} – ${C.blue(BASE)}`);
  console.log(C.dim(`Ideal: Title ${TITLE_MIN}–${TITLE_MAX} Zeichen · Description ${DESC_MIN}–${DESC_MAX} Zeichen\n`));

  // Server erreichbar?
  try {
    await fetch(BASE, { signal: AbortSignal.timeout(5_000) });
  } catch {
    console.error(C.red(`\nServer nicht erreichbar: ${BASE}`));
    console.error(C.dim("Starten Sie zuerst:\n  npm run dev      (Entwicklung)\n  npm run preview  (Build-Vorschau)\n"));
    process.exit(1);
  }

  let totalIssues = 0;
  const results = await Promise.all(ROUTES.map(checkRoute));

  for (const r of results) {
    totalIssues += printRoute(r);
  }

  console.log(`\n${"═".repeat(66)}`);
  if (totalIssues === 0) {
    console.log(C.green(`✓  Alle Meta-Tags sind korrekt (${ROUTES.length} Seiten geprüft).`));
  } else {
    console.log(C.red(`✗  ${totalIssues} Problem(e) in ${ROUTES.length} Seiten gefunden.`));
  }
  console.log("");

  process.exit(totalIssues > 0 ? 1 : 0);
}

main();
