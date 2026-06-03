/**
 * scripts/prepare-cf-pages.mjs
 *
 * Bereitet den Nitro-Build-Output fuer Cloudflare Pages vor.
 *
 * Nitro erzeugt:
 *   .output/public/   → statische Client-Assets
 *   .output/server/   → SSR-Worker (index.mjs + _libs/ + _ssr/ + ...)
 *
 * Cloudflare Pages erwartet alles in einem Verzeichnis:
 *   .output/public/_worker.js   ← .output/server/index.mjs
 *   .output/public/_libs/       ← .output/server/_libs/
 *   .output/public/_ssr/        ← .output/server/_ssr/
 *   .output/public/_chunks/     ← .output/server/_chunks/  (falls vorhanden)
 *   .output/public/*.mjs        ← .output/server/*.mjs     (Manifest etc.)
 */

import { existsSync, cpSync, copyFileSync, readdirSync, mkdirSync, statSync, rmSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root       = resolve(__dirname, "..");
const serverDir  = resolve(root, ".output/server");
const publicDir  = resolve(root, ".output/public");

function bail(msg) {
  console.error(`[prepare-cf-pages] FEHLER: ${msg}`);
  process.exit(1);
}

if (!existsSync(serverDir)) bail(".output/server nicht gefunden – war 'vite build' erfolgreich?");
if (!existsSync(publicDir)) bail(".output/public nicht gefunden – war 'vite build' erfolgreich?");

const serverIndex = join(serverDir, "index.mjs");
if (!existsSync(serverIndex)) bail(".output/server/index.mjs nicht gefunden.");

// 1. index.mjs → _worker.js
copyFileSync(serverIndex, join(publicDir, "_worker.js"));
console.log("[prepare-cf-pages] ✓  index.mjs  →  _worker.js");

// 2. Unterordner und .mjs-Dateien aus server/ nach public/ kopieren
let copied = 0;
for (const entry of readdirSync(serverDir)) {
  if (entry === "index.mjs" || entry === "wrangler.json") continue; // bereits behandelt / nicht noetig

  const src  = join(serverDir, entry);
  const dest = join(publicDir, entry);
  const stat = statSync(src);

  if (stat.isDirectory()) {
    cpSync(src, dest, { recursive: true });
    const count = readdirSync(dest).length;
    console.log(`[prepare-cf-pages] ✓  ${entry}/  (${count} Dateien)`);
    copied += count;
  } else if (entry.endsWith(".mjs")) {
    copyFileSync(src, dest);
    console.log(`[prepare-cf-pages] ✓  ${entry}`);
    copied++;
  }
}

console.log(`[prepare-cf-pages] ✓  ${copied} Eintraege kopiert`);

// Nitro-generierte Wrangler-Configs entfernen, damit CF Pages unsere wrangler.toml liest.
// Nitro's wrangler.json hat ein ASSETS-Binding das in CF Pages reserviert ist.
const toDelete = [
  join(root, ".output/server/wrangler.json"),
  join(root, ".wrangler/deploy/config.json"),
];
for (const f of toDelete) {
  if (existsSync(f)) {
    rmSync(f);
    console.log(`[prepare-cf-pages] ✓  geloescht: ${f.replace(root + "/", "")}`);
  }
}

console.log("[prepare-cf-pages] ✓  .output/public/ bereit fuer Cloudflare Pages");
