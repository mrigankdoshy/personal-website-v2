import { useEffect, useRef, useState } from 'react';

export function useMasonry() {
  const [items, setItems] = useState<ChildNode[]>([]);

  const masonryContainer = useRef<HTMLDivElement | null>(null);

  const elementTop = (el: HTMLElement) =>
    el.getBoundingClientRect().top + window.scrollY;

  const elementBottom = (el: HTMLElement) =>
    el.getBoundingClientRect().bottom + window.scrollY;

  const elementLeft = (el: HTMLElement) => el.getBoundingClientRect().left;

  useEffect(() => {
    if (masonryContainer.current) {
      const masonryItems = Array.from(masonryContainer.current.children);
      setItems(masonryItems);
    }
  }, []);

  useEffect(() => {
    const handleMasonry = () => {
      if (!items || items.length < 1) {
        return;
      }

      let gapSize = 0;

      if (masonryContainer.current) {
        gapSize = parseInt(
          window
            .getComputedStyle(masonryContainer.current)
            .getPropertyValue('grid-row-gap'),
          10
        );
      }

      items.forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        el.style.marginTop = '0';

        let previous = el.previousElementSibling;
        while (previous) {
          if (
            previous instanceof HTMLElement &&
            elementLeft(previous) === elementLeft(el)
          ) {
            el.style.marginTop =
              -(elementTop(el) - elementBottom(previous) - gapSize) + 'px';
            break;
          }
          previous = previous.previousElementSibling;
        }
      });
    };

    handleMasonry();
    window.addEventListener('resize', handleMasonry);

    return () => {
      window.removeEventListener('resize', handleMasonry);
    };
  }, [items]);

  return masonryContainer;
}
