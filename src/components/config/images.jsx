// ─── config/images ────────────────────────────────────────────────────────────
// Configuration centralisée de toutes les images et vidéos du site

export const IMAGES = {
  // ==========================================
  // PAGE D'ACCUEIL
  // ==========================================
  home: {
    heroVideo: "https://letripotregnier.fr/assets/videos/VIDEO_TR.mp4",
    heroPoster: "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
  },

  // ==========================================
  // ESPACES (utilisés partout)
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
      alt: "Hall d'accueil Le Tripot Régnier"
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
  // PAGE CAPACITÉS & ÉQUIPEMENTS
  // ==========================================
  capacites: {
    regie: {
      src: "https://letripotregnier.fr/assets/photos/photo-regie.jpg",
      alt: "Régie technique Le Tripot Régnier"
    }
  },

  // ==========================================
  // GALERIE PHOTOS
  // ==========================================
  gallery: [
    { src: "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg", alt: "Grande salle événementielle Le Tripot Régnier" },
    { src: "https://letripotregnier.fr/assets/photos/photo-bar.jpg", alt: "Bar équipé Le Tripot Régnier" },
    { src: "https://letripotregnier.fr/assets/photos/photo-mezzanine.jpg", alt: "Mezzanine Le Tripot Régnier" },
    { src: "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg", alt: "Espace lounge Le Tripot Régnier" },
    { src: "https://letripotregnier.fr/assets/photos/photo-loge-privee-maquillage.png", alt: "Loge privée maquillage Le Tripot Régnier" },
    { src: "https://letripotregnier.fr/assets/photos/photo-vestiaire-tripot-regnier.jpg", alt: "Vestiaire Le Tripot Régnier" },
    { src: "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg", alt: "Hall d'entrée Le Tripot Régnier" },
    { src: "https://letripotregnier.fr/assets/photos/photo-regie.jpg", alt: "Régie technique Le Tripot Régnier" },
  ],

  // ==========================================
  // LOGOS MARQUEE
  // ==========================================
  logos: [
    {
      name: "L'Oréal Professionnel",
      url: "https://imgs.search.brave.com/tCBb797MJq-8OAPWa6LncV_PKrqQAQW2iXA9dWeS80A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/Ny9sb3JlYWxfcHJv/ZmVzc2lvbm5lbC1s/b2dvX2JyYW5kbG9n/b3MubmV0X25odGlu/LTUxMngxODEucG5n",
    },
    {
      name: "Paris 2024",
      url: "https://imgs.search.brave.com/VmRjgdPg2kOTo718IzdM7_zBN8sA4zWWdkqfgtW9lkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWxvZ292ZWN0/b3JzLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMy9w/YXJpcy0yMDI0LWxv/Z28tZnJlZWxvZ292/ZWN0b3JzLm5ldF8u/cG5n",
    },
    {
      name: "Partner 3",
      url: "https://imgs.search.brave.com/3Z2ZZjs2mXc4y499p-qjzsuXUmvE0epkHeutKLM2mVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIxMTE1NTAucG5n",
    },
    {
      name: "JEEP",
      url: "https://imgs.search.brave.com/MwMZmvDhZjaIxrx0yMsqhJeArh9TW7WY7kbJhXcGdeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzcvMi9qZWVwLWlo/Ym0tbG9nby1wbmdf/c2Vla2xvZ28tNzUy/ODQucG5n",
    },
    {
      name: "Partner 5",
      url: "https://imgs.search.brave.com/9T0a4tyOJadH1tyjiaEH7qbd7e9Jcjug2NYa6iPdAdE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE4NzM0NTAucG5n",
    },
    {
      name: "Les Républicains",
      url: "https://imgs.search.brave.com/f--uPj2DZLOR1a5BO_TB6hXV9P4LW9veNRHOu1xJxBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDcvTGVzLVJlcHVi/bGljYWlucy1Mb2dv/LTUwMHgyODEucG5n",
    },
    {
      name: "Bonjour",
      url: "https://imgs.search.brave.com/fsR70YCmL7Td0rEv5p58ZiBiYJ_QH4AGW_UbcGTLLIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS84/YTQyMzFfODkxZGVk/ZmNkMDQ0NGI4ZDhl/MDA1Yzg1YWUzNzYz/MDF-bXYyLnBuZy92/MS9maWxsL3dfNDE2/LGhfMjQ4LGFsX2Ms/cV84NSx1c21fMC42/Nl8xLjAwXzAuMDEs/ZW5jX2F2aWYscXVh/bGl0eV9hdXRvL0Jv/bmpvdXJfZWRpdGVk/LnBuZw",
    },
    {
      name: "Cdiscount",
      url: "https://imgs.search.brave.com/Pk9ZnqasutWC2jB88_SqBgw9Uzfp1o9BXxbvS6NkAqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/bG9nb3ZlY3Rvci5j/b20vdXBsb2Fkcy9p/bWFnZXMvMjAyNS8w/My9zbS02N2M5NGY4/ZmJlOGMwLUNkaXNj/b3VudC53ZWJw",
    },
  ],
};

export default IMAGES;