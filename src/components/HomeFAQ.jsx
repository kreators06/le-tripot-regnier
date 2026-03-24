// ─── HomeFAQ ──────────────────────────────────────────────────────────────────
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '@/components/config/colors';

const faqs = [
  {
    question: "Quelle est la capacité du Tripot Régnier ?",
    answer: "Le Tripot Régnier peut accueillir jusqu'à 500 personnes en configuration cocktail/soirée, 250 en conférence, 220 en dîner assis, et 200 en défilé. Nos espaces modulables s'adaptent à la taille de votre événement.",
  },
  {
    question: "Le Tripot Régnier est-il accessible en voiture ?",
    answer: "Oui, le Tripot Régnier dispose d'une entrée véhicules directe, idéale pour les showrooms automobiles, défilés ou livraisons de matériel. C'est l'un des rares lieux événementiels de Paris à offrir cet avantage.",
  },
  {
    question: "Proposez-vous une restauration sur place ?",
    answer: "Le Tripot Régnier dispose d'un office traiteur entièrement équipé. Nous pouvons vous mettre en relation avec nos partenaires traiteurs privilégiés pour composer le menu idéal selon votre événement.",
  },
  {
    question: "Quels équipements audiovisuels sont inclus ?",
    answer: "Le lieu est équipé en son (système HK Linear 5, console Yamaha, platines Pioneer), lumière (48 projecteurs LED, automatiques Chauvet) et vidéo professionnels (écran 3m x 1,69m, vidéoprojecteur Full HD 6000 lms Panasonic). Une régie dédiée pilote l'ensemble.",
  },
  {
    question: "Comment réserver le Tripot Régnier ?",
    answer: "Vous pouvez nous contacter via notre formulaire en ligne, par téléphone au 06 61 06 07 10, ou par email à contact@letripotregnier.fr. Nous recommandons une visite préalable pour finaliser votre projet. Réponse garantie sous 24h.",
  },
  {
    question: "Quels types d'événements peuvent être organisés au Tripot Régnier ?",
    answer: "Le Tripot Régnier accueille mariages, séminaires, conférences, soirées d'entreprise, showrooms, défilés de mode, tournages, lancements de produits et tout événement sur mesure. Des marques comme L'Oréal, Nike ou Porsche nous ont déjà fait confiance.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-14 px-6 bg-[#F9F9F7]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] tracking-tight mb-3">
            Questions <span style={{ color: COLORS.ACCENT_COLOR }}>fréquentes</span>
          </h2>
          <p className="text-gray-600 text-base">Tout ce que vous devez savoir avant de nous contacter.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#0D0D0D] text-sm md:text-base">{faq.question}</span>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: COLORS.ACCENT_COLOR,
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </p>
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