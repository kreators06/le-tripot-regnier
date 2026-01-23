import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner({ 
  title = "Venez découvrir le lieu",
  subtitle = "",
  primaryText = "Demander un devis",
  secondaryText = "Prendre RDV pour une visite",
  variant = "dark"
}) {
  const isDark = variant === "dark";
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`py-20 px-6 ${isDark ? 'bg-[#0D0D0D]' : 'bg-[#F5F5F0]'}`}
    >
      <div className="max-w-4xl mx-auto text-left">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl md:text-4xl font-semibold tracking-wide mb-4 ${isDark ? 'text-white' : 'text-[#0D0D0D]'}`}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link 
            to={createPageUrl('Contact')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0D0D0D] font-medium tracking-wide hover:bg-[#D4B872] transition-all duration-300"
          >
            {primaryText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to={createPageUrl('Contact')}
            className={`group inline-flex items-center justify-center gap-2 px-8 py-4 border ${isDark ? 'border-white/30 text-white hover:bg-white/10' : 'border-[#0D0D0D]/30 text-[#0D0D0D] hover:bg-[#0D0D0D]/5'} font-medium tracking-wide transition-all duration-300`}
          >
            <Calendar className="w-4 h-4" />
            {secondaryText}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}