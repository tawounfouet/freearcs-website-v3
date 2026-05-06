# Freearcs Pharma Services - Build/Deploy Improvement Plan V2

**Date**: May 6, 2026  
**Version**: 2.0  
**Based on**: Codebase Analysis V2 (Build/Deploy Score: 🟢 8.5/10)

---

## Current Status

| Metric | Previous | Current | Target |
|--------|----------|---------|--------|
| **Build Tool** | CRA (deprecated) | ✅ Vite | ✅ Done |
| **Config** | Craco 100 lines | ✅ Vite 27 lines | ✅ Done |
| **Scripts** | craco start | ✅ vite | ✅ Done |
| **Output** | Optimized | Working | ✅ Done |
| **netlify.toml** | None | ✅ Created | ✅ Done |
| **.env.example** | None | ✅ Created | ✅ Done |
| **Overall Score** | 🟢 7/10 | 🟢 8.5/10 | 🟢 9/10 |

---

## Completed Tasks

### Phase 1 ✅
- ✅ Uninstalled react-scripts and @craco/craco
- ✅ Installed vite and @vitejs/plugin-react
- ✅ Created vite.config.js
- ✅ Updated package.json scripts
- ✅ Moved index.html to root (type="module")
- ✅ Deleted craco.config.js and public/index.html

### Phase 2 ✅
- ✅ netlify.toml created with cache headers and SPA fallback
- ✅ .env.example updated with VITE_ prefix

---

## Remaining Issues

### Issue 1: Dev Server Blank Page
- Dev server (npm run start) shows blank page
- Workaround: Use npm run preview (serves build)
- Build itself works correctly (~1.8s)

### Issue 2: Image Optimization Pending
- Public images total 6.5MB+ (not optimized)

---

## Action Plan

### Phase 3: Fix Dev Server

Check if related to:
1. Port conflict - try different port
2. Caching - clear node_modules/.vite

Commands:
```bash
rm -rf node_modules/.vite
npm run start -- --port 3001
```

### Phase 4: Image Optimization

```bash
# Convert all large images to WebP
brew install webp

cd public/
# Example conversion
cwebp -q 85 reunion-equipe_gemini.png -o reunion-equipe_gemini.webp
```

---

## Build Output (Current)

```
✓ built in 1.76s
index.js         347 kB (gzip: 109 kB)
ContactPage.js   90 kB (gzip: 30 kB)
free-mode.js     82 kB (gzip: 25 kB)
proxy.js        124 kB (gzip: 40 kB)
```

---

## Verification

- [x] Vite migration complete
- [x] Build succeeds
- [x] Scripts updated
- [x] netlify.toml created
- [x] .env.example created
- [ ] Dev server works (use preview)
- [ ] Images optimized

---

*Plan Version 2 - Updated May 6, 2026*