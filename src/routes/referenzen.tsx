import { createFileRoute } from "@tanstack/react-router";
import { ReferenzenPage, referenzenHead } from "./-shared/referenzen";

export const Route = createFileRoute("/referenzen")({
  head: () => referenzenHead("de"),
  component: () => <ReferenzenPage locale="de" />,
});
