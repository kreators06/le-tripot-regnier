// ─── Capacites ────────────────────────────────────────────────────────────────
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Monitor, Speaker, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SectionTitle from '@/components/ui/SectionTitle';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';
import TrustSignals from '@/components/TrustSignals';

// ─── Hero Carousel ─────────────────────────────────────────────────────────────
const heroImages = [
  "https://letripotregnier.fr/assets/photos/photo-defile-mode-grande-salle-loreal.png",
  "https://letripotregnier.fr/assets/photos/photo-salle-principale-diner-europe1.jpeg",
  "https://letripotregnier.fr/assets/photos/photo-grande-salle-JO-paris-2024-conference.png",
  "https://letripotregnier.fr/assets/photos/photo-grande-salle-evenement-audi.jpeg",
  "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
  IMAGES.capacites.regie.src,
  IMAGES.spaces.bar.src,
  "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
];
const duplicated = [...heroImages, ...heroImages];

function HeroCarousel() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="relative overflow-hidden h-64 md:h-96 pt-24"
      style={{ background: '#0D0D0D' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          display: flex;
          gap: 10px;
          width: max-content;
          animation: carousel-scroll 120s linear infinite;
        }
        .carousel-track.paused { animation-play-state: paused; }
      `}</style>
      <div className={`carousel-track h-full${paused ? ' paused' : ''}`}>
        {duplicated.map((src, i) => (
          <div key={i} className="h-full flex-shrink-0 overflow-hidden rounded-lg" style={{ width: 'clamp(160px, 24vw, 360px)' }}>
            <img src={src} alt="Le Tripot Régnier" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />
    </div>
  );
}

// ─── Données espaces ──────────────────────────────────────────────────────────
const sallePrincipaleImages = [
  "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
  "https://letripotregnier.fr/assets/photos/photo-mezzanine.jpg",
  "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
];
const mezzanineImages = [
  "https://letripotregnier.fr/assets/photos/photo-mezzanine.jpg",
  "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
];

const spaces = [
  { title: "Salle Principale", surface: "400 m²", images: sallePrincipaleImages, description: "Espace modulable équipé (son, lumière, projection vidéo) dotée d'un bar et d'un fumoir intérieur.", isHoverSlider: true },
  { title: "Bar", surface: "", image: IMAGES.spaces.bar.src, description: "Bar équipé : four, machine à glaçons, réfrigérateur." },
  { title: "Mezzanine", surface: "65 m²", images: mezzanineImages, description: "Espace en hauteur offrant une vue panoramique sur la salle.", isHoverSlider: true },
  { title: "Hall d'accueil", surface: "", image: IMAGES.spaces.espaceLounge.src, description: "Espace détente situé en prolongation de la mezzanine." },
  { title: "Vestiaire", surface: "450 pers.", image: IMAGES.spaces.vestiaire.src, description: "Vestiaire équipé avec capacité de 450 personnes" },
  { title: "Loge Privée", surface: "", image: IMAGES.spaces.logePrivee.src, description: "Loge avec accès privé comprenant : écran TV, canapé, toilettes, douche, lavabo." },
];

function ArrowSliderCard({ space, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p - 1 + space.images.length) % space.images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p + 1) % space.images.length);
  };

  return (
    <div className="cursor-pointer group/card" onClick={() => onClick(space.images[currentIndex])}>
      <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '4/3', background: '#111' }}>
        {space.images.map((src, i) => (
          <img key={i} src={src} alt={`${space.title} — Le Tripot Régnier`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: i === currentIndex ? 1 : 0, transition: 'opacity 0.5s ease' }}
          />
        ))}
        {space.surface && (
          <span className="absolute top-3 right-3 font-bold rounded-full text-white bg-black z-10" style={{ fontSize: '0.95rem', padding: '0.35rem 0.9rem' }}>
            {space.surface}
          </span>
        )}
        <button onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all opacity-0 group-hover/card:opacity-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Photo précédente"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all opacity-0 group-hover/card:opacity-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Photo suivante"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {space.images.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ backgroundColor: i === currentIndex ? 'white' : 'rgba(255,255,255,0.4)' }}
            />
          ))}
        </div>
      </div>
      <div className="pt-3 pb-3 px-5 bg-[#FAFAFA]">
        <h3 className="text-[#0D0D0D] text-base font-semibold">{space.title}</h3>
        <p className="text-[#0D0D0D] text-sm mt-1 leading-relaxed">{space.description}</p>
      </div>
    </div>
  );
}

// ─── AV Data ──────────────────────────────────────────────────────────────────
const lighting = ["48 Projecteurs LEDS BEAM Z", "8 Automatiques BEAM CHAUVET", "4 Projecteurs ETC S4", "Machine à fumée", "Pilotage tablette tactile + SUNLITE"];
const video = ["Écran 16/9 (3m x 1,69m)", "Vidéoprojecteur Full HD 6000 lms Panasonic", "6 Moniteurs LCD 48\" Samsung", "Retours écrans régie et loge"];
const sound = ["Système HK LINEAR 5 actif", "Console YAMAHA 01V", "Platines PIONEER CDJ2000 Nexus", "Console DJM900", "Micros HF SHURE"];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Capacites() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div>
      <PageSEO title="Espaces & Équipements | Le Tripot Régnier" description="Espaces modulables et matériel audiovisuel professionnel au Tripot Régnier. Son, lumière, vidéo et régie technique complète." canonicalPath="/Capacites" />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setLightboxImg(null)} aria-label="Fermer la vue agrandie">
              <X className="w-6 h-6" />
            </button>
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg} alt="Aperçu photo Le Tripot Régnier"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Carrousel */}
      <HeroCarousel />

      {/* 2. Matériel audiovisuel */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Matériel audiovisuel" align="left" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="mt-8 mb-8 overflow-hidden rounded-xl">
            <img src={IMAGES.capacites.regie.src} alt={IMAGES.capacites.regie.alt} className="w-full h-52 md:h-72 object-cover" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, label: "Éclairage", items: lighting },
              { icon: Monitor, label: "Vidéo", items: video, delay: 0.1 },
              { icon: Speaker, label: "Son", items: sound, delay: 0.2 },
            ].map(({ icon: Icon, label, items, delay = 0 }) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay }} className="bg-[#F5F5F0] p-6 text-left rounded-lg">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}>
                    <Icon className="w-5 h-5" style={{ color: COLORS.ACCENT_COLOR }} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D0D0D]">{label}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 mt-2 flex-shrink-0" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Équipements (grille) */}
      <TrustSignals />

      {/* 4. Espaces */}
      <section className="py-12 md:py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="text-left mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight">
              Nos <span style={{ color: COLORS.ACCENT_COLOR }}>espaces</span>
            </h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
          {spaces.map((space) =>
            space.isHoverSlider ? (
              <ArrowSliderCard key={space.title} space={space} onClick={setLightboxImg} />
            ) : (
              <div key={space.title} className="cursor-pointer group" onClick={() => setLightboxImg(space.image)}>
                <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                  <img src={space.image} alt={`${space.title} — Le Tripot Régnier`} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {space.surface && (
                    <span className="absolute top-3 right-3 font-bold rounded-full text-white bg-black" style={{ fontSize: '0.95rem', padding: '0.35rem 0.9rem' }}>
                      {space.surface}
                    </span>
                  )}
                </div>
                <div className="pt-3 pb-3 px-5 bg-[#FAFAFA]">
                  <h3 className="text-[#0D0D0D] text-base font-semibold">{space.title}</h3>
                  {space.description && <p className="text-[#0D0D0D] text-sm mt-1 leading-relaxed">{space.description}</p>}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-12 md:py-16 px-6" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)', borderTop: `1px solid ${COLORS.ACCENT_COLOR}30` }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="flex flex-col items-center gap-5">
            <h2 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">Organiser un événement</h2>
            <p className="text-white/60 text-sm">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-3 font-semibold tracking-wide text-sm rounded-full border-2 bg-transparent transition-all duration-300"
              style={{ borderColor: COLORS.ACCENT_COLOR, color: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.ACCENT_COLOR; }}
            >
              NOUS CONTACTER <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}