export const CONSENT_KEY = 'fps_cookie_consent';
export const CONSENT_EXPIRY_DAYS = 180;
export const CONSENT_UPDATED_EVENT = 'fps-cookie-consent-updated';
export const OPEN_COOKIE_PREFERENCES_EVENT = 'fps-open-cookie-preferences';

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const getDefaultCookiePreferences = () => ({ ...defaultPreferences });

export const getCookieConsent = () => {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);
    const timestamp = parsed.timestamp || 0;
    const ageInDays = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);

    if (ageInDays > CONSENT_EXPIRY_DAYS) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    const preferences = {
      ...defaultPreferences,
      ...(parsed.preferences || { analytics: Boolean(parsed.accepted), marketing: Boolean(parsed.accepted) }),
      necessary: true,
    };

    return { preferences, timestamp };
  } catch {
    localStorage.removeItem(CONSENT_KEY);
    return null;
  }
};

export const saveCookieConsent = (preferences) => {
  const consent = {
    preferences: {
      ...defaultPreferences,
      ...preferences,
      necessary: true,
    },
    timestamp: Date.now(),
  };

  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: consent }));
  return consent;
};

export const openCookiePreferences = () => {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
};

export const hasAnalyticsConsent = () => Boolean(getCookieConsent()?.preferences.analytics);
