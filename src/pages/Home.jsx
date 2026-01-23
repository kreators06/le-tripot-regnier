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
  },
  {
    title: "Vestiaire",
    surface: "450 pers.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format",
    description: "Vestiaire équipé avec capacité de 450 personnes"
  }
];

const configurations = [
  { 
    icon: Users, 
    name: "Défilé", 
    capacity: "< 200 pers.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format"
  },
  { 
    icon: Utensils, 
    name: "Dîner assis", 
    capacity: "< 220 pers.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format"
  },
  { 
    icon: Presentation, 
    name: "Conférence", 
    capacity: "< 250 pers.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format"
  },
  { 
    icon: PartyPopper, 
    name: "Cocktail / Soirée", 
    capacity: "< 500 pers.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format"
  },
  { 
    icon: Store, 
    name: "Showroom", 
    capacity: "Sur mesure",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format"
  }
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
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-wide mb-6 leading-tight">
              Salle parisienne où vos
              <span className="block text-[#C9A962]">évènements prennent vie</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 leading-relaxed"
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Un lieu hybride et moderne"
                subtitle="Entièrement pensés selon les codes de l'évènementiel, les 700 m² qui composent le Tripot Régnier ont été conçus à partir des technologies les plus modernes du secteur de l'événementiel et du digital."
                align="left"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-8 mt-8"
              >
                <div className="text-left">
                  <p className="text-4xl font-semibold text-[#C9A962] mb-1">700</p>
                  <p className="text-gray-600 text-sm">m² d'espace</p>
                </div>
                <div className="text-left">
                  <p className="text-4xl font-semibold text-[#C9A962] mb-1">500</p>
                  <p className="text-gray-600 text-sm">personnes max</p>
                </div>
                <div className="text-left">
                  <p className="text-4xl font-semibold text-[#C9A962] mb-1">1904</p>
                  <p className="text-gray-600 text-sm">bâtiment historique</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format"
                alt="Le Tripot Régnier - Salle événementielle Paris"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C9A962] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#0D0D0D] font-semibold text-2xl">120</p>
                  <p className="text-[#0D0D0D] text-xs">ans d'histoire</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Nos Espaces"
            subtitle="Découvrez les différents espaces modulables du Tripot Régnier"
            light
            align="left"
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
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {configurations.map((config, index) => (
              <motion.div
                key={config.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white group overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={config.image}
                    alt={config.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-[#C9A962] flex items-center justify-center mb-2">
                      <config.icon className="w-5 h-5 text-[#0D0D0D]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-[#0D0D0D] text-lg mb-1">{config.name}</h3>
                  <p className="text-[#C9A962] font-medium">{config.capacity}</p>
                </div>
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
            align="left"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            {advantages.map((advantage, index) => (
              <FeatureIcon key={advantage.title} {...advantage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Nos Clients Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Nos Clients"
            subtitle="Ils nous ont fait confiance pour leurs événements"
            align="left"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center"
          >
            {/* Placeholder pour le visuel roue des logos clients */}
            <div className="w-full max-w-3xl aspect-square bg-white border-2 border-dashed border-gray-300 flex items-center justify-center rounded-full">
              <div className="text-center p-8">
                <p className="text-gray-500 text-lg mb-2">Emplacement réservé</p>
                <p className="text-gray-400 text-sm">Visuel roue des logos clients</p>
                <p className="text-gray-400 text-xs mt-2">Format recommandé : carré (ex: 800x800px)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Ils nous font confiance"
            subtitle="Découvrez les retours de nos clients"
            align="left"
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