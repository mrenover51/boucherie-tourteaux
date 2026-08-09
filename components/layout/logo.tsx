import Link from "next/link";
export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" aria-label="Boucherie Tourteaux — Accueil" className={`relative z-50 text-center leading-none ${light ? "text-white" : "text-bordeaux"}`}><span className="block font-serif text-2xl tracking-[.08em] sm:text-[1.75rem]">TOURTEAUX</span><span className="mt-1 block text-[.55rem] font-semibold uppercase tracking-[.32em]">Boucherie · Avize</span></Link>;
}
