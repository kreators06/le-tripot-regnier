// ─── PageSEO ──────────────────────────────────────────────────────────────────
// Gestion dynamique des meta SEO par page (title, description, OG, canonical)

import { useEffect } from 'react';

const SITE_URL = 'https://letripotregnier.fr';
const OG_IMAGE_DEFAULT = `${SITE_URL}/assets/photos/photo-salle-vide.jpg`;

function setMeta(selector, createAttr, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(createAttr).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export default function PageSEO({ title, description, image, canonicalPath = '' }) {
  useEffect(() => {
    const ogImage = image || OG_IMAGE_DEFAULT;
    const canonical = `${SITE_URL}${canonicalPath}`;

    document.title = title;

    setMeta('meta[name="description"]', { name: 'description' }, description);
    setMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow');

    setMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, ogImage);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonical);
    setMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'fr_FR');
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, 'Le Tripot Régnier');

    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, ogImage);

    setCanonical(canonical);
  }, [title, description, image, canonicalPath]);

  return null;
}