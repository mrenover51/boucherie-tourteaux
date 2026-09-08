import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return <footer className="bg-surface-black pb-20 text-on-dark xl:pb-0"><Container className="py-16 sm:py-20">
    <div className="grid gap-12 border-b border-on-dark/14 pb-14 md:grid-cols-2 xl:grid-cols-[1.2fr_.8fr_1fr_1.25fr]">
      <div><Logo light/><p className="mt-6 max-w-xs text-sm leading-7 text-on-dark/58">Boucherie à Avize, au cœur de la Côte des Blancs, avec service traiteur, livraison et vente à emporter.</p><Link href="/boucherie-autour-avize" className="mt-7 inline-flex items-center border border-accent/35 px-4 py-3 text-[.57rem] font-bold tracking-[.14em] text-accent-light">AUTOUR D’AVIZE ET D’ÉPERNAY</Link></div>
      <div><FooterTitle>Coordonnées</FooterTitle><ul className="mt-6 space-y-4 text-sm text-on-dark/65"><li className="flex gap-3"><MapPin className="size-4 shrink-0 text-accent-light"/>33 rue Pasteur<br/>51190 Avize</li><li><a href={siteConfig.phoneHref} className="flex gap-3"><Phone className="size-4 text-accent-light"/>{siteConfig.phone}</a></li><li><a href={`mailto:${siteConfig.email}`} className="flex gap-3 break-all"><Mail className="size-4 shrink-0 text-accent-light"/>{siteConfig.email}</a></li></ul></div>
      <div><FooterTitle>Horaires d’ouverture</FooterTitle><dl className="mt-6 space-y-4">{siteConfig.hours.map(h=><div key={h.days} className="border-b border-on-dark/10 pb-3 text-sm"><dt className="text-on-dark/45">{h.days}</dt><dd className="mt-1 text-on-dark/85">{h.hours}</dd></div>)}</dl></div>
      <div><FooterTitle>Nous trouver</FooterTitle><div className="mt-6 overflow-hidden rounded-lg border border-on-dark/10"><iframe title="Carte de la Boucherie Tourteaux" src="https://www.google.com/maps?q=33%20rue%20Pasteur%2051190%20Avize&output=embed" className="h-52 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div>
    </div>
    <div className="flex flex-col gap-5 pt-7 text-[.58rem] uppercase tracking-[.12em] text-on-dark/45 lg:flex-row lg:items-center lg:justify-between"><p>© {new Date().getFullYear()} Boucherie Tourteaux. Tous droits réservés.</p><div className="flex flex-wrap gap-5"><Link href="/contact">Mentions légales</Link><Link href="/contact">Confidentialité</Link><Link href="/sitemap.xml">Plan du site</Link><Link href="/contact">FAQ</Link></div><a href="#contenu" className="flex items-center gap-2 text-accent-light">Retour en haut <span className="grid size-9 place-items-center rounded-full border border-accent/40"><ArrowUp className="size-4"/></span></a></div>
    <p className="mt-8 border-t border-on-dark/10 pt-6 text-center text-[.62rem] tracking-[.08em] text-on-dark/40">
      Site créé par{" "}
      <a
        href="https://mrdstudio.fr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visiter le site de MRD Studio (nouvel onglet)"
        className="text-on-dark/60 underline decoration-on-dark/20 underline-offset-4 transition-colors duration-300 hover:text-accent-light hover:decoration-accent-light focus-visible:text-accent-light"
      >
        MRD Studio
      </a>
    </p>
  </Container></footer>;
}
function FooterTitle({children}:{children:React.ReactNode}) { return <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-accent-light">{children}</p>; }
