'use client';

import { Link } from '@/shared/ui/link';
import { motion, Transition, Variants } from 'framer-motion';
import React from 'react';

const heading = 'Mrigank Doshy.';
const subheading = 'I build intuitive mobile and web apps.';

const transition: Transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

const variants: Variants = {
  hidden: { filter: 'blur(10px)', transform: 'translateY(20%)', opacity: 0 },
  visible: { filter: 'blur(0)', transform: 'translateY(0)', opacity: 1 },
};

export function Home() {
  const headingWords = heading.split(' ');
  const subheadingWords = subheading.split(' ');

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.04 }}
    >
      <h1 className="tracking-tight text-muted-foreground">
        <motion.span
          className="inline-block"
          transition={transition}
          variants={variants}
        >
          Hey there, I&apos;m
        </motion.span>
      </h1>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {headingWords.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < headingWords.length - 1 && ' '}
            </React.Fragment>
          ))}
        </h1>
        <h2 className="text-2xl font-semibold tracking-tight text-secondary-foreground">
          {subheadingWords.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < subheadingWords.length - 1 && ' '}
            </React.Fragment>
          ))}
        </h2>
      </div>

      <motion.p
        className="max-w-lg text-muted-foreground"
        transition={transition}
        variants={variants}
      >
        I&apos;m a software engineer with a passion for developing (and
        occasionally designing) digital experiences. Currently, I&apos;m focused
        on building sustainable and comprehensive machine health centered
        products at{' '}
        <Link href="https://kcftech.com" underline>
          KCF Technologies
        </Link>
        .
      </motion.p>
    </motion.div>
  );
}
