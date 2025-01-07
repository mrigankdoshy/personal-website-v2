import { cn } from '@/shared/utils/cn';
import { ReactNode } from 'react';

type SectionProps = Readonly<{
  heading: string;
  alignment: 'right' | 'left';
  children: ReactNode;
}>;

export function Section({ heading, alignment, children }: SectionProps) {
  return (
    <section
      className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
      id={heading.toLowerCase().replace(/\s/g, '-')}
    >
      <h2
        className={cn(
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