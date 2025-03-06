import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';
import { cn } from '@/shared/utils/cn';
import { ReactNode } from 'react';

type SectionProps = Readonly<{
  heading: string;
  alignment: 'right' | 'left';
  children: ReactNode;
}>;

export function Section({ heading, alignment, children }: SectionProps) {
  return (
    <BlurReveal>
      <section
        className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
        id={heading.toLowerCase().replace(/\s/g, '-')}
      >
        <h2
          className={cn(
            'text-muted-foreground shrink-0 md:w-32',
            alignment === 'right' && 'md:text-right'
          )}
        >
          <BlurRevealContent>{heading}</BlurRevealContent>
        </h2>
        {children}
      </section>
    </BlurReveal>
  );
}
