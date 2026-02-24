
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
    salonVIP: {
      src: "https://letripotregnier.fr/assets/photos/",
      alt: "Salon VIP privatif Le Tripot Régnier"
    },
    terrasse: {
      src: "https://letripotregnier.fr/assets/photos/",
      alt: "Terrasse extérieure Le Tripot Régnier"
    },
  },

  // ==========================================
  // CONFIGURATIONS ÉVÉNEMENTIELLES
  // ==========================================
  configurations: {
    cocktail: {
      src: "https://letripotregnier.fr/assets/photos/",
      alt: "Configuration cocktail debout Le Tripot Régnier"
    },
    dinerAssis: {
      src: "https://letripotregnier.fr/assets/photos/",
      alt: "Configuration dîner assis Le Tripot Régnier"
    },
    seminaire: {
      src: "https://letripotregnier.fr/assets/photos/",
      alt: "Configuration séminaire professionnel Le Tripot Régnier"
    },
    conference: {
      src: "https://letripotregnier.fr/assets/photos/",
      alt: "Configuration conférence Le Tripot Régnier"
    },
    showroom: {
      src: "https://letripotregnier.fr/assets/photos/",
      alt: "Configuration showroom produits Le Tripot Régnier"
    },
    soiree: {
      src: "https://letripotregnier.fr/assets/photos/",
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
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
      alt: "Salle principale Le Tripot Régnier",
      category: "Salle",
      description: "Vue de la grande salle événementielle avec son style Art Déco"
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format",
      alt: "Événement soirée Paris",
      category: "Événements",
      description: "Soirée festive organisée au Tripot Régnier"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
      alt: "Conférence entreprise",
      category: "Événements",
      description: "Conférence professionnelle avec équipements audiovisuels"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
      alt: "Réception mariage Paris",
      category: "Événements",
      description: "Réception de mariage dans un cadre élégant"
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format",
      alt: "Architecture Art Déco",
      category: "Architecture",
      description: "Détails architecturaux Art Déco du bâtiment"
    },
    {
      src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format",
      alt: "Bar événementiel",
      category: "Salle",
      description: "Espace bar pour vos événements"
    },
    {
      src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&auto=format",
      alt: "Cocktail professionnel",
      category: "Événements",
      description: "Cocktail networking en configuration debout"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format",
      alt: "Décor intérieur industriel",
      category: "Architecture",
      description: "Style industriel moderne du Tripot Régnier"
    },
    {
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format",
      alt: "Soirée dansante",
      category: "Événements",
      description: "Piste de danse avec éclairage professionnel"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
      alt: "Espace séminaire",
      category: "Salle",
      description: "Configuration pour séminaires d'entreprise"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format",
      alt: "Célébration entreprise",
      category: "Événements",
      description: "Événement corporate au Tripot Régnier"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format",
      alt: "Espace lounge",
      category: "Salle",
      description: "Zone lounge pour moments de détente"
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format",
      alt: "Concert privé",
      category: "Événements",
      description: "Performance musicale en configuration concert"
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format",
      alt: "Soirée festive",
      category: "Événements",
      description: "Ambiance festive avec DJ et éclairages"
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format",
      alt: "Loge artiste",
      category: "Salle",
      description: "Espace privé pour artistes et VIP"
    },
    {
      src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format",
      alt: "DJ set soirée",
      category: "Événements",
      description: "Installation DJ professionnelle"
    },
    {
      src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&auto=format",
      alt: "Ambiance soirée",
      category: "Événements",
      description: "Atmosphère unique pour événements nocturnes"
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format",
      alt: "Performance live",
      category: "Événements",
      description: "Spectacle vivant sur scène professionnelle"
    }
  ],

  // ==========================================
  // PAGE CONTACT
  // ==========================================
  contact: {
    hero: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format",
      alt: "Contactez Le Tripot Régnier Paris 15"
    }
  },

  // ==========================================
  // PAGE HISTOIRE
  // ==========================================
  histoire: {
    hero: {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&auto=format",
      alt: "Histoire du Tripot Régnier"
    },
    moderne: {
      src: "https://images.unsplash.com/photo-1519167758481-83f29da8c2f0?w=800&auto=format",
      alt: "Le Tripot Régnier aujourd'hui"
    }
  },

  // ==========================================
  // PAGE CAPACITÉS & ÉQUIPEMENTS
  // ==========================================
  capacites: {
    hero: {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&auto=format",
      alt: "Équipements techniques Le Tripot Régnier"
    },
    murLED: {
      src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format",
      alt: "Mur LED professionnel Le Tripot Régnier"
    }
  },

  // ==========================================
  // PAGE ENGAGEMENTS
  // ==========================================
  engagements: {
    hero: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format",
      alt: "Engagements RSE Le Tripot Régnier"
    }
  },

  // ==========================================
  // PAGE ÉQUIPE
  // ==========================================
  equipe: {
    hero: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format",
      alt: "Équipe Le Tripot Régnier"
    }
  },

  // ==========================================
  // PAGE GALERIE
  // ==========================================
  galerie: {
    hero: {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format",
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
      url: "https://imgs.search.brave.com/MwMZmvDhZjaIxrx0yMsqhJeArh9TW7WY7kbJhXcGdeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzcvMi9qZWVwLWxv/Z28tcG5nX3NlZWts/b2dvLTc1Mjg0LnBu/Zw",
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
