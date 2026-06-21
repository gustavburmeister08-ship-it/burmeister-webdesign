import type { ComponentPropsWithoutRef } from "react";
import { Mail } from "lucide-react";

const DEFAULT_USER = "gustav.burmeister08";
const DEFAULT_DOMAIN = "gmail.com";

type EmailContactProps = ComponentPropsWithoutRef<"button"> & {
  user?: string;
  domain?: string;
  showAddress?: boolean;
  icon?: boolean;
};

function openMail(user: string, domain: string) {
  window.location.href = `mailto:${user}@${domain}`;
}

export function EmailContact({
  user = DEFAULT_USER,
  domain = DEFAULT_DOMAIN,
  showAddress = false,
  icon = true,
  className,
  children,
  ...props
}: EmailContactProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => openMail(user, domain)}
      {...props}
    >
      {icon ? <Mail size={15} /> : null}
      {children ??
        (showAddress ? <EmailText user={user} domain={domain} /> : "E-Mail")}
    </button>
  );
}

export function EmailText({
  user = DEFAULT_USER,
  domain = DEFAULT_DOMAIN,
}: {
  user?: string;
  domain?: string;
}) {
  return (
    <>
      {user}
      <span aria-hidden="true"> [at] </span>
      <span className="sr-only">@</span>
      {domain}
    </>
  );
}
