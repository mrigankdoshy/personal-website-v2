import { Cover } from '@/features/spotify/cover';
import { PlaybackControl } from '@/features/spotify/playback-control';
import { Progress } from '@/features/spotify/progress';
import type { TrackInfo } from '@/features/spotify/spotify';
import { Track } from '@/features/spotify/track';

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
  if (isPlaying) {
    return (
      <div className="mx-auto w-full max-w-md rounded-lg bg-gray-900 p-4 text-white shadow-lg">
        <div className="flex items-center space-x-4">
          <Cover isPlaying={isPlaying} coverUrl={coverUrl} />
          <div className="flex-grow">
            <Track track={track} artist={artist} url={url} />
            <div className="mt-2 flex items-center justify-between">
              <PlaybackControl isPlaying={isPlaying} />
              <Progress progress={progress} duration={duration} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-gray-900 p-4 text-white shadow-lg">
      <div className="flex items-center gap-8">
        <Cover isPlaying={isPlaying} />
        <span>Not Playing - Spotify</span>
      </div>
    </div>
  );
}
