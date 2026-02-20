import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Award } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';

export default function Histoire() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
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
            Notre <span className="text-[#ff8c5a]">Histoire</span>
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

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* 1900s */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#ff8c5a] flex items-center justify-center rounded-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <div className="inline-block px-4 py-1 bg-[#ff8c5a]/20 text-[#ff8c5a] text-sm font-medium tracking-wide mb-4">
                  DÉBUT DU XXe SIÈCLE
                </div>
                <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Bains-douches et Laverie</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Le bâtiment servait de bains-douches et laverie pour les premiers HLM parisiens. 
                  Cette fonction sociale témoigne du développement urbain et de l'amélioration 
                  des conditions de vie dans le quartier au début du siècle dernier.
                </p>
              </div>
            </motion.div>

            {/* Site industriel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#ff8c5a] flex items-center justify-center rounded-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <div className="inline-block px-4 py-1 bg-[#ff8c5a]/20 text-[#ff8c5a] text-sm font-medium tracking-wide mb-4">
                  PÉRIODE INDUSTRIELLE
                </div>
                <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Site Industriel</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Après sa fonction initiale, le bâtiment a été reconverti en site industriel, 
                  s'inscrivant dans la transformation économique du quartier. Cette période 
                  a marqué l'architecture et l'identité du lieu.
                </p>
              </div>
            </motion.div>

            {/* 2016 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#ff8c5a] flex items-center justify-center rounded-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <div className="inline-block px-4 py-1 bg-[#ff8c5a]/20 text-[#ff8c5a] text-sm font-medium tracking-wide mb-4">
                  2016
                </div>
                <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Le Tripot Régnier</h3>
                <p className="text-gray-600 leading-relaxed text-justify mb-4">
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
          </div>
        </div>
      </section>

      {/* Origine du nom */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Origine du Nom"
            align="left"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F0] p-8 text-left mt-8 rounded-lg"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Son nom rend hommage au <strong>Tripot Régnier</strong>, célèbre jeu de paume construit 
              en 1573 par Jacques Régnier, père du poète Mathurin Régnier. Ce clin d'œil historique 
              ancre notre lieu dans l'héritage culturel parisien tout en lui donnant une identité unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-[#ff8c5a] mb-2">1904</p>
              <p className="text-gray-400">Construction du bâtiment</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-[#ff8c5a] mb-2">2016</p>
              <p className="text-gray-400">Ouverture du Tripot Régnier</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-[#ff8c5a] mb-2">700m²</p>
              <p className="text-gray-400">Entièrement rénovés</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Un lieu hybride et moderne Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-6 tracking-wide">
                Un lieu hybride et moderne
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-justify">
                Entièrement pensés selon les codes de l'évènementiel, les 700 m² qui composent le Tripot Régnier ont été conçus à partir des technologies les plus modernes du secteur de l'événementiel et du digital.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-left">
                  <p className="text-4xl font-bold text-[#ff8c5a] mb-1">700</p>
                  <p className="text-sm text-gray-500">m² d'espace</p>
                </div>
                <div className="text-left">
                  <p className="text-4xl font-bold text-[#ff8c5a] mb-1">500</p>
                  <p className="text-sm text-gray-500">personnes max</p>
                </div>
                <div className="text-left">
                  <p className="text-4xl font-bold text-[#ff8c5a] mb-1">1904</p>
                  <p className="text-sm text-gray-500">bâtiment historique</p>
                </div>
              </div>
              
              {/* Additional stat */}
              <div className="inline-block bg-[#ff8c5a] text-white px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">120</p>
                <p className="text-xs">ans d'histoire</p>
              </div>
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c2f0?w=800&auto=format"
                alt="Salle principale Le Tripot Régnier"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
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