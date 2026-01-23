import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ 
  title, 
  subtitle, 
  align = "center",
  light = false 
}) {
  const alignClass = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  }[align];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignClass}`}
    >
      <h2 className={`text-3xl md:text-4xl font-light tracking-wide mb-4 ${light ? 'text-white' : 'text-[#0D0D0D]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`w-20 h-0.5 bg-[#C9A962] mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </motion.div>
  );
}