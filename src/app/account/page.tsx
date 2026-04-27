"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader, PageShell } from "@/components/ui/page-shell";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { useStore } from "@/lib/store";

export default function AccountPage() {
  const { user, signOut, cartCount, wishlist } = useStore();

  if (!user) {
    return (
      <PageShell centered>
        <SurfaceCard className="p-8 text-center">
          <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">
            My Account
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Sign in to view your profile, orders, and saved items.</p>
          <div className="mt-5">
            <ButtonLink href="/auth/sign-in">Sign In</ButtonLink>
          </div>
        </SurfaceCard>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <SurfaceCard className="mx-auto max-w-4xl">
        <PageHeader title={`Welcome, ${user.name}`} subtitle={user.email} />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-300">Cart items</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">{cartCount}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-300">Wishlist items</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">{wishlist.length}</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <ButtonLink href="/wishlist">Open Wishlist</ButtonLink>
          <PrimaryButton type="button" variant="outline" onClick={signOut}>
            Sign Out
          </PrimaryButton>
        </div>
      </SurfaceCard>
    </PageShell>
  );
}
