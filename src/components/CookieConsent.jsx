import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { COLORS } from '@/components/config/colors';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookie_consent', 'refused');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[#0D0D0D] border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-white text-sm leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant, vous acceptez notre{' '}
                <Link to={createPageUrl('PolitiqueConfidentialite')} className="underline" style={{ color: COLORS.ACCENT_COLOR }}>
                  politique de confidentialité
                </Link>.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleRefuse}
                className="px-5 py-2 text-sm text-white/80 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-sm text-white font-medium rounded-lg transition-colors"
                style={{ backgroundColor: COLORS.ACCENT_COLOR }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR_HOVER}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR}
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}