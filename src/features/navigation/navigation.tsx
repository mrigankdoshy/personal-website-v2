'use client';

import { ThemeToggle } from '@/features/theme/theme-toggle';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/experience',
    title: 'Experience',
  },
] as const;

export function Navigation() {
  const pathname = `/${usePathname().split('/')[1]}`;

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                pathname === link.path
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {pathname === link.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 rounded-lg bg-accent"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
