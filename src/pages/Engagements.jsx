// ─── Engagements ──────────────────────────────────────────────────────────────
// Page engagements RSE du Tripot Régnier

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  HandshakeIcon, 
  Leaf, 
  Droplet, 
  Lightbulb,
  Wind,
  Volume2,
  Thermometer,
  Sliders
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CTABanner from '@/components/ui/CTABanner';
import { COLORS } from '@/components/config/colors';
import PageSEO from '@/components/PageSEO';

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
    icon: HandshakeIcon,
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
  { icon: Droplet, title: "Économie d'eau", description: "Systèmes optimisés pour réduire la consommation" },
  { icon: Lightbulb, title: "Éclairage LED", description: "100% LED pour une efficacité énergétique maximale" },
  { icon: Thermometer, title: "Climatisation réversible", description: "Système performant et économe en énergie" },
  { icon: Sliders, title: "Équipements à détection", description: "Automatisation intelligente des ressources" }
];

export default function Engagements() {
  return (
    <div className="pt-20">
      <PageSEO title="Nos engagements | Le Tripot Régnier" description="Découvrez les engagements RSE du Tripot Régnier : développement durable, économie d'eau, éclairage LED, acoustique professionnelle et qualité de l'air." />
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://letripotregnier.fr/assets/photos/photo-salle-vide.jpg"
            alt="Salle événementielle Le Tripot Régnier"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl text-white font-bold tracking-tight mb-6"
          >
            Nos <span style={{ color: COLORS.ACCENT_COLOR }}>Engagements</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/90 leading-relaxed"
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
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-white p-8 relative group overflow-hidden rounded-lg"
              >
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                
                <div 
                  className="w-16 h-16 bg-[#0D0D0D] flex items-center justify-center mb-6 transition-colors duration-300 rounded-lg"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D0D0D'}
                >
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
                      <span className="w-1.5 h-1.5" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
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
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="text-left p-6 bg-[#F5F5F0] group hover:bg-[#0D0D0D] transition-colors duration-300 rounded-lg"
              >
                <div 
                  className="w-14 h-14 flex items-center justify-center mb-4 transition-colors rounded-lg"
                  style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${COLORS.ACCENT_COLOR}30`}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${COLORS.ACCENT_COLOR}20`}
                >
                  <action.icon className="w-7 h-7" style={{ color: COLORS.ACCENT_COLOR }} />
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="text-left"
            >
              <Wind className="w-12 h-12 mb-6" style={{ color: COLORS.ACCENT_COLOR }} />
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
                  <span className="w-2 h-2" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                  Système CTA avec détecteurs CO2
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                  Renouvellement automatisé
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                  Traitement de l'air optimisé
                </li>
              </ul>
            </motion.div>

            {/* Acoustique */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="text-left"
            >
              <Volume2 className="w-12 h-12 mb-6" style={{ color: COLORS.ACCENT_COLOR }} />
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
                  <span className="w-2 h-2" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                  Salle anti-vibratile certifiée
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                  Validation ingénieur acousticien
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                  Isolation phonique premium
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slim CTA */}
      <section className="py-12 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl text-white font-semibold tracking-tight text-center sm:text-left">
              Venez découvrir le lieu
            </h2>
            <Link
              to="/Contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0D0D0D] font-semibold tracking-wide text-sm hover:text-white transition-all duration-300 rounded-md flex-shrink-0"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4b351ff'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#0D0D0D'; }}
            >
              NOUS CONTACTER
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}