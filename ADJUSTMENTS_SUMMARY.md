# Adjustments Summary

Date: 2026-05-06

This document summarizes the adjustments made during the frontend stabilization, optimization, visual identity, GDPR, and dependency audit pass.

## Runtime Fixes

### Blank Page Fix

- Moved `BrowserRouter` above `ErrorBoundary` in `src/App.jsx`.
- Reason: the error fallback uses React Router `<Link>`, which must be rendered inside a router context.
- Result: runtime errors now render through the error boundary instead of causing a blank page.

### Missing SEO Import

- Added the missing `SEO` import in `src/pages/HomePage.jsx`.
- Fixed the runtime error: `ReferenceError: SEO is not defined`.

### SEO JSX Attribute Fix

- Updated `hreflang` to `hrefLang` in `src/components/SEO.jsx`.
- Result: removed the React invalid DOM property warning.

## Image Optimization

### Heavy Images Converted to WebP

The large PNG assets used by page visuals were converted to WebP and the React references were updated.

| Original | Replacement | Approx. WebP size | Used in |
| --- | --- | ---: | --- |
| `public/reunion-equipe_gemini.png` | `public/reunion-equipe_gemini.webp` | 168 KB | `src/pages/HomePage.jsx` |
| `public/main-ampoule-succes.png` | `public/main-ampoule-succes.webp` | 176 KB | `src/pages/AboutPage.jsx` |
| `public/famille-tablette-capsules.png` | `public/famille-tablette-capsules.webp` | 188 KB | `src/pages/WhyChooseUsPage.jsx` |
| `public/cardio-stethoscope-digital.png` | `public/cardio-stethoscope-digital.webp` | 164 KB | `src/pages/TherapeuticExpertisePage.jsx` |
| `public/medecin-bebe-capsules.png` | `public/medecin-bebe-capsules.webp` | 160 KB | `src/pages/TherapeuticExpertisePage.jsx` |

The replaced heavy PNG files were removed after confirming they were no longer referenced.

### Header Logo Optimization

- Converted `public/logo_fps.png` to `public/logo_fps.webp`.
- Size changed from approximately `1.7 MB` to `296 KB`.
- Updated `src/components/Header.jsx` to use `/logo_fps.webp`.
- The original PNG was kept because it was explicitly requested to convert and use it, not delete it.

## Visual Identity

### Header Token Cleanup

- Removed arbitrary Tailwind values and hardcoded brand hex colors from `src/components/Header.jsx`.
- Replaced them with existing Tailwind/theme tokens:
  - `text-primary`
  - `text-secondary`
  - `bg-primary`
  - `bg-secondary`
  - `bg-accent`
  - `bg-muted`
  - `border-border`
- Replaced `max-w-[1800px]` with `max-w-screen-2xl`.
- Result: Header now follows the project design token system instead of isolated one-off values.

### External Header Logo Removed

- Replaced the previous remote customer-assets logo reference with a local optimized WebP asset.
- Result: no third-party request is needed for the Header logo.

### Footer Logo Cleanup

- Removed the commented external logo URL from `src/components/Footer.jsx`.
- Normalized the footer logo path to `/freearcs-pharma-services_logo-white.svg`.

## GDPR And Consent

### Google Fonts Removed

- Removed Google Fonts preconnects from `index.html`.
- Removed the `@import` call to `fonts.googleapis.com` from `src/index.css`.
- Updated font stacks to local/system fonts in:
  - `src/index.css`
  - `tailwind.config.js`
- Result: no Google Fonts network request is made at page load.

### Cookie Consent Infrastructure

- Added `src/lib/cookieConsent.js`.
- Centralized consent behavior:
  - consent storage key: `fps_cookie_consent`
  - consent validity: 180 days
  - default preferences
  - save/read helpers
  - event to reopen preferences
  - helper for analytics consent

### Cookie Banner Update

- Updated `src/components/CookieBanner.jsx`.
- Changed from a binary accept/refuse model to categorized consent:
  - necessary
  - analytics
  - marketing
- Necessary preferences are always active.
- Analytics and marketing are opt-in.
- Added “Accept all”, “Reject all”, and “Save” actions.
- Added support for reopening the preferences modal from elsewhere in the app.

### Cookie Policy Update

- Updated `src/pages/CookiesPage.jsx`.
- Replaced placeholders with current implementation details.
- Added a working “Manage my cookies” button wired to the consent manager.
- Clarified:
  - PostHog or equivalent analytics only loads after explicit consent.
  - no marketing tracker is active at this time.
  - Google Analytics and LinkedIn Insight Tag are not currently used.

### Privacy Policy Update

- Updated `src/pages/PrivacyPage.jsx`.
- Clarified analytics data collection only happens after consent.
- Clarified analytics retention as conditional on user consent.
- Replaced direct PostHog recipient wording with a consent-gated analytics provider statement.
- Clarified that no third-party tracker is loaded before consent.

### PostHog Status

- Confirmed `posthog-js` is not installed.
- Confirmed there is no active PostHog runtime integration in the app.
- Legal/cookie pages now describe PostHog as a possible analytics provider only after explicit consent.

## Radix Audit

### Installed Radix Packages

Verified installed Radix packages with `npm ls --depth=0`.

Installed Radix packages:

- `@radix-ui/react-accordion@1.2.12`
- `@radix-ui/react-alert-dialog@1.1.15`
- `@radix-ui/react-aspect-ratio@1.1.8`
- `@radix-ui/react-avatar@1.1.11`
- `@radix-ui/react-checkbox@1.3.3`
- `@radix-ui/react-collapsible@1.1.12`
- `@radix-ui/react-context-menu@2.2.16`
- `@radix-ui/react-dialog@1.1.15`
- `@radix-ui/react-dropdown-menu@2.1.16`
- `@radix-ui/react-hover-card@1.1.15`
- `@radix-ui/react-label@2.1.8`
- `@radix-ui/react-menubar@1.1.16`
- `@radix-ui/react-navigation-menu@1.2.14`
- `@radix-ui/react-popover@1.1.15`
- `@radix-ui/react-progress@1.1.8`
- `@radix-ui/react-radio-group@1.3.8`
- `@radix-ui/react-scroll-area@1.2.10`
- `@radix-ui/react-select@2.2.6`
- `@radix-ui/react-separator@1.1.8`
- `@radix-ui/react-slider@1.3.6`
- `@radix-ui/react-slot@1.2.4`
- `@radix-ui/react-switch@1.2.6`
- `@radix-ui/react-tabs@1.1.13`
- `@radix-ui/react-toast@1.2.15`
- `@radix-ui/react-toggle-group@1.1.11`
- `@radix-ui/react-toggle@1.1.10`
- `@radix-ui/react-tooltip@1.2.8`

### Audit Result

- `npm audit --omit=dev --json`: no production vulnerabilities.
- Full `npm audit` found only dev/build-tool issues:
  - `eslint` / `@eslint/plugin-kit`: low severity, dev-only.
  - `vite` / `esbuild`: moderate severity, dev/build-tool related.
- No Radix vulnerabilities were reported.

### Outdated Check

- `npm outdated --json` did not report any Radix package as outdated.
- Several non-Radix packages are outdated, including Vite, ESLint, React patch versions, React Router, and Tailwind.
- Major upgrades such as Vite 8 and Tailwind 4 were not applied because they are outside the requested Radix audit scope and may require migration work.

## Verification

### Build

Validated with:

```bash
npm run build
```

Result: successful build.

### Browser Check

Validated locally with Vite on:

```text
http://127.0.0.1:3001/
```

Results:

- Home page renders correctly.
- Browser console has no app errors or warnings.
- Network check confirmed the home hero loads `reunion-equipe_gemini.webp`.
- No Google Fonts request was observed.
- No external customer-assets logo request was observed.

## Known Notes

- Vite still prints: `The CJS build of Vite's Node API is deprecated`.
- This warning is not related to the blank page or runtime behavior.
- The original `public/logo_fps.png` remains present as a source asset, while the app uses the optimized `public/logo_fps.webp`.
