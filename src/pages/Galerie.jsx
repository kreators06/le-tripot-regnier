import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';

const galleryImages = IMAGES.gallery;

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.galerie.hero.src}
            alt={IMAGES.galerie.hero.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl text-white font-bold tracking-tight mb-6"
          >
            Notre <span style={{ color: COLORS.ACCENT_COLOR }}>Galerie</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/90 leading-relaxed"
          >
            Découvrez l'ambiance unique du Tripot Régnier à travers nos photos
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-[#F5F5F0]">
        <div className="max-w-[1600px] mx-auto">
          {/* Masonry Grid */}
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-md"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full transition-transform duration-500 group-hover:scale-110 rounded-md"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                    <p className="text-white text-sm">{image.alt}</p>
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