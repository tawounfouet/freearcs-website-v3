# Freearcs Pharma Services - Visual Identity Improvement Plan V2

**Date**: May 6, 2026  
**Version**: 2.0  
**Based on**: Codebase Analysis V2 (Visual Identity Score: 🟢 7/10)

---

## Current Status

| Metric | Previous | Current | Target |
|--------|----------|---------|--------|
| **Color System** | Dual | ✅ Single | ✅ Done |
| **Backgrounds** | #F8F8F6 | ✅ bg-muted | ✅ Fixed |
| **App.css** | Duplicate | ✅ Removed | ✅ Done |
| **Brand Colors** | Incomplete | ✅ Added | ✅ Done |
| **Overall Score** | 🟡 5.8/10 | 🟢 7/10 | 🟢 9/10 |

---

## Completed Tasks

### Phase 1 ✅
- ✅ Deleted src/App.css (duplicate CSS)
- ✅ Updated import in App.jsx → index.css
- ✅ Added brand colors to tailwind.config.js:
  - brand-green, brand-mauve, brand-amber, brand-red
- ✅ Replaced 33 instances of bg-[#F8F8F6] → bg-muted

---

## Remaining Issues

### Issue 1: Header Hover Colors
Still 3 arbitrary color values in Header.jsx:
```javascript
// Line 100: hover:bg-[#F8F8F6] hover:text-[#2E9013]
// Line 102: text-[#2E9013] bg-[#F8F8F6]
// Line 185: border-[#2E9013] bg-[#F8F8F6]
```

### Issue 2: Hardcoded Colors Elsewhere
Many components still use hardcoded hex values instead of semantic classes:
- text-[#573D4E] should be text-secondary
- text-[#2E9013] should be text-primary
- border-[#2E9013] should be border-primary

---

## Action Plan

### Phase 2: Fix Remaining Colors

1. **Header.jsx** - Replace 3 hover occurrences
2. **Global Search** - Find remaining hardcoded colors:
```bash
grep -r "text-\[#5" src/ --include="*.jsx"
grep -r "text-\[#2" src/ --include="*.jsx"
```

3. **Replace with semantic classes**:
- text-[#573D4E] → text-secondary
- text-[#2E9013] → text-primary
- bg-[#2E9013] → bg-primary

### Phase 3: Enforce Typography (Optional)

Ensure all headings use font-raleway, body uses font-nunito.

---

## Expected Score

| Axis | Current | Target |
|------|---------|--------|
| **Styling** | 7/10 | 9/10 |
| **Performance** | 4/10 | 8/10 (after image opt) |

---

## Verification

- [x] App.css deleted
- [x] tailwind.config.js updated
- [x] bg-muted used instead of arbitrary bg
- [ ] Header hover colors fixed
- [ ] All remaining hardcoded colors replaced

---

*Plan Version 2 - Updated May 6, 2026*