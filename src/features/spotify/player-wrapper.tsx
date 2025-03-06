import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type PlayerWrapperProps = { children: ReactNode };

export function PlayerWrapper({ children }: PlayerWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary/30 text-foreground flex w-full max-w-lg flex-col gap-8 rounded-xl p-6 shadow-md backdrop-blur-md"
    >
      {children}
    </motion.div>
  );
}
