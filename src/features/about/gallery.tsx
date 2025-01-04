'use client';

import { Picture } from '@/shared/ui/picture';
import Image, { StaticImageData } from 'next/image';
import friends from 'public/images/friends.jpg';
import goa from 'public/images/goa.jpg';
import me from 'public/images/me.jpg';
import pennState from 'public/images/penn-state.jpg';
import { CSSProperties } from 'react';

type ImageProps = Readonly<{
  src: StaticImageData | string;
  alt: string;
  meta: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: 'left' | 'right';
}>;

const images: ImageProps[] = [
  {
    src: me,
    alt: 'Mrigank',
    meta: '2024-08-12',
    width: 324,
    height: 239,
    rotate: -6,
    left: -56,
    index: 1,
  },
  {
    src: pennState,
    alt: 'Penn State',
    meta: '2022-10-22',
    width: 230,
    height: 250,
    rotate: 6.3,
    left: 160,
    index: 2,
    flipDirection: 'left',
  },
  {
    src: goa,
    alt: 'Goa',
    meta: '2022-12-20',
    width: 280,
    height: 235,
    rotate: -5.4,
    left: 300,
    index: 3,
  },
  {
    src: friends,
    alt: 'Friends',
    meta: '2024-08-31',
    width: 220,
    height: 260,
    rotate: 7.6,
    left: 500,
    index: 4,
    flipDirection: 'left',
  },
];

export function Gallery() {
  return (
    <div className="relative">
      {/* Mobile view */}
      <div className="mb-8 md:hidden">
        <div
          className="animate-fade-in"
          style={{ '--index': 1 } as CSSProperties}
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
          style={{ '--index': 2 } as CSSProperties}
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
        {images.map((image, index) => (
          <Picture
            key={index}
            index={image.index}
            src={image.src}
            alt={image.alt}
            meta={image.meta}
            width={image.width}
            height={image.height}
            rotate={image.rotate}
            left={image.left}
            flipDirection={image.flipDirection}
          />
        ))}
      </section>
    </div>
  );
}
