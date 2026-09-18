import { DressDetail, SiteContent } from '../types';
import { BRIDAL_DRESSES, PARTY_WEAR, DEFAULT_SITE_CONTENT } from '../data/catalog';

const STORAGE_KEY_BRIDAL = 'moonlit_bridal_dresses_v1';
const STORAGE_KEY_PARTY = 'moonlit_party_dresses_v1';
const STORAGE_KEY_CONTENT = 'moonlit_site_content_v1';
const ADMIN_AUTH_KEY = 'moonlit_admin_auth_v1';

export const ADMIN_PASSWORD = 'taq@123';

/**
 * Checks if the user is currently authenticated as admin
 */
export function getAdminAuthState(): boolean {
  try {
    return (
      sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true' ||
      localStorage.getItem(ADMIN_AUTH_KEY) === 'true'
    );
  } catch {
    return false;
  }
}

/**
 * Sets admin authentication status
 */
export function setAdminAuthState(isAuth: boolean): void {
  try {
    if (isAuth) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
    } else {
      sessionStorage.removeItem(ADMIN_AUTH_KEY);
      localStorage.removeItem(ADMIN_AUTH_KEY);
    }
  } catch {
    // Ignore storage quota/permission errors
  }
}

/**
 * Loads Bridal Dresses from localStorage, falling back to initial data
 */
export function loadBridalDresses(): DressDetail[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BRIDAL);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Error reading bridal dresses from storage', e);
  }
  return BRIDAL_DRESSES;
}

/**
 * Loads Party Wear Dresses from localStorage, falling back to initial data
 */
export function loadPartyDresses(): DressDetail[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PARTY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Error reading party wear from storage', e);
  }
  return PARTY_WEAR;
}

/**
 * Loads Site Content from localStorage, falling back to initial defaults
 */
export function loadSiteContent(): SiteContent {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONTENT);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_SITE_CONTENT,
        ...parsed,
        intro: { ...DEFAULT_SITE_CONTENT.intro, ...(parsed.intro || {}) },
        bridal: { ...DEFAULT_SITE_CONTENT.bridal, ...(parsed.bridal || {}) },
        partyWear: { ...DEFAULT_SITE_CONTENT.partyWear, ...(parsed.partyWear || {}) },
        contact: { ...DEFAULT_SITE_CONTENT.contact, ...(parsed.contact || {}) },
      };
    }
  } catch (e) {
    console.warn('Error reading site content from storage', e);
  }
  return DEFAULT_SITE_CONTENT;
}

/**
 * Saves all dresses to localStorage
 */
export function saveDresses(bridal: DressDetail[], party: DressDetail[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_BRIDAL, JSON.stringify(bridal));
    localStorage.setItem(STORAGE_KEY_PARTY, JSON.stringify(party));
  } catch (e) {
    console.error('Error saving dresses to storage', e);
  }
}

/**
 * Saves site content to localStorage
 */
export function saveSiteContent(content: SiteContent): void {
  try {
    localStorage.setItem(STORAGE_KEY_CONTENT, JSON.stringify(content));
  } catch (e) {
    console.error('Error saving site content to storage', e);
  }
}

/**
 * Resets all dresses and content to original defaults
 */
export function resetToDefaults(): {
  bridal: DressDetail[];
  party: DressDetail[];
  content: SiteContent;
} {
  try {
    localStorage.removeItem(STORAGE_KEY_BRIDAL);
    localStorage.removeItem(STORAGE_KEY_PARTY);
    localStorage.removeItem(STORAGE_KEY_CONTENT);
  } catch (e) {
    console.warn('Error clearing storage', e);
  }
  return {
    bridal: BRIDAL_DRESSES,
    party: PARTY_WEAR,
    content: DEFAULT_SITE_CONTENT,
  };
}
