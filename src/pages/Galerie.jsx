import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';

const galleryImages = [
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
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format", alt: "Performance live", category: "Événements" }
];

const categories = ["Tous", "Salle", "Événements", "Architecture"];

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredImages = activeFilter === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format"
            alt="Galerie photos Le Tripot Régnier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white font-bold tracking-tight mb-6"
          >
            Notre <span className="text-[#ff8c5a]">Galerie</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 leading-relaxed"
          >
            Découvrez l'ambiance unique du Tripot Régnier à travers nos photos
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded-md ${
                  activeFilter === category
                    ? 'bg-[#0D0D0D] text-white'
                    : 'bg-white text-[#0D0D0D] hover:bg-[#0D0D0D]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full transition-transform duration-500 group-hover:scale-110 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                    <p className="text-white text-sm">{image.alt}</p>
                    <p className="text-[#ff8c5a] text-xs">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/40 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-white text-lg">{selectedImage.alt}</p>
              <p className="text-[#ff8c5a] text-sm">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Banner */}
      <CTABanner 
        title="Envie de voir le lieu en personne ?"
        subtitle="Planifiez une visite pour découvrir l'atmosphère unique du Tripot Régnier"
      />
    </div>
  );
}