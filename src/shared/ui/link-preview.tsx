'use client';

import { stopPropagation } from '@/shared/utils/stop-propogation';
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'motion/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';

type LinkPreviewProps = Readonly<{
  children: ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
}>;

export function LinkPreview({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = 'fixed',
}: LinkPreviewProps) {
  const isExternal = !url.startsWith('/');

  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  const src = `https://api.microlink.io/?${new URLSearchParams({
    url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    colorScheme: 'dark',
    'viewport.isMobile': 'true',
    'viewport.deviceScaleFactor': '1',
    'viewport.width': (width * 3).toString(),
    'viewport.height': (height * 3).toString(),
  })}`;

  const handleMouseMove = (event: MouseEvent) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const offsetFromCenter =
      (event.clientX - targetRect.left - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority
            alt="hidden image for preloading"
          />
        </div>
      )}

      <HoverCard
        open={isOpen}
        openDelay={50}
        closeDelay={100}
        onOpenChange={setIsOpen}
      >
        <HoverCardTrigger asChild onMouseMove={handleMouseMove}>
          <NextLink
            href={url}
            className={className}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            onClick={stopPropagation}
          >
            {children}
          </NextLink>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent side="top" align="center" sideOffset={10}>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 260, damping: 20 },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  className="rounded-lg shadow-xl"
                  style={{ x: translateX }}
                >
                  <NextLink
                    href={url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: 0 }}
                    className="block rounded-lg border-2 border-border bg-card shadow transition-colors hover:border-muted dark:bg-card dark:hover:border-muted-foreground"
                    onClick={stopPropagation}
                  >
                    <Image
                      priority
                      src={src}
                      width={width}
                      height={height}
                      quality={quality}
                      layout={layout}
                      className="rounded-md"
                      alt="Preview Image"
                    />
                  </NextLink>
                </motion.div>
              )}
            </AnimatePresence>
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </>
  );
}
