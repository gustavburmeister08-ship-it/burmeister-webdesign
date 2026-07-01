import { useLocation } from "@tanstack/react-router";

export type Locale = "de" | "en";

/** Derives the active locale from the current URL. English pages live under /en/*. */
export function useLocale(): Locale {
  const location = useLocation();
  return location.pathname === "/en" || location.pathname.startsWith("/en/")
    ? "en"
    : "de";
}

/** Prefixes a canonical (German) path with /en when targeting the English site. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === "de") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Strips the /en prefix from a pathname, returning the canonical (German) path. */
export function delocalizePath(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}
