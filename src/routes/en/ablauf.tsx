import { createFileRoute } from "@tanstack/react-router";
import { AblaufPage, ablaufHead } from "../-shared/ablauf";

export const Route = createFileRoute("/en/ablauf")({
  head: () => ablaufHead("en"),
  component: () => <AblaufPage locale="en" />,
});
