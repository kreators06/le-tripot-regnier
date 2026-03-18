// ─── LogoMarquee ──────────────────────────────────────────────────────────────
// Défilement infini des logos partenaires et références

import React from 'react';
import { IMAGES } from '@/components/config/images';

export default function LogoMarquee() {
  const logos = IMAGES.logos;
  // Doubler les logos pour une boucle seamless
  const doubleLogos = [...logos, ...logos];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      </div>
      
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 48s linear infinite;
          gap: 2rem;
        }
        @media (max-width: 767px) {
          .marquee-track { animation-duration: 20s; gap: 1rem; }
        }
      `}</style>
      
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {doubleLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-12 md:w-40 md:h-20 flex items-center justify-center px-2"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}