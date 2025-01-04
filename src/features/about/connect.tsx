'use client';

import { Section } from '@/features/about/section';
import { Link } from '@/shared/ui/link';
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
  href: string;
  icon: ReactNode;
}>;

const connectLink: ConnectLink[] = [
  {
    label: 'Email',
    href: 'mailto:mrigankdoshy@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mrigankdoshy/',
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/mrigankdoshy',
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mrigankdoshy/',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mrigankdoshy',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/user/0dmta114n09jih8ye0ql93v08',
    icon: <FontAwesomeIcon icon={faSpotify} />,
  },
];

export function Connect() {
  return (
    <Section heading="Connect" alignment="left">
      <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
        {connectLink.map(({ label, icon, href }) => (
          <li key={label} className="col-span-1 transition-opacity">
            <Link
              href={href}
              className="group inline-grid w-full transform rounded-lg bg-secondary p-4 text-foreground no-underline transition duration-200 hover:scale-105 hover:text-foreground"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm">{label}</span>
                </div>
                <FontAwesomeIcon
                  className="-rotate-45 transform transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
