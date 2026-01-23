import React from 'react';
import { motion } from 'framer-motion';

export default function PolitiqueConfidentialite() {
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
            Politique de <span className="text-[#C9A962]">Confidentialité</span>
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
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">1. Collecte des données personnelles</h2>
              <p className="text-gray-700 leading-relaxed">
                Le Tripot Régnier collecte des données personnelles lorsque vous utilisez notre site web, 
                notamment via le formulaire de contact. Les données collectées peuvent inclure :
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Message et informations relatives à votre projet</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">2. Utilisation des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Les données personnelles collectées sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Vous informer sur nos services et événements</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">3. Base légale du traitement</h2>
              <p className="text-gray-700 leading-relaxed">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Votre consentement lors de l'envoi du formulaire de contact</li>
                <li>L'exécution de mesures précontractuelles ou contractuelles</li>
                <li>Notre intérêt légitime à développer notre activité</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">4. Conservation des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont conservées pendant une durée de 3 ans à compter de votre 
                dernier contact avec nous, sauf obligation légale de conservation plus longue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">5. Partage des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles ne sont pas vendues ni louées à des tiers. Elles peuvent être 
                partagées avec nos prestataires techniques dans le cadre strict de l'exécution de nos services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">6. Vos droits</h2>
              <p className="text-gray-700 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation du traitement de vos données</li>
                <li><strong>Droit de rectification :</strong> faire corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@tripotregnier.fr</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">7. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez 
                paramétrer votre navigateur pour refuser les cookies. Pour plus d'informations, consultez 
                notre politique de cookies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">8. Sécurité</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">9. Contact et réclamation</h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question relative à cette politique, contactez-nous :<br />
                <strong>Email :</strong> contact@tripotregnier.fr<br /><br />
                Vous avez également le droit d'introduire une réclamation auprès de la CNIL 
                (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}