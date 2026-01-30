import React from 'react';
import { motion } from 'framer-motion';

export default function CGU() {
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
            Conditions Générales <span className="text-[#ff8c5a]">d'Utilisation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300"
          >
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </motion.p>
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
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 1 - Objet</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les 
                modalités et conditions d'utilisation du site internet tripotregnier.fr (ci-après "le Site"), 
                ainsi que de définir les droits et obligations des parties dans ce cadre.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 2 - Acceptation des CGU</h2>
              <p className="text-gray-700 leading-relaxed">
                L'accès et l'utilisation du Site sont soumis à l'acceptation et au respect des présentes CGU. 
                L'utilisateur reconnaît avoir pris connaissance des présentes CGU et les accepter sans réserve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 3 - Accès au Site</h2>
              <p className="text-gray-700 leading-relaxed">
                Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
                Tous les coûts afférents à l'accès au Site (matériel informatique, logiciels, connexion Internet, etc.) 
                sont à la charge de l'utilisateur.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Le Tripot Régnier met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès 
                de qualité au Site, mais n'est tenu à aucune obligation d'y parvenir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 4 - Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed">
                Tous les éléments du Site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
                sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation, 
                modification, publication, transmission, dénaturation, totale ou partielle du Site ou de son contenu, 
                par quelque procédé que ce soit, et sur quelque support que ce soit est interdite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 5 - Responsabilité</h2>
              <p className="text-gray-700 leading-relaxed">
                Le Tripot Régnier décline toute responsabilité en cas de :
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Interruption du Site pour des opérations de maintenance technique ou de mise à jour</li>
                <li>Impossibilité momentanée d'accès au Site en raison de problèmes techniques</li>
                <li>Dommages résultant de l'utilisation du Site ou de l'impossibilité de l'utiliser</li>
                <li>Dommages causés par des virus informatiques</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 6 - Données personnelles</h2>
              <p className="text-gray-700 leading-relaxed">
                Le traitement des données personnelles est régi par notre Politique de Confidentialité, 
                accessible depuis le Site. En utilisant le Site, l'utilisateur consent au traitement de ses 
                données personnelles conformément à cette politique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 7 - Liens hypertextes</h2>
              <p className="text-gray-700 leading-relaxed">
                Le Site peut contenir des liens vers d'autres sites internet. Le Tripot Régnier n'exerce aucun 
                contrôle sur ces sites et ne saurait être tenu responsable de leur contenu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 8 - Modification des CGU</h2>
              <p className="text-gray-700 leading-relaxed">
                Le Tripot Régnier se réserve le droit de modifier les présentes CGU à tout moment. 
                Les modifications prennent effet dès leur publication sur le Site. L'utilisateur est invité 
                à consulter régulièrement les CGU.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">Article 9 - Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation 
                et/ou à leur exécution relève des tribunaux français compétents.
              </p>
              <div className="bg-[#F5F5F0] p-6 rounded-lg mt-6">
                <p className="text-gray-700">
                  <strong>Contact :</strong><br />
                  Le Tripot Régnier<br />
                  Paris 15ème arrondissement, 75015 Paris<br />
                  Email : contact@tripotregnier.fr
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}