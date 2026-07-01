import { createFileRoute } from "@tanstack/react-router";
import { DatenschutzPage, datenschutzHead } from "../-shared/datenschutz";

export const Route = createFileRoute("/en/datenschutz")({
  head: () => datenschutzHead("en"),
  component: () => <DatenschutzPage locale="en" />,
});
