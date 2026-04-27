import Link from "next/link";
import { Grid2x2, Heart, Home, ShoppingBag, UserRound } from "lucide-react";

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-rose-100 bg-white/95 px-4 py-2 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-5 gap-1">
        <Link href="/" className="flex flex-col items-center gap-1 rounded-xl py-2 text-empire-700 dark:text-rose-200">
          <Home className="h-5 w-5" />
          <span className="text-[11px] font-medium">Home</span>
        </Link>
        <button type="button" className="flex flex-col items-center gap-1 rounded-xl py-2 text-slate-500 dark:text-slate-300">
          <Grid2x2 className="h-5 w-5" />
          <span className="text-[11px]">Categories</span>
        </button>
        <Link href="/wishlist" className="flex flex-col items-center gap-1 rounded-xl py-2 text-slate-500 dark:text-slate-300">
          <Heart className="h-5 w-5" />
          <span className="text-[11px]">Wishlist</span>
        </Link>
        <Link href="/checkout" className="flex flex-col items-center gap-1 rounded-xl py-2 text-slate-500 dark:text-slate-300">
          <ShoppingBag className="h-5 w-5" />
          <span className="text-[11px]">Orders</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center gap-1 rounded-xl py-2 text-slate-500 dark:text-slate-300">
          <UserRound className="h-5 w-5" />
          <span className="text-[11px]">Account</span>
        </Link>
      </div>
    </nav>
  );
}
