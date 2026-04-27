import type { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className = "" }: SurfaceCardProps) {
  return (
    <section className={`rounded-3xl bg-white p-6 shadow-soft dark:bg-slate-900 ${className}`}>
      {children}
    </section>
  );
}
