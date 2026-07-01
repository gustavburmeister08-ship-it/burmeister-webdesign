import { createFileRoute } from "@tanstack/react-router";
import { AblaufPage, ablaufHead } from "./-shared/ablauf";

export const Route = createFileRoute("/ablauf")({
  head: () => ablaufHead("de"),
  component: () => <AblaufPage locale="de" />,
});
