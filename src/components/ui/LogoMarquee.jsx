import React from 'react';
import { motion } from 'framer-motion';

export default function LogoMarquee() {
  // Logos monochromes (vous pouvez ajouter vos propres logos ici)
  const logos = [
    { name: 'Brand 1', url: 'https://via.placeholder.com/120x60/ffffff/ffffff?text=Brand1' },
    { name: 'Brand 2', url: 'https://via.placeholder.com/120x60/ffffff/ffffff?text=Brand2' },
    { name: 'Brand 3', url: 'https://via.placeholder.com/120x60/ffffff/ffffff?text=Brand3' },
    { name: 'Brand 4', url: 'https://via.placeholder.com/120x60/ffffff/ffffff?text=Brand4' },
    { name: 'Brand 5', url: 'https://via.placeholder.com/120x60/ffffff/ffffff?text=Brand5' },
    { name: 'Brand 6', url: 'https://via.placeholder.com/120x60/ffffff/ffffff?text=Brand6' },
  ];

  // Dupliquer les logos pour l'effet infini
  const duplicatedLogos = [...logos, ...logos];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      className="mt-20 pt-12 border-t border-white/20"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-white/60 text-center mb-8 font-light">
        Références & Partenaires
      </p>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-16 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 h-12 md:h-16 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-full w-auto max-w-[140px] object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}