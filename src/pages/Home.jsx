// ─── Home ─────────────────────────────────────────────────────────────────────
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Utensils, Presentation, PartyPopper, Store, ChevronDown, X } from 'lucide-react';
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

// 6 tuiles : 5 configs + 1 carte "Tournage / Événement sur mesure"
const configurations = [
  { name: "Défilé", capacity: "< 200 pers.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format" },
  { name: "Dîner assis", capacity: "< 220 pers.", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format" },
  { name: "Conférence", capacity: "< 250 pers.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format" },
  { name: "Cocktail / Soirée", capacity: "< 500 pers.", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format" },
  { name: "Showroom", capacity: "Sur mesure", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format" },
];

const testimonials = [
  { quote: "Un lieu exceptionnel qui a su sublimer notre événement d'entreprise. L'équipe est professionnelle et réactive. Le cadre Art Déco apporte une touche unique.", author: "Marie Dupont", company: "Directrice Événementiel, L'Oréal" },
  { quote: "Nous avons organisé notre soirée de lancement dans ce lieu magique. L'acoustique parfaite et les équipements techniques sont un vrai plus.", author: "Thomas Bernard", company: "CEO, StartupTech" },
  { quote: "Le Tripot Régnier a dépassé toutes nos attentes. L'espace modulable nous a permis de créer exactement l'ambiance recherchée.", author: "Sophie Martin", company: "Wedding Planner" },
  { quote: "Un cadre industriel et élégant à la fois. La régie technique est complète et le personnel très attentionné.", author: "Julien Moreau", company: "Directeur Communication, BNP Paribas" },
  { quote: "Nous avons tourné notre clip dans ce lieu et le résultat était exceptionnel. Mur LED, lumières scéniques, tout était au rendez-vous.", author: "Anaïs Lefebvre", company: "Productrice, Studio 15" },
];

// ─── Hover Slider Card ────────────────────────────────────────────────────────
function HoverSliderCard({ space, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isHovering) {
      // Première image quasi immédiate (50ms), puis toutes les 1500ms
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
      className="overflow-hidden cursor-pointer"
      onClick={() => onClick(space.images[currentIndex])}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', background: '#111' }}>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video ref={videoRef} autoPlay loop muted playsInline preload="metadata" poster={IMAGES.home.heroPoster} className="w-full h-full object-cover">
            <source src={IMAGES.home.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 py-32 flex flex-col items-center text-center">
          <motion.img
            src="https://letripotregnier.fr/assets/logo.png"
            alt="Le Tripot Régnier"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
            style={{ height: 'clamp(80px, 14vw, 160px)', width: 'auto' }}
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <p className="text-sm md:text-base text-white/80 tracking-[0.3em] uppercase mb-5 font-light">
              Le Tripot Régnier — Paris 15ème
            </p>
            <h1 className="text-white font-bold tracking-tight leading-[1.15] text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
              Salle parisienne où<br />vos événements prennent vie.
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
              Nos <span style={{ color: COLORS.ACCENT_COLOR }}>espaces</span>
            </h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space) =>
            space.isHoverSlider ? (
              <HoverSliderCard key={space.title} space={space} onClick={setLightboxImg} />
            ) : (
              <div key={space.title} className="overflow-hidden cursor-pointer group" onClick={() => setLightboxImg(space.image)}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight">
              Organisez un événement{' '}
              <span style={{ color: COLORS.ACCENT_COLOR }}>à votre image</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {configurations.map((config, index) => (
              <motion.div key={config.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                className="group overflow-hidden rounded-xl"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img src={config.image} alt={`Configuration ${config.name} au Tripot Régnier`} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-base font-semibold drop-shadow-md">{config.name}</h3>
                    <p className="text-white/80 text-xs">{config.capacity}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Carte "Tournage — Événement sur mesure" — fond noir, bordure dorée */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#0D0D0D', aspectRatio: '4/3', border: '2px solid #C5A55A' }}
            >
              <div className="text-center p-8">
                <h3 className="text-white text-xl font-semibold mb-1">Tournage</h3>
                <p className="text-sm mb-6" style={{ color: '#C5A55A' }}>Événement sur mesure</p>
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent font-semibold text-sm rounded-full transition-all duration-300"
                  style={{ border: '2px solid #C5A55A', color: '#C5A55A' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C5A55A'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C5A55A'; }}
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight">
              Ils nous font <span style={{ color: COLORS.ACCENT_COLOR }}>confiance</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="text-left">
                <p className="text-gray-700 text-sm leading-relaxed mb-6 font-light italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[#0D0D0D] font-normal text-sm mb-1">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs font-light">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)', borderTop: `1px solid ${COLORS.ACCENT_COLOR}30` }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-5">
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