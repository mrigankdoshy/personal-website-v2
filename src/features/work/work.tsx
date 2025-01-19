'use client';

import { workExperiences } from '@/features/work/work-experience';
import { Badge } from '@/shared/ui/badge';
import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';
import { Link } from '@/shared/ui/link';
import { Section } from '@/shared/ui/section';
import { Tag } from '@/shared/ui/tag';

const linkClassName =
  'transform no-underline transition duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-[1.01] w-full border-none bg-transparent p-0 text-left focus:outline-none';

export function Work() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <BlurReveal>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          <BlurRevealContent>Work</BlurRevealContent>
        </h1>
        <p className="text-muted-foreground">
          <BlurRevealContent>
            A glimpse into some places I&apos;ve shaped and grown with.
          </BlurRevealContent>
        </p>
      </BlurReveal>
      <div className="group flex flex-col gap-12">
        {workExperiences.map(
          ({ id, href, description, date, role, company, archived, tags }) => (
            <div key={id} className={linkClassName}>
              <Section heading={date} alignment="left">
                <BlurReveal className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                      <BlurRevealContent>{role}</BlurRevealContent>
                    </h2>
                    <h3 className="tracking-tight text-muted-foreground">
                      <BlurRevealContent className="flex items-center gap-2">
                        <Link href={href}>{company}</Link>
                        {archived && (
                          <Badge
                            variant="outline"
                            className="border-badge/50 text-badge"
                          >
                            Archived
                          </Badge>
                        )}
                      </BlurRevealContent>
                    </h3>
                  </div>
                  <span>
                    <BlurRevealContent>{description}</BlurRevealContent>
                  </span>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {tags.map(({ label, href }) => (
                      <BlurRevealContent key={label}>
                        <Tag label={label} href={href} />
                      </BlurRevealContent>
                    ))}
                  </div>
                </BlurReveal>
              </Section>
            </div>
          )
        )}
      </div>
    </div>
  );
}
