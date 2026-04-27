import { BadgePercent } from "lucide-react";

const flashDeals = [
  "Up to 60% OFF wigs and hair extensions",
  "Buy 2 cosmetics, get 1 free",
  "Free delivery over $80 today only",
  "New arrivals: premium handbags and heels",
];

export function FlashSale() {
  return (
    <section className="overflow-hidden border-b border-rose-100 bg-empire-700 py-2 text-white dark:border-slate-800 dark:bg-slate-900">
      <div className="animate-marquee whitespace-nowrap">
        {[...flashDeals, ...flashDeals].map((deal, index) => (
          <span key={`${deal}-${index}`} className="mx-6 inline-flex items-center text-sm">
            <BadgePercent className="mr-2 h-4 w-4 text-amber-300" />
            {deal}
          </span>
        ))}
      </div>
    </section>
  );
}
