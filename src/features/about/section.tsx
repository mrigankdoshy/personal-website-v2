'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

type Alignment = 'right' | 'left';

type SectionProps = Readonly<{
  heading: string;
  alignment: Alignment;
  children: ReactNode;
}>;

export function Section({ heading, alignment, children }: SectionProps) {
  return (
    <section
      className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
      id={heading.toLowerCase().replace(/\s/g, '-')}
    >
      <h2
        className={clsx(
          'shrink-0 text-muted-foreground md:w-32',
          alignment === 'right' && 'md:text-right'
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
