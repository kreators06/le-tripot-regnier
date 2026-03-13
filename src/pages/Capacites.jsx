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
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SectionTitle from '@/components/ui/SectionTitle';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';

const spaces = [
  { name: "Hall d'accueil", surface: "90 m²", description: "Espace d'accueil et de réception des invités.", image: { src: "https://letripotregnier.fr/assets/photos/photo-hall-entree-tripot-regnier.jpg", alt: "Hall d'accueil Le Tripot Régnier" } },
  { name: "Salle Principale", surface: "400 m²", description: "Espace modulable équipé (son, lumière, projection vidéo) dotée d'un bar et d'un fumoir intérieur.", image: IMAGES.spaces.grandeSalle },
  { name: "Bar", surface: "", description: "Bar équipé : four, machine à glaçons, réfrigérateur.", image: IMAGES.spaces.bar },
  { name: "Mezzanine", surface: "65 m²", description: "Espace en hauteur offrant une vue panoramique sur la salle.", image: IMAGES.spaces.mezzanine },
  { name: "Espace Lounge", surface: "", description: "Espace détente situé en prolongation de la mezzanine.", image: IMAGES.spaces.espaceLounge },
  { name: "Loge", surface: "", description: "Loge avec accès privé comprenant: écran TV, canapé, toilettes, douche, lavabo.", image: IMAGES.spaces.logePrivee }
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
      <PageSEO title="Espaces & Équipements" description="700m² modulables, mur LED immersif, système son professionnel, éclairage scénique. Découvrez les équipements techniques complets du Tripot Régnier." />

      {/* Photo Header - Replacing dark hero */}
      <div className="grid grid-cols-3 h-64 md:h-80">
        <div className="overflow-hidden">
          <img src={IMAGES.spaces.grandeSalle.src} alt="Salle principale" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden">
          <img src={IMAGES.spaces.mezzanine.src} alt="Mezzanine" className="w-full h-full object-cover" />
        </div>
        <div className="overflow-hidden">
          <img src={IMAGES.spaces.bar.src} alt="Bar" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Page Title */}
      <section className="py-12 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
            Espaces & <span style={{ color: COLORS.ACCENT_COLOR }}>Équipements</span>
          </h1>
        </div>
      </section>

      {/* Capacités Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Capacités" align="left" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "700m²", label: "ESPACE TOTAL" },
              { value: "90m²", label: "HALL D'ACCUEIL" },
              { value: "400m²", label: "SALLE PRINCIPALE" },
              { value: "65m²", label: "MEZZANINE" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300 rounded-lg"
              >
                <p className="text-4xl font-semibold mb-2" style={{ color: COLORS.ACCENT_COLOR }}>{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Espaces Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Nos Espaces" align="left" />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space, index) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-xl"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={space.image.src}
                    alt={space.image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-white text-base font-semibold drop-shadow-md">{space.name}</h3>
                      {space.surface && (
                        <span className="text-xs font-semibold flex-shrink-0 px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: COLORS.ACCENT_COLOR }}>{space.surface}</span>
                      )}
                    </div>
                    <p className="text-white/90 text-xs leading-relaxed">{space.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mur LED Highlight */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-left">
              <div className="inline-block px-4 py-1 text-sm tracking-wide mb-6" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>INNOVATION</div>
              <h2 className="text-4xl font-semibold text-white mb-6 tracking-wide">
                Mur LED<br /><span style={{ color: COLORS.ACCENT_COLOR }}>Immersif</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Notre plateau virtuel modulable avec projection immersive sur mur LED repousse les limites de la créativité. Créez des décors 3D époustouflants et réalisez des captations visuelles d'exception.
              </p>
              <ul className="space-y-3">
                {["Décors 3D personnalisables", "Captation visuelle haute définition", "Expérience immersive unique"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-200">
                    <span className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-lg overflow-hidden shadow-xl">
                <img src={IMAGES.capacites.murLED.src} alt={IMAGES.capacites.murLED.alt} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 flex items-center justify-center bg-black/50" style={{ borderColor: COLORS.ACCENT_COLOR }}>
                    <Layers className="w-8 h-8" style={{ color: COLORS.ACCENT_COLOR }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Matériel Audiovisuel */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Matériel audiovisuel" align="left" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#F5F5F0] p-8 text-left rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}>
                  <Lightbulb className="w-6 h-6" style={{ color: COLORS.ACCENT_COLOR }} />
                </div>
                <h3 className="text-xl font-semibold text-[#0D0D0D]">Éclairage</h3>
              </div>
              <ul className="space-y-3">
                {lighting.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 mt-2 flex-shrink-0" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#F5F5F0] p-8 text-left rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}>
                  <Monitor className="w-6 h-6" style={{ color: COLORS.ACCENT_COLOR }} />
                </div>
                <h3 className="text-xl font-semibold text-[#0D0D0D]">Vidéo</h3>
              </div>
              <ul className="space-y-3">
                {video.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 mt-2 flex-shrink-0" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#F5F5F0] p-8 text-left rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}>
                  <Speaker className="w-6 h-6" style={{ color: COLORS.ACCENT_COLOR }} />
                </div>
                <h3 className="text-xl font-semibold text-[#0D0D0D]">Son</h3>
              </div>
              <ul className="space-y-3">
                {sound.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 mt-2 flex-shrink-0" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
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
          <SectionTitle title="Logistique & Accès" align="left" />
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
                  <item.icon className="w-5 h-5" style={{ color: COLORS.ACCENT_COLOR }} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-3">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Normes */}
      <section className="py-16 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-start justify-start gap-8">
            <div className="flex items-center gap-4 px-8 py-4 bg-white/5 text-left rounded-lg">
              <Shield className="w-8 h-8" style={{ color: COLORS.ACCENT_COLOR }} />
              <div>
                <p className="text-white font-medium">Normes ERP</p>
                <p className="text-gray-400 text-sm">Établissement Recevant du Public</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-8 py-4 bg-white/5 text-left rounded-lg">
              <Accessibility className="w-8 h-8" style={{ color: COLORS.ACCENT_COLOR }} />
              <div>
                <p className="text-white font-medium">Accessibilité PMR</p>
                <p className="text-gray-400 text-sm">Personnes à Mobilité Réduite</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Équipements Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Équipements" align="left" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Truck, title: "Entrée véhicules", desc: "Exposition possible dans la salle" },
              { icon: Shield, title: "Vestiaire équipé", desc: "Capacité 450 personnes" },
              { icon: Monitor, title: "Matériel audiovisuel", desc: "Équipement complet inclus" },
              { icon: Maximize2, title: "Office traiteur", desc: "Cuisine professionnelle équipée" },
              { icon: Accessibility, title: "Loge aménagée", desc: "Avec accès privatif" },
              { icon: Speaker, title: "Bar aménagé", desc: "Service professionnel" },
              { icon: Lightbulb, title: "Fumoir", desc: "Espace dédié" },
              { icon: Layers, title: "Climatisation", desc: "Chauffage et traitement air" },
              { icon: Monitor, title: "Fibre optique", desc: "Wi-Fi très haut débit" },
            ].map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-left"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-lg" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}10` }}>
                  <item.icon className="w-8 h-8" style={{ color: COLORS.ACCENT_COLOR }} />
                </div>
                <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}