"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useStore } from "@/lib/store";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: Props) {
  const { cart, products, cartSubtotal, removeFromCart } = useStore();
  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const product = products.find((p) => p.id === id);
      if (!product) return null;
      return { product, qty };
    })
    .filter(Boolean) as { product: (typeof products)[number]; qty: number }[];

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-slate-900/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white p-5 shadow-2xl transition-transform dark:bg-slate-950 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Your Cart</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 dark:border-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-10 text-center text-slate-500">
            <ShoppingBag className="mx-auto mb-3 h-8 w-8" />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cartItems.map(({ product, qty }) => (
              <div key={product.id} className="rounded-2xl border border-slate-200 p-3 dark:border-slate-700">
                <p className="font-medium text-slate-900 dark:text-white">{product.name}</p>
                <p className="text-sm text-slate-500">
                  ${product.price} x {qty}
                </p>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                  className="mt-2 text-xs font-medium text-rose-700"
                >
                  Remove one
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="absolute bottom-5 left-5 right-5 space-y-3">
          <div className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <span className="text-sm text-slate-600 dark:text-slate-300">Subtotal</span>
            <span className="font-semibold text-slate-900 dark:text-white">${cartSubtotal.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            onClick={onClose}
            className="block rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-rose-200 dark:text-slate-900"
          >
            Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
