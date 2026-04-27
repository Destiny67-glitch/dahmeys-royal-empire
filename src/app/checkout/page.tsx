"use client";

import { useRouter } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { FormField, TextInput } from "@/components/ui/form-field";
import { PageHeader, PageShell } from "@/components/ui/page-shell";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { useStore } from "@/lib/store";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, products, cartSubtotal, clearCart } = useStore();

  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const product = products.find((productItem) => productItem.id === id);
      if (!product) return null;
      return { product, qty };
    })
    .filter(Boolean) as { product: (typeof products)[number]; qty: number }[];

  const shipping = cartItems.length ? 12 : 0;
  const total = cartSubtotal + shipping;

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl">
        <PageHeader title="Checkout" subtitle="Secure your royal order in one step." />

        <div className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard>
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Delivery details</h2>
            <div className="space-y-3">
              <FormField label="Full Name">
                <TextInput placeholder="Full name" />
              </FormField>
              <FormField label="Email">
                <TextInput placeholder="Email" type="email" />
              </FormField>
              <FormField label="Address">
                <TextInput placeholder="Address" />
              </FormField>
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Order summary</h2>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {cartItems.length === 0 && <p>Your cart is empty.</p>}
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center justify-between">
                  <span>
                    {product.name} x {qty}
                  </span>
                  <span>${(product.price * qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1 border-t border-slate-200 pt-4 text-sm dark:border-slate-700">
              <div className="flex justify-between"><span>Subtotal</span><span>${cartSubtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
              <div className="flex justify-between font-semibold text-slate-900 dark:text-white"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
            <PrimaryButton
              type="button"
              fullWidth
              disabled={!cartItems.length}
              onClick={() => {
                clearCart();
                router.push("/checkout/success");
              }}
              className="mt-5"
            >
              Place Order
            </PrimaryButton>
            <ButtonLink href="/" variant="ghost" className="mt-3 block text-center">
              Continue shopping
            </ButtonLink>
          </SurfaceCard>
        </div>
      </div>
    </PageShell>
  );
}
