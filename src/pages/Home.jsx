import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Utensils, 
  Presentation, 
  PartyPopper, 
  Store,
  Car,
  Shirt,
  Speaker,
  ChefHat,
  DoorOpen,
  Wine,
  Cigarette,
  Thermometer,
  Wifi
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import SpaceCard from '@/components/ui/SpaceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FeatureIcon from '@/components/ui/FeatureIcon';
import CTABanner from '@/components/ui/CTABanner';

const spaces = [
  {
    title: "Salle Principale",
    surface: "400 m²",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format",
    description: "Espace modulable avec béton ciré et équipements audiovisuels complets"
  },
  {
    title: "Bar Aménagé",
    surface: "",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format",
    description: "Bar design entièrement équipé pour vos cocktails"
  },
  {
    title: "Mezzanine",
    surface: "65 m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format",
    description: "Espace en hauteur offrant une vue panoramique"
  },
  {
    title: "Espace Lounge",
    surface: "",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format",
    description: "Coin détente avec mobilier contemporain"
  },
  {
    title: "Loge Aménagée",
    surface: "",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format",
    description: "Loge privative avec accès dédié"
  }
];

const configurations = [
  { icon: Users, name: "Défilé", capacity: "< 200 pers." },
  { icon: Utensils, name: "Dîner assis", capacity: "< 220 pers." },
  { icon: Presentation, name: "Conférence", capacity: "< 250 pers." },
  { icon: PartyPopper, name: "Cocktail / Soirée", capacity: "< 500 pers." },
  { icon: Store, name: "Showroom", capacity: "Sur mesure" }
];

const advantages = [
  { icon: Car, title: "Entrée véhicules", description: "Exposition possible dans la salle" },
  { icon: Shirt, title: "Vestiaire équipé", description: "Capacité 450 personnes" },
  { icon: Speaker, title: "Matériel audiovisuel", description: "Équipement complet inclus" },
  { icon: ChefHat, title: "Office traiteur", description: "Cuisine professionnelle équipée" },
  { icon: DoorOpen, title: "Loge aménagée", description: "Avec accès privatif" },
  { icon: Wine, title: "Bar aménagé", description: "Service professionnel" },
  { icon: Cigarette, title: "Fumoir", description: "Espace dédié" },
  { icon: Thermometer, title: "Climatisation", description: "Chauffage et traitement air" },
  { icon: Wifi, title: "Fibre optique", description: "Wi-Fi très haut débit" }
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
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-people-at-a-party-dancing-in-the-dark-4553-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide mb-6 leading-tight">
              Salle parisienne où vos
              <span className="block text-[#C9A962]">évènements prennent vie</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Situé dans le 15ème arrondissement de Paris, notre salle de réception est entièrement équipée 
            en son, lumières et projections vidéo. Inspiré de l'Art Déco et Industriel, ce bâtiment de 1904 
            a été entièrement rénové, ce qui en fait un lieu unique à Paris.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#C9A962] text-[#0D0D0D] font-medium tracking-wide text-lg hover:bg-[#D4B872] transition-all duration-300"
            >
              Réserver ou demander un devis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-[#C9A962] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            title="Un lieu hybride et moderne"
            subtitle="Entièrement pensés selon les codes de l'évènementiel, les 700 m² qui composent le Tripot Régnier ont été conçus à partir des technologies les plus modernes du secteur de l'événementiel et du digital."
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-3 gap-8"
          >
            <div className="text-center">
              <p className="text-5xl font-light text-[#C9A962] mb-2">700</p>
              <p className="text-gray-600 text-sm tracking-wide">m² d'espace</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-light text-[#C9A962] mb-2">500</p>
              <p className="text-gray-600 text-sm tracking-wide">personnes max</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-light text-[#C9A962] mb-2">1904</p>
              <p className="text-gray-600 text-sm tracking-wide">bâtiment historique</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Nos Espaces"
            subtitle="Découvrez les différents espaces modulables du Tripot Régnier"
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {spaces.map((space, index) => (
              <SpaceCard key={space.title} {...space} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Configurations"
            subtitle="Notre salle s'adapte à tous vos événements avec une capacité jusqu'à 500 personnes"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {configurations.map((config, index) => (
              <motion.div
                key={config.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#0D0D0D] flex items-center justify-center mb-4 group-hover:bg-[#C9A962] transition-colors duration-300">
                  <config.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-medium text-[#0D0D0D] mb-1">{config.name}</h3>
                <p className="text-[#C9A962] text-sm">{config.capacity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Nos Avantages"
            subtitle="Un lieu entièrement équipé pour vos événements"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            {advantages.map((advantage, index) => (
              <FeatureIcon key={advantage.title} {...advantage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Ils nous font confiance"
            subtitle="Découvrez les retours de nos clients"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="Venez découvrir le lieu"
        subtitle="Organisez votre prochain événement dans un cadre unique au cœur de Paris"
      />
    </div>
  );
}