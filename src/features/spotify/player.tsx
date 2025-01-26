'use client';

import { Cover } from '@/features/spotify/cover';
import { PlaybackControl } from '@/features/spotify/playback-control';
import { PlayerWrapper } from '@/features/spotify/player-wrapper';
import { Progress } from '@/features/spotify/progress';
import { Track } from '@/features/spotify/track';
import { useNowPlaying } from '@/features/spotify/use-now-playing';

export function Player() {
  const { data, isLoading, error } = useNowPlaying();

  if (isLoading) {
    return <PlayerWrapper>Loading...</PlayerWrapper>;
  }

  if (error) {
    return <PlayerWrapper> Error: {(error as Error).message}</PlayerWrapper>;
  }

  if (!data) {
    return <PlayerWrapper>No data available</PlayerWrapper>;
  }

  const { isPlaying, progress, duration, track, artists, coverUrl, url } = data;

  const hasTrack = track !== undefined && artists !== undefined;

  return (
    <PlayerWrapper>
      <div className="flex items-center gap-4">
        <Cover coverUrl={coverUrl} />
        <div className="flex flex-grow flex-col justify-between gap-4">
          <div className="flex items-start justify-between">
            <Track track={track} trackUrl={url} artists={artists} />
            {hasTrack && <PlaybackControl isPlaying={isPlaying} />}
          </div>
          {isPlaying && <Progress progress={progress} duration={duration} />}
        </div>
      </div>
    </PlayerWrapper>
  );
}
