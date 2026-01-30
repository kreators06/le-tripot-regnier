import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Handshake, 
  Leaf, 
  Droplets, 
  Lightbulb,
  Wind,
  Volume2,
  ThermometerSun,
  Gauge
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';

const pillars = [
  {
    icon: Heart,
    title: "L'Humain",
    description: "Nous plaçons l'humain au centre de nos préoccupations. Droits fondamentaux, qualité de vie au travail, sécurité et respect sont les piliers de notre engagement envers nos équipes et nos clients.",
    points: [
      "Respect des droits fondamentaux",
      "Qualité de vie au travail",
      "Sécurité des personnes",
      "Respect mutuel"
    ]
  },
  {
    icon: Users,
    title: "Diversité",
    description: "Nous croyons en l'égalité et l'équité pour tous. Notre charte éthique guide nos actions quotidiennes dans la lutte contre toutes formes de discriminations.",
    points: [
      "Égalité des chances",
      "Équité de traitement",
      "Lutte contre les discriminations",
      "Charte Éthique"
    ]
  },
  {
    icon: Handshake,
    title: "Esprit d'équipe",
    description: "Nous cultivons des collaborations responsables avec nos partenaires et clients, créant un cercle vertueux où chacun contribue à l'excellence collective.",
    points: [
      "Collaborations responsables",
      "Cercle vertueux",
      "Partenariats durables",
      "Excellence collective"
    ]
  }
];

const ecoActions = [
  { icon: Leaf, title: "Développement durable", description: "Engagement environnemental dans toutes nos activités" },
  { icon: Droplets, title: "Économie d'eau", description: "Systèmes optimisés pour réduire la consommation" },
  { icon: Lightbulb, title: "Éclairage LED", description: "100% LED pour une efficacité énergétique maximale" },
  { icon: ThermometerSun, title: "Climatisation réversible", description: "Système performant et économe en énergie" },
  { icon: Gauge, title: "Équipements à détection", description: "Automatisation intelligente des ressources" }
];

export default function Engagements() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format"
            alt="Nos engagements RSE Le Tripot Régnier"
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
            Nos <span className="text-[#4A5568]">Engagements</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Un positionnement RSE fort pour un événementiel responsable. 
            Nous croyons qu'il est possible de créer des événements mémorables 
            tout en respectant notre planète et les personnes qui y vivent.
          </motion.p>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Nos 3 Piliers"
            subtitle="Les valeurs fondamentales qui guident notre action au quotidien"
            align="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#4A5568]" />
                
                <div className="w-16 h-16 bg-[#0D0D0D] flex items-center justify-center mb-6 group-hover:bg-[#4A5568] transition-colors duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-4 tracking-wide text-left">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-left">
                  {pillar.description}
                </p>
                
                <ul className="space-y-2 text-left">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#4A5568]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions Concrètes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Actions Concrètes"
            subtitle="Des mesures tangibles pour un impact réel"
            align="left"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {ecoActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-left p-6 bg-[#F5F5F0] group hover:bg-[#0D0D0D] transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-[#4A5568]/20 flex items-center justify-center mb-4 group-hover:bg-[#4A5568]/30 transition-colors">
                  <action.icon className="w-7 h-7 text-[#4A5568]" />
                </div>
                <h3 className="font-medium text-[#0D0D0D] group-hover:text-white transition-colors mb-2 text-sm">
                  {action.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors text-xs">
                  {action.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualité Air & Acoustique */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Qualité de l'air */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <Wind className="w-12 h-12 text-[#4A5568] mb-6" />
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-wide">
                Qualité de l'Air
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nous accordons une importance primordiale à la qualité de l'air dans nos espaces. 
                Notre système de ventilation CTA est équipé de détecteurs CO2 permettant 
                un renouvellement régulier et automatisé de l'air.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#4A5568]" />
                  Système CTA avec détecteurs CO2
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#4A5568]" />
                  Renouvellement automatisé
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#4A5568]" />
                  Traitement de l'air optimisé
                </li>
              </ul>
            </motion.div>

            {/* Acoustique */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <Volume2 className="w-12 h-12 text-[#4A5568] mb-6" />
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-wide">
                Acoustique Soignée
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Notre salle dispose d'un traitement acoustique professionnel. 
                L'ensemble du dispositif anti-vibratile a été validé par un ingénieur acousticien 
                pour garantir une expérience sonore optimale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#4A5568]" />
                  Salle anti-vibratile certifiée
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#4A5568]" />
                  Validation ingénieur acousticien
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 bg-[#4A5568]" />
                  Isolation phonique premium
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner 
        title="Partagez nos valeurs ?"
        subtitle="Organisez votre événement dans un lieu responsable et engagé"
        variant="light"
      />
    </div>
  );
}