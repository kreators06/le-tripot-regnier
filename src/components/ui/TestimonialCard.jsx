import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ quote, author, company, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-white p-8 relative group hover:shadow-xl transition-shadow duration-500 text-left"
    >
      <Quote className="w-10 h-10 text-[#C9A962]/30 absolute top-6 right-6" />
      
      <p className="text-[#2A2A2A] text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B7355] flex items-center justify-center text-white font-medium">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-[#0D0D0D]">{author}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C9A962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}