import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-rose-200 dark:text-slate-900",
  outline:
    "rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200",
  ghost: "text-sm font-medium text-empire-700 dark:text-rose-200",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}
