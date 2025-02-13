import { Home } from '@/features/home/home';
import { siteConfig } from '@/shared/config/site-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function HomePage() {
  return <Home />;
}
