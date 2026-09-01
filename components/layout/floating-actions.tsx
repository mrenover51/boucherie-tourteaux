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
export function FloatingActions({ phoneHref }: { phoneHref: string }) {
  return (
    <>
      <aside
        aria-label="Actions rapides"
        className="fixed top-[59%] left-0 z-40 hidden -translate-y-1/2 overflow-hidden rounded-r-lg border border-l-0 border-white/10 bg-[#111]/88 text-white shadow-2xl backdrop-blur-md xl:block"
      >
        {actions.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href === "phone" ? phoneHref : href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex w-24 flex-col items-center gap-2 border-b border-white/10 px-2 py-4 text-[.56rem] uppercase tracking-[.12em] last:border-0 hover:bg-bordeaux"
          >
            <Icon
              className={`size-5 stroke-[1.5] ${label === "WhatsApp" ? "text-emerald-400" : "text-gold"}`}
            />
            {label}
          </a>
        ))}
      </aside>
      <nav
        aria-label="Actions rapides mobiles"
        className="fixed inset-x-3 bottom-3 z-40 flex justify-around rounded-xl border border-white/10 bg-[#111]/92 px-2 py-2 text-white shadow-2xl backdrop-blur-md xl:hidden"
      >
        {actions.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href === "phone" ? phoneHref : href}
            className="flex min-w-20 flex-col items-center gap-1 text-[.52rem] uppercase tracking-[.1em]"
          >
            <Icon className="size-4 text-gold" />
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
