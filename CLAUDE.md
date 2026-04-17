# Kaide

Specialty coffee landing page for **Kaide**, a café in Valencia. Single-page, Spanish-first, static marketing site.

## Stack (actual, installed)

- Next.js **16.2.4** (App Router)
- React **19.2.4**
- TypeScript 5
- Tailwind CSS **v4** (via `@tailwindcss/postcss`, no `tailwind.config.*` — tokens live in CSS)
- ESLint 9 (`eslint-config-next`)

No backend, database, tests, analytics, or API routes are wired up. If you need any of those, scaffold them — don't assume they exist.

## Commands

- `npm run dev` — dev server on `localhost:3000`
- `npm run build` — production build
- `npm run start` — serve the built app
- `npm run lint` — ESLint

## Structure

- `src/app/` — App Router entry
  - `layout.tsx` loads `Inter` + `Fraunces` via `next/font/google`, sets Spanish `<html lang="es">` and SEO metadata
  - `page.tsx` composes the landing page sections in order
  - `globals.css` — Tailwind import + brand design tokens + `fade-up` / `grain` utilities
- `src/components/` — page sections: `Header`, `Hero`, `About`, `Menu`, `Service`, `Location`, `Footer`, plus `Logo` / `Wordmark`
- `src/lib/menu.ts` — **single source of truth** for the carta (categories, items, prices, allergens, ES/EN copy). Edit here to change the menu.
- `public/` — placeholder SVGs only (no real photography yet)

## Design system

Brand colors live as CSS variables in `src/app/globals.css` and are exposed to Tailwind via `@theme inline`:

`--background`, `--foreground`, `--surface`, `--accent`, `--accent-light`, `--muted`, `--border`.

Reference them in JSX as `bg-[var(--accent)]`, `text-[var(--muted)]`, etc. Don't introduce ad-hoc hex values — extend the token palette instead.

Fonts: `--font-inter` (body) and `--font-fraunces` (headings, italic display).

## Conventions

- **Language**: UI copy is Spanish by default. Menu items in `src/lib/menu.ts` support optional `nameEn` / `descriptionEn` for the ES/EN toggle in `Menu.tsx`.
- **Server vs client**: components are server components unless they need state. `Menu.tsx` is currently the only `"use client"` (tab + language state).
- **Imports**: use the `@/` alias for `src/` (`@/components/...`, `@/lib/menu`).
- **Comments**: don't add them unless the *why* is non-obvious — identifiers should carry the meaning.
- **Allergens** (`src/lib/menu.ts`): `gluten`, `cacahuetes`, `frutosCascara`, `mostaza`, `sesamo`, `soja`, `lacteos`, `pescado`. Each renders as a colored dot matching the printed carta.

## Gotcha: Next.js 16

This is Next.js 16 — APIs, conventions, and file structure may differ from older training data. See `AGENTS.md` and prefer `node_modules/next/dist/docs/` over guessing.
