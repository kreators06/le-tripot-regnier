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
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight mb-10 leading-[1.1]">
              Salle parisienne où vos<br />
              <span className="text-[#ff8c5a]">événements prennent vie</span>
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
              className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wider text-sm hover:bg-[#ff8c5a] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl rounded"
            >
              DÉCOUVRIR LE LIEU
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
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
      <section id="nos-espaces" className="py-32 md:py-40 px-8 md:px-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Nos Espaces</p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0D0D0D] tracking-tight mb-6">
              700m² <span className="text-[#ff8c5a]">modulables</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Des espaces pensés pour s'adapter à tous vos événements
            </p>
          </motion.div>
          
          {/* Featured Main Space */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] overflow-hidden group">
                <img
                  src={spaces[0].image}
                  alt={spaces[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="lg:pl-12 text-left">
                <div className="inline-block px-4 py-1.5 bg-[#ff8c5a]/10 text-[#ff8c5a] text-xs tracking-wider uppercase mb-6 rounded-full">
                  Espace Principal
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-4 tracking-tight">
                  {spaces[0].title}
                </h3>
                <p className="text-[#ff8c5a] text-xl font-semibold mb-6">{spaces[0].surface}</p>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {spaces[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Spaces Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaces.slice(1).map((space, index) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden mb-6">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-left">
                  <div className="flex items-baseline justify-between mb-3">
                    <h4 className="text-xl font-semibold text-[#0D0D0D] tracking-tight">{space.title}</h4>
                    {space.surface && (
                      <p className="text-[#ff8c5a] text-sm font-semibold">{space.surface}</p>
                    )}
                  </div>
                  {space.description && (
                    <p className="text-gray-600 text-sm leading-relaxed font-light">{space.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Configurations</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              Adaptable à vos <span className="text-[#ff8c5a]">besoins</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">
              Notre salle s'adapte à tous vos événements avec une capacité jusqu'à 500 personnes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {configurations.map((config, index) => (
              <motion.div
                key={config.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden rounded">
                  <img 
                    src={config.image}
                    alt={config.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#ff8c5a]/80 transition-all duration-500" />
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 rounded">
                        <config.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold tracking-tight mb-1">{config.name}</h3>
                    <p className="text-white/90 text-sm font-light">{config.capacity}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Témoignages</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              Ils nous font <span className="text-[#ff8c5a]">confiance</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-left p-8 bg-[#FAFAFA] hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 rounded group"
              >
                <motion.p 
                  className="text-gray-700 text-base leading-relaxed mb-8 font-light italic"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[#0D0D0D] font-medium text-sm mb-1">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs font-light">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff8c5a] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff8c5a] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight mb-6">
              Venez découvrir le <span className="text-[#ff8c5a]">lieu</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 font-light max-w-2xl mx-auto">
              Organisez votre prochain événement dans un cadre unique au cœur de Paris
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={createPageUrl('Contact')}
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wide text-sm hover:bg-[#ff8c5a] hover:text-white transition-all duration-300 rounded shadow-lg hover:shadow-2xl"
              >
                NOUS CONTACTER
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                to={createPageUrl('Engagements')}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/30 text-white font-semibold tracking-wide text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded"
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