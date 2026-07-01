import { createFileRoute } from "@tanstack/react-router";
import { ReferenzenPage, referenzenHead } from "../-shared/referenzen";

export const Route = createFileRoute("/en/referenzen")({
  head: () => referenzenHead("en"),
  component: () => <ReferenzenPage locale="en" />,
});
