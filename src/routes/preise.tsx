import { createFileRoute } from "@tanstack/react-router";
import { PreisePage, preiseHead } from "./-shared/preise";

export const Route = createFileRoute("/preise")({
  head: () => preiseHead("de"),
  component: () => <PreisePage locale="de" />,
});
