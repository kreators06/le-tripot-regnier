import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Award } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';
import { COLORS } from '@/components/config/colors';

export default function Histoire() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&auto=format"
            alt="Histoire du Tripot Régnier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white font-bold tracking-tight mb-6"
          >
            Notre <span style={{ color: COLORS.ACCENT_COLOR }}>Histoire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 leading-relaxed"
          >
            Un lieu chargé d'histoire au cœur du 15ème arrondissement de Paris
          </motion.p>
        </div>
      </section>

      {/* Histoire Section Fusionnée - Timeline + Origine + Stats */}
      <section className="py-20 px-6 bg-[#F5F5F0] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 rounded-l-full blur-3xl" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}05` }} />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Colonne Gauche - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-12"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-4 tracking-tight text-left">
                  Notre <span style={{ color: COLORS.ACCENT_COLOR }}>Histoire</span>
                </h2>
                <p className="text-gray-600 text-lg text-left">
                  Un siècle d'évolution au cœur de Paris
                </p>
              </div>

              {/* 1900s */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Calendar className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1 text-left">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
                    DÉBUT DU XXe SIÈCLE
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D0D0D] mt-3 mb-3">Bains-douches et Laverie</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Le bâtiment servait de bains-douches et laverie pour les premiers HLM parisiens. 
                    Cette fonction sociale témoigne du développement urbain et de l'amélioration 
                    des conditions de vie dans le quartier au début du siècle dernier.
                  </p>
                </div>
              </motion.div>

              {/* Site industriel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Building2 className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1 text-left">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
                    PÉRIODE INDUSTRIELLE
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D0D0D] mt-3 mb-3">Site Industriel</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Après sa fonction initiale, le bâtiment a été reconverti en site industriel, 
                    s'inscrivant dans la transformation économique du quartier. Cette période 
                    a marqué l'architecture et l'identité du lieu.
                  </p>
                </div>
              </motion.div>

              {/* 2016 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1 text-left">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
                    2016
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D0D0D] mt-3 mb-3">Le Tripot Régnier</h3>
                  <p className="text-gray-600 leading-relaxed text-justify mb-3">
                    Situé rue Mathurin Régnier, dans le 15e arrondissement de Paris, Le Tripot Régnier 
                    est un lieu chargé d'histoire. Anciennement bains-douches et laverie des premiers 
                    HLM parisiens au début du XXe siècle, puis site industriel, le bâtiment a été 
                    entièrement repensé et rénové pour devenir un espace de réception dédié à 
                    l'événementiel en 2016.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Inspiré des univers Art Déco et industriel, nous avons conçu Le Tripot Régnier 
                    comme un lieu hybride et contemporain, pensé pour accueillir les événements 
                    corporate et culturels d'aujourd'hui.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Colonne Droite - Origine du nom + Stats */}
            <div className="space-y-8">
              
              {/* Origine du nom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                className="bg-white shadow-lg overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format"
                  alt="Histoire du Tripot Régnier"
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-6 text-left">
                    Origine du <span style={{ color: COLORS.ACCENT_COLOR }}>Nom</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Son nom rend hommage au <strong>Tripot Régnier</strong>, célèbre jeu de paume construit 
                    en 1573 par Jacques Régnier, père du poète Mathurin Régnier. Ce clin d'œil historique 
                    ancre notre lieu dans l'héritage culturel parisien tout en lui donnant une identité unique.
                  </p>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                className="bg-[#0D0D0D] p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-8 text-left">
                  Le Tripot Régnier en chiffres
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-left"
                  >
                    <p className="text-4xl font-bold mb-2" style={{ color: COLORS.ACCENT_COLOR }}>1904</p>
                    <p className="text-gray-400 text-sm">Construction du bâtiment</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-left"
                  >
                    <p className="text-4xl font-bold mb-2" style={{ color: COLORS.ACCENT_COLOR }}>2016</p>
                    <p className="text-gray-400 text-sm">Ouverture du Tripot Régnier</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-left"
                  >
                    <p className="text-4xl font-bold mb-2" style={{ color: COLORS.ACCENT_COLOR }}>700m²</p>
                    <p className="text-gray-400 text-sm">Entièrement rénovés</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="text-left"
                  >
                    <p className="text-4xl font-bold mb-2" style={{ color: COLORS.ACCENT_COLOR }}>120</p>
                    <p className="text-gray-400 text-sm">ans d'histoire</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Un lieu hybride et moderne */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                className="bg-white shadow-lg overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f29da8c2f0?w=800&auto=format"
                  alt="Le Tripot Régnier - Lieu hybride et moderne"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-4 text-left">
                    Un lieu hybride et <span style={{ color: COLORS.ACCENT_COLOR }}>moderne</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify mb-6">
                    Entièrement pensés selon les codes de l'évènementiel, les 700 m² qui composent le Tripot Régnier ont été conçus à partir des technologies les plus modernes du secteur de l'événementiel et du digital.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-left">
                      <p className="text-3xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>700m²</p>
                      <p className="text-sm text-gray-500">d'espace événementiel</p>
                    </div>
                    <div className="text-left">
                      <p className="text-3xl font-bold" style={{ color: COLORS.ACCENT_COLOR }}>500</p>
                      <p className="text-sm text-gray-500">personnes maximum</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

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