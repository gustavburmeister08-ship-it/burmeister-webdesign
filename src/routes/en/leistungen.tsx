import { createFileRoute } from "@tanstack/react-router";
import { LeistungenPage, leistungenHead } from "../-shared/leistungen";

export const Route = createFileRoute("/en/leistungen")({
  head: () => leistungenHead("en"),
  component: () => <LeistungenPage locale="en" />,
});
