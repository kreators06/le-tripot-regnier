// ─── FAQAccordion ─────────────────────────────────────────────────────────────
// Accordéon FAQ — questions fréquentes sur le Tripot Régnier

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '@/components/config/colors';

const faqItems = [
  {
    question: "Peut-on accéder à la salle avec un véhicule ?",
    answer: "Oui, l'accès direct par véhicule est possible. La salle principale dispose d'une capacité de passage permettant les lancements automobiles et expositions de véhicules de luxe. Les dimensions intérieures permettent l'accès à des véhicules de grandes dimensions."
  },
  {
    question: "Le lieu est-il accessible PMR ?",
    answer: "Le Tripot Régnier est entièrement conforme aux normes d'accessibilité ERP et PMR. Nous disposons d'un ascenseur dédié, toilettes accessibles, accès de plain-pied à tous les espaces publics, et espaces de stationnement PMR à proximité."
  },
  {
    question: "Quelle est la puissance électrique disponible ?",
    answer: "Notre infrastructure électrique est conçue pour supporter les besoins techniques lourds : mur LED immersif haute définition, systèmes audiovisuels professionnels multichannel, éclairage architectural programmable, climatisation réversible et équipements traiteur complets."
  },
  {
    question: "Y a-t-il des services de traiteur disponibles ?",
    answer: "Notre cuisine professionnelle est entièrement équipée avec chambre froide, fourneaux, plan de travail professionnel et espace de service. Un bar aménagé avec espace fumeurs intégré complète l'offre gastronomique."
  },
  {
    question: "Quelles sont les dimensions exactes de la salle ?",
    answer: "Le Tripot Régnier dispose de 700m² modulables : salle principale de 400m² pouvant accueillir jusqu'à 450 personnes, mezzanine panoramique de 65m², hall d'accueil indépendant de 90m², plus loge privée, lounge, vestiaire et bar aménagé."
  },
  {
    question: "Peut-on privatiser le lieu complètement ?",
    answer: "Oui, le lieu peut être entièrement privatisé pour vos événements. Nos espaces modulables permettent de créer des configurations sur mesure adaptées à votre événement : séminaires, lancements produits, réceptions, soirées ou conférences."
  }
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 px-6 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 font-light">
            Questions Fréquentes
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] tracking-tight">
            Tout savoir sur le <span style={{ color: COLORS.ACCENT_COLOR }}>Tripot Régnier</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 text-left"
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-base md:text-lg font-semibold text-[#0D0D0D] pr-6">
                  {item.question}
                </h3>
                <ChevronDown 
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: COLORS.ACCENT_COLOR,
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}