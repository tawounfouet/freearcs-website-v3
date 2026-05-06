# Freearcs Pharma Services - Architecture Improvement Plan

**Date**: May 2026  
**Based on**: Codebase Analysis (Architecture Score: 🟢 7/10)  
**Objective**: Add code splitting, error boundaries, and fix routing gaps

---

## Table of Contents

1. [Current Architecture Score Snapshot](#1-current-architecture-score-snapshot)
2. [Detailed Issue Breakdown](#2-detailed-issue-breakdown)
3. [Improvement Plan by Phase](#3-improvement-plan-by-phase)
4. [Expected Score Improvement](#4-expected-score-improvement)
5. [Implementation Examples](#5-implementation-examples)
6. [Verification Checklist](#6-verification-checklist)

---

## 1. Current Architecture Score Snapshot

| Metric | Current State | Target State |
|--------|---------------|--------------|
| **Overall Score** | 🟢 7/10 | 🟢 9/10 |
| **Code Splitting** | ❌ None (all 12 pages bundled) | ✅ React.lazy() + Suspense |
| **Error Boundary** | ❌ None | ✅ Class-based boundary |
| **404 Page** | ❌ Inline div in App.js | ✅ Proper NotFoundPage component |
| **Blog Detail** | ❌ Route exists, no rendering | ✅ Dynamic blog post display |
| **Loading States** | ❌ None | ✅ Skeleton/Spinner components |
| **Lazy Loading** | ❌ None | ✅ Below-fold images |

---

## 2. Detailed Issue Breakdown

### Issue1: No Code Splitting (MAIN ISSUE)
**Impact**: All 12 pages bundled together, slow initial load  
**Location**: `src/App.js` lines 85-113

**Current State**:
```javascript
// App.js - ALL pages imported statically
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FounderPage from "./pages/FounderPage";
import ServicesPage from "./pages/ServicesPage";
// ... ALL 12 pages imported at top

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      // ... ALL routes render immediately
    </Routes>
  );
}
```

**Problem**: Even if user only visits HomePage, they download all 12 pages.

### Issue2: Blog Detail Route Exists but Broken
**Location**: `src/App.js:101`  
**Impact**: `/blog/:slug` shows list, not individual post

**Current**:
```javascript
<Route path="/blog/:slug" element={<Layout><BlogPage /></Layout>} />
// ❌ BlogPage doesn't use the slug parameter
// ❌ Always shows article list, never individual post
```

### Issue3: No Error Boundary
**Impact**: Any component crash unmounts entire app  
**Missing**: React error boundary to catch and display errors gracefully

### Issue4: 404 Page is Inline Div
**Location**: `src/App.js:107`  
**Current**:
```javascript
<Route path="*" element={<Layout>
  <div className="min-h-screen bg-[#F8F8F6] flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-raleway text-6xl font-bold text-[#573D4E] mb-4">404</h1>
      <p className="text-[#4B5563] mb-6">Page non trouvée</p>
      <a href="/" className="text-[#2E9013] hover:underline">Retour à l'accueil</a>
    </div>
  </div>
</Layout>} />
// ❌ Inline, not reusable, uses hardcoded colors
```

### Issue5: No Loading States
**Impact**: Lazy-loaded pages show blank white screen  
**Missing**: Suspense fallbacks, skeleton loaders

---

## 3. Improvement Plan by Phase

### Phase1: Code Splitting (Week 1) - Score Gain: +1 point

#### Task1: Convert Pages to React.lazy()
```javascript
// App.js - BEFORE
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// ... all static imports

// App.js - AFTER
import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/ui/loading-spinner';

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FounderPage = lazy(() => import("./pages/FounderPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const LegalRepresentationPage = lazy(() => import("./pages/LegalRepresentationPage"));
const TherapeuticExpertisePage = lazy(() => import("./pages/TherapeuticExpertisePage"));
const WhyChooseUsPage = lazy(() => import("./pages/WhyChooseUsPage"));
const ReferencesPage = lazy(() => import("./pages/ReferencesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
```

#### Task2: Add Suspense Wrapper
```javascript
// App.js - Wrap routes in Suspense
function App() {
  return (
    <LanguageProvider>
      <div className="App font-nunito" data-testid="app-root">
        <SchemaOrg />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/about" element={<Layout><AboutPage /></Layout>} />
              // ... all routes now lazy-loaded
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}
```

#### Task3: Create Loading Fallback Component
```bash
touch src/components/ui/loading-spinner.jsx
```

```javascript
// src/components/ui/loading-spinner.jsx
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ className, ...props }) => (
  <div className={`flex items-center justify-center min-h-[200px] ${className}`} {...props}>
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

export const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-12 w-12 animate-spin text-primary" />
  </div>
);
```

**Phase1 Expected Score**: 7 → 8/10

---

### Phase2: Error Boundary + 404 Page (Week 2) - Score Gain: +0.5 points

#### Task1: Create Error Boundary
```bash
touch src/components/ErrorBoundary.js
```

```javascript
// src/components/ErrorBoundary.js
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <h1 className="font-raleway text-4xl font-bold text-destructive">
              Oops! Une erreur s'est produite
            </h1>
            <p className="text-muted-foreground">
              {this.state.error?.message || 'Quelque chose a mal tourné.'}
            </p>
            <Button asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

#### Task2: Create Proper 404 Page
```bash
touch src/pages/NotFoundPage.js
```

```javascript
// src/pages/NotFoundPage.js
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="font-raleway text-8xl font-bold text-primary">404</h1>
        <h2 className="font-raleway text-2xl font-semibold">
          {t('404.title') || 'Page non trouvée'}
        </h2>
        <p className="text-muted-foreground max-w-md">
          {t('404.description') || 'La page que vous cherchez n'existe pas ou a été déplacée.'}
        </p>
        <Button asChild>
          <Link to="/">{t('404.backHome') || 'Retour à l'accueil'}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
```

#### Task3: Update App.js to Use New Components
```javascript
// App.js - Add imports
import { ErrorBoundary } from './components/ErrorBoundary';
import NotFoundPage from './pages/NotFoundPage';

// Wrap everything in ErrorBoundary
function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="App font-nunito" data-testid="app-root">
          <SchemaOrg />
          <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* All routes */}
                <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
```

**Phase2 Expected Score**: 8 → 8.5/10

---

### Phase3: Fix Blog Detail + Polish (Week 3) - Score Gain: +0.5 points

#### Task1: Implement Blog Post Rendering
```javascript
// BlogPage.js - BEFORE
const BlogPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');  // ❌ Not used

  return (
    <div>
      {articles.map((article) => (
        <BlogCard article={article} />
      ))}
    </div>
  );
};

// BlogPage.js - AFTER
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const { t } = useLanguage();
  const { slug } = useParams();  // ✅ Get slug from URL

  if (slug) {
    const article = articles.find(a => a.slug === slug);
    if (!article) return <NotFoundPage />;
    
    return (
      <article className="max-w-4xl mx-auto py-12 px-4">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="font-raleway text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-muted-foreground mb-8">{article.date}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    );
  }

  // Show article list if no slug
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link key={article.slug} to={`/blog/${article.slug}`}>
          <BlogCard article={article} />
        </Link>
      ))}
    </div>
  );
};
```

#### Task2: Add Lazy Loading for Below-Fold Images
```javascript
// Add to all below-fold images
<img 
  src="/image.webp" 
  alt="..." 
  loading="lazy"  // ✅ Browser-native lazy loading
  className="w-full h-auto"
/>
```

**Phase3 Expected Score**: 8.5 → 9/10

---

## 4. Expected Score Improvement

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **Code Splitting** | ❌ None | ✅ React.lazy() + Suspense | Fixed |
| **Error Boundary** | ❌ None | ✅ ErrorBoundary class | Fixed |
| **404 Page** | Inline div | ✅ NotFoundPage component | Fixed |
| **Blog Detail** | Broken route | ✅ Dynamic rendering | Fixed |
| **Loading States** | ❌ None | ✅ LoadingFallback | Fixed |
| **Lazy Loading** | ❌ None | ✅ loading="lazy" | Added |
| **Overall Score** | 🟢 7/10 | 🟢 9/10 | **+2 points** |

---

## 5. Implementation Examples

### 5.1 Before/After: Code Splitting

#### Before (Score: 7/10)
```javascript
// App.js
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// ... 10 more imports

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      {/* All pages bundle immediately */}
    </Routes>
  );
}
// ❌ All 12 pages in initial bundle
```

#### After (Score: 9/10)
```javascript
// App.js
import { lazy, Suspense } from 'react';
import { LoadingFallback } from '@/components/ui/loading-spinner';

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
// ... all pages now lazy-loaded

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          {/* Pages load on demand */}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
// ✅ Only HomePage in initial bundle, others load on navigation
```

---

### 5.2 Before/After: 404 Page

#### Before (Inlined div)
```javascript
// App.js:107
<Route path="*" element={<Layout>
  <div className="min-h-screen bg-[#F8F8F6] flex items-center justify-center">
    <h1 className="font-raleway text-6xl text-[#573D4E]">404</h1>
    <a href="/" className="text-[#2E9013]">Retour</a>
  </div>
</Layout>} />
// ❌ Not reusable, hardcoded colors
```

#### After (Proper component)
```javascript
// src/pages/NotFoundPage.js
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-raleway text-8xl text-primary">404</h1>
        <h2 className="font-raleway text-2xl">{t('404.title')}</h2>
        <Button asChild>
          <Link to="/">{t('404.backHome')}</Link>
        </Button>
      </div>
    </div>
  );
};

// App.js
<Route path="*" element={<Layout><NotFoundPage /></Layout>} />
// ✅ Reusable, uses semantic classes, supports i18n
```

---

### 5.3 Blog Detail Implementation

```javascript
// BlogPage.js - Dynamic rendering
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const { slug } = useParams();
  
  if (slug) {
    const article = articles.find(a => a.slug === slug);
    if (!article) return <NotFoundPage />;
    
    return (
      <article className="max-w-4xl mx-auto py-12">
        <img src={article.image} alt={article.title} className="w-full rounded-lg" />
        <h1 className="font-raleway text-4xl font-bold mt-8">{article.title}</h1>
        <p className="text-muted-foreground">{article.date}</p>
        <div className="prose prose-lg mt-8">
          {article.content}
        </div>
      </article>
    );
  }

  // List view
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {articles.map(article => (
        <Link key={article.slug} to={`/blog/${article.slug}`}>
          <BlogCard article={article} />
        </Link>
      ))}
    </div>
  );
};
```

---

## 6. Verification Checklist

### Phase1: Code Splitting
- [ ] All page imports converted to `React.lazy(() => import(...))`
- [ ] `<Suspense>` wrapper added around `<Routes>`
- [ ] `LoadingFallback` component created and displays spinner
- [ ] Build output shows multiple chunks (not single bundle)
- [ ] Navigation to /about only loads AboutPage chunk
- [ ] Initial bundle size reduced by ~60-70%

### Phase2: Error Boundary + 404
- [ ] `ErrorBoundary.js` created with class component
- [ ] ErrorBoundary wraps entire app tree
- [ ] `NotFoundPage.js` created as proper component
- [ ] 404 route uses `<NotFoundPage />` instead of inline div
- [ ] NotFoundPage supports i18n (t('404.title'))
- [ ] Manually throw error to test boundary displays correctly

### Phase3: Blog Detail + Polish
- [ ] BlogPage reads `slug` from `useParams()`
- [ ] Individual blog post renders when visiting `/blog/:slug`
- [ ] Returns 404 if slug doesn't exist
- [ ] All below-fold images have `loading="lazy"`
- [ ] No console errors on navigation

### Final Score Check
- [ ] Architecture score improved from 🟢 7/10 to 🟢 9/10
- [ ] Build shows code splitting (multiple .js chunks)
- [ ] Error boundary catches and displays errors gracefully
- [ ] 404 page is reusable component with i18n
- [ ] Blog detail route works correctly
- [ ] No performance regressions

---

## Quick Reference: Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/App.js` | 📝 MODIFY | Add lazy imports, Suspense, ErrorBoundary |
| `src/components/ErrorBoundary.js` | ✅ CREATE | Catch and display errors |
| `src/components/ui/loading-spinner.jsx` | ✅ CREATE | Loading fallback UI |
| `src/pages/NotFoundPage.js` | ✅ CREATE | Proper 404 page |
| `src/pages/BlogPage.js` | 📝 MODIFY | Implement dynamic rendering |
| All page components | 📝 MODIFY | Ensure exports work with lazy() |

---

*Plan created: May 5, 2026*  
*Based on Freearcs Pharma Services Codebase Analysis (Architecture: 🟢 7/10)*
