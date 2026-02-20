import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ 
  title, 
  subtitle, 
  align = "left",
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
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignClass}`}
    >
      <h2 className={`text-4xl md:text-5xl font-medium tracking-tight mb-6 ${light ? 'text-white' : 'text-[#0D0D0D]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl max-w-2xl font-light ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}