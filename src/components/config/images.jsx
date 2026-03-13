// ─── config/images ────────────────────────────────────────────────────────────
// Configuration centralisée de toutes les images et vidéos du site

/**
 * CONFIGURATION CENTRALISÉE DES IMAGES DU SITE
 * 
 * Pour modifier une image :
 * 1. Trouvez l'image que vous souhaitez changer ci-dessous
 * 2. Remplacez l'URL par celle de votre nouvelle image
 * 3. Les changements seront appliqués automatiquement sur tout le site
 * 
 */

export const IMAGES = {
  // ==========================================
  // PAGE D'ACCUEIL
  // ==========================================
  home: {
    // Vidéo de fond du hero
    heroVideo: "https://letripotregnier.fr/assets/videos/VIDEO_TR.mp4",
    // Image de secours si la vidéo ne charge pas
    heroPoster: "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
  },

  // ==========================================
  // ESPACES
  // ==========================================
  spaces: {
    grandeSalle: {
      src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      alt: "Grande salle événementielle Le Tripot Régnier"
    },
    bar: {
      src: "https://letripotregnier.fr/assets/photos/photo-bar.jpg",
      alt: "Bar équipé Le Tripot Régnier"
    },
    mezzanine: {
      src: "https://letripotregnier.fr/assets/photos/photo-mezzanine.jpg",
      alt: "Mezzanine Le Tripot Régnier"
    },
    espaceLounge: {
      src: "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
      alt: "Espace Lounge Le Tripot Régnier"
    },
    logePrivee: {
      src: "https://letripotregnier.fr/assets/photos/photo-loge-privee-maquillage.png",
      alt: "Loge Privée Le Tripot Régnier"
    },
    vestiaire: {
      src: "https://letripotregnier.fr/assets/photos/photo-vestiaire-tripot-regnier.jpg",
      alt: "Vestiaire Le Tripot Régnier"
    },
  },

  // ==========================================
  // CONFIGURATIONS ÉVÉNEMENTIELLES
  // ==========================================
  configurations: {
    cocktail: {
      src: "https://letripotregnier.fr/assets/photos/photo-cocktail.jpg",
      alt: "Configuration cocktail debout Le Tripot Régnier"
    },
    dinerAssis: {
      src: "https://letripotregnier.fr/assets/photos/photo-diner-assis.jpg",
      alt: "Configuration dîner assis Le Tripot Régnier"
    },
    seminaire: {
      src: "https://letripotregnier.fr/assets/photos/photo-seminaire.jpg",
      alt: "Configuration séminaire professionnel Le Tripot Régnier"
    },
    conference: {
      src: "https://letripotregnier.fr/assets/photos/photo-conference.jpg",
      alt: "Configuration conférence Le Tripot Régnier"
    },
    showroom: {
      src: "https://letripotregnier.fr/assets/photos/photo-showroom.jpg",
      alt: "Configuration showroom produits Le Tripot Régnier"
    },
    soiree: {
      src: "https://letripotregnier.fr/assets/photos/photo-soiree.jpg",
      alt: "Configuration soirée événementielle Le Tripot Régnier"
    },
  },

  // ==========================================
  // GALERIE PHOTOS
  // ⚠️ ÉDITABLE : Modifiez src (URL), alt (description SEO), et category
  // Categories disponibles : "Salle", "Événements", "Architecture"
  // ==========================================
  gallery: [
    {
      src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      alt: "Grande salle événementielle Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-bar.jpg",
      alt: "Bar équipé Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-mezzanine.jpg",
      alt: "Mezzanine Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
      alt: "Espace lounge Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-loge-privee-maquillage.png",
      alt: "Loge privée maquillage Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-vestiaire-tripot-regnier.jpg",
      alt: "Vestiaire Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
      alt: "Hall d'entrée Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-regie.jpg",
      alt: "Régie technique Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-cocktail.jpg",
      alt: "Soirée cocktail Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-diner-assis.jpg",
      alt: "Dîner assis Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-seminaire.jpg",
      alt: "Séminaire professionnel Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-conference.jpg",
      alt: "Conférence Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-showroom.jpg",
      alt: "Showroom Le Tripot Régnier"
    },
    {
      src: "https://letripotregnier.fr/assets/photos/photo-soiree.jpg",
      alt: "Soirée événementielle Le Tripot Régnier"
    },
  ],

  // ==========================================
  // PAGE CONTACT
  // ==========================================
  contact: {
    hero: {
      src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      alt: "Contactez Le Tripot Régnier Paris 15"
    }
  },

  // ==========================================
  // PAGE HISTOIRE
  // ==========================================
  histoire: {
    hero: {
      src: "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
      alt: "Histoire du Tripot Régnier"
    },
    moderne: {
      src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      alt: "Le Tripot Régnier aujourd'hui"
    }
  },

  // ==========================================
  // PAGE CAPACITÉS & ÉQUIPEMENTS
  // ==========================================
  capacites: {
    hero: {
      src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      alt: "Équipements techniques Le Tripot Régnier"
    },
    murLED: {
      src: "https://letripotregnier.fr/assets/photos/photo-mur-led.jpg",
      alt: "Mur LED professionnel Le Tripot Régnier"
    },
    regie: {
      src: "https://letripotregnier.fr/assets/photos/photo-regie.jpg",
      alt: "Régie technique Le Tripot Régnier"
    }
  },

  // ==========================================
  // PAGE ENGAGEMENTS
  // ==========================================
  engagements: {
    hero: {
      src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      alt: "Engagements RSE Le Tripot Régnier"
    }
  },

  // ==========================================
  // PAGE ÉQUIPE
  // ==========================================
  equipe: {
    hero: {
      src: "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
      alt: "Équipe Le Tripot Régnier"
    }
  },

  // ==========================================
  // PAGE GALERIE
  // ==========================================
  galerie: {
    hero: {
      src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      alt: "Galerie photos Le Tripot Régnier"
    }
  },

  // ==========================================
  // LOGOS MARQUEE - PAGE D'ACCUEIL HERO
  // ==========================================
  // Modifier facilement cette section pour ajouter/changer les logos
  // Les logos seront affichés en version monochromes et inversés
  logos: [
    {
      name: "Partner 1",
      url: "https://imgs.search.brave.com/tCBb797MJq-8OAPWa6LncV_PKrqQAQW2iXA9dWeS80A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/Ny9sb3JlYWxfcHJv/ZmVzc2lvbm5lbC1s/b2dvX2JyYW5kbG9n/b3MubmV0X25odGlu/LTUxMngxODEucG5n",
    },
    {
      name: "Partner 2",
      url: "https://imgs.search.brave.com/VmRjgdPg2kOTo718IzdM7_zBN8sA4zWWdkqfgtW9lkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWxvZ292ZWN0/b3JzLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMy9w/YXJpcy0yMDI0LWxv/Z28tZnJlZWxvZ292/ZWN0b3JzLm5ldF8u/cG5n",
    },
    {
      name: "Partner 3",
      url: "https://imgs.search.brave.com/3Z2ZZjs2mXc4y499p-qjzsuXUmvE0epkHeutKLM2mVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIxMTE1NTAucG5n",
    },
    {
      name: "Partner 4",
      url: "https://imgs.search.brave.com/MwMZmvDhZjaIxrx0yMsqhJeArh9TW7WY7kbJhXcGdeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzcvMi9qZWVwLWlo/Ym0tbG9nby1wbmdf/c2Vla2xvZ28tNzUy/ODQucG5n",
    },
    {
      name: "Partner 5",
      url: "https://imgs.search.brave.com/9T0a4tyOJadH1tyjiaEH7qbd7e9Jcjug2NYa6iPdAdE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE4NzM0NTAucG5n",
    },
    {
      name: "Partner 6",
      url: "https://imgs.search.brave.com/f--uPj2DZLOR1a5BO_TB6hXV9P4LW9veNRHOu1xJxBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDcvTGVzLVJlcHVi/bGljYWlucy1Mb2dv/LTUwMHgyODEucG5n",
    },
    {
      name: "Partner 7",
      url: "https://imgs.search.brave.com/fsR70YCmL7Td0rEv5p58ZiBiYJ_QH4AGW_UbcGTLLIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS84/YTQyMzFfODkxZGVk/ZmNkMDQ0NGI4ZDhl/MDA1Yzg1YWUzNzYz/MDF-bXYyLnBuZy92/MS9maWxsL3dfNDE2/LGhfMjQ4LGFsX2Ms/cV84NSx1c21fMC42/Nl8xLjAwXzAuMDEs/ZW5jX2F2aWYscXVh/bGl0eV9hdXRvL0Jv/bmpvdXJfZWRpdGVk/LnBuZw",
    },
    {
      name: "Partner 8",
      url: "https://imgs.search.brave.com/Pk9ZnqasutWC2jB88_SqBgw9Uzfp1o9BXxbvS6NkAqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/bG9nb3ZlY3Rvci5j/b20vdXBsb2Fkcy9p/bWFnZXMvMjAyNS8w/My9zbS02N2M5NGY4/ZmJlOGMwLUNkaXNj/b3VudC53ZWJw",
    },
    {
      name: "Partner 9",
      url: "https://images.unsplash.com/vector-1769600878556-890ba1bf6d04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Partner 10",
      url: "https://images.unsplash.com/vector-1769600878556-890ba1bf6d04?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default IMAGES;