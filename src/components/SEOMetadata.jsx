import { useEffect } from 'react';

export default function SEOMetadata() {
  useEffect(() => {
    // Update meta title
    document.title = "Le Tripot Régnier | Salle Événementielle Atypique Paris 15";
    
    // Update or create meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Privatisez le Tripot Régnier au cœur du 15ème. Espace événementiel industriel Art Déco de 400m2, capacité 450 personnes, accès véhicule et équipement complet.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = {
      'og:title': 'Le Tripot Régnier | Salle Événementielle Atypique Paris 15',
      'og:description': descriptionContent,
      'og:image': 'https://letripotregnier.fr/assets/logo.png',
      'og:url': 'https://letripotregnier.fr',
      'og:type': 'website',
      'og:site_name': 'Le Tripot Régnier'
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Le Tripot Régnier | Salle Événementielle Paris 15',
      'twitter:description': descriptionContent,
      'twitter:image': 'https://letripotregnier.fr/assets/logo.png'
    };
    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Inject JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["EventVenue", "LocalBusiness"],
          "@id": "https://letripotregnier.fr",
          "name": "Le Tripot Régnier",
          "description": "Lieu événementiel atypique d'inspiration Art Déco et industrielle pour séminaires, lancements de produits et soirées d'entreprise.",
          "url": "https://letripotregnier.fr",
          "telephone": "+33145260458",
          "email": "contact@letripotregnier.fr",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10-12 rue Mathurin Régnier",
            "addressLocality": "Paris",
            "addressRegion": "Île-de-France",
            "postalCode": "75015",
            "addressCountry": "FR"
          },
          "priceRange": "€€€",
          "maximumAttendeeCapacity": 450,
          "sameAs": [
            "https://www.instagram.com",
            "https://www.linkedin.com",
            "https://www.facebook.com"
          ],
          "image": {
            "@type": "ImageObject",
            "url": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format",
            "width": 1200,
            "height": 630
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.8408",
            "longitude": "2.2893"
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
                "text": "Oui, l'accès direct par véhicule est possible. La salle principale dispose d'une capacité de passage permettant les lancements automobiles et expositions de véhicules de luxe."
              }
            },
            {
              "@type": "Question",
              "name": "Le lieu est-il accessible PMR ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le Tripot Régnier est entièrement conforme aux normes d'accessibilité ERP et PMR, avec ascenseur, toilettes accessibles et accès de plain-pied à tous les espaces."
              }
            },
            {
              "@type": "Question",
              "name": "Quelle est la capacité électrique du bâtiment ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nous disposons d'une infrastructure électrique lourde adaptée aux besoins techniques des événements : éclairage LED immersif, systèmes audiovisuels professionnels, chauffage et climatisation réversible."
              }
            },
            {
              "@type": "Question",
              "name": "Y a-t-il des services de traiteur sur place ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Notre cuisine professionnelle complètement équipée avec chambre froide, fours, plan de travail et espace de service permet les prestations traiteur. Un bar aménagé est également disponible."
              }
            },
            {
              "@type": "Question",
              "name": "Quelle est la taille totale de la salle ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le Tripot Régnier compte 700m² modulables : salle principale de 400m², mezzanine de 65m², hall d'accueil de 90m², plus espaces annexes (loge, lounge, vestiaire, bar)."
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      if (document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, []);

  return null;
}