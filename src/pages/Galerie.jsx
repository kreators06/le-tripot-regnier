import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';

const galleryImages = IMAGES.gallery;

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-20">
      <PageSEO title="Galerie Photos" description="Parcourez la galerie photos du Tripot Régnier et découvrez l'ambiance unique de notre salle événementielle de 700m² à Paris 15e." />
      {/* Gallery Section */}
      <section className="py-16 px-4 bg-[#F5F5F0]">
        <div className="max-w-[1600px] mx-auto">
          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
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
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-md aspect-square md:aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 text-left px-1">{image.alt}</p>
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