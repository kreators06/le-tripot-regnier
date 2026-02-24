import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { base44 } from '@/api/base44Client';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { Label } from '@/components/ui/label';
import SectionTitle from '@/components/ui/SectionTitle';
import { COLORS } from '@/components/config/colors';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "LE TRIPOT RÉGNIER",
    subContent: "10 – 12 rue Mathurin Régnier 75015 PARIS"
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 45 26 04 58",
    subContent: "Du lundi au vendredi"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@letripotregnier.fr",
    subContent: "Réponse sous 24h"
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "9h - 19h",
    subContent: "Lundi - Vendredi"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        body: `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: `linear-gradient(135deg, ${COLORS.ACCENT_COLOR} 0%, ${COLORS.ACCENT_COLOR_HOVER} 100%)` }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Réservez votre visite
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Découvrez nos espaces de 700m² et imaginez votre événement
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Booking Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
              style={{ border: `3px solid ${COLORS.ACCENT_COLOR}` }}
            >
              <div className="mb-6">
                <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: `${COLORS.ACCENT_COLOR}20` }}>
                  <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.ACCENT_COLOR }}>
                    Étape 1
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-3">
                  Planifiez votre visite
                </h2>
                <p className="text-gray-600">
                  Choisissez votre créneau et venez découvrir Le Tripot Régnier
                </p>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg" style={{ height: '600px' }}>
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

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <div className="inline-block px-4 py-2 rounded-full mb-4 bg-gray-100">
                  <span className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                    Étape 2
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-3">
                  Posez vos questions
                </h2>
                <p className="text-gray-600">
                  Des questions ? Contactez-nous directement
                </p>
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0D0D0D] font-medium text-sm">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      style={{ '--tw-ring-color': COLORS.ACCENT_COLOR }}
                      className="border-gray-300 focus:border-[currentColor] focus:ring-[currentColor] py-2.5"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#0D0D0D] font-medium text-sm">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        style={{ '--tw-ring-color': COLORS.ACCENT_COLOR }}
                        className="border-gray-300 focus:border-[currentColor] focus:ring-[currentColor] py-2.5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#0D0D0D] font-medium text-sm">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="06 12 34 56 78"
                        style={{ '--tw-ring-color': COLORS.ACCENT_COLOR }}
                        className="border-gray-300 focus:border-[currentColor] focus:ring-[currentColor] py-2.5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0D0D0D] font-medium text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{ '--tw-ring-color': COLORS.ACCENT_COLOR }}
                      className="border-gray-300 focus:border-[currentColor] focus:ring-[currentColor] resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <div className="flex justify-center pt-1">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={handleCaptchaChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-4 text-base font-semibold tracking-wide rounded-lg transition-all"
                    style={{ 
                      backgroundColor: COLORS.ACCENT_COLOR, 
                      borderColor: COLORS.ACCENT_COLOR 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR_HOVER;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR;
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin inline" />
                        Envoi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 inline" />
                        Envoyer
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Map Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-500 mb-3">
                Emplacement
              </h3>
              <p className="text-gray-600 text-sm">10 – 12 rue Mathurin Régnier, 75015 Paris</p>
            </div>
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9747391667996!2d2.2903743!3d48.8479287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a7b6e3e5e5f%3A0x5e0e0e0e0e0e0e0!2s10%20Rue%20Mathurin%20R%C3%A9gnier%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1708444800000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Le Tripot Régnier - 10-12 rue Mathurin Régnier 75015 Paris"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 text-left group hover:shadow-lg transition-shadow duration-300 rounded-lg"
              >
                <div 
                  className="w-14 h-14 bg-[#0D0D0D] flex items-center justify-center mb-4 transition-colors duration-300 rounded-lg"
                  style={{ '--hover-bg': COLORS.ACCENT_COLOR }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D0D0D'}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-medium text-[#0D0D0D] mb-2">{info.title}</h3>
                <p className="text-[#0D0D0D]">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.subContent}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}