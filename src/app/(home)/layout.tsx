import { ReactNode } from 'react';

type HomeLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return children;
}
