// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import {
  defineConfig,
  type LovableViteTanstackOptions,
} from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Aktiviert den Nitro-Deploy-Plugin auch ausserhalb der Lovable-Umgebung.
  // Produziert ein korrekt gebuendeltes Cloudflare-Worker-Paket.
  //
  // preset + cloudflare.pages sind explizit gesetzt, weil Nitros
  // automatisch generierte _routes.json (eine Regel pro Datei) bei
  // Cloudflare Pages das 100-Zeichen-Limit pro Regel reissen kann
  // ("Error 8000057: Rule (...) in `routes.json` is over the 100
  // character limit") und den Deploy zum Scheitern bringt. Mit einer
  // eigenen, kurzen Routen-Liste umgehen wir den fehleranfaelligen
  // Auto-Generator dauerhaft.
  //
  // cloudflare.pages.{defaultRoutes,routes} ist nicht im engen Typ von
  // @lovable.dev/vite-tanstack-config abgebildet, wird von Nitro aber
  // unveraendert durchgereicht — daher der `as` Cast.
  nitro: {
    preset: "cloudflare-pages",
    cloudflare: {
      pages: {
        defaultRoutes: false,
        routes: {
          version: 1,
          include: ["/*"],
          exclude: [
            "/assets/*",
            "/images/*",
            "/favicon.ico",
            "/favicon-16.png",
            "/favicon-32.png",
            "/apple-touch-icon.png",
            "/gb-webdesign-logo-lang-schwarz.png",
            "/robots.txt",
            "/sitemap.xml",
          ],
        },
      },
    },
  } as LovableViteTanstackOptions["nitro"],
});
