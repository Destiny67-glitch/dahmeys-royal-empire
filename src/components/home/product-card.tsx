import { Heart, Info, Star } from "lucide-react";
import type { Product } from "@/types/product";

type Props = {
  product: Product;
  wished: boolean;
  onToggleWishlist: (id: string) => void;
  onQuickView: (id: string) => void;
  onAddToCart: (name: string, id: string) => void;
};

export function ProductCard({ product, wished, onToggleWishlist, onQuickView, onAddToCart }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
      <div className={`relative h-44 bg-gradient-to-br ${product.gradient} p-4`}>
        {product.isNewArrival && (
          <span className="absolute -left-8 top-4 rotate-[-38deg] bg-empire-700 px-10 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md">
            New Arrival
          </span>
        )}
        <div className="flex items-start justify-end">
          <button type="button" onClick={() => onToggleWishlist(product.id)} className="rounded-full bg-white/80 p-2 text-rose-700">
            <Heart className={`h-4 w-4 ${wished ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
      <div className="space-y-2 p-4">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{product.category}</p>
        <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{product.name}</h3>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">${product.price}</p>
          <p className="text-xs text-slate-400 line-through">${product.oldPrice}</p>
        </div>
        <div className="mt-2 flex gap-2">
          <button type="button" onClick={() => onQuickView(product.id)} className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Info className="mr-2 h-4 w-4" />
            Quick View
          </button>
          <button type="button" onClick={() => onAddToCart(product.name, product.id)} className="flex-1 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white dark:bg-rose-200 dark:text-slate-900">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
