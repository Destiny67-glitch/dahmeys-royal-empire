"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import productsData from "@/data/products.json";
import type { Product } from "@/types/product";

type AppUser = {
  name: string;
  email: string;
};

type CartMap = Record<string, number>;

type StoreContextValue = {
  products: Product[];
  cart: CartMap;
  wishlist: string[];
  user: AppUser | null;
  cartCount: number;
  cartSubtotal: number;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  clearCart: () => void;
  signIn: (payload: AppUser) => void;
  signOut: () => void;
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);
const STORAGE_KEY = "dre_store_v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartMap>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw).cart ?? {}) : {};
    } catch {
      return {};
    }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw).wishlist ?? []) : [];
    } catch {
      return [];
    }
  });
  const [user, setUser] = useState<AppUser | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw).user ?? null) : null;
    } catch {
      return null;
    }
  });

  const products = productsData as Product[];

  const addToCart = (productId: string) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const qty = prev[productId] ?? 0;
      if (qty <= 1) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return { ...prev, [productId]: qty - 1 };
    });
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    );
  };

  const clearCart = () => setCart({});
  const signIn = (payload: AppUser) => setUser(payload);
  const signOut = () => setUser(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          cart,
          wishlist,
          user,
        }),
      );
    } catch {
      // Ignore write failures (private mode/quota).
    }
  }, [cart, wishlist, user]);

  const cartCount = useMemo(() => Object.values(cart).reduce((sum, qty) => sum + qty, 0), [cart]);

  const cartSubtotal = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = products.find((p) => p.id === id);
        if (!product) return sum;
        return sum + product.price * qty;
      }, 0),
    [cart, products],
  );

  const value = useMemo(
    () => ({
      products,
      cart,
      wishlist,
      user,
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      toggleWishlist,
      clearCart,
      signIn,
      signOut,
    }),
    [products, cart, wishlist, user, cartCount, cartSubtotal],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }
  return context;
}
