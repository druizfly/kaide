import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
        <div className="fade-up md:col-span-7">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            <span className="h-px w-8 bg-[var(--accent-light)]" />
            Café de especialidad · Valencia
          </p>
          <h1 className="text-5xl leading-[1.05] text-[var(--foreground)] md:text-7xl lg:text-8xl">
            Un café
            <br />
            <em className="font-light italic text-[var(--accent)]">
              bien hecho
            </em>
            ,<br />
            sin prisa.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
            En Kaide cuidamos cada detalle: grano de origen, tueste reciente,
            baristas que miden y sirven con cariño. Un sitio para pararse, leer
            y disfrutar de lo que hay en la taza.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#visitanos"
              className="inline-flex h-12 items-center rounded-full bg-[var(--accent)] px-7 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
            >
              Cómo llegar →
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[var(--surface)]">
            <Image
              src="/images/hero.jpg"
              alt="Interior de Kaide, café de especialidad en Valencia"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-light)]/20 via-transparent to-[var(--accent)]/30" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[var(--background)]/85 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Especial de la semana
              </p>
              <p className="mt-1 font-serif text-xl text-[var(--foreground)]">
                Etiopía · Yirgacheffe
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Notas de jazmín, melocotón y miel
              </p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 hidden rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] shadow-sm md:block">
            Tueste propio
          </div>
        </div>
      </div>
    </section>
  );
}
