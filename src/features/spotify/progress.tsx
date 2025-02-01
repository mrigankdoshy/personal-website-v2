import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';

type ProgressProps = {
  progress: number;
  duration: number;
};

export function Progress({ progress, duration }: ProgressProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: `${(progress / duration) * 100}%` });
  }, [progress, duration, controls]);

  return (
    <div className="h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-secondary">
      <motion.div
        className="h-full rounded-full bg-primary"
        initial={{ width: 0 }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </div>
  );
}
