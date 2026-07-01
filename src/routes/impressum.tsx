import { createFileRoute } from "@tanstack/react-router";
import { ImpressumPage, impressumHead } from "./-shared/impressum";

export const Route = createFileRoute("/impressum")({
  head: () => impressumHead("de"),
  component: () => <ImpressumPage locale="de" />,
});
