import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/preise", label: "Preise" },
  { to: "/ablauf", label: "Ablauf" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/ueber-mich", label: "Über mich" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link to="/" className="group flex items-center">
          <img
            src="/images/gb-webdesign-logo-lang-schwarz-320.webp"
            srcSet="/images/gb-webdesign-logo-lang-schwarz-320.webp 320w, /images/gb-webdesign-logo-lang-schwarz-640.webp 640w"
            sizes="(min-width: 1024px) 220px, 180px"
            alt="Gustav Burmeister Webdesign Leipzig"
            width={220}
            height={56}
            fetchPriority="high"
            className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm text-foreground/65 transition-colors duration-150 hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
              activeProps={{
                className: "text-foreground font-medium after:w-full",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/kontakt"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-md active:translate-y-0 lg:inline-flex"
          >
            Kostenloses Erstgespräch
          </Link>

          <details className="group relative lg:hidden">
            <summary
              aria-label="Menü öffnen"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary marker:hidden"
            >
              <Menu size={18} />
            </summary>

            <div
              id="mobile-navigation"
              role="navigation"
              aria-label="Mobile Navigation"
              className="absolute right-0 top-12 w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-border bg-background p-5 shadow-2xl"
            >
              <div>
                <h2 className="font-serif text-2xl text-foreground">
                  Navigation
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Schnell zu Leistungen, Preisen, Ablauf und Kontakt.
                </p>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="rounded-md px-3 py-3 text-[15px] text-foreground/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground"
                    activeProps={{
                      className: "bg-secondary text-foreground font-medium",
                    }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>

              <Link
                to="/kontakt"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90"
              >
                Kostenloses Erstgespräch
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
