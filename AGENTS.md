# AGENTS.md - FPS React Frontend

## Project Overview
React 19 + Tailwind CSS + shadcn/ui (New York style) static site for Freearcs Pharma Services, a French CRO. Built with Create React App wrapped by Craco.

## Commands
- `npm start` - Dev server (via `craco start`)
- `npm run build` - Production build to `build/` (via `craco build`)
- `npm test` - Jest tests (via `craco test`) — no tests exist currently

## Architecture Notes
- **Path alias**: `@/` maps to `src/` (configured in `jsconfig.json` + `craco.config.js`)
- **Routing**: `react-router-dom` v7 with `BrowserRouter`, all pages wrapped in `Layout` component (Header + Footer + CookieBanner)
- **i18n**: Custom `LanguageContext` with FR/EN, translations in `src/i18n/translations.js`, language persisted to `localStorage` as `fps-language`
- **UI components**: shadcn/ui in `src/components/ui/`, uses Radix primitives + Lucide icons
- **Pages**: `src/pages/` (12 pages), components in `src/components/`

## Config Quirks
- **Craco config** (`craco.config.js`): Loads `dotenv`, optional health check plugin (`ENABLE_HEALTH_CHECK=true`), visual edits plugin in dev
- **ESLint**: Configured inline in craco config, not separate `.eslintrc`
- **Tailwind**: v3 with `tailwindcss-animate` plugin, CSS variables for theming, custom fonts (Raleway, Nunito)
- **Package manager**: `package.json` declares yarn but repo uses npm (has `package-lock.json`, no `yarn.lock`)

## Brand Colors
Green `#2E9013`, Mauve `#573D4E`, Amber `#F5A617`, Red `#D81C20` — defined in CSS variables, not Tailwind config

## Env
- `.env` loaded by craco config via `dotenv`
- `ENABLE_HEALTH_CHECK=true` enables webpack health check plugin + endpoints
- `NODE_ENV` set by craco (development for start, production for build)
