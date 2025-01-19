import { BlurRevealContent } from '@/shared/ui/blur-reveal';
import { Link } from '@/shared/ui/link';
import { TagProps } from '@/shared/ui/tag';
import { ReactNode } from 'react';

type WorkExperience = Readonly<{
  id: string;
  href: string;
  date: string;
  role: string;
  company: string;
  archived?: boolean;
  description: ReactNode;
  tags: TagProps[];
}>;

export const workExperiences: WorkExperience[] = [
  {
    id: 'kcftech',
    href: 'https://kcftech.com',
    date: '2021 - Today',
    role: 'Software Engineer II',
    company: 'KCF Technologies',
    description: (
      <>
        <BlurRevealContent>
          I currently lead the development of a new cross-platform mobile app
          for KCF&apos;s{' '}
          <Link
            href="https://kcftech.com/solutions/smartdiagnostics/"
            underline
            enablePreview
          >
            machine health monitoring platform
          </Link>{' '}
          that delivers real-time machine health insights and streamlines asset
          management. The app supports plant-floor teams with tools for issue
          resolution, hardware installation, and troubleshooting.
        </BlurRevealContent>
        <br />
        <br />
        <BlurRevealContent>
          I also contribute to the web app, building and maintaining key
          features to ensure intuitive and scalable interfaces. Notably, I
          implemented an issue management system to streamline workflows and
          foster collaboration that is now a core offering of the software. I
          also helped develop a unified design system to maintain consistency
          and efficiency across all applications.
        </BlurRevealContent>
      </>
    ),
    tags: [
      { label: 'React', href: 'https://react.dev' },
      { label: 'React Native', href: 'https://reactnative.dev' },
      { label: 'TypeScript', href: 'https://typescriptlang.org' },
      { label: 'Expo', href: 'https://expo.dev' },
      {
        label: 'Native iOS & Android',
        href: 'https://reactnative.dev/docs/turbo-native-modules-introduction',
      },
      { label: 'SCSS', href: 'https://sass-lang.com' },
      {
        label: 'C#',
        href: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
      },
    ],
  },
  {
    id: 'volvo',
    href: 'https://volvotrucks.us',
    date: '2021 - 2021',
    role: 'Software Engineer - Capstone Project',
    company: 'Volvo',
    description: (
      <BlurRevealContent>
        Developed an automated solution to streamline the conversion of 2D
        schematics into 3D CAD models in{' '}
        <Link href="https://ptc.com/en/products/creo/parametric">
          Creo Parametric
        </Link>
        , eliminating manual updates. Also designed an algorithm to optimize
        cable and fuel line routing based on spatial and environmental
        constraints, reducing repetitive engineering processes. The{' '}
        <Link
          href="https://sites.psu.edu/lfshowcasesp21/2021/04/29/routing-productivity-improvement/"
          underline
          enablePreview
        >
          project
        </Link>{' '}
        helped reduce manual effort and enhanced productivity, leading to its
        adoption by Volvo&apos;s internal teams.
      </BlurRevealContent>
    ),
    tags: [
      { label: 'Python', href: 'https://python.org' },
      {
        label: 'Creo Parametric',
        href: 'https://ptc.com/en/products/creo/parametric',
      },
    ],
  },
  {
    id: 'mule',
    href: 'https://themuleapp.com',
    date: '2019 - 2021',
    role: 'Co-Founder and Software Engineer',
    company: 'Mule',
    archived: true,
    description: (
      <>
        <BlurRevealContent>
          Built and launched a peer-to-peer delivery platform, that empowered
          students to be one another&apos;s service providers while efficiently
          managing their time. I designed the UI/UX, developed the{' '}
          <Link
            href="https://apps.apple.com/us/app/mule-delivery/id1554136114"
            underline
            enablePreview
          >
            iOS
          </Link>{' '}
          and{' '}
          <Link
            href="https://play.google.com/store/apps/details?id=com.themuleapp.app"
            underline
            enablePreview
          >
            Android
          </Link>{' '}
          apps, and contributed to the backend development. Some features
          included geolocation, routing, and notifications.
        </BlurRevealContent>
        <br />
        <br />
        <BlurRevealContent>
          As a founder, I played a key role in pitching to investors and venture
          capitalists for pre-seed funding, conducting market research, and
          analyzing data to guide product decisions. My efforts focused on
          validating customer needs, refining the product, and driving its
          strategic growth through technical innovation and market insights.
        </BlurRevealContent>
      </>
    ),
    tags: [
      { label: 'Flutter', href: 'https://flutter.dev' },
      { label: 'Express', href: 'https://expressjs.com' },
      { label: 'MobX', href: 'https://mobx.js.org' },
      { label: 'MongoDB', href: 'https://mongodb.com' },
      { label: 'Firebase', href: 'https://firebase.google.com' },
      {
        label: 'Google Maps Platform',
        href: 'https://mapsplatform.google.com',
      },
    ],
  },
  {
    id: 'blockchainpsu',
    href: 'https://blockchainpsu.com',
    date: '2018 - 2021',
    role: 'Co-Founder',
    company: 'Blockchain@PSU',
    archived: true,
    description: (
      <BlurRevealContent>
        Co-founded and scaled a student-run organization to over 300 members,
        fostering FinTech and blockchain skills through hands-on projects and
        strategic initiatives. Spearheaded partnerships, taught an official
        blockchain course, and established a vibrant blockchain community at{' '}
        <Link href="https://psu.edu" underline enablePreview>
          Penn State
        </Link>
        .
      </BlurRevealContent>
    ),
    tags: [
      { label: 'Blockchain' },
      { label: 'dApps' },
      { label: 'Solidity', href: 'https://soliditylang.org' },
      { label: 'Truffle', href: 'https://archive.trufflesuite.com' },
    ],
  },
];
