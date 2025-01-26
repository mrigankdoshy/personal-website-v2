import { motion } from 'motion/react';
import { ReactNode } from 'react';

type PlayerWrapperProps = { children: ReactNode };

export function PlayerWrapper({ children }: PlayerWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md rounded-lg bg-secondary p-4 text-foreground shadow-lg"
    >
      {children}
    </motion.div>
  );
}
