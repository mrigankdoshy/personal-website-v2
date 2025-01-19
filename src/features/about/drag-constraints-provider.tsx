'use client';

import { createContext, ReactNode, RefObject, useContext, useRef } from 'react';

const DragConstraintsContext = createContext<RefObject<HTMLDivElement> | null>(
  null
);

type DragConstraintsProviderProps = Readonly<{
  children: ReactNode;
}>;

export function DragConstraintsProvider({
  children,
}: DragConstraintsProviderProps) {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <DragConstraintsContext.Provider
      value={constraintsRef as RefObject<HTMLDivElement>}
    >
      <div
        ref={constraintsRef}
        style={{ position: 'relative', width: '100%', height: '100%' }}
      >
        {children}
      </div>
    </DragConstraintsContext.Provider>
  );
}

export function useDragConstraints() {
  const context = useContext(DragConstraintsContext);

  if (!context) {
    throw new Error(
      'useDragConstraints must be used within a DragConstraintsProvider'
    );
  }

  return context;
}
