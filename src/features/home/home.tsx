import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';
import { Link } from '@/shared/ui/link';
import { Fragment } from 'react';

const heading = 'Mrigank Doshy.';
const subheading = 'I build intuitive mobile and web apps.';

export function Home() {
  const headingWords = heading.split(' ');
  const subheadingWords = subheading.split(' ');

  return (
    <BlurReveal className="flex flex-col gap-4">
      <p className="tracking-tight text-muted-foreground">
        <BlurRevealContent>Hey there, I&apos;m</BlurRevealContent>
      </p>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {headingWords.map((word, index) => (
            <Fragment key={index}>
              <BlurRevealContent>{word}</BlurRevealContent>
              {index < headingWords.length - 1 && ' '}
            </Fragment>
          ))}
        </h1>
        <h2 className="inline-block text-2xl font-semibold tracking-tight text-secondary-foreground">
          {subheadingWords.map((word, index) => (
            <Fragment key={index}>
              <BlurRevealContent>{word}</BlurRevealContent>
              {index < subheadingWords.length - 1 && ' '}
            </Fragment>
          ))}
        </h2>
      </div>
      <span className="max-w-lg text-muted-foreground">
        <BlurRevealContent>
          I&apos;m a software engineer with a passion for developing (and
          occasionally designing) digital experiences. Currently, I&apos;m
          focused on building sustainable and comprehensive machine health
          centered products at{' '}
          <Link href="https://kcftech.com" underline enablePreview>
            KCF Technologies
          </Link>
          .
        </BlurRevealContent>
      </span>
    </BlurReveal>
  );
}
