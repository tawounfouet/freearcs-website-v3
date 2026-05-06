import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const LOGO_URL = "/logo_fps.webp";

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    {
      path: '/about',
      label: t('nav.about'),
      children: [
        { path: '/about', label: t('nav.visionMission') },
        { path: '/about/founder', label: t('nav.founder') },
        { path: '/why-choose-us', label: t('nav.whyChooseUs') },
      ],
    },
    {
      path: '/services',
      label: t('nav.services'),
      children: [
        { path: '/services', label: t('nav.allServices') },
        { path: '/legal-representation', label: t('nav.legalRepresentation') },
      ],
    },
    { path: '/therapeutic-expertise', label: t('nav.therapeuticExpertise') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (item) => {
    if (item.path === '/') return location.pathname === '/';
    if (item.children) {
      return location.pathname === item.path ||
        item.children.some((c) => location.pathname === c.path);
    }
    return location.pathname === item.path;
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" data-testid="main-header">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="header-logo">
            <img
              src={LOGO_URL}
              alt="Freearcs Pharma Services"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" data-testid="desktop-nav">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors duration-200 hover:text-primary ${
                        isActive(item) ? 'text-primary' : 'text-secondary'
                      }`}
                      data-testid={`nav-link-${item.path.replace('/', '')}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openDropdown === item.path ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>

                    {openDropdown === item.path && (
                      <div className="absolute top-full left-0 min-w-60 bg-white shadow-lg rounded-lg border border-border py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-5 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary ${
                              location.pathname === child.path
                                ? 'text-primary bg-muted font-medium'
                                : 'text-secondary'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary group ${
                      isActive(item) ? 'text-primary' : 'text-secondary'
                    }`}
                    data-testid={`nav-link-${item.path.replace('/', '')}`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-200 ${
                        isActive(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Language + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-1 text-secondary hover:text-primary transition-colors"
              data-testid="language-switch"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
            <Button
              asChild
              className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-200"
              data-testid="header-cta"
            >
              <Link to="/contact">{t('nav.contactUs')}</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-secondary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-2 border-t border-gray-200" data-testid="mobile-menu">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.path ? null : item.path)
                        }
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-colors ${
                          isActive(item) ? 'text-primary' : 'text-secondary'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileExpanded === item.path ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.path && (
                        <div className="ml-4 mb-1 border-l-2 border-primary bg-muted">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={closeMobile}
                              className={`block px-4 py-2.5 text-sm transition-colors hover:text-primary ${
                                location.pathname === child.path
                                  ? 'text-primary font-medium'
                                  : 'text-secondary'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMobile}
                      className={`block px-4 py-3 text-base font-medium transition-colors hover:text-primary ${
                        isActive(item) ? 'text-primary' : 'text-secondary'
                      }`}
                      data-testid={`mobile-nav-link-${item.path.replace('/', '')}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between px-4 pt-4 mt-2 border-t border-gray-200">
                <button
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="flex items-center space-x-2 text-secondary hover:text-primary"
                  data-testid="mobile-language-switch"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase">
                    {language === 'fr' ? 'EN' : 'FR'}
                  </span>
                </button>
                <Button
                  asChild
                  className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-6 py-2 rounded-full"
                  data-testid="mobile-header-cta"
                >
                  <Link to="/contact" onClick={closeMobile}>
                    {t('nav.contactUs')}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
