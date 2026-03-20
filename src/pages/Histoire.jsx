// ─── Histoire ─────────────────────────────────────────────────────────────────
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';

// Collage de 4 photos avec chevauchements et rotations
function PhotoCollage() {
  const photos = [
    {
      src: "https://letripotregnier.fr/assets/photos/histoire/1_tripot-regnier-historique.png",
      alt: "Le Tripot Régnier historique",
      style: {
        position: 'absolute',
        width: '62%',
        top: '0%',
        left: '0%',
        zIndex: 1,
        transform: 'rotate(-4deg)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      },
    },
    {
      src: "https://letripotregnier.fr/assets/photos/histoire/2_tripot-regnier-facade.png",
      alt: "Façade du Tripot Régnier",
      style: {
        position: 'absolute',
        width: '50%',
        top: '4%',
        right: '0%',
        zIndex: 3,
        transform: 'rotate(3deg)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      },
    },
    {
      src: "https://letripotregnier.fr/assets/photos/histoire/3_tripot-regnier-travaux.jpg",
      alt: "Travaux de rénovation du Tripot Régnier",
      style: {
        position: 'absolute',
        width: '50%',
        bottom: '0%',
        left: '2%',
        zIndex: 3,
        transform: 'rotate(-3deg)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      },
    },
    {
      src: "https://letripotregnier.fr/assets/photos/histoire/4_tripot-regnier-salle-principale.jpeg",
      alt: "Salle principale du Tripot Régnier",
      style: {
        position: 'absolute',
        width: '60%',
        bottom: '2%',
        right: '0%',
        zIndex: 2,
        transform: 'rotate(4deg)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      },
    },
  ];

  return (
    <>
      {/* Desktop collage */}
      <div className="hidden md:block relative" style={{ height: '480px' }}>
        {photos.map((photo, i) => (
          <motion.img
            key={i}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            style={{
              ...photo.style,
              objectFit: 'cover',
              aspectRatio: '4/3',
            }}
          />
        ))}
      </div>

      {/* Mobile : colonne simple */}
      <div className="flex flex-col gap-3 md:hidden">
        {photos.map((photo, i) => (
          <div key={i} className="overflow-hidden rounded-xl aspect-[4/3]">
            <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

export default function Histoire() {
  return (
    <div>
      <PageSEO title="Notre histoire | Le Tripot Régnier" description="Découvrez l'histoire du Tripot Régnier, de 1904 à aujourd'hui. Ancien bains-douches devenu lieu événementiel Art Déco de 700m² au cœur de Paris 15e." canonicalPath="/Histoire" />

      {/* ── SECTION 1 — Texte historique ────────────────────────────────────── */}
      <section className="pt-32 pb-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Texte */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">

              <h1 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-8 tracking-tight">
                Histoire
              </h1>

              <p className="text-[#0D0D0D] leading-relaxed mb-6 text-lg font-medium">
                Situé rue Mathurin Régnier, dans le 15ᵉ arrondissement de Paris, Le Tripot Régnier est un lieu chargé d'histoire.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Anciennement bains-douches et laverie des premiers HLM parisiens au début du XXᵉ siècle, puis site industriel, le bâtiment a été entièrement repensé et rénové pour devenir un espace de réception dédié à l'événementiel en 2016.
              </p>
              <p className="text-gray-700 leading-relaxed mb-10">
                Inspiré des univers Art Déco et industriel, nous avons conçu Le Tripot Régnier comme un lieu hybride et contemporain, pensé pour accueillir les événements corporate et culturels d'aujourd'hui.
              </p>

              {/* Encart Origine du nom */}
              <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}10`, border: `2px solid ${COLORS.ACCENT_COLOR}40` }}>
                <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide mb-3 rounded" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}25`, color: COLORS.ACCENT_COLOR }}>
                  ORIGINE DU NOM
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Son nom rend hommage au Tripot Régnier, célèbre jeu de paume construit en 1573 par Jacques Régnier, père du poète Mathurin Régnier — un clin d'œil à l'histoire parisienne et à l'esprit de convivialité qui anime le lieu.
                </p>
              </div>

              <p className="text-gray-600 mb-8">Venez découvrir un espace unique, chargé d'histoire et ouvert sur l'avenir.</p>

              <Link
                to={createPageUrl('Galerie')}
                className="inline-flex items-center gap-2 px-7 py-3 text-white font-semibold tracking-wide text-sm rounded-full transition-all duration-300"
                style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                GALERIE PHOTOS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Collage photos */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.05 }} className="pt-4">
              <PhotoCollage />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)', borderTop: `1px solid ${COLORS.ACCENT_COLOR}30` }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">
              Découvrir l'ambiance unique<br />du Tripot Régnier
            </h2>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold tracking-wide text-sm rounded-full border transition-all duration-300"
              style={{ borderColor: COLORS.ACCENT_COLOR, color: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.ACCENT_COLOR; }}
            >
              NOUS CONTACTER
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}