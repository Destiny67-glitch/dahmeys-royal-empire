import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-rose-50 px-4 dark:bg-slate-950">
      <section className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-soft dark:bg-slate-900">
        <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">Order Confirmed</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Thank you for shopping with Dahmey&apos;s Royal Empire. Your luxury picks are now being prepared.
        </p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-rose-200 dark:text-slate-900">
          Return to Marketplace
        </Link>
      </section>
    </main>
  );
}
