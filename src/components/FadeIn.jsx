// ─── FadeIn ───────────────────────────────────────────────────────────────────
// Wrapper d'animation au scroll — se déclenche une seule fois, sans saccade
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const ref = useRef(null);
  // margin négatif : l'élément doit être visible d'au moins 1px avant de se déclencher
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
    x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
  };

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}