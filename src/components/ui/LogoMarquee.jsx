import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/components/config/images';

export default function LogoMarquee() {
  // Récupérer les logos depuis la config centralisée
  const logos = IMAGES.logos;

  // Tripler les logos pour un défilement vraiment infini et fluide
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      className="mt-20 pt-12 border-t border-white/20 px-4 md:px-0"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-white/60 text-center mb-8 font-light">
        Références & Partenaires
      </p>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 py-4 md:py-6"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 h-14 md:h-20 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-full w-auto object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}