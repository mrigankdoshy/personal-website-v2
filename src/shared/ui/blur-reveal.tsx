'use client';

import { motion, Transition, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const transition: Transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

const variants: Variants = {
  hidden: { filter: 'blur(10px)', transform: 'translateY(20%)', opacity: 0 },
  visible: { filter: 'blur(0)', transform: 'translateY(0)', opacity: 1 },
};

type BlurRevealProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function BlurReveal({ children, className }: BlurRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.04 }}
    >
      {children}
    </motion.div>
  );
}

export function BlurRevealContent({ children, className }: BlurRevealProps) {
  return (
    <motion.span
      className={className}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.span>
  );
}
