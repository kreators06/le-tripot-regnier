import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner({ 
  title = "Venez découvrir le lieu",
  subtitle = "",
  primaryText = "NOUS CONTACTER",
  secondaryText = "Prendre RDV pour une visite",
  variant = "dark"
}) {
  const isDark = variant === "dark";
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`py-24 px-6 ${isDark ? 'bg-[#0D0D0D]' : 'bg-[#F9F9F7]'}`}
    >
      <div className="max-w-5xl mx-auto text-left">
        <motion.h2 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`text-3xl md:text-5xl font-semibold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-[#0D0D0D]'}`}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`text-lg mb-10 font-light ${isDark ? 'text-white/80' : 'text-gray-600'}`}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link 
            to={createPageUrl('Contact')}
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#ff8c5a] text-white font-semibold tracking-tight hover:bg-[#e67a47] transition-all duration-300 rounded hover:shadow-lg"
          >
            {primaryText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link 
            to={createPageUrl('Contact')}
            className={`group inline-flex items-center justify-center gap-3 px-10 py-4 border ${isDark ? 'border-white/20 text-white hover:bg-white/5 hover:border-white/40' : 'border-[#0D0D0D]/20 text-[#0D0D0D] hover:bg-[#0D0D0D]/5'} font-semibold tracking-tight transition-all duration-300 rounded`}
          >
            <Calendar className="w-5 h-5" />
            {secondaryText}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}