// ─── Contact ──────────────────────────────────────────────────────────────────
// Page de contact et réservation du Tripot Régnier

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { COLORS } from "@/components/config/colors";
import { IMAGES } from "@/components/config/images";
import { SOCIAL } from "@/components/config/social";
import PageSEO from "@/components/PageSEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    phone: "",
    societe: "",
    message: "",
    consentement: false,
  });
  const recaptchaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      const playVideo = () => video.play().catch(() => {});
      if (video.readyState >= 3) {
        playVideo();
      } else {
        video.addEventListener("canplay", playVideo, { once: true });
      }
      video.load();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const recaptchaToken = recaptchaRef.current
      ? recaptchaRef.current.querySelector('[name="g-recaptcha-response"]')?.value || ""
      : "";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "REMPLACER_PAR_VOTRE_CLE",
        subject: "Nouvelle demande de contact - Le Tripot Régnier",
        from_name: "Site Le Tripot Régnier",
        prénom: formData.prenom,
        nom: formData.nom,
        email: formData.email,
        téléphone: formData.phone,
        société: formData.societe,
        message: formData.message,
        "g-recaptcha-response": recaptchaToken,
      }),
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (data.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ prenom: "", nom: "", email: "", phone: "", societe: "", message: "" });
      }, 5000);
    } else {
      setSubmitError("Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.");
    }
  };

  return (
    <div>
      <PageSEO
        title="Contact | Le Tripot Régnier"
        canonicalPath="/Contact"
        description="Contactez Le Tripot Régnier pour organiser votre événement à Paris 15e. Devis gratuit, équipe dédiée."
      />

      {/* ── Hero avec vidéo ────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={IMAGES.heroPoster}
            className="w-full h-full object-cover"
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Organisez un événement<br />à votre image
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/95"
          >
            Notre équipe est disponible pour répondre à toutes vos questions.
          </motion.p>
        </div>
      </section>

      {/* ── Formulaire + Coordonnées ───────────────────────────────────────── */}
      <section className="py-10 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

            {/* Colonne gauche — Formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col"
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-2">
                  Nous contacter
                </h2>
                <p className="text-gray-600">Notre équipe vous répondra dans les plus brefs délais.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border-2 rounded-xl p-8 text-center flex-1 flex flex-col items-center justify-center"
                  style={{ borderColor: COLORS.ACCENT_COLOR, backgroundColor: `${COLORS.ACCENT_COLOR}10` }}
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: COLORS.ACCENT_COLOR }} />
                  <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">Merci, votre message a bien été envoyé. Notre équipe vous répondra dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom" className="text-[#0D0D0D] font-medium text-sm">Prénom *</Label>
                      <Input id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required placeholder="Votre prénom" className="border-gray-300 py-2.5 placeholder:text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="text-[#0D0D0D] font-medium text-sm">Nom *</Label>
                      <Input id="nom" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" className="border-gray-300 py-2.5 placeholder:text-gray-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0D0D0D] font-medium text-sm">E-mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" className="border-gray-300 py-2.5 placeholder:text-gray-500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0D0D0D] font-medium text-sm">Téléphone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="06 12 34 56 78" className="border-gray-300 py-2.5 placeholder:text-gray-500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="societe" className="text-[#0D0D0D] font-medium text-sm">Société</Label>
                    <Input id="societe" name="societe" value={formData.societe} onChange={handleChange} placeholder="Votre société" className="border-gray-300 py-2.5 placeholder:text-gray-500" />
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="message" className="text-[#0D0D0D] font-medium text-sm">Votre message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-gray-300 resize-none flex-1"
                      placeholder="Merci d'indiquer la date de l'événement, les horaires et le nombre de personnes"
                    />
                  </div>

                  {/* Consentement RGPD */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consentement"
                      checked={formData.consentement}
                      onChange={(e) => setFormData({ ...formData, consentement: e.target.checked })}
                      required
                      className="mt-1 w-4 h-4 flex-shrink-0 cursor-pointer accent-[#d4b351ff]"
                    />
                    <label htmlFor="consentement" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                      J'accepte que mes données personnelles soient traitées par Le Tripot Régnier dans le cadre de ma demande de contact, conformément à la{' '}
                      <a href="/PolitiqueConfidentialite" className="underline hover:text-gray-900" style={{ color: COLORS.ACCENT_COLOR }}>
                        politique de confidentialité
                      </a>. *
                    </label>
                  </div>

                  {submitError && <p className="text-red-500 text-sm">{submitError}</p>}

                  {/* reCAPTCHA v2 */}
                  <div ref={recaptchaRef}>
                    <div
                      className="g-recaptcha"
                      data-sitekey="REMPLACER_PAR_VOTRE_SITE_KEY"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.consentement}
                    className="w-full text-white py-4 text-base font-semibold tracking-wide rounded-lg transition-all"
                    style={{ backgroundColor: COLORS.ACCENT_COLOR, borderColor: COLORS.ACCENT_COLOR }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR_HOVER; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR; }}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin inline" />Envoi en cours...</>
                    ) : (
                      <><Send className="w-5 h-5 mr-2 inline" />Envoyer</>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Colonne droite — Coordonnées + Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-8 pb-4">
                <h2 className="text-2xl font-bold text-[#0D0D0D] mb-5">Nos coordonnées</h2>

                <div className="mb-3">
                  <p className="text-base font-bold text-[#0D0D0D] tracking-wide uppercase">LE TRIPOT RÉGNIER</p>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 text-sm">10 – 12 rue Mathurin Régnier, 75015 Paris</p>
                  <a href="tel:+33661060710" className="flex items-center gap-2 text-sm text-[#0D0D0D] font-medium hover:underline">
                    <Phone className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.ACCENT_COLOR }} />
                    06.61.06.07.10
                  </a>
                </div>

                <a
                  href="mailto:contact@letripotregnier.fr"
                  className="flex items-center gap-2 text-sm text-[#0D0D0D] font-medium hover:underline mb-5"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.ACCENT_COLOR }} />
                  contact@letripotregnier.fr
                </a>

                {/* Social */}
                <div className="flex gap-3 pb-4 border-b border-gray-100">
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4 text-[#0D0D0D]" />
                  </a>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 text-[#0D0D0D]" />
                  </a>
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4 text-[#0D0D0D]" />
                  </a>
                </div>
              </div>

              {/* Google Maps — remplit le reste de la tuile */}
              <div className="flex-1 min-h-[260px]">
                <iframe
                  title="Le Tripot Régnier — Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5817764894!2d2.298834!3d48.840983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e670dcb3a3e7b3%3A0x1ac10b5e6c2de456!2s10%20Rue%20Mathurin%20R%C3%A9gnier%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: '260px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Privateaser Widget ────────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
            style={{ border: `3px solid ${COLORS.ACCENT_COLOR}` }}
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-3">Privatiser la salle</h2>
              <p className="text-gray-600">Choisissez votre créneau et venez découvrir Le Tripot Régnier</p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg" style={{ height: "600px" }}>
              <iframe
                src="https://prvt.re/wypgGL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Module de réservation Le Tripot Régnier"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}