"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Moon,
  Phone,
  ShoppingBag,
  Sun,
  X,
} from "lucide-react";
import { Logo } from "./logo";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/lib/site-config";
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 26);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] flex h-6 items-center justify-center overflow-hidden bg-surface-dark px-3 text-center text-[.45rem] font-bold tracking-[.105em] text-on-dark sm:text-[.54rem]">
        BOUCHERIE TOURTEAUX <span className="mx-2 text-accent-light">•</span> 33 RUE
        PASTEUR <span className="mx-2 text-accent-light">•</span> 51190 AVIZE
      </div>
      <header
        className={`fixed inset-x-0 top-6 border-b transition-all duration-500 ${open ? "z-[80]" : "z-50"} ${scrolled || open ? "border-on-dark/10 bg-surface-black/98 text-on-dark shadow-[0_8px_30px_rgba(0,0,0,.28)] xl:backdrop-blur-lg" : "border-on-dark/10 bg-gradient-to-b from-black/30 to-transparent text-on-dark"}`}
      >
        <Container
          className={`flex items-center justify-between gap-5 transition-[height] ${scrolled ? "h-[76px]" : "h-[96px]"}`}
        >
          <Logo light />
          <nav className="hidden xl:block" aria-label="Navigation principale">
            <ul className="flex items-center gap-7 2xl:gap-9">
              {navigation.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    aria-current={pathname === i.href ? "page" : undefined}
                    className={`nav-link ${pathname === i.href ? "active" : ""}`}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-2.5 xl:flex">
            <a
              href={siteConfig.phoneHref}
              aria-label="Téléphoner"
              className="header-icon"
            >
              <Phone className="size-4" />
            </a>
            <Link
              href="/contact"
              className="flex h-12 items-center gap-2 bg-surface-dark px-5 text-[13px] font-bold tracking-[.1em] transition-colors hover:bg-accent"
            >
              <ShoppingBag className="size-4 text-accent-light" /> CONTACT
            </Link>
            <button
              onClick={() => setDark((v) => !v)}
              className="header-icon"
              aria-label="Changer le thème"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid size-11 place-items-center xl:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </Container>
        {open && (
          <div
            id="mobile-nav"
            className={`mobile-menu-backdrop fixed inset-x-0 bottom-0 text-on-dark xl:hidden ${scrolled ? "top-[100px]" : "top-[120px]"}`}
          >
            <Container className="mobile-menu-panel flex h-full flex-col justify-between overflow-y-auto px-5 pt-5 pb-28 sm:px-8 sm:pt-7 sm:pb-32">
              <nav aria-label="Navigation mobile">
                <ul>
                  {navigation.map((i) => (
                    <li key={i.href} className="mobile-menu-item">
                      <Link
                        onClick={() => setOpen(false)}
                        href={i.href}
                        className="block border-b border-on-dark/10 py-2.5 font-serif text-[clamp(1.8rem,7.5vw,3.35rem)] leading-[1.05] transition-colors hover:text-accent-light sm:py-3"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 border-t border-on-dark/10 pt-6">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex min-h-11 items-center font-serif text-2xl text-accent-light"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-2 text-sm text-on-dark/60">
                  33 rue Pasteur · 51190 Avize
                </p>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
