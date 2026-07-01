import { createFileRoute } from "@tanstack/react-router";
import { UeberMichPage, ueberMichHead } from "./-shared/ueber-mich";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ueberMichHead("de"),
  component: () => <UeberMichPage locale="de" />,
});
