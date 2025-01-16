import { MouseEvent } from 'react';

export function stopPropagation(event: MouseEvent) {
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
}
