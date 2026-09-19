import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';

type ProgressProps = {
  progress: number;
  duration: number;
};

export function Progress({ progress, duration }: ProgressProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (duration <= 0) {
      return;
    }

    controls.set({ width: `${Math.min(progress / duration, 1) * 100}%` });

    controls.start({
      width: '100%',
      transition: {
        duration: Math.max(duration - progress, 0) / 1000,
        ease: 'linear',
      },
    });
  }, [progress, duration, controls]);

  return (
    <div className="bg-secondary h-1 w-full max-w-50 overflow-hidden rounded-full">
      <motion.div
        className="bg-primary h-full rounded-full"
        initial={{ width: 0 }}
        animate={controls}
      />
    </div>
  );
}
