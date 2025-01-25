import { Cover } from '@/features/spotify/cover';
import { PlaybackControl } from '@/features/spotify/playback-control';
import { Progress } from '@/features/spotify/progress';
import { Track } from '@/features/spotify/track';
import { TrackInfo } from '@/features/spotify/types';

type PlayerProps = TrackInfo | (Partial<TrackInfo> & { isPlaying: false });

export function Player({
  isPlaying,
  progress,
  duration,
  track,
  artist,
  coverUrl,
  url,
}: PlayerProps) {
  const hasTrack = artist !== undefined && track !== undefined;

  return (
    <div className="w-full max-w-md rounded-lg bg-secondary p-4 text-foreground shadow-lg">
      <div className="flex items-center gap-4">
        <Cover coverUrl={coverUrl} />
        <div className="flex flex-grow flex-col justify-between gap-4">
          <div className="flex items-start justify-between">
            <Track track={track} artist={artist} url={url} />
            {hasTrack && <PlaybackControl isPlaying={isPlaying} />}
          </div>
          {isPlaying && <Progress progress={progress} duration={duration} />}
        </div>
      </div>
    </div>
  );
}
