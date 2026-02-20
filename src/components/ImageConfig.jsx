/**
 * 🎨 CONFIGURATION DES IMAGES - LE TRIPOT RÉGNIER
 * 
 * Ce fichier centralise toutes les URLs d'images du site pour faciliter leur modification.
 * 
 * 📝 Comment modifier une image :
 * 1. Uploadez votre nouvelle image sur un service d'hébergement
 *    - Unsplash (gratuit) : https://unsplash.com
 *    - Cloudinary (gratuit) : https://cloudinary.com
 *    - Votre propre serveur
 * 
 * 2. Copiez l'URL complète de l'image
 * 
 * 3. Remplacez l'URL correspondante ci-dessous
 * 
 * ⚠️ Important : Privilégiez des images optimisées (WebP, JPEG optimisé, 1920px de large max)
 */

export const IMAGES = {
  // ========================================
  // 🏠 PAGE D'ACCUEIL
  // ========================================
  home: {
    // Section Hero (vidéo de fond)
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-people-at-a-party-dancing-in-the-dark-4553-large.mp4",
    heroPoster: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format",
    
    // Section "Nos Espaces"
    espaces: {
      grandeSalle: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
      salonVIP: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
      terrasse: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format",
    },
    
    // Section "Configurations"
    configurations: {
      cocktail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
      dinerAssis: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
      seminaire: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
      conference: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format",
      showroom: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format",
      soiree: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format",
    },
  },

  // ========================================
  // 📸 GALERIE PHOTOS
  // ========================================
  gallery: [
    { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format", alt: "Salle principale Le Tripot Régnier", category: "Salle" },
    { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format", alt: "Événement soirée Paris", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format", alt: "Conférence entreprise", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format", alt: "Réception mariage Paris", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format", alt: "Architecture Art Déco", category: "Architecture" },
    { src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format", alt: "Bar événementiel", category: "Salle" },
    { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&auto=format", alt: "Cocktail professionnel", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format", alt: "Décor intérieur industriel", category: "Architecture" },
    { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format", alt: "Soirée dansante", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format", alt: "Espace séminaire", category: "Salle" },
    { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format", alt: "Célébration entreprise", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format", alt: "Espace lounge", category: "Salle" },
    { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format", alt: "Concert privé", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format", alt: "Soirée festive", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format", alt: "Loge artiste", category: "Salle" },
    { src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format", alt: "DJ set soirée", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&auto=format", alt: "Ambiance soirée", category: "Événements" },
    { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format", alt: "Performance live", category: "Événements" },
  ],

  // ========================================
  // 📜 HISTOIRE
  // ========================================
  histoire: {
    hero: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&auto=format",
    modernVenue: "https://images.unsplash.com/photo-1519167758481-83f29da8c2f0?w=800&auto=format",
  },

  // ========================================
  // 🎯 CAPACITÉS & ÉQUIPEMENTS
  // ========================================
  capacites: {
    hero: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&auto=format",
    murLED: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format",
  },

  // ========================================
  // 🌱 ENGAGEMENTS RSE
  // ========================================
  engagements: {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format",
  },

  // ========================================
  // 👥 ÉQUIPE
  // ========================================
  equipe: {
    hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format",
  },

  // ========================================
  // 📧 CONTACT
  // ========================================
  contact: {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format",
  },
};

export default IMAGES;