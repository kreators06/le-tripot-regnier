// ─── Capacites ────────────────────────────────────────────────────────────────
// Page espaces et équipements techniques du Tripot Régnier

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Monitor, Speaker, ChevronLeft, ChevronRight, X } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';
import TrustSignals from '@/components/TrustSignals';

// ─── Hero Carousel ─────────────────────────────────────────────────────────────
const heroImages = [
  IMAGES.spaces.grandeSalle.src,
  "https://letripotregnier.fr/assets/photos/photo-regie.jpg",
  IMAGES.spaces.mezzanine.src,
  IMAGES.spaces.bar.src,
  IMAGES.spaces.espaceLounge.src,
  IMAGES.spaces.logePrivee.src,
  IMAGES.spaces.vestiaire.src,
  "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
  "https://letripotregnier.fr/assets/photos/photo-cocktail.jpg",
  "https://letripotregnier.fr/assets/photos/photo-diner-assis.jpg",
  "https://letripotregnier.fr/assets/photos/photo-soiree.jpg",
  "https://letripotregnier.fr/assets/photos/photo-seminaire.jpg",
];
const duplicated = [...heroImages, ...heroImages];

function HeroCarousel() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="relative overflow-hidden h-64 md:h-[420px] pt-24"
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
          gap: 12px;
          width: max-content;
          animation: carousel-scroll 60s linear infinite;
        }
        .carousel-track.paused {
          animation-play-state: paused;
        }
      `}</style>
      <div className={`carousel-track h-full${paused ? ' paused' : ''}`}>
        {duplicated.map((src, i) => (
          <div key={i} className="h-full flex-shrink-0 overflow-hidden rounded-lg" style={{ width: 'clamp(220px, 30vw, 480px)' }}>
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

const spaces = [
  {
    title: "Salle Principale",
    surface: "400 m²",
    images: sallePrincipaleImages,
    description: "Espace modulable équipé (son, lumière, projection vidéo) dotée d'un bar et d'un fumoir intérieur.",
    isSlider: true,
  },
  {
    title: "Bar",
    surface: "",
    image: IMAGES.spaces.bar.src,
    description: "Bar équipé : four, machine à glaçons, réfrigérateur.",
  },
  {
    title: "Mezzanine",
    surface: "65 m²",
    image: IMAGES.spaces.mezzanine.src,
    description: "Espace en hauteur offrant une vue panoramique sur la salle.",
  },
  {
    title: "Hall d'accueil",
    surface: "",
    image: IMAGES.spaces.espaceLounge.src,
    description: "Espace détente situé en prolongation de la mezzanine.",
  },
  {
    title: "Vestiaire",
    surface: "450 pers.",
    image: IMAGES.spaces.vestiaire.src,
    description: "Vestiaire équipé avec capacité de 450 personnes",
  },
  {
    title: "Loge Privée",
    surface: "",
    image: IMAGES.spaces.logePrivee.src,
    description: "Loge avec accès privé comprenant : écran TV, canapé, toilettes, douche, lavabo.",
  },
];

function SliderCard({ space, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (newIndex, e) => {
    e.stopPropagation();
    setFading(true);
    setTimeout(() => { setCurrentIndex(newIndex); setFading(false); }, 200);
  };

  const prev = (e) => goTo((currentIndex - 1 + space.images.length) % space.images.length, e);
  const next = (e) => goTo((currentIndex + 1) % space.images.length, e);

  return (
    <div className="rounded-xl overflow-hidden cursor-pointer" onClick={() => onClick(space.images[currentIndex])}>
      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
        <img
          src={space.images[currentIndex]}
          alt={`Salle principale du Tripot Régnier — vue ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.25s ease' }}
        />
        <button onClick={prev} aria-label="Photo précédente" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-all z-10">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={next} aria-label="Photo suivante" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-all z-10">
          <ChevronRight className="w-4 h-4" />
        </button>
        {space.surface && (
          <span className="absolute top-3 right-3 text-sm font-bold px-3 py-1 rounded-full text-white bg-black">{space.surface}</span>
        )}
      </div>
      <div className="pt-3 pb-2 px-1">
        <h3 className="text-[#0D0D0D] text-base font-semibold">{space.title}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{space.description}</p>
      </div>
    </div>
  );
}

// ─── AV Data ──────────────────────────────────────────────────────────────────
const lighting = [
  "48 Projecteurs LEDS BEAM Z",
  "8 Automatiques BEAM CHAUVET",
  "4 Projecteurs ETC S4",
  "Machine à fumée",
  "Pilotage tablette tactile + SUNLITE",
];
const video = [
  "Écran 16/9 (3m x 1,69m)",
  "Vidéoprojecteur Full HD 6000 lms Panasonic",
  "6 Moniteurs LCD 48\" Samsung",
  "Retours écrans régie et loge",
];
const sound = [
  "Système HK LINEAR 5 actif",
  "Console YAMAHA 01V",
  "Platines PIONEER CDJ2000 Nexus",
  "Console DJM900",
  "Micros HF SHURE",
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Capacites() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div>
      <PageSEO title="Espaces & Équipements | Le Tripot Régnier" description="700m² modulables, système son professionnel, éclairage scénique. Découvrez les équipements techniques complets du Tripot Régnier." />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition" onClick={() => setLightboxImg(null)}>
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Aperçu photo Le Tripot Régnier"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Carrousel photos */}
      <HeroCarousel />

      {/* 2. Matériel audiovisuel */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Matériel audiovisuel" align="left" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 mb-12 overflow-hidden rounded-xl"
          >
            <img
              src={IMAGES.capacites.regie.src}
              alt={IMAGES.capacites.regie.alt}
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, label: "Éclairage", items: lighting },
              { icon: Monitor, label: "Vidéo", items: video, delay: 0.1 },
              { icon: Speaker, label: "Son", items: sound, delay: 0.2 },
            ].map(({ icon: Icon, label, items, delay = 0 }) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }} className="bg-[#F5F5F0] p-8 text-left rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}>
                    <Icon className="w-6 h-6" style={{ color: COLORS.ACCENT_COLOR }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D0D0D]">{label}</h3>
                </div>
                <ul className="space-y-3">
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
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-semibold text-[#0D0D0D] tracking-tight">
              Nos <span style={{ color: COLORS.ACCENT_COLOR }}>espaces</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space) =>
              space.isSlider ? (
                <SliderCard key={space.title} space={space} onClick={setLightboxImg} />
              ) : (
                <div key={space.title} className="rounded-xl overflow-hidden cursor-pointer group" onClick={() => setLightboxImg(space.image)}>
                  <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={space.image}
                      alt={`${space.title} — Le Tripot Régnier`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {space.surface && (
                      <span className="absolute top-3 right-3 text-sm font-bold px-3 py-1 rounded-full text-white bg-black">{space.surface}</span>
                    )}
                  </div>
                  <div className="pt-3 pb-2 px-1">
                    <h3 className="text-[#0D0D0D] text-base font-semibold">{space.title}</h3>
                    {space.description && <p className="text-gray-500 text-sm mt-1 leading-relaxed">{space.description}</p>}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}