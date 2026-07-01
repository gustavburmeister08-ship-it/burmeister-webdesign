import { Link, type LinkComponentProps } from "@tanstack/react-router";
import { useLocale, localizePath } from "@/lib/i18n/locale";

/**
 * Drop-in replacement for TanStack Router's <Link> that accepts canonical
 * (German) paths and automatically targets the /en/* counterpart when the
 * current site is displayed in English.
 */
export function LocalizedLink({
  to,
  ...props
}: LinkComponentProps<"a">) {
  const locale = useLocale();
  const target =
    typeof to === "string" ? localizePath(to, locale) : to;

  // `target` is computed dynamically, so it can't be narrowed to the
  // router's generated literal union of known routes.
  return <Link to={target as never} {...props} />;
}
