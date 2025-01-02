'use client';

import { Picture } from '@/shared/ui/picture';
import Image from 'next/image';
import me from 'public/images/me.jpg';

// TODO: Replace images
export function Gallery() {
  return (
    <div className="relative">
      {/* Mobile view */}
      <div className="mb-8 md:hidden">
        <div
          className="animate-fade-in"
          style={{ '--index': 1 } as React.CSSProperties}
        >
          <Image
            src={me}
            alt="Mrigank"
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>
        <div
          className="animate-fade-in"
          style={{ '--index': 2 } as React.CSSProperties}
        >
          <Image
            src={me}
            alt="Mrigank"
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>

      {/* Desktop view */}
      <section className="relative hidden h-[268px] gap-4 md:flex">
        <Picture
          src={me}
          meta="2021-07-12"
          alt="Mrigank"
          width={324}
          height={239}
          rotate={-6}
          left={-56}
          index={1}
        />
        <Picture
          src={me}
          meta="2017-07-04"
          alt="Mrigank"
          width={230}
          height={250}
          rotate={6.3}
          left={160}
          index={2}
          flipDirection="left"
        />
        <Picture
          src={me}
          meta="2021-05-20"
          alt="Mrigank"
          width={280}
          height={235}
          rotate={-5.4}
          left={280}
          index={3}
        />
        <Picture
          src={me}
          meta="2022-09-10"
          alt="Mrigank"
          width={220}
          height={260}
          rotate={7.6}
          left={500}
          index={4}
          flipDirection="left"
        />
      </section>
    </div>
  );
}
