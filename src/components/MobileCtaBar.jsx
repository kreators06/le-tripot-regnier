// ─── MobileCtaBar ─────────────────────────────────────────────────────────────
// Barre d'actions fixe en bas d'écran (mobile uniquement)

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calendar, FileText } from 'lucide-react';
import { COLORS } from '@/components/config/colors';

export default function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-2xl z-40"
    >
      <div className="flex gap-3 p-4 max-w-md mx-auto w-full">
        <Link
          to={createPageUrl('Contact')}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm tracking-wide text-white transition-all duration-300"
          style={{ backgroundColor: COLORS.ACCENT_COLOR }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <Calendar className="w-4 h-4" />
          <span>Disponibilité</span>
        </Link>
        
        <button
          onClick={() => window.print()}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm tracking-wide text-[#0D0D0D] border border-gray-300 transition-all duration-300 hover:bg-gray-50"
        >
          <FileText className="w-4 h-4" />
          <span>Fiche</span>
        </button>
      </div>
    </motion.div>
  );
}