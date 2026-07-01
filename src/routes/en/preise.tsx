import { createFileRoute } from "@tanstack/react-router";
import { PreisePage, preiseHead } from "../-shared/preise";

export const Route = createFileRoute("/en/preise")({
  head: () => preiseHead("en"),
  component: () => <PreisePage locale="en" />,
});
