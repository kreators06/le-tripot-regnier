// ─── Home ─────────────────────────────────────────────────────────────────────
// Page d'accueil du Tripot Régnier

import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Utensils,
  Presentation,
  PartyPopper,
  Store,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import LogoMarquee from '@/components/ui/LogoMarquee';
import SEOMetadata from '@/components/SEOMetadata';
import TrustSignals from '@/components/TrustSignals';
import FAQAccordion from '@/components/FAQAccordion';
import MobileCtaBar from '@/components/MobileCtaBar';
import { IMAGES } from '@/components/config/images';
import { COLORS } from '@/components/config/colors';

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

const configurations = [
  {
    icon: Users,
    name: "Défilé",
    capacity: "< 200 pers.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
  },
  {
    icon: Utensils,
    name: "Dîner assis",
    capacity: "< 220 pers.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format",
  },
  {
    icon: Presentation,
    name: "Conférence",
    capacity: "< 250 pers.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format",
  },
  {
    icon: PartyPopper,
    name: "Cocktail / Soirée",
    capacity: "< 500 pers.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format",
  },
  {
    icon: Store,
    name: "Showroom",
    capacity: "Sur mesure",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
  },
];

const testimonials = [
  {
    quote: "Un lieu exceptionnel qui a su sublimer notre événement d'entreprise. L'équipe est professionnelle et réactive. Le cadre Art Déco apporte une touche unique.",
    author: "Marie Dupont",
    company: "Directrice Événementiel, L'Oréal",
  },
  {
    quote: "Nous avons organisé notre soirée de lancement dans ce lieu magique. L'acoustique parfaite et les équipements techniques sont un vrai plus.",
    author: "Thomas Bernard",
    company: "CEO, StartupTech",
  },
  {
    quote: "Le Tripot Régnier a dépassé toutes nos attentes. L'espace modulable nous a permis de créer exactement l'ambiance recherchée.",
    author: "Sophie Martin",
    company: "Wedding Planner",
  },
];

// Carrousel avec flèches et crossfade sans flash blanc
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

  const prev = (e) =>
    goTo((currentIndex - 1 + space.images.length) % space.images.length, e);
  const next = (e) =>
    goTo((currentIndex + 1) % space.images.length, e);

  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer"
      onClick={() => onClick(space.images[currentIndex])}
    >
      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
        <img
          src={space.images[currentIndex]}
          alt={`Salle principale du Tripot Régnier — vue ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.25s ease' }}
        />
        <button
          onClick={prev}
          aria-label="Photo précédente"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-all z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          aria-label="Photo suivante"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-all z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {space.images.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{
                backgroundColor:
                  i === currentIndex ? COLORS.ACCENT_COLOR : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>
        {space.surface && (
          <span className="absolute top-3 right-3 text-sm font-bold px-3 py-1 rounded-full text-white bg-black">
            {space.surface}
          </span>
        )}
      </div>
      <div className="pt-3 pb-2 px-1">
        <h3 className="text-[#0D0D0D] text-base font-semibold">{space.title}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{space.description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const videoRef = useRef(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const playVideo = () => video.play().catch(() => {});
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }
    video.load();
  }, []);

  return (
    <div role="main">
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
              onClick={() => setLightboxImg(null)}
            >
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

      <SEOMetadata />
      <MobileCtaBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={IMAGES.home.heroPoster}
            className="w-full h-full object-cover"
          >
            <source src={IMAGES.home.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-32">
          {/* Wrapper flex row — items-stretch pour que le logo s'aligne sur la hauteur du texte */}
          <div className="flex flex-col md:flex-row md:items-stretch justify-start gap-10 md:gap-16">

            {/* Logo mobile uniquement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex md:hidden flex-shrink-0"
            >
              <img
                src="https://letripotregnier.fr/assets/logo.png"
                alt="Le Tripot Régnier"
                className="w-auto object-contain"
                style={{ height: '110px' }}
              />
            </motion.div>

            {/* Logo desktop — prend la hauteur du bloc texte via align-self: stretch */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden md:flex flex-shrink-0"
              style={{ alignSelf: 'stretch' }}
            >
              <img
                src="https://letripotregnier.fr/assets/logo.png"
                alt="Le Tripot Régnier"
                style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </motion.div>

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-center md:text-left"
            >
              <p className="text-sm md:text-base text-white/80 tracking-[0.3em] uppercase mb-6 font-light">
                Événementiel Premium — Paris 15ème
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-5xl text-white font-bold tracking-tight leading-[1.1]">
                Salle parisienne où<br />vos événements prennent vie.
              </h1>
            </motion.div>

          </div>
        </div>

        <motion.a
          href="#nos-espaces"
          aria-label="Défiler vers le contenu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-8 h-8 text-white/80" />
          </motion.div>
        </motion.a>
      </section>

      {/* Nos espaces Section */}
      <section id="nos-espaces" className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">
              Découvrez le lieu
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold text-[#0D0D0D] tracking-tight">
              Nos <span style={{ color: COLORS.ACCENT_COLOR }}>espaces</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space) =>
              space.isSlider ? (
                <SliderCard key={space.title} space={space} onClick={setLightboxImg} />
              ) : (
                <div
                  key={space.title}
                  className="rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setLightboxImg(space.image)}
                >
                  <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={space.image}
                      alt={`${space.title} — Le Tripot Régnier`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {space.surface && (
                      <span className="absolute top-3 right-3 text-sm font-bold px-3 py-1 rounded-full text-white bg-black">
                        {space.surface}
                      </span>
                    )}
                  </div>
                  <div className="pt-3 pb-2 px-1">
                    <h3 className="text-[#0D0D0D] text-base font-semibold">{space.title}</h3>
                    {space.description && (
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {space.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to={createPageUrl('Galerie')}
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold tracking-wide text-sm transition-all duration-300 rounded-full border-2 bg-transparent"
              style={{ borderColor: COLORS.ACCENT_COLOR, color: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.ACCENT_COLOR;
              }}
            >
              VOIR LA GALERIE PHOTOS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Espaces Modulables Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">
              ESPACES MODULABLES
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              Le Tripot Régnier vous accueille{' '}
              <span style={{ color: COLORS.ACCENT_COLOR }}>pour toutes les occasions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">
              Dîner, soirée, conférence, défilé, showroom, séminaire…
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {configurations.map((config, index) => (
              <motion.div
                key={config.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group overflow-hidden rounded-xl"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={config.image}
                    alt={`Configuration ${config.name} au Tripot Régnier`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
                    <div
                      className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded"
                      style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                    >
                      <config.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-base font-semibold drop-shadow-md">
                        {config.name}
                      </h3>
                      <p className="text-white/80 text-xs">{config.capacity}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 6e carte — Votre événement sur-mesure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-xl flex items-center justify-center"
              style={{ backgroundColor: COLORS.ACCENT_COLOR, aspectRatio: '4/3' }}
            >
              <div className="text-center p-8">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Votre événement sur-mesure
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Nous adaptons le lieu à votre vision
                </p>
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-white text-white font-semibold text-sm rounded-full transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = COLORS.ACCENT_COLOR;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos équipements */}
      <TrustSignals />

      {/* Logos Partenaires */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-100 overflow-hidden">
        <LogoMarquee />
      </section>

      {/* Témoignages */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">
              Témoignages
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-8">
              Ils nous font <span style={{ color: COLORS.ACCENT_COLOR }}>confiance</span>
            </h2>
            <a
              href="https://www.google.com/maps/place/Le+Tripot+R%C3%A9gnier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold tracking-wide text-sm rounded-full border-2 bg-transparent transition-all duration-300"
              style={{ borderColor: COLORS.ACCENT_COLOR, color: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.ACCENT_COLOR;
              }}
            >
              VOIR LES AVIS GOOGLE
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-left"
              >
                <p className="text-gray-700 text-base leading-relaxed mb-8 font-light italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[#0D0D0D] font-normal text-sm mb-1">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs font-light">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Organiser un événement */}
      <section
        className="py-8 px-6"
        style={{
          background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)',
          borderTop: `1px solid ${COLORS.ACCENT_COLOR}30`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <h2 className="text-xl md:text-2xl text-white font-semibold tracking-tight text-center sm:text-left">
              Organiser un événement
            </h2>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-3 font-semibold tracking-wide text-sm rounded-full border-2 bg-transparent flex-shrink-0 transition-all duration-300"
              style={{ borderColor: COLORS.ACCENT_COLOR, color: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.ACCENT_COLOR;
              }}
            >
              NOUS CONTACTER
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />
    </div>
  );
}