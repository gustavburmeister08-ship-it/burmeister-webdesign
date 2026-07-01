import { createFileRoute } from "@tanstack/react-router";
import { LeistungenPage, leistungenHead } from "./-shared/leistungen";

export const Route = createFileRoute("/leistungen")({
  head: () => leistungenHead("de"),
  component: () => <LeistungenPage locale="de" />,
});
