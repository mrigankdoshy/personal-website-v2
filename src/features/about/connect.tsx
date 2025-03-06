'use client';

import { Link } from '@/shared/ui/link';
import { Section } from '@/shared/ui/section';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

type ConnectLink = Readonly<{
  label: string;
  subtitle?: string;
  href: string;
  icon: ReactNode;
}>;

const connectLink: ConnectLink[] = [
  {
    label: 'Email',
    subtitle: 'mrigankdoshy@gmail.com',
    href: 'mailto:mrigankdoshy@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    label: 'Instagram',
    subtitle: 'mrigankdoshy',
    href: 'https://instagram.com/mrigankdoshy/',
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    label: 'Twitter',
    subtitle: '@mrigankdoshy',
    href: 'https://twitter.com/mrigankdoshy',
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    label: 'LinkedIn',
    subtitle: 'in/mrigankdoshy',
    href: 'https://linkedin.com/in/mrigankdoshy/',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    label: 'GitHub',
    subtitle: 'mrigankdoshy',
    href: 'https://github.com/mrigankdoshy',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    label: 'Spotify',
    subtitle: 'Mrigank Doshy',
    href: 'https://open.spotify.com/user/0dmta114n09jih8ye0ql93v08',
    icon: <FontAwesomeIcon icon={faSpotify} />,
  },
];

export function Connect() {
  return (
    <Section heading="Connect" alignment="left">
      <ul className="animated-list grid grow grid-cols-1 gap-3 md:grid-cols-2">
        {connectLink.map(({ label, subtitle, icon, href }) => (
          <li key={label} className="col-span-1 transition-opacity">
            <Link
              href={href}
              className="group bg-secondary text-foreground inline-grid w-full transform rounded-lg p-4 no-underline transition duration-200 hover:scale-[1.03]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <div className="flex flex-col">
                    <span className="text-sm">{label}</span>
                    <span className="text-muted-foreground text-xs">
                      {subtitle}
                    </span>
                  </div>
                </div>
                <FontAwesomeIcon
                  className="-rotate-45 transform transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  icon={faArrowRight}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
