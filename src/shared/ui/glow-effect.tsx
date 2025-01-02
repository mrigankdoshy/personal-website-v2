'use client';

import { useMousePosition } from '@/shared/utils/use-mouse-position';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';

type GlowEffectProps = Readonly<{
  /**
   * Content to render within the glow effect
   */
  children: ReactNode;
  /**
   * Additional className for customization
   */
  className?: string;
  /**
   * Size of the glow effect in pixels (width and height)
   */
  size?: number;
  /**
   * Intensity of the glow effect (0-100)
   */
  intensity?: number;
}>;

/**
 * A wrapper component that creates a dynamic, interactive glow effect around
 * its children. The effect tracks the mouse position and adjusts
 * accordingly, providing a visually engaging hover animation.
 */
export function GlowEffect({
  children,
  className,
  size = 600,
  intensity = 10,
}: GlowEffectProps) {
  const { x, y } = useMousePosition();
  const offset = size / 2;

  // Determine if the current device is a mobile device
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  return (
    <motion.div
      className={clsx('relative h-full w-full overflow-hidden', className)}
      whileHover="hover"
    >
      <motion.div
        style={
          {
            '--x': `${x ? x - offset : -offset}px`,
            '--y': `${y ? y - offset : -offset}px`,
            width: size,
            height: size,
            background:
              'radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)',
          } as CSSProperties
        }
        className="pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity"
        variants={{
          hover: {
            opacity: isMobile ? 0 : intensity / 100,
          },
        }}
      />
      {children}
    </motion.div>
  );
}
