# Freearcs Pharma Services - Code Quality Improvement Plan

**Date**: May 2026  
**Based on**: Codebase Analysis (Code Quality Score: 🟡 6/10)  
**Objective**: Eliminate duplications, standardize patterns, improve maintainability

---

## Table of Contents

1. [Current Code Quality Snapshot](#1-current-code-quality-snapshot)
2. [Detailed Issue Breakdown](#2-detailed-issue-breakdown)
3. [Improvement Plan by Phase](#3-improvement-plan-by-phase)
4. [Expected Score Improvement](#4-expected-score-improvement)
5. [Implementation Examples](#5-implementation-examples)
6. [Verification Checklist](#6-verification-checklist)

---

## 1. Current Code Quality Snapshot

| Metric | Current State | Target State |
|--------|---------------|--------------|
| **Overall Score** | 🟡 6/10 | 🟢 9/10 |
| **CSS Duplication** | 2 files (App.css + index.css) | 1 file (index.css only) |
| **Animation Duplication** | 3 copies in 3 pages | 1 shared utility |
| **Inline Styles** | Mixed with Tailwind | Tailwind only |
| **Hardcoded Colors** | `bg-[#2E9013]` throughout | `bg-primary` classes |
| **Missing Keys** | Index used as key | Unique IDs |
| **Unused Imports** | `React` in React 19 files | Clean imports |
| **Component Labels** | Mixed .js/.jsx | Standardized |

---

## 2. Detailed Issue Breakdown

### Issue1: CSS Duplication (App.css vs index.css)
**Impact**: Confusing maintenance, potential conflicts  
**Files**: `src/App.css` (5,490 bytes), `src/index.css` (4,033 bytes)

**Problem**: Both define color variables:
```css
/* App.css - DUPLICATE */
:root {
  --fps-green: #2E9013;
  --fps-mauve: #573D4E;
}

/* index.css - SINGLE SOURCE */
:root {
  --primary: 106 81% 32%;  /* Same green, HSL format */
  --secondary: 330 20% 29%;  /* Same mauve, HSL format */
}
```

### Issue2: Animation Variants Duplicated
**Impact**: 3 copies of identical code  
**Files**: `HomePage.js`, `AboutPage.js`, `WhyChooseUsPage.js`

**Problem**: Each file defines the same Framer Motion variants:
```javascript
// Copied identically in 3 files
const ease = [0.25, 0.46, 0.45, 0.94];
const fadeLeft = { 
  hidden: { opacity: 0, x: -48 }, 
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } 
};
const fadeRight = { ... };
const staggerItem = { ... };
```

### Issue3: Inline Styles Mixed with Tailwind
**Impact**: Bypasses theming, inconsistent patterns  
**Files**: HomePage.js, ServicesPage.js, multiple components

**Problem**:
```javascript
// Inline style (WRONG)
<div style={{ backgroundColor: `${area.color}20` }}>

// Tailwind arbitrary (WRONG)
<div className="bg-[#EAF5E1]">

// Correct approach
<div className="bg-primary/10">
```

### Issue4: Magic Numbers & Hardcoded Colors
**Impact**: No theming support, difficult to maintain  
**Locations**: Throughout codebase

```javascript
// Magic hex values (BAD)
<div className="text-[#573D4E]">        // Should be text-secondary
<div className="border-[#2E9013]">      // Should be border-primary
<div className="bg-[#F5A617]">          // Should be bg-accent

// Boolean magic numbers
{Array(5).fill(0).map((_, i) => (     // Why 5? Should be constant
```

### Issue5: Unused React Imports (React 19)
**Impact**: Clean code violation  
**Files**: Most .js files import React but don't need to

```javascript
// React 19 doesn't need this (JSX transform handles it)
import React from 'react';  // ❌ Remove in .js files
```

### Issue6: Missing Unique Keys
**Impact**: React warnings, potential rendering bugs  
**File**: BlogPage.js:74

```javascript
// BAD: Uses index as key
{articles.map((article, index) => (
  <div key={index}>  // ❌
```

### Issue7: Inconsistent File Extensions
**Impact**: Confusing project structure  
**Current**: Most files `.js`, but `src/components/ui/*.jsx` use `.jsx`

---

## 3. Improvement Plan by Phase

### Phase1: Critical Cleanup (Week 1) - Score Gain: +1.5 points

#### Task1: Delete App.css & Consolidate
```bash
# 1. Delete duplicate CSS file
rm src/App.css

# 2. Ensure index.css has everything needed
# Check for any styles in App.css that aren't in index.css
diff src/App.css src/index.css  # Before deleting, review differences

# 3. Update App.js to remove import
# Remove this line from App.js:
import "@/App.css";  // ❌ DELETE
```

#### Task2: Extract Animation Variants
```bash
# Create shared animation utility
touch src/lib/animations.js
```

```javascript
// src/lib/animations.js
export const ease = [0.25, 0.46, 0.45, 0.94];

export const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease } 
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease } 
  }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease }
  }
};
```

#### Task3: Update Components to Use Shared Animations
```javascript
// HomePage.js - BEFORE
import { motion } from 'framer-motion';
const fadeLeft = { ... };  // ❌ Remove

// HomePage.js - AFTER
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/lib/animations';
```

**Phase1 Expected Score**: 6 → 7.5/10

---

### Phase2: Standardization (Week 2) - Score Gain: +1 point

#### Task1: Replace Hardcoded Colors with Semantic Classes
```bash
# Find all arbitrary color values
grep -r "bg-\[#" src/
grep -r "text-\[#" src/
grep -r "border-\[#" src/

# Replace with semantic classes:
# bg-[#2E9013] → bg-primary
# text-[#573D4E] → text-secondary
# border-[#2E9013] → border-primary
# bg-[#F5A617] → bg-accent
```

#### Task2: Remove Inline Styles
```javascript
// BEFORE: Inline style
<div style={{ backgroundColor: `${area.color}20` }}>

// AFTER: Tailwind with opacity
<div className="bg-primary/10">      {/* For 10% opacity */}
<div className="bg-primary/20">      {/* For 20% opacity */}
```

#### Task3: Remove Unused React Imports
```bash
# Find files with unnecessary React imports
grep -l "import React" src/**/*.js

# Remove from .js files (keep in .jsx if any)
# React 19 uses JSX transform, no need to import
```

**Phase2 Expected Score**: 7.5 → 8.5/10

---

### Phase3: Code Quality Polish (Week 3) - Score Gain: +0.5 points

#### Task1: Fix Missing Keys
```javascript
// BlogPage.js - BEFORE
{articles.map((article, index) => (
  <div key={index}>  // ❌

// AFTER: Use slug or generate ID
{articles.map((article) => (
  <div key={article.slug}>  // ✅ Unique identifier
```

#### Task2: Standardize File Extensions
```bash
# Option A: Rename all to .jsx (recommended for React components)
find src -name "*.js" -exec bash -c 'mv "$0" "${0%.js}.jsx"' {} \;

# Option B: Keep .js but ensure JSX is allowed (already configured)
# Choose ONE convention and stick to it
```

#### Task3: Extract Magic Numbers to Constants
```javascript
// src/lib/constants.js
export const MAX_FILE_SIZE = 10 * 1024 * 1024;  // 10MB
export const STATS_DISPLAY_COUNT = 5;
export const ANIMATION_DURATION = 0.6;

// Usage
import { MAX_FILE_SIZE } from '@/lib/constants';
if (file.size > MAX_FILE_SIZE) { ... }
```

**Phase3 Expected Score**: 8.5 → 9/10

---

## 4. Expected Score Improvement

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **CSS Duplication** | 2 files | 1 file | Fixed ✅ |
| **Animation Duplication** | 3 copies | 1 utility | Fixed ✅ |
| **Hardcoded Colors** | ~50 instances | 0 | Eliminated ✅ |
| **Inline Styles** | ~15 instances | 0 | Eliminated ✅ |
| **Unused Imports** | ~20 files | 0 files | Cleaned ✅ |
| **Missing Keys** | Present | Fixed | Resolved ✅ |
| **File Extensions** | Mixed | Standardized | Clean ✅ |
| **Overall Score** | 🟡 6/10 | 🟢 9/10 | **+3 points** |

---

## 5. Implementation Examples

### 5.1 Before/After: CSS Duplication

#### Before (Score: 6/10)
```css
/* src/App.css - DUPLICATE */
:root {
  --fps-green: #2E9013;
  --fps-mauve: #573D4E;
  --fps-amber: #F5A617;
  --fps-red: #D81C20;
}

/* src/index.css - SINGLE SOURCE */
:root {
  --primary: 106 81% 32%;
  --secondary: 330 20% 29%;
  --accent: 40 92% 52%;
  --destructive: 359 79% 48%;
}
```

#### After (Score: 9/10)
```css
/* src/App.css - DELETED */

/* src/index.css - ONLY SOURCE */
:root {
  --background: 0 0% 100%;
  --primary: 106 81% 32%;        /* #2E9013 */
  --primary-dark: 106 81% 24%;    /* #1f6b0d */
  --secondary: 330 20% 29%;       /* #573D4E */
  --accent: 40 92% 52%;          /* #F5A617 */
  --destructive: 359 79% 48%;    /* #D81C20 */
}

/* App.js - Remove import */
// import "@/App.css";  // ❌ DELETED
import "@/index.css";   // ✅ Only this
```

---

### 5.2 Before/After: Animation Duplication

#### Before (3 copies)
```javascript
// HomePage.js
import { motion } from 'framer-motion';
const ease = [0.25, 0.46, 0.45, 0.94];
const fadeLeft = { hidden: { opacity: 0, x: -48 }, visible: {...} };
const fadeRight = { hidden: { opacity: 0, x: 48 }, visible: {...} };
const staggerContainer = { ... };
const staggerItem = { ... };

// AboutPage.js - COPY PASTE
import { motion } from 'framer-motion';
const ease = [0.25, 0.46, 0.45, 0.94];  // ❌ Identical
const fadeLeft = { ... };                     // ❌ Identical
// ... (same code duplicated)

// WhyChooseUsPage.js - COPY PASTE AGAIN
// ❌ Same code third time
```

#### After (1 shared utility)
```javascript
// src/lib/animations.js - CREATED
export const ease = [0.25, 0.46, 0.45, 0.94];

export const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
};

// HomePage.js - UPDATED
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/lib/animations';
// ✅ Clean, no duplication

// AboutPage.js - UPDATED
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/lib/animations';
// ✅ Same import, no duplication

// WhyChooseUsPage.js - UPDATED
// ✅ Same pattern
```

---

### 5.3 Before/After: Hardcoded Colors

#### Before (Magic hex values)
```javascript
// HomePage.js
<div className="text-[#2E9013] font-bold">           {/* ❌ */}
<Button className="bg-[#2E9013] hover:bg-[#1f6b0d]">  {/* ❌ */}
<div className="border-[#573D4E]">                     {/* ❌ */}

// ServicesPage.js
<div className="bg-[#F5A617] p-4">                    {/* ❌ */}
<service.icon className="text-[#2E9013]" />            {/* ❌ */}
```

#### After (Semantic classes)
```javascript
// HomePage.js
<div className="text-primary font-bold">               {/* ✅ */}
<Button variant="default">                              {/* ✅ Uses bg-primary */}
<div className="border-secondary">                     {/* ✅ */}

// ServicesPage.js
<div className="bg-accent p-4">                       {/* ✅ */}
<service.icon className="text-primary" />               {/* ✅ */}
```

---

### 5.4 Before/After: Inline Styles

#### Before (Bypasses theming)
```javascript
// HomePage.js
<div 
  className="w-12 h-12 rounded-full flex items-center justify-center"
  style={{ backgroundColor: `${area.color}20` }}  // ❌ Inline
>
  <service.icon className="w-6 h-6" style={{ color: area.color }} />
</div>
```

#### After (Tailwind with opacity)
```javascript
// HomePage.js
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
  <service.icon className="w-6 h-6 text-primary" />
</div>

// Or if area.color varies, use CSS variable approach:
<div 
  className="w-12 h-12 rounded-full flex items-center justify-center"
  style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}  // ✅ Uses theme
>
  <service.icon className="w-6 h-6 text-primary" />
</div>
```

---

## 6. Verification Checklist

### Phase1: Critical Cleanup
- [ ] `src/App.css` deleted
- [ ] `src/index.css` contains all necessary styles
- [ ] `src/App.js` no longer imports `App.css`
- [ ] `src/lib/animations.js` created with shared variants
- [ ] `HomePage.js` imports from `@/lib/animations`
- [ ] `AboutPage.js` imports from `@/lib/animations`
- [ ] `WhyChooseUsPage.js` imports from `@/lib/animations`
- [ ] No duplicate animation definitions remain in page files

### Phase2: Standardization
- [ ] No `bg-[#hex]` arbitrary values in codebase (grep returns nothing)
- [ ] No `text-[#hex]` arbitrary values in codebase
- [ ] No `border-[#hex]` arbitrary values in codebase
- [ ] No inline `style=` attributes in components (or justified with comment)
- [ ] All `.js` files don't import `React` (unless using JSX in same file)
- [ ] Components use `bg-primary`, `text-secondary`, etc.

### Phase3: Code Quality Polish
- [ ] `BlogPage.js` uses `article.slug` as key (not index)
- [ ] All map/render operations have unique keys
- [ ] File extensions standardized (.js OR .jsx, not mixed)
- [ ] `src/lib/constants.js` created with magic numbers
- [ ] No obvious magic numbers without constant explanation

### Final Score Check
- [ ] Code Quality score improved from 🟡 6/10 to 🟢 9/10
- [ ] No duplicate code blocks (search for identical functions)
- [ ] All colors use semantic Tailwind classes
- [ ] Animations centralized in one utility file
- [ ] No console warnings about missing keys
- [ ] Codebase is DRY (Don't Repeat Yourself)

---

## Quick Reference: Files to Modify

| File | Change |
|------|--------|
| `src/App.css` | ❌ DELETE |
| `src/index.css` | ✅ Verify has all styles |
| `src/App.js` | ❌ Remove `App.css` import |
| `src/lib/animations.js` | ✅ CREATE (shared variants) |
| `src/pages/HomePage.js` | ✅ Use animations.js, remove duplicates |
| `src/pages/AboutPage.js` | ✅ Use animations.js, remove duplicates |
| `src/pages/WhyChooseUsPage.js` | ✅ Use animations.js, remove duplicates |
| `src/lib/constants.js` | ✅ CREATE (magic numbers) |
| All components | ✅ Replace `bg-[#hex]` with `bg-primary` etc. |
| All components | ✅ Remove inline `style=` attributes |

---

*Plan created: May 5, 2026*  
*Based on Freearcs Pharma Services Codebase Analysis (Code Quality: 🟡 6/10)*
