import { SpotifyLogo } from '@/features/spotify/spotify-logo';
import Image from 'next/image';

type CoverProps = {
  coverUrl?: string;
  isPlaying: boolean;
};

export function Cover({ coverUrl, isPlaying }: CoverProps) {
  return (
    <div className="relative h-16 w-16">
      {isPlaying && coverUrl ? (
        <Image
          src={coverUrl}
          alt="Album cover"
          height={64}
          width={64}
          className="h-full w-full rounded-md object-cover shadow-md"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-md">
          <SpotifyLogo />
        </div>
      )}
    </div>
  );
}
