import React, { lazy, Suspense } from "react";
import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoadingFallback } from "./components/ui/loading-spinner";
import SchemaOrg from "./components/SchemaOrg";

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
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <LanguageProvider>
          <div className="App font-nunito" data-testid="app-root">
            <SchemaOrg />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/about" element={<Layout><AboutPage /></Layout>} />
                <Route path="/about/founder" element={<Layout><FounderPage /></Layout>} />
                <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
                <Route path="/legal-representation" element={<Layout><LegalRepresentationPage /></Layout>} />
                <Route path="/therapeutic-expertise" element={<Layout><TherapeuticExpertisePage /></Layout>} />
                <Route path="/why-choose-us" element={<Layout><WhyChooseUsPage /></Layout>} />
                <Route path="/references" element={<Layout><ReferencesPage /></Layout>} />
                <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
                <Route path="/blog/:slug" element={<Layout><BlogPage /></Layout>} />
                <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
                <Route path="/legal" element={<Layout><LegalPage /></Layout>} />
                <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
                <Route path="/cookies" element={<Layout><CookiesPage /></Layout>} />
                <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
              </Routes>
            </Suspense>
          </div>
        </LanguageProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
