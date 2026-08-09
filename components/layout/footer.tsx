import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { navigation, siteConfig } from "@/lib/site-config";
export function Footer() {
  return <footer className="bg-bordeaux py-16 text-white sm:py-20"><Container>
    <div className="grid gap-14 border-b border-white/20 pb-14 md:grid-cols-3">
      <div><Logo light /><p className="mt-6 text-sm leading-6 text-white/65">{siteConfig.address.street}<br />{siteConfig.address.postalCode} {siteConfig.address.city}</p></div>
      <div><p className="footer-label">Navigation</p><ul className="mt-5 grid">{navigation.map(i => <li key={i.href}><Link className="inline-flex min-h-9 items-center text-sm text-white/70 hover:text-white" href={i.href}>{i.label}</Link></li>)}</ul></div>
      <div><p className="footer-label">Horaires</p><dl className="mt-5 space-y-3">{siteConfig.hours.map(i => <div key={i.days} className="flex justify-between gap-4 text-sm"><dt className="text-white/60">{i.days}</dt><dd className="text-right">{i.hours}</dd></div>)}</dl><a className="mt-7 inline-block font-serif text-2xl" href={siteConfig.phoneHref}>{siteConfig.phone}</a></div>
    </div><div className="flex flex-col gap-3 pt-6 text-[.65rem] uppercase tracking-[.14em] text-white/60 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Boucherie Tourteaux</p><p>Avize · Côte des Blancs</p></div>
  </Container></footer>;
}
