import React from 'react';
import { motion } from 'framer-motion';

export default function SpaceCard({ title, surface, image, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden bg-[#1A1A1A] cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-xl font-light text-white mb-1 tracking-wide">{title}</h3>
            {surface && (
              <p className="text-[#C9A962] text-sm font-medium">{surface}</p>
            )}
          </div>
          <motion.div 
            className="w-10 h-10 rounded-full border border-[#C9A962]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-4 h-4 text-[#C9A962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
        
        {description && (
          <p className="text-gray-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}