'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'bounce' | 'wiggle' | 'spin' | 'pulse';

interface InteractiveObjectProps {
  children: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  animationType?: AnimationType;
  className?: string;
}

export function InteractiveObject({
  children,
  onClick,
  ariaLabel,
  animationType = 'bounce',
  className = '',
}: InteractiveObjectProps) {
  const getVariants = () => {
    switch (animationType) {
      case 'wiggle':
        return {
          hover: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } },
          tap: { scale: 0.9 },
          rest: { rotate: 0 }
        };
      case 'spin':
        return {
          hover: { rotate: 360, transition: { duration: 0.8 } },
          tap: { scale: 0.9 },
          rest: { rotate: 0 }
        };
      case 'pulse':
        return {
          hover: { scale: 1.1, transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 0.3 } },
          tap: { scale: 0.9 },
          rest: { scale: 1 }
        };
      case 'bounce':
      default:
        return {
          hover: { y: -10, transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 0.4 } },
          tap: { scale: 0.9, y: 0 },
          rest: { y: 0, scale: 1 }
        };
    }
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`min-w-[48px] min-h-[48px] p-2 flex items-center justify-center touch-manipulation focus:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-2xl ${className}`}
      whileHover="hover"
      whileTap="tap"
      variants={getVariants()}
      initial="rest"
    >
      {children}
    </motion.button>
  );
}
