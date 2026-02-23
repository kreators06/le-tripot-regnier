import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/components/config/images';

export default function LogoMarquee() {
  const logos = IMAGES.logos;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-center text-xs tracking-[0.3em] uppercase text-gray-500 mb-10 md:mb-12 font-light">
          Références & Partenaires
        </h3>
      </div>
      
      <div className="overflow-hidden bg-white">
        <motion.div
          className="flex gap-8 md:gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: isMobile ? 4 : 100,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {/* First set */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 flex items-center justify-center px-2"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          
          {/* Second set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 flex items-center justify-center px-2"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}