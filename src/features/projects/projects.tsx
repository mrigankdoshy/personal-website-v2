import { CSSProperties } from 'react';

export function Projects() {
  return (
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
        className="group flex animate-fade-in flex-col gap-12"
        style={{ '--index': 2 } as CSSProperties}
      >
        <></>
      </div>
    </div>
  );
}
