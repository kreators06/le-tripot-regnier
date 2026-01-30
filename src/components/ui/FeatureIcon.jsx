import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureIcon({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex flex-col items-start text-left p-6 group"
    >
      <div className="w-16 h-16 bg-[#4A5568]/10 flex items-center justify-center mb-4 group-hover:bg-[#4A5568]/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-[#4A5568]" />
      </div>
      <h3 className="text-[#0D0D0D] font-medium mb-2">{title}</h3>
      {description && (
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}