'use client';

import { Button } from '@/shared/ui/button';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <FontAwesomeIcon
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        icon={faSun}
      />
      <FontAwesomeIcon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        icon={faMoon}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
