import { About } from '@/features/about/about';
import { siteConfig } from '@/shared/config/site-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default async function AboutPage() {
  return <About />;
}
