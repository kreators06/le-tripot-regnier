// ─── PageNotFound ─────────────────────────────────────────────────────────────
// Page d'erreur 404 brandée Le Tripot Régnier

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { COLORS } from '@/components/config/colors';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://letripotregnier.fr/assets/logo.png" 
            alt="Le Tripot Régnier" 
            className="h-16 w-auto mx-auto mb-12"
          />
          <h1 className="text-8xl font-light mb-4" style={{ color: COLORS.ACCENT_COLOR }}>404</h1>
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: COLORS.ACCENT_COLOR }} />
          <h2 className="text-2xl font-semibold text-white mb-4">Page introuvable</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/Home"
            className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold text-sm tracking-wide transition-all duration-300 rounded"
            style={{ backgroundColor: COLORS.ACCENT_COLOR }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR_HOVER}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.ACCENT_COLOR}
          >
            <ArrowLeft className="w-4 h-4" />
            RETOUR À L'ACCUEIL
          </Link>
        </motion.div>
      </div>
    </div>
  );
}