// ─── TrustSignals ─────────────────────────────────────────────────────────────
// Grille 5×2 des équipements du Tripot Régnier

import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  Car,
  Shirt,
  Monitor,
  Utensils,
  Star,
  Coffee,
  Thermometer,
  Wind,
  Wifi,
  ArrowRight,
} from 'lucide-react';
import { COLORS } from '@/components/config/colors';

const equipments = [
  {
    icon: Car,
    title: "Entrée voiture",
    description: "Jusqu'à 4 voitures dans la salle",
  },
  {
    icon: Shirt,
    title: "Vestiaire équipé",
    description: "Capacité 450 personnes",
  },
  {
    icon: Monitor,
    title: "Matériel audiovisuel",
    description: "Son, lumière, vidéo pro",
  },
  {
    icon: Utensils,
    title: "Office traiteur",
    description: "Cuisine professionnelle",
  },
  {
    icon: Star,
    title: "Loge aménagée",
    description: "Avec accès privatif",
  },
  {
    icon: Coffee,
    title: "Bar",
    description: "Service professionnel",
  },
  {
    icon: Thermometer,
    title: "Chauffage / Clim",
    description: "Réversible et économique",
  },
  {
    icon: Wind,
    title: "Fumoir",
    description: "Espace intérieur dédié",
  },
  {
    icon: Wifi,
    title: "WiFi — Fibre optique",
    description: "Très haut débit",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">
            Le lieu en détail
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] tracking-tight">
            Nos <span style={{ color: COLORS.ACCENT_COLOR }}>Équipements</span>
          </h2>
        </motion.div>

        {/* Grille 5 colonnes × 2 lignes — mobile 2 colonnes */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {equipments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 flex-shrink-0"
                  style={{ backgroundColor: `${COLORS.ACCENT_COLOR}18` }}
                >
                  <Icon className="w-5 h-5" style={{ color: COLORS.ACCENT_COLOR }} />
                </div>
                <p className="text-sm font-semibold text-[#0D0D0D] leading-tight">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}

          {/* 10e item — lien vers Espaces & Équipements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.36, duration: 0.3 }}
          >
            <Link
              to={createPageUrl('Capacites')}
              className="flex flex-col items-center justify-center text-center p-5 rounded-xl border-2 h-full transition-all duration-300 group"
              style={{ borderColor: COLORS.ACCENT_COLOR, color: COLORS.ACCENT_COLOR }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.ACCENT_COLOR;
              }}
            >
              <span className="text-sm font-semibold leading-snug">
                Voir tous nos équipements
              </span>
              <ArrowRight className="w-4 h-4 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}