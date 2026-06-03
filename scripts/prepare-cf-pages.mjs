/**
 * scripts/prepare-cf-pages.mjs
 *
 * Laeuft nach `vite build` und bereitet den dist/-Ordner
 * fuer Cloudflare Pages vor:
 *
 *   1. dist/server/server.js      → dist/client/_worker.js
 *   2. dist/server/assets/**      → dist/client/assets/**
 *      (_worker.js referenziert seine Chunks per "./assets/..." –
 *       sie muessen also neben _worker.js im Output-Verzeichnis liegen.)
 */

import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root      = resolve(__dirname, "..");

function requireDir(path, label) {
  if (!existsSync(path)) {
    console.error(`[prepare-cf-pages] FEHLER: ${label} nicht gefunden (${path})`);
    console.error("  → Stellen Sie sicher, dass 'npm run build' erfolgreich war.");
    process.exit(1);
  }
}

// ── 1. server.js → _worker.js ────────────────────────────────────────────────
const workerSrc  = resolve(root, "dist/server/server.js");
const workerDest = resolve(root, "dist/client/_worker.js");
requireDir(workerSrc, "dist/server/server.js");
copyFileSync(workerSrc, workerDest);
console.log("[prepare-cf-pages] ✓  _worker.js  (SSR-Worker)");

// ── 2. dist/server/assets/** → dist/client/assets/** ────────────────────────
const serverAssets = resolve(root, "dist/server/assets");
const clientAssets = resolve(root, "dist/client/assets");

requireDir(serverAssets, "dist/server/assets");
mkdirSync(clientAssets, { recursive: true });

let copied = 0;
for (const file of readdirSync(serverAssets)) {
  const src  = join(serverAssets, file);
  const dest = join(clientAssets, file);
  if (statSync(src).isFile()) {
    copyFileSync(src, dest);
    copied++;
  }
}
console.log(`[prepare-cf-pages] ✓  ${copied} Server-Assets → dist/client/assets/`);
console.log("[prepare-cf-pages] ✓  Bereit für Cloudflare Pages.");
