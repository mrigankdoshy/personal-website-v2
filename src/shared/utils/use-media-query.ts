import { useCallback, useEffect, useState } from 'react';

export function useMediaQuery(width: number): boolean {
  const media = window.matchMedia(`(max-width: ${width}px)`);

  const [targetReached, setTargetReached] = useState<boolean>(media.matches);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    media.addEventListener('change', updateTarget);

    return () => {
      media.removeEventListener('change', updateTarget);
    };
  }, [updateTarget, media]);

  return targetReached;
}
