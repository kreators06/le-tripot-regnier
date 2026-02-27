import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Utensils, Presentation, PartyPopper, Store, ChevronDown, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import LogoMarquee from '@/components/ui/LogoMarquee';
import SEOMetadata from '@/components/SEOMetadata';
import TrustSignals from '@/components/TrustSignals';
import FAQAccordion from '@/components/FAQAccordion';
import MobileCtaBar from '@/components/MobileCtaBar';
import { IMAGES } from '@/components/config/images';
import { COLORS } from '@/components/config/colors';

const spaces = [
  {
    title: "Salle Principale",
    surface: "400 m²",
    image: IMAGES.spaces.grandeSalle.src,
    description: "Espace modulable équipé (son, lumière, projection vidéo) dotée d'un bar et d'un fumoir intérieur."
  },
  {
    title: "Bar",
    surface: "",
    image: IMAGES.spaces.bar.src,
    description: "Bar équipé : four, machine à glaçons, réfrigérateur."
  },
  {
    title: "Mezzanine",
    surface: "65 m²",
    image: IMAGES.spaces.mezzanine.src,
    description: "Espace en hauteur offrant une vue panoramique sur la salle."
  },
  {
    title: "Espace Lounge",
    surface: "",
    image: IMAGES.spaces.espaceLounge.src,
    description: "Espace détente situé en prolongation de la mezzanine."
  },
  {
    title: "Loge Privée",
    surface: "",
    image: IMAGES.spaces.logePrivee.src,
    description: "Loge avec accès privé comprenant : écran TV, canapé, toilettes, douche, lavabo."
  },
  {
    title: "Vestiaire",
    surface: "450 pers.",
    image: IMAGES.spaces.vestiaire.src,
    description: "Vestiaire équipé avec capacité de 450 personnes"
  }
];

const configurations = [
  { icon: Users, name: "Défilé", capacity: "< 200 pers.", image: IMAGES.configurations.conference.src },
  { icon: Utensils, name: "Dîner assis", capacity: "< 220 pers.", image: IMAGES.configurations.dinerAssis.src },
  { icon: Presentation, name: "Conférence", capacity: "< 250 pers.", image: IMAGES.configurations.seminaire.src },
  { icon: PartyPopper, name: "Cocktail / Soirée", capacity: "< 500 pers.", image: IMAGES.configurations.soiree.src },
  { icon: Store, name: "Showroom", capacity: "Sur mesure", image: IMAGES.configurations.showroom.src }
];

const testimonials = [
  {
    quote: "Un lieu exceptionnel qui a su sublimer notre événement d'entreprise. L'équipe est professionnelle et réactive. Le cadre Art Déco apporte une touche unique.",
    author: "Marie Dupont",
    company: "Directrice Événementiel, L'Oréal"
  },
  {
    quote: "Nous avons organisé notre soirée de lancement dans ce lieu magique. L'acoustique parfaite et les équipements techniques sont un vrai plus.",
    author: "Thomas Bernard",
    company: "CEO, StartupTech"
  },
  {
    quote: "Le Tripot Régnier a dépassé toutes nos attentes. L'espace modulable nous a permis de créer exactement l'ambiance recherchée.",
    author: "Sophie Martin",
    company: "Wedding Planner"
  }
];

export default function Home() {
  const videoRef = useRef(null);
  const [lightboxImg, setLightboxImg] = React.useState(null);

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
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <SEOMetadata />
      <MobileCtaBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Section héros">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-sm md:text-base text-white/80 tracking-[0.3em] uppercase mb-8 font-light">
              Événementiel Premium — Paris 15ème
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight mb-10 leading-[1.1]">
              Salle parisienne où<br />vos événements prennent vie
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Situé dans le 15ème arrondissement de Paris, notre salle de réception est entièrement équipée en son, lumières et projections vidéo. Inspiré de l'Art Déco et Industriel, ce bâtiment de 1904 a été entièrement rénové, ce qui en fait un lieu unique à Paris pour accueillir des événements variés.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
            <a
              href="#nos-espaces"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wider text-sm hover:text-white transition-all duration-500 shadow-lg"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              DÉCOUVRIR LE LIEU
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#nos-espaces"
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

      {/* Spaces Section */}
      <section id="nos-espaces" className="py-20 md:py-28 px-6 bg-[#FAFAFA]" aria-label="Espaces modulables et capacités de réception">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Nos espaces</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-[#0D0D0D] tracking-tight">
              Découvrez nos différents <span style={{ color: COLORS.ACCENT_COLOR }}>espaces</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space, index) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group overflow-hidden rounded-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-white text-base font-semibold drop-shadow-md">{space.title}</h3>
                      {space.surface && (
                        <span
                          className="text-xs font-semibold flex-shrink-0 px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                        >
                          {space.surface}
                        </span>
                      )}
                    </div>
                    {space.description && (
                      <p className="text-white/90 text-xs leading-relaxed drop-shadow-sm">{space.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to={createPageUrl('Galerie')}
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold tracking-wide text-sm transition-all duration-300 rounded-lg"
              style={{ backgroundColor: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              VOIR LA GALERIE PHOTOS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* Logo Marquee Section */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-100 overflow-hidden">
        <LogoMarquee />
      </section>

      {/* Configurations Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]" aria-label="Configurations événementielles">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Configurations événementielles</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              Infrastructures <span style={{ color: COLORS.ACCENT_COLOR }}>Techniques Complètes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">
              Mur LED immersif, système audiovisuel professionnel, cuisine complète, bar aménagé et espace fumeurs dédié
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
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={config.image}
                    alt={config.name}
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
                      <h3 className="text-white text-base font-semibold drop-shadow-md">{config.name}</h3>
                      <p className="text-white/80 text-xs">{config.capacity}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Témoignages</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-8">
              Ils nous font <span style={{ color: COLORS.ACCENT_COLOR }}>confiance</span>
            </h2>
            <a
              href="https://www.google.com/maps/place/Le+Tripot+R%C3%A9gnier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold tracking-wide text-sm rounded-lg transition-all duration-300"
              style={{ backgroundColor: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 50%, ${COLORS.ACCENT_COLOR}10, transparent 50%)` }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight mb-8">
              Venez découvrir le <span style={{ color: COLORS.ACCENT_COLOR }}>lieu</span>
            </h2>
            <p className="text-white/90 text-lg mb-12 font-normal max-w-2xl mx-auto">
              Organisez votre prochain événement dans un cadre unique au cœur de Paris
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wide text-sm hover:text-white transition-all duration-300"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                NOUS CONTACTER
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl('Engagements')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold tracking-wide text-sm hover:bg-white/10 transition-all duration-300"
              >
                NOS ENGAGEMENTS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Localisation Section */}
      <section className="py-20 md:py-28 px-6 bg-white" aria-label="Localisation accessibilité">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Localisation & Accessibilité</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              10-12 rue Mathurin Régnier, <span style={{ color: COLORS.ACCENT_COLOR }}>Paris 75015</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg mb-8">
              Entièrement accessible PMR. Ascenseur, toilettes accessibles, stationnement PMR à proximité. Transports: Métro ligne 8 (Boucicaut, Lourmel), RER C (Pont de Garigliano).
            </p>
            <a
              href="https://maps.google.com/?q=10-12+rue+Mathurin+Régnier+75015+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-[#0D0D0D] font-semibold text-sm tracking-wide hover:bg-gray-50 transition-all duration-300"
            >
              Voir sur Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}