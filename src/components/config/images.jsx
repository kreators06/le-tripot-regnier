/**
 * CONFIGURATION CENTRALISÉE DES IMAGES DU SITE
 * 
 * Pour modifier une image :
 * 1. Trouvez l'image que vous souhaitez changer ci-dessous
 * 2. Remplacez l'URL par celle de votre nouvelle image
 * 3. Les changements seront appliqués automatiquement sur tout le site
 * 
 * Sources d'images recommandées :
 * - Unsplash (gratuit) : https://unsplash.com
 * - Pexels (gratuit) : https://pexels.com
 * - Votre propre hébergement (Cloudinary, AWS S3, etc.)
 */

export const IMAGES = {
  // ==========================================
  // PAGE D'ACCUEIL
  // ==========================================
  home: {
    // Vidéo de fond du hero
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-people-at-a-party-dancing-in-the-dark-4553-large.mp4",
    // Image de secours si la vidéo ne charge pas
    heroPoster: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format",
  },

  // ==========================================
  // ESPACES
  // ==========================================
  spaces: {
    grandeSalle: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
    salonVIP: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
    terrasse: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format",
  },

  // ==========================================
  // CONFIGURATIONS ÉVÉNEMENTIELLES
  // ==========================================
  configurations: {
    cocktail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
    dinerAssis: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
    seminaire: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
    conference: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format",
    showroom: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format",
    soiree: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format",
  },

  // ==========================================
  // GALERIE PHOTOS
  // ==========================================
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
      alt: "Salle principale Le Tripot Régnier",
      category: "Salle"
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format",
      alt: "Événement soirée Paris",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
      alt: "Conférence entreprise",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
      alt: "Réception mariage Paris",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format",
      alt: "Architecture Art Déco",
      category: "Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format",
      alt: "Bar événementiel",
      category: "Salle"
    },
    {
      src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&auto=format",
      alt: "Cocktail professionnel",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format",
      alt: "Décor intérieur industriel",
      category: "Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format",
      alt: "Soirée dansante",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
      alt: "Espace séminaire",
      category: "Salle"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format",
      alt: "Célébration entreprise",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format",
      alt: "Espace lounge",
      category: "Salle"
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format",
      alt: "Concert privé",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format",
      alt: "Soirée festive",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format",
      alt: "Loge artiste",
      category: "Salle"
    },
    {
      src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format",
      alt: "DJ set soirée",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&auto=format",
      alt: "Ambiance soirée",
      category: "Événements"
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format",
      alt: "Performance live",
      category: "Événements"
    }
  ],

  // ==========================================
  // PAGE CONTACT
  // ==========================================
  contact: {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format",
  },

  // ==========================================
  // PAGE HISTOIRE
  // ==========================================
  histoire: {
    hero: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&auto=format",
    moderne: "https://images.unsplash.com/photo-1519167758481-83f29da8c2f0?w=800&auto=format",
  },

  // ==========================================
  // PAGE CAPACITÉS & ÉQUIPEMENTS
  // ==========================================
  capacites: {
    hero: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&auto=format",
    murLED: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format",
  },

  // ==========================================
  // PAGE ENGAGEMENTS
  // ==========================================
  engagements: {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format",
  },

  // ==========================================
  // PAGE ÉQUIPE
  // ==========================================
  equipe: {
    hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format",
  },

  // ==========================================
  // PAGE GALERIE
  // ==========================================
  galerie: {
    hero: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format",
  },
};

export default IMAGES;