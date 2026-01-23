import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABanner from '@/components/ui/CTABanner';

const teamValues = [
  {
    icon: Users,
    title: "Équipe Dédiée",
    description: "Notre équipe interne vous accompagne de A à Z dans l'organisation de votre événement, avec passion et professionnalisme."
  },
  {
    icon: Award,
    title: "Expertise Événementielle",
    description: "Des années d'expérience dans l'événementiel parisien pour vous garantir des prestations d'exception."
  },
  {
    icon: Heart,
    title: "Passion du Métier",
    description: "Chaque événement est unique et nous mettons tout notre cœur à le rendre inoubliable."
  }
];

const partners = [
  {
    category: "Traiteurs",
    description: "Nos partenaires traiteurs sélectionnés pour leur excellence culinaire et leur créativité."
  },
  {
    category: "Décorateurs",
    description: "Des artistes de la décoration pour sublimer vos espaces selon vos envies."
  },
  {
    category: "Techniciens",
    description: "Des professionnels du son et de la lumière pour des prestations techniques irréprochables."
  },
  {
    category: "Photographes & Vidéastes",
    description: "Capturer vos moments précieux avec talent et créativité."
  }
];

const testimonials = [
  {
    quote: "L'équipe du Tripot Régnier a su comprendre nos besoins et s'adapter parfaitement. Leur réactivité et leur professionnalisme ont fait toute la différence.",
    author: "Claire Moreau",
    company: "Directrice Générale, Agence Com'Events"
  },
  {
    quote: "Du premier contact jusqu'au jour J, l'accompagnement a été impeccable. Une équipe à l'écoute qui anticipe les moindres détails.",
    author: "Pierre Lefebvre",
    company: "Responsable Communication, BNP Paribas"
  },
  {
    quote: "Un vrai plaisir de travailler avec cette équipe passionnée. Ils ont transformé notre vision en réalité avec brio.",
    author: "Isabelle Roux",
    company: "Organisatrice de mariages"
  }
];

export default function Equipe() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format"
            alt="L'équipe du Tripot Régnier"
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
            Notre <span className="text-[#C9A962]">Équipe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Une équipe passionnée et des partenaires de confiance 
            pour faire de votre événement un moment inoubliable.
          </motion.p>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Notre ADN"
            subtitle="Les valeurs qui nous animent au quotidien"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 text-left group hover:shadow-xl transition-shadow duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-[#0D0D0D] flex items-center justify-center mb-6 group-hover:bg-[#C9A962] transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0D0D0D] mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Nos Partenaires"
            subtitle="Un réseau de professionnels triés sur le volet"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-[#F5F5F0] group hover:bg-[#0D0D0D] transition-colors duration-300"
              >
                <div className="w-1 bg-[#C9A962] self-stretch" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#0D0D0D] group-hover:text-white transition-colors mb-3 tracking-wide">
                    {partner.category}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Ce qu'ils disent de nous"
            subtitle="Des retours clients axés sur la qualité du service"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="Discutez de votre projet avec notre équipe"
        subtitle="Nous sommes à votre écoute pour créer ensemble votre événement sur mesure"
        primaryText="Nous contacter"
        secondaryText="Prendre rendez-vous"
      />
    </div>
  );
}