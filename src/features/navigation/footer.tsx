'use client';

import { Link } from '@/shared/ui/link';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // TODO: Replace with Vercel deployment date
  const lastUpdated = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-[700px] items-center justify-between px-4 py-6 md:px-6">
        <div className="space-y-2 text-center md:text-left">
          <motion.p
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © {currentYear} Mrigank Doshy
          </motion.p>
        </div>
        <Link href="https://github.com/mrigankdoshy/personal-website-v2">
          <motion.p
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faCodeBranch} />
            Updated: {lastUpdated}
          </motion.p>
        </Link>
      </div>
    </motion.footer>
  );
}
