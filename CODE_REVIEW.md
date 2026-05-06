# Code Review: FPS React Frontend

## Bugs

**1. Contact form doesn't submit data (ContactPage.js:54-58)**
The form `handleSubmit` only logs to console and sets a success state. No API call, no email service integration. Users see "Message Sent!" but nothing is actually delivered.

**2. CSS syntax error in App.css:129**
```css
transition: transform0.3s ease, box-shadow 0.3s ease;
```
Missing space between `transform` and `0.3s`. Should be `transform 0.3s ease`. Same issue on line 192: `animation: fadeIn 0.5s ease forwards;` appears to have similar spacing issues.

**3. Logo path inconsistency (Footer.js:7 vs Header.js:7)**
Footer uses relative path `"freearcs-pharma-services_logo-white.svg"` while Header uses a full CDN URL. The relative path assumes the file is in `public/`, which it is — but if the build output structure changes, this breaks. Header's approach is more resilient.

**4. Language flash on initial load (LanguageContext.js:7-14)**
`useState('fr')` initializes as French, then `useEffect` reads localStorage to potentially switch to English. This causes a brief flash of French content for users who prefer English. Initialize from localStorage synchronously:
```js
const [language, setLanguage] = useState(() => {
  const saved = localStorage.getItem('fps-language');
  return (saved === 'fr' || saved === 'en') ? saved : 'fr';
});
```

---

## Architecture Issues

**5. No route-level code splitting (App.js:85-113)**
All 12 page components are imported statically. For a static site with this few pages it's acceptable, but consider `React.lazy` + `Suspense` if bundle size grows.

**6. Blog post detail page missing (App.js:101)**
Route `/blog/:slug` renders `BlogPage` but doesn't pass the slug to display a single post. The `useSearchParams` import in ContactPage suggests this pattern was considered but not implemented for Blog.

**7. No error boundary**
If any component throws, the entire app unmounts. Add a `react-error-boundary` or a custom class-based error boundary.

---

## Performance

**8. Oversized hero image (public/reunion-equipe_gemini.png: 6.5MB)**
The hero image is 6.5MB — this will significantly impact LCP. Optimize to WebP/AVIF at display size (~800px wide max for the container). Other large images in `public/` (1.6MB–1.9MB each) should also be compressed.

**9. Framer Motion for simple animations (HomePage.js:3)**
Framer Motion (~30KB gzipped) is used for scroll-triggered fade animations that could be done with CSS `IntersectionObserver` or a smaller library. Acceptable if you're already committed to it, but worth noting.

---

## Security

**10. File upload has no validation (ContactPage.js:49-52, 246-266)**
The file input accepts any file type up to the browser's limit. No client-side size check (the hint says "up to 10MB" but this isn't enforced). Since the file is never actually uploaded (see bug #1), this is low severity — but if you implement submission, add:
```js
if (file && file.size > 10 * 1024 * 1024) { alert('File too large'); return; }
```

---

## Conventions / Minor

**11. Mixed JS/JSX extensions**
Most files use `.js` but some components like `src/components/ui/*.jsx` use `.jsx`. Standardize to `.jsx` for components with JSX syntax.

**12. Hardcoded phone numbers and emails**
Phone `+33 1 00 00 00 00` appears in multiple files (Footer.js:95, ContactPage.js:300, App.js:36, SchemaOrg). Centralize in a config/constants file.

**13. Unused import in Footer.js:4**
`Twitter` is imported from `lucide-react` but the icon renders an `a` tag with `href="https://twitter.com"` — the Twitter icon isn't actually used in the JSX. Wait, it is used on line 117. But the href is just "https://twitter.com" without the actual company handle.

**14. `.env` loaded via dotenv in craco.config.js but not in the app**
`craco.config.js:3` calls `require("dotenv").config()` for the webpack config, but the React app doesn't have access to `REACT_APP_*` prefixed env vars unless you add them to the `craco.config.js` `env` or use `process.env` correctly. The `PUBLIC_URL` usage in components (e.g., HomePage.js:199) works because CRA defines it, but custom env vars need the `REACT_APP_` prefix.

---

## Summary

| Severity | Count |
|----------|-------|
| Bug (needs fix) | 4 |
| Architecture | 3 |
| Performance | 2 |
| Security (low) | 1 |
| Convention | 4 |

**Priority fixes:** Contact form submission (#1), CSS syntax error (#2), language flash (#4), hero image optimization (#8).
