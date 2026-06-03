import { useState, type FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(100),
  firma: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail an.").max(200),
  telefon: z.string().trim().max(40).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  leistung: z.string().max(80).optional().or(z.literal("")),
  nachricht: z.string().trim().min(10, "Bitte beschreiben Sie Ihr Anliegen kurz.").max(2000),
  datenschutz: z.literal(true, { errorMap: () => ({ message: "Bitte stimmen Sie der Datenverarbeitung zu." }) }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const LEISTUNGEN = [
  "Neue Website",
  "Website-Relaunch",
  "Landingpage",
  "SEO-Grundoptimierung",
  "Google Business Profil",
  "Hosting & Wartung",
  "Online-Shop",
  "Web-App / Automatisierung",
  "Beratung / noch unklar",
];

const BUDGETS = [
  "ab 500 €",
  "500 – 1.500 €",
  "1.500 – 3.500 €",
  "3.500 – 7.500 €",
  "über 7.500 €",
  "Noch unklar",
];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      firma: String(fd.get("firma") ?? ""),
      email: String(fd.get("email") ?? ""),
      telefon: String(fd.get("telefon") ?? ""),
      website: String(fd.get("website") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      leistung: String(fd.get("leistung") ?? ""),
      nachricht: String(fd.get("nachricht") ?? ""),
      datenschutz: fd.get("datenschutz") === "on",
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (k && !fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="font-serif text-2xl text-foreground">Vielen Dank für Ihre Nachricht.</h3>
        <p className="mt-3 text-foreground/75">
          Ich melde mich innerhalb eines Werktags persönlich bei Ihnen zurück – meist
          schon am selben Tag.
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          Hinweis: Diese Demo-Version sendet Anfragen noch nicht automatisch. Die
          technische Anbindung des Formulars (z. B. E-Mail-Versand) kann jederzeit
          ergänzt werden.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground";
  const errCls = "mt-1 text-xs text-destructive";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Name*</label>
          <input id="name" name="name" required className={inputCls} placeholder="Ihr Name" />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="firma" className={labelCls}>Firma</label>
          <input id="firma" name="firma" className={inputCls} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>E-Mail*</label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="name@firma.de" />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="telefon" className={labelCls}>Telefonnummer</label>
          <input id="telefon" name="telefon" className={inputCls} placeholder="Optional" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="website" className={labelCls}>Bestehende Website</label>
          <input id="website" name="website" className={inputCls} placeholder="z. B. https://ihre-firma.de" />
        </div>
        <div>
          <label htmlFor="leistung" className={labelCls}>Gewünschte Leistung</label>
          <select id="leistung" name="leistung" className={inputCls} defaultValue="">
            <option value="">Bitte wählen</option>
            {LEISTUNGEN.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelCls}>Budget</label>
          <select id="budget" name="budget" className={inputCls} defaultValue="">
            <option value="">Bitte wählen</option>
            {BUDGETS.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="nachricht" className={labelCls}>Nachricht*</label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={6}
          className={inputCls}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben, Ihre Branche und was Ihre Website leisten soll."
        />
        {errors.nachricht && <p className={errCls}>{errors.nachricht}</p>}
      </div>

      <label className="flex items-start gap-3 text-sm text-foreground/75">
        <input type="checkbox" name="datenschutz" className="mt-1 h-4 w-4 rounded border-border" />
        <span>
          Ich bin damit einverstanden, dass meine Angaben zur Beantwortung meiner
          Anfrage verarbeitet werden (siehe <a href="/datenschutz" className="underline">Datenschutz</a>).
        </span>
      </label>
      {errors.datenschutz && <p className={errCls}>{errors.datenschutz}</p>}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Anfrage senden
        </button>
        <p className="text-xs text-muted-foreground">
          Hinweis: Demo-Formular ohne Backend. Anbindung an E-Mail-Versand kann später
          ergänzt werden.
        </p>
      </div>
    </form>
  );
}