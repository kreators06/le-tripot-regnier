import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { base44 } from '@/api/base44Client';
import { MapPin, Phone, Mail, Send, CheckCircle, Loader2, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { COLORS } from '@/components/config/colors';
import { IMAGES } from '@/components/config/images';
import PageSEO from '@/components/PageSEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '',
    societe: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef();
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
        video.addEventListener('canplay', playVideo, { once: true });
      }
      video.load();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Veuillez valider le captcha');
      return;
    }
    setIsSubmitting(true);
    try {
      await base44.integrations.Core.SendEmail({
        to: 'axel.duret@polairestudios.com',
        subject: 'Nouveau message de contact',
        body: `Prénom: ${formData.prenom}\nNom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nSociété: ${formData.societe}\n\nMessage:\n${formData.message}`
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ prenom: '', nom: '', email: '', phone: '', societe: '', message: '' });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <PageSEO title="Contact & Réservation" description="Contactez Le Tripot Régnier pour privatiser notre salle événementielle de 700m². 10-12 rue Mathurin Régnier, 75015 Paris." />

      {/* Hero Banner with Video */}
      <section className="relative py-32 px-6 overflow-hidden min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <video ref={videoRef} autoPlay loop muted playsInline preload="metadata" poster={IMAGES.home.heroPoster} className="w-full h-full object-cover">
            <source src={IMAGES.home.heroVideo} type="video/mp4" />
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
            Organisez un événement à votre image
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

      {/* Contact Form + Info */}
      <section className="py-20 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-2">Nous contacter</h2>
                <p className="text-gray-600">Notre équipe vous répondra dans les plus brefs délais.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border-2 rounded-xl p-8 text-center"
                  style={{ borderColor: COLORS.ACCENT_COLOR, backgroundColor: `${COLORS.ACCENT_COLOR}10` }}
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: COLORS.ACCENT_COLOR }} />
                  <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">Nous vous répondrons rapidement.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom" className="text-[#0D0D0D] font-medium text-sm">Prénom *</Label>
                      <Input id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required placeholder="Votre prénom" className="border-gray-300 py-2.5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="text-[#0D0D0D] font-medium text-sm">Nom *</Label>
                      <Input id="nom" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" className="border-gray-300 py-2.5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0D0D0D] font-medium text-sm">E-mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" className="border-gray-300 py-2.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0D0D0D] font-medium text-sm">Téléphone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="06 12 34 56 78" className="border-gray-300 py-2.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="societe" className="text-[#0D0D0D] font-medium text-sm">Société</Label>
                    <Input id="societe" name="societe" value={formData.societe} onChange={handleChange} placeholder="Votre société" className="border-gray-300 py-2.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0D0D0D] font-medium text-sm">Votre message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-gray-300 resize-none"
                      placeholder="Merci d'indiquer la date de l'événement, les horaires et le nombre de personnes"
                    />
                  </div>
                  <div className="flex justify-center pt-1">
                    <ReCAPTCHA ref={recaptchaRef} sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={(t) => setCaptchaToken(t)} />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-4 text-base font-semibold tracking-wide rounded-lg transition-all"
                    style={{ backgroundColor: COLORS.ACCENT_COLOR, borderColor: COLORS.ACCENT_COLOR }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR_HOVER; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR; }}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin inline" />Envoi...</>
                    ) : (
                      <><Send className="w-5 h-5 mr-2 inline" />Envoyer</>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#0D0D0D] mb-6">Nos coordonnées</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0D0D0D] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <MapPin className="w-5 h-5" style={{ color: COLORS.ACCENT_COLOR }} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D0D0D]">LE TRIPOT RÉGNIER</p>
                      <p className="text-gray-600 text-sm">10 – 12 rue Mathurin Régnier</p>
                      <p className="text-gray-600 text-sm">75015 PARIS</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0D0D0D] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Phone className="w-5 h-5" style={{ color: COLORS.ACCENT_COLOR }} />
                    </div>
                    <a href="tel:+33661060710" className="text-[#0D0D0D] font-medium hover:underline">06.61.06.07.10</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0D0D0D] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Mail className="w-5 h-5" style={{ color: COLORS.ACCENT_COLOR }} />
                    </div>
                    <a href="mailto:contact@letripotregnier.fr" className="text-[#0D0D0D] font-medium hover:underline">contact@letripotregnier.fr</a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4 font-medium">Suivez-nous</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5 text-[#0D0D0D]" />
                    </a>
                    <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5 text-[#0D0D0D]" />
                    </a>
                    <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors" aria-label="Facebook">
                      <Facebook className="w-5 h-5 text-[#0D0D0D]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privateaser Widget */}
      <section className="py-20 px-6 bg-white">
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
            <div className="bg-white rounded-xl overflow-hidden shadow-lg" style={{ height: '600px' }}>
              <iframe src="https://prvt.re/wypgGL" width="100%" height="100%" style={{ border: 0 }} title="Module de réservation Le Tripot Régnier" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}