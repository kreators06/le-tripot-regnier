import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';

export default function Histoire() {
  return (
    <div className="pt-20">
      <PageSEO title="Notre histoire | Le Tripot Régnier" description="Découvrez l'histoire du Tripot Régnier, de 1904 à aujourd'hui. Ancien bains-douches devenu lieu événementiel Art Déco de 700m² au cœur de Paris 15e." />

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.histoire.hero.src} alt={IMAGES.histoire.hero.alt} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl text-white font-bold tracking-tight"
          >
            Notre <span style={{ color: COLORS.ACCENT_COLOR }}>Histoire</span>
          </motion.h1>
        </div>
      </section>

      {/* Main History Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Situé rue Mathurin Régnier, dans le 15ᵉ arrondissement de Paris, Le Tripot Régnier est un lieu chargé d'histoire.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Anciennement bains-douches et laverie des premiers HLM parisiens au début du XXᵉ siècle, puis site industriel, le bâtiment a été entièrement repensé et rénové pour devenir un espace de réception dédié à l'événementiel en 2016.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Inspiré des univers Art Déco et industriel, nous avons conçu Le Tripot Régnier comme un lieu hybride et contemporain, pensé pour accueillir les événements corporate et culturels d'aujourd'hui.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                Entièrement équipé en son, lumière et vidéo, l'espace s'adapte à des formats variés et laisse place à une grande liberté de création.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-4xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>1904</p>
                  <p className="text-sm text-gray-500 mt-1">Construction du bâtiment</p>
                </div>
                <div>
                  <p className="text-4xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>700m²</p>
                  <p className="text-sm text-gray-500 mt-1">Entièrement rénovés</p>
                </div>
                <div>
                  <p className="text-4xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>2016</p>
                  <p className="text-sm text-gray-500 mt-1">Ouverture du Tripot Régnier</p>
                </div>
                <div>
                  <p className="text-4xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>500</p>
                  <p className="text-sm text-gray-500 mt-1">personnes maximum</p>
                </div>
              </div>

              <Link
                to={createPageUrl('Galerie')}
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold tracking-wide text-sm rounded-lg transition-all duration-300"
                style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                GALERIE PHOTOS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img
                  src="https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg"
                  alt="Hall d'entrée Art Déco du Tripot Régnier, 10-12 rue Mathurin Régnier Paris 15e"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img
                  src={IMAGES.spaces.grandeSalle.src}
                  alt="Salle principale du Tripot Régnier en configuration événementielle, 400m²"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origine du nom */}
      <section className="py-20 px-6 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide mb-6 rounded" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
              ORIGINE DU NOM
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-6 tracking-tight">
              Origine du « Tripot Régnier »
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Son nom rend hommage au Tripot Régnier, célèbre jeu de paume construit en 1573 par Jacques Régnier, père du poète Mathurin Régnier — un clin d'œil à l'histoire parisienne et à l'esprit de convivialité qui anime le lieu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slim CTA */}
      <section className="py-12 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl text-white font-semibold tracking-tight text-center sm:text-left">
              Découvrir l'ambiance unique du Tripot Régnier
            </h2>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wide text-sm hover:text-white transition-all duration-300 rounded-md flex-shrink-0"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              NOUS CONTACTER
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}