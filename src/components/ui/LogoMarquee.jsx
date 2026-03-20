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
          animation: marquee-scroll 56s linear infinite;
          gap: 1rem;
        }
        @media (max-width: 767px) {
          .marquee-track { animation-duration: 28s; gap: 0.5rem; }
        }
      `}</style>
      
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {doubleLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-10 md:w-32 md:h-16 flex items-center justify-center px-1"
            >
              <img
                src={logo.url}
                alt={logo.name}
                width="128" height="64"
                loading="lazy"
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}