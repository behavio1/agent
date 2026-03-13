'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function HeroReksio() {
  const [isWagging, setIsWagging] = useState(false);

  // A playful animation variants for Reksio's body
  const bodyVariants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
    excited: {
      y: [0, -20, 0],
      transition: {
        duration: 0.4,
        repeat: 2,
        ease: 'easeInOut' as const,
      },
    },
  };

  // Tail wagging animation
  const tailVariants = {
    idle: { rotate: 0 },
    wagging: {
      rotate: [0, 20, -10, 20, -10, 0],
      transition: { duration: 0.3, repeat: 3 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 select-none">
      <motion.button
        type="button"
        aria-label="Reksio"
        className="relative flex items-center justify-center min-w-[200px] min-h-[200px] touch-manipulation focus:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-3xl"
        onClick={() => setIsWagging(true)}
        onAnimationComplete={() => setIsWagging(false)}
        whileHover="excited"
        whileTap={{ scale: 0.95 }}
        variants={bodyVariants}
        initial="idle"
        animate={isWagging ? 'excited' : 'idle'}
      >
        {/* Simple stylized SVG for the dog character */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Body */}
          <rect x="50" y="80" width="100" height="80" rx="30" fill="#FDE047" stroke="#A16207" strokeWidth="8" />
          {/* Head */}
          <circle cx="150" cy="70" r="45" fill="#FDE047" stroke="#A16207" strokeWidth="8" />
          {/* Ear */}
          <ellipse cx="155" cy="40" rx="15" ry="30" fill="#CA8A04" stroke="#A16207" strokeWidth="8" transform="rotate(20 155 40)" />
          {/* Eye */}
          <circle cx="165" cy="60" r="8" fill="#1F2937" />
          {/* Nose */}
          <circle cx="190" cy="75" r="10" fill="#1F2937" />
          {/* Smile */}
          <path d="M 160 95 Q 175 105 185 90" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" fill="transparent" />
          
          {/* Tail */}
          <motion.g variants={tailVariants} animate={isWagging ? 'wagging' : 'idle'} style={{ transformOrigin: "50px 90px" }}>
            <path d="M 50 90 Q 20 70 10 100" stroke="#FDE047" strokeWidth="15" strokeLinecap="round" fill="transparent" />
            <path d="M 50 90 Q 20 70 10 100" stroke="#A16207" strokeWidth="8" strokeLinecap="round" fill="transparent" />
            <path d="M 50 90 Q 20 70 10 100" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" fill="transparent" />
          </motion.g>

          {/* Legs */}
          <rect x="65" y="160" width="15" height="30" rx="7.5" fill="#CA8A04" stroke="#A16207" strokeWidth="6" />
          <rect x="120" y="160" width="15" height="30" rx="7.5" fill="#CA8A04" stroke="#A16207" strokeWidth="6" />
        </svg>
      </motion.button>
      
      <p className="mt-6 text-2xl font-bold text-slate-800 text-center bg-white/50 px-6 py-3 rounded-2xl shadow-sm backdrop-blur-sm">
        Cześć! Jestem Reksio!
      </p>
    </div>
  );
}
