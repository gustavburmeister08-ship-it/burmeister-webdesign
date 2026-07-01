import { createFileRoute } from "@tanstack/react-router";
import { UeberMichPage, ueberMichHead } from "../-shared/ueber-mich";

export const Route = createFileRoute("/en/ueber-mich")({
  head: () => ueberMichHead("en"),
  component: () => <UeberMichPage locale="en" />,
});
