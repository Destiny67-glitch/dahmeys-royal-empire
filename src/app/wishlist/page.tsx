"use client";

import { Heart } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader, PageShell } from "@/components/ui/page-shell";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { useStore } from "@/lib/store";

export default function WishlistPage() {
  const { products, wishlist, addToCart, toggleWishlist } = useStore();
  const items = products.filter((product) => wishlist.includes(product.id));

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl">
        <PageHeader title="Your Wishlist" action={<ButtonLink href="/" variant="ghost">Back to shop</ButtonLink>} />

        {items.length === 0 ? (
          <SurfaceCard className="text-slate-600 dark:text-slate-300">
            <p>No saved items yet. Tap the heart icon on products to add favorites.</p>
          </SurfaceCard>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.id} className="rounded-3xl border border-rose-100 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <div className={`mb-4 h-32 rounded-2xl bg-gradient-to-br ${item.gradient}`} />
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{item.name}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.category}</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">${item.price}</p>
                <div className="mt-4 flex gap-2">
                  <PrimaryButton type="button" onClick={() => addToCart(item.id)} className="flex-1">
                    Add to Cart
                  </PrimaryButton>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(item.id)}
                    className="rounded-full border border-slate-200 px-3 py-2 dark:border-slate-700"
                  >
                    <Heart className="h-4 w-4 fill-current text-rose-600" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
