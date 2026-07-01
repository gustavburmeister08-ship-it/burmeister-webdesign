import { createFileRoute } from "@tanstack/react-router";
import { KontaktPage, kontaktHead } from "../-shared/kontakt";

export const Route = createFileRoute("/en/kontakt")({
  head: () => kontaktHead("en"),
  component: () => <KontaktPage locale="en" />,
});
