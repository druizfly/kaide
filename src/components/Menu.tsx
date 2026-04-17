"use client";

import { useState } from "react";
import { menu, allergens, type Item, type Group, type AllergenKey } from "@/lib/menu";

export function Menu() {
  const [activeTab, setActiveTab] = useState(menu[0].id);
  const [lang, setLang] = useState<"es" | "en">("es");

  const current = menu.find((t) => t.id === activeTab) ?? menu[0];

  return (
    <section id="carta" className="border-t border-[var(--border)]/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Lo que servimos
            </p>
            <h2 className="text-4xl leading-tight text-[var(--foreground)] md:text-5xl">
              Carta corta,
              <em className="italic text-[var(--accent)]"> buena siempre</em>.
            </h2>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--background)] p-1 text-xs">
            <LangToggle current={lang} value="es" onClick={() => setLang("es")} label="ES" />
            <LangToggle current={lang} value="en" onClick={() => setLang("en")} label="EN" />
          </div>
        </div>

        <nav
          aria-label="Categorías de la carta"
          className="-mx-6 mb-12 flex gap-2 overflow-x-auto px-6 md:mx-0 md:px-0"
        >
          {menu.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--background)]"
                    : "border-[var(--border)] bg-transparent text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {current.groups.map((group) => (
            <MenuGroup key={group.title} group={group} lang={lang} />
          ))}
        </div>

        <AllergenLegend />
      </div>
    </section>
  );
}

function LangToggle({
  current,
  value,
  onClick,
  label,
}: {
  current: "es" | "en";
  value: "es" | "en";
  onClick: () => void;
  label: string;
}) {
  const active = current === value;
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 transition-colors ${
        active
          ? "bg-[var(--accent)] text-[var(--background)]"
          : "text-[var(--muted)] hover:text-[var(--accent)]"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

function MenuGroup({ group, lang }: { group: Group; lang: "es" | "en" }) {
  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-3">
        <h3 className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          {group.title}
        </h3>
        {group.inlineNote ? (
          <span className="shrink-0 text-xs italic text-[var(--muted)]">
            {group.inlineNote}
          </span>
        ) : null}
      </div>
      <ul className="space-y-5">
        {group.items.map((item) => (
          <MenuRow key={item.name} item={item} lang={lang} />
        ))}
      </ul>
      {group.footerNote ? (
        <p className="mt-6 border-t border-dashed border-[var(--border)] pt-4 text-xs leading-relaxed text-[var(--muted)]">
          {group.footerNote}
        </p>
      ) : null}
    </div>
  );
}

function MenuRow({ item, lang }: { item: Item; lang: "es" | "en" }) {
  const name = lang === "en" && item.nameEn ? item.nameEn : item.name;
  const description =
    lang === "en" && item.descriptionEn ? item.descriptionEn : item.description;

  return (
    <li className="flex items-baseline justify-between gap-6">
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <p className="font-serif text-lg leading-tight text-[var(--foreground)]">
            {name}
          </p>
          {item.allergens && item.allergens.length > 0 ? (
            <AllergenDots keys={item.allergens} />
          ) : null}
        </div>
        {description ? (
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            {description}
          </p>
        ) : null}
        {item.priceNote ? (
          <p className="mt-1 text-xs italic text-[var(--muted)]">{item.priceNote}</p>
        ) : null}
      </div>
      <span className="shrink-0 text-sm font-medium tabular-nums text-[var(--accent)]">
        {item.price}
      </span>
    </li>
  );
}

function AllergenDots({ keys }: { keys: AllergenKey[] }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label="Alérgenos">
      {keys.map((k) => (
        <span
          key={k}
          title={allergens[k].label}
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: allergens[k].color }}
        />
      ))}
    </span>
  );
}

function AllergenLegend() {
  return (
    <div className="mt-16 border-t border-[var(--border)] pt-8">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
        Alérgenos
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--muted)]">
        {(Object.keys(allergens) as AllergenKey[]).map((k) => (
          <li key={k} className="inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: allergens[k].color }}
            />
            {allergens[k].label}
          </li>
        ))}
      </ul>
    </div>
  );
}
