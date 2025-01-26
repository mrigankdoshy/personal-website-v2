import { Cover } from '@/features/spotify/cover';
import { Track } from '@/features/spotify/track';
import { useRecentlyPlayed } from '@/features/spotify/use-recently-played';
import { formatDistanceToNow } from 'date-fns';

const formatPlayedAt = (playedAt: string): string => {
  const date = new Date(playedAt);
  return formatDistanceToNow(date, { addSuffix: true });
};

export function RecentlyPlayed() {
  const { data: tracks } = useRecentlyPlayed();

  const recentlyPlayed = [
    ...new Map(tracks?.map((track) => [track['url'], track])).values(),
  ].slice(0, 5);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recently Played</h2>
      {recentlyPlayed?.map((track) => (
        <div key={track.url} className="flex items-center gap-4">
          <Cover coverUrl={track.coverUrl} />
          <div className="flex-grow">
            <Track
              track={track.track}
              trackUrl={track.url}
              artists={track.artists}
            />
            <p className="text-xs text-muted-foreground">
              {formatPlayedAt(track.playedAt)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
