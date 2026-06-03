/**
 * scripts/prepare-cf-pages.mjs
 *
 * Laeuft nach `vite build` und bereitet den dist/-Ordner
 * fuer Cloudflare Pages vor:
 *   - Kopiert dist/server/server.js → dist/client/_worker.js
 *     (Cloudflare Pages erkennt _worker.js automatisch als SSR-Worker)
 */

import { copyFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root      = resolve(__dirname, "..");
const src       = resolve(root, "dist/server/server.js");
const dest      = resolve(root, "dist/client/_worker.js");

if (!existsSync(src)) {
  console.error(`[prepare-cf-pages] FEHLER: ${src} nicht gefunden.`);
  console.error("  → Stellen Sie sicher, dass 'npm run build' erfolgreich war.");
  process.exit(1);
}

copyFileSync(src, dest);
console.log("[prepare-cf-pages] ✓  dist/client/_worker.js bereit.");
