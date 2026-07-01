import { createFileRoute } from "@tanstack/react-router";
import { HomePage, homeHead, isHomeAdVariant } from "../-shared/home";

export const Route = createFileRoute("/en/")({
  validateSearch: (search: Record<string, unknown>) =>
    isHomeAdVariant(search.ad) ? { ad: search.ad } : {},
  head: () => homeHead("en"),
  component: () => {
    const { ad } = Route.useSearch();
    return <HomePage locale="en" ad={ad} />;
  },
});
