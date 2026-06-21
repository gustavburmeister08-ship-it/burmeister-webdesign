import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link
          to="/"
          className="group flex items-center"
          onClick={() => setOpen(false)}
        >
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
          <Button
            asChild
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-md active:translate-y-0 lg:inline-flex"
          >
            <Link to="/kontakt">Kostenloses Erstgespräch</Link>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="h-10 w-10 bg-card hover:bg-secondary lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </Button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Menü schließen"
            className="absolute inset-0 bg-foreground/35"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="absolute right-4 top-4 w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-border bg-background p-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="mobile-navigation-title"
                  className="font-serif text-2xl text-foreground"
                >
                  Navigation
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Schnell zu Leistungen, Preisen, Ablauf und Kontakt.
                </p>
              </div>
              <button
                type="button"
                aria-label="Menü schließen"
                className="rounded-md px-2 py-1 text-2xl leading-none text-foreground/55 transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
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
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <Button
              asChild
              className="mt-6 w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/kontakt" onClick={() => setOpen(false)}>
                Kostenloses Erstgespräch
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
