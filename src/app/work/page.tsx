import { Work } from '@/features/work/work';
import { siteConfig } from '@/shared/config/site-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Work | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default async function WorkPage() {
  return <Work />;
}
