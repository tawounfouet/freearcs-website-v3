# Freearcs Pharma Services - SEO Improvement Plan V2

**Date**: May 6, 2026  
**Version**: 2.0  
**Based on**: Codebase Analysis V2 (SEO Score: 🟢 7.5/10)

---

## Current Status

| Metric | Previous | Current | Target |
|--------|----------|---------|--------|
| **Open Graph** | Missing | ✅ Component | ✅ Done |
| **Twitter Cards** | Missing | ✅ Component | ✅ Done |
| **Canonical URLs** | Missing | ✅ Component | ✅ Done |
| **Schema.org** | Static | ✅ Page-aware | ✅ Done |
| **HTML Lang** | Hardcoded "en" | ✅ "fr" | ✅ Fixed |
| **HomePage SEO** | No | ✅ Added | ✅ Done |
| **Other Pages SEO** | Using Helmet | Needs update | Pending |
| **Overall Score** | 🟡 6/10 | 🟢 7.5/10 | 🟢 9/10 |

---

## Completed Tasks

### Phase 1 ✅
- ✅ Created src/components/SEO.jsx with:
  - Open Graph (og:title, og:image, og:description, og:url)
  - Twitter Cards (twitter:card, twitter:image)
  - Canonical URLs
  - Alternate language links (hreflang fr/en/x-default)
- ✅ Fixed index.html lang="fr" (was lang="en")

### Phase 2 ✅  
- ✅ Created src/components/SchemaOrg.jsx (page-aware)
- ✅ Updated App.jsx to use new SchemaOrg

### Phase 3 ✅
- ✅ Added SEO component to HomePage.jsx

---

## Remaining Issues

### Issue 1: Other Pages Need SEO
Only HomePage has SEO component. Other pages use Helmet directly:
- AboutPage.jsx
- ServicesPage.jsx
- ContactPage.jsx
- BlogPage.jsx
- etc.

### Issue 2: Alternate Language Structure
hreflang links point to /en/{url} but no /en pages exist yet.

---

## Action Plan

### Phase 4: Add SEO to All Pages

Update each page to use SEO component:

```javascript
// Example: AboutPage.jsx
import SEO from '@/components/SEO';

<SEO
  title="À propos - Notre Expertise"
  description="Freearcs Pharma Services - CRO française indépendante..."
  url="/about"
/>
```

Pages to update:
- AboutPage.jsx
- FounderPage.jsx
- ServicesPage.jsx
- LegalRepresentationPage.jsx
- TherapeuticExpertisePage.jsx
- WhyChooseUsPage.jsx
- ReferencesPage.jsx
- BlogPage.jsx (already has Helmet)
- ContactPage.jsx (already has Helmet)
- LegalPage.jsx
- PrivacyPage.jsx
- CookiesPage.jsx

### Phase 5: Language Structure

Decide on FR/EN language structure:
- Option A: Subdirectory /en/pages (requires more work)
- Option B: In-content language toggle (current approach)

---

## Verification

- [x] SEO component created
- [x] SchemaOrg component created
- [x] App.jsx uses new components
- [x] index.html lang="fr"
- [x] HomePage has SEO
- [ ] All other pages have SEO
- [ ] Language structure decided

---

*Plan Version 2 - Updated May 6, 2026*