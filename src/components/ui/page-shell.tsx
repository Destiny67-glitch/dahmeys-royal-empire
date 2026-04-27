import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  centered?: boolean;
};

export function PageShell({ children, centered = false }: PageShellProps) {
  return (
    <main
      className={`min-h-screen bg-rose-50 px-4 py-8 dark:bg-slate-950 ${
        centered ? "grid place-items-center" : ""
      }`}
    >
      {children}
    </main>
  );
}

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex items-end justify-between gap-3">
      <div>
        <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}
