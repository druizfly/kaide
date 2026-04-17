export function About() {
  return (
    <section id="cafe" className="border-t border-[var(--border)]/60 bg-[var(--surface)]/50">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Quiénes somos
          </p>
          <h2 className="text-4xl leading-tight text-[var(--foreground)] md:text-5xl">
            El café que nos gustaría
            <em className="italic text-[var(--accent)]"> tomar a nosotros</em>.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:col-span-7">
          <p>
            Kaide nació de una idea sencilla: abrir una cafetería donde todo —
            desde el grano hasta quien te recibe en la barra — estuviera
            cuidado. Un sitio sin artificio, con mesas donde quedarse un rato.
          </p>
          <p>
            Trabajamos con pequeños tostadores, rotamos orígenes cada pocas
            semanas y te contamos, si quieres, qué tiene de especial cada
            café. Acompañamos con repostería hecha a mano y un puñado de
            platos simples que cambian con la temporada.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-8 text-[var(--foreground)]">
            <Stat label="Cafés de origen" value="12+" />
            <Stat label="Rotación mensual" value="3-4" />
            <Stat label="Hecho en casa" value="100%" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-[var(--accent)] md:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        {label}
      </p>
    </div>
  );
}
