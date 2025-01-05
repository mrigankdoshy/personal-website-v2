import { projects } from '@/features/projects/data.json';
import { ProjectCard } from '@/features/projects/project-card';
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
        className="animate-fade-in"
        style={{ '--index': 2 } as CSSProperties}
      >
        <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
          {projects.map(({ id, title, description, url, tags }) => (
            <li key={id} className="col-span-1">
              <ProjectCard
                title={title}
                description={description}
                url={url}
                tags={tags}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
