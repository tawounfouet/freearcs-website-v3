import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Cookie } from 'lucide-react';
import {
  getCookieConsent,
  getDefaultCookiePreferences,
  OPEN_COOKIE_PREFERENCES_EVENT,
  saveCookieConsent,
} from '../lib/cookieConsent';

const CookieBanner = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState(getDefaultCookiePreferences);

  useEffect(() => {
    const stored = getCookieConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setPreferences(stored.preferences);
    }

    const openPreferences = () => {
      setPreferences(getCookieConsent()?.preferences || getDefaultCookiePreferences());
      setVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    window.openCookiePreferences = openPreferences;

    return () => {
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
      delete window.openCookiePreferences;
    };
  }, []);

  const handleConsent = (nextPreferences) => {
    saveCookieConsent(nextPreferences);
    setVisible(false);
  };

  const togglePreference = (key) => {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
    >
      <dialog
        open
        aria-labelledby="cookie-banner-title"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 static border-0 m-0"
      >

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <h2
            id="cookie-banner-title"
            className="font-raleway text-xl font-bold text-secondary"
          >
            {isFr ? 'Gestion des cookies' : 'Cookie settings'}
          </h2>
        </div>

        {/* Body */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {isFr
            ? "Freearcs Pharma Services n'active aucun traceur analytique ou marketing sans votre accord préalable. Les préférences de langue et de consentement sont strictement nécessaires au fonctionnement du site."
            : 'Freearcs Pharma Services does not enable analytics or marketing trackers without your prior consent. Language and consent preferences are strictly necessary for the site to operate.'}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-6">
          {isFr
            ? "Conformément à la recommandation consolidée de la CNIL du 25 janvier 2024, le refus des cookies non essentiels n'affecte pas votre navigation."
            : 'In accordance with the CNIL consolidated recommendation of 25 January 2024, refusing non-essential cookies does not affect your browsing.'}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-4">
            <div>
              <p className="text-sm font-semibold text-secondary">{isFr ? 'Nécessaires' : 'Necessary'}</p>
              <p className="text-xs text-muted-foreground">{isFr ? 'Toujours actifs.' : 'Always active.'}</p>
            </div>
            <span className="text-xs font-semibold uppercase text-primary">{isFr ? 'Actif' : 'On'}</span>
          </div>

          <label className="flex items-center justify-between gap-4 rounded-lg border border-border p-4 cursor-pointer">
            <div>
              <span className="block text-sm font-semibold text-secondary">{isFr ? 'Mesure d’audience' : 'Analytics'}</span>
              <span className="block text-xs text-muted-foreground">{isFr ? 'PostHog ou outil équivalent, uniquement après consentement.' : 'PostHog or equivalent tool, only after consent.'}</span>
            </div>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={() => togglePreference('analytics')}
              className="h-5 w-5 accent-primary"
            />
          </label>

          <label className="flex items-center justify-between gap-4 rounded-lg border border-border p-4 cursor-pointer">
            <div>
              <span className="block text-sm font-semibold text-secondary">{isFr ? 'Marketing' : 'Marketing'}</span>
              <span className="block text-xs text-muted-foreground">{isFr ? 'Désactivé par défaut, réservé aux traceurs publicitaires futurs.' : 'Off by default, reserved for future advertising trackers.'}</span>
            </div>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={() => togglePreference('marketing')}
              className="h-5 w-5 accent-primary"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Button
            onClick={() => handleConsent({ analytics: true, marketing: true })}
            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold rounded-full py-3 text-sm"
          >
            {isFr ? 'Tout accepter' : 'Accept all'}
          </Button>
          <Button
            onClick={() => handleConsent({ analytics: false, marketing: false })}
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold rounded-full py-3 text-sm transition-colors"
          >
            {isFr ? 'Tout refuser' : 'Reject all'}
          </Button>
          <Button
            onClick={() => handleConsent(preferences)}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full py-3 text-sm transition-colors"
          >
            {isFr ? 'Enregistrer' : 'Save'}
          </Button>
        </div>

        {/* Policy link */}
        <p className="mt-5 text-center text-xs text-muted-foreground">
          <Link
            to="/cookies"
            className="text-primary hover:underline"
            onClick={() => setVisible(false)}
          >
            {isFr ? 'En savoir plus sur notre politique de cookies' : 'Learn more about our cookie policy'}
          </Link>
        </p>

      </dialog>
    </div>
  );
};

export default CookieBanner;
