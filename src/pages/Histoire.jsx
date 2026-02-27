import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Award } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';

export default function Histoire() {
  return (
    <div className="pt-20">
      <PageSEO title="Notre Histoire" description="Découvrez l'histoire du Tripot Régnier, de 1904 à aujourd'hui. Ancien bains-douches devenu lieu événementiel Art Déco de 700m² au cœur de Paris 15e." />
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.histoire.hero.src}
            alt={IMAGES.histoire.hero.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl text-white font-bold tracking-tight mb-6"
          >
            Notre <span style={{ color: COLORS.ACCENT_COLOR }}>Histoire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/90 leading-relaxed"
          >
            Un lieu chargé d'histoire au cœur du 15ème arrondissement de Paris
          </motion.p>
        </div>
      </section>

      {/* Bloc 1 : Naissance du lieu */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide mb-4" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
                DÉBUT DU XXe SIÈCLE
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-6 tracking-tight">
                Un bâtiment chargé d'<span style={{ color: COLORS.ACCENT_COLOR }}>histoire</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Construit en 1904, le bâtiment servait initialement de bains-douches et laverie pour les premiers HLM parisiens du 15e arrondissement — une fonction sociale essentielle au tournant du siècle.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Après cette période, le lieu fut reconverti en site industriel avant d'être entièrement repensé et rénové en 2016 pour devenir Le Tripot Régnier, espace événementiel contemporain.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img 
                src={IMAGES.spaces.grandeSalle.src}
                alt="La salle principale du Tripot Régnier"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc 2 : Le Tripot Régnier aujourd'hui */}
      <section className="py-20 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg shadow-lg aspect-[4/3] order-2 lg:order-1"
            >
              <img 
                src={IMAGES.spaces.mezzanine.src}
                alt="Mezzanine du Tripot Régnier"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left order-1 lg:order-2"
            >
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide mb-4" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
                2016 — AUJOURD'HUI
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-6 tracking-tight">
                Un lieu hybride et <span style={{ color: COLORS.ACCENT_COLOR }}>contemporain</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Inspiré des univers Art Déco et industriel, Le Tripot Régnier a été entièrement pensé selon les codes de l'événementiel moderne. Ses 700 m² intègrent les technologies les plus avancées du secteur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Son nom rend hommage au <strong>Tripot Régnier</strong>, célèbre jeu de paume construit en 1573 par Jacques Régnier, père du poète Mathurin Régnier — un clin d'œil à l'héritage culturel parisien.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>1904</p>
                  <p className="text-sm text-gray-500">Construction du bâtiment</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>700m²</p>
                  <p className="text-sm text-gray-500">Entièrement rénovés</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>2016</p>
                  <p className="text-sm text-gray-500">Ouverture du Tripot Régnier</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>500</p>
                  <p className="text-sm text-gray-500">personnes maximum</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Banner */}
      <CTABanner 
        title="Découvrez notre lieu chargé d'histoire"
        subtitle="Organisez votre événement dans un cadre unique alliant patrimoine et modernité"
        variant="light"
      />
    </div>
  );
}