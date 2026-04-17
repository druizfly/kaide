import Link from "next/link";
import { Logo, Wordmark } from "./Logo";

const navItems = [
  { label: "Café", href: "#cafe" },
  { label: "Servicio", href: "#servicio" },
  { label: "Visítanos", href: "#visitanos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/60 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-[var(--accent)]">
          <Logo className="h-9 w-9" />
          <Wordmark className="text-[var(--accent)]" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#visitanos"
          className="hidden rounded-full border border-[var(--accent)] px-5 py-2 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--background)] md:inline-block"
        >
          Cómo llegar
        </a>
      </div>
    </header>
  );
}
