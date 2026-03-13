import { useEffect } from 'react';

const OG_IMAGE = "https://letripotregnier.fr/images/og-tripot-regnier.jpg";
const TITLE = "Le Tripot Régnier | Salle événementielle Paris 15 — Location privée";
const DESCRIPTION = "Le Tripot Régnier, salle de réception événementielle à Paris 15e. Espace modulable de 700m² pour soirées privées, dîners d'entreprise, conférences, défilés et showrooms. Son, lumière et vidéo professionnel.";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EventVenue", "LocalBusiness"],
      "@id": "https://letripotregnier.fr",
      "name": "Le Tripot Régnier",
      "description": "Salle de réception événementielle Art Déco et industriel à Paris 15e. Espace modulable pour soirées, conférences, défilés et showrooms.",
      "url": "https://letripotregnier.fr",
      "telephone": "+33661060710",
      "email": "contact@letripotregnier.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10-12 rue Mathurin Régnier",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75015",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.8422,
        "longitude": 2.2985
      },
      "image": OG_IMAGE,
      "maximumAttendeeCapacity": 500,
      "priceRange": "€€€",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "09:00",
        "closes": "02:00"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Peut-on accéder à la salle avec un véhicule ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, l'accès direct par véhicule est possible grâce aux portes coulissantes de 2,50m x 2,57m et une zone de livraison de 22m devant la salle."
          }
        },
        {
          "@type": "Question",
          "name": "Le lieu est-il accessible PMR ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le Tripot Régnier est entièrement conforme aux normes ERP et PMR, avec accès de plain-pied à tous les espaces."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la capacité de la salle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "700m² modulables : salle principale de 400m², mezzanine de 65m², hall d'accueil de 90m². Capacité jusqu'à 500 personnes en cocktail, 220 en dîner assis."
          }
        },
        {
          "@type": "Question",
          "name": "Y a-t-il des services de traiteur sur place ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une cuisine professionnelle équipée (four, machine à glaçons, réfrigérateur) et un bar aménagé sont disponibles pour vos prestataires traiteur."
          }
        }
      ]
    }
  ]
};

function setMeta(selector, createAttr, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(createAttr).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function SEOMetadata() {
  useEffect(() => {
    document.title = TITLE;

    setMeta('meta[name="description"]', { name: 'description' }, DESCRIPTION);
    setMeta('meta[name="keywords"]', { name: 'keywords' }, 'salle événementielle Paris, location salle Paris 15, espace réception Paris, salle privatisée soirée, Le Tripot Régnier');
    setMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow');
    setMeta('meta[name="author"]', { name: 'author' }, 'Le Tripot Régnier');

    setMeta('meta[property="og:title"]', { property: 'og:title' }, TITLE);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, DESCRIPTION);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, OG_IMAGE);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, 'https://letripotregnier.fr/');
    setMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'fr_FR');
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, 'Le Tripot Régnier');

    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, TITLE);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, DESCRIPTION);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, OG_IMAGE);

    // JSON-LD Schema
    const existing = document.getElementById('schema-tripot');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'schema-tripot';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(SCHEMA);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('schema-tripot');
      if (s) s.remove();
    };
  }, []);

  return null;
}