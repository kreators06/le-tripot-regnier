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
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
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
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wider text-sm hover:bg-[#ff8c5a] hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl"
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
      <section id="nos-espaces" className="py-20 md:py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">Nos espaces</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-[#0D0D0D] tracking-tight mb-6">
              700m² <span className="text-[#ff8c5a]">modulables</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">
              Des espaces pensés pour s'adapter à tous vos événements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Premier espace - Large */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:row-span-2 group"
            >
              <div className="relative h-[600px] overflow-hidden">
                <motion.img
                  src={spaces[0].image}
                  alt={spaces[0].title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <motion.div 
                  className="absolute bottom-8 left-8 right-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-white text-3xl font-semibold tracking-tight mb-2">{spaces[0].title}</h3>
                  <p className="text-[#ff8c5a] text-lg font-medium mb-3">{spaces[0].surface}</p>
                  <p className="text-white/90 text-sm leading-relaxed">{spaces[0].description}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Autres espaces */}
            <div className="grid grid-cols-1 gap-12">
              {spaces.slice(1).map((space, index) => (
                <motion.div
                  key={space.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group"
                >
                  <div className="relative h-72 overflow-hidden mb-6">
                    <motion.img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-[#0D0D0D] text-2xl font-semibold tracking-tight">{space.title}</h3>
                      {space.surface && (
                        <p className="text-[#ff8c5a] text-sm font-medium">{space.surface}</p>
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
        </div>
      </section>

      {/* Configurations Section */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAFA] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff8c5a]/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff8c5a]/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {configurations.map((config, index) => (
              <motion.div
                key={config.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    src={config.image}
                    alt={config.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#ff8c5a]/20 backdrop-blur-sm flex items-center justify-center border border-[#ff8c5a]/30 group-hover:bg-[#ff8c5a] group-hover:border-[#ff8c5a] transition-all duration-300">
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
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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
      <section className="py-20 md:py-28 px-6 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,140,90,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,140,90,0.05),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wide text-sm hover:bg-[#ff8c5a] hover:text-white transition-all duration-300"
              >
                NOUS CONTACTER
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                to={createPageUrl('Engagements')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold tracking-wide text-sm hover:bg-white/10 transition-all duration-300"
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