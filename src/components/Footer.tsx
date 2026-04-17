import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]/60 bg-[var(--surface)]/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 text-[var(--accent)]">
            <Logo className="h-10 w-10" />
            <span className="font-serif text-2xl">kaide</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Café de especialidad en Valencia. Grano cuidado, mesas cómodas y un
            servicio que te hace volver.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Explora
          </h4>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li><a href="#cafe" className="hover:text-[var(--accent)]">El café</a></li>
            <li><a href="#carta" className="hover:text-[var(--accent)]">La carta</a></li>
            <li><a href="#servicio" className="hover:text-[var(--accent)]">Servicio</a></li>
            <li><a href="#visitanos" className="hover:text-[var(--accent)]">Visítanos</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>hola@kaide.cafe</li>
            <li>
              <a
                href="https://maps.app.goo.gl/XyCiUPgYjxBSCfRNA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                C/ de la Reina, 23 · Valencia ↗
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                Instagram ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)]/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-[var(--muted)] md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} Kaide. Todos los derechos reservados.</p>
          <p>Hecho con cariño, cafeína y Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
