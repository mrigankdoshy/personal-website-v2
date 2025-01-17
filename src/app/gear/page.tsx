import { Gear } from '@/features/gear/gear';
import { siteConfig } from '@/shared/config/site-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Gear | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default async function GearPage() {
  return <Gear />;
}
