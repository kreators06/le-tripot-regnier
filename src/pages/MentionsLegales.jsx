import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

export default function MentionsLegales() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white font-semibold tracking-wide mb-4"
          >
            Mentions <span className="text-[#4A5568]">Légales</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">1. Éditeur du site</h2>
              <div className="bg-[#F5F5F0] p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Raison sociale :</strong> Le Tripot Régnier SAS</p>
                <p className="text-gray-700 mb-2"><strong>Siège social :</strong> Paris 15ème arrondissement, 75015 Paris, France</p>
                <p className="text-gray-700 mb-2"><strong>SIRET :</strong> 000 000 000 00000</p>
                <p className="text-gray-700 mb-2"><strong>Capital social :</strong> 10 000 €</p>
                <p className="text-gray-700 mb-2"><strong>Numéro TVA :</strong> FR 00 000000000</p>
                <p className="text-gray-700 mb-2"><strong>Directeur de la publication :</strong> [Nom du directeur]</p>
                <p className="text-gray-700"><strong>Contact :</strong> contact@tripotregnier.fr</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">2. Hébergement</h2>
              <div className="bg-[#F5F5F0] p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                <p className="text-gray-700 mb-2"><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                <p className="text-gray-700"><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est la propriété exclusive de Le Tripot Régnier ou de ses partenaires et est protégé par les 
                lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf 
                autorisation écrite préalable de Le Tripot Régnier.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">4. Responsabilité</h2>
              <p className="text-gray-700 leading-relaxed">
                Le Tripot Régnier s'efforce de fournir des informations aussi précises que possible sur ce site. 
                Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences 
                dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui 
                fournissent ces informations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">5. Liens hypertextes</h2>
              <p className="text-gray-700 leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites. Le Tripot Régnier n'exerce 
                aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">6. Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">7. Crédits</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Conception et réalisation :</strong> [Nom de l'agence/développeur]<br />
                <strong>Crédits photos :</strong> [Nom du photographe] / Unsplash
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}