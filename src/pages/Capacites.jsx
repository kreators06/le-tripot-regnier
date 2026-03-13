// ─── Capacites ────────────────────────────────────────────────────────────────
// Page espaces et équipements techniques du Tripot Régnier

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Monitor, Speaker, Layers, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SectionTitle from '@/components/ui/SectionTitle';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';
import TrustSignals from '@/components/TrustSignals';

// ─── Hero Carousel ─────────────────────────────────────────────────────────────
const heroImages = [
  IMAGES.spaces.grandeSalle.src,
  IMAGES.spaces.mezzanine.src,
  IMAGES.spaces.bar.src,
  IMAGES.spaces.espaceLounge.src,
  IMAGES.spaces.logePrivee.src,
  IMAGES.spaces.vestiaire.src,
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
          animation: carousel-scroll 30s linear infinite;
        }
        .carousel-track.paused {
          animation-play-state: paused;
        }
      `}</style>
      <div className={`carousel-track h-full${paused ? ' paused' : ''}`}>
        {duplicated.map((src, i) => (
          <div key={i} className="h-full flex-shrink-0 overflow-hidden rounded-lg" style={{ width: 'clamp(220px, 30vw, 480px)' }}>
            <img
              src={src}
              alt="Le Tripot Régnier"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Gradient edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />
    </div>
  );
}

// ─── Nos Espaces (identical to Home) ──────────────────────────────────────────
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
    title: "Espace Lounge",
    surface: "",
    image: IMAGES.spaces.espaceLounge.src,
    description: "Espace détente situé en prolongation de la mezzanine.",
  },
  {
    title: "Loge Privée",
    surface: "",
    image: IMAGES.spaces.logePrivee.src,
    description: "Loge avec accès privé comprenant : écran TV, canapé, toilettes, douche, lavabo.",
  },
  {
    title: "Vestiaire",
    surface: "450 pers.",
    image: IMAGES.spaces.vestiaire.src,
    description: "Vestiaire équipé avec capacité de 450 personnes",
  },
];

function SliderCard({ space, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (newIndex, e) => {
    e.stopPropagation();
    setFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFading(false);
    }, 200);
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
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {space.images.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full transition-all" style={{ backgroundColor: i === currentIndex ? COLORS.ACCENT_COLOR : 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>
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
      <PageSEO title="Espaces & Équipements | Le Tripot Régnier" description="700m² modulables, mur LED immersif, système son professionnel, éclairage scénique. Découvrez les équipements techniques complets du Tripot Régnier." />

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

      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Nos Espaces */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Découvrez le lieu</p>
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

      {/* 3. Capacités */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Capacités" align="left" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "700m²", label: "ESPACE TOTAL" },
              { value: "90m²", label: "HALL D'ACCUEIL" },
              { value: "400m²", label: "SALLE PRINCIPALE" },
              { value: "65m²", label: "MEZZANINE" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300 rounded-lg"
              >
                <p className="text-4xl font-semibold mb-2" style={{ color: COLORS.ACCENT_COLOR }}>{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Matériel audiovisuel */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Matériel audiovisuel" align="left" />

          {/* Photo régie technique */}
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

      {/* 5. Mur LED */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-left">
              <div className="inline-block px-4 py-1 text-sm tracking-wide mb-6" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>INNOVATION</div>
              <h2 className="text-4xl font-semibold text-white mb-6 tracking-wide">
                Mur LED<br /><span style={{ color: COLORS.ACCENT_COLOR }}>Immersif</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Notre plateau virtuel modulable avec projection immersive sur mur LED repousse les limites de la créativité. Créez des décors 3D époustouflants et réalisez des captations visuelles d'exception.
              </p>
              <ul className="space-y-3">
                {["Décors 3D personnalisables", "Captation visuelle haute définition", "Expérience immersive unique"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-200">
                    <span className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-lg overflow-hidden shadow-xl">
                <img src={IMAGES.capacites.murLED.src} alt={IMAGES.capacites.murLED.alt} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 flex items-center justify-center bg-black/50" style={{ borderColor: COLORS.ACCENT_COLOR }}>
                    <Layers className="w-8 h-8" style={{ color: COLORS.ACCENT_COLOR }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Nos équipements (grille 5×2) */}
      <TrustSignals />
    </div>
  );
}