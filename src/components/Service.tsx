const pillars = [
  {
    title: "Te conocemos",
    body: "Si vienes dos veces, nos acordamos de tu café. Si vienes diez, hasta de tu perro.",
  },
  {
    title: "Sin prisas",
    body: "No cronometramos mesas ni te sacamos a empujones. El café está rico cuando está rico.",
  },
  {
    title: "Transparencia total",
    body: "Te contamos de dónde viene el grano, quién lo tostó y cuándo. Sin humo.",
  },
  {
    title: "Mesas pensadas",
    body: "Wifi estable, enchufes cerca y luz para leer. Un lugar donde se puede estar.",
  },
];

export function Service() {
  return (
    <section
      id="servicio"
      className="border-t border-[var(--border)]/60 bg-[var(--foreground)] text-[var(--background)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--accent-light)]">
              Nuestro servicio
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Lo más importante
              <em className="italic text-[var(--accent-light)]"> no cabe en una taza</em>.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--background)]/70">
              El café nos apasiona, pero lo que nos hace volver a la barra cada
              mañana es la gente. Aquí no hay clientes — hay parroquianos.
            </p>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-2xl bg-[var(--background)]/10 sm:grid-cols-2 md:col-span-7">
            {pillars.map((p, i) => (
              <li
                key={p.title}
                className="bg-[var(--foreground)] p-8 transition-colors hover:bg-[var(--accent)]/30"
              >
                <p className="mb-4 font-serif text-xl text-[var(--accent-light)]">
                  0{i + 1}
                </p>
                <h3 className="mb-3 text-xl text-[var(--background)]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--background)]/70">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
