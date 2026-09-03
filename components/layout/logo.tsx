import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Boucherie Tourteaux — Accueil" className={`relative z-50 shrink-0 text-left leading-none xl:text-center ${light ? "text-on-dark" : "text-foreground"}`}>
      <span className="block font-serif text-[1.8rem] tracking-[.075em] sm:text-[2.05rem] xl:text-[2.35rem]">TOURTEAUX</span>
      <span className="mt-1 block text-[.54rem] font-semibold uppercase tracking-[.31em] xl:text-[.6rem]">Boucherie · Avize</span>
    </Link>
  );
}
