// ─── MobileCtaBar ─────────────────────────────────────────────────────────────
// Barre d'actions fixe en bas d'écran (mobile uniquement)

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
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
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#0D0D0D] border-t border-white/10 shadow-2xl z-40"
    >
      <div className="p-4 max-w-md mx-auto w-full">
        <Link
          to={createPageUrl('Contact')}
          className="w-full flex items-center justify-center gap-2 px-4 py-3.5 font-semibold text-sm tracking-wide text-white rounded-full transition-all duration-300"
          style={{ backgroundColor: COLORS.ACCENT_COLOR }}
        >
          Faire une demande
        </Link>
      </div>
    </motion.div>
  );
}