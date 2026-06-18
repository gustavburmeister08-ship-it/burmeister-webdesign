import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function CtaRow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${compact ? "" : "mt-8"}`}
      aria-label="Kontaktmöglichkeiten"
    >
      <Link
        to="/kontakt"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm"
      >
        Kostenloses Erstgespräch
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
      <a
        href={CONTACT.whatsappHref}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm"
      >
        <MessageCircle size={15} /> Per WhatsApp schreiben
      </a>
      <a
        href={CONTACT.phoneHref}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground/25 hover:bg-secondary hover:shadow-sm"
      >
        <Phone size={15} /> {CONTACT.phoneDisplay}
      </a>
      <a
        href={`mailto:${CONTACT.email}`}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground/25 hover:bg-secondary hover:shadow-sm"
      >
        <Mail size={15} /> E-Mail
      </a>
    </div>
  );
}
