import type { Artist } from '@/features/spotify/types';
import { Link } from '@/shared/ui/link';
import { motion } from 'motion/react';

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
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {trackUrl ? (
        <Link
          href={trackUrl}
          className="text-md hover:text-primary line-clamp-1 font-bold transition-all duration-300 hover:opacity-80"
        >
          {track}
        </Link>
      ) : (
        <h2 className="text-md line-clamp-1 font-bold">{track}</h2>
      )}
      {artists && artists.length > 0 ? (
        <div className="text-muted-foreground flex flex-wrap gap-1 text-sm">
          {artists.map((artist, index) => (
            <p key={artist.url}>
              <Link href={artist.url} className="hover:underline">
                {artist.name}
              </Link>
              {index < artists.length - 1 && ','}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground line-clamp-1 text-sm">Spotify</p>
      )}
    </motion.div>
  );
}
