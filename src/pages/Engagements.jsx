// ─── Engagements ──────────────────────────────────────────────────────────────
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, HandshakeIcon } from 'lucide-react';
import { COLORS } from '@/components/config/colors';
import PageSEO from '@/components/PageSEO';

const pillars = [
  {
    icon: Heart,
    title: "L'Humain",
    description: "Attention portée aux droits fondamentaux, à la qualité de vie au travail, à la sécurité et à des relations basées sur le respect.",
  },
  {
    icon: Users,
    title: "Diversité",
    description: "Encourager l'accès à l'égalité et l'équité au travers du respect de sa Charte Éthique et Déontologique et lutte contre toutes formes de discrimination.",
  },
  {
    icon: HandshakeIcon,
    title: "L'Esprit d'équipe",
    description: "Développer des collaborations solides et responsables avec nos partenaires et clients, dans une logique de cercle vertueux.",
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
    <div className="bg-[#0D0D0D] min-h-screen">
      <PageSEO title="Nos engagements | Le Tripot Régnier" description="Découvrez les engagements RSE du Tripot Régnier : développement durable, économie d'eau, éclairage LED, acoustique professionnelle et qualité de l'air." canonicalPath="/Engagements" />

      {/* ── SECTION 1 — Intro RSE ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wide mb-6 rounded" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20`, color: COLORS.ACCENT_COLOR }}>
              RSE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Le Tripot Régnier<br />
              <span style={{ color: COLORS.ACCENT_COLOR }}>engagé RSE</span>
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Au Tripot Régnier, nous faisons le choix de l'événementiel responsable. Notre démarche RSE s'inscrit au cœur de notre activité afin d'offrir à nos clients et partenaires des réceptions respectueuses de la planète et des personnes.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Porté par Pascal Monti, Directeur du Tripot Régnier et Président d'un groupe de sociétés certifiées Qualité (ISO 9001), Environnement (ISO 14001) et labellisées RSE niveau Exemplaire. Notre politique RSE repose sur trois piliers :
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3 Piliers ─────────────────────────────────────────────────────────── */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-5" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}>
                  <pillar.icon className="w-6 h-6" style={{ color: COLORS.ACCENT_COLOR }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.ACCENT_COLOR }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Actions concrètes ────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Actions <span style={{ color: COLORS.ACCENT_COLOR }}>concrètes</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Au Tripot Régnier, notre engagement en faveur du développement durable se traduit par des actions concrètes.
            </p>
          </motion.div>

          {/* Timeline verticale */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-4 top-0 bottom-0 w-px" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}40` }} />

            <div className="space-y-8">
              {timelineActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-6 pl-0"
                >
                  {/* Point de la timeline */}
                  <div className="relative flex-shrink-0 w-8 flex justify-center">
                    <div className="w-3 h-3 rounded-full mt-1.5 ring-2 ring-offset-2 ring-offset-[#0D0D0D]" style={{ backgroundColor: COLORS.ACCENT_COLOR, ringColor: COLORS.ACCENT_COLOR }} />
                  </div>
                  {/* Contenu */}
                  <div className="pb-2">
                    <h3 className="text-base font-semibold mb-1" style={{ color: COLORS.ACCENT_COLOR }}>
                      {action.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-5">
            <h2 className="text-2xl md:text-4xl text-white font-semibold tracking-tight">Organiser un événement responsable</h2>
            <p className="text-white/60 text-sm">Notre équipe est disponible pour répondre à toutes vos questions.</p>
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