import React from 'react';
import { motion } from 'framer-motion';
import { 
  Maximize2, 
  Lightbulb, 
  Monitor, 
  Speaker, 
  Truck, 
  Accessibility,
  Shield,
  Layers
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';

const spaces = [
  { name: "Salle Principale", surface: "400 m²", description: "Espace modulable équipé (son, lumière, projection vidéo) dotée d'un bar et d'un fumoir intérieur." },
  { name: "Bar", surface: "", description: "Bar équipé : four, machine à glaçons, réfrigérateur." },
  { name: "Mezzanine", surface: "65 m²", description: "Espace en hauteur offrant une vue panoramique sur la salle." },
  { name: "Espace Lounge", surface: "", description: "Espace détente situé en prolongation de la mezzanine." },
  { name: "Loge", surface: "", description: "Loge avec accès privé comprenant: écran TV pour visualiser en direct l'évènement, canapé, toilettes, douche, lavabo." }
];

const lighting = [
  "48 Projecteurs LEDS BEAM Z",
  "8 Automatiques BEAM CHAUVET",
  "4 Projecteurs ETC S4",
  "Machine à fumée",
  "Pilotage tablette tactile + SUNLITE"
];

const video = [
  "Écran 16/9 (3m x 1,69m)",
  "Vidéoprojecteur Full HD 6000 lms Panasonic",
  "6 Moniteurs LCD 48\" Samsung",
  "Retours écrans régie et loge"
];

const sound = [
  "Système HK LINEAR 5 actif",
  "Console YAMAHA 01V",
  "Platines PIONEER CDJ2000 Nexus",
  "Console DJM900",
  "Micros HF SHURE"
];

const logistics = [
  { icon: Truck, text: "Zone de livraison 22m devant la salle" },
  { icon: Accessibility, text: "Accès plain-pied et PMR" },
  { icon: Maximize2, text: "Portes coulissantes 2,50m x 2,57m" },
  { icon: Shield, text: "Charge au sol : 500 kg/m²" }
];

export default function Capacites() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&auto=format"
            alt="Équipements salle événementielle Paris"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white font-semibold tracking-wide mb-6"
          >
            Capacités & <span className="text-[#ff8c5a]">Équipements</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Tout ce dont vous avez besoin pour un événement réussi
          </motion.p>
        </div>
      </section>

      {/* Capacités Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Capacités"
            subtitle="Nos espaces en chiffres"
            align="left"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <p className="text-4xl font-semibold text-[#ff8c5a] mb-2">700m²</p>
              <p className="text-sm text-gray-600">ESPACE TOTAL</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <p className="text-4xl font-semibold text-[#ff8c5a] mb-2">90m²</p>
              <p className="text-sm text-gray-600">HALL D'ACCUEIL</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <p className="text-4xl font-semibold text-[#ff8c5a] mb-2">400m²</p>
              <p className="text-sm text-gray-600">SALLE PRINCIPALE</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <p className="text-4xl font-semibold text-[#ff8c5a] mb-2">65m²</p>
              <p className="text-sm text-gray-600">MEZZANINE</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Espaces Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Nos Espaces"
            subtitle="Des espaces modulables pour tous vos besoins"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {spaces.map((space, index) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F5F0] p-8 text-left group hover:shadow-xl transition-shadow duration-300 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">{space.name}</h3>
                {space.surface && (
                  <p className="text-lg font-medium text-[#ff8c5a] mb-3">{space.surface}</p>
                )}
                <p className="text-gray-600 leading-relaxed">{space.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mur Virtuel Highlight */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="inline-block px-4 py-1 bg-[#ff8c5a]/20 text-[#ff8c5a] text-sm tracking-wide mb-6">
                INNOVATION
              </div>
              <h2 className="text-4xl font-semibold text-white mb-6 tracking-wide">
                Mur LED<br />
                <span className="text-[#ff8c5a]">Immersif</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Notre plateau virtuel modulable avec projection immersive sur mur LED 
                repousse les limites de la créativité. Créez des décors 3D époustouflants 
                et réalisez des captations visuelles d'exception.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#ff8c5a]" />
                  Décors 3D personnalisables
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#ff8c5a]" />
                  Captation visuelle haute définition
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#ff8c5a]" />
                  Expérience immersive unique
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format"
                  alt="Mur LED immersif"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-[#ff8c5a] flex items-center justify-center bg-black/50">
                    <Layers className="w-8 h-8 text-[#ff8c5a]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Équipements Techniques"
            subtitle="Du matériel professionnel haut de gamme"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Éclairage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F0] p-8 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#ff8c5a]/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#ff8c5a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0D0D0D]">Éclairage</h3>
              </div>
              <ul className="space-y-3">
                {lighting.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#ff8c5a] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vidéo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F5F5F0] p-8 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#ff8c5a]/20 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-[#ff8c5a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0D0D0D]">Vidéo</h3>
              </div>
              <ul className="space-y-3">
                {video.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#ff8c5a] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Son */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5F5F0] p-8 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#ff8c5a]/20 flex items-center justify-center">
                  <Speaker className="w-6 h-6 text-[#ff8c5a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0D0D0D]">Son</h3>
              </div>
              <ul className="space-y-3">
                {sound.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#ff8c5a] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logistics & Access */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Logistique & Accès"
            subtitle="Un lieu pensé pour faciliter votre organisation"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {logistics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 flex items-start gap-4 text-left rounded-lg"
              >
                <div className="w-12 h-12 bg-[#0D0D0D] flex items-center justify-center flex-shrink-0 rounded-lg">
                  <item.icon className="w-5 h-5 text-[#ff8c5a]" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-3">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Normes */}
      <section className="py-16 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start justify-start gap-8"
          >
            <div className="flex items-center gap-4 px-8 py-4 bg-white/5 text-left">
              <Shield className="w-8 h-8 text-[#ff8c5a]" />
              <div>
                <p className="text-white font-medium">Normes ERP</p>
                <p className="text-gray-400 text-sm">Établissement Recevant du Public</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-8 py-4 bg-white/5 text-left">
              <Accessibility className="w-8 h-8 text-[#ff8c5a]" />
              <div>
                <p className="text-white font-medium">Accessibilité PMR</p>
                <p className="text-gray-400 text-sm">Personnes à Mobilité Réduite</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Avantages Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Nos Avantages"
            subtitle="Un lieu entièrement équipé pour vos événements"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Entrée véhicules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Truck className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Entrée véhicules</h3>
              <p className="text-gray-600 text-sm">Exposition possible dans la salle</p>
            </motion.div>
            
            {/* Vestiaire équipé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Shield className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Vestiaire équipé</h3>
              <p className="text-gray-600 text-sm">Capacité 450 personnes</p>
            </motion.div>
            
            {/* Matériel audiovisuel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Monitor className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Matériel audiovisuel</h3>
              <p className="text-gray-600 text-sm">Équipement complet inclus</p>
            </motion.div>
            
            {/* Office traiteur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Maximize2 className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Office traiteur</h3>
              <p className="text-gray-600 text-sm">Cuisine professionnelle équipée</p>
            </motion.div>
            
            {/* Loge aménagée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Accessibility className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Loge aménagée</h3>
              <p className="text-gray-600 text-sm">Avec accès privatif</p>
            </motion.div>
            
            {/* Bar aménagé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Speaker className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Bar aménagé</h3>
              <p className="text-gray-600 text-sm">Service professionnel</p>
            </motion.div>
            
            {/* Fumoir */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Lightbulb className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Fumoir</h3>
              <p className="text-gray-600 text-sm">Espace dédié</p>
            </motion.div>
            
            {/* Climatisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Layers className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Climatisation</h3>
              <p className="text-gray-600 text-sm">Chauffage et traitement air</p>
            </motion.div>
            
            {/* Fibre optique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-left"
            >
              <div className="w-16 h-16 bg-[#ff8c5a]/10 flex items-center justify-center mb-4 rounded-lg">
                <Monitor className="w-8 h-8 text-[#ff8c5a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">Fibre optique</h3>
              <p className="text-gray-600 text-sm">Wi-Fi très haut débit</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="Des questions sur nos équipements ?"
        subtitle="Notre équipe technique est à votre disposition pour vous conseiller"
        variant="light"
      />
    </div>
  );
}