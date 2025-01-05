import { Projects } from '@/features/projects/projects';
import { siteConfig } from '@/shared/config/site-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default async function ProjectsPage() {
  return <Projects />;
}
