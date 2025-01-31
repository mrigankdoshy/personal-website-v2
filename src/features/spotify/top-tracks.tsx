import { Cover } from '@/features/spotify/cover';
import { Track } from '@/features/spotify/track';
import { useTopTracks } from '@/features/spotify/use-top-tracks';

export function TopTracks() {
  const { data: tracks } = useTopTracks();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Top Songs</h2>
      <div className="max-h-56 space-y-4 overflow-scroll">
        {tracks?.map((track) => (
          <div key={track.url} className="flex items-center gap-4">
            <Cover coverUrl={track.coverUrl} />
            <Track
              track={track.track}
              trackUrl={track.url}
              artists={track.artists}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
