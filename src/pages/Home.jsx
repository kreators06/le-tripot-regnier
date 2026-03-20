// ─── Home ─────────────────────────────────────────────────────────────────────
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import LogoMarquee from '@/components/ui/LogoMarquee';
import SEOMetadata from '@/components/SEOMetadata';
import TrustSignals from '@/components/TrustSignals';
import MobileCtaBar from '@/components/MobileCtaBar';
import { IMAGES } from '@/components/config/images';
import { COLORS } from '@/components/config/colors';

// ─── Données ──────────────────────────────────────────────────────────────────

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

// 2 photos par config
const configurations = [
  {
    name: "Défilé",
    capacity: "< 200 pers.",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      "https://letripotregnier.fr/assets/photos/photo-mezzanine.jpg",
    ],
  },
  {
    name: "Dîner assis",
    capacity: "< 220 pers.",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-bar.jpg",
      "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
    ],
  },
  {
    name: "Conférence",
    capacity: "< 250 pers.",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-regie.jpg",
      "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
    ],
  },
  {
    name: "Cocktail / Soirée",
    capacity: "< 500 pers.",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
      "https://letripotregnier.fr/assets/photos/photo-bar.jpg",
    ],
  },
  {
    name: "Showroom",
    capacity: "Sur mesure",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
      "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
    ],
  },
];

const testimonials = [
  { quote: "Une équipe dynamique et super professionnelle gère cet espace très agréable, chaleureux et pratique.", author: "Louis Galopin", company: "", stars: 5 },
  { quote: "Un grand merci pour votre sens du service professionnel et votre disponibilité tout au long de cette manifestation ! À très bientôt avec certitude !", author: "Mamadou Camara", company: "MConseil & Patrimoine – Cercle Odéon", stars: 5 },
  { quote: "Un séminaire de formation parfaitement à la hauteur de nos attentes ! L'infrastructure est impeccable.", author: "AX Événementiel", company: "", stars: 5 },
  { quote: "3 années que nous y tenons un événement annuel, une des meilleures salles de Paris tant pour ses espaces, sa localisation, son accès pour la logistique que pour l'excellence de leurs services et accompagnement dans l'organisation. Une super team pour un super lieu !", author: "Charlotte Leclère", company: "", stars: 5 },
  { quote: "Salle bien équipée, staff aux petits soins.", author: "Pierre-Marie Achart", company: "", stars: 5 },
  { quote: "Agréable et convivial.", author: "Boyer Liliane", company: "", stars: 4 },
];

// ─── Hover Slider Card ────────────────────────────────────────────────────────
function HoverSliderCard({ space, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isHovering) {
      const firstTimeout = setTimeout(() => {
        setCurrentIndex(1 % space.images.length);
        timerRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % space.images.length);
        }, 1500);
      }, 50);
      return () => {
        clearTimeout(firstTimeout);
        clearInterval(timerRef.current);
      };
    } else {
      clearInterval(timerRef.current);
      setCurrentIndex(0);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovering, space.images.length]);

  return (
    <div
      className="cursor-pointer"
      onClick={() => onClick(space.images[currentIndex])}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '4/3', background: '#111' }}>
        {space.images.map((src, i) => (
          <img key={i} src={src} alt={`${space.title} — Le Tripot Régnier vue ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: i === currentIndex ? 1 : 0, transition: 'opacity 0.6s ease' }}
          />
        ))}
        {space.surface && (
          <span className="absolute top-3 right-3 font-bold rounded-full text-white bg-black" style={{ fontSize: '0.95rem', padding: '0.35rem 0.9rem' }}>
            {space.surface}
          </span>
        )}
      </div>
      <div className="pt-3 pb-3 px-5 bg-[#0D0D0D]">
        <h3 className="text-white text-base font-semibold">{space.title}</h3>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{space.description}</p>
      </div>
    </div>
  );
}

// ─── Config Card avec flèches ─────────────────────────────────────────────────
function ConfigCard({ config, index, onLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p - 1 + config.images.length) % config.images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p + 1) % config.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay: index * 0.05 }}
      className="group overflow-hidden rounded-xl cursor-pointer"
      onClick={() => onLightbox(config.images[currentIndex])}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        {config.images.map((src, i) => (
          <img key={i} src={src} alt={`Configuration ${config.name} au Tripot Régnier`} loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: i === currentIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

        {/* Flèches */}
        <button onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full p-1.5 text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Photo précédente"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full p-1.5 text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Photo suivante"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {config.images.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ backgroundColor: i === currentIndex ? 'white' : 'rgba(255,255,255,0.4)' }}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <h3 className="text-white text-base font-semibold drop-shadow-md">{config.name}</h3>
          <p className="text-white/80 text-xs">{config.capacity}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4" fill={i <= count ? COLORS.ACCENT_COLOR : '#d1d5db'} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────
export default function Home() {
  const videoRef = useRef(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const playVideo = () => video.play().catch(() => {});
    if (video.readyState >= 3) playVideo();
    else video.addEventListener('canplay', playVideo, { once: true });
    video.load();
  }, []);

  return (
    <div role="main">
      <AnimatePresence>
        {lightboxImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition" onClick={() => setLightboxImg(null)}>
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

      <SEOMetadata />
      <MobileCtaBar />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video ref={videoRef} autoPlay loop muted playsInline preload="metadata" poster={IMAGES.heroPoster} className="w-full h-full object-cover">
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Logo gauche / Texte droite — desktop : flex-row, mobile : flex-col centré */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-32">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-8 md:gap-14">
            <motion.img
              src="https://letripotregnier.fr/assets/logo.png"
              alt="Le Tripot Régnier"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ width: 'clamp(100px, 14vw, 200px)', height: 'auto', flexShrink: 0, maxWidth: '120px' }}
              className="md:max-w-none"
            />
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <p className="text-sm md:text-base text-white/80 tracking-[0.3em] uppercase mb-4 font-light">
                Le Tripot Régnier — Paris 15ème
              </p>
              <h1 className="text-white font-bold tracking-tight leading-[1.15] text-[1.6rem] md:text-[2.6rem] lg:text-[3.2rem]">
                Salle parisienne où vos événements prennent vie.
              </h1>
            </motion.div>
          </div>
        </div>

        <motion.a href="#nos-espaces" aria-label="Défiler vers le contenu"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2"
        >
          <span className="text-white/70 text-xs tracking-[0.2em] uppercase font-light">Découvrir le lieu</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-8 h-8 text-white/80" />
          </motion.div>
        </motion.a>
      </section>

      {/* ── Nos espaces ─────────────────────────────────────────────────────── */}
      <section id="nos-espaces" className="py-12 md:py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
              Nos <span style={{ color: COLORS.ACCENT_COLOR }}>espaces</span>
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
          {spaces.map((space) =>
            space.isHoverSlider ? (
              <HoverSliderCard key={space.title} space={space} onClick={setLightboxImg} />
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
                <div className="pt-3 pb-3 px-5 bg-[#0D0D0D]">
                  <h3 className="text-white text-base font-semibold">{space.title}</h3>
                  {space.description && <p className="text-gray-400 text-sm mt-1 leading-relaxed">{space.description}</p>}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ── Espaces Modulables ────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight">
              Organisez un événement{' '}
              <span style={{ color: COLORS.ACCENT_COLOR }}>à votre image</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {configurations.map((config, index) => (
              <ConfigCard key={config.name} config={config} index={index} onLightbox={setLightboxImg} />
            ))}

            {/* Carte "Tournage & Événement sur mesure" — fond noir, bordure dorée */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#0D0D0D', aspectRatio: '4/3', border: `2px solid ${COLORS.ACCENT_COLOR}` }}
            >
              <div className="text-center p-8">
                <h3 className="text-white text-xl font-semibold mb-1">Tournage & Événement sur mesure</h3>
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-transparent font-semibold text-sm rounded-full transition-all duration-300"
                  style={{ border: `2px solid ${COLORS.ACCENT_COLOR}`, color: COLORS.ACCENT_COLOR }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.ACCENT_COLOR; }}
                >
                  Nous contacter <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Nos équipements ───────────────────────────────────────────────────── */}
      <TrustSignals />

      {/* ── Logos Partenaires ─────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 px-6 bg-white border-t border-gray-100 overflow-hidden">
        <LogoMarquee />
      </section>

      {/* ── Témoignages ──────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight">
              Ils nous font <span style={{ color: COLORS.ACCENT_COLOR }}>confiance</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.05} className="text-left bg-[#F9F9F7] p-6 rounded-xl">
                <Stars count={testimonial.stars} />
                <p className="text-[#0D0D0D] text-sm leading-relaxed mb-5 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[#0D0D0D] font-semibold text-sm">{testimonial.author}</p>
                  {testimonial.company && <p className="text-gray-500 text-xs font-light mt-0.5">{testimonial.company}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)', borderTop: `1px solid ${COLORS.ACCENT_COLOR}30` }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn className="flex flex-col items-center gap-5">
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