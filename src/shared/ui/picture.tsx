'use client';

import { GlowEffect } from '@/shared/ui/glow-effect';
import { cn } from '@/shared/utils/cn';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useMemo } from 'react';

const ticketingFont = localFont({
  src: '../../../public/fonts/ticketing.woff2',
  display: 'swap',
});

const className = 'absolute h-full w-full rounded-xl overflow-hidden';

const getFilename = (
  src: StaticImageData | string,
  filename?: string
): string =>
  filename ||
  (typeof src !== 'string'
    ? `${src.src.split('/').pop()?.split('.')[0] || ''}.jpg`
    : '');

type PictureProps = Readonly<{
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  filename?: string;
  flipDirection?: 'left' | 'right';
  meta?: ReactNode;
  children?: ReactNode;
}>;

export function Picture({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PictureProps) {
  const fileName = useMemo(() => getFilename(src, filename), [filename, src]);

  return (
    <motion.div
      drag
      className="absolute mx-auto cursor-grab hover:before:absolute hover:before:-left-7 hover:before:-top-8 hover:before:block hover:before:h-[300px] hover:before:w-[calc(100%+55px)]"
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      whileHover="flipped"
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: 'spring',
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
    >
      <motion.div
        className="relative h-full w-full rounded-xl shadow-md will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === 'right' ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <FrontSide src={src} alt={alt} width={width} height={height}>
          {children}
        </FrontSide>
        <BackSide filename={fileName} meta={meta} />
      </motion.div>
    </motion.div>
  );
}

type FrontSideProps = Pick<
  PictureProps,
  'src' | 'alt' | 'width' | 'height' | 'children'
>;

function FrontSide({ src, alt, width, height, children }: FrontSideProps) {
  return (
    <div className={className} style={{ backfaceVisibility: 'hidden' }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-neutral-400 object-cover"
        priority
      />
      {children}
    </div>
  );
}

type BackSideProps = Pick<PictureProps, 'filename' | 'meta'>;

function BackSide({ filename, meta }: BackSideProps) {
  return (
    <div
      className={cn(
        className,
        'flex items-center overflow-hidden rounded-xl bg-[#FFFAF2]'
      )}
      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
    >
      <GlowEffect intensity={50} className="flex items-center">
        <span className="absolute h-[500px] w-[500px] rotate-[-20deg] bg-[url('/images/photo-paper.png')] bg-[length:280px] bg-repeat" />
        <div className="z-[1] px-6">
          <div
            className={cn(
              ticketingFont.className,
              'flex flex-col gap-1 uppercase'
            )}
          >
            <p className="text-secondary">{filename}</p>
            {meta && <p className="text-sm text-secondary">{meta}</p>}
          </div>
        </div>
      </GlowEffect>
    </div>
  );
}
