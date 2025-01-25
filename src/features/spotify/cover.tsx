import { SpotifyLogo } from '@/features/spotify/spotify-logo';

type CoverProps = {
  coverUrl?: string;
  isPlaying: boolean;
};

export function Cover({ coverUrl, isPlaying }: CoverProps) {
  return (
    <div className="relative h-16 w-16" style={{ display: 'flex' }}>
      {isPlaying && coverUrl ? (
        <picture>
          <img
            src={coverUrl}
            alt="Album cover"
            className="h-full w-full rounded-md object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </picture>
      ) : (
        <div
          className="flex h-full w-full items-center justify-center rounded-md bg-gray-800"
          style={{ display: 'flex' }}
        >
          <SpotifyLogo />
        </div>
      )}
    </div>
  );
}
