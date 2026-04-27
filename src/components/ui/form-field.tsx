import type { InputHTMLAttributes, ReactNode } from "react";

type FormFieldProps = {
  label: string;
  children: ReactNode;
};

export function FormField({ label, children }: FormFieldProps) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export function TextInput(props: TextInputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-empire-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 ${
        props.className ?? ""
      }`}
    />
  );
}
