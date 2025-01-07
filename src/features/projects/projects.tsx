'use client';

import { projects } from '@/features/projects/data.json';
import { ProjectCard } from '@/features/projects/project-card';
import { useMasonry } from '@/features/projects/useMasonry';
import { Button } from '@/shared/ui/button';
import { useMediaQuery } from '@/shared/utils/use-media-query';
import { AnimatePresence, motion } from 'framer-motion';
import { CSSProperties, useMemo, useState } from 'react';

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
        <div>
          <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground">
            Things I&apos;ve built
          </h1>
          <p
            className="animate-fade-in text-muted-foreground"
            style={{ '--index': 1 } as CSSProperties}
          >
            Some highlights from my journey of building and creating.
          </p>
        </div>
        <div
          ref={masonryContainer}
          className="grid animate-fade-in items-start gap-4 sm:grid-cols-2 md:gap-6"
          style={{ '--index': 2 } as CSSProperties}
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
        <div
          className="animate-fade-in self-center"
          style={{ '--index': 3 } as CSSProperties}
        >
          <Button
            variant="secondary"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </div>
  );
}
