import React from 'react';
import { IMAGES } from '@/components/config/images';

export default function LogoMarquee() {
  const logos = IMAGES.logos;
  // Doubler les logos pour une boucle seamless
  const doubleLogos = [...logos, ...logos];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-center text-xs tracking-[0.3em] uppercase text-gray-500 mb-10 md:mb-12 font-light">
          Références & Partenaires
        </h3>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        
        .marquee-container {
          overflow: hidden;
          background: white;
        }
        
        .marquee-content {
          display: flex;
          gap: 1.5rem;
          animation: marquee 48s linear infinite;
        }
        
        @media (max-width: 767px) {
          .marquee-content {
            animation: marquee 16s linear infinite;
            gap: 1rem;
          }
        }
      `}</style>
      
      <div className="marquee-container">
        <div className="marquee-content">
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