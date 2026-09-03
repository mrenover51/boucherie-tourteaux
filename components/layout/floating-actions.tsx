"use client";
import { MapPin, Phone, ShoppingBag } from "lucide-react";
const actions = [
  { label: "Appeler", icon: Phone, href: "phone" },
  {
    label: "Itinéraire",
    icon: MapPin,
    href: "https://www.google.com/maps/dir/?api=1&destination=33+rue+Pasteur+51190+Avize",
  },
  { label: "Contact", icon: ShoppingBag, href: "/contact" },
];
const mobileActions = actions.slice(0, 2);
export function FloatingActions({ phoneHref }: { phoneHref: string }) {
  return (
    <>
      <aside
        aria-label="Actions rapides"
        className="fixed top-[59%] left-0 z-40 hidden -translate-y-1/2 overflow-hidden rounded-r-lg border border-l-0 border-on-dark/10 bg-surface-black/88 text-on-dark shadow-2xl backdrop-blur-md xl:block"
      >
        {actions.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href === "phone" ? phoneHref : href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex w-24 flex-col items-center gap-2 border-b border-on-dark/10 px-2 py-4 text-[.56rem] uppercase tracking-[.12em] last:border-0 hover:bg-surface-dark"
          >
            <Icon className="size-5 stroke-[1.5] text-accent-light" />
            {label}
          </a>
        ))}
      </aside>
      <nav
        aria-label="Actions rapides mobiles"
        className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 rounded-xl border border-on-dark/10 bg-surface-black/92 p-2 text-on-dark shadow-2xl backdrop-blur-md xl:hidden"
      >
        {mobileActions.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href === "phone" ? phoneHref : href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex min-h-11 w-full flex-col items-center justify-center gap-1 border-r border-on-dark/10 text-[.52rem] uppercase tracking-[.1em] last:border-r-0"
          >
            <Icon className="size-4 text-accent-light" />
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
