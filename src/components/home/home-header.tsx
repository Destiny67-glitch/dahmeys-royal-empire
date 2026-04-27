import Link from "next/link";
import { Crown, Heart, Menu, MoonStar, Search, ShoppingCart, Sun } from "lucide-react";

type Props = {
  isNightCouture: boolean;
  wishlistCount: number;
  cartCount: number;
  cartBadgeBump: boolean;
  onToggleTheme: () => void;
  onOpenCart: () => void;
};

export function HomeHeader({
  isNightCouture,
  wishlistCount,
  cartCount,
  cartBadgeBump,
  onToggleTheme,
  onOpenCart,
}: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-rose-100 bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button type="button" className="rounded-full border border-rose-200 p-2 text-rose-700 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-empire-600 text-white shadow-soft">
            <Crown className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-semibold leading-tight text-empire-700 dark:text-rose-100">
              Dahmey&apos;s Royal Empire
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Women&apos;s Marketplace</p>
          </div>
        </Link>
        <div className="hidden max-w-md flex-1 items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 lg:flex dark:border-slate-700 dark:bg-slate-900">
          <Search className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          <input type="text" placeholder="Search products, beauty, wigs..." className="w-full bg-transparent text-sm outline-none" />
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onToggleTheme} className="rounded-full border border-rose-200 p-2 text-rose-700 dark:border-slate-700 dark:text-rose-200">
            {isNightCouture ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
          </button>
          <Link href="/wishlist" className="relative rounded-full border border-rose-200 p-2 text-rose-700 dark:border-slate-700 dark:text-rose-200">
            <Heart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-empire-700 text-[10px] font-semibold text-white">
              {wishlistCount}
            </span>
          </Link>
          <button type="button" onClick={onOpenCart} className="relative rounded-full border border-rose-200 p-2 text-rose-700 dark:border-slate-700 dark:text-rose-200">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-amber-500 text-[10px] font-semibold text-white">
              <span className={cartBadgeBump ? "scale-125 transition-transform" : "scale-100 transition-transform"}>
                {cartCount}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
