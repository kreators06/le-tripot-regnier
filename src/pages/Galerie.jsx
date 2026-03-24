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
        <div className="max-w-4xl mx-auto text-center mb-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 tracking-tight">Galerie photos</h1>
          <h2 className="text-xl font-semibold mb-5" style={{ color: '#d4b351ff' }}>Découvrez nos espaces en images</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Bienvenue dans la galerie du <strong>Tripot Régnier</strong>, votre <strong>salle événementielle Art Déco à Paris</strong>. Ces <strong>photos de notre salle événementielle Paris</strong> illustrent la diversité des configurations possibles : cocktail debout, dîner assis, conférence, défilé de mode ou showroom. La <strong>décoration Art Déco</strong> et les volumes généreux du lieu créent une atmosphère unique pour chacun de vos événements. Parcourez ces images pour vous projeter dans votre prochain projet et n'hésitez pas à nous contacter pour une visite sur place.
          </p>
        </div>
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
        </div>
      </section>

      {/* Lightbox */}
      <CTABanner
        title="Envie de voir le lieu en personne ?"
        subtitle="Planifiez une visite pour découvrir l'atmosphère unique du Tripot Régnier"
      />
    </div>
  );
}