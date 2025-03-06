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
    <div className="bg-secondary h-1 w-full max-w-[200px] overflow-hidden rounded-full">
      <motion.div
        className="bg-primary h-full rounded-full"
        initial={{ width: 0 }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </div>
  );
}
