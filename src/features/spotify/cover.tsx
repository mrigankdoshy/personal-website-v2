import { SpotifyLogo } from '@/features/spotify/spotify-logo';
import Image from 'next/image';

type CoverProps = {
  coverUrl?: string;
};

export function Cover({ coverUrl }: CoverProps) {
  return (
    <div className="flex h-16 w-16 shrink-0">
      {coverUrl ? (
        <Image
          priority
          src={coverUrl}
          alt="Album cover"
          height={640}
          width={640}
          quality={100}
          className="h-full w-full rounded-md object-cover shadow-md"
        />
      ) : (
        <div className="bg-secondary flex h-full w-full items-center justify-center rounded-md">
          <SpotifyLogo />
        </div>
      )}
    </div>
  );
}
