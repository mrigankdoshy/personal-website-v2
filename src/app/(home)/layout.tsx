import { ReactNode } from 'react';

type LandingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function LandingLayout({ children }: LandingLayoutProps) {
  return <main className="mx-auto flex-1 overflow-hidden">{children}</main>;
}
