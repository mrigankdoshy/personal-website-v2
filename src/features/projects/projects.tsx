'use client';

import { projects } from '@/features/projects/data';
import { ProjectCard } from '@/features/projects/project-card';
import { useMasonry } from '@/features/projects/useMasonry';
import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';
import { RainbowButton } from '@/shared/ui/rainbow-button';
import { useMediaQuery } from '@/shared/utils/use-media-query';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';

export function Projects() {
  const masonryContainer = useMasonry();
  const isSmallScreen = useMediaQuery(640);

  const [showAll, setShowAll] = useState(false);

  const projectsToDisplay = useMemo(
    () => (!isSmallScreen || showAll ? projects : projects.slice(0, 6)),
    [isSmallScreen, showAll]
  );

  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <div className="flex flex-col gap-16 md:gap-24">
        <BlurReveal>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            <BlurRevealContent>Things I&apos;ve built</BlurRevealContent>
          </h1>
          <p className="text-muted-foreground">
            <BlurRevealContent>
              Some highlights from my journey of building and creating.
            </BlurRevealContent>
          </p>
        </BlurReveal>
        <div
          ref={masonryContainer}
          className="grid items-start gap-4 sm:grid-cols-2 md:gap-6"
        >
          <AnimatePresence>
            {projectsToDisplay.map(
              ({ id, title, description, url, tags }, index) => (
                <motion.div
                  key={id}
                  className="col-span-1"
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      type: 'spring',
                      duration: 0.3,
                      stiffness: 100,
                      delay: index * 0.1,
                    },
                  }}
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  exit={{ opacity: 0, x: -10, y: -10 }}
                >
                  <ProjectCard
                    title={title}
                    description={description}
                    url={url}
                    tags={tags}
                  />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
      {isSmallScreen && (
        <div className="self-center">
          <RainbowButton onClick={() => setShowAll((current) => !current)}>
            {showAll ? 'Show Less' : 'Show More'}
          </RainbowButton>
        </div>
      )}
    </div>
  );
}
