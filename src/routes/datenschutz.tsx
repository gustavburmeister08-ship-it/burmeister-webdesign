import { createFileRoute } from "@tanstack/react-router";
import { DatenschutzPage, datenschutzHead } from "./-shared/datenschutz";

export const Route = createFileRoute("/datenschutz")({
  head: () => datenschutzHead("de"),
  component: () => <DatenschutzPage locale="de" />,
});
