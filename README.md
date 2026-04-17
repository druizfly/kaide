# Kaide

Landing page for **Kaide**, a specialty coffee shop in Valencia. Single page, Spanish-first, static.

Sections: hero, about, carta (with ES/EN toggle and allergen legend), service principles, location + Google Maps embed, footer.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm run start` — serve the built app
- `npm run lint` — ESLint

## Project layout

```
src/
  app/
    layout.tsx     # fonts, <html lang="es">, SEO metadata
    page.tsx       # composes the landing sections
    globals.css    # Tailwind + brand CSS variables
  components/      # Header, Hero, About, Menu, Service, Location, Footer, Logo
  lib/
    menu.ts        # source of truth for the carta
public/
  images/          # photos referenced from the site (hero, about, location)
pictures/          # raw photo materials, gitignored (not shipped)
```

## Editing the menu

All menu content lives in [`src/lib/menu.ts`](src/lib/menu.ts). Each item looks like:

```ts
{
  name: "Salmón",
  nameEn: "Salmon",                 // optional, shown when EN toggle is on
  description: "Ricota, salmón, …", // optional
  descriptionEn: "Ricotta, salmon, …",
  price: "11 €",
  allergens: ["gluten", "lacteos", "pescado", "mostaza"],
}
```

Allergen keys (`gluten`, `cacahuetes`, `frutosCascara`, `mostaza`, `sesamo`, `soja`, `lacteos`, `pescado`) render as colored dots and a legend.

## Design tokens

Brand colors and typography live as CSS variables in [`src/app/globals.css`](src/app/globals.css) and are exposed to Tailwind via `@theme inline`. Use them in JSX like `bg-[var(--accent)]` or `text-[var(--muted)]`.

## Deploy

Target: [Vercel](https://vercel.com).
