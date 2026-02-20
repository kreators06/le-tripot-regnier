/**
 * CONFIGURATION CENTRALISÉE DES IMAGES DU SITE
 * 
 * Pour modifier facilement les images sans toucher au code :
 * 1. Ouvrez ce fichier
 * 2. Trouvez l'image que vous voulez changer
 * 3. Remplacez l'URL par la nouvelle
 * 
 * Recommandations :
 * - Utilisez des services comme Unsplash (https://unsplash.com)
 * - Ou hébergez vos images sur Imgur, Cloudinary, etc.
 * - Format recommandé : JPG/WebP optimisé pour le web
 * - Dimensions recommandées indiquées pour chaque type
 */

export const IMAGES = {
  // ========== PAGE D'ACCUEIL ==========
  home: {
    // Hero (1920x1080 min)
    hero: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format",
  },

  // ========== ESPACES (800x600) ==========
  spaces: {
    sallePrincipale: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
    bar: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format",
    mezzanine: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
    lounge: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format",
    loge: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format",
    vestiaire: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format",
  },

  // ========== CONFIGURATIONS (800x600) ==========
  configurations: {
    defile: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format",
    diner: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format",
    conference: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
    cocktail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format",
    showroom: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format",
  },

  // ========== PAGES SPÉCIALES (1920x1080) ==========
  pages: {
    contact: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format",
    histoire: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1920&auto=format",
    capacites: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format",
    engagements: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format",
  },

  // ========== GALERIE ==========
  gallery: [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format",
  ],
};

export default IMAGES;