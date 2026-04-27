import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
};

const variantClasses = {
  primary:
    "bg-slate-900 text-white dark:bg-rose-200 dark:text-slate-900",
  outline:
    "border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-200",
};

export function PrimaryButton({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-full px-4 py-2.5 text-sm font-semibold transition disabled:opacity-40 ${
        variantClasses[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
