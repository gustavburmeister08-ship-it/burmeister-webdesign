import { useEffect, useState } from "react";

const KEY = "bwl-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-[0_20px_60px_-20px_rgba(24,32,38,0.25)] md:flex md:items-center md:gap-6 md:p-6">
        <div className="text-sm leading-relaxed text-foreground/85">
          <p className="font-medium text-foreground">Cookies & Datenschutz</p>
          <p className="mt-1 text-foreground/70">
            Diese Website verwendet nur technisch notwendige Cookies. Für die Nutzung
            sind keine zusätzlichen Tracking-Cookies erforderlich. Mehr in der{" "}
            <a href="/datenschutz" className="underline underline-offset-2">Datenschutzerklärung</a>.
          </p>
        </div>
        <div className="mt-4 flex shrink-0 gap-2 md:mt-0">
          <button
            onClick={() => decide("declined")}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground hover:bg-secondary"
          >
            Nur notwendige
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95"
          >
            Einverstanden
          </button>
        </div>
      </div>
    </div>
  );
}