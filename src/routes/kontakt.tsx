import { createFileRoute } from "@tanstack/react-router";
import { KontaktPage, kontaktHead } from "./-shared/kontakt";

export const Route = createFileRoute("/kontakt")({
  head: () => kontaktHead("de"),
  component: () => <KontaktPage locale="de" />,
});
