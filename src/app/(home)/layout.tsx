import { ReactNode } from 'react';

type LandingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <main className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
      {children}
    </main>
  );
}
