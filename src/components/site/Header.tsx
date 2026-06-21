import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
            src="/images/gb-webdesign-logo-lang-schwarz.webp"
            alt="Gustav Burmeister Webdesign Leipzig"
            width={220}
            height={56}
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

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Menü öffnen"
                className="h-10 w-10 bg-card hover:bg-secondary lg:hidden"
              >
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(22rem,calc(100vw-2rem))]"
            >
              <SheetHeader className="pr-8 text-left">
                <SheetTitle className="font-serif text-2xl font-normal">
                  Navigation
                </SheetTitle>
                <SheetDescription>
                  Schnell zu Leistungen, Preisen, Ablauf und Kontakt.
                </SheetDescription>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((n) => (
                  <SheetClose key={n.to} asChild>
                    <Link
                      to={n.to}
                      className="rounded-md px-3 py-3 text-[15px] text-foreground/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground"
                      activeProps={{
                        className: "bg-secondary text-foreground font-medium",
                      }}
                      activeOptions={{ exact: n.to === "/" }}
                    >
                      {n.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-6 w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <Link to="/kontakt">Kostenloses Erstgespräch</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
