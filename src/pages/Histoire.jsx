// ─── Histoire ─────────────────────────────────────────────────────────────────
// Page histoire et origines du Tripot Régnier

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
    <div className="pt-24 bg-[#0D0D0D] min-h-screen">
      <PageSEO title="Notre histoire | Le Tripot Régnier" description="Découvrez l'histoire du Tripot Régnier, de 1904 à aujourd'hui. Ancien bains-douches devenu lieu événementiel Art Déco de 700m² au cœur de Paris 15e." />

      {/* ── Origine du nom — SECTION 1 ─────────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide mb-6 rounded" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
              ORIGINE DU NOM
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Origine du « Tripot <span style={{ color: COLORS.ACCENT_COLOR }}>Régnier</span> »
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg">
              Son nom rend hommage au Tripot Régnier, célèbre jeu de paume construit en 1573 par Jacques Régnier, père du poète Mathurin Régnier — un clin d'œil à l'histoire parisienne et à l'esprit de convivialité qui anime le lieu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main History Section — SECTION 2 ──────────────────────────────── */}
      <section className="py-10 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Situé rue Mathurin Régnier, dans le 15ᵉ arrondissement de Paris, Le Tripot Régnier est un lieu chargé d'histoire.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Anciennement bains-douches et laverie des premiers HLM parisiens au début du XXᵉ siècle, puis site industriel, le bâtiment a été entièrement repensé et rénové pour devenir un espace de réception dédié à l'événementiel en 2016.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Inspiré des univers Art Déco et industriel, nous avons conçu Le Tripot Régnier comme un lieu hybride et contemporain, pensé pour accueillir les événements corporate et culturels d'aujourd'hui.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
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

      {/* ── CTA centré ────────────────────────────────────────────────────── */}
      <section className="py-10 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">
              Découvrir l'ambiance unique<br />du Tripot Régnier
            </h2>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold tracking-wide text-sm rounded-full border-2 bg-transparent transition-all duration-300"
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
    </div>
  );
}