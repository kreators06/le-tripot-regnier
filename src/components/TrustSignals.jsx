import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  Zap, 
  Users, 
  Accessibility, 
  ShoppingCart 
} from 'lucide-react';
import { COLORS } from '@/components/config/colors';

const signals = [
  {
    icon: Building2,
    title: "Patrimoine 1904",
    description: "Bâtiment historique aux accents Art Déco et Industriel"
  },
  {
    icon: Users,
    title: "Capacité 450 pers.",
    description: "700m² modulables adaptables à tous les formats"
  },
  {
    icon: Accessibility,
    title: "100% Accessibilité",
    description: "Conforme normes ERP et PMR avec ascenseur dédié"
  },
  {
    icon: Zap,
    title: "Infra Technique Lourde",
    description: "Mur LED immersif, audiovisuel pro, climatisation réversible"
  },
  {
    icon: ShoppingCart,
    title: "Cuisine Professionnelle",
    description: "Équipement complet avec chambres froides et bar"
  },
  {
    icon: CheckCircle2,
    title: "Accès Véhicule",
    description: "Lancements automobiles et expositions directes en salle"
  }
];

export default function TrustSignals() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">
            Avantages Exclusifs
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] tracking-tight">
            Capacités <span style={{ color: COLORS.ACCENT_COLOR }}>Distinc</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 bg-white hover:bg-gray-50">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS.ACCENT_COLOR}15` }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: COLORS.ACCENT_COLOR }} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">
                      {signal.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}