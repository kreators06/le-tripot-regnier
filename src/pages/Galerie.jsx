// ─── Galerie ──────────────────────────────────────────────────────────────────
// Galerie photos du Tripot Régnier avec lightbox

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';

const galleryImages = IMAGES.gallery;

export default function Galerie() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  const prev = () => setSelectedIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setSelectedIndex((p) => (p + 1) % galleryImages.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  return (
    <div className="pt-20">
      <PageSEO
        title="Galerie photos | Le Tripot Régnier"
        description="Galerie photos du Tripot Régnier. Découvrez nos espaces en images : salle principale, bar, mezzanine, hall d'accueil."
        canonicalPath="/Galerie"
      />
      {/* Gallery Section */}
      <section className="py-16 px-4 bg-[#F5F5F0]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
            <AnimatePresence>
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="relative overflow-hidden rounded-md aspect-square md:aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[#0D0D0D] text-left px-1">{image.alt}</p>
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
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/40 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setSelectedIndex(null)}
              aria-label="Fermer la vue agrandie"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
            <motion.img
              key={selectedImage.src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-white text-sm">{selectedImage.alt}</p>
              <p className="text-white/40 text-xs mt-1">{selectedIndex + 1} / {galleryImages.length}</p>
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