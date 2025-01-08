import { AboutMe } from '@/features/about/about-me';
import { Connect } from '@/features/about/connect';
import { Gallery } from '@/features/about/gallery';
import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';

export function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <BlurReveal>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          <BlurRevealContent>About</BlurRevealContent>
        </h1>
        <p className="text-muted-foreground">
          <BlurRevealContent>A glimpse into me.</BlurRevealContent>
        </p>
      </BlurReveal>
      <Gallery />
      <AboutMe />
      <Connect />
    </div>
  );
}
