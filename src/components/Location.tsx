import Image from "next/image";

const hours = [
  { days: "Lunes – Viernes", time: "08:00 – 19:00" },
  { days: "Sábado", time: "09:00 – 20:00" },
  { days: "Domingo", time: "09:30 – 15:00" },
];

export function Location() {
  return (
    <section id="visitanos" className="border-t border-[var(--border)]/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="relative mb-10 aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[var(--surface)]">
            <Image
              src="/images/location.jpg"
              alt="Fachada de Kaide en Valencia"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Visítanos
          </p>
          <h2 className="text-4xl leading-tight text-[var(--foreground)] md:text-5xl">
            Te esperamos
            <em className="italic text-[var(--accent)]"> en Valencia</em>.
          </h2>

          <address className="mt-8 not-italic text-lg text-[var(--foreground)]">
            Kaide Coffee
            <br />
            <span className="text-[var(--muted)]">
              C/ de la Reina, 23
              <br />
              46011 Valencia · Poblados Marítimos
            </span>
          </address>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Horario
            </h3>
            <ul className="space-y-2 text-[var(--foreground)]">
              {hours.map((h) => (
                <li
                  key={h.days}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed border-[var(--border)] pb-2"
                >
                  <span className="text-sm text-[var(--muted)]">{h.days}</span>
                  <span className="text-sm tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://maps.app.goo.gl/XyCiUPgYjxBSCfRNA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
            >
              Abrir en Google Maps →
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-[var(--accent)]/30 px-6 text-sm font-medium text-[var(--accent)] transition-colors hover:border-[var(--accent)]"
            >
              Síguenos @kaide
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[var(--surface)]">
            <iframe
              title="Ubicación de Kaide en Valencia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.65!2d-0.3292401!3d39.4647821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60499a01e51f03%3A0xbe55780ccced5119!2sKaide!5e0!3m2!1ses!2ses!4v1712000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
