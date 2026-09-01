import Link from "next/link";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="border-b border-bordeaux/10 bg-background">
      <ol className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-4 text-xs text-foreground/55 sm:px-8">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-bordeaux">{item.name}</span>
            ) : (
              <Link href={item.href} className="transition hover:text-bordeaux">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

