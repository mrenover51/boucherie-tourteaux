import Link from "next/link";
import { ArrowUp, Camera, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return <footer className="bg-bordeaux-dark pb-20 text-white xl:pb-0"><Container className="py-16 sm:py-20">
    <div className="grid gap-12 border-b border-white/14 pb-14 md:grid-cols-2 xl:grid-cols-[1.2fr_.8fr_1fr_1.25fr]">
      <div><Logo light/><p className="mt-6 max-w-xs text-sm leading-7 text-white/58">Maison familiale à Avize, au service du goût, du produit juste et des belles tables depuis plusieurs générations.</p><div className="mt-6 flex gap-3"><a href="#" aria-label="Instagram" className="footer-social"><Camera/></a><a href="#" aria-label="Facebook" className="footer-social"><Share2/></a></div><div className="mt-7 inline-flex items-center border border-gold/35 px-4 py-3 text-[.57rem] font-bold tracking-[.14em] text-gold">VIANDE FRANÇAISE 100% SÉLECTIONNÉE</div></div>
      <div><FooterTitle>Coordonnées</FooterTitle><ul className="mt-6 space-y-4 text-sm text-white/65"><li className="flex gap-3"><MapPin className="size-4 shrink-0 text-gold"/>33 rue Pasteur<br/>51190 Avize</li><li><a href={siteConfig.phoneHref} className="flex gap-3"><Phone className="size-4 text-gold"/>{siteConfig.phone}</a></li><li><a href={`mailto:${siteConfig.email}`} className="flex gap-3 break-all"><Mail className="size-4 shrink-0 text-gold"/>{siteConfig.email}</a></li></ul></div>
      <div><FooterTitle>Horaires d’ouverture</FooterTitle><dl className="mt-6 space-y-4">{siteConfig.hours.map(h=><div key={h.days} className="border-b border-white/10 pb-3 text-sm"><dt className="text-white/45">{h.days}</dt><dd className="mt-1 text-white/85">{h.hours}</dd></div>)}</dl></div>
      <div><FooterTitle>Nous trouver</FooterTitle><div className="mt-6 overflow-hidden rounded-lg border border-white/10"><iframe title="Carte de la Boucherie Tourteaux" src="https://www.google.com/maps?q=33%20rue%20Pasteur%2051190%20Avize&output=embed" className="h-52 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div>
    </div>
    <div className="flex flex-col gap-5 pt-7 text-[.58rem] uppercase tracking-[.12em] text-white/45 lg:flex-row lg:items-center lg:justify-between"><p>© {new Date().getFullYear()} Boucherie Tourteaux. Tous droits réservés.</p><div className="flex flex-wrap gap-5"><Link href="/contact">Mentions légales</Link><Link href="/contact">Confidentialité</Link><Link href="/sitemap.xml">Plan du site</Link><Link href="/contact">FAQ</Link></div><a href="#contenu" className="flex items-center gap-2 text-gold">Retour en haut <span className="grid size-9 place-items-center rounded-full border border-gold/40"><ArrowUp className="size-4"/></span></a></div>
  </Container></footer>;
}
function FooterTitle({children}:{children:React.ReactNode}) { return <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-gold">{children}</p>; }
