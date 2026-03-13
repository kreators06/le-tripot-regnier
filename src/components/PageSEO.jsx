import { useEffect } from 'react';

const OG_IMAGE = "https://letripotregnier.fr/images/og-tripot-regnier.jpg";

function setMetaTag(selector, createAttr, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(createAttr).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function PageSEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title.includes('Le Tripot Régnier') ? title : `${title} | Le Tripot Régnier — Paris 15e`;
    document.title = fullTitle;
    
    setMetaTag('meta[name="description"]', { name: 'description' }, description);
    setMetaTag('meta[name="robots"]', { name: 'robots' }, 'index, follow');
    setMetaTag('meta[property="og:title"]', { property: 'og:title' }, fullTitle);
    setMetaTag('meta[property="og:description"]', { property: 'og:description' }, description);
    setMetaTag('meta[property="og:image"]', { property: 'og:image' }, OG_IMAGE);
    setMetaTag('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMetaTag('meta[property="og:locale"]', { property: 'og:locale' }, 'fr_FR');
    setMetaTag('meta[property="og:site_name"]', { property: 'og:site_name' }, 'Le Tripot Régnier');
    setMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, fullTitle);
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    setMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' }, OG_IMAGE);
  }, [title, description]);
  
  return null;
}