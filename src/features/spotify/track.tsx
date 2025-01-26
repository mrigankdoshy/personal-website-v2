import { Artist } from '@/features/spotify/types';
import { Link } from '@/shared/ui/link';

type TrackProps = {
  track?: string;
  trackUrl?: string;
  artists?: Artist[];
};

export function Track({
  track = 'Not playing',
  trackUrl,
  artists,
}: TrackProps) {
  return (
    <div className="flex flex-col">
      {trackUrl ? (
        <Link
          href={trackUrl}
          className="text-md block truncate font-bold transition-opacity hover:opacity-80"
        >
          {track}
        </Link>
      ) : (
        <span className="text-md truncate font-bold">{track}</span>
      )}
      {artists && artists.length > 0 ? (
        <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
          {artists.map((artist, index) => (
            <span key={artist.url}>
              {index > 0 && ', '}
              <Link href={artist.url} className="hover:underline">
                {artist.name}
              </Link>
            </span>
          ))}
        </div>
      ) : (
        <span className="truncate text-sm text-muted-foreground">Spotify</span>
      )}
    </div>
  );
}
