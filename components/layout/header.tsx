"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const marker = document.createElement("span");
    marker.className = "pointer-events-none absolute top-0 h-px w-px";
    marker.setAttribute("aria-hidden", "true");
    document.body.prepend(marker);
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(marker);
    return () => { observer.disconnect(); marker.remove(); };
  }, []);

  const dark = scrolled || open;
  const overDarkHero = pathname === "/" || pathname === "/boucherie" || pathname === "/produits";
  const lightText = dark || overDarkHero;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${dark ? "border-white/10 bg-[#120d0e]/92 text-white supports-[backdrop-filter:blur(1px)]:backdrop-blur-md" : `border-transparent bg-transparent ${lightText ? "text-white" : "text-bordeaux"}`}`}>
      <Container className={`grid grid-cols-[1fr_auto_1fr] items-center transition-[height] duration-500 ${scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"}`}>
        <button type="button" className="relative z-50 flex min-h-11 w-fit items-center gap-3 text-[.65rem] font-semibold uppercase tracking-[.18em] lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          <span className="grid gap-1.5" aria-hidden><span className={`h-px w-5 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} /><span className={`h-px w-5 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} /></span>
          {open ? "Fermer" : "Menu"}
        </button>
        <nav className="hidden lg:block" aria-label="Navigation principale"><ul className="flex gap-8">{navigation.slice(0, 3).map((item) => <NavLink key={item.href} {...item} active={pathname === item.href} />)}</ul></nav>
        <span className={`origin-center transition-transform duration-500 ${scrolled ? "scale-90" : "scale-100"}`}><Logo light={lightText} /></span>
        <nav className="hidden justify-self-end lg:block" aria-label="Navigation secondaire"><ul className="flex gap-8">{navigation.slice(3).map((item) => <NavLink key={item.href} {...item} active={pathname === item.href} />)}</ul></nav>
        <a href={siteConfig.phoneHref} className="relative z-50 flex min-h-11 items-center justify-self-end text-xs font-semibold lg:hidden">Appeler</a>
      </Container>
      {open && (
        <div id="mobile-menu" className="mobile-menu fixed inset-0 z-40 min-h-dvh bg-bordeaux text-white lg:hidden">
          <Container className="flex min-h-dvh flex-col justify-between pt-32 pb-10">
            <nav aria-label="Navigation mobile"><ul>{navigation.map((item) => <li className="mobile-menu-item" key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className="block border-b border-white/15 py-3 font-serif text-4xl">{item.label}</Link></li>)}</ul></nav>
            <p className="text-sm text-white/70">{siteConfig.address.street} · {siteConfig.address.postalCode} {siteConfig.address.city}</p>
          </Container>
        </div>
      )}
    </header>
  );
}

function NavLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  return <li><Link href={href} aria-current={active ? "page" : undefined} className={`relative py-3 text-[.65rem] font-semibold uppercase tracking-[.16em] transition-colors hover:text-gold ${active ? "text-gold" : "text-current/75"}`}>{label}</Link></li>;
}
