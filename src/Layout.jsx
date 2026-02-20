import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Histoire', page: 'Histoire' },
  { name: 'Galerie Photos', page: 'Galerie' },
  { name: 'Espaces & Équipements', page: 'Capacites' },
  { name: 'Nos Engagements', page: 'Engagements' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = currentPageName === 'Home';
  const headerBg = isScrolled || !isHome ? 'bg-[#0D0D0D]/95 backdrop-blur-md' : 'bg-transparent';

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #ff8c5a;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0D0D0D;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #ff8c5a;
          border-radius: 4px;
        }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#0D0D0D]/10 transition-all duration-300 group-hover:border-[#ff8c5a] rounded-md">
                <span className="text-[#0D0D0D] font-medium text-xl tracking-wider">TR</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-xs tracking-[0.12em] uppercase transition-colors font-medium ${
                    currentPageName === link.page 
                      ? 'text-[#ff8c5a]' 
                      : 'text-white hover:text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={createPageUrl('Contact')}
                className="px-6 py-2.5 bg-[#ff8c5a] text-white text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#e67a47] transition-all duration-300 rounded-lg"
              >
                CONTACT
              </Link>
            </nav>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0D0D0D] border-t border-white/10"
            >
              <nav className="flex flex-col py-6 px-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.page}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={createPageUrl(link.page)}
                      className={`block py-3 text-lg tracking-wide ${
                        currentPageName === link.page 
                          ? 'text-[#ff8c5a]' 
                          : 'text-white/90'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <Link
                    to={createPageUrl('Contact')}
                    className="block w-full py-3 bg-[#ff8c5a] text-white text-center font-medium tracking-wide rounded-md"
                  >
                    NOUS CONTACTER
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#ff8c5a] flex items-center justify-center rounded-md">
                  <span className="text-white font-bold text-xl">TR</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed text-left">
                Salle événementielle parisienne de 700m² alliant style Art Déco et Industriel.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[#ff8c5a] font-medium mb-6 tracking-wide">Navigation</h4>
              <ul className="space-y-3 text-left">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link 
                      to={createPageUrl(link.page)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#ff8c5a] font-medium mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ff8c5a] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    Paris 15ème arrondissement
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#ff8c5a]" />
                  <a href="tel:+33100000000" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +33 1 00 00 00 00
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#ff8c5a]" />
                  <a href="mailto:contact@tripotregnier.fr" className="text-gray-400 hover:text-white transition-colors text-sm">
                    contact@tripotregnier.fr
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[#ff8c5a] font-medium mb-6 tracking-wide">Suivez-nous</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#ff8c5a] hover:bg-[#ff8c5a]/10 transition-all rounded-md" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#ff8c5a] hover:bg-[#ff8c5a]/10 transition-all rounded-md" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#ff8c5a] hover:bg-[#ff8c5a]/10 transition-all rounded-md" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Le Tripot Régnier. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to={createPageUrl('MentionsLegales')} className="text-gray-500 hover:text-white transition-colors">Mentions légales</Link>
              <Link to={createPageUrl('PolitiqueConfidentialite')} className="text-gray-500 hover:text-white transition-colors">Politique de confidentialité</Link>
              <Link to={createPageUrl('CGU')} className="text-gray-500 hover:text-white transition-colors">CGU</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}