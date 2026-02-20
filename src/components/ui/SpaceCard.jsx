import React from 'react';
import { motion } from 'framer-motion';

export default function SpaceCard({ title, surface, image, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="group"
    >
      <div className="relative h-96 overflow-hidden mb-6">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="text-left">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-[#0D0D0D] text-xl font-light tracking-wide">{title}</h3>
          {surface && (
            <p className="text-[#ff8c5a] text-sm font-light">{surface}</p>
          )}
        </div>
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed font-light">{description}</p>
        )}
      </div>
    </motion.div>
  );
}