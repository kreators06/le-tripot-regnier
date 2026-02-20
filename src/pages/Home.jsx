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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Large Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format"
            alt="Le Tripot Régnier"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-sm md:text-base text-white/80 tracking-[0.3em] uppercase mb-8 font-light">
              Événementiel Premium — Paris 15ème
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight mb-10 leading-[1.1]">
              Salle parisienne où vos<br />
              <span className="text-[#ff8c5a] font-normal">événements prennent vie</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            700m² modulables alliant Art Déco et Industriel au cœur de Paris. 
            Un lieu unique entièrement rénové pour sublimer vos événements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="#nos-espaces"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-normal tracking-wider text-sm hover:bg-[#ff8c5a] hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              DÉCOUVRIR LE LIEU
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </motion.div>
      </section>



      {/* Spaces Section */}
      <section id="nos-espaces" className="py-32 md:py-40 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Espaces</p>
            <h2 className="text-3xl md:text-5xl font-light text-[#0D0D0D] tracking-tight mb-6">
              Nos <span className="font-normal text-[#ff8c5a]">Espaces</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Découvrez les différents espaces modulables du Tripot Régnier
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {spaces.map((space, index) => (
              <SpaceCard key={space.title} {...space} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section className="py-32 md:py-40 px-8 md:px-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Configurations</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              Adaptable à vos <span className="text-[#ff8c5a]">besoins</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">
              Notre salle s'adapte à tous vos événements avec une capacité jusqu'à 500 personnes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {configurations.map((config, index) => (
              <motion.div
                key={config.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden mb-6">
                  <img 
                    src={config.image}
                    alt={config.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <config.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-light tracking-wide mb-1">{config.name}</h3>
                    <p className="text-white/80 text-sm font-light">{config.capacity}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-32 md:py-40 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Témoignages</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              Ils nous font <span className="text-[#ff8c5a]">confiance</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-left"
              >
                <p className="text-gray-700 text-base leading-relaxed mb-8 font-light italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[#0D0D0D] font-normal text-sm mb-1">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs font-light">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 px-8 md:px-16 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight mb-8">
              Venez découvrir le <span className="text-[#ff8c5a]">lieu</span>
            </h2>
            <p className="text-white/90 text-lg mb-12 font-normal max-w-2xl mx-auto">
              Organisez votre prochain événement dans un cadre unique au cœur de Paris
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wide text-sm hover:bg-[#ff8c5a] hover:text-white transition-all duration-500 rounded-lg"
              >
                NOUS CONTACTER
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                to={createPageUrl('Engagements')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold tracking-wide text-sm hover:bg-white/10 transition-all duration-500 rounded-lg"
              >
                NOS ENGAGEMENTS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}