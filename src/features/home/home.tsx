import { Link } from '@/shared/ui/link';
import { CSSProperties } from 'react';

export async function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-fade-in tracking-tight text-muted-foreground">
            Hey there, I&apos;m
          </h1>
          <div className="space-y-2">
            <h1
              className="animate-fade-in text-3xl font-semibold tracking-tight text-foreground"
              style={{ '--index': 1 } as CSSProperties}
            >
              Mrigank Doshy.
            </h1>
            <h1
              className="animate-fade-in text-2xl font-semibold tracking-tight text-secondary-foreground"
              style={{ '--index': 2 } as CSSProperties}
            >
              I build intuitive mobile and web apps.
            </h1>
          </div>
          <p
            className="max-w-lg animate-fade-in text-muted-foreground"
            style={{ '--index': 3 } as CSSProperties}
          >
            I&apos;m a software engineer with a passion for developing (and
            occasionally designing) digital experiences. Currently, I&apos;m
            focused on building sustainable and comprehensive machine health
            centered products at{' '}
            <Link href="https://kcftech.com" underline>
              KCF Technologies
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
