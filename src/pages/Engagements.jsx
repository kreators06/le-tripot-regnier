// ─── Engagements ──────────────────────────────────────────────────────────────
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Users, Heart } from 'lucide-react';
import { COLORS } from '@/components/config/colors';
import PageSEO from '@/components/PageSEO';

const engagementCards = [
  {
    icon: Leaf,
    title: "Économie des ressources",
    description: "Nous contrôlons la consommation au sein de l'établissement afin de réduire notre empreinte carbone.",
    items: [
      "Tri sélectif quotidien",
      "Équipements économes",
      "Éclairage 100 % LED",
      "Détection automatique de mouvement",
      "Climatisation réversible",
      "Détecteurs de CO2 & renouvellement de l'air automatique",
    ],
  },
  {
    icon: Users,
    title: "Partenaires responsables",
    description: "Fidèles à nos valeurs, nous faisons le choix de privilégier des partenaires qui partagent nos valeurs.",
    items: [
      "Priorité aux filières biologiques, locales et équitables",
      "Sélection de partenaires engagés dans des pratiques durables et transparentes",
      "Valorisation des circuits courts et du travail des producteurs",
    ],
  },
  {
    icon: Heart,
    title: "L'Humain",
    description: "Nous plaçons l'humain au centre de nos préoccupations. Droits fondamentaux, qualité de vie au travail, sécurité et respect sont les piliers de notre engagement envers nos équipes et nos clients.",
    items: [
      "Respect des droits fondamentaux",
      "Qualité de vie au travail",
      "Sécurité des personnes",
      "Respect mutuel",
    ],
  },
];

const timelineActions = [
  {
    title: "Économie de nos ressources : eau et énergie",
    description: "Équipements économes, détection automatique de mouvement, éclairage 100% LED, climatisation réversible.",
  },
  {
    title: "Qualité de l'air & acoustique",
    description: "Salle anti-vibratile, acoustique adaptée par un ingénieur acousticien. CTA avec détecteurs de CO2 pour renouveler l'air.",
  },
  {
    title: "Contrôle de la consommation énergétique",
    description: "Évaluer et contrôler la consommation des énergies afin de contrôler notre empreinte carbone.",
  },
  {
    title: "Tri et recyclage",
    description: "Tri sélectif quotidien pour préserver les ressources, réduire le gaspillage et les émissions de gaz à effet de serre.",
  },
  {
    title: "Partenaires responsables",
    description: "Priorité aux filières bio, locales et équitables, en cohérence avec nos valeurs.",
  },
];

export default function Engagements() {
  return (
    <div className="bg-[#F9F9F7] min-h-screen">
      <PageSEO
        title="Nos engagements | Le Tripot Régnier"
        description="Les engagements RSE du Tripot Régnier : événementiel responsable, économie d'énergie, partenaires locaux et tri sélectif."
        canonicalPath="/Engagements"
      />

      {/* ── Section principale ─────────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Colonne gauche — Titre (~40%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <h1 className="text-3xl md:text-5xl font-semibold text-[#0D0D0D] tracking-tight mb-4">
                Nos <span style={{ color: COLORS.ACCENT_COLOR }}>engagements</span>
              </h1>
              <p className="text-gray-600 leading-relaxed text-base">
                Le Tripot Régnier est engagé en faveur du développement durable.
              </p>
            </motion.div>

            {/* Colonne droite — 3 cartes (~60%) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              {engagementCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
                  >
                    {/* Icône */}
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl mb-5 flex-shrink-0"
                      style={{ backgroundColor: '#0D0D0D' }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Titre */}
                    <h2 className="text-base font-bold text-[#0D0D0D] mb-3">{card.title}</h2>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{card.description}</p>

                    {/* Liste à puces dorées */}
                    <ul className="space-y-2 mt-auto">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                          <span className="text-[#0D0D0D]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Actions concrètes ────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0D0D0D] mb-4 tracking-tight">
              Actions <span style={{ color: COLORS.ACCENT_COLOR }}>concrètes</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Au Tripot Régnier, notre engagement en faveur du développement durable se traduit par des actions concrètes.
            </p>
          </motion.div>

          {/* Timeline verticale */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}40` }} />
            <div className="space-y-8">
              {timelineActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-6 pl-0"
                >
                  <div className="relative flex-shrink-0 w-8 flex justify-center">
                    <div className="w-3 h-3 rounded-full mt-1.5 ring-2 ring-offset-2 ring-offset-white" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
                  </div>
                  <div className="pb-2">
                    <h3 className="text-base font-semibold mb-1" style={{ color: COLORS.ACCENT_COLOR }}>
                      {action.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{action.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-gray-100" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="flex flex-col items-center gap-5">
            <h2 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">Organiser un événement responsable</h2>
            <p className="text-white/80 text-sm">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 px-8 py-3 font-semibold tracking-wide text-sm rounded-full border-2 bg-transparent transition-all duration-300"
              style={{ borderColor: COLORS.ACCENT_COLOR, color: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.ACCENT_COLOR; }}
            >
              NOUS CONTACTER <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}