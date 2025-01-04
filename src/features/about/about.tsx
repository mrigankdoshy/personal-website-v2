import { AboutMe } from '@/features/about/about-me';
import { Connect } from '@/features/about/connect';
import { Gallery } from '@/features/about/gallery';

import { CSSProperties } from 'react';

export function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground">
          About
        </h1>
        <p
          className="animate-fade-in text-muted-foreground"
          style={{ '--index': 1 } as CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div
        className="animate-fade-in"
        style={{ '--index': 2 } as CSSProperties}
      >
        <Gallery />
      </div>
      <div
        className="animate-fade-in"
        style={{ '--index': 3 } as CSSProperties}
      >
        <AboutMe />
      </div>
      <div
        className="animate-fade-in"
        style={{ '--index': 4 } as CSSProperties}
      >
        <Connect />
      </div>
    </div>
  );
}
