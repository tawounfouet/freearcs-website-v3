# Freearcs Pharma Services - Dependencies Improvement Plan V2

**Date**: May 6, 2026  
**Version**: 2.0  
**Based on**: Codebase Analysis V2 (Dependencies Score: 🟢 8/10)

---

## Current Status

| Metric | Previous | Current | Target |
|--------|----------|---------|--------|
| **Unused Packages** | 12 | 1 | 0 |
| **CRA Status** | Deprecated | ✅ Migrated to Vite | ✅ Done |
| **Package Manager** | Mismatch | ✅ Standardized (npm) | ✅ Done |
| **Private Package Risk** | 1 | 0 | ✅ Removed |
| **Overall Score** | 🟡 5/10 | 🟢 8/10 | 🟢 9/10 |

---

## Completed Tasks

### Phase 1: Critical Cleanup ✅
- ✅ Removed unused production dependencies
- ✅ Fixed package manager mismatch (removed yarn declaration)
- ✅ Removed @emergentbase/visual-edits
- ✅ Removed visual-edits config from craco.config.js
- ✅ Clean node_modules rebuild

### Phase 2: Vite Migration ✅
- ✅ Migrated from CRA to Vite
- ✅ Updated package.json scripts

---

## Remaining Issues

### Issue 1: Unused Radix Primitives
**Status**: Not yet audited

22 @radix-ui/* packages installed, many may be unused by shadcn/ui components.

### Issue 2: Unused Template Package
```json
"cra-template": "1.2.0"  // Not needed after CRA removal
```

### Issue 3: swiper Usage
**Updated**: Previously flagged as unused, but IS used by LogoCarousel.jsx ✅

---

## Action Plan

### Phase 3: Radix Audit

```bash
# Check which Radix packages are actually used
grep -r "@radix-ui" src/ --include="*.jsx" | cut -d'"' -f2 | sort -u

# Example removal of unused
npm uninstall @radix-ui/react-aspect-ratio @radix-ui/react-avatar
```

### Phase 4: Template Cleanup

```bash
npm uninstall cra-template
```

---

## Verification

- [x] No unused packages in main bundle
- [x] Package manager standardized (npm)
- [x] No private package risks
- [v] Build succeeds (Vite)
- [ ] Radix audit complete
- [ ] Template removed

---

*Plan Version 2 - Updated May 6, 2026*