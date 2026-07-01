import { useEffect, useState, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { z } from "zod";
import { trackLeadFromForm } from "@/lib/meta-events";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { useLocale, type Locale } from "@/lib/i18n/locale";

const FORMSPREE_ID = "xgobveqq";

const COPY: Record<
  Locale,
  {
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    firmaLabel: string;
    optional: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailError: string;
    telefonLabel: string;
    websiteLabel: string;
    websitePlaceholder: string;
    leistungLabel: string;
    pleaseChoose: string;
    leistungen: readonly string[];
    budgetLabel: string;
    budgets: readonly string[];
    nachrichtLabel: string;
    nachrichtPlaceholder: string;
    nachrichtError: string;
    datenschutzText: string;
    datenschutzLink: string;
    datenschutzError: string;
    submitting: string;
    submit: string;
    successTitle: string;
    successText: string;
  }
> = {
  de: {
    nameLabel: "Name*",
    namePlaceholder: "Ihr Name",
    nameError: "Bitte geben Sie Ihren Namen an.",
    firmaLabel: "Firma",
    optional: "Optional",
    emailLabel: "E-Mail*",
    emailPlaceholder: "name(at)firma.de",
    emailError: "Bitte geben Sie eine gültige E-Mail an.",
    telefonLabel: "Telefonnummer",
    websiteLabel: "Bestehende Website",
    websitePlaceholder: "z. B. https://ihre-firma.de",
    leistungLabel: "Gewünschte Leistung",
    pleaseChoose: "Bitte wählen",
    leistungen: [
      "Neue Website",
      "Website-Relaunch",
      "One-Pager",
      "Mehrseitige Website",
      "Google Business Profil",
      "Hosting & Wartung",
      "Beratung / noch unklar",
    ],
    budgetLabel: "Budget",
    budgets: ["ab 790 €", "1.390 – 1.590 €", "2.000 – 4.000 €", "Noch unklar"],
    nachrichtLabel: "Nachricht*",
    nachrichtPlaceholder:
      "Beschreiben Sie kurz Ihr Vorhaben, Ihre Branche und was Ihre Website leisten soll.",
    nachrichtError: "Bitte beschreiben Sie Ihr Anliegen kurz.",
    datenschutzText:
      "Ich bin damit einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden (siehe",
    datenschutzLink: "Datenschutz",
    datenschutzError: "Bitte stimmen Sie der Datenverarbeitung zu.",
    submitting: "Wird gesendet …",
    submit: "Anfrage senden",
    successTitle: "Vielen Dank für Ihre Nachricht.",
    successText:
      "Ich melde mich innerhalb eines Werktags persönlich bei Ihnen zurück – meist schon am selben Tag.",
  },
  en: {
    nameLabel: "Name*",
    namePlaceholder: "Your name",
    nameError: "Please enter your name.",
    firmaLabel: "Company",
    optional: "Optional",
    emailLabel: "Email*",
    emailPlaceholder: "name(at)company.com",
    emailError: "Please enter a valid email address.",
    telefonLabel: "Phone number",
    websiteLabel: "Existing website",
    websitePlaceholder: "e.g. https://your-company.com",
    leistungLabel: "Desired service",
    pleaseChoose: "Please choose",
    leistungen: [
      "New website",
      "Website relaunch",
      "One-pager",
      "Multi-page website",
      "Google Business Profile",
      "Hosting & maintenance",
      "Consultation / not sure yet",
    ],
    budgetLabel: "Budget",
    budgets: ["from €790", "€1,390 – €1,590", "€2,000 – €4,000", "Not sure yet"],
    nachrichtLabel: "Message*",
    nachrichtPlaceholder:
      "Briefly describe your project, your industry and what your website should achieve.",
    nachrichtError: "Please briefly describe your request.",
    datenschutzText:
      "I agree that my details will be processed to answer my inquiry (see",
    datenschutzLink: "Privacy Policy",
    datenschutzError: "Please agree to the data processing.",
    submitting: "Sending …",
    submit: "Send inquiry",
    successTitle: "Thank you for your message.",
    successText:
      "I'll get back to you personally within one business day – usually the same day.",
  },
};

function buildSchema(t: (typeof COPY)["de"]) {
  return z.object({
    name: z.string().trim().min(2, t.nameError).max(100),
    firma: z.string().trim().max(120).optional().or(z.literal("")),
    email: z.string().trim().email(t.emailError).max(200),
    telefon: z.string().trim().max(40).optional().or(z.literal("")),
    website: z.string().trim().max(200).optional().or(z.literal("")),
    budget: z.string().max(60).optional().or(z.literal("")),
    leistung: z.string().max(80).optional().or(z.literal("")),
    nachricht: z.string().trim().min(10, t.nachrichtError).max(2000),
    datenschutz: z.literal(true, {
      errorMap: () => ({ message: t.datenschutzError }),
    }),
  });
}

type Errors = Partial<Record<string, string>>;

export function ContactForm() {
  const locale = useLocale();
  const t = COPY[locale];
  const schema = buildSchema(t);

  const [state, handleFormspreeSubmit] = useForm(FORMSPREE_ID);
  const [clientErrors, setClientErrors] = useState<Errors>({});
  const [pendingLeadFormData, setPendingLeadFormData] =
    useState<FormData | null>(null);

  useEffect(() => {
    if (!state.succeeded || !pendingLeadFormData) return;
    trackLeadFromForm(pendingLeadFormData);
    setPendingLeadFormData(null);
  }, [pendingLeadFormData, state.succeeded]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    // 1. Client-seitige Zod-Validierung
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
      e.preventDefault();
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as string;
        if (k && !fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setClientErrors(fieldErrors);
      return;
    }

    // 2. Zod OK → an Formspree senden (handleFormspreeSubmit ruft intern preventDefault)
    setClientErrors({});
    setPendingLeadFormData(fd);
    handleFormspreeSubmit(e);
  };

  // Erfolgsmeldung
  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="font-serif text-2xl text-foreground">
          {t.successTitle}
        </h3>
        <p className="mt-3 text-foreground/75">{t.successText}</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelCls =
    "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground";
  const errCls = "mt-1 text-xs text-destructive";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {/* Betreff für Formspree-E-Mail */}
      <input
        type="hidden"
        name="_subject"
        value="Neue Anfrage – burmeister-webdesign.com"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            {t.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            required
            className={inputCls}
            placeholder={t.namePlaceholder}
          />
          {clientErrors.name && <p className={errCls}>{clientErrors.name}</p>}
          <ValidationError
            field="name"
            errors={state.errors}
            className={errCls}
          />
        </div>

        <div>
          <label htmlFor="firma" className={labelCls}>
            {t.firmaLabel}
          </label>
          <input
            id="firma"
            name="firma"
            className={inputCls}
            placeholder={t.optional}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            {t.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
            placeholder={t.emailPlaceholder}
          />
          {clientErrors.email && <p className={errCls}>{clientErrors.email}</p>}
          <ValidationError
            field="email"
            errors={state.errors}
            className={errCls}
          />
        </div>

        <div>
          <label htmlFor="telefon" className={labelCls}>
            {t.telefonLabel}
          </label>
          <input
            id="telefon"
            name="telefon"
            className={inputCls}
            placeholder={t.optional}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="website" className={labelCls}>
            {t.websiteLabel}
          </label>
          <input
            id="website"
            name="website"
            className={inputCls}
            placeholder={t.websitePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="leistung" className={labelCls}>
            {t.leistungLabel}
          </label>
          <select
            id="leistung"
            name="leistung"
            className={inputCls}
            defaultValue=""
          >
            <option value="">{t.pleaseChoose}</option>
            {t.leistungen.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelCls}>
            {t.budgetLabel}
          </label>
          <select
            id="budget"
            name="budget"
            className={inputCls}
            defaultValue=""
          >
            <option value="">{t.pleaseChoose}</option>
            {t.budgets.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="nachricht" className={labelCls}>
          {t.nachrichtLabel}
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={6}
          className={inputCls}
          placeholder={t.nachrichtPlaceholder}
        />
        {clientErrors.nachricht && (
          <p className={errCls}>{clientErrors.nachricht}</p>
        )}
        <ValidationError
          field="nachricht"
          errors={state.errors}
          className={errCls}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-foreground/75">
        <input
          type="checkbox"
          name="datenschutz"
          className="mt-1 h-4 w-4 rounded border-border"
        />
        <span>
          {t.datenschutzText}{" "}
          <LocalizedLink to="/datenschutz" className="underline">
            {t.datenschutzLink}
          </LocalizedLink>
          ).
        </span>
      </label>
      {clientErrors.datenschutz && (
        <p className={errCls}>{clientErrors.datenschutz}</p>
      )}

      {/* Formspree allgemeine Fehler */}
      <ValidationError errors={state.errors} className={errCls} />

      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.submitting ? t.submitting : t.submit}
        </button>
      </div>
    </form>
  );
}
