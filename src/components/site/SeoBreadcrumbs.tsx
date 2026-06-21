import { Link, useLocation } from "@tanstack/react-router";

const LABELS: Record<string, string> = {
  "/": "Startseite",
  "/leistungen": "Leistungen",
  "/preise": "Preise",
  "/ablauf": "Ablauf",
  "/referenzen": "Referenzen",
  "/ueber-mich": "Ueber mich",
  "/kontakt": "Kontakt",
  "/impressum": "Impressum",
  "/datenschutz": "Datenschutz",
};

export function SeoBreadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  const label = LABELS[pathname];

  if (!label) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border/70 bg-background/92"
    >
      <ol className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-3 text-xs text-muted-foreground md:px-8">
        <li>
          {pathname === "/" ? (
            <span aria-current="page" className="text-foreground">
              Startseite
            </span>
          ) : (
            <Link to="/" className="hover:text-foreground hover:underline">
              Startseite
            </Link>
          )}
        </li>
        {pathname !== "/" && (
          <>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page" className="text-foreground">
                {label}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
