'use client';

import { workExperiences } from '@/features/work/work-experience';
import { Section } from '@/shared/ui/section';
import { Tag } from '@/shared/ui/tag';
import { CSSProperties } from 'react';

const linkClassName =
  'transform no-underline transition duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-[1.01] w-full cursor-pointer border-none bg-transparent p-0 text-left focus:outline-none';

export function Work() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground">
          Work
        </h1>
        <p
          className="animate-fade-in text-muted-foreground"
          style={{ '--index': 1 } as CSSProperties}
        >
          A glimpse into some places I&apos;ve shaped and grown with.
        </p>
      </div>
      <div
        className="group flex animate-fade-in flex-col gap-12"
        style={{ '--index': 2 } as CSSProperties}
      >
        {workExperiences.map(
          ({ id, href, description, date, role, company, tags }) => (
            <button
              key={id}
              onClick={() => window.open(href, '_blank')}
              className={linkClassName}
            >
              <Section heading={date} alignment="left">
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                      {role}
                    </h2>
                    <h3 className="tracking-tight text-muted-foreground">
                      {company}
                    </h3>
                  </div>
                  <p>{description}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {tags.map(({ label, href }) => (
                      <Tag key={label} label={label} href={href} />
                    ))}
                  </div>
                </div>
              </Section>
            </button>
          )
        )}
      </div>
    </div>
  );
}
