import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import SectionTitle from '@/components/ui/SectionTitle';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "LE TRIPOT RÉGNIER",
    subContent: "10-12 rue Mathurin Régnier 75015 PARIS"
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "06.61.06.07.10",
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format"
            alt="Contact Le Tripot Régnier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white font-semibold tracking-wide mb-6"
          >
            Contactez-<span className="text-[#ff8c5a]">nous</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Parlons de votre projet et créons ensemble un événement inoubliable
          </motion.p>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle 
                title="Envoyez-nous un message"
                subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais"
                align="left"
              />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-left shadow-lg"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-medium text-green-800 mb-2">Message envoyé !</h3>
                  <p className="text-green-600">Nous vous répondrons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#0D0D0D]">Nom</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#ff8c5a] focus:ring-[#ff8c5a]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#0D0D0D]">Prénom</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#ff8c5a] focus:ring-[#ff8c5a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#0D0D0D]">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#ff8c5a] focus:ring-[#ff8c5a]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#0D0D0D]">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#ff8c5a] focus:ring-[#ff8c5a]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#0D0D0D]">Société</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#ff8c5a] focus:ring-[#ff8c5a]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#0D0D0D]">Sujet</Label>
                    <Select value={formData.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger className="border-gray-300 focus:border-[#ff8c5a] focus:ring-[#ff8c5a]">
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="devis">Demande de devis</SelectItem>
                        <SelectItem value="visite">Demande de visite</SelectItem>
                        <SelectItem value="showroom">Showroom</SelectItem>
                        <SelectItem value="seminaire">Séminaire</SelectItem>
                        <SelectItem value="cocktail">Cocktail / Soirée</SelectItem>
                        <SelectItem value="diner">Dîner assis</SelectItem>
                        <SelectItem value="conference">Conférence</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0D0D0D]">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-gray-300 focus:border-[#ff8c5a] focus:ring-[#ff8c5a] resize-none"
                      placeholder="Votre message (merci d'indiquer la date de l'événement, les horaires et nombre de personnes)..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff8c5a] hover:bg-[#e67a47] text-white py-6 text-lg font-medium tracking-wide border border-[#ff8c5a] hover:border-[#e67a47] rounded-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Booking Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Google Map */}
              <div>
                <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-6 tracking-wide text-left">
                  Notre <span className="text-[#ff8c5a]">localisation</span>
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2983459088384!2d2.2902854!3d48.8441466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67007a7f7f803%3A0x7a6c7f2a9e9d9f9!2sParis%2015e%20Arrondissement%2C%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Le Tripot Régnier - Location salle Paris 15ème"
                  />
                </div>
              </div>

              {/* Booking Widget Placeholder */}
              <div>
                <h3 className="text-2xl font-semibold text-[#0D0D0D] mb-6 tracking-wide text-left">
                  Réserver <span className="text-[#ff8c5a]">une visite</span>
                </h3>
                <div className="bg-[#F5F5F0] p-8 rounded-lg text-left shadow-md">
                  <div className="w-16 h-16 bg-[#ff8c5a]/20 flex items-center justify-center mb-4 rounded-lg">
                    <Clock className="w-8 h-8 text-[#ff8c5a]" />
                  </div>
                  <h4 className="text-lg font-medium text-[#0D0D0D] mb-2">
                    Module de réservation
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Intégration du widget Joy pour la prise de rendez-vous en ligne
                  </p>
                  <Button
                    className="bg-[#0D0D0D] hover:bg-[#2A2A2A] text-white rounded-md"
                  >
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section - Now below the form */}
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
                <div className="w-14 h-14 bg-[#0D0D0D] flex items-center justify-center mb-4 group-hover:bg-[#ff8c5a] transition-colors duration-300 rounded-lg">
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