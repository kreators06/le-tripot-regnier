// ─── Home ─────────────────────────────────────────────────────────────────────
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
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
  "https://letripotregnier.fr/assets/photos/shoootin-photo-5.jpg",
  "https://letripotregnier.fr/assets/photos/shoootin-photo-8.jpg",
];

const mezzanineImages = [
  "https://letripotregnier.fr/assets/photos/photo-mezzanine.jpg",
  "https://letripotregnier.fr/assets/photos/photo-lounge-etage.jpeg",
];

const hallImages = [
  "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg",
  "https://letripotregnier.fr/assets/photos/hall%203.jpg",
  "https://letripotregnier.fr/assets/photos/hall%202.jpg",
  "https://letripotregnier.fr/assets/photos/hall%204.jpg",
];

const spaces = [
  { title: "Salle Principale", surface: "400 m²", images: sallePrincipaleImages, description: "Espace modulable équipé (son, lumière, projection vidéo) doté d'un bar et d'un fumoir intérieur.", isHoverSlider: true },
  { title: "Bar", surface: "", image: IMAGES.spaces.bar.src, description: "Bar équipé : four, machine à glaçons, réfrigérateur." },
  { title: "Mezzanine", surface: "65 m²", images: mezzanineImages, description: "Espace en hauteur offrant une vue panoramique sur la salle.", isHoverSlider: true },
  { title: "Hall d'accueil", surface: "", images: hallImages, description: "Espace détente situé en prolongation de la mezzanine.", isHoverSlider: true },
  { title: "Vestiaire", surface: "450 pers.", image: IMAGES.spaces.vestiaire.src, description: "Vestiaire équipé avec capacité de 450 personnes." },
  { title: "Loge privée", surface: "", image: IMAGES.spaces.logePrivee.src, description: "Loge avec accès privé comprenant : écran TV, canapé, toilettes, douche, lavabo." },
];

// 3 photos par config dîner et conférence, 2+ pour showroom
const configurations = [
  {
    name: "Défilé",
    capacity: "< 200 pers.",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-defile-mode-grande-salle-loreal.png",
      "https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg",
    ],
  },
  {
    name: "Dîner assis",
    capacity: "< 220 pers.",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-grande-salle-table-baquet-europe1.png",
      "https://letripotregnier.fr/assets/photos/diner-canteloup.jpg",
      "https://letripotregnier.fr/assets/photos/photo-salle-principale-diner-europe1.jpeg",
    ],
  },
  {
    name: "Conférence",
    capacity: "< 250 pers.",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-grande-salle-JO-paris-2024-conference.png",
      "https://letripotregnier.fr/assets/photos/conference%20copie.jpg",
      "https://letripotregnier.fr/assets/photos/conference.jpg",
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
    capacity: "Showroom / exposition — Possibilité d'exposer des véhicules",
    images: [
      "https://letripotregnier.fr/assets/photos/photo-grande-salle-evenement-audi.jpeg",
      "https://letripotregnier.fr/assets/photos/showroom.jpg",
      "https://letripotregnier.fr/assets/photos/photo-grande-salle-ecran-geant-voiture.jpg",
    ],
  },
];

const testimonials = [
  { quote: "Une équipe dynamique et super professionnelle gère cet espace très agréable, chaleureux et pratique.", author: "Louis Galopin" },
  { quote: "Un grand merci pour votre sens du service professionnel et votre disponibilité tout au long de cette manifestation ! À très bientôt avec certitude !", author: "Mamadou Camara" },
  { quote: "Un séminaire de formation parfaitement à la hauteur de nos attentes ! L'infrastructure est impeccable.", author: "AX Événementiel" },
  { quote: "3 années que nous y tenons un événement annuel, une des meilleures salles de Paris tant pour ses espaces, sa localisation, son accès pour la logistique que pour l'excellence de leurs services et accompagnement dans l'organisation. Une super team pour un super lieu !", author: "Charlotte Leclère" },
  { quote: "Salle bien équipée, staff aux petits soins.", author: "Pierre-Marie Achart" },
  { quote: "Agréable et convivial.", author: "Boyer Liliane" },
];

// ─── Arrow Slider Card (flèches gauche/droite dans la tuile) ─────────────────
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
          <img key={i} src={src} alt={`${space.title} — Le Tripot Régnier vue ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: i === currentIndex ? 1 : 0, transition: 'opacity 0.5s ease' }}
          />
        ))}
        {space.surface && (
          <span className="absolute top-3 right-3 font-bold rounded-full text-white bg-black z-10" style={{ fontSize: '0.95rem', padding: '0.35rem 0.9rem' }}>
            {space.surface}
          </span>
        )}
        {/* Flèches */}
        <button onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full p-1.5 text-white transition-all opacity-0 group-hover/card:opacity-100"
          aria-label="Photo précédente"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full p-1.5 text-white transition-all opacity-0 group-hover/card:opacity-100"
          aria-label="Photo suivante"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {space.images.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ backgroundColor: i === currentIndex ? 'white' : 'rgba(255,255,255,0.4)' }}
            />
          ))}
        </div>
      </div>
      <div className="pt-3 pb-3 px-5 bg-[#0D0D0D]">
        <h3 className="text-white text-base font-semibold">{space.title}</h3>
        <p className="text-[#DDD] text-sm mt-1 leading-relaxed">{space.description}</p>
      </div>
    </div>
  );
}

// ─── Config Card avec flèches ─────────────────────────────────────────────────
// (SpacesSlider supprimé — grille fixe utilisée à la place)
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
    <div
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
    </div>
  );
}

// ─── Testimonials Slider ──────────────────────────────────────────────────────
function TestimonialsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => setStartIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setStartIndex((p) => (p + 1) % testimonials.length);

  const visible = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(startIndex + i) % testimonials.length]
  );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((testimonial, index) => (
          <motion.div
            key={`${startIndex}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="text-left bg-[#F9F9F7] p-6 rounded-xl"
          >
            <p className="text-[#0D0D0D] text-sm leading-relaxed mb-5 italic">"{testimonial.quote}"</p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-[#0D0D0D] font-semibold text-sm">{testimonial.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Flèches nav */}
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          <ChevronLeft className="w-5 h-5 text-[#0D0D0D]" />
        </button>
        <button onClick={next} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          <ChevronRight className="w-5 h-5 text-[#0D0D0D]" />
        </button>
      </div>
    </div>
  );
}



// ─── Page principale ──────────────────────────────────────────────────────────
export default function Home() {
  const videoRef = useRef(null);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxImg) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxImg(null);
      if (e.key === 'ArrowLeft' && lightboxImages.length > 1) {
        setLightboxIndex((p) => {
          const newIdx = (p - 1 + lightboxImages.length) % lightboxImages.length;
          setLightboxImg(lightboxImages[newIdx]);
          return newIdx;
        });
      }
      if (e.key === 'ArrowRight' && lightboxImages.length > 1) {
        setLightboxIndex((p) => {
          const newIdx = (p + 1) % lightboxImages.length;
          setLightboxImg(lightboxImages[newIdx]);
          return newIdx;
        });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxImg, lightboxImages]);

  const openLightbox = (img, images = []) => {
    setLightboxImg(img);
    setLightboxImages(images.length > 0 ? images : [img]);
    setLightboxIndex(images.indexOf(img) >= 0 ? images.indexOf(img) : 0);
  };

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
            {lightboxImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
                  onClick={(e) => { e.stopPropagation(); const newIdx = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; setLightboxIndex(newIdx); setLightboxImg(lightboxImages[newIdx]); }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-16 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
                  onClick={(e) => { e.stopPropagation(); const newIdx = (lightboxIndex + 1) % lightboxImages.length; setLightboxIndex(newIdx); setLightboxImg(lightboxImages[newIdx]); }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
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

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <p className="text-sm md:text-base text-white/80 tracking-[0.3em] uppercase mb-4 font-light">
              Le Tripot Régnier — Paris 15ème
            </p>
            <h1 className="text-white font-bold tracking-tight leading-[1.15] text-[1.6rem] md:text-[2.6rem] lg:text-[3.2rem]">
              Salle parisienne où vos événements prennent vie.
            </h1>
          </motion.div>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
              Nos <span style={{ color: COLORS.ACCENT_COLOR }}>espaces</span>
            </h2>
          </motion.div>
          {/* Grille fixe 2×3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {spaces.map((space) =>
              space.isHoverSlider ? (
                <ArrowSliderCard key={space.title} space={space} onClick={(img) => openLightbox(img, space.images)} />
              ) : (
                <div key={space.title} className="cursor-pointer group" onClick={() => openLightbox(space.image)}>
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
                    {space.description && <p className="text-[#DDD] text-sm mt-1 leading-relaxed">{space.description}</p>}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Espaces Modulables ────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#FAFAFA]">
        <div className="px-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight">
              Organisez un événement{' '}
              <span style={{ color: COLORS.ACCENT_COLOR }}>à votre image</span>
            </h2>
          </motion.div>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
            {configurations.map((config, index) => (
              <ConfigCard key={config.name} config={config} index={index} onLightbox={setLightboxImg} />
            ))}

            {/* Carte "Tournage & événement sur mesure" — fond noir, bordure dorée */}
            <div
              className="overflow-hidden rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#0D0D0D', aspectRatio: '4/3', border: `2px solid ${COLORS.ACCENT_COLOR}` }}
            >
              <div className="text-center p-8">
                <h3 className="text-white text-xl font-semibold mb-1">Tournage & événement sur mesure</h3>
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-transparent font-semibold text-sm rounded-full transition-all duration-300"
                  style={{ border: `1px solid ${COLORS.ACCENT_COLOR}`, color: COLORS.ACCENT_COLOR }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.ACCENT_COLOR; }}
                >
                  Nous contacter <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight">
              Ils nous font <span style={{ color: COLORS.ACCENT_COLOR }}>confiance</span>
            </h2>
          </motion.div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6" style={{ background: '#000', borderTop: `1px solid ${COLORS.ACCENT_COLOR}30` }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="flex flex-col items-center gap-5">
            <h2 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">Organiser un événement</h2>
            <p className="text-white text-sm">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-3 font-semibold tracking-wide text-sm rounded-full transition-all duration-300"
              style={{ backgroundColor: COLORS.ACCENT_COLOR, color: '#000' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              NOUS CONTACTER <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}