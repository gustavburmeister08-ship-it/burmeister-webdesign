import { createFileRoute } from "@tanstack/react-router";
import { ImpressumPage, impressumHead } from "../-shared/impressum";

export const Route = createFileRoute("/en/impressum")({
  head: () => impressumHead("en"),
  component: () => <ImpressumPage locale="en" />,
});
