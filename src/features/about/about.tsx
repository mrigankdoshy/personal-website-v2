'use client';

import { Gallery } from '@/features/about/gallery';
import { Greeting } from '@/features/about/greeting';
import { Section } from '@/features/about/section';
import { CSSProperties } from 'react';

export function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground">
          About
        </h1>
        <p
          className="animate-fade-in text-muted-foreground"
          style={{ '--index': 1 } as CSSProperties}
        >
          A glimpse into my life
        </p>
      </div>

      <Gallery />

      <div
        className="flex animate-fade-in flex-col gap-16 md:gap-24"
        style={{ '--index': 3 } as CSSProperties}
      >
        <Section heading="About" alignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m Mrigank Doshy! Originally from Goa, India,
              I&apos;m now based in the beautiful city of Washington, DC.
            </p>
            <p>
              My curiosity for software began when I was 10, which naturally led
              me to pursue a career in tech. I&apos;ve been designing and
              building a software for {new Date().getFullYear() - 2019} years
              now, for startups, small sized companies and personal projects.
            </p>
            <p>
              While pursuing a double major in Computer Science and Mathematics
              at Penn State, I uncovered my passion for building products and
              bringing them to life. One project I&apos;m particularly proud of
              is co-founding and developing Mule, an iOS and Android app. It
              grew to over 100 users, empowering college students with
              peer-to-peer delivery on their own schedules.
            </p>
            <p>
              I graduated in 2021, ready to turn my ideas into impactful
              solutions. Since then, I&apos;ve been on a journey of crafting
              sustainable and impactful software solutions. From exploring
              blockchain in the FinTech space to creating intuitive and
              high-performing web and mobile applications, I love solving
              complex challenges through innovative solutions.
            </p>
            <p>
              Currently, I&apos;m focused on building sustainable and
              comprehensive machine health centered products at KCF
              Technologies. These days, I primarily work with React and React
              Native, crafting performant and intuitive web and mobile
              applications.
            </p>
            <p>
              I tend to approach things from a physics framework and love
              solving unusual and complex problems. When not working with
              technology, I can be found creating music or binge watching movies
              and shows. :)
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
