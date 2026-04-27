import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-empire-900 via-empire-700 to-fuchsia-700 p-6 text-white shadow-soft sm:p-8">
      <p className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
        Signature Collection
      </p>
      <h1 className="font-display max-w-xl text-4xl font-semibold leading-tight sm:text-6xl">
        Dress Like Royalty, Every Day
      </h1>
      <p className="mt-3 max-w-lg text-sm sm:text-base">
        Discover premium fashion, beauty, bags, wigs, and jewellery curated for bold and elegant women.
      </p>
      <div className="mt-5 flex items-center gap-3">
        <button type="button" className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-empire-900">
          Shop New Arrivals
          <MoveRight className="ml-2 h-4 w-4" />
        </button>
        <Link href="/auth/sign-in" className="rounded-full border border-white/50 px-5 py-2.5 text-sm font-medium text-white">
          Join Empire
        </Link>
      </div>
    </div>
  );
}
