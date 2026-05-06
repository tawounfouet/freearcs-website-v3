# Freearcs Pharma Services - Project Structure Improvement Plan V2

**Date**: May 6, 2026  
**Version**: 2.0  
**Based on**: Codebase Analysis V2 (Project Structure Score: 🟢 8.5/10)

---

## Current Status

| Metric | Previous | Current | Target |
|--------|----------|---------|--------|
| **Unused Files** | 1 | 0 | ✅ Handled |
| **Archives** | Clutter | ✅ Moved | ✅ Done |
| **Resources** | In root | ✅ docs/ | ✅ Done |
| **File Extensions** | Mixed | .jsx fixed | ✅ Done |
| **.env.example** | Missing | ✅ Created | ✅ Done |
| **Overall Score** | 🟢 8/10 | 🟢 8.5/10 | 🟢 9/10 |

---

## Completed Tasks

### Phase 1 ✅
- ✅ Removed src/App.css (duplicate CSS)
- ✅ Moved resources/FPS-Presentation.md → docs/
- ✅ Removed archives/ directory
- ✅ Created .env.example with documented variables

### Phase 2 ✅
- ✅ Renamed ~30 .js files to .jsx for Vite JSX support (not planned but necessary)

---

## Remaining Issues

### Image Optimization
Public images are 6.5MB+ unoptimized.

| File | Size | Target |
|------|------|--------|
| reunion-equipe_gemini.png | 6.5MB | <200KB WebP |
| cardio-stethoscope-digital.png | 1.6MB | <150KB WebP |
| famille-tablette-capsules.png | 1.8MB | <150KB WebP |

---

## Action Plan

### Phase 3: Image Optimization

```bash
# Install webp tools
brew install webp

# Convert images
cd public/
cwebp -q 85 reunion-equipe_gemini.png -o reunion-equipe_gemini.webp
# ... repeat for other large images
```

---

## Verification

- [x] resources/ cleaned
- [x] archives/ cleaned
- [x] docs/ created
- [x] .env.example created
- [x] File extensions standardized for Vite
- [ ] Image optimization complete

---

*Plan Version 2 - Updated May 6, 2026*