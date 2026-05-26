import Link from "next/link";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/for-designers", label: "Для дизайнеров" },
  { href: "/process", label: "Процесс" },
  { href: "/restoration", label: "Реставрация" },
  { href: "/contact", label: "Контакты" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-graphite/10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-10">
        <Link href="/" className="font-serif text-3xl tracking-wide">
          Atelier Nordique
        </Link>
        <nav className="flex flex-wrap gap-5 text-sm uppercase tracking-editorial text-graphite/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-tobacco">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
